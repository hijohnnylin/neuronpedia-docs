---
sidebar_position: 6
---

# Upload Your Graphs

You can make graphs with a different library, a different model, or your own transcoders, and then upload them to Neuronpedia. Uploaded graphs have the same tools as generated graphs: subgraphs, supernodes, feature details, and sharing.

Examples of uploaded graphs:

- A [GPT2-Small graph](http://neuronpedia.org/gpt2-small/graph?slug=The-trial-lasted-from-the-year-1711-to-the-year-17&pruningThreshold=0.6&densityThreshold=0.99) from Goodfire
- A [Gelu-4L graph](https://www.neuronpedia.org/gelu-4l-x128k64-v0/graph?slug=test-1-gelu4l) from EleutherAI

### Step 1: Validate Your Graph

Neuronpedia needs graph files in a specific JSON format. This format is based on Anthropic's original format.

Paste your graph JSON into the [Graph Validator](https://neuronpedia.org/graph/validator). It shows errors, missing fields, and optional fields that you can add.

![The graph validator.](/img/docs/graph-validator.png)

### Step 2: Upload

Use one of these:

- [Python notebook](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/upload_graph.ipynb) (recommended)
- [API](https://www.neuronpedia.org/api-doc#tag/attribution-graphs/post/api/graph/signed-put)

You need a Neuronpedia account and an [API key](../getting-started/accounts).

### Featured Graphs

The public dropdown on the graph page shows featured graphs, such as the ones from the circuit-tracer repository and from Anthropic's papers. If you want us to feature your graph, [contact us](../feedback).

### Tools That Read Neuronpedia Graphs

Other tools can read graphs in the Neuronpedia format. For example, [circuit-motifs](https://github.com/mkenney2/circuit-motifs) runs network motif analysis on any Neuronpedia graph.
