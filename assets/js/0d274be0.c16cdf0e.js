"use strict";(self.webpackChunkneuronpedia_docs=self.webpackChunkneuronpedia_docs||[]).push([[255],{9988:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4848),t=n(8453);const a={sidebar_position:1},o="Sparse Autoencoder",i={id:"sparse-autoencoder",title:"Sparse Autoencoder",description:"Sparse Autoencoder Basics",source:"@site/docs/sparse-autoencoder.md",sourceDirName:".",slug:"/sparse-autoencoder",permalink:"/sparse-autoencoder",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"SAE Features",permalink:"/features"}},d={},l=[{value:"Sparse Autoencoder Basics",id:"sparse-autoencoder-basics",level:3},{value:"Example",id:"example",level:3},{value:"Key Terms: SAE Set &amp; SAE Release",id:"key-terms-sae-set--sae-release",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"sparse-autoencoder",children:"Sparse Autoencoder"}),"\n",(0,r.jsx)(s.h3,{id:"sparse-autoencoder-basics",children:"Sparse Autoencoder Basics"}),"\n",(0,r.jsxs)(s.p,{children:["Sparse Autoencoders (SAEs) are a way to extract interpretable features from models. ",(0,r.jsx)(s.a,{href:"https://transformer-circuits.pub/2023/monosemantic-features",children:"Here is an explainer on SAEs"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Every Sparse Autoencoder on Neuronpedia has a unique identifier in the format of ",(0,r.jsx)(s.code,{children:"MODEL"}),"@",(0,r.jsx)(s.code,{children:"LAYER"}),"-",(0,r.jsx)(s.code,{children:"DESCRIPTION"}),"-",(0,r.jsx)(s.code,{children:"AUTHOR"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(s.p,{children:["The following is the ",(0,r.jsx)(s.code,{children:"GPT2-SMALL@9-RES-JB"})," SAE, which is short for GPT2-Small, Layer 9, Residual Stream, by Joseph Bloom. This SAE is located at ",(0,r.jsx)(s.a,{href:"https://neuronpedia.org/gpt2-small/9-res-jb",children:(0,r.jsx)(s.code,{children:"https://neuronpedia.org/gpt2-small/9-res-jb"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Screenshot of https://neuronpedia.org/gpt2-small/9-res-jb showing a UMAP and dots representing features.",src:n(697).A+"",width:"1710",height:"1041"})}),"\n",(0,r.jsx)(s.h3,{id:"key-terms-sae-set--sae-release",children:"Key Terms: SAE Set & SAE Release"}),"\n",(0,r.jsxs)(s.p,{children:["Since each SAE (currently) only corresponds to one layer, and because researchers usually release more than one SAE at a time, we have ",(0,r.jsx)(s.strong,{children:"two levels of groupings for organizing SAEs"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"SAE Set"}),": One or more SAEs that analyze the same hook and use the same method, across different layers.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example: ",(0,r.jsx)(s.a,{href:"https://www.neuronpedia.org/gpt2-small/res-jb",children:"RES-JB"})," is an SAE Set that has 12 SAEs based on the residual stream of the 12 layers of GPT2-Small."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"SAE Release"}),": One or more SAE Sets. This allows grouping of multiple hooks and methods. An SAE Release usually corresponds with the release of a research paper and contains all the SAEs trained/analyzed in it.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example: ",(0,r.jsx)(s.a,{href:"https://www.neuronpedia.org/p70d-sm",children:"P70D-SM"})," is an SAE Release that contains three SAE Sets: Attention Out (",(0,r.jsx)(s.a,{href:"https://www.neuronpedia.org/pythia-70m-deduped/att-sm",children:"ATT-SM"}),"), MLP Post (",(0,r.jsx)(s.a,{href:"https://www.neuronpedia.org/pythia-70m-deduped/mlp-sm",children:"MLP-SM"}),"), and Residuals (",(0,r.jsx)(s.a,{href:"https://www.neuronpedia.org/pythia-70m-deduped/res-sm",children:"RES-SM"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Diagram that shows SAE Release as the largest rectangle, with two SAE Sets in that rectangle, and 3 SAEs in each of the 2 SAE Sets.",src:n(9765).A+"",width:"1259",height:"527"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},697:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/sae-example-fbd23deee494ad7b2735f710792fa009.png"},9765:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/sae-groupings-fac5afcc4a4e4d28c202a566cac4c1a0.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var r=n(6540);const t={},a=r.createContext(t);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);