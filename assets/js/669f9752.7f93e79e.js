(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[1571],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3742:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l={unversionedId:"guides/upgrading-theme-components",id:"guides/upgrading-theme-components",isDocsHomePage:!1,title:"Upgrading Theme Components & Libraries",description:"Method is built to support the upgrading of theme components and libraries over the lifespan of a custom theme. Below are instructions for upgrading compnents and libraries, as of Method v1.3.1.",source:"@site/docs/guides/upgrading-theme-components.md",sourceDirName:"guides",slug:"/guides/upgrading-theme-components",permalink:"/method-wiki/docs/guides/upgrading-theme-components",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using The Customizer For Theme Options",permalink:"/method-wiki/docs/guides/using-the-customizer"},next:{title:"Overriding Bootstrap SASS Variables",permalink:"/method-wiki/docs/guides/bootstrap-variables"}},c=[{value:"Bootstrap",id:"bootstrap",children:[]},{value:"Method_Layout Class",id:"method_layout-class",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Method is built to support the upgrading of theme components and libraries over the lifespan of a custom theme. Below are instructions for upgrading compnents and libraries, as of Method v1.3.1."),(0,i.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,i.kt)("p",null,"To update Bootstrap..."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Head to getbootstrap.com, go to the download page for the current release, and download the source files. "),(0,i.kt)("li",{parentName:"ol"},"Once downloaded, extract the source files. "),(0,i.kt)("li",{parentName:"ol"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"inc/bootstrap/scss/")," folder with the ",(0,i.kt)("inlineCode",{parentName:"li"},"scss/")," folder from the extracted files, and replace the javascript files in ",(0,i.kt)("inlineCode",{parentName:"li"},"inc/bootstrap/js/")," with the matching files found in ",(0,i.kt)("inlineCode",{parentName:"li"},"dist/js/")," from the extracted files."),(0,i.kt)("li",{parentName:"ol"},"Finally, you'll need to recompile the theme's stylesheet and javascript files. To do this, navigate to the theme directory in the terminal and run ",(0,i.kt)("inlineCode",{parentName:"li"},"gulp scripts styles")," to recompile both. You'll need to have the local dev utilities installed to do this.")),(0,i.kt)("h2",{id:"method_layout-class"},"Method_Layout Class"),(0,i.kt)("p",null,"Assuming no local changes need to be merged in, head to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixelwatt/method/releases"},"Releases")," page and download the class-method-layout.php file for the latest release. Replace the file with the same name in the theme's /lib directory with the download file. You should be good to go."))}u.isMDXComponent=!0}}]);