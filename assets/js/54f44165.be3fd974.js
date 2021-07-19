(self.webpackChunkmethod_docs=self.webpackChunkmethod_docs||[]).push([[152],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},s={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Custom Theme Builds",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About Method",permalink:"/docs/getting-started/about_method"},next:{title:"Development Workflow",permalink:"/docs/getting-started/template-building"}},c=[{value:"Custom Theme Builds",id:"custom-theme-builds",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing Dependencies",id:"installing-dependencies",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"custom-theme-builds"},"Custom Theme Builds"),(0,i.kt)("p",null,"First and foremost, it is recommended that you use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixelwatt/method-generator"},"Method Generator")," project to create a custom build of the Method theme that is optimized for your specific needs. This tool will create a theme build with correct prefixes, namespaces, and theme information."),(0,i.kt)("p",null,"Once you have created a custom build of the theme, or are content with using the Method theme as-is, follow the instructions below to get your copy of the theme ready for local development."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Method includes many helpful gulp tasks to help automate development. To use these tasks, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node / NPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gulpjs.com/"},"Gulp (v4.0.0+)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dart.dev/get-dart#automated-installation-and-updates"},"Dart SDK (For Dart SASS)"))),(0,i.kt)("h2",{id:"installing-dependencies"},"Installing Dependencies"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the theme folder in your terminal/command prompt/PowerShell and run the following command to install all of the project\u2019s dependencies for local development into ",(0,i.kt)("inlineCode",{parentName:"li"},"./node_modules"),":\n",(0,i.kt)("inlineCode",{parentName:"li"},"npm install --save-dev")),(0,i.kt)("li",{parentName:"ol"},"Once the installation finishes, run the following command to compile your theme's stylesheets and javascript:  ",(0,i.kt)("inlineCode",{parentName:"li"},"gulp scripts styles"),(0,i.kt)("br",{parentName:"li"}),"This will generate the theme's theme.css, theme.min.css and scripts.js files."),(0,i.kt)("li",{parentName:"ol"},"You should be good to go! For a complete list of available gulp tasks, check the ",(0,i.kt)("a",{parentName:"li",href:"/docs/other-references/gulp-tasks"},"Gulp Tasks reference"),".")))}p.isMDXComponent=!0}}]);