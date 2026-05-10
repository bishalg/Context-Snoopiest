---
title: Beads Architecture Analysis for Continuum Flow
version: 1.0.0
status: Complete
last_updated: 2026-05-10
tags: [Beads, Hypergraph, Git-as-Database, Persistence]
---

# **Architectural Analysis: Beads Concepts for Continuum Flow**

## **Executive Summary**

The "Beads" architecture (as implemented in `steveyegge/beads`) presents a paradigm for **Distributed, Persistent Agent Memory**. While Continuum Flow already implements a "Hierarchical Summarization Architecture" (Levels 1-3), the Beads model offers specific primitives—specifically **Hypergraph Tasking** and **Git-as-Database**—that could harden the system's "Context Backbone."

This document analyzes these patterns to determine their applicability to the Continuum Flow Narrative-to-Video generation pipeline.

---

## **1. Core Concept: Git-Backed State (The "Flat-File" DB)**

### **1.1 The Pattern**
Beads avoids traditional databases (Postgres/SQLite) in favor of storing state as **JSONL files directly in the Git repository** (`.beads/`).
- **Mechanism**: Every task/node is a file or line in a file.
- **Consistency**: Relies on Git's atomic commits and merge conflict resolution.
- **Portability**: The "Database" is cloned alongside the code.

### **1.2 Relevance to Continuum Flow**
Continuum Flow currently relies on a "static reference database" (Character Sheets, Location Registry) created during the Pre-processing Phase. Adopting a Git-Backed State for these assets offers distinct advantages:

| Feature | Current Approach (JSON Assets) | Beads Approach (Git-Backed JSONL) | Recommendation |
| :--- | :--- | :--- | :--- |
| **Versioning** | Ad-hoc (overwriting files) | **Strict History**: Can rollback Character Profile changes (e.g., "Undo the scar addition"). | **ADOPT** for Character Profiles. |
| **Branching** | Difficult (Global state) | **Native**: "Experiment" branch can have totally different character traits. | **ADOPT** for scenario testing. |
| **Concurrency** | Race conditions if multiple Agents write | **Mergeable**: Individual agent outputs can be merged via Git logic. | **ADOPT** for Multi-Agent outputs. |

### **1.3 Implementation Strategy: The "Narrative Commit"**
Instead of a database update, an Agent action (e.g., "Chapter 5 Complete") becomes a **Git Commit**.
- **Action**: Agent finishes summarizing Chapter 5.
- **Effect**: Agent commits `context/backbone/vol_1.jsonl` with the new summary.
- **Benefit**: We have a perfect, replayable history of *how* the context evolved.

---

## **2. Core Concept: Hypergraph Context (The "Bead")**

### **2.1 The Pattern**
A "Bead" is not just a text file; it is a node in a **dependency graph**.
- `Bead A` (Task) blocks `Bead B`.
- `Bead C` (Context) is a parent of `Bead D`.
- This removes the fragility of "Line Numbers" or "File Names" as references.

### **2.2 Relevance to Continuum Flow**
Our current "Narrative AST" (Abstract Story Tree) is effectively a graph, but often serialized linearly. Moving to a strict Hypergraph model strengthens the **Causal Chain**.

> [!NOTE]
> If the *Prefetcher Worker* finds a key event in Chapter 10, it creates a "Bead" (a context node) that is strictly linked as a dependency for the Chapter 1 Generator.

---

## **3. Core Concept: Context Compaction (The "Immune System")**

### **3.1 The Pattern**
Beads implements an "Auto-Archiver" or "Immune System" that constantly scans the graph to **compact** completed tasks into summaries, preventing the graph from exploding in size/complexity.

### **3.2 Alignment with "Continuum Flow" Levels**
This is functionally identical to our **Level 1 -> Level 2** aggregation. However, Beads introduces the concept of **Semantic Decay**.
- **Idea**: Nodes that haven't been referenced by any active agent for $N$ cycles are automatically "frozen" or "archived" to a separate file.
- **Continuum Flow Fit**: High. This formalizes our manual "Context Rot" prevention.

---

## **4. Architectural Recommendations**

### **4.1 What to Adopt**
1.  **Git-Persistence for World State**: Move `assets/profiles/*.json` to a formal Git-backed structure.
2.  **Immutable IDs (Hashes)**: Stop referring to "Chapter 1." Start referring to `Event-Hash-8f92a`.

### **4.2 What to Reject**
1.  **The CLI Tool**: We do not need the `bd` CLI tool itself.
2.  **General Issue Tracking**: We are building a *Narrative Engine*, not a generic bug tracker.

### **4.3 Integration into Existing Docs**
These concepts refine the **"DeepAgent State Architecture" (Section 4.6)** of our main architecture doc.

> [!TIP]
> We implement a **Git-Backed Hypergraph** for state retention, ensuring that every narrative decision is a versioned, immutable node in a dependency tree.

