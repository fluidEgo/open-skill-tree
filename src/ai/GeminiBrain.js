import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

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
            const responseText = result.response.text();
            if (!responseText || responseText.length < 5) continue;
            return responseText;
        } catch (error) {
            console.warn(`⚠️ ${modelName} call failed:`, error.message);
        }
    }
    throw new Error("All AI models failed.");
}

async function getSystemIntelligence() {
    try {
        const res = await fetch('/live-feed.json');
        if (!res.ok) return "No live feed.";
        const feed = await res.json();
        return feed.map(f => `[${f.source}] ${f.title}`).slice(0, 8).join('\n');
    } catch (e) {
        return "Standard Curriculum";
    }
}

// 1. FORWARD EXPANSION
export async function generateNextSkills(currentSkill, knownSkills) {
    console.log("🧠 Forward Brain Activated for:", currentSkill);
    const liveTrends = await getSystemIntelligence();

    const prompt = `
    ACT AS: Senior Curriculum Architect.
    TARGET SKILL: "${currentSkill}"
    USER MASTERY: [${knownSkills.join(', ')}]
    LIVE NEWS: ${liveTrends}

    TASK:
    Analyze "${currentSkill}".
    1. IF BROAD: Generate 5-7 MAJOR SUB-FIELDS.
    2. IF NARROW: Generate 3 specific projects/tasks.
    
    OUTPUT JSON FORMAT:
    [{ "label": "Name", "mission": "Task" }]
    STRICT JSON ONLY.
  `;

    try {
        const text = await generateWithFallback(prompt);
        const cleanJson = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (err) {
        return [
            { label: `${currentSkill} Practice`, mission: `Build a starter project` },
            { label: `${currentSkill} Advanced`, mission: `Read a research paper` }
        ];
    }
}

// 2. BACKWARD PREREQUISITES
export async function generatePrerequisites(targetSkill) {
    console.log("🧠 Backward Brain Activated for:", targetSkill);
    const prompt = `
    ACT AS: Senior Curriculum Architect.
    TARGET SKILL: "${targetSkill}"
    TASK: Identify 3-4 CRITICAL PREREQUISITES (Math/Engineering concepts).
    OUTPUT JSON: [{ "label": "Name", "mission": "Goal" }]
    STRICT JSON ONLY.
    `;

    try {
        const text = await generateWithFallback(prompt);
        const cleanJson = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (err) {
        return [{ label: `${targetSkill} Basics`, mission: `Intro to ${targetSkill}` }];
    }
}

// 3. FULL ROADMAP GENERATION (New)
export async function generateRoadmap(topic) {
    console.log("🧠 Roadmap Brain Activated for:", topic);

    const prompt = `
    ACT AS: Engineering Mentor.
    TOPIC: "${topic}"

    TASK:
    Create a structured dependency tree for learning "${topic}" from SCRATCH.
    Structure the response as a valid node/edge graph.
    
    INCLUDE:
    - 2 Nodes: Absolute Prerequisites (Math/Logic/Tools) [Level 0]
    - 2 Nodes: Fundamental Concepts [Level 1]
    - 1 Node: The Topic Itself (${topic}) [Level 2]
    
    OUTPUT JSON FORMAT:
    {
      "nodes": [
        { "id": "1", "label": "Prereq Name", "mission": "Task", "type": "prereq" },
        { "id": "2", "label": "Basic Name", "mission": "Task", "type": "basic" },
        { "id": "3", "label": "${topic}", "mission": "Final Project", "type": "target" }
      ],
      "edges": [
        { "source": "1", "target": "2" },
        { "source": "2", "target": "3" }
      ]
    }
    STRICT JSON ONLY. NO MARKDOWN.
    `;

    try {
        const text = await generateWithFallback(prompt);
        const cleanJson = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (err) {
        console.error(err);
        // Fallback manual tree
        return {
            nodes: [
                { id: 'pre_1', label: 'Computer Basics', mission: 'Learn binary & logic', type: 'prereq' },
                { id: 'target', label: topic, mission: 'Master ' + topic, type: 'target' }
            ],
            edges: [{ source: 'pre_1', target: 'target' }]
        };
    }
}