(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[2365],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3019:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},p={unversionedId:"method-layout/methods/get_svg()",id:"method-layout/methods/get_svg()",isDocsHomePage:!1,title:"get_svg()",description:"public function getsvg( int $id, string $class = '', string $label = '', bool $hidden = false, string $fallbacksize = 'full' )",source:"@site/docs/method-layout/methods/get_svg().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/get_svg()",permalink:"/method-wiki/docs/method-layout/methods/get_svg()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_serialized_meta()",permalink:"/method-wiki/docs/method-layout/methods/get_serialized_meta()"},next:{title:"init_page()",permalink:"/method-wiki/docs/method-layout/methods/init_page()"}},m=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],s={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public function get_svg( int $id, string $class = '', string $label = '', bool $hidden = false, string $fallback_size = 'full' )")),(0,o.kt)("p",null,'This method retrieves returns a customized, inlined svg from an attachment ID. If the ID passed to the method is not for a svg, the method falls back to wp_get_attachment_image(), which will use the "full" image size by default.'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"$id"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(int)")," ",(0,o.kt)("em",{parentName:"p"},"(required)")," The attachment ID to get the path for.\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"$class"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," A CSS class (or classes) to add the svg tag.\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),(0,o.kt)("br",{parentName:"p"}),"\n","")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"$label"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," If you need to set the aria-label attribute for the svg (in some cases, needed for accessibility), provide a label.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"$hidden"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(bool)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Whether or not to hide the svg from screen readers. If ",(0,o.kt)("em",{parentName:"p"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')," will be added to the svg tag.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: false"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"$fallback_size"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," The image size to return if the attachment ID references an image that is not an svg.\n",(0,o.kt)("em",{parentName:"p"},"Default: 'full'"),(0,o.kt)("br",{parentName:"p"}),"\n",""))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string)")," If the passed attachment ID is for an svg, the method will return an inlined HTML svg element. If the ID references any other type of image, wp_get_attachment_image() will be used to return a HTML img element. Otherwise, the method will return an empty string.  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Coming Soon")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the interest of getting the documentation site online before 2030, check back soon for an example."))))}c.isMDXComponent=!0}}]);