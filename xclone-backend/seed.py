import random
from django.contrib.auth import get_user_model
from api.models import Tweet

User = get_user_model()

# 1. Ensure users exist
usernames = ['alice', 'bob', 'charlie', 'diana', 'eve']
users = [User.objects.get_or_create(username=name)[0] for name in usernames]

# 2. Mock tweet content
tweet_contents = [
    "Just launched my new open-source project! Check it out on GitHub. 🚀",
    "Is it just me or is Django standard ORM still unmatched in productivity?",
    "Coffee count for today: 4 cups. Lines of code written: 12. Worth it.",
    "Unpopular opinion: Tailoring CSS by hand is better than frameworks.",
    "Anyone going to PyCon this year? Let's connect!",
    "Finally fixed that bug that was keeping me up for 3 days. It was a typo.",
    "Docker containers are great until you check your storage space.",
    "Working from a coffee shop today. 10/10 productivity vibes.",
    "Python 3.12 syntax additions are actually super clean.",
    "Remember to hydrate and take breaks away from your screen today!",
    "Congrats! Sending a star your way right now.",
    "Totally agree, select_related and prefetch_related are lifesavers.",
    "Make that 5 cups. You got this!",
    "Strongly disagree! Tailwind saves so much time.",
    "I'll be there! First time attending, really excited.",
    "It is always a typo. Always.",
    "Run docker system prune before your disk explodes!",
    "Which coffee shop? I need good Wi-Fi recommendations.",
    "What's your favorite new feature so far?",
    "Thanks for the reminder, stepping away now!"
]

# 3. Create top-level tweets
top_level_tweets = []
for content in tweet_contents[:10]:
    tweet = Tweet.objects.create(
        author=random.choice(users),
        content=content,
        parent=None
    )
    top_level_tweets.append(tweet)

# 4. Create replies pointing to top-level or child tweets
for content in tweet_contents[10:]:
    all_tweets = list(Tweet.objects.all())
    parent_tweet = random.choice(all_tweets)
    
    Tweet.objects.create(
        author=random.choice(users),
        content=content,
        parent=parent_tweet
    )

print(f"Done! Total tweets in DB: {Tweet.objects.count()}")