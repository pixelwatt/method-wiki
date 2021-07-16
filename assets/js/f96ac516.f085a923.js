(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[9414],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},326:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],l={},d={unversionedId:"method-layout/methods/get_loaded_content()",id:"method-layout/methods/get_loaded_content()",isDocsHomePage:!1,title:"get_loaded_content()",description:"public function getloadedcontent( string $key, string $before, string $after, string $fallback = '' )",source:"@site/docs/method-layout/methods/get_loaded_content().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/get_loaded_content()",permalink:"/method-wiki/docs/method-layout/methods/get_loaded_content()",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/method-layout/methods/get_loaded_content().md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_headline_from_option()",permalink:"/method-wiki/docs/method-layout/methods/get_headline_from_option()"},next:{title:"get_loaded_headline()",permalink:"/method-wiki/docs/method-layout/methods/get_loaded_headline()"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"public function get_loaded_content( string $key, string $before, string $after, string $fallback = '' )")),(0,r.kt)("p",null,"This method allows you to retrieve and filter content from loaded post meta more efficiently than by using the get_meta() method. Before this method is used, load_meta() must be first called to load a specified post's meta into the $loaded_meta property. Otherwise, this method will not function as expected. Loaded meta key values, if set and not empty, are passed through the filter_content() class method, then wrapped in values provide for the $before and $after arguments. This method is most useful when handeling content entered through a TinyMCE field."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$key"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"(string)")," ",(0,r.kt)("em",{parentName:"li"},"(required)")," The loaded meta key to check and use if is set and not empty.",(0,r.kt)("br",{parentName:"li"}),""),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$before"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"(string)")," ",(0,r.kt)("em",{parentName:"li"},"(required)")," Markup to include before the processed value of the loaded meta key, if the key is set and not empty, or a fallback value has been provided.",(0,r.kt)("br",{parentName:"li"}),""),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$after"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"(string)")," ",(0,r.kt)("em",{parentName:"li"},"(required)")," Markup to include after the processed value of the loaded meta key, if the key is set and not empty, or a fallback value has been provided.",(0,r.kt)("br",{parentName:"li"}),""),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$fallback"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"(string)")," ",(0,r.kt)("em",{parentName:"li"},"(optional)")," An optional string to fall back to if the loaded meta key isn't set or is empty. If a fallback value is not provided and the key isn't set or is empty, the method will return empty. If used, the $fallback string ",(0,r.kt)("strong",{parentName:"li"},"will not")," be passed through the filter_content() class method.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For this example, let's imagine that we have a custom post type called ",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),". For each location a content editor adds, we've used CMB2 to create a WYSIWYG (TinyMCE) field (stored as post meta with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"_method_location_short_description"),") that allows content editors to add a short description for each location, alongside the full description that we'd only show on each location's page (which WordPress' built-in editor field would handle). In the example below, we'll build a layout component that loops through each location, checks to see if a short description has been set, and displays it if available. Otherwise, nothing will be displayed:"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$args = array(\n    'posts_per_page' => -1,\n    'post_type'   => 'locations',\n    'fields'      => 'ids'\n);\n$items = get_posts( $args );\n$this->html .= '\n    <div id=\"method-location-list\">\n        <div class=\"container-fluid full-width-container\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-11\">\n';\nforeach ( $items as $item ) {\n    $this->load_meta( $item );\n    $this->html .= '\n        <div class=\"location-row\">\n            <h2>' . get_the_title( $item ) . '</h2>\n            ' . get_loaded_content( '_method_location_short_description', '<div class=\"desc-wrap\">', '</div>' ) . '\n            \x3c!-- Additional locatiom details would normally be pull and displayed here. --\x3e\n        </div>\n    ';\n    $this->unload_meta();\n}\n$this->html .= '\n                </div>\n            </div>\n        </div>\n    </div>\n';\n")))}m.isMDXComponent=!0}}]);