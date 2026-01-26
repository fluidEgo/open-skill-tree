import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { generateNextSkills } from './ai/GeminiBrain';

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

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem('rpg_save', JSON.stringify({ nodes, edges, xp: userXP }));
    }, [nodes, edges, userXP]);

    // --- ACTIONS ---

    // 1. CONQUER & UNLOCK (Fixed Logic)
    const conquerNode = (nodeId) => {
        setNodes((currentNodes) => {
            // Step A: Mark the target node as conquered
            const step1Nodes = currentNodes.map((node) => {
                if (node.id === nodeId) {
                    if (node.data.status === 'locked') return node;
                    return { ...node, data: { ...node.data, status: 'conquered' } };
                }
                return node;
            });

            // Step B: Immediately calculate which neighbors unlock
            // (This prevents the useEffect loop)
            const conqueredIds = new Set(
                step1Nodes.filter(n => n.data.status === 'conquered').map(n => n.id)
            );

            const finalNodes = step1Nodes.map(node => {
                if (node.data.status === 'locked') {
                    // Find parents of this node
                    const parents = edges.filter(e => e.target === node.id).map(e => e.source);
                    // If any parent is conquered, unlock this node
                    const isUnlockable = parents.some(pid => conqueredIds.has(pid));

                    if (isUnlockable) {
                        return { ...node, data: { ...node.data, status: 'available' } };
                    }
                }
                return node;
            });

            return finalNodes;
        });

        setUserXP(prev => prev + 500);
    };

    // 2. SCOUT (Adaptive Layout)
    const scoutNextSteps = async (parentId) => {
        const parentNode = nodes.find(n => n.id === parentId);
        if (!parentNode) return;

        console.log(`📡 Contacting AI for: ${parentNode.data.label}`);
        const knownSkills = nodes.map(n => n.data.label);

        // Call the Adaptive Brain
        const nextSkills = await generateNextSkills(parentNode.data.label, knownSkills);

        // --- ADAPTIVE LAYOUT ---
        const nodeCount = nextSkills.length;
        const baseSpacing = 300; // Wider spacing for clarity
        const totalWidth = (nodeCount - 1) * baseSpacing;
        const startX = parentNode.position.x - (totalWidth / 2);

        const newNodes = [];
        const newEdges = [];

        nextSkills.forEach((skill, index) => {
            const newId = skill.label.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now() + Math.random();

            if (nodes.find(n => n.data.label === skill.label)) return;

            newNodes.push({
                id: newId,
                type: 'skill',
                data: {
                    label: skill.label,
                    mission: skill.mission,
                    status: 'locked', // Start locked
                    xp: 200
                },
                position: {
                    x: startX + (index * baseSpacing),
                    y: parentNode.position.y + 400 // Drop down 400px
                }
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
            setNodes((nds) => {
                // Automatically unlock these new nodes if parent is conquered
                const readyNodes = newNodes.map(n => ({ ...n, data: { ...n.data, status: 'available' } }));
                return [...nds, ...readyNodes];
            });
            setEdges((eds) => [...eds, ...newEdges]);
        }
    };

    // 3. ADD NEW PATH (Root Node)
    const addNewPath = (topicLabel) => {
        const newId = topicLabel.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now();
        const rightMostX = nodes.length > 0 ? Math.max(...nodes.map(n => n.position.x)) : 0;

        const newNode = {
            id: newId,
            type: 'skill',
            data: {
                label: topicLabel,
                mission: 'Initialize Repository & Hello World',
                status: 'conquered',
                xp: 0
            },
            position: { x: rightMostX + 600, y: 0 }
        };

        setNodes(nds => [...nds, newNode]);
    };

    // 4. RECURSIVE DELETE
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
        <GameContext.Provider value={{ nodes, edges, onNodesChange, onEdgesChange, conquerNode, scoutNextSteps, addNewPath, deletePath, userXP }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);