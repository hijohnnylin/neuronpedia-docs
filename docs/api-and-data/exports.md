---
sidebar_position: 3
---

# Exports

You can download Neuronpedia's data. This is faster than the API for a large number of features, and it does not use your rate limit.

**Exports:** [`neuronpedia-datasets.s3.us-east-1.amazonaws.com/index.html?prefix=v1/`](https://neuronpedia-datasets.s3.us-east-1.amazonaws.com/index.html?prefix=v1/)

![The exports bucket, with one folder for each model.](/img/docs/exports.png)

### Folders

The exports use the same IDs as the website:

```
v1/
├── config/                    # explanation types, score types, and other settings
└── [MODEL_ID]/
    ├── [SOURCE_ID]/
    │   ├── features/          # batch-0.jsonl.gz, batch-1.jsonl.gz, ...
    │   ├── activations/       # top activations for each feature
    │   ├── explanations/      # auto-interp explanations
    │   ├── model.jsonl
    │   ├── release.jsonl
    │   ├── source.jsonl
    │   └── sourceset.jsonl
    └── headvis/[DATASET]/     # attention head data, in the HeadVis format
```

Each `.jsonl.gz` file is a gzipped file with one JSON object on each line.

Some sources have more than one explanations folder, for example `explanations-gpt-4o-mini/`. Each folder has the explanations from a different AI model.

### Example - Download With the AWS CLI

The bucket is public, so you do not need an AWS account:

```bash
aws s3 sync --no-sign-request \
  s3://neuronpedia-datasets/v1/gemma-2-2b/20-gemmascope-res-16k/explanations/ \
  ./explanations/
```

### Load Exports Into Your Own Neuronpedia

If you [run Neuronpedia yourself](../open-source/self-hosting), you can import exports into your local database from the admin panel.

### Missing Something?

If you cannot find the data that you need, [email us](mailto:johnny@neuronpedia.org). We can usually export it for you within a few days.

### Older Exports

Some old exports are at [neuronpedia-exports.s3.amazonaws.com](https://neuronpedia-exports.s3.amazonaws.com/index.html).
