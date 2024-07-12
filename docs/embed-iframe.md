---
sidebar_position: 3
---

# Embed Features (iframe)

## Basics

Neuronpedia features can be embedded on your site or third-party sites, usually through iframes.

Every feature has an `Embed Code/Link` section with a Copy icon which allows you to quickly paste the iframe code or embed link for that feature.

![Screenshot of a embed code at https://neuronpedia.org/gpt2-small/0-res-jb/14057](img/embedcode.png)

Alternatively, you can construct your own by simply adding `?embed=true` to the end of any feature's URL.

## Simple Example

The following demonstrates the most basic embed for `GPT2-SMALL@0-RES-JB:14057`:

Feature URL: `https://neuronpedia.org/gpt2-small/0-res-jb/14057`

Embed URL: `https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true`

Embed Code: `<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true" title="Neuronpedia" style="height: 300px; width: 540px;"></iframe>`

And here's what the embed looks like:

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"540px", height:"300px"}}></iframe>

## LessWrong Example

If you're posting on LessWrong, the editor supports embedding Neuronpedia features directly. Just copy paste the embed link (not the iframe code) into the editor.
You can also modify the `height=300` query parameter and LessWrong will use that as the embedding height.

## Customizations

### Width and Height

You can customize the width and height of the iframe by modifying the style attribute. Note that widths smaller than 640 pixels will result in stacking the dashboard vertically, and show fewer top logits (5 instead of 10).

Here's the example above, with larger width and height:

`<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"645px", height:"420px"}}></iframe>`

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"645px", height:"420px"}}></iframe>

### Show Activation Testing

Enable or disable showing activation testing by changing query parameter `embedtest` to true or false. This is enabled by default.

#### Enabled

`<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=false&embedtest=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>`

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=false&embedtest=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>

#### Disabled

`<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=false&embedtest=false" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>`

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=false&embedtest=false" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>


### Show Plots

Enable or disable showing the two plots by changing query parameter `embedplots` to true or false. This is enabled by default.

`<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=false" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>`

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=true&embedplots=false" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>

### Show Explanation

Enable or disable showing the explanation (usually auto-interp) by changing query parameter `embedexplanation` to true or false. This is enabled by default.

Here's the example above, without explanation:

`<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=false&embedplots=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>`

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true&embedexplanation=false&embedplots=true" title="Neuronpedia" style={{border: "1px solid #ddd", borderRadius: "10px", width:"480px", height:"300px"}}></iframe>
