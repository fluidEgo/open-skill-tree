This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    daily-harvest.yml
public/
  data.json
  live-feed.json
  vite.svg
scripts/
  harvest.py
src/
  ai/
    check-models.js
    GeminiBrain.js
  assets/
    react.svg
  nodes/
    SkillNode.jsx
  App.css
  App.jsx
  GameContext.jsx
  index.css
  main.jsx
.gitignore
DEVLOG.md
eslint.config.js
index.html
package.json
postcss.config.js
README.md
repomix-output.xml
requirements.txt
tailwind.config.js
vite.config.js
```

# Files

## File: repomix-output.xml
````xml
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.github/
  workflows/
    daily-harvest.yml
public/
  data.json
  live-feed.json
  vite.svg
scripts/
  harvest.py
src/
  ai/
    check-models.js
    GeminiBrain.js
  assets/
    react.svg
  nodes/
    SkillNode.jsx
  App.css
  App.jsx
  GameContext.jsx
  index.css
  main.jsx
.gitignore
DEVLOG.md
eslint.config.js
index.html
package.json
postcss.config.js
README.md
requirements.txt
tailwind.config.js
vite.config.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="public/data.json">
{
    "nodes": [
        {
            "id": "linux_1",
            "type": "skill",
            "data": {
                "label": "Linux Survival",
                "status": "active",
                "resources": [
                    {
                        "title": "Linux Journey",
                        "url": "https://linuxjourney.com/"
                    }
                ]
            },
            "position": {
                "x": 0,
                "y": 0
            }
        },
        {
            "id": "docker_1",
            "type": "skill",
            "data": {
                "label": "Docker Containers",
                "status": "locked",
                "resources": []
            },
            "position": {
                "x": 0,
                "y": 150
            }
        }
    ],
    "edges": [
        {
            "id": "e1-2",
            "source": "linux_1",
            "target": "docker_1",
            "animated": true
        }
    ]
}
</file>

<file path="public/vite.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
</file>

<file path="src/ai/check-models.js">
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

// Load your .env file
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ No API Key found in .env file!");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listMyModels() {
    console.log(`🔑 Checking models for key: ${apiKey.slice(0, 10)}...`);
    console.log("------------------------------------------------");

    try {
        // 1. Ask Google for the list
        const models = await genAI.getGenerativeModel({ model: "gemini-pro" }).apiKey; // Helper to init
        // Actually, the SDK has a specific manager for this, let's use the fetch direct method to be safe
        // because the SDK wrapper sometimes hides the list method depending on version.

        // We will use the REST API direct approach for maximum reliability in this script
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // 2. Filter only models that generate text (ignore embedding models)
        const available = data.models.filter(m =>
            m.supportedGenerationMethods.includes("generateContent")
        );

        if (available.length === 0) {
            console.log("⚠️  No text-generation models found. Your key might be restricted.");
        } else {
            console.log("✅ YOU HAVE ACCESS TO THESE MODELS:");
            available.forEach(m => {
                // console.log(`- ${m.name.replace('models/', '')}`);
                console.log(`   "${m.name.replace('models/', '')}"`);
            });
            console.log("\n👉 Copy one of the names above into your GeminiBrain.js file.");
        }

    } catch (error) {
        console.error("❌ ERROR CHECKING MODELS:");
        console.error(error.message);
    }
}

listMyModels();
</file>

<file path="src/ai/GeminiBrain.js">
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Use the robust model list (Keep your verified list here)
const MODEL_NAMES = [
    "gemini-2.0-flash",
    "gemini-2.5-flash",
    "gemini-1.5-pro",
    "gemini-pro"
];

async function generateWithFallback(prompt) {
    for (const modelName of MODEL_NAMES) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.warn(`❌ ${modelName} failed. Trying next...`);
        }
    }
    throw new Error("All AI models failed.");
}

async function getSystemIntelligence() {
    try {
        const res = await fetch('/live-feed.json');
        if (!res.ok) return "No live feed.";
        const feed = await res.json();
        return feed.map(f => `[${f.source}] ${f.title}`).slice(0, 8).join('\n'); // Increased context
    } catch (e) {
        return "Standard Curriculum";
    }
}

export async function generateNextSkills(currentSkill, knownSkills) {
    console.log("🧠 Adaptive Brain Activated for:", currentSkill);

    const liveTrends = await getSystemIntelligence();

    const prompt = `
    ACT AS: Senior Curriculum Architect.
    TARGET SKILL: "${currentSkill}"
    USER MASTERY: [${knownSkills.join(', ')}]
    LIVE NEWS: ${liveTrends}

    TASK:
    Analyze the "Scope" of "${currentSkill}".
    1. **IF BROAD** (e.g. "Artificial Intelligence", "Computer Science", "Biology"):
       - Generate **5 to 7** distinct MAJOR SUB-FIELDS.
       - Example: For "AI", return [Machine Learning, Neural Networks, NLP, Computer Vision, Robotics, AI Ethics].
    
    2. **IF NARROW** (e.g. "React Hooks", "Gradient Descent"):
       - Generate **3** specific actionable steps/projects.

    CONSTRAINTS:
    - Use "Live News" to insert 1 "Bleeding Edge" node if relevant.
    - Every "Mission" must be a concrete Engineering/Research task.
    
    OUTPUT JSON FORMAT:
    [
      { "label": "Sub-Field Name", "mission": "Specific Project/Task" },
      ...
    ]
    STRICT JSON ONLY.
  `;

    try {
        const text = await generateWithFallback(prompt);
        console.log("📩 Expansion Size:", JSON.parse(text.replace(/```json|```/g, '')).length, "nodes");
        const cleanJson = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (err) {
        console.error("Brain Error:", err);
        // Fallback: Return 4 generic nodes if AI fails
        return [
            { label: `${currentSkill} Foundations`, mission: `Study core concepts of ${currentSkill}` },
            { label: `${currentSkill} Tools`, mission: `Install standard toolchain for ${currentSkill}` },
            { label: `${currentSkill} Practice`, mission: `Build a starter project` },
            { label: `${currentSkill} Advanced`, mission: `Read a research paper` }
        ];
    }
}
</file>

<file path="src/assets/react.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
</file>

<file path="src/nodes/SkillNode.jsx">
import React from 'react';
import { Handle, Position } from 'reactflow';
// Notice the "../" -> This looks UP one folder to find GameContext
import { useGame } from '../GameContext';
import { Shield, Lock, Zap, Map, Trash2 } from 'lucide-react';

const RPGNode = ({ id, data }) => {
    const { scoutNextSteps, conquerNode, deletePath } = useGame();

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
        <div
            className={`${baseStyle} ${variants[data.status]}`}
            onClick={handleClick}
        >
            {/* --- HANDLES (Connectors) --- */}
            <Handle type="target" position={Position.Top} className="!bg-slate-500 !w-3 !h-3" />
            <Handle type="source" position={Position.Bottom} className="!bg-slate-500 !w-3 !h-3" />

            {/* --- DELETE BUTTON (Only visible on hover) --- */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (confirm('Abandon this entire skill path?')) deletePath(id);
                }}
                className="absolute -top-3 -right-3 bg-red-900/80 hover:bg-red-600 text-red-200 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all border border-red-500 z-50 shadow-lg"
                title="Prune this branch"
            >
                <Trash2 size={12} />
            </button>

            {/* --- HEADER --- */}
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${statusColor}`} />
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                        {data.status}
                    </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                    {data.xp} XP
                </div>
            </div>

            {/* --- TITLE --- */}
            <div className="text-white font-bold text-lg leading-tight mb-2 text-shadow-sm">
                {data.label}
            </div>

            {/* --- MISSION BRIEF --- */}
            <div className="mb-3 p-2 bg-black/40 rounded border border-white/10 text-left">
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-1">
                    Current Objective
                </div>
                <div className="text-xs text-slate-200 leading-relaxed font-mono">
                    {data.mission || "Unknown Anomaly. Scout to identify."}
                </div>
            </div>

            {/* --- ACTION HINT --- */}
            <div className={`text-[10px] font-bold text-center uppercase tracking-wider py-1 rounded ${isConquered ? 'bg-yellow-500/10 text-yellow-500' :
                    isAvailable ? 'bg-blue-600 text-white animate-pulse' :
                        'bg-slate-800 text-slate-600'
                }`}>
                {isConquered ? "Click to Scout" : isAvailable ? "Click to Conquer" : "Locked"}
            </div>
        </div>
    );
};

