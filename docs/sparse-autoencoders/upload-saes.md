---
sidebar_position: 7
---

# Upload Your SAEs

There are two ways to put your SAEs (or transcoders, or other features) on Neuronpedia.

### Option 1: Ask Us

[Fill out this form](https://forms.gle/Yg51TYFutJysiyDP7). It takes less than 5 minutes. We make the dashboards, explanations, and inference for you. We usually reply within a few days.

Use this option if you want your SAEs to be listed in the **Releases** menu, or to have inference (steering, search, and test activations).

### Option 2: Upload With Python

Use the [Neuronpedia Python library](../api-and-data/python-library) to upload features yourself. You must have a [Neuronpedia API key](../getting-started/accounts#account-settings).

```python
pip install neuronpedia
```

The steps are:

1. **Make sure the model exists.** Go to `neuronpedia.org/[MODEL_ID]`. If it does not exist, make it with `Model.new(...)`.
2. **Make a source set.** For example, a source set named `puppyscope-res-2k` makes one source for each layer: `0-puppyscope-res-2k`, `1-puppyscope-res-2k`, and more.
3. **Upload features.** For each source, call `source.upload_batch(...)` with your features. Each feature can have activations, explanations, and logits.

Only the user who made a source set can upload features to it.

See the example notebook: [upload_features.ipynb](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/upload_features.ipynb).

Features that you upload are at their URLs right away. They are not listed on the home page or in the default dropdowns.

### Make Dashboards With SAEDashboard

To make dashboard data (top activations, logits, and density) for your SAEs, use [SAEDashboard](https://github.com/jbloomAus/SAEDashboard). It works with [SAELens](https://github.com/decoderesearch/SAELens) SAEs.
