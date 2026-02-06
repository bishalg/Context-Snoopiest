# Video Script: Narrative Semantic Compression (Short - 90s)

**Topic:** Narrative Semantic Compression (RepoMix Pattern)
**Target Audience:** Software Developers

---

## 0:00 - 0:15 | Hook
- **Visual:** A file being compressed from a heavy folder into a slim JSON object.
- **Script:**
  > "How do we fit a whole codebase into an AI prompt? We use RepoMix. How do we fit a whole novel into a video prompt? We use the **Narrative AST**."

## 0:15 - 0:45 | The RepoMix Analogy
- **Visual:** Side-by-side comparison: Code AST vs. Story AST.
- **Script:**
  > "RepoMix strips function bodies but keeps definitions. We do the same for story. We strip descriptors, metaphors, and internal monologues. What's left? **Entities and Beats**. This is Semantic Compression. We turn 5 pages of prose into a single **SceneGraph** JSON object."

## 0:45 - 1:15 | The Visual Script
- **Visual:** Animation showing prose being 'filtered' into a set of visual instructions.
- **Script:**
  > "By focusing only on visual state changes—like 'Sword = Glowing' or 'Location = Night'—we reduce token usage by 70%. The AI doesn't need to read the 'flavor text' to generate the 3D scene. It just needs the **Visual Definition**."

## 1:15 - 1:30 | Technical Takeaway
- **Visual:** Text: "Syntactic Prose -> Semantic State".
- **Script:**
  > "Takeaway: Treat your story as data, not text. Use a Narrative AST to guard your context window. Check our repo to see how we apply the RepoMix pattern to literature!"

---

## Technical Terms for Subtitles
- **Narrative AST:** Abstract Story Tree; a structured representation of the story elements.
- **RepoMix Pattern:** Identifying and retaining only critical definitions while discarding implementation/flavor details.
- **SceneGraph:** A JSON representation of a scene's visual state (entities, lighting, objects).
