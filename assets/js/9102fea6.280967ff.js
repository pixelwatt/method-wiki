(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[1374],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4156:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],u={},c={unversionedId:"method-layout/methods/build_header()",id:"method-layout/methods/build_header()",isDocsHomePage:!1,title:"build_header()",description:"abstract protected function build_header()",source:"@site/docs/method-layout/methods/build_header().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/build_header()",permalink:"/method-wiki/docs/method-layout/methods/build_header()",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/method-layout/methods/build_header().md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"build_components()",permalink:"/method-wiki/docs/method-layout/methods/build_components()"},next:{title:"build_layout()",permalink:"/method-wiki/docs/method-layout/methods/build_layout()"}},l=[{value:"Example",id:"example",children:[]}],d={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abstract protected function build_header()")),(0,a.kt)("p",null,"This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. In this method, you'll set up the header that appears on every page."),(0,a.kt)("p",null,"The build_footer() method does the same thing, but for the footer that appears at the bottom of every page. Trying to create a page for it causes GitHub to freak out and make it the footer of every wiki page."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protected function build_header() {\n    $this->scripts .= '\n        <script>\n            // Javascript supporting the header go here.\n        <\/script>\n    ';\n    $this->html .= '\n        \x3c!-- Header HTML goes here --\x3e\n    ';\n    return;\n}\n")))}s.isMDXComponent=!0}}]);