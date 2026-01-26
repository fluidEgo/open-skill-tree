import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { GameProvider, useGame } from './GameContext';
import RPGNode from './nodes/SkillNode';

// --- PERFORMANCE FIX ---
// Define nodeTypes OUTSIDE the component so React doesn't re-create them every frame.
const nodeTypes = { skill: RPGNode };

const GameBoard = () => {
  // Get logic and state from our Game Engine
  const { nodes, edges, onNodesChange, onEdgesChange, userXP, addNewPath } = useGame();

  // Handler for creating a new skill tree
  const handleCreatePath = () => {
    const topic = prompt("Enter a new skill to learn (e.g., Rust, System Design, Pottery):");
    if (topic) {
      addNewPath(topic);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-950 font-sans text-slate-200">

      {/* --- HUD (Heads-Up Display) --- */}
      <div className="fixed top-5 left-5 z-50 flex gap-4">

        {/* 1. XP Status Card */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-slate-900">👑</div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Engineer Level</div>
            <div className="text-xl font-black text-white leading-none">{userXP} XP</div>
          </div>
        </div>

        {/* 2. NEW PATH BUTTON */}
        <button
          onClick={handleCreatePath}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 active:scale-95 border border-blue-400/20"
        >
          <span className="text-lg leading-none font-black">+</span> New Path
        </button>

      </div>

      {/* --- THE INFINITE CANVAS --- */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
      >
        {/* The Grid Background */}
        <Background color="#334155" gap={32} size={1} />

        {/* Navigation Controls */}
        <Controls className="bg-slate-800 border-slate-700 fill-slate-200" />
      </ReactFlow>
    </div>
  );
};

export default function App() {
  return (
    <GameProvider>
      <GameBoard />
    </GameProvider>
  );
}