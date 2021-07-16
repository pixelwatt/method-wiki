(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[679],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||a;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9920:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={},s={unversionedId:"method-layout/methods/format_tags()",id:"method-layout/methods/format_tags()",isDocsHomePage:!1,title:"format_tags()",description:"public function format_tags( string $text )",source:"@site/docs/method-layout/methods/format_tags().md",sourceDirName:"method-layout/methods",slug:"/method-layout/methods/format_tags()",permalink:"/method-wiki/docs/method-layout/methods/format_tags()",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/method-layout/methods/format_tags().md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"format_headline()",permalink:"/method-wiki/docs/method-layout/methods/format_headline()"},next:{title:"get_bg_inline_style()",permalink:"/method-wiki/docs/method-layout/methods/get_bg_inline_style()"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public function format_tags( string $text )")),(0,a.kt)("p",null,"This method searches a string for any ",(0,a.kt)("a",{parentName:"p",href:"/docs/other-references/format-tags"},"format tags")," and replaces matches with the coinciding html tags. This method should be used after esc_html() has been called. In most cases, you won't use this tag directly, but will instead use a method that calls it. Check the link above for a fill list of methods that utilize this method."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"$text"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(string)")," ",(0,a.kt)("em",{parentName:"li"},"(required)")," The string to check for format tags.  ")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string)")," The method returns the passed string, with format tags replaces with html elements.  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Take the following code..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$headline = '[strong]This[/strong] Is A [br]Headline';\necho '<h1>' . $this->format_tags( esc_html( $headline ) ) . '</h1>';\n")),(0,a.kt)("p",null,"The result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h1><strong>This</strong> Is A <br>Headline</h1>\n")))}m.isMDXComponent=!0}}]);