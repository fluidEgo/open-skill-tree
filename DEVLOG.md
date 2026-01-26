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