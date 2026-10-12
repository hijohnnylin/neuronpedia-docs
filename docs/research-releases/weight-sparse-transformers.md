---
sidebar_position: 3
---

# Weight-Sparse Transformers

OpenAI trained [weight-sparse transformers](https://openai.com/index/understanding-neural-networks-through-sparse-circuits/) (Gao et al.). Most of their weights are zero, so their circuits are small and easier to understand. Neuronpedia has a visualizer and dashboards for the Python code model, `circuitgpt-python`.

Start here: [`neuronpedia.org/sparse-circuits`](https://www.neuronpedia.org/sparse-circuits)

> ⚠️ **Warning:** This is a beta. It is not fully validated. Be careful before you use it for research.

![The sparse circuits visualizer for MLP neuron 5543 in layer 6.](/img/docs/sparse-circuits.png)

### Visualizer

The visualizer shows one MLP neuron (in the middle) and its connections:

- **Residual channels** are the vertical lines. Lines above the neuron go into it. Lines below the neuron come out of it.
- **Other MLP neurons** on the left and right write to and read from these channels. Each shows its auto-interp labels.

Select a source and an index at the top, then click **Go**. Hover over a neuron or a channel to see its details.

![Using the visualizer to look at residual channels and MLP neurons.](https://neuronpedia.s3.amazonaws.com/site-assets/blog/apr/circuit-sparsity.gif)

### Positive and Negative Dashboards

In this model, both positive and negative activations have meaning. So its dashboards show the top **positive** and top **negative** activations side by side, and each side has its own explanation. For example, in [this MLP neuron](https://www.neuronpedia.org/circuitgpt-python/2-mlp/4826), the negative activations are the Python function `sorted`, and the positive activations are the keyword `for`.

![A dashboard with positive and negative activations side by side.](/img/docs/sparse-circuits-dashboard.png)

### Python Auto-Interp and Dataset

The model was trained only on Python code, so normal auto-interp gives labels that are too general, like "snippets of code". We wrote a [Python code explainer](https://github.com/decoderesearch/automated-interpretability/blob/f345c05baf23dd9bbed1f4f4ac734fdc54a7af42/neuron_explainer/explanations/explainer.py#L1589) that gives specific labels, like "for loop and its iterable".

To make the dashboards, we used a [simplified Python dataset](https://huggingface.co/datasets/neuronpedia/python-code-simplified). It removes comments, names, and strings that the model did not see in training.

### Related

- [Weightpedia](https://weightpedia.org) by Arnau Marin-Llobet and Stefan Heimersheim - A reference for single weights in the same model.
