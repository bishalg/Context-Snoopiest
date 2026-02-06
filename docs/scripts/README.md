# Educational Video Scripts & Content

This directory contains organized technical content for a series of educational videos focused on AI architecture, specifically how Context-Snoopiest (Continuum Flow) manages context for video generation.

## Directory Structure

- `/templates`: Reusable markdown templates for [Short (90s)](./templates/script-short.md) and [Long (4m)](./templates/script-long.md) formats.
- `/topics`: Individual folders for each technical concept.
    - `context-windows/`: Deep dive into LLM context limits and management.
    - `hierarchical-summarization/`: Explaining telescoping memory.
    - `state-maintenance/`: Engineering character consistency (CCMS).
    - `semantic-chunking/`: The math behind 8-second video beats.
    - `narrative-compression/`: Applying the RepoMix pattern to literature.
- `glossary-master.json`: A consolidated technical term database for subtitles and assets.

## Target Audience
**Software Developers** who want to understand the "under-the-hood" engineering required to overcome modern AI limitations.

## How to use
For each [topic](./topics), you will find:
1. `script-short.md`: Optimized for YouTube Shorts / Reels.
2. `script-long.md`: Optimized for deep-dive tutorials.
3. `glossary.md`: Key terms to highlight as on-screen text or subtitles.
