---
sidebar_position: 1
---

# Sparse Autoencoders

**Sparse Autoencoders (SAEs)** find interpretable **features** in a model's activations. Each feature is a "thing that the model knows", like "the Golden Gate Bridge" or "text in French". [Here is an explainer on SAEs](https://transformer-circuits.pub/2023/monosemantic-features).

Neuronpedia hosts SAEs and similar methods from many research groups:

- **SAEs** - Standard, TopK, JumpReLU, and Matryoshka SAEs.
- **Transcoders** - Like SAEs, but they predict an MLP's output from its input. Transcoders and **cross-layer transcoders (CLTs)** are used in [circuit tracing](../circuit-tracing/overview).
- **Crosscoders** - Features that are shared across layers or models.

Large releases include [Gemma Scope](https://www.neuronpedia.org/gemma-scope) and [Gemma Scope 2](https://www.neuronpedia.org/gemma-scope-2) by Google DeepMind, [Llama Scope](https://www.neuronpedia.org/llama-scope), and SAEs for GPT-2, Pythia, Qwen, and more. See all of them under **Releases** in the top menu.

### Example

The following is the source `20-gemmascope-res-16k` for `gemma-2-2b`. It is one SAE: layer 20, residual stream, 16k features, from Gemma Scope. It is at [`neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k`](https://www.neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k).

![The source page for 20-gemmascope-res-16k, with its configuration and a search box.](/img/docs/sae-source-page.png)

If you do not know the terms "source", "source set", or "release", read [Key Concepts](../getting-started/key-concepts) first.

### What You Can Do

- [**Feature Dashboards**](./feature-dashboards) - Look at a feature's top activations, logits, and explanations. Test it with your own text.
- [**Search**](./search) - Find features by explanation text, or by running your own text through the model.
- [**Auto-Interp**](./auto-interp) - Make and score explanations with AI models.
- [**Steering**](../steering) - Change the model's output with a feature.
- [**Lists**](./lists) - Save and share groups of features.
- [**Embeds**](./embeds) - Show a feature on your website or blog.
- [**Upload Your SAEs**](./upload-saes) - Add your own SAEs to Neuronpedia.
