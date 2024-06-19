---
sidebar_position: 3
---

# Embed Features (iframe)

Neuronpedia features can be embedded in Iframes on your site or third-party sites.

Every feature has an `Embed Code` section with a Copy icon which allows you to quickly paste the iframe code for that feature.

![Screenshot of a embed code at https://neuronpedia.org/gpt2-small/0-res-jb/14057](img/embedcode.png)

Alternatively, you can construct your own by simply adding `?embed=true` to the end of any feature's URL and add it in an iframe tag. The following demonstrates the embed for `GPT2-SMALL@0-RES-JB:14057`:

Feature URL: `https://neuronpedia.org/gpt2-small/0-res-jb/14057`

Embed URL: `https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true`

Embed Code: `<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true" title="Neuronpedia" style={{width:"680px", height:"440px"}}></iframe>`

And here's what the embed looks like:

<iframe src="https://neuronpedia.org/gpt2-small/0-res-jb/14057?embed=true" title="Neuronpedia" style={{width:"680px", height:"440px"}}></iframe>

You can customize the width and height of the iframe by modifying the style attribute. Note that widths smaller than 640 pixels will result in stacking the dashboard vertically - so you should try to keep the width greater than 640 pixels.
