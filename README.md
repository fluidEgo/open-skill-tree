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