export default RPGNode;
</file>

<file path="src/App.css">
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
</file>

<file path="src/GameContext.jsx">
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
</file>

<file path="src/index.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body { margin: 0; background: #0f172a; } /* Dark Mode by default */
</file>

<file path="src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</file>

<file path="DEVLOG.md">
# 🛠️ Development Log & Technical Report

## 1. The "Brain Freeze" Incident (Error 404)
**Problem:** The application kept crashing with `[404] Model Not Found` when trying to contact Gemini.
**Root Cause:** The initial code hardcoded `gemini-1.5-flash`, but the API Key was on a "Bleeding Edge" tier that only allowed access to `gemini-2.0` and `gemini-exp`.
**Solution:** Implemented a **"Model Hunter"** script. The Brain now loops through an array of 5 possible model names (`gemini-2.0-flash`, `gemini-2.5`, etc.) until it establishes a handshake.

## 2. The Infinite Loop (React Maximum Depth Exceeded)
**Problem:** The browser tab would freeze and crash React.
**Root Cause:** The `Unlock Logic` was placed inside a `useEffect` hook that depended on `nodes`. When it unlocked a node, it updated `nodes`, which triggered the `useEffect` again—creating an infinite recursion.
**Solution:** Removed the `useEffect`. Logic was moved to an **Event-Driven Architecture**. Unlocking now only happens *exactly once* inside the `conquerNode` function.

