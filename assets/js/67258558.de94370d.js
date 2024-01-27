(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5626:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"method-layout/methods/get_option()",id:"method-layout/methods/get_option()",isDocsHomePage:!1,title:"get_option()",description:"public function get_option( $key )",source:"@site/docs/method-layout/methods/get_option().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/get_option()",permalink:"/docs/method-layout/methods/get_option()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_meta()",permalink:"/docs/method-layout/methods/get_meta()"},next:{title:"get_serialized_loaded_meta()",permalink:"/docs/method-layout/methods/get_serialized_loaded_meta()"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public function get_option( $key )")),(0,a.kt)("p",null,"This method allows you to quickly retrieve the value for an individual theme option (or theme mod, depending on the value that the set",(0,a.kt)("em",{parentName:"p"},"opts() method is configured to query). This method can be used to retrieve any option, reguardless of whether or not it is an array. If the passed key does not exist or is empty, this method will return _false"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$key"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(required)")," The options key to pull from the $opts property (where all theme options are stored)",(0,a.kt)("br",{parentName:"li"}),""),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$fallback")," ",(0,a.kt)("span",{class:"version-badge"},"v1.3.4+"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(optional)")," An optional string to fall back to if the loaded option key isn't set or is empty. If a fallback value is not provided and the key isn't set or is empty, the method will return false. If used, the $fallback string ",(0,a.kt)("strong",{parentName:"li"},"will not")," be passed through the format_tags() class method, so you can include HTML markup as needed.\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,"If the passed array key (option) exists and is not empty, the key's value is returned. If the key does not exist or is empty, this method returns ",(0,a.kt)("em",{parentName:"p"},"false"),".  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Take the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->html .= ( $this->get_option( 'copyright' ) ? '<div class=\"site-copyright\">' . $this->get_option( 'copyright' ) . '</div>' : '' );\n")),(0,a.kt)("p",null,"In the about code, we first use the get_option() method to see if an array key exists and isn't empty. If the key exists and has a value, we then use the method to output the value, wrapped with a div. Otherwise, we do nothing. The above example is somewhat overly simplified, as it does not sanitize or filter the returned value. In similiar cases, you would most likely be better off using the get_headline_from_option() or get_content_from_option() methods, which automatically check to see if a key exists and has a value, and then processes the returned value in different ways."))}d.isMDXComponent=!0}}]);