(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[80],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7156:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:7,sidebar_label:"Changelog"},c={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Documentation Changelog",description:"*",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/method-wiki/docs/changelog",version:"current",sidebar_label:"Changelog",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Changelog"},sidebar:"tutorialSidebar",previous:{title:"Globals Reference",permalink:"/method-wiki/docs/method-generator/globals"}},u=[{value:"2021-07-18",id:"2021-07-18",children:[]},{value:"2021-07-16",id:"2021-07-16",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2021-07-18"},"2021-07-18"),(0,a.kt)("p",null,"Changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minor CSS tweaks added to increase readability. This includes improved margins for ",(0,a.kt)("inlineCode",{parentName:"li"},"<hr>")," elements, and a new link color for light mode."),(0,a.kt)("li",{parentName:"ul"},"Linked method references in the template building file that weren't already linked."),(0,a.kt)("li",{parentName:"ul"},"Worked on improving method documentation. Eventually, each page in the methods section will have the same overall format ( overview / arguments / return / example ), and warnings will be displayed for any method that calls maybe_unserialize().")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2021-07-16"},"2021-07-16"),(0,a.kt)("p",null,"Generated initial release of project documentation for Method and Method Generator. Please exuse the several inconsistencies and misspellings."))}d.isMDXComponent=!0}}]);