## 3. Adaptive Scaling
**Problem:** The AI originally returned only 3 nodes for every topic, making broad subjects like "AI" feel empty.
**Solution:** Upgraded the prompt to be context-aware.
* If the topic is **Broad** (e.g., "AI"), the AI generates **6-7 nodes** (Landscape View).
* If the topic is **Narrow** (e.g., "React Hooks"), it focuses on **3 nodes** (Deep Dive).

## 4. Live Data Integration
**Architecture:**
* **Input:** `harvest.py` (BeautifulSoup/FeedParser).
* **Storage:** `public/live-feed.json`.
* **Injection:** The Brain reads this JSON file before every API call, allowing it to recommend technologies that were released *less than 24 hours ago*.
</file>

<file path="eslint.config.js">
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
</file>

<file path="index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>open-skill-tree</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="postcss.config.js">
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
</file>

<file path="requirements.txt">
requests
beautifulsoup4
feedparser
</file>

<file path="tailwind.config.js">
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</file>

<file path="vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
</file>

<file path=".github/workflows/daily-harvest.yml">
name: Daily Knowledge Harvest

on:
  schedule:
    # Runs at 06:00 UTC every day
    - cron: '0 6 * * *'
  workflow_dispatch: # Allows manual trigger from GitHub UI

permissions:
  contents: write

jobs:
  harvest:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'

      - name: Install Python Dependencies
        run: |
          pip install requests beautifulsoup4 feedparser

      - name: Run Harvester
        run: python scripts/harvest.py

      - name: Commit and Push New Data
        run: |
          git config --global user.name 'Harvester Bot'
          git config --global user.email 'bot@noreply.github.com'
          git add public/live-feed.json
          git commit -m "🌱 Daily Harvest: Updated Live Intelligence" || exit 0
          git push
</file>

<file path="public/live-feed.json">
[
  {
    "source": "AI Systems",
    "title": "transformers v5 final is out \ud83d\udd25",
    "url": "https://reddit.com/r/LocalLLaMA/comments/1qnk7fq/transformers_v5_final_is_out/",
    "type": "community"
  },
  {
    "source": "Systems Lang",
    "title": "zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative",
    "url": "https://reddit.com/r/rust/comments/1qn2aev/zerobrew_is_a_rustbased_520x_faster_dropin/",
    "type": "community"
  },
  {
    "source": "Systems Lang",
    "title": "Things I miss in Rust",
    "url": "https://reddit.com/r/rust/comments/1qmu3m6/things_i_miss_in_rust/",
    "type": "community"
  },
  {
    "source": "ArXiv Paper",
    "title": "AnyView: Synthesizing Any Novel View in Dynamic Scenes",
    "url": "http://arxiv.org/abs/2601.16982v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "A Scalable Measure of Loss Landscape Curvature for Analyzing the Training Dynamics of LLMs",
    "url": "http://arxiv.org/abs/2601.16979v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "Latent Diffusion for Internet of Things Attack Data Generation in Intrusion Detection",
    "url": "http://arxiv.org/abs/2601.16976v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "Auto-Regressive Masked Diffusion Models",
    "url": "http://arxiv.org/abs/2601.16971v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "3D Molecule Generation from Rigid Motifs via SE(3) Flows",
    "url": "http://arxiv.org/abs/2601.16955v1",
    "type": "research"
  }
]
</file>

<file path="scripts/harvest.py">
import json
import requests
import feedparser
import arxiv
from datetime import datetime, timedelta

# --- CONFIGURATION ---
LOOKBACK_HOURS = 24
MIN_SCORE = 50  # Filter out low-quality noise

# Keywords that signal "This is a reliable pathway/resource"
SIGNAL_KEYWORDS = [
    "guide", "roadmap", "implementation", "paper", "release", 
    "tutorial", "architecture", "optimization", "benchmark",
    "vllm", "cuda", "rust", "transformer", "agent"
]

output_feed = []

def is_high_signal(title, score=0):
    """Returns True if the content is likely an engineering resource."""
    title_lower = title.lower()
    
    # 1. Score Check (If available)
    if score < MIN_SCORE:
        return False
        
    # 2. Keyword Check
    if any(kw in title_lower for kw in SIGNAL_KEYWORDS):
        return True
        
    return False

