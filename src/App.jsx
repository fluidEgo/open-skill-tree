import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { Terminal, Cpu, Database, Rss, Lock, CheckCircle, ExternalLink } from 'lucide-react';

// --- 1. Custom Node Component (The "Card") ---
const SkillNode = ({ data }) => {
  const statusColor = {
    active: "border-blue-500 bg-slate-900 shadow-blue-500/20",
    locked: "border-slate-700 bg-slate-900 opacity-50",
    mastered: "border-green-500 bg-slate-900 shadow-green-500/20"
  };

  return (
    <div className={`p-4 rounded-xl border-2 w-64 shadow-xl transition-all ${statusColor[data.status]}`}>
      <div className="flex items-center gap-2 mb-3">
        {data.status === 'locked' ? <Lock size={16} className="text-slate-500" /> : <Terminal size={16} className="text-blue-400" />}
        <h3 className="font-bold text-slate-100">{data.label}</h3>
      </div>

      <div className="space-y-2">
        {data.resources.map((res, i) => (
          <a key={i} href={res.url} target="_blank" className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors p-1 rounded hover:bg-slate-800">
            <ExternalLink size={10} />
            {res.title}
          </a>
        ))}
        {data.status === 'locked' && <div className="text-xs text-slate-600 italic">Complete dependencies first</div>}
      </div>
    </div>
  );
};

const nodeTypes = { skill: SkillNode };

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [feed, setFeed] = useState([]);
  const [isPanelOpen, setPanelOpen] = useState(false);

  // --- 2. Fetcher Engine ---
  useEffect(() => {
    // A. Fetch The Tree
    fetch('/data.json') // Reads from public/data.json
      .then(res => res.json())
      .then(json => {
        setNodes(json.nodes.map(n => ({ ...n, type: 'skill' })));
        setEdges(json.edges);
      });

    // B. Fetch The Live Feed
    fetch('/live-feed.json')
      .then(res => res.json())
      .then(data => setFeed(data))
      .catch(err => console.log("Feed not built yet (Run Harvester)"));
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-950 text-slate-200 font-mono">
      {/* The Graph */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#334155" gap={20} />
        <Controls className="bg-slate-800 border-slate-700 fill-slate-200" />
      </ReactFlow>

      {/* --- 3. The Live "Systems" Panel --- */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-slate-900 border-l border-slate-700 transform transition-transform duration-300 z-50 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400">
            <Rss size={20} /> Systems Intelligence
          </h2>
          <div className="space-y-4">
            {feed.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" className="block p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all group">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 group-hover:text-blue-400">
                  {item.source}
                </div>
                <div className="text-sm font-medium text-slate-200 leading-snug">
                  {item.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setPanelOpen(!isPanelOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition-all z-50 flex items-center gap-2"
      >
        {isPanelOpen ? 'Close Feed' : 'Live Signal'}
        {!isPanelOpen && <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span></span>}
      </button>
    </div>
  );
}