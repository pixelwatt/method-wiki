(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4836],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1304:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={},s={unversionedId:"method-layout/methods/array_to_ul()",id:"method-layout/methods/array_to_ul()",isDocsHomePage:!1,title:"array_to_ul()",description:"public function arraytoul( $array, $class = '' )",source:"@site/docs/method-layout/methods/array_to_ul().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/array_to_ul()",permalink:"/method-wiki/docs/method-layout/methods/array_to_ul()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"array_to_p()",permalink:"/method-wiki/docs/method-layout/methods/array_to_p()"},next:{title:"build_component()",permalink:"/method-wiki/docs/method-layout/methods/build_component()"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]},{value:"Notes",id:"notes",children:[]}],m={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public function array_to_ul( $array, $class = '' )")),(0,o.kt)("p",null,"This method takes an indexed array and builds the HTML for an unordered list, with each array value having its own list item."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Only Pass Trusted Input")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please be aware that $array is first passed through the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/maybe_unserialize/"},"maybe_unserialize()")," function (to support passing serialized post meta to the method). The contents of each array index are passed through ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/esc_html/"},"esc_html()"),", and then the ",(0,o.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/format_tags()"},"format_tags()")," method (allowing for basic content formatting without supporting raw HTML)"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$array"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(mixed)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," An indexed array or serialized indexed array to convert into an unordered list.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$class"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," A CSS class for the unordered list.  ")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string)")," If that passed value for $array is a valid array and is not empty, this method returns the html markup for an unordered list, with each processed value of the passed array wrapped in ",(0,o.kt)("inlineCode",{parentName:"p"},"<li>...</li>"),". If the provided value for $array is not an array, or is empty, the method returns an empty string.  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following code..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$my_array = array( 'one', 'two', 'three' );\n$this->html .= $this->array_to_ul( $my_array, 'some-numbers' );\n")),(0,o.kt)("p",null,"Would add the following HTML (formatted for legibility here, returned as single line in practice)..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ul class="some-numbers">\n    <li>one</li>\n    <li>two</li>\n    <li>three</li>\n</ul>\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"$class")," argument was added in v1.1.2"),(0,o.kt)("li",{parentName:"ul"},"Format tag support was added in v1.1.2")))}p.isMDXComponent=!0}}]);