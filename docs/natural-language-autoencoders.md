---
sidebar_position: 8
slug: /natural-language-autoencoders
---

# Natural Language Autoencoders

**Natural Language Autoencoders (NLAs)** translate a model's activations into plain English, so that you can read what the model is "thinking" at a token. Neuronpedia hosts NLAs from Anthropic and from the community.

Start here: [`https://neuronpedia.org/nla`](https://neuronpedia.org/nla)

![The NLA interface. We clicked the token "my" in a message about Charizard. The right panel shows the explanation from the activation verbalizer, its RMSE score, and a note from a human editor.](/img/docs/nla-saved.png)

### How NLAs Work

An NLA is a pair of models that are trained together:

- The **Activation Verbalizer (AV)** reads an activation and writes text that explains it.
- The **Activation Reconstructor (AR)** reads that text and changes it back into an activation.

If the AR can rebuild the original activation from the AV's text, then the text probably holds the information that was in the activation.

Learn more:

- [Paper](https://transformer-circuits.pub/2026/nla/index.html) by Fraser-Taliente, Kantamneni, Ong et al.
- [Anthropic post](https://www.anthropic.com/research/natural-language-autoencoders) and [intro video](https://www.youtube.com/watch?v=j2knrqAzYVY)
- [GitHub](https://github.com/kitft/natural_language_autoencoders) - Train your own NLAs.

> ⚠️ **Warning:** NLAs can **confabulate**. This means that they can give explanations that are not expected or not correct. Read the paper's [limitations](https://transformer-circuits.pub/2026/nla/index.html#discussion-and-limitations) section before you use NLAs for research.

### Available NLAs

| Model | Layer | Trained by |
| --- | --- | --- |
| [Llama 3.3 70B Instruct](https://www.neuronpedia.org/llama3.3-70b-it/nla) | 53 | Anthropic |
| [Gemma 3 27B Instruct](https://www.neuronpedia.org/gemma-3-27b-it/nla) | 41 | Anthropic |
| [Qwen 2.5 1.5B Instruct](https://www.neuronpedia.org/qwen2.5-1.5b-it/nla) | 18 | Andy Xu |

Select a model with the tabs at the top of the page.

### Use the NLA Chat

1. Select a model, then select a demo (for example, **Charizard** or **Mount Everest**), or select **Free Chat** to write your own message.
2. Send a message. The model replies.
3. Click a token to explain it.
   - **Underlined tokens** already have explanations. Click one to see it.
   - **Gray tokens** do not have explanations yet. Click one to make an explanation.
4. Read the explanation in the right panel.

Other controls:

- **Token Selection: Auto / Manual** - In Auto mode, Neuronpedia picks the tokens to explain. In Manual mode, you pick them.
- **Special Tokens: Hide / Show** - Show or hide chat template tokens, like `<|im_start|>`.
- **Edit** - Click the pencil under a message to edit it. You can edit both the user message and the assistant message. For example, change the assistant's answer from "cat" to "dog", then explain the "dog" token.
- **Search Explanations** - Search the text of all explanations in the chat.
- **Share** - Every chat has a URL that you can share.

![Editing the assistant response from cat to dog, then explaining the dog token.](https://neuronpedia.s3.amazonaws.com/site-assets/blog/nla-edit.gif)

### RMSE Score

Each explanation has an **RMSE** (Relative Mean Squared Error) score. Neuronpedia passes the AV's explanation through the AR, and then compares the result with the model's original activation.

- A score near **0** is good.
- A score near **1** is bad.

Tokens with a high (bad) score have an orange underline. Use RMSE only as a rough guide.

### NLAs and SAE Features

You can also give an SAE feature's vector to an NLA. The AV then writes an explanation for the feature, instead of for a token. This sometimes gives good labels, but we do not yet know why it works.

On a feature dashboard for a supported model and layer, click **Explain With NLA**. For example, try this [Gemma 3 27B feature](https://www.neuronpedia.org/gemma-3-27b-it/41-gemmascope-2-res-262k/10).

NLAs can also **score** other explanations. See [Auto-Interp](./sparse-autoencoders/auto-interp#score-an-explanation).

![Gemma's activation verbalizer labels an SAE latent.](https://neuronpedia.s3.amazonaws.com/site-assets/blog/nla-explain.gif)

### API

You can use the NLAs from code.

- [Example notebook](https://github.com/hijohnnylin/neuronpedia/blob/main/apps/nla/api_demo.ipynb)
- [API reference](https://www.neuronpedia.org/api-doc#tag/nla)

The default limit is 120 explanation requests per hour for each user. Each request can explain up to 16 tokens. If you need a higher limit for research, [email us](mailto:johnny@neuronpedia.org).

### Contribute an NLA

Did you train an NLA? We accept NLAs for new models and layers. [Email us](mailto:johnny@neuronpedia.org) to add yours to Neuronpedia.
