---
sidebar_position: 2
---

# Temporal Feature Analysis

**Temporal Feature Analysis** is a method by [Lubana, Rager, Hindupur, et al.](https://arxiv.org/abs/2511.01836) It finds features that capture both the **context** of a text (for example, "this is a story") and **local** information (for example, "this token is a number").

Start here: [Release](https://www.neuronpedia.org/temporal-feature-analysis) | [Demo](https://www.neuronpedia.org/gemma-2-2b/12-temporal-res?simMatrixDemo=alice-maya) | [Paper](https://arxiv.org/abs/2511.01836) | [Notebook](https://colab.research.google.com/github/eslubana/TemporalFeatureAnalysis/blob/main/DEMO_Temporal_Feature_Analysis.ipynb)

![The similarity matrix for a story that changes to Python code. The two bright squares show the two parts of the text.](/img/docs/temporal.png)

### Similarity Matrix

The similarity matrix shows how similar the representation of each token is to each other token. Bright squares show parts of the text with the same context.

1. Open the [demo](https://www.neuronpedia.org/gemma-2-2b/12-temporal-res?simMatrixDemo=alice-maya).
2. Select a demo on the left, or type your own text (at least one sentence is best). Then click **Generate**.
3. Hover over a token to highlight its cells in the matrix. Hover over a cell to see its tokens.
4. Click **Share** to get a link.

### Available Sources

| Model | Layers |
| --- | --- |
| Gemma 2 2B | [12](https://www.neuronpedia.org/gemma-2-2b/12-temporal-res) |
| Llama 3.1 8B | [15](https://www.neuronpedia.org/llama3.1-8b/15-temporal-res), [26](https://www.neuronpedia.org/llama3.1-8b/26-temporal-res) |

These sources also have feature dashboards, and you can [steer](../steering) with them.
