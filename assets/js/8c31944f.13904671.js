(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[517],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5354:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={},u={unversionedId:"method-layout/methods/get_footer_markup()",id:"method-layout/methods/get_footer_markup()",isDocsHomePage:!1,title:"get_footer_markup()",description:"public function getfootermarkup()",source:"@site/docs/method-layout/methods/get_footer_markup().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/get_footer_markup()",permalink:"/method-wiki/docs/method-layout/methods/get_footer_markup()",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/method-layout/methods/get_footer_markup().md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_content_from_option()",permalink:"/method-wiki/docs/method-layout/methods/get_content_from_option()"},next:{title:"get_header_markup()",permalink:"/method-wiki/docs/method-layout/methods/get_header_markup()"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public function get_footer_markup()")),(0,a.kt)("p",null,"This method is used to return footer markup, as well as all of the page's scripts and modal markup (unless init_page() was called with the $standalone argument passed as true), when building layouts directly inside theme template files, and should only be used after the init_page() method has been called."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"This method accepts no arguments.  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,"If the $standalone argument was passed as false to init_page() (or no value was specified), this method will return anything added to the class' $html property by the build_footer() method, as well as any markup added to the $scripts and $modal properties by build_header() or by any component generated using the build_component() method. If $standalone was passed as true, all markup added to the $html, $scripts, and $modals properties by build_footer() will be returned."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Below is a basic example of a page template built using get_footer_markup():"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/*\nTemplate Name: My Custom Page Template\n*/\n\n    get_header();\n    $layout = new MethodThemeLayout;\n    $layout->init_page( $post->ID );\n    echo $layout->get_header_markup();\n    if ( have_posts() ) {\n        while ( have_posts() ) {\n            the_post(); \n            echo '\n                <div class=\"method-page-content\">\n                    <div class=\"container-fluid ' . method_get_class( 'full_width_container' ) . '\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"' . method_get_class( 'full_width_outer_col' ) . '\">\n            ';\n            the_content();\n            echo '\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ';\n        } // end while\n    } // end if\n    echo $layout->get_footer_markup();\n    get_footer();\n\n")))}p.isMDXComponent=!0}}]);