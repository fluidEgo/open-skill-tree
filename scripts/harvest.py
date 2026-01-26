import json
import requests
import feedparser # pip install feedparser requests
from datetime import datetime

# 1. Define Sources (The "Systems" Diet)
SOURCES = [
    {"name": "HackerNews (AI)", "url": "https://hn.algolia.com/api/v1/search_by_date?query=llm+OR+inference+OR+cuda&tags=story&hitsPerPage=5", "type": "hn"},
    {"name": "r/LocalLLaMA", "url": "https://www.reddit.com/r/LocalLLaMA/new/.rss", "type": "reddit"},
    {"name": "r/cpp", "url": "https://www.reddit.com/r/cpp/top/.rss?t=day", "type": "reddit"}
]

output_feed = []

def harvest():
    for source in SOURCES:
        try:
            print(f"Harvesting {source['name']}...")
            
            # Handler for HackerNews API
            if source['type'] == 'hn':
                resp = requests.get(source['url']).json()
                for hit in resp['hits']:
                    output_feed.append({
                        "title": hit['title'],
                        "url": f"https://news.ycombinator.com/item?id={hit['objectID']}",
                        "source": "HackerNews",
                        "date": hit['created_at']
                    })

            # Handler for Reddit RSS (No API Key needed)
            elif source['type'] == 'reddit':
                # User-Agent is required to not get blocked by Reddit
                feed = feedparser.parse(source['url'], agent="Mozilla/5.0 (compatible; SkillTreeBot/1.0)")
                for entry in feed.entries[:3]: # Top 3 only
                    output_feed.append({
                        "title": entry.title,
                        "url": entry.link,
                        "source": source['name'],
                        "date": entry.published
                    })
                    
        except Exception as e:
            print(f"Failed to harvest {source['name']}: {e}")

    # Save to a separate "live" file
    with open('public/live-feed.json', 'w') as f:
        json.dump(output_feed, f, indent=2)

if __name__ == "__main__":
    harvest()