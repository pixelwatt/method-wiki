(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4889],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?o.createElement(h,l(l({ref:t},i),{},{components:n})):o.createElement(h,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2172:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),l=["components"],p={},s={unversionedId:"method-layout/methods/build_component()",id:"method-layout/methods/build_component()",isDocsHomePage:!1,title:"build_component()",description:"public function build_component( string $component )",source:"@site/docs/method-layout/methods/build_component().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/build_component()",permalink:"/method-wiki/docs/method-layout/methods/build_component()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"array_to_ul()",permalink:"/method-wiki/docs/method-layout/methods/array_to_ul()"},next:{title:"build_components()",permalink:"/method-wiki/docs/method-layout/methods/build_components()"}},m=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Examples",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]}],i={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"public function build_component( string $component )")),(0,r.kt)("p",null,"This method returns the markup for a single layout component constructerd in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/build_components()"},"build_components()")," method and is intended to be used when building layouts directly inside theme template files."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$component"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"(string)")," ",(0,r.kt)("em",{parentName:"li"},"(required)")," The layout component from the ",(0,r.kt)("a",{parentName:"li",href:"/docs/method-layout/methods/build_components()"},"build_components()")," that you would like the method to return markup for.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string)")," If ",(0,r.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/init_page()"},"init_page()")," has been called with the $standalone argument passed as false (or not passed), the method will return any markup that has been added to the class $html property by the requested component. If ",(0,r.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/init_page()"},"init_page()")," has been called with the $standalone argument passed as true, all markup added by the component to the $html, $modals, and $scripts properties will be returned.  "),(0,r.kt)("p",null,"If the requested component doesn't exist, the method will return an empty string.  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"In the following example, we'll use the build_component() method to return markup for a custom layout component..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/templates/page-template-custom.php"',title:'"/templates/page-template-custom.php"'},"<?php\n/*\nTemplate Name: My Custom Page Template\n*/\n\n    get_header();\n    $layout = new MethodThemeLayout;\n    $layout->init_page( $post->ID );\n    echo $layout->get_header_markup();\n    echo $layout->build_component( 'my-awesome-message' );\n    echo $layout->get_footer_markup();\n    get_footer();\n\n")),(0,r.kt)("p",null,"As you can see, we're using the build_component() method to retrieve and display markup for a component called 'my-awesome-message'. Below is an example of how our build_components() method might look..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/lib/class-theme-layout.php"',title:'"/lib/class-theme-layout.php"'},"protected function build_components() {\n    if ( true == $this->attr['is_archive'] ) {\n        global $wp_query;\n    }\n    foreach ( $this->attr['components'] as $component ) {\n        switch ( $component ) {\n            // other layout components would go here...\n            case 'my-awesome-message':\n                $this->html .= '\n                    <div class=\"container-fluid\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-12 col-md-11\">\n                                <h1>Ever notice how Cable and Thanos are played by the same guy?</h1>\n                            </div>\n                        </div>\n                    </div>\n                ';\n                break;\n            default:\n                break;\n        }\n    }\n    return;\n}\n")),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"For this example, let's imagine that we have some javascript that we want to also add to the $scripts property for the 'my-awesome-message' component..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/lib/class-theme-layout.php"',title:'"/lib/class-theme-layout.php"'},"protected function build_components() {\n    if ( true == $this->attr['is_archive'] ) {\n        global $wp_query;\n    }\n    foreach ( $this->attr['components'] as $component ) {\n        switch ( $component ) {\n            // other layout components would go here...\n            case 'my-awesome-message':\n                $this->html .= '\n                    <div class=\"container-fluid\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-12 col-md-11\">\n                                <h1>Ever notice how Cable and Thanos are played by the same guy?</h1>\n                            </div>\n                        </div>\n                    </div>\n                ';\n                $this->scripts .= '\n                    <script>\n                        console.log(\"The more you know.\");\n                    <\/script>\n                ';\n                break;\n            default:\n                break;\n        }\n    }\n    return;\n}\n")),(0,r.kt)("p",null,"Now let's say that we wanted to display the 'my-awesome-message' component referenced above using the build_component() method, but we wanted that to be the only thing displayed when using our custom template. To achieve this, we'd need to remove the calls to get_header_markup() and get_footer_markup(). This creates a new problem, however, as the contents of the $scripts property for the 'my-awesome-message' component are normally returned with the get_footer_markup() method. For out script to make it to the frontend, we need to modify our template's call to init_page() to pass the $standalone argument as true. This will make any call to build_component() not only return component markup added to the $html property, but also the $scripts and $modals properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/templates/page-template-custom.php"',title:'"/templates/page-template-custom.php"'},"<?php\n/*\nTemplate Name: My Custom Page Template\n*/\n\n    get_header();\n    $layout = new MethodThemeLayout;\n    $layout->init_page( $post->ID, true );\n    echo $layout->build_component( 'my-awesome-message' );\n    get_footer();\n\n")))}u.isMDXComponent=!0}}]);