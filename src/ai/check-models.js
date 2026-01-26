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