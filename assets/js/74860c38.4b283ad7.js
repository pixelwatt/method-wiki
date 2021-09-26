(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[2951],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,h=p["".concat(m,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},629:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={},m={unversionedId:"method-layout/methods/get_meta()",id:"method-layout/methods/get_meta()",isDocsHomePage:!1,title:"get_meta()",description:"public function get_meta( $key )",source:"@site/docs/method-layout/methods/get_meta().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/get_meta()",permalink:"/docs/method-layout/methods/get_meta()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_merged_markup()",permalink:"/docs/method-layout/methods/get_merged_markup()"},next:{title:"get_option()",permalink:"/docs/method-layout/methods/get_option()"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public function get_meta( $key )")),(0,o.kt)("p",null,"This method allows you to quickly retrieve post meta from the current post. If the meta key you wish to retrive is an array, use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/get_serialized_meta()"},"get_serialized_meta()")," method instead, as this method will not unserialize retrieved meta values."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$key"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," The meta key to pull from the $meta property (where all meta for the current post is stored)",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$fallback")," ",(0,o.kt)("span",{class:"version-badge"},"v1.3.4+"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," An optional string to fall back to if the loaded meta key isn't set or is empty. If a fallback value is not provided and the key isn't set or is empty, the method will return false. If used, the $fallback string ",(0,o.kt)("strong",{parentName:"li"},"will not")," be passed through the format_tags() class method, so you can include HTML markup as needed.\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("p",null,"If the passed meta key exists, this method will return the value of that key. If the meta key doesn't exist, or is empty, the method returns false.  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Take the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$this->html .= ( $this->get_meta( '_mytheme_front_img_id' ) ? wp_get_attachment_image( $this->get_meta( '_mytheme_front_img_id' ), 'large' ) : '' );\n")),(0,o.kt)("p",null,"In the above code, we first use the get_meta() method to see if an array key exists and isn't empty. Specifically, the method checks to see if ",(0,o.kt)("inlineCode",{parentName:"p"},"$meta['_mytheme_front_img_id'][0]")," exists and has a value. If so, we use the method again to pass an attachment ID to the wp_get_attachment_image() function, adding the resulting image to the layout's html output. This is commonly done with in conjunction with CMB2 file fields, used to let content editors pick imagery using custom editor options."))}c.isMDXComponent=!0}}]);