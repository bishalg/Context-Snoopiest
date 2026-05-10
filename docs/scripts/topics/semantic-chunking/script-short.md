---
title: The Math of Cinematic Pacing
format: Video Script (Short Form)
duration: 90s
topic: Semantic Content Chunking
target_audience: Software Developers
---

# Video Script: Semantic Chunking & Cinematic Pacing (Short - 90s)

**Topic:** Semantic Content Chunking
**Target Audience:** Software Developers

---

## 0:00 - 0:15 | Hook
- **Visual:** A long wall of text being sliced into neat 8-second blocks.
- **Script:**
  > "Video generation models have a hard limit—usually 8 to 10 seconds. But how do you slice a continuous novel into those blocks without breaking the story?"

## 0:15 - 0:45 | The 8-Second Constraint
- **Visual:** "Time-Cost Algorithm" animation: Words -> Time.
- **Script:**
  > "Text has no duration. A sentence can cover 100 years or one second. We use a **Time-Cost Algorithm**. We weight tokens: Dialogue is slow, Description is fast, and Action is variable. This ensures every chunk fits the 8-second visual window perfectly."

## 0:45 - 1:15 | Micro-beats & Pacing
- **Visual:** "Atomic Scene" logic: Ending on a "high entropy" token (cliffhanger).
- **Script:**
  > "We don't just cut at line 10. We look for **Semantic Boundaries**. We end chunks on high-entropy beats—cliffhangers or dialogue tags—that force a natural cinematic cut. This is 'Atomic Scene' logic, ensuring the flow feels like a movie, not a slideshow."

## 1:15 - 1:30 | Technical Takeaway
- **Visual:** Text: "Duration ≠ Word Count".
- **Script:**
  > "Takeaway: Slice by meaning and time, not just length. In AI video, pacing is a compute problem. Check the `chunking/` module for the algorithm!"

---

## Technical Terms for Subtitles
- **Temporal Constraint:** The fixed duration limit (e.g., 8s) of generative video models.
- **Semantic Boundary:** Natural breaks in text (paragraph, dialogue) used for intelligent splitting.
- **High Entropy Token:** A word or phrase that implies unresolved action or rising tension.
