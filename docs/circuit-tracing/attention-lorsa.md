---
sidebar_position: 5
---

# Attention in Graphs (LORSA)

Standard attribution graphs replace only the MLPs with transcoders. OpenMOSS extended this to also replace attention, which they call [Complete Replacement Models (CRMs)](https://interp.open-moss.com/posts/complete-replacement). Neuronpedia can generate CRM graphs for `Qwen3-1.7B`.

Example: [Dallas graph for Qwen3-1.7B](https://www.neuronpedia.org/qwen3-1.7b/graph?slug=dallas-austin&pruningThreshold=0.7&densityThreshold=0.20)

![A CRM graph for Qwen3-1.7B. Triangles are LORSA attention features, and circles are transcoder features.](/img/docs/graph-lorsa.png)

### LORSA Nodes

CRM graphs have a new type of node for attention, called [LORSA](https://arxiv.org/abs/2504.20938) (Low-Rank Sparse Attention).

- LORSA nodes are **triangles** ▲. Transcoder nodes are circles ⏺.
- When you select a LORSA node, you see the LORSA dashboard. Hover over a top activation token to see its attention pattern.

### QK Tracing

A LORSA node also shows **QK tracing** results in the Node Connections panel. These are the top (query feature, key feature) pairs, and the top single features, that cause the attention. They tell you why a LORSA feature attends from one token to another token.

### Limits

- CRM prompts can have a maximum of 10 tokens.
- QK tracing makes generation slower.

### Links

- Source sets: [LORSA](https://www.neuronpedia.org/qwen3-1.7b/llamascope-2-lorsa-16k-k64) and [Transcoders](https://www.neuronpedia.org/qwen3-1.7b/llamascope-2-transcoder-16k-k64)
- [Example LORSA dashboard](https://www.neuronpedia.org/qwen3-1.7b/26-llamascope-2-lorsa-16k-k64/195)
- [OpenMOSS weights on HuggingFace](https://huggingface.co/OpenMOSS-Team/Llama-Scope-2-Qwen3-1.7B/tree/main)
