---
sidebar_position: 4
---

# Steer from a Graph

A subgraph is a hypothesis. To test it, you can steer the model from the graph page: turn features up or down, then look at how the output changes.

### Steer Nodes and Supernodes

In the [Dallas example](https://www.neuronpedia.org/gemma-2-2b/graph?slug=gemma-fact-dallas-austin&pruningThreshold=0.6&densityThreshold=0.99), our hypothesis is:

Dallas ➡️ Texas ➡️ capital ➡️ Austin

To test it, click **Steer** in the subgraph, then decrease (steer negatively) one supernode at a time:

1. Decrease the "capital" step: Dallas ➡️ Texas ➡️ ❓ ➡️ the model says **Texas**.
2. Decrease the "Texas" step: Dallas ➡️ ❓ ➡️ capital ➡️ the model says **Albany** (the capital of New York).

Both results support the hypothesis. This does not prove that the circuit is correct, but it is good evidence.

![Steering two supernodes negatively in the Dallas graph.](https://neuronpedia.s3.amazonaws.com/site-assets/blog/steer-graph.gif)

### Steer with Features That Are Not in the Graph

You can also steer with any other feature. For example, steer the Dallas graph with a California feature, and the model says **Sacramento**.

1. Click **+ Add Feature**.
2. Search for the feature. Tip: select the later layers. You can select more than one layer.
3. Select the feature and the token position where you think it is most important.
4. Set the steering strength, then click **Steer**.

![Steering the Dallas graph with a California feature.](https://neuronpedia.s3.amazonaws.com/site-assets/blog/graph-steer-add.gif)

For more about steering, see [Steering](../steering).
