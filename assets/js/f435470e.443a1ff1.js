(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[5848],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,c=d["".concat(p,".").concat(u)]||d[u]||h[u]||a;return n?o.createElement(c,i(i({ref:t},s),{},{components:n})):o.createElement(c,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={},p={unversionedId:"method-layout/methods/get_headline_from_option()",id:"method-layout/methods/get_headline_from_option()",isDocsHomePage:!1,title:"get_headline_from_option()",description:"public function getheadlinefrom_option( string $key, string $before, string $after, string $fallback = '' )",source:"@site/docs/method-layout/methods/get_headline_from_option().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/get_headline_from_option()",permalink:"/docs/method-layout/methods/get_headline_from_option()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_headline()",permalink:"/docs/method-layout/methods/get_headline()"},next:{title:"get_loaded_content()",permalink:"/docs/method-layout/methods/get_loaded_content()"}},m=[{value:"Arguments",id:"arguments",children:[]},{value:"Examples",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}]}],s={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public function get_headline_from_option( string $key, string $before, string $after, string $fallback = '' )")),(0,a.kt)("p",null,"This method allows you to build headlines and other types of content from a theme option (or theme mod) more efficiently than by using the get_option() method. Option key values, if set and not empty, are passed through esc_html() and then the format_tags() class method. The primary purpose of this method is to provide a utility for writing more concise code."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$key"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(required)")," The option key to check and use if is set and not empty.",(0,a.kt)("br",{parentName:"li"}),""),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$before"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(required)")," Markup to include before the processed value of the option key, if the option key is set and not empty, or a fallback value has been provided.",(0,a.kt)("br",{parentName:"li"}),""),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$after"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(required)")," Markup to include after the processed value of the option key, if the option key is set and not empty, or a fallback value has been provided.",(0,a.kt)("br",{parentName:"li"}),""),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$fallback"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(optional)")," An optional string to fall back to if the option key isn't set or is empty. If a fallback value is not provided and the option key isn't set or is empty, the method will return empty.",(0,a.kt)("br",{parentName:"li"}),"")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Instead of this...\n$this->html .= ( $this->get_option( 'my_headline' ) ? '<h2>' . $this->format_tags( esc_html( $this->get_option( 'my_headline' ) ) ) . '</h2>' : '' );\n\n// You could do this...\n$this->html .= $this->get_headline_from_option( 'my_headline', '<h2>', '</h2>' );\n")),(0,a.kt)("h3",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Instead of this...\n$this->html .= '<h2>' . ( $this->get_option( 'my_headline' ) ? $this->format_tags( esc_html( $this->get_option( 'my_headline' ) ) ) : 'Awesome Content' ) . '</h2>';\n\n// You could do this...\n$this->html .= $this->get_headline_from_option( 'my_headline', '<h2>', '</h2>', 'Awesome Content' );\n")),(0,a.kt)("h3",{id:"example-3"},"Example 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Instead of this...\n$this->html .= ( $this->get_option( 'ceo_name' ) ? '<p class=\"employee-meta mb-0\">CEO: ' . $this->format_tags( esc_html( $this->get_option( 'ceo_name' ) ) ) . '</p>' : '' );\n\n// You could do this...\n$this->html .= $this->get_headline_from_option( 'ceo_name', '<p class=\"employee-meta mb-0\">CEO: ', '</p>' );\n")))}h.isMDXComponent=!0}}]);