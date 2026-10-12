---
sidebar_position: 9
slug: /assistant-axis
---

# Assistant Axis

The **Assistant Axis** is a direction in a model's activations that measures how much the model acts like its normal "assistant" persona. Anthropic found that models can drift away from this persona during a chat. When they drift, they are more likely to give harmful, sycophantic, or jailbroken answers. **Activation capping** stops the drift: it keeps the model's position on the axis inside its normal range.

Start here: [`https://neuronpedia.org/assistant-axis`](https://neuronpedia.org/assistant-axis)

![The Assistant Axis demo. The left side is the default Llama 3.3 70B, and the right side is the capped model. The middle shows how far each answer is from the assistant persona.](/img/docs/assistant-axis.png)

Learn more: [Anthropic post](https://www.anthropic.com/research/assistant-axis), [paper (Lu et al.)](https://arxiv.org/abs/2601.10387), and [GitHub](https://github.com/safety-research/assistant-axis).

### Use the Demo

The demo uses `Llama 3.3 70B Instruct`. It shows two chats side by side:

- **Default** (left) - The normal model.
- **Capped** (right) - The same model with activation capping.

The middle chart shows each reply's position, from **Role-Play** to **Assistant**. When the default model drifts toward role-play, the capped model stays near the assistant end.

To start:

1. Select a demo at the top: **Isolation**, **Sycophancy**, or **Tax Fraud**. Or select **Free Chat** to use your own messages.
2. Type a message, then send it. Both models reply.
3. Click the share button to save the chat and get a link.

> ⚠️ **Content warning:** The "Isolation" demo mentions self-harm.

Try to red-team the capped model. It is not impossible to break, and examples of how it fails are useful.

### The Vector

The Assistant Axis is also a [vector dashboard](https://www.neuronpedia.org/llama3.3-70b-it/40-neuronpedia-resid-post/101874252) on Neuronpedia. You can use it to [steer](./steering) like any other vector.
