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