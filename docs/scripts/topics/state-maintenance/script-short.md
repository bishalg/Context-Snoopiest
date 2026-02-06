# Video Script: Character Consistency (Short - 90s)

**Topic:** State Maintenance & CCMS
**Target Audience:** Software Developers

---

## 0:00 - 0:15 | Hook
- **Visual:** A character's face flickering and changing features between two clips.
- **Script:**
  > "Ever seen an AI video where the character looks different in every shot? That's Character Drift, and it's the #1 enemy of AI cinematography."

## 0:15 - 0:45 | The CCMS solution
- **Visual:** A JSON Character Sheet: `{ "id": "hero", "eyes": "blue", "outfit": "plate_armor" }`.
- **Script:**
  > "In Continuum Flow, we use CCMS—the **Character Consistency Maintenance System**. Instead of letting the model guess, we 'lock' characters using **Identity Vectors**. Every prompt is injected with a rigid visual schema: skin tone, hair hex codes, even specific outfit states."

## 0:45 - 1:15 | State Management
- **Visual:** Armor appearing on a character model as the text "He donned his armor" scrolls by.
- **Script:**
  > "It's all about **Persistent State**. When the text says 'He puts on his hat', our State Manager updates the Character ID. Every shot from then on 'inherits' that hat embedding implicitly. It's like a Global Store for your story's visual logic."

## 1:15 - 1:30 | Technical Takeaway
- **Visual:** Text: "State > Prompt".
- **Script:**
  > "The takeaway? Don't rely on prompts alone for consistency. Manage state. CCMS turns 'John' from a string into a persistent visual object. Check the Character Profile docs for more!"

---

## Technical Terms for Subtitles
- **Character Drift:** The progressive loss of consistent visual features in AI generation over time.
- **Identity Vector:** A numerical or visual embedding that anchors a character's appearance.
- **Persistent State:** Information that survives across multiple execution turns or generations.
