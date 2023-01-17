"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2170],{4137:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,d=u["".concat(l,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2378:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),s=["components"],c={id:"typeclasses",title:"Typeclasses"},l=void 0,p={unversionedId:"typeclasses",id:"typeclasses",title:"Typeclasses",description:"Typeclasses",source:"@site/../docs/typeclasses.md",sourceDirName:".",slug:"/typeclasses",permalink:"/docs/typeclasses",tags:[],version:"current",lastUpdatedBy:"Oleg Nizhnik",lastUpdatedAt:1572517578,formattedLastUpdatedAt:"10/31/2019",frontMatter:{id:"typeclasses",title:"Typeclasses"},sidebar:"docs",previous:{title:"Timeout",permalink:"/docs/timeout"},next:{title:"Home (Start here)",permalink:"/docs/tofu.logging.home"}},i=[{value:"Typeclasses",id:"typeclasses",children:[],level:3}],u={toc:i};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"typeclasses"},"Typeclasses"),(0,o.kt)("p",null,"Tofu exposes a handful of useful typeclasses, which can come in handy if you are a fan of Tagless Final approach\n(for basic understanding you can take a look ",(0,o.kt)("a",{parentName:"p",href:"https://scalac.io/tagless-final-pattern-for-scala-code/"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"https://typelevel.org/blog/2018/05/09/tagless-final-streaming.html"},"there"),").",(0,o.kt)("br",{parentName:"p"}),"\n","They allow more granular access to functionality, allowing you to see what exactly your code does."))}f.isMDXComponent=!0}}]);