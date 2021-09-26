(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9577:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l={unversionedId:"method-layout/methods/build_components()",id:"method-layout/methods/build_components()",isDocsHomePage:!1,title:"build_components()",description:"abstract protected function build_components()",source:"@site/docs/method-layout/methods/build_components().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/build_components()",permalink:"/docs/method-layout/methods/build_components()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"build_component()",permalink:"/docs/method-layout/methods/build_component()"},next:{title:"build_footer()",permalink:"/docs/method-layout/methods/build_footer()"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abstract protected function build_components()")),(0,a.kt)("p",null,"This is an ",(0,a.kt)("strong",{parentName:"p"},"abstract method")," that should be included in the theme-specific layout class that extends Method_Layout. This class loops through the components set by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/method-layout/methods/determine_attributes()"},"determine_attributes()")," method and generates frontend markup for each component."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"This method accepts no arguments."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,"This method returns no value. Instead, markup for each component is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$html"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$scripts"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"$modals")," class properties."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Below are examples of various components built inside the build_components() method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"{7,39}","{7,39}":!0},"    protected function build_components() {\n        if ( true == $this->attr['is_archive'] ) {\n            global $wp_query;\n        }\n        foreach ( $this->attr['components'] as $component ) {\n            switch ( $component ) {\n                // An archive loop...\n                case 'post-listing':\n                    $this->html .= '\n                        <div class=\"method-postlist\">\n                            <div class=\"container-fluid ' . method_get_class( 'full_width_container' ) . '\">\n                                <div class=\"row justify-content-center\">\n                                    <div class=\"' . method_get_class( 'full_width_outer_col' ) . '\">\n                    ';\n                    if ( $wp_query->have_posts() ) {\n                        while ( $wp_query->have_posts() ) {\n                            // Optionally, load post meta if you need to access any meta keys here. Otherwise, remove the call to load_meta() and unload_meta() to make this component less expensive.\n                            $this->load_meta( $wp_query->post->ID );\n\n                            $this->html .= '\n                                <div class=\"method-postlist-item\">\n                                    <h2>' . get_the_title( $wp_query->post->ID ) . '</h2>\n                                    <p class=\"method-postlist-item-date\">' . get_the_time( 'l, F j, Y', $wp_query->post->ID ) . '</p>\n                                </div>\n                            ';\n\n                            // If you loaded this post's postmeta above, unload it below.\n                            $this->unload_meta();\n                        }\n                        wp_reset_postdata();\n                    }\n                    $this->html .= '\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    ';\n                    break;\n                // A component that displays content entered using the built-in editor...\n                case 'page-content':\n                    $this->html .= '\n                        <div id=\"method-page-content\">\n                            <div class=\"container-fluid ' . method_get_class( 'full_width_container' ) . '\">\n                                <div class=\"row justify-content-center\">\n                                    <div class=\"' . method_get_class( 'full_width_outer_col' ) . '\">\n                                        ' . $this->filter_content( get_the_content( null, false, $this->id ) ) . '\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    ';\n                    break;\n                default:\n                    break;\n            }\n        }\n        return;\n    }\n")))}d.isMDXComponent=!0}}]);