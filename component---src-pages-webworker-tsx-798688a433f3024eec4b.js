"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[546],{5205:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(4316),r=n(5407),a=n(7294),o=n(917);var d=function(){const{0:e,1:t}=(0,a.useState)(""),{0:i,1:r}=(0,a.useState)({first:0,second:0}),d=e=>{const{name:t,value:n}=e.target;r((e=>({...e,[t]:parseInt(n)})))},p=new Worker(new URL(n.p+n.u(277),n.b)),s={difference:e=>"Difference: "+e[0],multiple:e=>"Multiple: "+e[0],fibonacci:e=>"First Fibonacci: "+e[0]+", Second Fibonacci: "+e[1]};return(0,a.useEffect)((()=>(p.onmessage=e=>{const{queryMethodListener:n,queryMethodArguments:i}=e.data,r=s[n](i)||"Invalid query method";t(r)},()=>{p.terminate()})),[p]),(0,o.tZ)("div",null,(0,o.tZ)("input",{name:"first",type:"number",placeholder:"first number",onChange:d}),(0,o.tZ)("input",{name:"second",type:"number",placeholder:"second number",onChange:d}),(0,o.tZ)("br",null),(0,o.tZ)("button",{onClick:()=>{p.postMessage({queryMethod:"getDifference",queryMethodArguments:[i.first,i.second]})}},"Get Difference"),(0,o.tZ)("button",{onClick:()=>{p.postMessage({queryMethod:"getMultiple",queryMethodArguments:[i.first,i.second]})}},"Get Multiple"),(0,o.tZ)("button",{onClick:()=>{p.postMessage({queryMethod:"getFibonacci",queryMethodArguments:[i.first,i.second]})}},"Get Fibonacci"),(0,o.tZ)("br",null),(0,o.tZ)("p",null,e))};const p=(0,i.Z)("div",{target:"ek2vg2w1"})({name:"gc3u79",styles:'display:flex;flex-direction:column;flex-wrap:wrap;width:1200px;margin:60px auto 0;@media (max-width: 1600px){width:900px;margin:60px auto 0;padding:0 20px;}@media (max-width: 1200px){width:768px;margin:50px auto 0;padding:0 20px;}@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}& div{padding:20px;border:1px solid #ccc;border-radius:5px;width:500px;display:inline-block;}& input[type="number"]{width:130px;padding:8px;margin:5px;border:1px solid #ccc;border-radius:5px;font-size:14px;}& button{background-color:#4CAF50;color:white;padding:10px 15px;margin:10px 5px;border:none;border-radius:5px;cursor:pointer;font-size:14px;}& button:hover{background-color:#45a049;}& p{margin-top:10px;font-size:18px;font-weight:bold;padding:8px;margin:0 5px;}'}),s=(0,i.Z)("h2",{target:"ek2vg2w0"})({name:"1jh2z02",styles:"display:block;margin-bottom:45px;font-size:32px"});var u=function(e){let{data:{site:{siteMetadata:{title:t,description:n,siteUrl:i}},file:{childImageSharp:{gatsbyImageData:a},publicURL:u}}}=e;return(0,o.tZ)(r.Z,{gatsbyImageData:a,title:t,description:n,url:i,image:u},(0,o.tZ)(p,null,(0,o.tZ)(s,null,"WebWorker Calculater"),(0,o.tZ)(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-webworker-tsx-798688a433f3024eec4b.js.map