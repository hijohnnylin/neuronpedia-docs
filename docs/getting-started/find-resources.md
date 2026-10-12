---
sidebar_position: 2
---

# Find Models and Data

Neuronpedia has data for many models, including Gemma, Llama, Qwen, GPT-2, GPT-OSS, DeepSeek, and Pythia. There are many ways to find what you want.

### Home Page

The [home page](https://www.neuronpedia.org) shows the newest tools and releases. Click a card to start.

![The Neuronpedia home page.](/img/docs/home.png)

### Top Menu

- **Releases** - A list of all releases. Example: [Gemma Scope 2](https://www.neuronpedia.org/gemma-scope-2).
- **Jump To** - Go to a model or a feature by ID, or open a random feature.
- **Search** - [Search Explanations](../sparse-autoencoders/search#search-explanations), [Search via Inference](../sparse-autoencoders/search#search-via-inference), and [Search TopK by Token](../sparse-autoencoders/search#search-topk-by-token).
- **Steer** - The [steering](../steering) tool.
- **Exports** - [Download data](../api-and-data/exports).
- **API** - The [API reference](https://www.neuronpedia.org/api-doc).

### Release Pages

A release page shows the source sets in the release, with links to the paper, the code, and the weights. Some large releases (like [Gemma Scope](https://www.neuronpedia.org/gemma-scope) and [Gemma Scope 2](https://www.neuronpedia.org/gemma-scope-2)) also have an interactive demo.

![The Gemma Scope 2 release page.](/img/docs/release-gemma-scope-2.png)

### Model Pages

A model page (`neuronpedia.org/[MODEL_ID]`) shows all the releases for that model, an [Attention Visualizer](../attention-heads), and search tools.

![The model page for Qwen 3.5 0.8B.](/img/docs/model-page.png)

### Source Pages

A source page (`neuronpedia.org/[MODEL_ID]/[SOURCE_ID]`) shows the configuration of one SAE or transcoder: its HuggingFace path, number of features, hook, architecture, and the dataset that we used for its dashboards. Click **How To Load** to see code that loads it with [SAELens](https://github.com/decoderesearch/SAELens).

Some source pages also show:

- A **UMAP** map of its features. Each point is a feature. Search the map, or click a point to open the feature.
- **SAE evaluations** from [SAEBench](https://www.neuronpedia.org/sae-bench).
- [Search TopK by Token](../sparse-autoencoders/search#search-topk-by-token), and a [similarity matrix](../research-releases/temporal-feature-analysis) for temporal SAEs.

![The source page for gemma-2-2b · 20-gemmascope-res-16k.](/img/docs/sae-source-page.png)

### Available Resources

The [Available Resources](https://www.neuronpedia.org/available-resources) page lists every public model and source. It also shows which sources have **inference enabled**. You can [steer](../steering), [search via inference](../sparse-autoencoders/search#search-via-inference), and test custom text only on sources with inference enabled. Click **Request** to ask us to enable inference for a source.

![The Available Resources page.](/img/docs/available-resources.png)
