(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[314],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,l(l({ref:e},p),{},{components:r})):n.createElement(f,l({ref:e},p))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7738:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),l={id:"start",title:"\u5feb\u901f\u5f00\u59cb",description:"Kratos \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5feb\u901f\u521b\u5efa\u9879\u76ee\u4ee3\u7801\uff0c\u751f\u6210 Go \u5de5\u7a0b\u5316\u9879\u76ee",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i={unversionedId:"getting-started/start",id:"getting-started/start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"Kratos \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5feb\u901f\u521b\u5efa\u9879\u76ee\u4ee3\u7801\uff0c\u751f\u6210 Go \u5de5\u7a0b\u5316\u9879\u76ee",source:"@site/docs/getting-started/start.md",sourceDirName:"getting-started",slug:"/getting-started/start",permalink:"/docs/getting-started/start",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/getting-started/start.md",version:"current",frontMatter:{id:"start",title:"\u5feb\u901f\u5f00\u59cb",description:"Kratos \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5feb\u901f\u521b\u5efa\u9879\u76ee\u4ee3\u7801\uff0c\u751f\u6210 Go \u5de5\u7a0b\u5316\u9879\u76ee",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/intro/changelog"},next:{title:"CLI\u5de5\u5177",permalink:"/docs/getting-started/usage"}},s=[{value:"\u7248\u672c\u9700\u6c42",id:"\u7248\u672c\u9700\u6c42",children:[]},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[]},{value:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c",id:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c",children:[]},{value:"\u6d4b\u8bd5\u63a5\u53e3",id:"\u6d4b\u8bd5\u63a5\u53e3",children:[]},{value:"\u9879\u76ee\u6a21\u677f",id:"\u9879\u76ee\u6a21\u677f",children:[]}],c={toc:s};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7248\u672c\u9700\u6c42"},"\u7248\u672c\u9700\u6c42"),(0,a.kt)("p",null,"\u9700\u8981\u4f7f\u7528 kratos v2.0.0 \u4ee5\u4e0a\u7248\u672c\uff1b"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u9700\u8981\u5b89\u88c5\u597d\u5bf9\u5e94\u7684\u4f9d\u8d56\u73af\u5883\uff0c\u4ee5\u53ca\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf"},"protoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protoc-gen-go"))),(0,a.kt)("p",null,"\u5efa\u8bae\u5f00\u542fGO111MODULE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GO111MODULE=on\n")),(0,a.kt)("p",null,"\u5982\u679c\u62c9\u53d6\u4f9d\u8d56\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u5efa\u8bae",(0,a.kt)("a",{parentName:"p",href:"https://goproxy.cn/"},"\u914d\u7f6eGOPROXY")),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 kratos \u547d\u4ee4\u5de5\u5177\ngo get -u github.com/go-kratos/kratos/cmd/kratos/v2@latest\n# \u53ef\u80fd\u4e0d\u662f\u6700\u65b0\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u6267\u884c\nkratos upgrade\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u9879\u76ee\u6a21\u677f\nkratos new helloworld\n\ncd helloworld\n# \u62c9\u53d6\u9879\u76ee\u4f9d\u8d56\ngo mod download\n# \u751f\u6210proto\u6a21\u677f\nkratos proto add api/helloworld/helloworld.proto\n# \u751f\u6210proto\u6e90\u7801\nkratos proto client api/helloworld/helloworld.proto\n# \u751f\u6210server\u6a21\u677f\nkratos proto server api/helloworld/helloworld.proto -t internal/service\n")),(0,a.kt)("h2",{id:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c"},"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210\u6240\u6709proto\u6e90\u7801\u3001wire\u7b49\u7b49\ngo generate ./...\n\n# \u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\ngo build -o ./bin/ ./...\n\n# \u8fd0\u884c\u9879\u76ee\n./bin/helloworld -conf ./configs\n")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63a5\u53e3"},"\u6d4b\u8bd5\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl \'http://127.0.0.1:8000/helloworld/kratos\'\n\n\u8f93\u51fa\uff1a\n{\n  "message": "Hello kratos"\n}\n')),(0,a.kt)("h2",{id:"\u9879\u76ee\u6a21\u677f"},"\u9879\u76ee\u6a21\u677f"),(0,a.kt)("p",null,"Kratos \u662f\u901a\u8fc7\u5728\u7ebf github \u4ed3\u5e93\u6a21\u677f\uff0c\u5e76\u4e14\u8fdb\u884c\u62c9\u53d6\u521b\u5efa\u9879\u76ee\uff0c\u5bf9\u5e94\u6a21\u677f\u5730\u5740\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout"},"Kratos Layout"))))}p.isMDXComponent=!0}}]);