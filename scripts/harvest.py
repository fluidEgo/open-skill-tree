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