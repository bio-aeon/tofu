"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1807],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||r;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2037:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=t(7462),a=t(3366),r=(t(7294),t(4137)),i=["components"],l={id:"tofu.logging.annotation",title:"LogAnnotation"},s=void 0,c={unversionedId:"tofu.logging.annotation",id:"tofu.logging.annotation",title:"LogAnnotation",description:"LogAnnotation",source:"@site/../docs/tofu.logging.annotation.md",sourceDirName:".",slug:"/tofu.logging.annotation",permalink:"/docs/tofu.logging.annotation",tags:[],version:"current",lastUpdatedBy:"Ivan Malyshev",lastUpdatedAt:1668498925,formattedLastUpdatedAt:"11/15/2022",frontMatter:{id:"tofu.logging.annotation",title:"LogAnnotation"},sidebar:"docs",previous:{title:"Logback Layouts",permalink:"/docs/tofu.logging.layouts"},next:{title:"Recipe list",permalink:"/docs/tofu.logging.recipes"}},u=[{value:"LogAnnotation",id:"logannotation",children:[{value:"Exapmle",id:"exapmle",children:[],level:3}],level:2}],p={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"logannotation"},"LogAnnotation"),(0,r.kt)("p",null,"Some data processing platforms have troubles with a large amount of log fields.",(0,r.kt)("br",{parentName:"p"}),"\n","One possible way to limit the number of fields your application logs is listening annotations and using them every time\nyou log a value."),(0,r.kt)("p",null,"Having a list of annotations in front of your eyes, you can easily make sure that the same names are not assigned to\ndifferent values\n(which can lead to an invalid json and corrupt your structured logs)."),(0,r.kt)("p",null,"Another problem can occur if the same field is logged with different types (e.g. as a string and as a number)\n. ",(0,r.kt)("inlineCode",{parentName:"p"},"LogAnnotation")," statically types logging values.\nThis helps also to store and retrieves values from data structures like ",(0,r.kt)("inlineCode",{parentName:"p"},"Map[LogAnnotation[_], Any]")," (useful for\nzio-users who stores log context on ",(0,r.kt)("inlineCode",{parentName:"p"},"FiberRefs"),")."),(0,r.kt)("h3",{id:"exapmle"},"Exapmle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'case class MyId(id: String)\n\nobject LogKey {\n  val count: LogAnnotation[Int] = LogAnnotation.make[Int]("count")\n  val myId: LogAnnotation[MyId] = Loggable[String].contramap((_: MyId).id).logAnnotation("id")\n}\n\nval maybeId = Some(MyId("123"))\n\nlog.info("Hello", LogKey.count -> 5, LogKey.myId -> maybeId)\n// log.error("this won\'t compile", LogKey.count -> "5")\n\n')),(0,r.kt)("p",null,"will produce:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Hello",\n  "count": 5,\n  "id": "123"\n}\n')))}g.isMDXComponent=!0}}]);