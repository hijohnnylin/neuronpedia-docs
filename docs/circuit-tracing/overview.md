---
sidebar_position: 1
---

# Circuit Tracing

Circuit tracing shows the steps a model takes inside to get from a prompt to its next token. Neuronpedia makes **attribution graphs** for your prompts, and gives you tools to explore, label, steer, and share them.

Start here: [`https://neuronpedia.org/graph`](https://neuronpedia.org/graph)

![The circuit tracer for "The capital of the state containing Dallas is", with a subgraph that groups the Texas, capital, and Austin features.](/img/docs/graph-dallas.png)

### Background

Anthropic's [Circuit Tracing](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) paper shows a way to trace how a model gets to its output. The method replaces the model's MLPs with **transcoders**, which have features that are easier to understand. It then calculates how much each feature, token, and error term adds to the next one. The result is an attribution graph.

Neuronpedia made this tool with Anthropic and the Anthropic Fellows. It uses the open source [circuit-tracer](https://github.com/decoderesearch/circuit-tracer) library.

For a longer introduction, see:

- [The Circuit Analysis Research Landscape](https://neuronpedia.org/graph/info) - A post by Anthropic, Google DeepMind, Goodfire AI, EleutherAI, and Decode.
- [Attribution Graphs for Dummies](https://www.youtube.com/playlist?list=PL05yUGfKO5wP6S5_12z7LG30LZigRYx1e) - A two-part video tutorial.
- [The Utility of Interpretability](https://www.youtube.com/watch?v=9YQW2mH9FyA) - A Latent Space video that includes a demo of the Neuronpedia tool.

### Example

The [Dallas graph](https://www.neuronpedia.org/gemma-2-2b/graph?slug=gemma-fact-dallas-austin&pruningThreshold=0.6&densityThreshold=0.99) uses the prompt "The capital of the state containing Dallas is". Gemma 2 2B answers "Austin". The graph shows a path through the model that is approximately:

Dallas ➡️ Texas ➡️ capital ➡️ Austin

### In This Section

- [Generate a Graph](./generate-graphs) - Make a graph from your own prompt.
- [Explore a Graph](./explore-graphs) - Read the graph, make subgraphs, and group features into supernodes.
- [Steer from a Graph](./steer-graphs) - Test your circuit by turning features up or down.
- [Attention in Graphs (LORSA)](./attention-lorsa) - Graphs that also trace attention.
- [Upload Your Graphs](./upload-graphs) - Add graphs that you made with other tools.
