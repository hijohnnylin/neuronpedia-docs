---
sidebar_position: 1
---

# Neuronpedia Is Open Source

All of Neuronpedia's code is open source, under the [Apache 2.0 license](https://github.com/hijohnnylin/neuronpedia/blob/main/LICENSE).

**GitHub:** [github.com/hijohnnylin/neuronpedia](https://github.com/hijohnnylin/neuronpedia)

You can run your own copy of Neuronpedia, for example to use your own private models and SAEs, or to make changes to it. Read [why we made Neuronpedia open source](https://www.neuronpedia.org/blog/neuronpedia-is-now-open-source).

### What Is in the Repo

Neuronpedia is a group of apps. Each app runs by itself.

| App | What it does |
| --- | --- |
| `webapp` | The website and the public API. Next.js and Postgres. |
| `inference` | Runs the models for activations, steering, search, and the Jacobian Lens. |
| `autointerp` | Makes and scores explanations. |
| `graph` | Makes attribution graphs. |
| `nla` | Runs Natural Language Autoencoders. |
| `sparsity` | Runs weight-sparse transformers. |

The `inference`, `graph`, and `nla` apps use [interp-engine](./interp-engine) to run models.

### Run It Yourself

The [README](https://github.com/hijohnnylin/neuronpedia#readme) has the full steps. In short:

1. **Set up a database.** Install Postgres 16+ with the [pgvector](https://github.com/pgvector/pgvector) extension, then run `make db-init`.
2. **Start the webapp.** Run `make webapp-install`, then `make webapp-dev`. Go to [localhost:3000](http://localhost:3000).
3. **Import data.** Your database is empty at the start. Use the admin panel to import sources from the [exports](../api-and-data/exports).
4. **Start other apps that you need.** For example, run `make inference-dev` for steering and test activations. This needs a GPU for most models.

Run `make help` to see all the commands.

### Use Your Own Data

To make dashboards for your own SAEs, see the README section "[I Want to Generate My Own Dashboards/Data and Add It to Neuronpedia](https://github.com/hijohnnylin/neuronpedia#i-want-to-generate-my-own-dashboardsdata-and-add-it-to-neuronpedia)". You can also [upload your SAEs to neuronpedia.org](../sparse-autoencoders/upload-saes).

### Contribute

We accept pull requests. Read the [contributing section](https://github.com/hijohnnylin/neuronpedia#contributing) of the README first. You can also help with:

- **Data** - [SAEs](../sparse-autoencoders/upload-saes), [attribution graphs](../circuit-tracing/upload-graphs), [Jacobian lenses](../jacobian-lens#contribute-a-lens), and [NLAs](../natural-language-autoencoders#contribute-an-nla) for new models.
- **Bugs and ideas** - [Open an issue on GitHub](https://github.com/hijohnnylin/neuronpedia/issues), or tell us on [Slack](../feedback).