def harvest_hn():
    """Fetches Top Engineering discussions from HackerNews."""
    print("📡 Scanning HackerNews...")
    # Query: Specific systems/AI terms only
    query = "llm OR rust OR cpp OR 'system design' OR 'distributed systems'"
    url = f"https://hn.algolia.com/api/v1/search_by_date?query={query}&tags=story&hitsPerPage=20"
    
    try:
        data = requests.get(url).json()
        for hit in data['hits']:
            if is_high_signal(hit['title'], hit['points']):
                output_feed.append({
                    "source": "HackerNews",
                    "title": hit['title'],
                    "url": f"https://news.ycombinator.com/item?id={hit['objectID']}",
                    "type": "discussion"
                })
    except Exception as e:
        print(f"HN Error: {e}")

def harvest_reddit():
    """Fetches high-quality discussions from specialized subreddits."""
    subs = [
        ("r/LocalLLaMA", "AI Systems"), 
        ("r/rust", "Systems Lang"), 
        ("r/osdev", "Operating Systems"),
        ("r/MachineLearning", "Research")
    ]
    
    headers = {'User-Agent': 'SkillTreeBot/1.0'}
    
    for sub, label in subs:
        print(f"📡 Scanning {sub}...")
        url = f"https://www.reddit.com/{sub}/top/.json?t=day&limit=5"
        try:
            resp = requests.get(url, headers=headers).json()
            for post in resp['data']['children']:
                data = post['data']
                # Reddit 'score' is upvotes
                if is_high_signal(data['title'], data['score']):
                    output_feed.append({
                        "source": label,
                        "title": data['title'],
                        "url": f"https://reddit.com{data['permalink']}",
                        "type": "community"
                    })
        except Exception as e:
            print(f"{sub} Error: {e}")

def harvest_arxiv():
    """Fetches the latest 'Systems' papers from ArXiv."""
    print("📡 Scanning ArXiv (Research)...")
    # Categories: Hardware (cs.AR), Machine Learning (cs.LG), Operating Systems (cs.OS)
    client = arxiv.Client()
    search = arxiv.Search(
        query = "cat:cs.LG OR cat:cs.OS OR cat:cs.AR",
        max_results = 5,
        sort_by = arxiv.SortCriterion.SubmittedDate
    )

    for result in client.results(search):
        # ArXiv doesn't have a 'score', so we just take the latest 5
        output_feed.append({
            "source": "ArXiv Paper",
            "title": result.title,
            "url": result.entry_id,
            "type": "research"
        })

def main():
    harvest_hn()
    harvest_reddit()
    harvest_arxiv()
    
    # Save to public folder
    print(f"✅ Harvest complete. Found {len(output_feed)} high-signal resources.")
    with open('public/live-feed.json', 'w') as f:
        json.dump(output_feed, f, indent=2)

if __name__ == "__main__":
    main()
</file>

<file path="src/App.jsx">
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
</file>

<file path="package.json">
{
  "name": "open-skill-tree",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "dotenv": "^17.2.3",
    "lucide-react": "^0.563.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "reactflow": "^11.11.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.1",
    "vite": "npm:rolldown-vite@7.2.5"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.2.5"
  }
}
</file>

<file path="README.md">
# 🌳 Open Skill Tree (AI-Powered)

> An infinite, self-updating learning roadmap engine powered by Gemini 2.0.

Unlike static roadmaps (e.g., roadmap.sh), this application uses **Generative AI** and **Live Market Data** to build a curriculum that adapts to *you* and the *current state of the industry*.

## 🚀 Key Features

* **🧠 Adaptive Brain:** Uses Gemini 2.5/2.0 to generate unique missions based on your current skills.
* **📡 Live Intelligence:** Scrapes ArXiv, HackerNews, and Reddit daily to inject "Bleeding Edge" technologies into your path.
* **∞ Infinite Canvas:** Learn anything. Type "Rust", "Pottery", or "Quantum Physics", and a tree is generated instantly.
* **⚔️ RPG Progression:** Earn XP, conquer nodes, and prune unwanted branches.

