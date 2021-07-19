(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[278],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=s(a),u=r,c=h["".concat(d,".").concat(u)]||h[u]||p[u]||n;return a?o.createElement(c,l(l({ref:t},m),{},{components:a})):o.createElement(c,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4597:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var o=a(2122),r=a(9756),n=(a(7294),a(3905)),l=["components"],i={sidebar_position:1},d={unversionedId:"method-layout/class-reference",id:"method-layout/class-reference",isDocsHomePage:!1,title:"Class Reference",description:"The MethodLayout class is a PHP class for building the front-end of your site in an efficient and performance-friendly way. MethodLayout is an abstract class, meaning it cannot be used directly and must instead be extended by a theme-specific layout class. Method includes a barebones extended class to use as a starting point, which can be found in lib/class-theme-layout.php",source:"@site/docs/method-layout/class-reference.md",sourceDirName:"method-layout",slug:"/method-layout/class-reference",permalink:"/docs/method-layout/class-reference",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Limitations & Known Issues",permalink:"/docs/getting-started/known-issues"},next:{title:"array_to_p()",permalink:"/docs/method-layout/methods/array_to_p()"}},s=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[{value:"Abstract Methods",id:"abstract-methods",children:[]},{value:"Post Meta Methods",id:"post-meta-methods",children:[]},{value:"Theme Option Methods",id:"theme-option-methods",children:[]},{value:"Frontend Building Methods",id:"frontend-building-methods",children:[]},{value:"Bootstrap Elements",id:"bootstrap-elements",children:[]},{value:"Utility Methods",id:"utility-methods",children:[]},{value:"Other",id:"other",children:[]}]}],m={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Method_Layout class is a PHP class for building the front-end of your site in an efficient and performance-friendly way. Method_Layout is an abstract class, meaning it cannot be used directly and must instead be extended by a theme-specific layout class. Method includes a barebones extended class to use as a starting point, which can be found in ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/class-theme-layout.php")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$meta"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"array")," ) When building a single post (of any post type), all meta for the current post is stored in this array. Rather than interacting directly with this property, several methods are provided to assist in easily retrieving and using meta keys. These include: get_meta(), get_serialized_meta(), get_headline(), and get_content()",(0,n.kt)("br",{parentName:"li"}),""),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$loaded_meta"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"array")," ) This is an array used to load meta from a different post. This can be useful in loops, especially if you need access to numerous meta keys. Meta is loaded into this array by passing a post ID to the load_meta() method, and is removed from this array by calling the unload_meta() method. As with meta for the current post, several methods are provided to assist in easily retrieving and using loaded meta keys. These include: get_loaded_meta(), get_serialized_loaded_meta(), get_loaded_headline(), and get_loaded_content()",(0,n.kt)("br",{parentName:"li"}),""),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$opts"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"array")," ) Theme options are loaded into this array upon calling the build_page() method. While Method uses the theme options page route, theme mods can be loaded into this array. A handful of methods are provided to assist in easily retrieving and using option keys. These include: get_option(), get_headline_from_option(), and get_content_from_option()",(0,n.kt)("br",{parentName:"li"}),""),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$id"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"int")," ) When building a single post (of any post type), this property is set to the ID of that post so that it can easily be referenced across the class.",(0,n.kt)("br",{parentName:"li"}),""),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$html"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"string")," ) HTML markup assembled by the layout class and returned to the template calling the build_page() method.",(0,n.kt)("br",{parentName:"li"}),""),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$modals"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"string")," ) Bootstrap modal markup to append to the end of the $html property before it is returned to the frontend. Modal markup can be appended directly to this property as needed, or can be added by using the inject_modal() method.\n"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$scripts"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"string")," ) Scripts (or any other markup) that appear after all other markup generated by the class. Markup is appended directly to the property.",(0,n.kt)("br",{parentName:"li"}),""),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"$attr"),(0,n.kt)("br",{parentName:"li"}),"( ",(0,n.kt)("em",{parentName:"li"},"array")," ) An array used to hold various bits of information about the current page being built. Examples include the post type of the post or archive being built, whether or not it is the front page, and taxonomy information. Layout components passed to the build",(0,n.kt)("em",{parentName:"li"},"components() method are also stored in this array, under the _components")," key.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"abstract-methods"},"Abstract Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/set_opts()"},"set_opts()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/determine_attributes()"},"determine_attributes()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_header()"},"build_header()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#"},"build_footer()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_components()"},"build_components()"))),(0,n.kt)("h3",{id:"post-meta-methods"},"Post Meta Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_meta()"},"get_meta()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_serialized_meta()"},"get_serialized_meta()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_headline()"},"get_headline()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_content()"},"get_content()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/load_meta()"},"load_meta()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/unload_meta()"},"unload_meta()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_loaded_meta()"},"get_loaded_meta()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_serialized_loaded_meta()"},"get_serialized_loaded_meta()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_loaded_headline()"},"get_loaded_headline()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_loaded_content()"},"get_loaded_content()"))),(0,n.kt)("h3",{id:"theme-option-methods"},"Theme Option Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_option()"},"get_option()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_headline_from_option()"},"get_headline_from_option()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_content_from_option()"},"get_content_from_option()"))),(0,n.kt)("h3",{id:"frontend-building-methods"},"Frontend Building Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/init_page()"},"init_page()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_component()"},"build_component()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_header_markup()"},"get_header_markup()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_footer_markup()"},"get_footer_markup()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_merged_markup()"},"get_merged_markup()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/reset_html()"},"reset_html()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/reset_markup()"},"reset_markup()"))),(0,n.kt)("h3",{id:"bootstrap-elements"},"Bootstrap Elements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_bs_icon_svg()"},"get_bs_icon_svg()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/inject_bs_modal()"},"inject_bs_modal()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_bs_icon_svg()"},"get_bs_icon_svg()")),(0,n.kt)("li",{parentName:"ul"},"inject","_","modal() ",(0,n.kt)("em",{parentName:"li"},"(Deprecated, use inject","_","bs","_","modal() instead)"))),(0,n.kt)("h3",{id:"utility-methods"},"Utility Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/array_to_ul()"},"array_to_ul()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/array_to_p()"},"array_to_p()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/format_tags()"},"format_tags()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/check_key()"},"check_key()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/filter_content()"},"filter_content()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/str_replace_assoc()"},"str_replace_assoc()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/format_headline()"},"format_headline()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_bg_inline_style()"},"get_bg_inline_style()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/odd_or_even()"},"odd_or_even()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/get_svg()"},"get_svg()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_observer()"},"build_observer()")),(0,n.kt)("li",{parentName:"ul"},"build_social_icons()")),(0,n.kt)("h3",{id:"other"},"Other"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_page()"},"build_page()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_layout()"},"build_layout()"))))}p.isMDXComponent=!0}}]);