# Video Script: Hierarchical Summarization (Short - 90s)

**Topic:** Hierarchical Summarization
**Target Audience:** Software Developers

---

## 0:00 - 0:15 | Hook
- **Visual:** A single line of text expanding into a tree-like structure.
- **Script:**
  > "How do you keep a 100,000-word story in a 2,000-token window? You don't just compress it—you build a hierarchy. This is Hierarchical Recursive Summarization."

## 0:15 - 0:45 | The Concept: Telescoping Memory
- **Visual:** Animation showing Level 0 (Raw Text), Level 1 (Scene), Level 2 (Chapter) stacked like a pyramid.
- **Script:**
  > "Instead of one flat memory, we use a multi-level stack. Level 0 is the scene you're writing right now—full detail. Level 1 is the previous scene, summarized. Level 2 is the chapter. It's like a 'telescope'—the further back something happened, the more it's synthesized."

## 0:45 - 1:15 | Why It Matters for Developers
- **Visual:** Code snippet showing a state object: `{ location: 'ship', health: 80, inventory: ['key'] }`.
- **Script:**
  > "For developers, this solves the 'Vector Search' problem. Vanilla RAG might lose the sequence, but a Hierarchical Backbone maintains the **Causal Chain**. It knows 'Step B' happened because of 'Step A', even if they are 50 chapters apart."

## 1:15 - 1:30 | Technical Takeaway
- **Visual:** Summary text: "Synthesis over Compression".
- **Script:**
  > "Don't just truncate your prompts. Synthesize them. Hierarchical summarization is the secret to long-horizon AI consistency. Check the phase 2 docs for the full pattern!"

---

## Technical Terms for Subtitles
- **Recursive Summarization:** The process of summarizing summaries to create higher-level abstractions.
- **Synthesized Memory:** AI-generated factual summaries used to represent large datasets efficiently.
- **Causal Chain:** The sequence of cause-and-effect events that must be preserved for narrative logic.
