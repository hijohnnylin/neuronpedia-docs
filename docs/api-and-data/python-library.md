---
sidebar_position: 2
---

# Python Library

The Neuronpedia Python library makes it easy to use the [API](./api) from Python.

```bash
pip install neuronpedia
```

Source code: [webapp-python-client on GitHub](https://github.com/hijohnnylin/neuronpedia/tree/main/webapp-python-client)

### Set Your API Key

Some calls need an API key, for example calls that upload data or change your account.

1. [Sign in](../getting-started/accounts) at neuronpedia.org.
2. Copy your API key from [neuronpedia.org/account](https://www.neuronpedia.org/account).
3. Set the environment variable `NEURONPEDIA_API_KEY`, for example in a `.env` file.

```python
from dotenv import load_dotenv

load_dotenv()  # loads NEURONPEDIA_API_KEY from .env
```

### Example - Get a Feature

```python
from neuronpedia.np_sae_feature import SAEFeature

sae_feature = SAEFeature.get("gemma-2-2b", "20-gemmascope-res-16k", "10956")
print(sae_feature)
```

### Example - Upload a Vector, Then Steer With It

```python
from neuronpedia.np_vector import NPVector
from neuronpedia.sample_data import GEMMA2_2B_IT_DINOSAURS_VECTOR

np_vector = NPVector.new(
    label="dinosaurs",
    model_id="gemma-2-2b-it",
    layer_num=20,
    hook_type="hook_resid_pre",
    vector=GEMMA2_2B_IT_DINOSAURS_VECTOR,
    default_steer_strength=44,
)

response = np_vector.steer_chat(
    steered_chat_messages=[{"role": "user", "content": "Write a one sentence story."}]
)
print("UI Steering at: " + response["shareUrl"])
```

### Example Notebooks

| Notebook | What it does |
| --- | --- |
| [get_sae_feature](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/get_sae_feature.ipynb) | Get a feature and its data. |
| [steer_completion](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/steer_completion.ipynb) | Steer a completion with a vector. |
| [upload_vector_and_activations](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/upload_vector_and_activations.ipynb) | Upload a vector, test it, and upload its activations. |
| [upload_features](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/upload_features.ipynb) | Upload your own features. See [Upload Your SAEs](../sparse-autoencoders/upload-saes). |
| [new-model](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/new-model.ipynb) | Add a new model. |
| [generate_graph](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/generate_graph.ipynb) | Make an attribution graph. |
| [upload_graph](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/upload_graph.ipynb) | Upload an attribution graph. See [Upload Graphs](../circuit-tracing/upload-graphs). |
| [llama_3.3_70b_instruct](https://github.com/hijohnnylin/neuronpedia/blob/main/webapp-python-client/neuronpedia/examples/llama_3.3_70b_instruct.ipynb) | Get activations and top features for your text, with Goodfire's Llama 3.3 70B SAE. |

### Other Libraries

These libraries work with Neuronpedia:

- [SAELens](https://github.com/decoderesearch/SAELens) - Train and load SAEs. Many SAEs on Neuronpedia can be loaded with SAELens.
- [circuit-tracer](https://github.com/decoderesearch/circuit-tracer) - Make attribution graphs on your own GPU, then upload them to Neuronpedia.
- [interp-engine](https://interp-engine.org) - The library that Neuronpedia uses to run models. See [interp-engine](../open-source/interp-engine).
