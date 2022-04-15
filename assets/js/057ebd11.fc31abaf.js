"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6858],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||h[f]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7157:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:2},l="3.2 Proof of Space",p={unversionedId:"03consensus/proof-of-space",id:"03consensus/proof-of-space",isDocsHomePage:!1,title:"3.2 Proof of Space",description:"A Proof of Space protocol is one in which:",source:"@site/docs/03consensus/proof-of-space.md",sourceDirName:"03consensus",slug:"/03consensus/proof-of-space",permalink:"/docs/03consensus/proof-of-space",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/proof-of-space.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3.1 Chia Consensus Introduction",permalink:"/docs/03consensus/consensus_intro"},next:{title:"3.3 VDFs",permalink:"/docs/03consensus/vdfs"}},c=[{value:"Plotting",id:"plotting",children:[]},{value:"Farming",id:"farming",children:[]},{value:"Verifying",id:"verifying",children:[]}],h={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"32-proof-of-space"},"3.2 Proof of Space"),(0,o.kt)("p",null,"A Proof of Space protocol is one in which:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Verifier can send a challenge to a Prover."),(0,o.kt)("li",{parentName:"ul"},"The Prover can demonstrate to the Verifier that the Prover is reserving a specific amount of storage space at that precise time.")),(0,o.kt)("p",null,"The Proof of Space protocol has three components: plotting, proving/farming, and verifying. For more info, see our ",(0,o.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf"},"Details of the chiapos specification"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chiapos"},"reference implementation"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"chia-architecture",src:a(4246).Z})),(0,o.kt)("h2",{id:"plotting"},"Plotting"),(0,o.kt)("p",null,"Plotting is the process by which a Prover, who we refer to as a ",(0,o.kt)("em",{parentName:"p"},"farmer"),", initializes a certain amount of space. To become a farmer, one must have at least 101.4 GiB available to reserve on their computer (the minimum spec is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/Raspberry-Pi",title:"Running Chia on a Raspberry Pi 4"},"Raspberry Pi 4"),"). There is no upper limit to the size of a Chia farm. Several farmers have multi-PiB farms."),(0,o.kt)("p",null,"As of Chia 1.2.7, a k32 plot can be created in around five minutes with a high-end machine with 400 GiB of RAM, or six hours with a normal commodity machine, or 12 hours with a slow machine using one CPU core and a few GB of RAM. Opportunities still remain for huge speedups. Furthermore, each plot only needs to be created once; a farmer can farm with the same plots for many years."),(0,o.kt)("p",null,"Plot sizes are determined by a k parameter, where ",(0,o.kt)("inlineCode",{parentName:"p"},"space = 780 * k * pow(2, k - 10)"),", with a minimum k of 32 (101.4 GiB). The Proof of Space construction is based on ",(0,o.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/893.pdf",title:"Beyond Hellman's Time-Memory Trade Offs with Applications to Proofs of Space"},"Beyond Hellman"),", but it is nested six times (thereby creating seven tables), and it contains other heuristics to make it practical."),(0,o.kt)("p",null,"Each of the seven tables in a plot is filled with random-looking data that cannot be compressed. Each table has 2^k entries. Each entry in table i contains two pointers to table i-1 (the previous table). Finally, each table-1 entry contains a pair of integers between 0 and 2^k, called \u201cx-values.\u201d A proof of space is a collection of 64 x-values that have a certain mathematical relationship. The actual on-disk structure and the algorithm required to generate it are quite ",(0,o.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf"},"complicated"),", but this is the general idea."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/plot.png",alt:"drawing"}),(0,o.kt)("figcaption",null,"Figure 2: Structure of a plot file. The 64 red x-values represent the proof, the 2 green x-values represent the quality.")),(0,o.kt)("p",null,"Once the Prover has initialized 101.4 GiB, they are ready to receive a challenge and create a proof. One attractive property of this scheme is that it is non-interactive unless the farmer chooses ",(0,o.kt)("a",{parentName:"p",href:"/docs/02architecture/p2p-system#pools"},"plot NFT style pooling"),": no registration or online connection is required to create a plot using the original plot format. Nothing hits the blockchain until a reward is won, similar to PoW. For pool portable plots, a farmer only needs a few mojos to create a plot NFT before plotting and then everything has the same characteristics from there."),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/FAQ#plotting",title:"Chia plotting FAQ"},"plotting FAQ")," for more info."),(0,o.kt)("h2",{id:"farming"},"Farming"),(0,o.kt)("p",null,"Farming is the process by which a farmer receives a sequence of 256-bit challenges to prove that they have legitimately put aside a defined amount of storage. In response to each challenge, the farmer checks their plots, generates a proof, and submits any winning proofs to the network for verification."),(0,o.kt)("p",null,"For each eligible plot (explained later), a farmer uses the following procedure to generate a full proof of space. Keep in mind that a plot consists of 7 tables (T1-T7) of approximately the same size, as well as 3 checkpoint tables (C1-C3), which are much smaller:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The farmer receives a challenge from the VDF"),(0,o.kt)("li",{parentName:"ol"},"For each eligible plot, extract a k-sized value from the challenge, where ",(0,o.kt)("em",{parentName:"li"},"k")," denotes the size of the plot (k32, k33, etc)"),(0,o.kt)("li",{parentName:"ol"},"Look in the C2 table for a location at which to start scanning the C1 table"),(0,o.kt)("li",{parentName:"ol"},"Scan the C1 table for the location at which to start scanning the C3 table"),(0,o.kt)("li",{parentName:"ol"},"Read either one or two C3 parks. The number of parks to read depends on the index and value calculated from the C1 table. This requires an average of 5000 reads (the maximum is 10 000). These are sequential reads of 4 bytes (for an average total of 20 KiB)"),(0,o.kt)("li",{parentName:"ol"},"Grab all the f7 entries matching the challenge value (which can be 0 or more), along with the index in the table at which they were found"),(0,o.kt)("li",{parentName:"ol"},"For each matching f7 value, read T7 at the same index where the f7 value was found in its own table, and grab that entry, which is an index into T6"),(0,o.kt)("li",{parentName:"ol"},"The T6 index contains one ",(0,o.kt)("em",{parentName:"li"},"line point")," with two ",(0,o.kt)("em",{parentName:"li"},"back pointers")," to T5, four to T4, eight to T3, sixteen to T2 and thirty-two to T1. Each back pointer requires 1 read, so a total of 64 disk reads (1 index from T7, 63 back pointers) are performed to fetch the whole tree of 64 x-values.")),(0,o.kt)("p",null,"Sixty-four disk reads require approximately 640 ms on a slow HDD with a 10 ms seek time."),(0,o.kt)("p",null,"The following table shows the amount of data read from the seven tables for a k32 plot to fetch a proof of space:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Table"),(0,o.kt)("th",{parentName:"tr",align:null},"Reads"),(0,o.kt)("th",{parentName:"tr",align:null},"Bytes per read"),(0,o.kt)("th",{parentName:"tr",align:null},"Total bytes read"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"8448"),(0,o.kt)("td",{parentName:"tr",align:null},"8448")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"8325"),(0,o.kt)("td",{parentName:"tr",align:null},"8325")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"8325"),(0,o.kt)("td",{parentName:"tr",align:null},"16 650")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"8325"),(0,o.kt)("td",{parentName:"tr",align:null},"33 300")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"8325"),(0,o.kt)("td",{parentName:"tr",align:null},"66 600")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"16"),(0,o.kt)("td",{parentName:"tr",align:null},"8325"),(0,o.kt)("td",{parentName:"tr",align:null},"133 200")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"32"),(0,o.kt)("td",{parentName:"tr",align:null},"8862"),(0,o.kt)("td",{parentName:"tr",align:null},"283 584")))),(0,o.kt)("p",null,"These numbers are in addition to the aforementioned checkpoint tables, which require up to ten thousand reads of 4 bytes apiece."),(0,o.kt)("p",null,"Since most proofs generated by this process are not good enough (as discussed in ",(0,o.kt)("a",{parentName:"p",href:"/docs/03consensus/signage_points_and_infusion_points",title:"Section 3.5: Signage Points and Infusion Points"},"Section 3.5"),') to be submitted to the network for verification, we can optimize this process by only checking one branch of the tree. This branch will return two of the 64 x-values. The position of the x-values will always be consecutive and will depend on the signage point (eg x0 and x1... or x34 and x35). We hash these x-values to produce a random 256-bit "quality string." This is combined with the difficulty and the plot size to generate the required_iterations. If the required_iterations is less than a certain number, the proof can be included in the blockchain. At this point, we look up the whole proof of space.'),(0,o.kt)("p",null,"By only looking up one branch to determine the quality string, we can rule out most proofs. This optimization requires only around 7-9 disk seeks and reads, or about 70-90 ms on a slow hard drive."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Throughout this website, we'll make a simple assumption that a single disk seek requires 10ms. In reality, this is typically 5-10ms, so we're using a conservative estimate.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The 10ms estimate also takes into account the time required to transfer data after the seek. While storage industry specs typically assume that large files are being transferred, this does not hold true for Chia farming, where proof lookups only require a tiny amount of data to be transferred. Therefore, for this website, it's safe to assume the transfer is almost instant.")),(0,o.kt)("p",null,"Chia also uses a further optimization to disqualify a certain proportion of plots from eligibility for each challenge. This is referred to as the ",(0,o.kt)("em",{parentName:"p"},"plot filter"),". The current requirement is that the hash of the plot ID, challenge, and signage point starts with 9 zeros. This excludes 511 out of every 512 plots. The filter hurts everyone equally (except for ",(0,o.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures#short-range-replotting-attack",title:"Section 3.14: Short Range Replotting Attack"},"replotting attackers"),"), and is therefore fair. The plot filter is discussed in greater detail in ",(0,o.kt)("a",{parentName:"p",href:"/docs/03consensus/signage_points_and_infusion_points",title:"Section 3.5: Signage Points and Infusion Points"},"Section 3.5"),"."),(0,o.kt)("p",null,"The plot filter effectively reduces the amount of resources required for farming by 512x -- each plot only requires a few disk reads every few minutes. A farmer with 1 PiB of storage (10,000 plots) will only have an average of 20 plots that pass the filter for each challenge. Even if these plots all are stored on slow HDDs, and connected to a single Raspberry Pi, the average time required to respond to each challenge will be less than two seconds. This is well within the limits to avoid missing out on any challenges."),(0,o.kt)("p",null,"Each plot file has its own unique private key called a ",(0,o.kt)("em",{parentName:"p"},"plot key"),". The plot ID is generated by hashing the plot public key, the farmer public key, and either the pool public key (for OG plots) or the pool contract puzzle hash (for pooled plots). The requirements for signing a proof of space depend on the type of plots being used. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/09keys/plot_public_keys",title:"Section 9.3: Public Plot Keys"},"Section 9.3")," for details on the keys used for plot construction."),(0,o.kt)("p",null,"In practice, the plot key is a 2/2 BLS aggregate public key between a local key stored in the plot and a key stored by the farmer software. For security and efficiency, a farmer may run on one server using this key and signature scheme. This server can then be connected to one or more harvester machines that store the actual plots. Farming requires the farmer key and the local key, but it does not require the pool key, since the pool\u2019s signature can be cached and reused for many blocks."),(0,o.kt)("h2",{id:"verifying"},"Verifying"),(0,o.kt)("p",null,"After the farmer has successfully created a proof of space, the proof can be verified by performing a few hashes and making comparisons between the x-values in the proof. Recall that the proof is a list of 64 x-values, where each x-value is k bits long. For a k32 this is 256 bytes (2048 bits), and is therefore very compact. Verification is very fast, but not quite fast enough to be verified in Solidity on Ethereum (something that would enable trustless transfers between chains), since this verification requires blake3 and chacha8 operations."))}u.isMDXComponent=!0},4246:function(e,t,a){t.Z=a.p+"assets/images/pospace-353b68d6b2441a5106c100e48d31b7d8.png"}}]);