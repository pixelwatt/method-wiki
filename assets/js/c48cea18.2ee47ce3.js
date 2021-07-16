(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4964],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9751:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),l=["components"],i={},s={unversionedId:"method-layout/methods/array_to_p()",id:"method-layout/methods/array_to_p()",isDocsHomePage:!1,title:"array_to_p()",description:"public function arraytop( $array, $class = '', $seperator = '', $show_seperator = false )",source:"@site/docs/method-layout/methods/array_to_p().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/array_to_p()",permalink:"/method-wiki/docs/method-layout/methods/array_to_p()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class Reference",permalink:"/method-wiki/docs/method-layout/class-reference"},next:{title:"array_to_ul()",permalink:"/method-wiki/docs/method-layout/methods/array_to_ul()"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Notes",id:"notes",children:[]}],u={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public function array_to_p( $array, $class = '', $seperator = '', $show_seperator = false )")),(0,o.kt)("p",null,"This method takes an indexed array and builds a paragraph, with each array item being seperated by line breaks. This can be ideal for formatting certain types of content, such as an street adress, and works well for outputting repeatable text inputs created on the backend with CMB2. "),(0,o.kt)("p",null,"Please be aware that $array is first passed through the maybe_unserialize() function (to support passing serialized post meta to the method). The contents of each array index are passed through esc_html(), and then the format_tags() method (allowing for basic content formatting without supporting raw HTML)"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$array"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(mixed)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," An indexed array or serialized indexed array to convert into an unordered list.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$class"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," A CSS class for the paragraph. Defaults to empty.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$seperator"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," A visually-hidden seperator to include before each line break. While not required, providing a seperator is greatly encouraged, as it will allow for better indexing of the output by search engines and work better with screen readers.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$show_seperator"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(bool)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," Whether or not the seperator should be visible. If false, a span with the ",(0,o.kt)("em",{parentName:"li"},"visually-hidden")," css class will be wrapped around the seperator.",(0,o.kt)("br",{parentName:"li"}),"")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following code..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$my_array = array( '[strong]My Awesome Business[/strong]', '2920 Kessler Pines', 'Huntsville, AL 35801' );\n$this->html .= $this->array_to_ul( $my_array, 'footer-addr', ', ' );\n")),(0,o.kt)("p",null,"Would add the following HTML (formatted for legibility here, returned as single line in practice)..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<p class="footer-addr">\n    <strong>My Awesome Business</strong><span class="visually-hidden">, </span><br>\n    2920 Kessler Pines<span class="visually-hidden">, </span><br>\n    Huntsville, AL 35801\n</p>\n\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"$seperator")," argument was added in v1.1.2"),(0,o.kt)("li",{parentName:"ul"},"Format tag support was added in v1.1.2")))}c.isMDXComponent=!0}}]);