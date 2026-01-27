import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { generateNextSkills, generatePrerequisites, generateRoadmap } from './ai/GeminiBrain';
import { getLayoutedElements } from './utils/layout';

const GameContext = createContext();

const INITIAL_NODES = [
    {
        id: 'root_cs',
        type: 'skill',
        data: { label: 'Computer Science', status: 'conquered', xp: 500, mission: "The Journey Begins" },
        position: { x: 0, y: 0 }
    }
];

export const GameProvider = ({ children }) => {
    const saved = JSON.parse(localStorage.getItem('rpg_save')) || {};
    const [nodes, setNodes, onNodesChange] = useNodesState(saved.nodes || INITIAL_NODES);
    const [edges, setEdges, onEdgesChange] = useEdgesState(saved.edges || []);
    const [userXP, setUserXP] = useState(saved.xp || 0);

    // Progress Calculation
    const totalNodes = nodes.length;
    const conqueredNodes = nodes.filter(n => n.data.status === 'conquered').length;
    const progressPercentage = totalNodes === 0 ? 0 : Math.round((conqueredNodes / totalNodes) * 100);

    useEffect(() => {
        localStorage.setItem('rpg_save', JSON.stringify({ nodes, edges, xp: userXP }));
    }, [nodes, edges, userXP]);

    // --- ACTIONS ---

    // 1. ADD NEW PATH (The "Map from Basics" Feature)
    const addNewPath = async (topicLabel) => {
        console.log("Generating Roadmap for:", topicLabel);

        // 1. Get structured graph from AI
        const mapData = await generateRoadmap(topicLabel);

        const rightMostX = nodes.length > 0 ? Math.max(...nodes.map(n => n.position.x)) : 0;
        const startY = 0;

        // 2. Transform AI data into ReactFlow format
        const newNodes = mapData.nodes.map((n, index) => {
            // Unique ID generation
            const uid = `${n.label.replace(/\s+/g, '_')}_${Date.now()}_${index}`;
            // Map AI ID to Real ID for edges
            n.realId = uid;

            return {
                id: uid,
                type: 'skill',
                data: {
                    label: n.label,
                    mission: n.mission,
                    // Prerequisites are available, Target is locked
                    status: n.type === 'prereq' ? 'available' : 'locked',
                    xp: n.type === 'target' ? 1000 : 200
                },
                position: { x: 0, y: 0 } // Dagre will fix this
            };
        });

        const newEdges = mapData.edges.map(e => {
            const sourceNode = mapData.nodes.find(n => n.id === e.source);
            const targetNode = mapData.nodes.find(n => n.id === e.target);

            if (!sourceNode || !targetNode) return null;

            return {
                id: `e_${sourceNode.realId}_${targetNode.realId}`,
                source: sourceNode.realId,
                target: targetNode.realId,
                animated: true,
                style: { stroke: '#64748b', strokeWidth: 2 }
            };
        }).filter(Boolean);

        // 3. Auto-Layout the new cluster (in memory)
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, newEdges);

        // 4. Shift them to the right of existing nodes
        const shiftedNodes = layoutedNodes.map(n => ({
            ...n,
            position: { x: n.position.x + rightMostX + 400, y: n.position.y }
        }));

        setNodes(nds => [...nds, ...shiftedNodes]);
        setEdges(eds => [...eds, ...layoutedEdges]);
    };

    // 2. TOGGLE SUBTREE
    const toggleSubtree = (nodeId) => {
        const childEdges = edges.filter(e => e.source === nodeId);
        const childIds = childEdges.map(e => e.target);
        if (childIds.length === 0) return;

        const firstChild = nodes.find(n => n.id === childIds[0]);
        const isCollapsing = !firstChild?.hidden;

        const getDescendants = (ids, visited = new Set()) => {
            let descendants = [];
            ids.forEach(id => {
                if (visited.has(id)) return;
                visited.add(id);
                descendants.push(id);
                const children = edges.filter(e => e.source === id).map(e => e.target);
                descendants = [...descendants, ...getDescendants(children, visited)];
            });
            return descendants;
        };

        const allDescendants = getDescendants(childIds);

        setNodes(nds => nds.map(n => {
            if (allDescendants.includes(n.id)) return { ...n, hidden: isCollapsing };
            return n;
        }));

        setEdges(eds => eds.map(e => {
            if (allDescendants.includes(e.source) || allDescendants.includes(e.target)) {
                return { ...e, hidden: isCollapsing };
            }
            return e;
        }));
    };

    // 3. AUTO ORGANIZE
    const autoOrganize = () => {
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges);
        setNodes([...layoutedNodes]);
        setEdges([...layoutedEdges]);
    };

    // 4. SCOUT PREREQUISITES
    const scoutPrerequisites = async (childId) => {
        const childNode = nodes.find(n => n.id === childId);
        if (!childNode) return;
        const prerequisites = await generatePrerequisites(childNode.data.label);
        const baseSpacing = 300;
        const totalWidth = (prerequisites.length - 1) * baseSpacing;
        const startX = childNode.position.x - (totalWidth / 2);
        const newNodes = [];
        const newEdges = [];

        prerequisites.forEach((skill, index) => {
            const newId = skill.label.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_pre_' + Date.now();
            if (nodes.find(n => n.data.label === skill.label)) return;
            newNodes.push({
                id: newId,
                type: 'skill',
                data: { label: skill.label, mission: skill.mission, status: 'available', xp: 100 },
                position: { x: startX + (index * baseSpacing), y: childNode.position.y - 400 }
            });
            newEdges.push({
                id: `e_${newId}_${childId}`,
                source: newId,
                target: childId,
                animated: true,
                style: { stroke: '#94a3b8', strokeWidth: 2, strokeDasharray: '5,5' }
            });
        });
        if (newNodes.length > 0) {
            setNodes(nds => [...nds, ...newNodes]);
            setEdges(eds => [...eds, ...newEdges]);
        }
    };

    // 5. CONQUER NODE
    const conquerNode = (nodeId) => {
        setNodes((currentNodes) => {
            const step1Nodes = currentNodes.map((node) => {
                if (node.id === nodeId) {
                    if (node.data.status === 'locked') return node;
                    return { ...node, data: { ...node.data, status: 'conquered' } };
                }
                return node;
            });
            const conqueredIds = new Set(step1Nodes.filter(n => n.data.status === 'conquered').map(n => n.id));
            return step1Nodes.map(node => {
                if (node.data.status === 'locked') {
                    const parents = edges.filter(e => e.target === node.id).map(e => e.source);
                    const isUnlockable = parents.some(pid => conqueredIds.has(pid));
                    if (isUnlockable) return { ...node, data: { ...node.data, status: 'available' } };
                }
                return node;
            });
        });
        setUserXP(prev => prev + 500);
    };

    // 6. SCOUT NEXT STEPS
    const scoutNextSteps = async (parentId) => {
        const parentNode = nodes.find(n => n.id === parentId);
        if (!parentNode) return;
        const knownSkills = nodes.map(n => n.data.label);
        const nextSkills = await generateNextSkills(parentNode.data.label, knownSkills);
        const baseSpacing = 300;
        const totalWidth = (nextSkills.length - 1) * baseSpacing;
        const startX = parentNode.position.x - (totalWidth / 2);
        const newNodes = [];
        const newEdges = [];
        nextSkills.forEach((skill, index) => {
            const newId = skill.label.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now() + Math.random();
            if (nodes.find(n => n.data.label === skill.label)) return;
            newNodes.push({
                id: newId,
                type: 'skill',
                data: { label: skill.label, mission: skill.mission, status: 'locked', xp: 200 },
                position: { x: startX + (index * baseSpacing), y: parentNode.position.y + 400 }
            });
            newEdges.push({
                id: `e_${parentId}_${newId}`,
                source: parentId,
                target: newId,
                animated: true,
                style: { stroke: '#475569', strokeWidth: 2 }
            });
        });
        if (newNodes.length > 0) {
            setNodes(nds => {
                const readyNodes = newNodes.map(n => ({ ...n, data: { ...n.data, status: 'available' } }));
                return [...nds, ...readyNodes];
            });
            setEdges(eds => [...eds, ...newEdges]);
        }
    };

    // 7. DELETE PATH
    const deletePath = (nodeId) => {
        const getDescendants = (id, currentEdges) => {
            let descendants = [];
            const children = currentEdges.filter(e => e.source === id).map(e => e.target);
            children.forEach(childId => {
                descendants.push(childId);
                descendants = [...descendants, ...getDescendants(childId, currentEdges)];
            });
            return descendants;
        };
        const nodesToRemove = [nodeId, ...getDescendants(nodeId, edges)];
        setNodes(nds => nds.filter(n => !nodesToRemove.includes(n.id)));
        setEdges(eds => eds.filter(e => !nodesToRemove.includes(e.source) && !nodesToRemove.includes(e.target)));
    };

    return (
        <GameContext.Provider value={{
            nodes, edges, onNodesChange, onEdgesChange,
            conquerNode, scoutNextSteps, scoutPrerequisites,
            addNewPath, deletePath, autoOrganize, toggleSubtree,
            userXP, progressPercentage // <--- Added progress
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);