## 🛠️ Installation

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/yourusername/open-skill-tree.git](https://github.com/yourusername/open-skill-tree.git)
    cd open-skill-tree
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    pip install -r requirements.txt
    ```

3.  **Setup Environment:**
    Create a `.env` file and add your Google Gemini API Key:
    ```env
    VITE_GEMINI_API_KEY=your_key_here
    ```

4.  **Run the System:**
    * **Start the App:** `npm run dev`
    * **Harvest Data:** `python scripts/harvest.py`

## 🏗️ Architecture

1.  **Harvester (Python):** Wakes up daily -> Scrapes Web -> Updates `live-feed.json`.
2.  **React Engine (Vite):** Renders the Infinite Canvas (ReactFlow).
3.  **The Brain (Gemini):**
    * Input: User History + Live Feed + Target Skill.
    * Process: "Model Hunter" algorithm finds the best available AI model.
    * Output: JSON-structured curriculum nodes.

## 🤖 Automation
This repository includes a **GitHub Action** (`daily_harvest.yml`) that runs every 24 hours to keep the learning data fresh automatically.
</file>

</files>
````

## File: public/data.json
````json
{
    "nodes": [
        {
            "id": "linux_1",
            "type": "skill",
            "data": {
                "label": "Linux Survival",
                "status": "active",
                "resources": [
                    {
                        "title": "Linux Journey",
                        "url": "https://linuxjourney.com/"
                    }
                ]
            },
            "position": {
                "x": 0,
                "y": 0
            }
        },
        {
            "id": "docker_1",
            "type": "skill",
            "data": {
                "label": "Docker Containers",
                "status": "locked",
                "resources": []
            },
            "position": {
                "x": 0,
                "y": 150
            }
        }
    ],
    "edges": [
        {
            "id": "e1-2",
            "source": "linux_1",
            "target": "docker_1",
            "animated": true
        }
    ]
}
````

## File: public/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: src/ai/check-models.js
````javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

// Load your .env file
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ No API Key found in .env file!");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listMyModels() {
    console.log(`🔑 Checking models for key: ${apiKey.slice(0, 10)}...`);
    console.log("------------------------------------------------");

    try {
        // 1. Ask Google for the list
        const models = await genAI.getGenerativeModel({ model: "gemini-pro" }).apiKey; // Helper to init
        // Actually, the SDK has a specific manager for this, let's use the fetch direct method to be safe
        // because the SDK wrapper sometimes hides the list method depending on version.

        // We will use the REST API direct approach for maximum reliability in this script
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // 2. Filter only models that generate text (ignore embedding models)
        const available = data.models.filter(m =>
            m.supportedGenerationMethods.includes("generateContent")
        );

        if (available.length === 0) {
            console.log("⚠️  No text-generation models found. Your key might be restricted.");
        } else {
            console.log("✅ YOU HAVE ACCESS TO THESE MODELS:");
            available.forEach(m => {
                // console.log(`- ${m.name.replace('models/', '')}`);
                console.log(`   "${m.name.replace('models/', '')}"`);
            });
            console.log("\n👉 Copy one of the names above into your GeminiBrain.js file.");
        }

    } catch (error) {
        console.error("❌ ERROR CHECKING MODELS:");
        console.error(error.message);
    }
}

listMyModels();
````

## File: src/ai/GeminiBrain.js
````javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Use the robust model list (Keep your verified list here)
const MODEL_NAMES = [
    "gemini-2.0-flash",
    "gemini-2.5-flash",
    "gemini-1.5-pro",
    "gemini-pro"
];

async function generateWithFallback(prompt) {
    for (const modelName of MODEL_NAMES) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.warn(`❌ ${modelName} failed. Trying next...`);
        }
    }
    throw new Error("All AI models failed.");
}

async function getSystemIntelligence() {
    try {
        const res = await fetch('/live-feed.json');
        if (!res.ok) return "No live feed.";
        const feed = await res.json();
        return feed.map(f => `[${f.source}] ${f.title}`).slice(0, 8).join('\n'); // Increased context
    } catch (e) {
        return "Standard Curriculum";
    }
}

export async function generateNextSkills(currentSkill, knownSkills) {
    console.log("🧠 Adaptive Brain Activated for:", currentSkill);

    const liveTrends = await getSystemIntelligence();

    const prompt = `
    ACT AS: Senior Curriculum Architect.
    TARGET SKILL: "${currentSkill}"
    USER MASTERY: [${knownSkills.join(', ')}]
    LIVE NEWS: ${liveTrends}

    TASK:
    Analyze the "Scope" of "${currentSkill}".
    1. **IF BROAD** (e.g. "Artificial Intelligence", "Computer Science", "Biology"):
       - Generate **5 to 7** distinct MAJOR SUB-FIELDS.
       - Example: For "AI", return [Machine Learning, Neural Networks, NLP, Computer Vision, Robotics, AI Ethics].
    
    2. **IF NARROW** (e.g. "React Hooks", "Gradient Descent"):
       - Generate **3** specific actionable steps/projects.

    CONSTRAINTS:
    - Use "Live News" to insert 1 "Bleeding Edge" node if relevant.
    - Every "Mission" must be a concrete Engineering/Research task.
    
    OUTPUT JSON FORMAT:
    [
      { "label": "Sub-Field Name", "mission": "Specific Project/Task" },
      ...
    ]
    STRICT JSON ONLY.
  `;

    try {
        const text = await generateWithFallback(prompt);
        console.log("📩 Expansion Size:", JSON.parse(text.replace(/```json|```/g, '')).length, "nodes");
        const cleanJson = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (err) {
        console.error("Brain Error:", err);
        // Fallback: Return 4 generic nodes if AI fails
        return [
            { label: `${currentSkill} Foundations`, mission: `Study core concepts of ${currentSkill}` },
            { label: `${currentSkill} Tools`, mission: `Install standard toolchain for ${currentSkill}` },
            { label: `${currentSkill} Practice`, mission: `Build a starter project` },
            { label: `${currentSkill} Advanced`, mission: `Read a research paper` }
        ];
    }
}
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/nodes/SkillNode.jsx
````javascript
import React from 'react';
import { Handle, Position } from 'reactflow';
// Notice the "../" -> This looks UP one folder to find GameContext
import { useGame } from '../GameContext';
import { Shield, Lock, Zap, Map, Trash2 } from 'lucide-react';

const RPGNode = ({ id, data }) => {
    const { scoutNextSteps, conquerNode, deletePath } = useGame();

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
        <div
            className={`${baseStyle} ${variants[data.status]}`}
            onClick={handleClick}
        >
            {/* --- HANDLES (Connectors) --- */}
            <Handle type="target" position={Position.Top} className="!bg-slate-500 !w-3 !h-3" />
            <Handle type="source" position={Position.Bottom} className="!bg-slate-500 !w-3 !h-3" />

            {/* --- DELETE BUTTON (Only visible on hover) --- */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (confirm('Abandon this entire skill path?')) deletePath(id);
                }}
                className="absolute -top-3 -right-3 bg-red-900/80 hover:bg-red-600 text-red-200 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all border border-red-500 z-50 shadow-lg"
                title="Prune this branch"
            >
                <Trash2 size={12} />
            </button>

            {/* --- HEADER --- */}
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${statusColor}`} />
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                        {data.status}
                    </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                    {data.xp} XP
                </div>
            </div>

            {/* --- TITLE --- */}
            <div className="text-white font-bold text-lg leading-tight mb-2 text-shadow-sm">
                {data.label}
            </div>

            {/* --- MISSION BRIEF --- */}
            <div className="mb-3 p-2 bg-black/40 rounded border border-white/10 text-left">
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-1">
                    Current Objective
                </div>
                <div className="text-xs text-slate-200 leading-relaxed font-mono">
                    {data.mission || "Unknown Anomaly. Scout to identify."}
                </div>
            </div>

            {/* --- ACTION HINT --- */}
            <div className={`text-[10px] font-bold text-center uppercase tracking-wider py-1 rounded ${isConquered ? 'bg-yellow-500/10 text-yellow-500' :
                    isAvailable ? 'bg-blue-600 text-white animate-pulse' :
                        'bg-slate-800 text-slate-600'
                }`}>
                {isConquered ? "Click to Scout" : isAvailable ? "Click to Conquer" : "Locked"}
            </div>
        </div>
    );
};

