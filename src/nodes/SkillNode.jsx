import React from 'react';
import { Handle, Position } from 'reactflow';
import { useGame } from '../GameContext';
import { Shield, Lock, Zap, Trash2, History, FoldVertical } from 'lucide-react'; // Added FoldVertical

const RPGNode = ({ id, data }) => {
    const { scoutNextSteps, conquerNode, deletePath, scoutPrerequisites, toggleSubtree } = useGame();

    const isLocked = data.status === 'locked';
    const isConquered = data.status === 'conquered';
    const isAvailable = data.status === 'available';

    // --- STYLES ---
    const baseStyle = "w-64 p-4 rounded-xl border-2 transition-all duration-300 shadow-2xl relative group";
    const variants = {
        locked: "bg-slate-900/90 border-slate-700 text-slate-500 grayscale opacity-80",
        available: "bg-slate-800 border-blue-500 text-blue-100 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer",
        conquered: "bg-gradient-to-br from-yellow-900/80 to-slate-900 border-yellow-500 text-yellow-100 shadow-yellow-900/40"
    };
    const statusColor = isConquered ? "text-yellow-400" : isAvailable ? "text-blue-400" : "text-slate-600";
    const Icon = isConquered ? Shield : isLocked ? Lock : Zap;

    const handleClick = (e) => {
        e.stopPropagation();
        if (isLocked) return;
        if (isAvailable) conquerNode(id);
        if (isConquered) scoutNextSteps(id);
    };

    return (
        <div className={`${baseStyle} ${variants[data.status]}`} onClick={handleClick}>
            {/* --- HANDLES --- */}
            <Handle type="target" position={Position.Top} className="!bg-slate-500 !w-3 !h-3" />
            <Handle type="source" position={Position.Bottom} className="!bg-slate-500 !w-3 !h-3" />

            {/* --- TOP LEFT: Prereqs --- */}
            <button
                onClick={(e) => { e.stopPropagation(); scoutPrerequisites(id); }}
                className="nodrag nopan absolute -top-3 -left-3 bg-indigo-900/90 hover:bg-indigo-600 text-indigo-200 p-1.5 rounded-full border border-indigo-500 z-50 shadow-lg cursor-pointer transition-transform hover:scale-110"
                title="Load Prerequisites"
            >
                <History size={12} />
            </button>

            {/* --- TOP RIGHT: Delete --- */}
            <button
                onClick={(e) => { e.stopPropagation(); if (window.confirm('Abandon this entire skill path?')) deletePath(id); }}
                className="nodrag nopan absolute -top-3 -right-3 bg-red-900/90 hover:bg-red-600 text-red-200 p-1.5 rounded-full border border-red-500 z-50 shadow-lg cursor-pointer transition-transform hover:scale-110"
                title="Prune this branch"
            >
                <Trash2 size={12} />
            </button>

            {/* --- BOTTOM CENTER: Toggle Tree (Collapse/Expand) --- */}
            <button
                onClick={(e) => { e.stopPropagation(); toggleSubtree(id); }}
                className="nodrag nopan absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-700 hover:bg-slate-500 text-slate-200 p-1.5 rounded-full border border-slate-500 z-50 shadow-lg cursor-pointer transition-transform hover:scale-110"
                title="Toggle Branch Visibility"
            >
                <FoldVertical size={12} />
            </button>

            {/* --- HEADER --- */}
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${statusColor}`} />
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">{data.status}</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">{data.xp} XP</div>
            </div>

            {/* --- TITLE --- */}
            <div className="text-white font-bold text-lg leading-tight mb-2 text-shadow-sm">{data.label}</div>

            {/* --- MISSION --- */}
            <div className="mb-3 p-2 bg-black/40 rounded border border-white/10 text-left">
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-1">Current Objective</div>
                <div className="text-xs text-slate-200 leading-relaxed font-mono">{data.mission || "Unknown Anomaly. Scout to identify."}</div>
            </div>

            {/* --- ACTION HINT --- */}
            <div className={`text-[10px] font-bold text-center uppercase tracking-wider py-1 rounded ${isConquered ? 'bg-yellow-500/10 text-yellow-500' : isAvailable ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-800 text-slate-600'}`}>
                {isConquered ? "Click to Scout" : isAvailable ? "Click to Conquer" : "Locked"}
            </div>
        </div>
    );
};

export default RPGNode;