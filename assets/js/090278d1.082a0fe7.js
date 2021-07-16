(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[4482],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s={unversionedId:"other-references/helper-functions",id:"other-references/helper-functions",isDocsHomePage:!1,title:"Helper Functions",description:"Overview",source:"@site/docs/other-references/helper-functions.md",sourceDirName:"other-references",slug:"/other-references/helper-functions",permalink:"/method-wiki/docs/other-references/helper-functions",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Third Party Libraries",permalink:"/method-wiki/docs/other-references/included-libraries"},next:{title:"Gulp Tasks",permalink:"/method-wiki/docs/other-references/gulp-tasks"}},u=[{value:"Overview",id:"overview",children:[]},{value:"method_get_class( $class )",id:"method_get_class-class-",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}]},{value:"method_filter_content( $content )",id:"method_filter_content-content-",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Example",id:"example-1",children:[]},{value:"Notes",id:"notes",children:[]}]},{value:"method_check_key( $key )",id:"method_check_key-key-",children:[{value:"Arguments",id:"arguments-2",children:[]},{value:"Example",id:"example-2",children:[]},{value:"Notes",id:"notes-1",children:[]}]},{value:"method_get_post_array( $type, $none = &#39;&#39; )",id:"method_get_post_array-type-none---",children:[{value:"Arguments",id:"arguments-3",children:[]},{value:"Example",id:"example-3",children:[]},{value:"Notes",id:"notes-2",children:[]}]},{value:"method_get_term_array( $tax, $none = &#39;&#39; )",id:"method_get_term_array-tax-none---",children:[{value:"Arguments",id:"arguments-4",children:[]},{value:"Example",id:"example-4",children:[]},{value:"Notes",id:"notes-3",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Method contains a number of helper functions, which are detailed below. If using a custom build of the Method theme, the method prefix will instead be whatever prefix you defined in Method Builder's globals file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jump to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#method_get_class-class-"},"method_get_class()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#method_filter_content-content-"},"method_filter_content()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#method_check_key-key-"},"method_check_key()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#method_get_post_array-type-none---"},"method_get_post_array()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#method_get_term_array-tax-none---"},"method_get_term_array()"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"method_get_class-class-"},"method_get_class( $class )"),(0,o.kt)("p",null,"This function retrieves a string containing one of multiple CSS classes, if one is found matching the $class string passed to the function. You can add new switch cases to this function to make it better work with your theme. This can be particularly useful for classes that need to be uniform across all site layouts, as it allows you to quickly make any needed changes without needing to do repetitive updates."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$class"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," The short name for the string containing of class(es) that you'd like to retrieve.",(0,o.kt)("br",{parentName:"li"}),"")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"The following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"echo '\n    <div id=\"front-join-inner\">\n        <div class=\"container-fluid ' . method_get_class( 'full_width_container' ) . '\">\n            <div class=\"row justify-content-center\">\n                <div class=\"' . method_get_class( 'full_width_outer_col' ) . '\">\n                    Content inside a standard content wrapper.\n                </div>\n            </div>\n        </div>\n    </div>\n';\n")),(0,o.kt)("p",null,"Would produce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'    <div id="front-join-inner">\n        <div class="container-fluid full-width-container">\n            <div class="row justify-content-center">\n                <div class="col-12 col-sm-11">\n                    Content inside a standard content wrapper.\n                </div>\n            </div>\n        </div>\n    </div>\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"method_filter_content-content-"},"method_filter_content( $content )"),(0,o.kt)("p",null,"This function applys WordPress' ",(0,o.kt)("em",{parentName:"p"},"the","_","content")," filter to a passed string (if the passed string is not empty)."),(0,o.kt)("h3",{id:"arguments-1"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$content"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," A string of unfiltered content, such as content entered through the visual editor.",(0,o.kt)("br",{parentName:"li"}),"")),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"The following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"echo method_filter_content( 'This is the way it\u2019s going down, You\\'re the prince of your town...' )\n")),(0,o.kt)("p",null,"Would produce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<p>This is the way it\u2019s going down, You're the prince of your town...</p>\n")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,"This function is identical to the filter_content() method included in the Method_Layout class. It is included as a function for use outside of the class as needed (such as functions for AJAX responses)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"method_check_key-key-"},"method_check_key( $key )"),(0,o.kt)("p",null,"This function checks to see if a passed value is set and is not empty. If both conditions are met, the function returns ",(0,o.kt)("em",{parentName:"p"},"true"),". Otherwise, the function returns ",(0,o.kt)("em",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"arguments-2"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$key"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," The variable to evaluate.",(0,o.kt)("br",{parentName:"li"}),"")),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("p",null,"Take the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$my_array = array(\n    'title' => 'My Awesome Title',\n    'content' => '',\n);\n$check1 = method_check_key( $my_array['title'] );\n$check2 = method_check_key( $my_array['content'] );\n$check3 = method_check_key( $my_array['image_id'] );\n")),(0,o.kt)("p",null,"In the example above:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$check1 would equal ",(0,o.kt)("em",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"$check2 would equal ",(0,o.kt)("em",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"$check3 would equal ",(0,o.kt)("em",{parentName:"li"},"false"))),(0,o.kt)("h3",{id:"notes-1"},"Notes"),(0,o.kt)("p",null,"This function is identical to the check_key() method included in the Method_Layout class. It is included as a function for use outside of the class as needed (such as functions for AJAX responses)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"method_get_post_array-type-none---"},"method_get_post_array( $type, $none = '' )"),(0,o.kt)("p",null,"This function returns an array of post IDs ($key) and post titles ($value) belonging to the passed post type, if any exist and are public, and an optional ",(0,o.kt)("em",{parentName:"p"},"none")," value. This function is primarily used to populate options using the CMB2 select field."),(0,o.kt)("h3",{id:"arguments-3"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$type"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," The post type that you would like to retrieve post IDs and titles for.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$none"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," If you would like to include a default ",(0,o.kt)("em",{parentName:"li"},"None")," value as the first item in the array (with an empty $key), provide a string to use.",(0,o.kt)("br",{parentName:"li"}),"")),(0,o.kt)("h3",{id:"example-3"},"Example"),(0,o.kt)("p",null,"Take the follow code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$options = method_get_post_array( 'page', 'Do Not Link' );\necho '<pre>' . print_r( $options, true ) . '</pre>';\n")),(0,o.kt)("p",null,"This would produce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"Array\n(\n    [0] => Do Not Link\n    [51] => Our Team\n    [43] => Get In Touch\n    [40] => News\n    [37] => Giving Back\n    [34] => Jobs\n    [29] => Training\n    [22] => About Us\n    [5] => Welcome\n)\n")),(0,o.kt)("h3",{id:"notes-2"},"Notes"),(0,o.kt)("p",null,"The ability to provide a custom value for ",(0,o.kt)("em",{parentName:"p"},"None")," was added in v1.2.0."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"method_get_term_array-tax-none---"},"method_get_term_array( $tax, $none = '' )"),(0,o.kt)("p",null,"This function returns an array of term IDs ($key) and term names ($value) belonging to the passed taxonomy, if any exist and are public, and an optional ",(0,o.kt)("em",{parentName:"p"},"none")," value. Empty taxonomies are included. As with method_get_post_array(), this function is primarily used to populate options using the CMB2 select field."),(0,o.kt)("h3",{id:"arguments-4"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$tax"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," The taxonomy that you would like to retrieve term IDs and term names for.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$none"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"(string)")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," If you would like to include a default ",(0,o.kt)("em",{parentName:"li"},"None")," value as the first item in the array (with an empty $key), provide a string to use.",(0,o.kt)("br",{parentName:"li"}),"")),(0,o.kt)("h3",{id:"example-4"},"Example"),(0,o.kt)("p",null,"Take the follow code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$options = method_get_term_array( 'category', 'Do Not Filter' );\necho '<pre>' . print_r( $options, true ) . '</pre>';\n")),(0,o.kt)("p",null,"This would produce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"Array\n(\n    [0] => Do Not Filter\n    [12] => Employee Spotlight\n    [18] => Company News\n    [22] => Case Studies\n)\n")),(0,o.kt)("h3",{id:"notes-3"},"Notes"),(0,o.kt)("p",null,"The ability to provide a custom value for ",(0,o.kt)("em",{parentName:"p"},"None")," was added in v1.2.0."))}c.isMDXComponent=!0}}]);