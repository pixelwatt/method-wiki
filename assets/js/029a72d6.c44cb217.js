(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[6584],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6515:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={},p={unversionedId:"method-layout/methods/inject_bs_modal()",id:"method-layout/methods/inject_bs_modal()",isDocsHomePage:!1,title:"inject_bs_modal()",description:"public function injectbsmodal( array $args )",source:"@site/docs/method-layout/methods/inject_bs_modal().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/inject_bs_modal()",permalink:"/method-wiki/docs/method-layout/methods/inject_bs_modal()",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"init_page()",permalink:"/method-wiki/docs/method-layout/methods/init_page()"},next:{title:"load_meta()",permalink:"/method-wiki/docs/method-layout/methods/load_meta()"}},m=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Notes",id:"notes",children:[]}],s={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public function inject_bs_modal( array $args )")),(0,o.kt)("p",null,"This method builds the markup for a Bootstrap 5 modal and injects it into the class $modal property. Arguments are passed as an array."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"$args"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(array)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Parameters used to build the modal.  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'id'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," The CSS ID for the modal. Defaults to 'bsModal'",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: 'bsModal'"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'title'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," The title of the modal, displayed in the modal header. This should be included for accessibility purposes.  ",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'hide_title'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(bool)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Whether the header title should be visible. If set to ",(0,o.kt)("em",{parentName:"p"},"true"),", the ",(0,o.kt)("em",{parentName:"p"},"visually-hidden")," CSS class will be added to the h5 title tag in the modal's header.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: false"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'content'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Content to display in the body of the modal. This can be anything from a string containing a paragraph of text to one with complex grid markup.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'prefiltered'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(bool)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Whether the content being passed has allready been passed through WordPress' ",(0,o.kt)("em",{parentName:"p"},"the","_","content")," filter. If ",(0,o.kt)("em",{parentName:"p"},"true"),", passed content is used as is. If ",(0,o.kt)("em",{parentName:"p"},"false"),", passed content is processed with the 'the","_","content' filter.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: false"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'size'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," The size postfix to use for the modal, if the default size is not sufficient. Possible values: sm|lg|xl",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'scrollable'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(bool)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Whether or not content in the modal's body should be scrollable.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: false"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'hide_header'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(bool)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Whether the modal header should be visible. If set to ",(0,o.kt)("em",{parentName:"p"},"true"),", the ",(0,o.kt)("em",{parentName:"p"},"visually-hidden")," CSS class will be added to the modal header div (.modal-header).",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: false"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'prepend_header'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Any markup or content to add to the beginning of the modal's header (just after the ",(0,o.kt)("inlineCode",{parentName:"p"},".modal-header")," div)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'append_header'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Any markup or content to add to the end of the modal's header (just before the ",(0,o.kt)("inlineCode",{parentName:"p"},".modal-header"),"'s closing tag)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'prepend_body'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Any markup or content to add to the beginning of the modal's body (just after the ",(0,o.kt)("inlineCode",{parentName:"p"},".modal-body")," div)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'append_body'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(string)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," Any markup or content to add to the end of the modal's body (just before the ",(0,o.kt)("inlineCode",{parentName:"p"},".modal-body"),"'s closing tag)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: ''"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'return'"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"(bool)")," ",(0,o.kt)("em",{parentName:"p"},"(optional)")," If set to ",(0,o.kt)("em",{parentName:"p"},"true"),", the markup for the modal will be returned. If ",(0,o.kt)("em",{parentName:"p"},"false"),", the markup will be added to the layout class' $modals property.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"Default: false")))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following code..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$modal_content = \'\n    <div class="container-fluid">\n        <div class="row">\n            <div class="col-12 col-md-8">\n                <h3 aria-hidden="true">Bio -</h3>\n                <div class="content-wrap">\n                    <h4>Johhny Q Public</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend faucibus nisl, id pretium est euismod nec. Proin fermentum mauris nec nisi imperdiet convallis. Proin at suscipit sem, non dapibus justo.</p>\n                    <p>Mauris auctor massa vel nulla efficitur scelerisque. Aenean consectetur lacinia sapien, eu efficitur elit consectetur eget. Vivamus laoreet diam ut diam porta tristique. Pellentesque ornare massa at mi ornare posuere. Etiam pellentesque justo ante, ut accumsan ante eleifend tincidunt.</p>\n                </div>\n            </div>\n            <div class="col-12 col-md-4">\n                <div class="img-wrap">\n                    <img src="https://via.placeholder.com/400" width="400" height="400" alt="Placeholder Image" class="img-fluid">\n                </div>\n            </div>\n        </div>\n    </div>\n\';\n$args = array(\n    \'id\'          => \'bioModal\',\n    \'title\'       => \'Leadership Bio\',\n    \'hide_title\'  => true,\n    \'content\'     => $modal_content,\n    \'prefiltered\' => true,\n    \'size\'        => \'xl\',\n);\n$this->inject_bs_modal( $args );\n\n')),(0,o.kt)("p",null,"Would add the following HTML to the class $modal property, which is included in returned layout HTML to the frontend..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="modal fade" id="bioModal" tabindex="-1" role="dialog" aria-labelledby="bioModalLabel" aria-hidden="true">\n    <div class="modal-dialog modal-xl" role="document">\n        <div class="modal-content">\n            <div class="modal-header">\n                <h5 class="modal-title visually-hidden" id="bioModalLabel">Leadership Bio</h5>\n                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n                <div class="container-fluid">\n                    <div class="row">\n                        <div class="col-12 col-md-8">\n                        <h3 aria-hidden="true">Bio -</h3>\n                            <div class="content-wrap">\n                                <h4>Johhny Q Public</h4>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend faucibus nisl, id pretium est euismod nec. Proin fermentum mauris nec nisi imperdiet convallis. Proin at suscipit sem, non dapibus justo.</p>\n                                <p>Mauris auctor massa vel nulla efficitur scelerisque. Aenean consectetur lacinia sapien, eu efficitur elit consectetur eget. Vivamus laoreet diam ut diam porta tristique. Pellentesque ornare massa at mi ornare posuere. Etiam pellentesque justo ante, ut accumsan ante eleifend tincidunt.</p>\n                            </div>\n                        </div>\n                        <div class="col-12 col-md-4">\n                            <div class="img-wrap">\n                                <img src="https://via.placeholder.com/400" width="400" height="400" alt="Placeholder Image" class="img-fluid">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n    </div>\n</div>\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added in v1.1.4")))}d.isMDXComponent=!0}}]);