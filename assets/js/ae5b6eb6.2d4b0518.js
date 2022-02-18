"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9058],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:1},l="9.1 BLS Keys",c={unversionedId:"09keys/keys-and-signatures",id:"09keys/keys-and-signatures",isDocsHomePage:!1,title:"9.1 BLS Keys",description:"This section will explain the different types of keys in the Chia network. It will also cover how the keys are generated, stored, and used. These systems are designed to be flexible enough to support many different configurations and pooling setups and to be resilient to various attacks.",source:"@site/docs/09keys/keys-and-signatures.md",sourceDirName:"09keys",slug:"/09keys/keys-and-signatures",permalink:"/docs/09keys/keys-and-signatures",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/09keys/keys-and-signatures.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"8.1 Serialization",permalink:"/docs/08serialization/serialization"},next:{title:"9.2 Plot IDs",permalink:"/docs/09keys/plot_ids"}},u=[{value:"Difference between Chia and EIP-2333",id:"difference-between-chia-and-eip-2333",children:[]},{value:"Non-Observer vs Observer Keys",id:"non-observer-vs-observer-keys",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"91-bls-keys"},"9.1 BLS Keys"),(0,i.kt)("p",null,"This section will explain the different types of keys in the Chia network. It will also cover how the keys are generated, stored, and used. These systems are designed to be flexible enough to support many different configurations and pooling setups and to be resilient to various attacks."),(0,i.kt)("p",null,"All Chia keys are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zkcrypto/bls12_381"},"BLS-12-381")," private keys, following the ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/"},"IETF specification"),", the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2333"},"EIP-2333")," specification for key derivation and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"BIP 44 registered"),". Private keys are 32 bytes, public keys 48 bytes, and signatures 96 bytes (public keys are points in G1, signatures are points in G2.)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"WARNING: There is a slight difference between Chia's implementation and EIP-2333, as described in the next section.")),(0,i.kt)("p",null,"BLS signatures allow for many features and optimizations, such as non-interactive m/n thresholds, aggregation of all signatures in a block, and ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com"},"chialisp")," tricks like combining two coins into the same transaction. Private keys can be generated by using a 24-word mnemonic phrase, which users can use to back up and restore their wallets."),(0,i.kt)("p",null,"The 24 words can be converted to and from a BLS private key. The BLS master private key is stored in the OS keychain, which usually requires password authentication and is encrypted."),(0,i.kt)("p",null,"The master private key can be used to derive child keys, which can further be used to derive child keys, etc. The number of levels can be infinite. BLS public keys can be combined to form a new public key, which can be used to validate aggregate signatures."),(0,i.kt)("p",null,"Each time the wallet generates a new address to receive funds, it creates a new BLS private key. The farmer and pool only use the first key in the current codebase, but they can be updated to generate a new key every time a block is won, for additional privacy."),(0,i.kt)("p",null,"When it comes to getting paid, a chialisp program is created that uses one of the wallet BLS public keys. This program, called a ",(0,i.kt)("em",{parentName:"p"},"puzzle"),", is hashed to generate a puzzle hash. The puzzle hash is then converted to an address in bech32m format, for easy error correction and usability."),(0,i.kt)("p",null,"So an address is analogous to a wallet child BLS public key, the private key of which can be derived from the master seed."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/keys/hd_keys.png",alt:"drawing"})),(0,i.kt)("h2",{id:"difference-between-chia-and-eip-2333"},"Difference between Chia and EIP-2333"),(0,i.kt)("p",null,"Chia committed to its final plot format in July 2020. This format uses keys compliant with BLS version 2, as specified in the ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/"},"IRTF CFRG BLS standard"),"."),(0,i.kt)("p",null,"BLS version 4 introduced some optional changes, one of which was not backwards compatible with version 2. Because of this incompatibility, Chia will continue to use keys as specified in version 2. These keys are compliant with version 4, though they differ from the recommended method of generation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BLS Version 2 and 4 are both secure.")),(0,i.kt)("p",null,"Here is the incompatible change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  Procedure:\n   1. salt = "BLS-SIG-KEYGEN-SALT-"\n   2. SK = 0\n   3. while SK == 0:\n   4.     salt = H(salt)\n   5.     PRK = HKDF-Extract(salt, IKM || I2OSP(0, 1))\n   6.     OKM = HKDF-Expand(PRK, key_info || I2OSP(L, 2), L)\n   7.     SK = OS2IP(OKM) mod r\n   8. return SK\n\n   KeyGen is the RECOMMENDED way of generating secret keys, but its use\n   is not required for compatibility, and implementations MAY use a\n   different KeyGen procedure.  For security, such an alternative KeyGen\n   procedure MUST output SK that is statistically close to uniformly\n   random in the range 1 <= SK < r.\n')),(0,i.kt)("h2",{id:"non-observer-vs-observer-keys"},"Non-Observer vs Observer Keys"),(0,i.kt)("p",null,"There are two ways in which child keys can be derived from parent keys: non-observer and observer (also called hardened and unhardened)."),(0,i.kt)("p",null,"Non-observer keys are the default, and only supported, method in the EIP-2333 spec. They are secure, since each key is cryptographically separated -- revealing one key has no impact on the security of its ancestors or siblings. However, non-observer keys are limited in functionality, because they can only be derived through private derivation. That is, a parent ",(0,i.kt)("em",{parentName:"p"},"private")," key can be used to derive a child ",(0,i.kt)("em",{parentName:"p"},"private")," key, but a parent ",(0,i.kt)("em",{parentName:"p"},"public")," key cannot be used to derive a child ",(0,i.kt)("em",{parentName:"p"},"public")," key."),(0,i.kt)("p",null,"Observer keys do allow public derivation. This enables view-only wallets that support viewing ",(0,i.kt)("em",{parentName:"p"},"all")," of your public keys, using only the root (master) public key. This is what is usually done for Bitcoin Hierarchical Deterministic (HD) view-only wallets. It enables more privacy when compared to systems like Ethereum, which reuse the same address for all transactions."),(0,i.kt)("p",null,"One advantage of observer keys is tax calculation: if you use a different address for each transaction, you only need to give your accountant your parent public key, who can use it to derive all of your child addresses. This would not be possible with non-observer keys."),(0,i.kt)("p",null,"The main security drawback of observer keys is that if you accidentally reveal a single child private key, along with the parent public key, then your parent private key and all sibling keys can be calculated as well."),(0,i.kt)("p",null,"At the time of Chia's mainnet launch in March and May 2021, only non-observer keys were used. Beginning with the Light Wallet Beta release (December 2021), observer keys are supported -- and preferred -- for view only-wallet support. The first full release with built-in support for observer keys is 1.3 (February 2022)."))}d.isMDXComponent=!0}}]);