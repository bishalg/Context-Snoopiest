# Technical Terms: Hierarchical Summarization

| Term | Dev-Friendly Definition | Script Usage |
| :--- | :--- | :--- |
| **Hierarchical Summarization** | Multi-level compression where each level summarizes the one below it. | "Building the hierarchical backbone." |
| **Recursive Processing** | Applying the same summarization logic repeatedly to reduce data size. | "Recursive passes on the chapter files." |
| **Causal Consistency** | Ensuring events in 'Step N' are logically possible based on 'Step 1'. | "Preserving causal consistency across segments." |
| **Narrative AST** | A structured, tree-like representation of story elements (Entities, Beats, States). | "Parsing the MD into a Narrative AST." |
| **Synthesis** | The AI-driven combination of details into a unified summary. | "Synthesizing the level 2 chapter summaries." |
| **State Differential** | Tracking only the *changes* between scenes rather than the whole state. | "Using state differentials to update the backbone." |
