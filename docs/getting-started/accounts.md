---
sidebar_position: 3
---

# Accounts, API Keys & Limits

You can use most of Neuronpedia without an account. Sign in to save your work and to use some tools.

### Sign In

Click **Sign In** at the top right. You can sign in with Google, GitHub, Apple, or an email link. Accounts are free.

With an account, you can:

- Save and share [lists](../sparse-autoencoders/lists) of features.
- Add bookmarks, explanations, comments, and votes.
- Make [auto-interp](../sparse-autoencoders/auto-interp) explanations with your own AI provider key.
- Keep the [graphs](../circuit-tracing/generate-graphs) and [vectors](../steering#custom-vectors) that you make in your account.
- Upload [features](../sparse-autoencoders/upload-saes), [vectors](../steering#custom-vectors), and [graphs](../circuit-tracing/upload-graphs) with the API.

### Account Settings

Go to [neuronpedia.org/account](https://www.neuronpedia.org/account) to change these settings:

- **Username** - Public. Use only letters, numbers, and dashes.
- **Neuronpedia API Key** - Private. Use this key to call the [API](../api-and-data/api) and the [Python library](../api-and-data/python-library).
- **Auto-Interp Keys** - Private. Your API keys for OpenAI, Anthropic, Google, or OpenRouter. Neuronpedia uses them to make [auto-interp](../sparse-autoencoders/auto-interp) explanations for you.
- **Email Settings** - Subscribe to the newsletter, or unsubscribe from all emails.

### Use Your API Key

Put your API key in the `x-api-key` header:

```bash
curl -X POST https://www.neuronpedia.org/api/steer \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_NEURONPEDIA_API_KEY" \
  -d '{ ... }'
```

For the Python library, set the `NEURONPEDIA_API_KEY` environment variable.

Many `GET` endpoints do not need a key. Endpoints that write data, or that are connected to your account, need a key.

### Rate Limits

Neuronpedia limits the number of requests in each 60-minute window. Some examples of the default limits:

| Endpoint | Requests per hour |
| --- | --- |
| Steering (`/api/steer*`) | 240 |
| Test activations (`/api/activation/new`) | 1000 |
| Search explanations (`/api/explanation/search`) | 200 |
| Search TopK by token (`/api/search-topk-by-token`) | 500 |
| Search via inference (`/api/search-all`) | 1600 |
| Generate a graph (`/api/graph/generate`) | 30 |
| Jacobian Lens prompts (`/api/lens/prompt`) | 240 |
| NLA explanations (`/api/nla/explain`) | 120 |
| All other endpoints | 25000 |

If you go over a limit, the API returns HTTP status `429`. The response tells you the endpoint and its limit. The `x-limit-remaining` header shows how many requests you have left.

**Need higher limits for research?** [Email us](mailto:johnny@neuronpedia.org) with your use case. We can give your API key higher limits.
