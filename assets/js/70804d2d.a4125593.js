(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4331],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return r?n.createElement(f,u(u({ref:t},d),{},{components:r})):n.createElement(f,u({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},344:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),u=["components"],a={},l={unversionedId:"method-layout/methods/build_layout()",id:"method-layout/methods/build_layout()",isDocsHomePage:!1,title:"build_layout()",description:"protected function build_layout()",source:"@site/docs/method-layout/methods/build_layout().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/build_layout()",permalink:"/method-wiki/docs/method-layout/methods/build_layout()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"build_header()",permalink:"/method-wiki/docs/method-layout/methods/build_header()"},next:{title:"build_observer()",permalink:"/method-wiki/docs/method-layout/methods/build_observer()"}},c=[],d={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"protected function build_layout()")),(0,i.kt)("p",null,"This method is called by the build_page() method after all layout attributes have been determined. This method has no arguments and simply runs the build_header(), build_components(), and build_footer() methods. It most likely will never need to be called directly."))}s.isMDXComponent=!0}}]);