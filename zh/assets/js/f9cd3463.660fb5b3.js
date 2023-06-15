"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?l.createElement(m,i(i({ref:t},p),{},{components:n})):l.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var l=n(7462),a=n(7294),o=n(6010),i=n(2466),r=n(6550),s=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,o=d(e),[i,r]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:l}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,p.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:l}),w=(()=>{const e=s??u;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{w&&r(w)}),[w]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var w=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),l=c[n].value;l!==r&&(u(t),s(l))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(g,(0,l.Z)({},e,t)),a.createElement(b,(0,l.Z)({},e,t)))}function C(e){const t=(0,w.Z)();return a.createElement(y,(0,l.Z)({key:String(t)},e))}},6575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var l=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const o={slug:"/walletconnect-user-guide",title:"WalletConnect User Guide"},i=void 0,r={unversionedId:"guides/walletconnect/walletconnect-user-guide",id:"guides/walletconnect/walletconnect-user-guide",title:"WalletConnect User Guide",description:"Intro",source:"@site/docs/guides/walletconnect/walletconnect-user-guide.md",sourceDirName:"guides/walletconnect",slug:"/walletconnect-user-guide",permalink:"/zh/walletconnect-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/walletconnect/walletconnect-user-guide.md",tags:[],version:"current",frontMatter:{slug:"/walletconnect-user-guide",title:"WalletConnect User Guide"},sidebar:"guides",previous:{title:"Custody Tool User Guide",permalink:"/zh/guides/custody-tool-user-guide"},next:{title:"WalletConnect Developer Guide",permalink:"/zh/walletconnect-developer-guide"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"Install the sample dApp",id:"install-the-sample-dapp",level:2},{value:"Configure WalletConnect",id:"configure-walletconnect",level:2},{value:"Call dApp functions",id:"call-dapp-functions",level:2},{value:"Configure WalletConnect",id:"configure-walletconnect-1",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is the main use case for WalletConnect?",id:"what-is-the-main-use-case-for-walletconnect",level:3},{value:"What WalletConnect functionality might be enabled in the future?",id:"what-walletconnect-functionality-might-be-enabled-in-the-future",level:3},{value:"What is the difference between WalletConnect and CHIP-2?",id:"what-is-the-difference-between-walletconnect-and-chip-2",level:3},{value:"Will the wallet SDK support WalletConnect in the future?",id:"will-the-wallet-sdk-support-walletconnect-in-the-future",level:3},{value:"How can WalletConnect connect to remote wallets?",id:"how-can-walletconnect-connect-to-remote-wallets",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"This guide will show you how to use ",(0,a.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect")," to connect a sample dApp to your Chia reference wallet."),(0,a.kt)("admonition",{title:"a few notes",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Support for WalletConnect was introduced in Chia version 1.6.2. If you are running an earlier version, be sure to upgrade to the latest version. See our ",(0,a.kt)("a",{parentName:"li",href:"https://www.chia.net/downloads/"},"download page")," for more info."),(0,a.kt)("li",{parentName:"ul"},"Generally speaking, you only need to have a synced light wallet to use WalletConnect. A full node is not required. However, depending on your dApp, a full node may be required to run certain commands."),(0,a.kt)("li",{parentName:"ul"},"WalletConnect is supported on every operating system supported by the Chia reference wallet, including Windows, Linux, and MacOS."),(0,a.kt)("li",{parentName:"ul"},"WalletConnect is supported on Chia's testnet, as well as its mainnet."),(0,a.kt)("li",{parentName:"ul"},"This guide will use Chia's reference wallet, but WalletConnect integration for other wallets will eventually be supported as well."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"install-the-sample-dapp"},"Install the sample dApp"),(0,a.kt)("p",null,"In order to help you get started with WalletConnect, we have created a sample dApp.\nIn this section, we'll install and run the dApp locally. We'll also obtain a link to connect the dApp to a Chia reference wallet."),(0,a.kt)("p",null,"If you would like to connect your Chia reference wallet to a different dApp, then feel free to skip ahead to the ",(0,a.kt)("a",{parentName:"p",href:"#configure-walletconnect"},"next section"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run this command to clone the sample dApp's ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/chia-wallet-connect-dapp-test"},"GitHub repo"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-wallet-connect-dapp-test.git -b main\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Change to the sample dApp's directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd chia-wallet-connect-dapp-test\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," to install the sample dApp (",(0,a.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/cli/"},"more info about yarn"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,a.kt)("p",null,"Example result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'yarn install v1.22.17\nwarning ..\\..\\..\\..\\package.json: No license field\n[1/4] Resolving packages...\n[2/4] Fetching packages...\n[3/4] Linking dependencies...\nwarning " > @polkadot/util-crypto@10.1.14" has unmet peer dependency "@polkadot/util@10.1.14".\nwarning " > styled-components@5.3.6" has unmet peer dependency "react-is@>= 16.8.0".\n[4/4] Building fresh packages...\nDone in 213.31s.\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," will also install the needed dependencies for the sample dApp. Depending on which dependencies were already installed, this could add several minutes to the installation time. In this example, the installation took 3.5 minutes.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Set up your local environment variables by copying the example into your own ",(0,a.kt)("inlineCode",{parentName:"li"},".env.local")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.local.example .env.local\n")),(0,a.kt)("p",null,"Your copy of ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," now contains the following environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* `NEXT_PUBLIC_PROJECT_ID` (placeholder) - You can generate your own ProjectId at https://cloud.walletconnect.com\n* `NEXT_PUBLIC_RELAY_URL` (already set)\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," to build the sample dApp:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn next build\n")),(0,a.kt)("p",null,"Example result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run v1.22.17\nwarning ..\\..\\..\\..\\package.json: No license field\n$ C:\\Users\\User\\Documents\\GitHub\\chia\\chia-wallet-connect-dapp-test\\node_modules\\.bin\\next build\ninfo  - Loaded env from C:\\Users\\User\\Documents\\GitHub\\chia\\chia-wallet-connect-dapp-test\\.env.local\ninfo  - SWC minify release candidate enabled. https://nextjs.link/swcmin\ninfo  - Linting and checking validity of types ..warn  - No ESLint configuration detected. Run next lint to begin setup\ninfo  - Linting and checking validity of types\ninfo  - Creating an optimized production build\ninfo  - Compiled successfully\ninfo  - Collecting page data\ninfo  - Generating static pages (3/3)\ninfo  - Finalizing page optimization\n\nPage                                       Size     First Load JS\n\u250c \u25cb / (2385 ms)                            8.97 kB        1.52 MB\n\u251c   /_app                                  0 B            1.51 MB\n\u2514 \u25cb /404 (2305 ms)                         277 B          1.51 MB\n  First Load JS shared by all              1.51 MB\n  \u251c chunks/framework-b892d1ba2d9bbbff.js   42.5 kB\n  \u251c chunks/main-2ad31211114520a4.js        30.8 kB\n  \u251c chunks/pages/_app-478d778bda06be1e.js  1.43 MB\n  \u251c chunks/webpack-c83969435574458d.js     1.06 kB\n  \u2514 css/ab44ce7add5c3d11.css               247 B\n\n\u25cb  (Static)  automatically rendered as static HTML (uses no initial props)\n\nDone in 25.63s.\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Start the sample dApp:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,a.kt)("p",null,"Example result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run v1.22.17\nwarning ..\\..\\..\\..\\package.json: No license field\n$ next start\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\ninfo  - Loaded env from C:\\Users\\User\\Documents\\GitHub\\chia\\chia-wallet-connect-dapp-test\\.env.local\ninfo  - SWC minify release candidate enabled. https://nextjs.link/swcmin\n")),(0,a.kt)("p",null,"In this example, the dApp was started locally on port 3000. This is the default port; your dApp may need to use a different port if 3000 is already being used for something else."),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Access the sample dApp:")),(0,a.kt)("p",null,"Open a browser and navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," (unless a different port was used)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you see an error message such as ",(0,a.kt)("inlineCode",{parentName:"p"},"An error as occurred"),", the most likely cause is that you are running an ad blocker that is interfering with the dApp.\nEither disable the ad blocker or try a different browser.")),(0,a.kt)("p",null,"The sample dApp should display a list of testnet projects."),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Chia Testnet"),", then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Connect"),":")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/01_dapp.png",alt:"Click Connect"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"A QR code will be displayed. Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Copy to clipboard"),":")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/02_dapp.png",alt:"Click Copy to clipboard"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The link has been copied, so you are ready to set up WalletConnect in Chia's reference wallet. Keep this browser window open in case you need to copy the link again."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configure-walletconnect"},"Configure WalletConnect"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.chia.net/downloads/"},"Download and install")," Chia version 1.6.2 or greater")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you installed Chia with a packaged installer, you can set up an alias to run ",(0,a.kt)("inlineCode",{parentName:"p"},"chia")," commands. See our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.chia.net/faq?_highlight=execu#i-installed-chia-with-the-packaged-installer-how-do-i-run-cli-commands"},"FAQ")," for more info.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Set up Chia's testnet")),(0,a.kt)("p",null,"While it's possible to use WalletConnect on Chia's mainnet, this example will use the testnet.\nThe primary command to convert your system to use the testnet is ",(0,a.kt)("inlineCode",{parentName:"p"},"chia configure -t true"),".\nSee our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/How-to-connect-to-the-Testnet"},"testnet setup guide")," for more info."),(0,a.kt)("p",null,"After your system has been configured to use the testnet, you can start your Chia reference wallet."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click the WalletConnect icon")),(0,a.kt)("p",null,"The icon is located on the upper-right side of the reference wallet GUI, as shown here:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/01_walletconnect.png",alt:"Click the WalletConnect icon"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"ENABLE WALLETCONNECT"))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/02_walletconnect.png",alt:"Click ENABLE WALLETCONNECT"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD CONNECTION"))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/03_walletconnect.png",alt:"Click ADD CONNECTION"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Paste the link to your sample dApp and click ",(0,a.kt)("inlineCode",{parentName:"li"},"CONTINUE"))),(0,a.kt)("p",null,"If you used this guide to set up the sample dApp, this was the link you obtained with the last step of the previous section:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/03_dapp.png",alt:"Paste and click CONTINUE"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Choose which public key(s) to connect and click ",(0,a.kt)("inlineCode",{parentName:"li"},"CONTINUE"))),(0,a.kt)("p",null,"While you may choose more than one key to connect with the dApp, we will use a single key for this example:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/04_walletconnect.png",alt:"Select wallets and click CONTINUE"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Confirm your connection")),(0,a.kt)("p",null,"You will be shown the key(s) to connect to the dApp. If this looks OK, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CLOSE"),". To start over, click ",(0,a.kt)("inlineCode",{parentName:"p"},"DISCONNECT"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/05_walletconnect.png",alt:"Click CLOSE"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Show more info")),(0,a.kt)("p",null,"To show info on which dApp(s) are paired to which keys(s), click the WalletConnect icon, click the three dots, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"More Info"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/06_walletconnect.png",alt:"Click More Info"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You will be shown the Pair Information for your dApp:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/07_walletconnect.png",alt:"Paired keys are showing"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Your wallet has been successfully paired with the sample dApp. In the next section, we'll show you how to interact with your wallet from the dApp."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"call-dapp-functions"},"Call dApp functions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"View the sample dApp in a web browser")),(0,a.kt)("p",null,"Recall that by default, the dApp will run on ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,a.kt)("p",null,"You will be shown a list of available methods. If you opted to connect multiple keys to the sample dApp, these methods will be listed for each key."),(0,a.kt)("p",null,"For this example, we'll call ",(0,a.kt)("inlineCode",{parentName:"p"},"chia_getNextAddress"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/04_dapp.png",alt:"Run chia_getNextAddress"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"At this point, the sample dApp will wait for confirmation from your wallet:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/05_dapp.png",alt:"Pending JSON-RPC Request"})),(0,a.kt)("br",null),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Confirm the request")),(0,a.kt)("p",null,"Switch back to your Chia reference wallet. You should now see a confirmation dialog with the requested method. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIRM"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/08_walletconnect.png",alt:"Confirm request"})),(0,a.kt)("br",null),"3. View the response",(0,a.kt)("p",null,"Returning to the sample dApp, a new dialog with the response will appear. In this example, a new address will be shown:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/06_dapp.png",alt:"Showing next address"})),(0,a.kt)("br",null),"You have now installed, configured, and used the sample dApp. Feel free to test the other functions, as well as create your own!",(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configure-walletconnect-1"},"Configure WalletConnect"),(0,a.kt)("p",null,"By default, you can only run dApp methods against the wallet key that is currently synced.\nThis was not an issue in the above example because we only selected one public key to pair with the sample dApp.\nHowever, if you want your dApp to be able to interact with multiple keys, you will need to enable an additional setting in the reference wallet."),(0,a.kt)("p",null,"Click the gear icon in the lower left corner of the reference wallet, then click the ",(0,a.kt)("inlineCode",{parentName:"p"},"INTEGRATION")," tab. As of version 1.6.2, two new settings will appear:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Enable")," -- This setting was activated when you enabled WalletConnect earlier in the guide"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Allow requests that require switching to a different wallet key")," -- If you activate this setting, your dApp will be able to switch between multiple wallet keys. The selected wallet will need to sync whenever you switch between keys.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/walletconnect/09_walletconnect.png",alt:"Allow requests that require switching keys"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To configure the commands that are provided to dApps, you can edit (locally) ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain-gui/blob/main/packages/gui/src/constants/WalletConnectCommands.tsx"},"chia-blockchain-gui/blob/main/packages/gui/src/constants/WalletConnectCommands.tsx"),".\nThis file acts as a middle layer between the wallet and the dApp. It can also be used to control privacy settings."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"what-is-the-main-use-case-for-walletconnect"},"What is the main use case for WalletConnect?"),(0,a.kt)("p",null,"WalletConnect allows end users to connect their wallet to a dApp."),(0,a.kt)("h3",{id:"what-walletconnect-functionality-might-be-enabled-in-the-future"},"What WalletConnect functionality might be enabled in the future?"),(0,a.kt)("p",null,"WalletConnect is currently supported in Chia's reference wallet."),(0,a.kt)("p",null,"In the future, it could also be supported in other Chia wallets."),(0,a.kt)("p",null,"It could also be enabled for mobile- and web-based dApps. For example, mobile wallet providers will be able to integrate with WalletConnect to connect directly to dApp providers."),(0,a.kt)("p",null,"WalletConnect will aslo be used for initiating signing requests from within a dApp. This will enable interactions with all types of assets on Chia, including XCH, CATs, and NFTs. It will aslo enable using Chia Offers."),(0,a.kt)("h3",{id:"what-is-the-difference-between-walletconnect-and-chip-2"},"What is the difference between WalletConnect and CHIP-2?"),(0,a.kt)("p",null,"WalletConnect is generalized to allow any dApp to connect to any Chia wallet. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/blob/main/CHIPs/chip-0002.md"},"CHIP-2")," (dApp protocol) is specific to browser extensions."),(0,a.kt)("h3",{id:"will-the-wallet-sdk-support-walletconnect-in-the-future"},"Will the wallet SDK support WalletConnect in the future?"),(0,a.kt)("p",null,"No -- the wallet SDK and WalletConnect exist on different parts of the tech stack.\nWhereas WalletConnect gives end users a way to connect their wallet to dApps, the wallet SDK will allow\ndevelopers to provide wallet functionality inside their dApps."),(0,a.kt)("h3",{id:"how-can-walletconnect-connect-to-remote-wallets"},"How can WalletConnect connect to remote wallets?"),(0,a.kt)("p",null,"In the example from this tutorial, both the reference wallet and WalletConnect were running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,a.kt)("p",null,"To connect to a mobile phone, you can scan the provided QR code. To connect to remote browser-based dapps, simply navigate to the remote URI from a web browser."),(0,a.kt)("p",null,"Also note that all connections (local and remote) between wallets and dApps are end-to-end encrypted."))}d.isMDXComponent=!0}}]);