export default RPGNode;
````

## File: src/App.css
````css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
````

## File: src/GameContext.jsx
````javascript
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
````

## File: src/index.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

body { margin: 0; background: #0f172a; } /* Dark Mode by default */
````

## File: src/main.jsx
````javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: DEVLOG.md
````markdown
# 🛠️ Development Log & Technical Report

## 1. The "Brain Freeze" Incident (Error 404)
**Problem:** The application kept crashing with `[404] Model Not Found` when trying to contact Gemini.
**Root Cause:** The initial code hardcoded `gemini-1.5-flash`, but the API Key was on a "Bleeding Edge" tier that only allowed access to `gemini-2.0` and `gemini-exp`.
**Solution:** Implemented a **"Model Hunter"** script. The Brain now loops through an array of 5 possible model names (`gemini-2.0-flash`, `gemini-2.5`, etc.) until it establishes a handshake.

## 2. The Infinite Loop (React Maximum Depth Exceeded)
**Problem:** The browser tab would freeze and crash React.
**Root Cause:** The `Unlock Logic` was placed inside a `useEffect` hook that depended on `nodes`. When it unlocked a node, it updated `nodes`, which triggered the `useEffect` again—creating an infinite recursion.
**Solution:** Removed the `useEffect`. Logic was moved to an **Event-Driven Architecture**. Unlocking now only happens *exactly once* inside the `conquerNode` function.

## 3. Adaptive Scaling
**Problem:** The AI originally returned only 3 nodes for every topic, making broad subjects like "AI" feel empty.
**Solution:** Upgraded the prompt to be context-aware.
* If the topic is **Broad** (e.g., "AI"), the AI generates **6-7 nodes** (Landscape View).
* If the topic is **Narrow** (e.g., "React Hooks"), it focuses on **3 nodes** (Deep Dive).

## 4. Live Data Integration
**Architecture:**
* **Input:** `harvest.py` (BeautifulSoup/FeedParser).
* **Storage:** `public/live-feed.json`.
* **Injection:** The Brain reads this JSON file before every API call, allowing it to recommend technologies that were released *less than 24 hours ago*.
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>open-skill-tree</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: requirements.txt
````
requests
beautifulsoup4
feedparser
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
````

## File: vite.config.js
````javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
````

## File: .github/workflows/daily-harvest.yml
````yaml
name: Daily Knowledge Harvest

on:
  schedule:
    # Runs at 06:00 UTC every day
    - cron: '0 6 * * *'
  workflow_dispatch: # Allows manual trigger from GitHub UI

permissions:
  contents: write

jobs:
  harvest:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'

      - name: Install Python Dependencies
        run: |
          pip install requests beautifulsoup4 feedparser

      - name: Run Harvester
        run: python scripts/harvest.py

      - name: Commit and Push New Data
        run: |
          git config --global user.name 'Harvester Bot'
          git config --global user.email 'bot@noreply.github.com'
          git add public/live-feed.json
          git commit -m "🌱 Daily Harvest: Updated Live Intelligence" || exit 0
          git push
````

## File: public/live-feed.json
````json
[
  {
    "source": "AI Systems",
    "title": "transformers v5 final is out \ud83d\udd25",
    "url": "https://reddit.com/r/LocalLLaMA/comments/1qnk7fq/transformers_v5_final_is_out/",
    "type": "community"
  },
  {
    "source": "Systems Lang",
    "title": "zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative",
    "url": "https://reddit.com/r/rust/comments/1qn2aev/zerobrew_is_a_rustbased_520x_faster_dropin/",
    "type": "community"
  },
  {
    "source": "Systems Lang",
    "title": "Things I miss in Rust",
    "url": "https://reddit.com/r/rust/comments/1qmu3m6/things_i_miss_in_rust/",
    "type": "community"
  },
  {
    "source": "ArXiv Paper",
    "title": "AnyView: Synthesizing Any Novel View in Dynamic Scenes",
    "url": "http://arxiv.org/abs/2601.16982v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "A Scalable Measure of Loss Landscape Curvature for Analyzing the Training Dynamics of LLMs",
    "url": "http://arxiv.org/abs/2601.16979v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "Latent Diffusion for Internet of Things Attack Data Generation in Intrusion Detection",
    "url": "http://arxiv.org/abs/2601.16976v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "Auto-Regressive Masked Diffusion Models",
    "url": "http://arxiv.org/abs/2601.16971v1",
    "type": "research"
  },
  {
    "source": "ArXiv Paper",
    "title": "3D Molecule Generation from Rigid Motifs via SE(3) Flows",
    "url": "http://arxiv.org/abs/2601.16955v1",
    "type": "research"
  }
]
````

## File: scripts/harvest.py
````python
import json
import requests
import feedparser
import arxiv
from datetime import datetime, timedelta

# --- CONFIGURATION ---
LOOKBACK_HOURS = 24
MIN_SCORE = 50  # Filter out low-quality noise

# Keywords that signal "This is a reliable pathway/resource"
SIGNAL_KEYWORDS = [
    "guide", "roadmap", "implementation", "paper", "release", 
    "tutorial", "architecture", "optimization", "benchmark",
    "vllm", "cuda", "rust", "transformer", "agent"
]

output_feed = []

def is_high_signal(title, score=0):
    """Returns True if the content is likely an engineering resource."""
    title_lower = title.lower()
    
    # 1. Score Check (If available)
    if score < MIN_SCORE:
        return False
        
    # 2. Keyword Check
    if any(kw in title_lower for kw in SIGNAL_KEYWORDS):
        return True
        
    return False

def harvest_hn():
    """Fetches Top Engineering discussions from HackerNews."""
    print("📡 Scanning HackerNews...")
    # Query: Specific systems/AI terms only
    query = "llm OR rust OR cpp OR 'system design' OR 'distributed systems'"
    url = f"https://hn.algolia.com/api/v1/search_by_date?query={query}&tags=story&hitsPerPage=20"
    
    try:
        data = requests.get(url).json()
        for hit in data['hits']:
            if is_high_signal(hit['title'], hit['points']):
                output_feed.append({
                    "source": "HackerNews",
                    "title": hit['title'],
                    "url": f"https://news.ycombinator.com/item?id={hit['objectID']}",
                    "type": "discussion"
                })
    except Exception as e:
        print(f"HN Error: {e}")

def harvest_reddit():
    """Fetches high-quality discussions from specialized subreddits."""
    subs = [
        ("r/LocalLLaMA", "AI Systems"), 
        ("r/rust", "Systems Lang"), 
        ("r/osdev", "Operating Systems"),
        ("r/MachineLearning", "Research")
    ]
    
    headers = {'User-Agent': 'SkillTreeBot/1.0'}
    
    for sub, label in subs:
        print(f"📡 Scanning {sub}...")
        url = f"https://www.reddit.com/{sub}/top/.json?t=day&limit=5"
        try:
            resp = requests.get(url, headers=headers).json()
            for post in resp['data']['children']:
                data = post['data']
                # Reddit 'score' is upvotes
                if is_high_signal(data['title'], data['score']):
                    output_feed.append({
                        "source": label,
                        "title": data['title'],
                        "url": f"https://reddit.com{data['permalink']}",
                        "type": "community"
                    })
        except Exception as e:
            print(f"{sub} Error: {e}")

def harvest_arxiv():
    """Fetches the latest 'Systems' papers from ArXiv."""
    print("📡 Scanning ArXiv (Research)...")
    # Categories: Hardware (cs.AR), Machine Learning (cs.LG), Operating Systems (cs.OS)
    client = arxiv.Client()
    search = arxiv.Search(
        query = "cat:cs.LG OR cat:cs.OS OR cat:cs.AR",
        max_results = 5,
        sort_by = arxiv.SortCriterion.SubmittedDate
    )

    for result in client.results(search):
        # ArXiv doesn't have a 'score', so we just take the latest 5
        output_feed.append({
            "source": "ArXiv Paper",
            "title": result.title,
            "url": result.entry_id,
            "type": "research"
        })

def main():
    harvest_hn()
    harvest_reddit()
    harvest_arxiv()
    
    # Save to public folder
    print(f"✅ Harvest complete. Found {len(output_feed)} high-signal resources.")
    with open('public/live-feed.json', 'w') as f:
        json.dump(output_feed, f, indent=2)

if __name__ == "__main__":
    main()
````

## File: src/App.jsx
````javascript
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
````

## File: package.json
````json
{
  "name": "open-skill-tree",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "dotenv": "^17.2.3",
    "lucide-react": "^0.563.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "reactflow": "^11.11.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.1",
    "vite": "npm:rolldown-vite@7.2.5"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.2.5"
  }
}
````

