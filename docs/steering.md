---
sidebar_position: 2
---

# Steering Using SAE Features

Neuronpedia supports steering the output of models by increasing or decreasing the strength of SAE features.

You can think of this as Anthropic's "Golden Gate Claude" demonstration, except that you can use any feature, not just features about the Golden Gate Bridge.

Currently, only `Gemma-2B` is supported, but we're adding more support soon:
[`https://www.neuronpedia.org/steer/gemma-2b/res-jb`](https://www.neuronpedia.org/steer/gemma-2b/res-jb)

The API is documented at our [API Docs](http://localhost:3000/api-doc).

There is an hourly rate limit of 100 steers per user.

Python Example Code

```
import json
import requests

# prompt and model
PROMPT = "The most iconic structure on Earth is"
MODEL_ID = "gemma-2b"

# feature about San Francisco
FEATURE = {"modelId": "gemma-2b", "layer": "6-res-jb", "index": 10200, "strength": 30}

# other settings
TEMPERATURE = 0.2
N_TOKENS = 16
FREQ_PENALTY = 1.0
SEED = 16
STRENGTH_MULTIPLIER = 4

# make the request
url = "https://www.neuronpedia.org/api/steer"
data = {
    "prompt": PROMPT,
    "modelId": MODEL_ID,
    "features": [FEATURE],
    "temperature": TEMPERATURE,
    "n_tokens": N_TOKENS,
    "freq_penalty": FREQ_PENALTY,
    "seed": SEED,
    "strength_multiplier": STRENGTH_MULTIPLIER,
}
headers = {"Content-Type": "application/json"}

# send request
response = requests.post(url, json=data, headers=headers)
json_response = response.json()
formatted_response = json.dumps(json_response, indent=4)
print(formatted_response)
```
