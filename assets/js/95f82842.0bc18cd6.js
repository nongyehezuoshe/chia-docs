"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5977],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7832:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:2},s="15.2 Storage - Chia farming workload analysis",d={unversionedId:"15resources/Storage_farming",id:"15resources/Storage_farming",isDocsHomePage:!1,title:"15.2 Storage - Chia farming workload analysis",description:"Jonmichael Hands, VP Storage, Chia Network. For comments and questions reach out to @storagejm on keybase, or @LebanonJon on Twitter",source:"@site/docs/15resources/Storage_farming.md",sourceDirName:"15resources",slug:"/15resources/Storage_farming",permalink:"/docs/15resources/Storage_farming",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/15resources/Storage_farming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"15.1 References",permalink:"/docs/15resources/references"}},p=[{value:"Abstract",id:"abstract",children:[]},{value:"Proof of space verification",id:"proof-of-space-verification",children:[]},{value:"Storage workload profile",id:"storage-workload-profile",children:[{value:"Average IO Size per request",id:"average-io-size-per-request",children:[]},{value:"Calculated data read and disk bandwidth",id:"calculated-data-read-and-disk-bandwidth",children:[]},{value:"Hard drive rated workloads",id:"hard-drive-rated-workloads",children:[]}]},{value:"Measured data",id:"measured-data",children:[{value:"Measurement tools",id:"measurement-tools",children:[]},{value:"System configuration",id:"system-configuration",children:[]}]},{value:"Data durability, uncorrectable bit error rate, and Chia farming",id:"data-durability-uncorrectable-bit-error-rate-and-chia-farming",children:[{value:"UBER of standard storage devices",id:"uber-of-standard-storage-devices",children:[]},{value:"UBER in Chia",id:"uber-in-chia",children:[]},{value:"What happens when an error occurs?",id:"what-happens-when-an-error-occurs",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:p};function c(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"152-storage---chia-farming-workload-analysis"},"15.2 Storage - Chia farming workload analysis"),(0,i.kt)("p",null,"Jonmichael Hands, VP Storage, Chia Network. For comments and questions reach out to @storage_jm on ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"keybase"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/LebanonJon"},"@LebanonJon")," on Twitter"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1AJP8j673qfbxxju87SjGs174DMVFpzjS/edit?usp=sharing&ouid=108662600751303250659&rtpof=true&sd=true"},"Model")," in Excel"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"Chia uses a consensus called proof of space and time, in which participants prove to the network that they are storing a certain amount of data through a process called farming."),(0,i.kt)("p",null,"Farmers respond to network challenges to earn rewards for securing the Chia network, which involves generating proofs of space from stored data. The protocol for farming and harvesting was designed for quick and efficient verification of proofs of space while minimizing disk io (input/output). A harvester service checks plot files for partial proofs of space when a challenge is received. There is a plot filter designed to significantly reduce the amount of disk io required by requiring that a hash of the plot id and challenge contains a certain amount of zeros. We will explore the theoretical disk io requirements based on the protocols, and look at measured disk utilization during a real farming workload. The Chia farming workload differs from traditional enterprise or consumer storage use cases since the data stored in plot files contains no user data. The Chia farming workload is read-only, completely random distribution, and a low amount of data transferred between the device and host. Data durability (defined as the probability of not losing user data) and error rate requirements for Chia are significantly reduced compared to storing user data and may constitute a new class of storage media and promote used hardware that otherwise would not be suitable."),(0,i.kt)("h2",{id:"proof-of-space-verification"},"Proof of space verification"),(0,i.kt)("p",null,"The proof of space construction and ",(0,i.kt)("a",{parentName:"p",href:"/docs/03consensus/proof-of-space/"},"Section 3.2")," contains the details on the format for plot files. A plot file size is determined by a k value where each plot is made up of 7 tables each with 2^k entries. When a challenge arrives the plot filter is applied to reduce the disk io by the value of the plot filter constant, which is currently set to 512. The probability of a plot being accessed each challenge, which happens on the signage point interval time, is 1/512. The probability of an individual disk being accessed can be found with the binomial distribution function cumulative probability with a probability per plot, n trials equal to the number of plots on the disk (probability of X successes \u2265 1) per signage point. The amount of IOPS (input/output operations per second) can be estimated by determining the mean of the plot filter passes per day and multiplying by the number of seeks required for a proof quality check. In the pooling protocol a pool operator requests several partial proofs of space per day per drive to verify that the pool participant is indeed storing as much data as they claim.  The bandwidth and amount of data transferred can be estimated by looking at the average blocksize of the read requests multiplied by the IOPS."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constants in proof of space that were chosen for Chia")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signage point time (seconds): 9.375"),(0,i.kt)("li",{parentName:"ul"},"Plot filter: 512"),(0,i.kt)("li",{parentName:"ul"},"K value minimum: 32"),(0,i.kt)("li",{parentName:"ul"},"IO Proof quality check: 9 read requests"),(0,i.kt)("li",{parentName:"ul"},"IO Full proof of space (and partial request from pool): 64 read requests"),(0,i.kt)("li",{parentName:"ul"},"Partials per day: set by pool operators, estimated at 300 for reference"),(0,i.kt)("li",{parentName:"ul"},"Average IO size per request (kB): 14")),(0,i.kt)("h2",{id:"storage-workload-profile"},"Storage workload profile"),(0,i.kt)("p",null,"We can estimate the storage workload on a given drive capacity (measured in TB, terabytes) by knowing the k size selected and n number of plots that fit on the drive."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Drive size (TB)"),(0,i.kt)("th",{parentName:"tr",align:"right"},"4"),(0,i.kt)("th",{parentName:"tr",align:"right"},"8"),(0,i.kt)("th",{parentName:"tr",align:"right"},"10"),(0,i.kt)("th",{parentName:"tr",align:"right"},"12"),(0,i.kt)("th",{parentName:"tr",align:"right"},"14"),(0,i.kt)("th",{parentName:"tr",align:"right"},"16"),(0,i.kt)("th",{parentName:"tr",align:"right"},"18"),(0,i.kt)("th",{parentName:"tr",align:"right"},"20"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"k value"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32"),(0,i.kt)("td",{parentName:"tr",align:"right"},"32")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number of plots"),(0,i.kt)("td",{parentName:"tr",align:"right"},"36"),(0,i.kt)("td",{parentName:"tr",align:"right"},"73"),(0,i.kt)("td",{parentName:"tr",align:"right"},"91"),(0,i.kt)("td",{parentName:"tr",align:"right"},"110"),(0,i.kt)("td",{parentName:"tr",align:"right"},"128"),(0,i.kt)("td",{parentName:"tr",align:"right"},"146"),(0,i.kt)("td",{parentName:"tr",align:"right"},"165"),(0,i.kt)("td",{parentName:"tr",align:"right"},"183")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"k value"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number of plots"),(0,i.kt)("td",{parentName:"tr",align:"right"},"8"),(0,i.kt)("td",{parentName:"tr",align:"right"},"17"),(0,i.kt)("td",{parentName:"tr",align:"right"},"21"),(0,i.kt)("td",{parentName:"tr",align:"right"},"25"),(0,i.kt)("td",{parentName:"tr",align:"right"},"30"),(0,i.kt)("td",{parentName:"tr",align:"right"},"34"),(0,i.kt)("td",{parentName:"tr",align:"right"},"38"),(0,i.kt)("td",{parentName:"tr",align:"right"},"43")))),(0,i.kt)("p",null,"Events per day, plots passing filter = signage points per day \u2715  n plots / filter constant\nnumber of reads =(Events per day, plots passing filter \u2715 IO Proof quality check) +(IO Full proof of space \u2715 Partials per day",(0,i.kt)("br",{parentName:"p"}),"\n","IOPS average =number of reads per day / 86400 seconds\nMB read per day = Number of reads \u2715 average IO size per request (kB) / 1000",(0,i.kt)("br",{parentName:"p"}),"\n","Bandwidth = IOPS * Block Size"),(0,i.kt)("h3",{id:"average-io-size-per-request"},"Average IO Size per request"),(0,i.kt)("p",null,"An IO kernel trace was taken on a sample of drives to determine the block size requests on the block layer (commands sent directly to the drive over the SATA interface), and found that the majority of the IO commands sent were 12 and 16kB transfers. This will likely change very slightly with different storage hardware, operating systems, storage devices, drivers, and filesystems."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iosize_hist",src:a(3178).Z,title:"iosize_hist"})),(0,i.kt)("p",null,"Measured data from ext4 filesystem in Linux resulted in an average blocksize of\n13.9kB with n=44 drives of capacity 18TB\n14.5kB with n=94 drives capacity ranging from 8-18TB"),(0,i.kt)("h3",{id:"calculated-data-read-and-disk-bandwidth"},"Calculated data read and disk bandwidth"),(0,i.kt)("p",null,"Chia Farming Total Amount of data read per day per drive capacity"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data_per_day",src:a(8918).Z,title:"data_per_day"})),(0,i.kt)("p",null,"Bandwidth and amount of data read are all directly proportional to the number of io requests required for the proof quality checks and partial proof of space generation. K=32 with a difficulty of 1 is the theoretical maximum bandwidth for Chia farming. It is typical for a pool operator to automatically adjust the difficulty to target enough partials per day to get an accurate estimate of the farming capacity, without a significant increase in io on the device."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bw_drive",src:a(1e3).Z,title:"bw_drive"})),(0,i.kt)("p",null,"As expected, bandwidth per drive scales with the number of plots per drive (which is increased when a higher capacity disk is used) and increases with difficulty. K=34 offers a reduction in io requirements by reducing the number of plots per disk."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"prob_access",src:a(6524).Z,title:"prob_access"})),(0,i.kt)("h3",{id:"hard-drive-rated-workloads"},"Hard drive rated workloads"),(0,i.kt)("p",null,"Hard disk drive reliability is rated at a specified amount of data read and written per year, expressed in TB/year. Common 3.5in HDDs used in Chia farming are rated at 200-550TB per year workload depending on the drive model and recommended use case. The amount of data written for Chia is often just the size of the drive, because plots are generated on ephemeral storage and then sequentially copied over to the drive. The amount of data read can be calculated by looking at the bandwidth of the drive and multiplying it by time. In the worst case, with the largest hard drive on the market today at 20TB, full of k=32 plots, at difficulty 1 pooling would read an average of 2.1GB per day, or 750 GB per year. This is 0.37% of the rated workload assuming a 200TB/year - Chia is an extremely light workload compared to typical end-user workloads (e.g. NAS, file or object storage, video streaming)."),(0,i.kt)("h2",{id:"measured-data"},"Measured data"),(0,i.kt)("p",null,"Data was collected across a sample size of drives of varying capacity, as detailed in the system configuration. The duration of the measured data was 48 hours with a scraping period of 5s."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"capacity"),(0,i.kt)("th",{parentName:"tr",align:null},"Sample Size"),(0,i.kt)("th",{parentName:"tr",align:null},"bandwidth (kB/s)"),(0,i.kt)("th",{parentName:"tr",align:null},"IOPS"),(0,i.kt)("th",{parentName:"tr",align:null},"blocksize (kB)"),(0,i.kt)("th",{parentName:"tr",align:null},"latency (ms)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"3.45"),(0,i.kt)("td",{parentName:"tr",align:null},"0.23"),(0,i.kt)("td",{parentName:"tr",align:null},"14.76"),(0,i.kt)("td",{parentName:"tr",align:null},"5.18")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"4.17"),(0,i.kt)("td",{parentName:"tr",align:null},"0.28"),(0,i.kt)("td",{parentName:"tr",align:null},"14.72"),(0,i.kt)("td",{parentName:"tr",align:null},"7.04")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"12"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"5.03"),(0,i.kt)("td",{parentName:"tr",align:null},"0.34"),(0,i.kt)("td",{parentName:"tr",align:null},"14.69"),(0,i.kt)("td",{parentName:"tr",align:null},"7.11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"14"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"6.02"),(0,i.kt)("td",{parentName:"tr",align:null},"0.41"),(0,i.kt)("td",{parentName:"tr",align:null},"14.72"),(0,i.kt)("td",{parentName:"tr",align:null},"5.21")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"27"),(0,i.kt)("td",{parentName:"tr",align:null},"6.20"),(0,i.kt)("td",{parentName:"tr",align:null},"0.44"),(0,i.kt)("td",{parentName:"tr",align:null},"14.14"),(0,i.kt)("td",{parentName:"tr",align:null},"6.27")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"18"),(0,i.kt)("td",{parentName:"tr",align:null},"44"),(0,i.kt)("td",{parentName:"tr",align:null},"7.46"),(0,i.kt)("td",{parentName:"tr",align:null},"0.51"),(0,i.kt)("td",{parentName:"tr",align:null},"14.57"),(0,i.kt)("td",{parentName:"tr",align:null},"5.53")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Total"),(0,i.kt)("td",{parentName:"tr",align:null},"94"),(0,i.kt)("td",{parentName:"tr",align:null},"6.46"),(0,i.kt)("td",{parentName:"tr",align:null},"0.45"),(0,i.kt)("td",{parentName:"tr",align:null},"14.48"),(0,i.kt)("td",{parentName:"tr",align:null},"6.02")))),(0,i.kt)("p",null,"We compare the modeled metrics of an 18TB drive to the measure data collected"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Metric"),(0,i.kt)("th",{parentName:"tr",align:null},"Estimated/Modeled"),(0,i.kt)("th",{parentName:"tr",align:null},"Measured"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bandwidth per drive (kB/s)"),(0,i.kt)("td",{parentName:"tr",align:null},"4.59 kB/s"),(0,i.kt)("td",{parentName:"tr",align:null},"7.46 kB/s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IOPS"),(0,i.kt)("td",{parentName:"tr",align:null},"0.33"),(0,i.kt)("td",{parentName:"tr",align:null},"0.51")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Disk busy time"),(0,i.kt)("td",{parentName:"tr",align:null},"0.136%"),(0,i.kt)("td",{parentName:"tr",align:null},"0.24%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Latency per request (ms)"),(0,i.kt)("td",{parentName:"tr",align:null},"4.3"),(0,i.kt)("td",{parentName:"tr",align:null},"6.02")))),(0,i.kt)("p",null,"Disk IOPS"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IOPS",src:a(2874).Z,title:"IOPS"})),(0,i.kt)("p",null,"Disk bandwidth"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bw",src:a(5251).Z,title:"bw"})),(0,i.kt)("p",null,"Latency"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"latency",src:a(5716).Z,title:"latency"})),(0,i.kt)("p",null,"Disk Utilization"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"disk_busy",src:a(3240).Z,title:"disk_busy"})),(0,i.kt)("p",null,"CPU Busy Time"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cpu busy time",src:a(3995).Z,title:"cpu"})),(0,i.kt)("p",null,"System CPU Utilization"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"system utilization",src:a(4957).Z,title:"cpu"})),(0,i.kt)("p",null,"Network Traffic (Chia harvester only)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"network",src:a(6927).Z,title:"network traffic"})),(0,i.kt)("h3",{id:"measurement-tools"},"Measurement tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/guides/node-exporter/"},"Node Exporter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Open-CAS/standalone-linux-io-tracer"},"Standalone Linux IO Tracer")),(0,i.kt)("li",{parentName:"ul"},"dstat, iostat (sysstat)")),(0,i.kt)("h3",{id:"system-configuration"},"System configuration"),(0,i.kt)("p",null,"Measured data collected from the following system"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Motherboard: Intel R1208WFTYS\nIntel Xeon Gold 6140 CPU, 128GB DDR4 @ 2400MT/s\nHBA: LSI 9300-8e\nJBOD: Supermicro 90 Bay, SuperChassis 946ED-R2KJBOD\nDrive Models:\nSeagate Exos x16 16TB, Firmware SN03\nWD HC550 18TB, Firmware: PCGNW232WDC\nWD WD120EDAZ: 8, 10, 12, 14TB, Firmware: 81.00A81\n")),(0,i.kt)("h2",{id:"data-durability-uncorrectable-bit-error-rate-and-chia-farming"},"Data durability, uncorrectable bit error rate, and Chia farming"),(0,i.kt)("p",null,"UBER is defined as \u201cA metric for the rate of occurrence of data errors, equal to the number of data errors per bits read.\u201d\nIn HDD and SSD, UBER is generally reflected in lifetime values for an entire population, but the actual rates of error and rate of increase are dependent on many factors including time, temperature, and amount of wear on the storage media. In SSDs this is adjusted for and measured per the JESD218B specification which defines UBER for SSDs using \u201cThe\nnumerator is the total count of data errors detected over the full TBW rating for the population of SSDs, or the sample of SSDs in the endurance verification.\u201d"),(0,i.kt)("h3",{id:"uber-of-standard-storage-devices"},"UBER of standard storage devices"),(0,i.kt)("p",null,"Consumer HDDs are rated for less than 1 error per 10",(0,i.kt)("sup",null,"14")," (sometimes shown as UBER of 10",(0,i.kt)("sup",null,"-14"),"). This means that if a consumer reads on 800TB of data, they would expect a single read error on average."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Device"),(0,i.kt)("th",{parentName:"tr",align:null},"UBER"),(0,i.kt)("th",{parentName:"tr",align:null},"Data read per error"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Consumer HDD"),(0,i.kt)("td",{parentName:"tr",align:null},"10","-","14"),(0,i.kt)("td",{parentName:"tr",align:null},"800 TB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enterprise HDD"),(0,i.kt)("td",{parentName:"tr",align:null},"10","-","15"),(0,i.kt)("td",{parentName:"tr",align:null},"8 PB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"10","-","17"),(0,i.kt)("td",{parentName:"tr",align:null},"800 PB")))),(0,i.kt)("h3",{id:"uber-in-chia"},"UBER in Chia"),(0,i.kt)("p",null,"In a storage system containing user data, an uncorrectable read error on a single storage device is handled by redundancy or parity, generally through RAID, erasure code, mirror, or backup of the data. Plot files contain random cryptographic hashes. If a device containing plots fails, no useful data is lost. Therefore, the best practice for Chia is not to include any data protection. If there is a single uncorrectable read error somewhere on the storage device, we could therefore calculate the probability of reading that LBA (logical block address) by using the estimated amount of data read per day in the Chia farming workload - because the reads are perfectly random, each read request coming from the harvester service will have an equal probability of being accessed."),(0,i.kt)("p",null,"Using the UBER and the estimated amount of data read per day with Chia farming, we can approximate the number of years it would take to encounter an error while farming Chia."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"UBER",src:a(7673).Z,title:"UBER"})),(0,i.kt)("h3",{id:"what-happens-when-an-error-occurs"},"What happens when an error occurs?"),(0,i.kt)("p",null,"Each k=32 plot file contains around 4.3 billion proofs. Depending on where the error occurs, in metadata, table 1, etc. there are a certain amount of proofs within a plot file that will be corrupted. In the absolute worst case that an entire plot file gets corrupted. A more likely case would just be that a certain percentage of proofs are corrupt, and the likelihood of reading those given the amount of data read per day in the Chia farming workload is extremely low. If the uncorrectable read error collides with a lookup for a partial proof of space, the farmer would fail that single request for a partial proof of space or proof quality check. This would lower the user\u2019s estimated capacity for a short duration, but then revert to the mean. In other words, an error in Chia farming is not catastrophic. Chia farming workload is a very good fit for a storage device with a higher error rate, potentially even with an UBER of greater than 10",(0,i.kt)("sup",null,"-13 "),"."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Chia is a light workload for a hard drive, 309 times lower disk busy time than an example hyperscale data center workload","[2]",". Plot files contain random cryptographic hashes that can easily be created and no user data, removing data durability requirements for data storage in Chia farming. Proof of space is a novel use case for hard drives and can accept storage media with a high UBER compared to typical consumer and enterprise workloads. Chia farming will constitute a new class of storage that is optimized for high capacity, write once / read many, low power, and high error rate. Chia farming is a great fit for hard drive technology optimized for sequential write only, such as SMR (Shingled Magnetic Recording), and in the future NVMe ZNS (Zoned Name Spaces) paired with high capacity storage of a lower media grade. Chia farming would be an ideal use case for used storage, given the storage media is high enough capacity to maintain a competitive TCO compared to new more power-efficient disks."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.jedec.org/standards-documents/docs/jesd218b01"},"JEDEC "),"JESD218B.01 SOLID STATE DRIVE (SSD) REQUIREMENTS AND ENDURANCE TEST METHOD"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.usenix.org/system/files/fast21-pan.pdf"},"Facebook\u2019s Tectonic Filesystem: Efficiency from Exascale"))))}c.isMDXComponent=!0},5251:function(e,t,a){t.Z=a.p+"assets/images/bw-873a300af25d7147fb8dcb19f2979bb8.png"},1e3:function(e,t,a){t.Z=a.p+"assets/images/bw_drive-07b3cb42e0a93978256f609a441c466a.png"},4957:function(e,t,a){t.Z=a.p+"assets/images/cpu-4d37c79ab38c06322e3cfacba6775ebe.png"},3995:function(e,t,a){t.Z=a.p+"assets/images/cpu1-88fa0b4b9b174a63da789a05aae7179b.png"},8918:function(e,t,a){t.Z=a.p+"assets/images/data_per_day-63d731accc72197842f1076e5f7c7b7b.png"},3240:function(e,t,a){t.Z=a.p+"assets/images/disk_busy-30e336f99ead8b64b141c1435abdef53.png"},2874:function(e,t,a){t.Z=a.p+"assets/images/iops-73e6fe55c4999e2d6839ddaa4017bddf.png"},3178:function(e,t,a){t.Z=a.p+"assets/images/iosize_hist-190219243e9e76c2bc5bb8d9145983e7.png"},5716:function(e,t,a){t.Z=a.p+"assets/images/latency-660c0a26ba53ce3873f0cf30ba293a4f.png"},6927:function(e,t,a){t.Z=a.p+"assets/images/net-a524b6533296a516877749e576e4c0de.png"},6524:function(e,t,a){t.Z=a.p+"assets/images/prob_access-430f862506ceef20bba0cd6de8c9fea0.png"},7673:function(e,t,a){t.Z=a.p+"assets/images/uber-09f9747bd8e9eb88c1981b038bafab88.png"}}]);