## File: README.md
````markdown
# 🌳 Open Skill Tree (AI-Powered)

> An infinite, self-updating learning roadmap engine powered by Gemini 2.0.

Unlike static roadmaps (e.g., roadmap.sh), this application uses **Generative AI** and **Live Market Data** to build a curriculum that adapts to *you* and the *current state of the industry*.

## 🚀 Key Features

* **🧠 Adaptive Brain:** Uses Gemini 2.5/2.0 to generate unique missions based on your current skills.
* **📡 Live Intelligence:** Scrapes ArXiv, HackerNews, and Reddit daily to inject "Bleeding Edge" technologies into your path.
* **∞ Infinite Canvas:** Learn anything. Type "Rust", "Pottery", or "Quantum Physics", and a tree is generated instantly.
* **⚔️ RPG Progression:** Earn XP, conquer nodes, and prune unwanted branches.

## 🛠️ Installation

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/yourusername/open-skill-tree.git](https://github.com/yourusername/open-skill-tree.git)
    cd open-skill-tree
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    pip install -r requirements.txt
    ```

3.  **Setup Environment:**
    Create a `.env` file and add your Google Gemini API Key:
    ```env
    VITE_GEMINI_API_KEY=your_key_here
    ```

4.  **Run the System:**
    * **Start the App:** `npm run dev`
    * **Harvest Data:** `python scripts/harvest.py`

## 🏗️ Architecture

1.  **Harvester (Python):** Wakes up daily -> Scrapes Web -> Updates `live-feed.json`.
2.  **React Engine (Vite):** Renders the Infinite Canvas (ReactFlow).
3.  **The Brain (Gemini):**
    * Input: User History + Live Feed + Target Skill.
    * Process: "Model Hunter" algorithm finds the best available AI model.
    * Output: JSON-structured curriculum nodes.

## 🤖 Automation
This repository includes a **GitHub Action** (`daily_harvest.yml`) that runs every 24 hours to keep the learning data fresh automatically.
````
