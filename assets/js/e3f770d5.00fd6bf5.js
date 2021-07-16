(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[198],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,h=s["".concat(l,".").concat(d)]||s[d]||p[d]||a;return r?n.createElement(h,c(c({ref:t},m),{},{components:r})):n.createElement(h,c({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7974:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=["components"],i={},l={unversionedId:"method-layout/methods/check_key()",id:"method-layout/methods/check_key()",isDocsHomePage:!1,title:"check_key()",description:"public function check_key( $key )",source:"@site/docs/method-layout/methods/check_key().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/check_key()",permalink:"/method-wiki/docs/method-layout/methods/check_key()",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/method-layout/methods/check_key().md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"build_page()",permalink:"/method-wiki/docs/method-layout/methods/build_page()"},next:{title:"determine_attributes()",permalink:"/method-wiki/docs/method-layout/methods/determine_attributes()"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],m={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public function check_key( $key )")),(0,a.kt)("p",null,"This method checks to see if a passed value is set and is not empty. If both conditions are met, the method returns ",(0,a.kt)("em",{parentName:"p"},"true"),". Otherwise, the method returns ",(0,a.kt)("em",{parentName:"p"},"false"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$key"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(required)")," The variable to evaluate.",(0,a.kt)("br",{parentName:"li"}),"")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Take the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$my_array = array(\n    'title' => 'My Awesome Title',\n    'content' => '',\n);\n$check1 = $this->check_key( $my_array['title'] );\n$check2 = $this->check_key( $my_array['content'] );\n$check3 = $this->check_key( $my_array['image_id'] );\n")),(0,a.kt)("p",null,"In the example above:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"$check1 would equal ",(0,a.kt)("em",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"$check2 would equal ",(0,a.kt)("em",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"$check3 would equal ",(0,a.kt)("em",{parentName:"li"},"false"))))}p.isMDXComponent=!0}}]);