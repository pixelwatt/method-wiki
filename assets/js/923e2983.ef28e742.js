(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4382],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8061:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],l={},p={unversionedId:"method-layout/methods/init_page()",id:"method-layout/methods/init_page()",isDocsHomePage:!1,title:"init_page()",description:"public function init_page( int $pid, bool $standalone )",source:"@site/docs/method-layout/methods/init_page().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/init_page()",permalink:"/docs/method-layout/methods/init_page()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_svg()",permalink:"/docs/method-layout/methods/get_svg()"},next:{title:"inject_bs_modal()",permalink:"/docs/method-layout/methods/inject_bs_modal()"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"public function init_page( int $pid, bool $standalone )")),(0,r.kt)("p",null,"This method is intended to be used when building layouts directly inside theme template files, as opposed to building layout components in the theme layout class' build_components() method and setting the component order in determine_attributes(). "),(0,r.kt)("p",null,"This method sets up the layout class similiar to how the build_page() method does, but with a few key differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"init_page() ",(0,r.kt)("strong",{parentName:"li"},"does not")," call the determine_attributes() method. Insteaded, minimal attributes are set."),(0,r.kt)("li",{parentName:"ul"},"init_page() ",(0,r.kt)("strong",{parentName:"li"},"does not")," call the build_layout() method, as it is assumed that you will be building the layout manually. That being said, reusable components can still be build by using the build_component() method."),(0,r.kt)("li",{parentName:"ul"},"init_page() ",(0,r.kt)("strong",{parentName:"li"},"does")," set $attr",'["is_front"]'," to true if the post ID passed to the method is the ID of the front page."),(0,r.kt)("li",{parentName:"ul"},"init_page() ",(0,r.kt)("strong",{parentName:"li"},"does")," query and store post meta and theme options in the $meta and $opts properties."),(0,r.kt)("li",{parentName:"ul"},"init_page() can only be used for single post templates (not archives)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$pid"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"(int)")," ",(0,r.kt)("em",{parentName:"p"},"(required)")," The post ID that you would like to load data for")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"$standalone"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"(bool)")," ",(0,r.kt)("em",{parentName:"p"},"(optional)")," By default, the build","_","component(), get","_","header","_","markup(), and get","_","footer","_","markup() methods will only return markup from $this->html. Any added scripts or modals will be returned with get","_","footer","_","markup() when it is called. If you do no intend to call get","_","footer","_","markup(), pass the $standalone argument for init","_","page() as true. When set to true, build","_","component(), get","_","header","_","markup(), and get","_","footer","_","markup() will return merged output containing the contents of $this->html, $this->scripts, and $this->modals, resetting the contents of each every time one of the methods is called.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Default: 'false'"),(0,r.kt)("br",{parentName:"p"}),"\n",""))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Below is an example of a page template built using init_page():"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/*\nTemplate Name: My Custom Page Template\n*/\n\n    get_header();\n    $layout = new MethodThemeLayout;\n    $layout->init_page( $post->ID );\n    echo $layout->get_header_markup();\n    echo $layout->build_component( 'page-header' );\n    if ( have_posts() ) {\n        while ( have_posts() ) {\n            the_post(); \n            echo '\n                <div class=\"method-page-content\">\n                    <div class=\"container-fluid ' . method_get_class( 'full_width_container' ) . '\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"' . method_get_class( 'full_width_outer_col' ) . '\">\n            ';\n            the_content();\n            echo '\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ';\n        } // end while\n    } // end if\n    echo $layout->build_component( 'call-to-action' );\n    echo $layout->get_footer_markup();\n    get_footer();\n\n")))}m.isMDXComponent=!0}}]);