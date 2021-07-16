(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[5717],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,f=l["".concat(c,".").concat(m)]||l[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},7969:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:5},c={unversionedId:"other-references/plugin-overrides",id:"other-references/plugin-overrides",isDocsHomePage:!1,title:"Plugin Overrides",description:"Method contains a number of Plugin-specific overrides that are meant to streamline the post editor screen. These include:",source:"@site/docs/other-references/plugin-overrides.md",sourceDirName:"other-references",slug:"/other-references/plugin-overrides",permalink:"/method-wiki/docs/other-references/plugin-overrides",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/other-references/plugin-overrides.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Format Tags",permalink:"/method-wiki/docs/other-references/format-tags"},next:{title:"Using The Customizer For Theme Options",permalink:"/method-wiki/docs/guides/using-the-customizer"}},u=[{value:"Ninja Forms: Add Form Button",id:"ninja-forms-add-form-button",children:[]},{value:"Ninja Forms: Append A Form Widget",id:"ninja-forms-append-a-form-widget",children:[]},{value:"Yoast SEO: Editor Metabox Priority",id:"yoast-seo-editor-metabox-priority",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Method contains a number of Plugin-specific overrides that are meant to streamline the post editor screen. These include:"),(0,i.kt)("h2",{id:"ninja-forms-add-form-button"},"Ninja Forms: Add Form Button"),(0,i.kt)("p",null,'Via the theme_remove_add_new_nf_button() function, "New Form" buttons are removed from above the TinyMCE editors (including the main editor, if using the Classis Editor plugin)'),(0,i.kt)("h2",{id:"ninja-forms-append-a-form-widget"},"Ninja Forms: Append A Form Widget"),(0,i.kt)("p",null,'The "Append A Form" sidebar widget is removed.'),(0,i.kt)("h2",{id:"yoast-seo-editor-metabox-priority"},"Yoast SEO: Editor Metabox Priority"),(0,i.kt)("p",null,"Via the theme_lower_wpseo_priority() function, the Yoast SEO metabox is given a lower priority, so that custom CMB2 metaboxes containing you custom editor options appear above it."))}p.isMDXComponent=!0}}]);