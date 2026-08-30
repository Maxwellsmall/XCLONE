# Architecture Log

## Tech Stack
- Framework: Django 5.x / Django REST Framework
- Database: PostgreSQL
- Auth: JWT (SimpleJWT)

## Core Decisions
- **Single App Strategy:** Using `api` app for MVP to minimize join overhead.
- **Tweet Hierarchy:** Self-referencing FK on `Tweet` model handles replies and retweets.