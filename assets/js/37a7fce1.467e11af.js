(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[6365],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6229:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={},u={unversionedId:"method-layout/methods/build_footer()",id:"method-layout/methods/build_footer()",isDocsHomePage:!1,title:"build_footer()",description:"abstract protected function build_footer()",source:"@site/docs/method-layout/methods/build_footer().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/build_footer()",permalink:"/docs/method-layout/methods/build_footer()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"build_components()",permalink:"/docs/method-layout/methods/build_components()"},next:{title:"build_header()",permalink:"/docs/method-layout/methods/build_header()"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],d={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abstract protected function build_footer()")),(0,a.kt)("p",null,"This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. In this method, you'll set up the footer that appears on every page."),(0,a.kt)("p",null,"For layouts built inside the layout class, this method is called by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/build_layout()"},"build_layout()")," method, which is called by ",(0,a.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/build_page()"},"build_page()"),". For layouts built directly inside the template, the markup for this method can be returned by using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/get_footer_markup()"},"get_footer_markup()")," method. In either case, this method should not need to directly be called."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"This method accepts no arguments."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,"This method returns no value. Instead, markup for the footer is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$html"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$scripts"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"$modals")," class properties."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    protected function build_footer() {\n        $this->scripts .= '\n            <script>\n                // Javascript supporting the footer gooes here.\n            <\/script>\n        ';\n        $this->html .= '\n            \x3c!-- Footer HTML goes here --\x3e\n        ';\n        return;\n    }\n")))}s.isMDXComponent=!0}}]);