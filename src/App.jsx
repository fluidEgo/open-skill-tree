import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { GameProvider, useGame } from './GameContext';
import RPGNode from './nodes/SkillNode';

const nodeTypes = { skill: RPGNode };

const GameBoard = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, userXP, addNewPath, autoOrganize, progressPercentage } = useGame();
  const [loading, setLoading] = useState(false);

  const handleCreatePath = async () => {
    const topic = prompt("Enter a new skill (e.g., 'React', 'Machine Learning'):");
    if (topic) {
      setLoading(true);
      await addNewPath(topic);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-950 font-sans text-slate-200">

      {/* --- HUD --- */}
      <div className="fixed top-5 left-5 z-50 flex gap-4 items-stretch">

        {/* 1. XP Status */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3">
          <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-slate-900">👑</div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Level</div>
            <div className="text-xl font-black text-white leading-none">{userXP} XP</div>
          </div>
        </div>

        {/* 2. PROGRESS BAR (NEW) */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 shadow-xl flex flex-col justify-center gap-1 w-48">
          <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>Map Completion</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-600">
            <div
              className="bg-green-500 h-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* 3. BUTTONS */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleCreatePath}
            disabled={loading}
            className={`px-5 py-2 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center gap-2 border ${loading ? 'bg-slate-700 text-slate-400 border-slate-600' : 'bg-blue-600 hover:bg-blue-500 text-white border-blue-400/20 active:scale-95'}`}
          >
            {loading ? <span className="animate-spin">⏳</span> : <span className="text-lg leading-none font-black">+</span>}
            {loading ? "Constructing..." : "New Path"}
          </button>

          <button
            onClick={autoOrganize}
            className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-lg transition-all border border-slate-600 flex items-center justify-center gap-2"
          >
            🧹 Cleanup
          </button>
        </div>

      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
      >
        <Background color="#334155" gap={32} size={1} />
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