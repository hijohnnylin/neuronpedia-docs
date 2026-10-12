---
sidebar_position: 1
---

# Key Concepts

Neuronpedia organizes data in a few levels. If you know these terms, the URLs and the API are easy to use.

### Models

A **model** is the AI model that we study, for example `gemma-2-2b` or `llama3.3-70b-it`. Each model has a page at `neuronpedia.org/[MODEL_ID]`.

Model IDs on Neuronpedia are not always the same as the HuggingFace IDs. For example, `openai-community/gpt2` is `gpt2-small` on Neuronpedia.

### Sources and Source Sets

A **source** is a group of features (or neurons, or vectors) in **one layer** of a model. For example, one SAE is one source.

A source ID starts with the layer number, then the source set name:

- `20-gemmascope-res-16k` is layer `20` of the source set `gemmascope-res-16k`.
- `6-res-jb` is layer `6` of the source set `res-jb`, which means "residual stream, by Joseph Bloom".

A **source set** is a group of sources that use the same method and hook, across many layers. For example, [`res-jb`](https://www.neuronpedia.org/gpt2-small/res-jb) has 12 SAEs, one for each layer of GPT-2 Small.

### Releases

A **release** is a group of one or more source sets. A release usually goes with a paper or a blog post. For example, [Gemma Scope](https://www.neuronpedia.org/gemma-scope) is a release with SAEs and transcoders for many layers and hooks of Gemma 2.

![Diagram that shows a release as the largest rectangle, with two source sets in it, and three sources in each source set.](/img/docs/sae-groupings.png)

### Features, Latents, Neurons, and Vectors

A **feature** is one direction in a source, and it has a number called an **index**. Some papers say **latent** instead of feature. On Neuronpedia, these are the same.

A feature has a unique ID with three parts: `[MODEL_ID]/[SOURCE_ID]/[INDEX]`. For example:

- `gemma-2-2b/20-gemmascope-res-16k/10956`
  - Model: `gemma-2-2b`
  - Source: `20-gemmascope-res-16k`
  - Index: `10956`

Its URL is [`neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k/10956`](https://www.neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k/10956).

Other things also use this format:

- **Neurons** - A model's own MLP neurons, for some older models.
- **Transcoder features** - Features from transcoders and cross-layer transcoders (CLTs). These are used in [circuit tracing](../circuit-tracing/overview).
- **Vectors** - Custom steering vectors that users upload. See [Steering](../steering#custom-vectors).
- **Attention heads** - These use a different URL: `[MODEL_ID]/head/[LAYER]/[HEAD]`. See [Attention Heads](../attention-heads).

### Explanations

An **explanation** is a short text label for a feature, like "references to the Golden Gate Bridge". Most explanations are made by AI models. This is called **auto-interp**. See [Auto-Interp](../sparse-autoencoders/auto-interp).
