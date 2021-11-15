"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8865],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],u={title:"Issue And Pull Request",sidebar_position:3,description:"Apache ShenYu Issue And Pull Request",author:"xiaoyu",categories:"Apache ShenYu",tags:["Issue-PR"]},o=void 0,s={unversionedId:"issue-pr",id:"issue-pr",isDocsHomePage:!1,title:"Issue And Pull Request",description:"Apache ShenYu Issue And Pull Request",source:"@site/community/2-issue-pr.md",sourceDirName:".",slug:"/issue-pr",permalink:"/community/issue-pr",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/2-issue-pr.md",version:"current",lastUpdatedBy:"xiaoyu",lastUpdatedAt:163697e4,formattedLastUpdatedAt:"11/15/2021",sidebarPosition:3,frontMatter:{title:"Issue And Pull Request",sidebar_position:3,description:"Apache ShenYu Issue And Pull Request",author:"xiaoyu",categories:"Apache ShenYu",tags:["Issue-PR"]},sidebar:"community",previous:{title:"Code Suggestions",permalink:"/community/code-suggestions"},next:{title:"Contributor",permalink:"/community/contributor"}},p=[{value:"Create Issues",id:"create-issues",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]},{value:"Pull Request",id:"pull-request",children:[]},{value:"Issue Label",id:"issue-label",children:[]},{value:"Merged Pull Request",id:"merged-pull-request",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-issues"},"Create Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you have any problems, you can choose to create an issue to describe."),(0,a.kt)("li",{parentName:"ul"},"It has 4 types which are: Bug Report, Feature Request, Question and Task."),(0,a.kt)("li",{parentName:"ul"},"Please follow the template for each type, if the more detailed your information is, the more it will help to solve your problem.")),(0,a.kt)("h2",{id:"commit-messages"},"Commit Messages"),(0,a.kt)("p",null,"Format is : ",(0,a.kt)("inlineCode",{parentName:"p"},"<type> (<module>) : <body>"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<type>"),": Define your modify type, Including but not limited to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refactor"),(0,a.kt)("li",{parentName:"ul"},"fix"),(0,a.kt)("li",{parentName:"ul"},"docs"),(0,a.kt)("li",{parentName:"ul"},"test"),(0,a.kt)("li",{parentName:"ul"},"feature\n...")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<module>"),": Any of the modules belonging to the Apache ShenYu project,Please strictly follow the name of the project, Including but not limited to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"admin"),(0,a.kt)("li",{parentName:"ul"},"client"),(0,a.kt)("li",{parentName:"ul"},"common"),(0,a.kt)("li",{parentName:"ul"},"metrics"),(0,a.kt)("li",{parentName:"ul"},"spi"),(0,a.kt)("li",{parentName:"ul"},"plugin-grpc"),(0,a.kt)("li",{parentName:"ul"},"plugin-alibaba-dubbo"),(0,a.kt)("li",{parentName:"ul"},"register-client-nacos\n...")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<body>"),":Short description for commit messages. Please note the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No need for any capitalized words")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please end with ",(0,a.kt)("inlineCode",{parentName:"p"},".")))),(0,a.kt)("p",null,"for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refactor admin : modify some error log."),(0,a.kt)("li",{parentName:"ul"},"fix plugin-grpc :\xa0modify\xa0 \xa0result error."),(0,a.kt)("li",{parentName:"ul"},"feature plugin-alibaba-dubbo : add request for tag router.")),(0,a.kt)("h2",{id:"pull-request"},"Pull Request"),(0,a.kt)("p",null,"First of all, before Pull Request, you have to create issueNo Format is : ","[ISSUE #{issue number}]"," ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>"),"."),(0,a.kt)("p",null,"Please note the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A space is required between ISSUE and issue number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<body>")," : The first word needs to be capitalized, Other words no longer appear in capital letters.")),(0,a.kt)("p",null,"for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[ISSUE #123]"," Support spring cloud grayscale release.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[ISSUE #456]"," Fix dubbo plugin have some error."))),(0,a.kt)("h2",{id:"issue-label"},"Issue Label"),(0,a.kt)("p",null,"We need to Label to all issues. All of Apache ShenYu community's lists are here : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dromara/shenyu/labels"},"https://github.com/dromara/shenyu/labels"),"."),(0,a.kt)("p",null,"In general, an issue should be marked with 2 Label. One is the type of issue, and the other is the project module to which the issue belongs."),(0,a.kt)("p",null,"Except for the following Labels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[type: build]"),(0,a.kt)("li",{parentName:"ul"},"[type: community]"),(0,a.kt)("li",{parentName:"ul"},"[type: discussion]"),(0,a.kt)("li",{parentName:"ul"},"[type: duplicate]"),(0,a.kt)("li",{parentName:"ul"},"[TODO-LIST]"),(0,a.kt)("li",{parentName:"ul"},"[status: wontfix]","\n...")),(0,a.kt)("h2",{id:"merged-pull-request"},"Merged Pull Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All pull request must be approve and review.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Give appropriate advice whenever possible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In general, pull\xa0request\xa0 \xa0should be marked with 2 Lable and must set milestone.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After the merge is completed, need to check if the associated issueNo is closed."))))}c.isMDXComponent=!0}}]);