---
sidebar_position: 1
---

# API

Neuronpedia has a public API for almost everything on the website. You can get features and explanations, test activations, steer, search, make graphs, run the Jacobian Lens, use NLAs, and upload data.

**API reference:** [`https://neuronpedia.org/api-doc`](https://www.neuronpedia.org/api-doc). You can test calls in your browser.

![The Neuronpedia API reference.](/img/docs/api-doc.png)

### Before You Start

- **Check what is available.** The [Available Resources](https://www.neuronpedia.org/available-resources) page lists all models and sources in the API. Only sources with **inference enabled** can do steering, test activations, and search via inference.
- **Get an API key.** Many `GET` endpoints work without a key. Endpoints that write data need a key in the `x-api-key` header. See [Accounts](../getting-started/accounts).
- **Know the limits.** See [Rate Limits](../getting-started/accounts#rate-limits).
- **Use exports for bulk data.** If you need data for many features, download the [exports](./exports). Do not call the API for each feature.

### Example - Get a Feature

Add `/api/feature` after `neuronpedia.org` in any feature URL:

```bash
curl https://www.neuronpedia.org/api/feature/gemma-2-2b/20-gemmascope-res-16k/10956
```

The response has the feature's activations, explanations, logits, and density.

### Example - Test Activations

Get one feature's activations for your text:

```bash
curl -X POST https://www.neuronpedia.org/api/activation/new \
  -H "Content-Type: application/json" \
  -d '{
    "feature": {"modelId": "gemma-2-2b", "source": "20-gemmascope-res-16k", "index": "10956"},
    "customText": "We are committed to being your best vendor."
  }'
```

### Groups of Endpoints

| Group | What it does |
| --- | --- |
| **Features** | Get a feature or vector. |
| **Activations** | Test one feature, or all features in a source, with your text. |
| **Explanations** | Search, make, and score explanations. Test the interpretable score. |
| **Search via Inference** / **Search TopK by Token** | Find the top features for your text. |
| **Steering** | Steer completions and chats. See [Steering](../steering#api). |
| **Attribution Graphs** | Make, upload, get, and steer graphs. Save subgraphs. See [Circuit Tracing](../circuit-tracing/overview). |
| **Jacobian Lens** | Run prompts through the [J-lens](../jacobian-lens). |
| **NLA** | Explain activations with [NLAs](../natural-language-autoencoders). |
| **Vectors** | Upload, list, and delete [custom vectors](../steering#custom-vectors). |
| **Lists** and **Bookmarks** | Make and change [lists](../sparse-autoencoders/lists) and bookmarks. |
| **Models** | Add a new model. |

### Python and TypeScript

- **Python** - Use the [Neuronpedia Python library](./python-library) (`pip install neuronpedia`).
- **Other languages** - The [API reference](https://www.neuronpedia.org/api-doc) shows example code for Shell, Python, Node.js, Ruby, and more.

### Questions or Requests

Do you need a new endpoint, or a higher limit? [Contact us](https://www.neuronpedia.org/contact).
