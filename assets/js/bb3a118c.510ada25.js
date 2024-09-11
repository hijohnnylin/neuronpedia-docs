"use strict";(self.webpackChunkneuronpedia_docs=self.webpackChunkneuronpedia_docs||[]).push([[746],{504:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(4848),a=s(8453);const r={sidebar_position:3,slug:"/search"},o="Search",i={id:"search",title:"Search",description:'What do we mean by "search"?',source:"@site/docs/search.md",sourceDirName:".",slug:"/search",permalink:"/search",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/search"},sidebar:"tutorialSidebar",previous:{title:"Embed Features (iframe)",permalink:"/embed-iframe"},next:{title:"Lists & Embed Lists",permalink:"/lists"}},c={},l=[{value:"What do we mean by &quot;search&quot;?",id:"what-do-we-mean-by-search",level:3},{value:"Example Search",id:"example-search",level:3},{value:"Sort By Token",id:"sort-by-token",level:3},{value:"Filter By Layer",id:"filter-by-layer",level:3},{value:"Case Study: <code>MLP-OAI</code> vs GPT2-Small Neurons",id:"case-study-mlp-oai-vs-gpt2-small-neurons",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"search",children:"Search"}),"\n",(0,n.jsx)(t.h3,{id:"what-do-we-mean-by-search",children:'What do we mean by "search"?'}),"\n",(0,n.jsxs)(t.p,{children:["Neuronpedia supports ",(0,n.jsx)(t.strong,{children:"searching"})," all the features of an SAE Set, which ",(0,n.jsx)(t.strong,{children:"runs inference on arbitrary text through the model to get the top features that activated on that text"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The result of a search are features in the selected SAE Set. The default sort is by features with the highest activating tokens, but this is customizable, as you'll see later."}),"\n",(0,n.jsx)(t.h3,{id:"example-search",children:"Example Search"}),"\n",(0,n.jsxs)(t.p,{children:["Here's an ",(0,n.jsx)(t.a,{href:"https://www.neuronpedia.org/gpt2-small/?sourceSet=res-jb&selectedLayers=%5B%5D&sortIndexes=%5B%5D&q=Charles%20Dickens%27%20%27Great%20Expectations%27%20skillfully%20weaves%20a%20tale%20of%20personal%20growth%20and%20societal%20critique%2C%20as%20young%20Pip%27s%20journey%20from%20humble%20beginnings%20to%20the%20complexities%20of%20London%20society%20reveals%20the%20illusions%20of%20wealth%20and%20class.",children:"example search"})," of the SAE Set ",(0,n.jsx)(t.code,{children:"RES-JB"}),", using a sentence about the book Great Expectations:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Charles Dickens' 'Great Expectations' skillfully weaves a tale of personal growth and societal critique, as young Pip's journey from humble beginnings to the complexities of London society reveals the illusions of wealth and class."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot of a search on Neuronpedia",src:s(209).A+"",width:"2750",height:"2520"})}),"\n",(0,n.jsx)(t.h3,{id:"sort-by-token",children:"Sort By Token"}),"\n",(0,n.jsx)(t.p,{children:"What if we're only interested in the top activations of specific tokens?"}),"\n",(0,n.jsx)(t.p,{children:'To sort by the sum of activations of specific tokens, just click to select the tokens in the table and then click "Reload Search". In this example, we selected "Great Expectations" from the search tokens and ran the search again. You can see below that we get different results, with the first result a feature that activates on "Great".'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot of a search on Neuronpedia, sorted to specific tokens.",src:s(8717).A+"",width:"2676",height:"2138"})}),"\n",(0,n.jsx)(t.h3,{id:"filter-by-layer",children:"Filter By Layer"}),"\n",(0,n.jsx)(t.p,{children:"What if we only want to see results from a specific layer?"}),"\n",(0,n.jsxs)(t.p,{children:["We can click the checkboxes for specific layers of the SAE Set that we're interested in to only see results of those layers. Below, we've done the same search above (so we're still sorting by \"Great Expectations\"), but filtered it to layers 2 and 4, so that all results will be from ",(0,n.jsx)(t.code,{children:"2-RES-JB"})," or ",(0,n.jsx)(t.code,{children:"4-RES-JB"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot of a search on Neuronpedia, sorted to specific tokens and filtered to only layers 2 and 4.",src:s(1762).A+"",width:"2764",height:"2226"})}),"\n",(0,n.jsxs)(t.h3,{id:"case-study-mlp-oai-vs-gpt2-small-neurons",children:["Case Study: ",(0,n.jsx)(t.code,{children:"MLP-OAI"})," vs GPT2-Small Neurons"]}),"\n",(0,n.jsxs)(t.p,{children:["How would you use Neuronpedia's search to find specific features? We wrote a mini case study/narrative on this, \"",(0,n.jsx)(t.a,{href:"https://www.lesswrong.com/posts/QwgYmpnMxBZnmGCsw/exploring-openai-s-latent-directions-tests-observations-and",children:"Exploring OpenAI's Latent Directions: Tests, Observations, and Poking Around"}),'", which coincided with OpenAI\'s Sparse Autoencoder release. It\'s a bit outdated and uses the term "directions" instead of "features". Check it out for some inspiration!']})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8717:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/search-great-expectations-b7d2ff94babeb1268f6595efe8f4bfc2.png"},1762:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/search-layers-5550ba31470ec615b284fb645579a7f1.png"},209:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/search-7a7c6147f9e99fe34acc1e4696bba6f6.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(6540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);