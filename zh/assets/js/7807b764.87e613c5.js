"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=l,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},4134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),o=a(5162);const i={slug:"/guides/simulator-user-guide",title:"Simulator User Guide"},s=void 0,u={unversionedId:"guides/simulator-user-guide",id:"guides/simulator-user-guide",title:"Simulator User Guide",description:"Intro",source:"@site/docs/guides/simulator-user-guide.md",sourceDirName:"guides",slug:"/guides/simulator-user-guide",permalink:"/zh/guides/simulator-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/simulator-user-guide.md",tags:[],version:"current",frontMatter:{slug:"/guides/simulator-user-guide",title:"Simulator User Guide"},sidebar:"guides",previous:{title:"DataLayer\u2122 User Guide",permalink:"/zh/guides/datalayer-user-guide"},next:{title:"WalletConnect User Guide",permalink:"/zh/walletconnect-user-guide"}},c={},p=[{value:"Intro",id:"intro",level:2},{value:"Install chia-dev-tools",id:"install-chia-dev-tools",level:3},{value:"Install and configure the simulator",id:"install-and-configure-the-simulator",level:3},{value:"Use the simulator",id:"use-the-simulator",level:3}],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"This document will guide you through the process of setting up Chia's Simulator. For additional technical resources, see the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/simulator-rpc"},"Simulator RPC API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/simulator-cli"},"Simulator CLI Reference"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"It is possible to run the simulator and either Chia's testnet or mainnet simultaneously. This is because the simulator will use its own ports and directories.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"install-chia-dev-tools"},"Install chia-dev-tools"),(0,l.kt)("p",null,"The simulator is included in the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia-dev-tools")," GitHub repository. If you have already installed the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"chia-dev-tools"),", feel free to skip to the ",(0,l.kt)("a",{parentName:"p",href:"#install-and-configure-the-simulator"},"next section"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new terminal window and run the following to clone the chia-dev-tools repository, using the ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," branch:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-dev-tools.git -b main\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change to the cloned repository:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd chia-dev-tools\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create and activate a virtual environment:"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python -m venv venv\n.\\venv\\Scripts\\Activate.ps1\n"))),(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\n. ./venv/bin/activate\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\n. ./venv/bin/activate\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("inlineCode",{parentName:"p"},".")," (chia-dev-tools):"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install .\n")),(0,l.kt)("p",null,"Several packages will be installed, including a bundled copy of ",(0,l.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),". This process will typically take several minutes."),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"chia-dev-tools")," should now be installed and configured properly. To test it, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv --help\n")),(0,l.kt)("p",{parentName:"li"},"You should get a usage statement. At this point, you're ready to set up the simulator."))),(0,l.kt)("h3",{id:"install-and-configure-the-simulator"},"Install and configure the simulator"),(0,l.kt)("p",null,"The simulator commands can all be accessed under ",(0,l.kt)("inlineCode",{parentName:"p"},"cdv sim"),". For a full list of the simulator commands, see our ",(0,l.kt)("a",{parentName:"p",href:"/simulator-cli"},"Simulator CLI Reference"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the simulator")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim create\n")),(0,l.kt)("p",null,"If you do not already have any keys in your OS keychain, you will be prompted to create one:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"No keys in keychain. Press 'q' to quit, or press any other key to generate a new key.")),(0,l.kt)("p",null,"After pressing any key (other than ",(0,l.kt)("inlineCode",{parentName:"p"},"q"),"), a new public/private key pair will be generated:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Generating private key")),(0,l.kt)("p",null,"If you already have one or more keys installed, you will be prompted to select one:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Fingerprints:\nIf you already used one of these keys, select that fingerprint to skip the plotting process. Otherwise, select any key below.\n1) 3339549250\n2) 1239193935\n3) 378808701\nChoose a simulator key [1-3] ('q' to quit, or 'g' to generate a new key): 2\n")),(0,l.kt)("p",null,"This command will create several k-19 plots. These plots are significantly smaller than the k-32 plots used on mainnet (8 MiB vs 100 GiB). They will take less than a minute to create on most computers."),(0,l.kt)("p",null,"This command will also install a new version of Chia that contains a config file that is already set up for the simulator to run on its own ports."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now that you have the simulator environment set up, you can set the CHIA_ROOT env var to point to this environment. This will enable you to run the simulator from outside of chia-dev-tools:"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:CHIA_ROOT='~/.chia/simulator/main'\n"))),(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CHIA_ROOT=~/.chia/simulator/main\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CHIA_ROOT=~/.chia/simulator/main\n")))),(0,l.kt)("p",{parentName:"li"},"Note that by setting CHIA_ROOT to the simulator in the current Powershell/terminal window, this enables you to run the simulator in tandem with a full node running on either the testnet or on mainnet. This is because the simulator uses different ports than a normal full node."))),(0,l.kt)("h3",{id:"use-the-simulator"},"Use the simulator"),(0,l.kt)("p",null,"This section will cover the basic commands for using the simulator."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start the simulator:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia start simulator\n")),(0,l.kt)("p",null,"This command is the equivalent of ",(0,l.kt)("inlineCode",{parentName:"p"},"chia start node")," on testnet and mainnet."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Start your Chia wallet:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia start wallet\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia_wallet: started\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Verify that the Chia simulator is running and synced:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia show -s\n")),(0,l.kt)("p",null,"The result will show that the network is ",(0,l.kt)("inlineCode",{parentName:"p"},"simulator0")," and the block height is 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Network: simulator0    Port: 44159   RPC Port: 22840\nNode ID: fba97a7cc4d9d96e581c0d28a77a3f6ca5f3a8be668164c2ae033ededc9a3c47\nGenesis Challenge: eb8c4d20b322be8d9fddbf9412016bdffe9a2901d7edb0e364e94266d0e095f7\nCurrent Blockchain Status: Full Node Synced\n\nPeak: Hash: 3cf2239c9d43050497b2b895d33e4c1427edc35bcced8e070da2b9ca60008e0f\n      Time: Mon Sep 26 2022 21:00:46 HKT                  Height:          1\n\nEstimated network space: 0.000 MiB\nCurrent difficulty: 1024\nCurrent VDF sub_slot_iters: 1024\nTotal iterations since the start of the blockchain: 11942\n\n  Height: |   Hash:\n        1 | 3cf2239c9d43050497b2b895d33e4c1427edc35bcced8e070da2b9ca60008e0f\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Farm a new block")),(0,l.kt)("p",null,"There are two ways to farm a new block. The simpler solution is with a CLI call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim farm\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Farmed 1 Transaction blocks\nBlock Height is now: 2\n")),(0,l.kt)("p",null,"If you want to direct the farming rewards to a specific address, you can call the RPC:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'chia rpc full_node farm_block \'{"address":"<farming reward address>"}\'\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "new_peak_height": 3,\n    "success": true\n}\n')),(0,l.kt)("p",null,"For more info on this command, see the ",(0,l.kt)("a",{parentName:"p",href:"/simulator-rpc#farm_block"},"RPC documentation"),"."),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Show your wallet's status (including the prefarm):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,l.kt)("p",null,"Result (in step 4 we farmed two blocks, thereby receiving 4 TXCH in rewards):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Wallet height: 3\nSync status: Synced\nBalances, fingerprint: 502984008\n\nChia Wallet:\n   -Total Balance:         21000004.0 txch (21000004000000000000 mojo)\n   -Pending Total Balance: 21000004.0 txch (21000004000000000000 mojo)\n   -Spendable:             21000004.0 txch (21000004000000000000 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nConnections:\nType      IP                                     Ports       NodeID      Last Connect      MiB Up|Dwn\nFULL_NODE 127.0.0.1                              44159/44159 fba97a7c... Sep 27 04:46:26      0.0|0.1\n                                                 -Height: No Info    -Hash: No Info    -Trusted: True\n")),(0,l.kt)("p",null,"Note that your wallet is a normal Chia wallet, but it's running within the simulator. This could be helpful, for example, for testing reorgs. You can manually set up a reorg with the simulator and see how your wallet handles it."),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Edit the simulator's configuration")),(0,l.kt)("p",null,"The simulator's config is stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.chia/simulator/main/config/config.yaml"),". Just as with mainnet and testnet, if you make changes to this config, you will need to restart the simulator for the changes to take effect. This will not affect your regular Chia node."),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Enable/disable auto farming")),(0,l.kt)("p",null,"By default, as soon as a new spend bundle enters the mempool, a new block will be farmed. In certain cases this may not be the desired behavior. To disable auto farming, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim autofarm off\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Auto farming is now off\n")),(0,l.kt)("p",null,"This action will take effect immediately; there is no need to restart the simulator."),(0,l.kt)("p",null,"To enable auto farming, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim autofarm on\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Auto farming is now on\n")))}h.isMDXComponent=!0}}]);