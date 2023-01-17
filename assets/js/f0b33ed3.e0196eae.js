"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1411],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4785:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),l=["components"],s={id:"tofu.logging.layouts",title:"Logback Layouts"},c="Layouts",i={unversionedId:"tofu.logging.layouts",id:"tofu.logging.layouts",title:"Logback Layouts",description:"Tofu is built upon Logback so it needs a custom logback.xml file with contextual logging",source:"@site/../docs/tofu.logging.layouts.md",sourceDirName:".",slug:"/tofu.logging.layouts",permalink:"/docs/tofu.logging.layouts",tags:[],version:"current",lastUpdatedBy:"Ivan Malyshev",lastUpdatedAt:1671628866,formattedLastUpdatedAt:"12/21/2022",frontMatter:{id:"tofu.logging.layouts",title:"Logback Layouts"},sidebar:"docs",previous:{title:"Loggable typeclass",permalink:"/docs/tofu.logging.loggable"},next:{title:"LogAnnotation",permalink:"/docs/tofu.logging.annotation"}},u=[],p={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"layouts"},"Layouts"),(0,a.kt)("p",null,"Tofu is built upon ",(0,a.kt)("a",{parentName:"p",href:"http://logback.qos.ch/"},"Logback")," so it needs a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"logback.xml")," file with contextual logging\nsupport. Tofu uses mechanism called markers to store context in logs, so it won't work with existing Layouts."),(0,a.kt)("p",null,"Luckily for us, tofu brings a logging provider for ",(0,a.kt)("em",{parentName:"p"},"Logstash-encoder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "tf.tofu" %% "tofu-logging-logstash-logback" % "<latest version in the badge in README>"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TofuLoggingProvider")," provides JSON logs for logstash-logback-encoder. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logstash/logstash-logback-encoder"},"README on github")," for more details. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n      <encoder class="net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder">\n          <providers>\n              <pattern>\n                  <pattern>\n                      { "a": 1 }\n                  </pattern>\n              </pattern>\n              <timestamp/>\n              <logLevel/>\n              <message/>\n              <provider class="tofu.logging.TofuLoggingProvider"/>\n          </providers>\n      </encoder>\n  </appender>\n')),(0,a.kt)("p",null,"In addition, tofu has two own special Layouts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "tf.tofu" %% "tofu-logging-layout" % "<latest version in the badge in README>"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ELKLayout"),"\nthat outputs structured logs in JSON format. Example appender looks like that:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\n<appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n    <encoder class="ch.qos.logback.core.encoder.LayoutWrappingEncoder">\n        <layout class="tofu.logging.ELKLayout">\n          \x3c!-- Optional tag for static fields which will be merged into structured json output. --\x3e\n          <customFields>{\n            "a": 1,\n            "b": {\n                "c": true,\n                "d": "great"\n            }\n          }</customFields>\n        </layout>\n    </encoder>\n</appender>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ConsoleContextLayout"),"\nthat outputs simple text logs. Example appender looks like that:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\n<appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n    <encoder class="ch.qos.logback.core.encoder.LayoutWrappingEncoder">\n        <layout class="tofu.logging.logback.ConsoleContextLayout">\n            <pattern>%d{HH:mm:ss} %-5level %logger{36} - %msg%n [%mdc]%n</pattern>\n        </layout>\n    </encoder>\n</appender>\n')))}g.isMDXComponent=!0}}]);