(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(t,e,n){"use strict";n.r(e);n(53),n(16),n(11),n(15),n(6),n(21);var r=n(0),o=n.n(r),a=n(243),i=n(249),c=(n(28),n(36),n(277)),l=n(278),p=n(239),u=n(292),d=n(290),s=p.default.div.withConfig({displayName:"ContentPage__Container",componentId:"sc-6pnm9g-0"})(['width:100vw;height:100vh;background:center / cover no-repeat url("','");position:relative;'],function(t){return t.src}),m=p.default.div.withConfig({displayName:"ContentPage__Content",componentId:"sc-6pnm9g-1"})(["position:absolute;top:0;right:60px;width:40%;min-width:400px;background-color:",";color:",";padding:2rem;line-height:1.25rem;@media (max-width:768px){position:unset;right:unset;min-width:unset;width:90%;}"],function(t){return t.theme.colors.blackTranslucent},function(t){return t.theme.colors.white}),f=p.default.div.withConfig({displayName:"ContentPage__TopLeft",componentId:"sc-6pnm9g-2"})(["position:absolute;left:20px;top:20px;width:400px;height:200px;z-index:10;display:flex;@media (max-width:768px){width:100%;justify-content:center;position:unset;left:unset;top:unset;min-width:unset;width:90%;}"]),h=p.default.div.withConfig({displayName:"ContentPage__LogoContainer",componentId:"sc-6pnm9g-3"})(["background-color:",";display:flex;justify-content:center;align-items:center;padding:20px;border:2px solid ",";flex-direction:column;"],function(t){return t.theme.colors.lightBlue},function(t){return t.theme.colors.darkBlue}),g=Object(p.default)(d.a).withConfig({displayName:"ContentPage__BackButton",componentId:"sc-6pnm9g-4"})(["width:80%;margin-top:20px;margin-bottom:20px;"]);function y(t){var e=t.imageSrc,n=t.children;t.logoArea;return o.a.createElement(s,{src:e},o.a.createElement(f,null,o.a.createElement(h,null,o.a.createElement("a",{href:"/"},o.a.createElement(u.a,null)),o.a.createElement(g,{onClick:function(){return window.history.back()}},"Go back"))),o.a.createElement(m,null,n))}n(270),n(271);var b=n(269),w=n(253),v=(n(272),n(273)),x=n(252),_=n(254),O=n(244),k=(n(289),n(274));function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(n,!0).forEach(function(e){j(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){var e=t.post.rawBody.split("---");return e.length>0?e[e.length-1]:""}var I=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={headerOffset:0},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){},a.render=function(){var t=this,e=this.props,n=e.pageContext,r=n.title,a=n.backgroundImage,i=e.data,p={FulcrumImageVideo:x.a,FulcrumTextAudio:x.b,AboutTheAuthor:_.a,MapNavigation:O.a},u=C({},this.props.scope,{},p),d=C({},C({},this.props,{},{scope:u})),s=function(){try{return!!window.MSInputMethodContext&&!!document.documentMode}catch(t){return!1}}();return o.a.createElement(v.a,null,o.a.createElement(b.a,Object.assign({ref:function(e){return t.siteContainer=e}},this.props,{skipLayout:!0}),o.a.createElement(l.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,r," | Explore Gabii")),o.a.createElement(k.a,null,o.a.createElement("h1",null,r)),function(t){return t.post.wordCount.words||""!=P(t)}(i)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{imageSrc:a},o.a.createElement("h1",null,r),s?o.a.createElement(w.a,null,P(i)):o.a.createElement(c.a,d,i.post.code.body)))))},r}(r.Component),B=Object(a.withMDXScope)(I);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach(function(e){S(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"pageQuery",function(){return D});var D="2048537047";e.default=function(t){var e=t.children,n=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["children"]);return o.a.createElement(a.MDXScopeProvider,{__mdxScope:L({},i.a)},o.a.createElement(B,n,e))}},249:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(236);e.a={React:o.a,MDXTag:a.MDXTag}},252:function(t,e,n){"use strict";var r=n(0),o=n.n(r);var a=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.blockType,n=t.handle,r=t.title;return o.a.createElement("iframe",{"data-block-type":e,src:"https://www.fulcrum.org/embed?hdl="+n,title:escape(r),style:{display:"block",overflow:"hidden",borderWidth:0,width:"98%",maxWidth:"98%",maxHeight:400,margin:"auto"}})},r}(r.Component);var i=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.blockType,n=t.handle,r=t.title,a=t.width;return o.a.createElement("div",{"data-block-type":e,style:{width:"auto",pageBreakInside:"avoid",maxWidth:a,margin:"auto"}},o.a.createElement("div",{style:{overflow:"hidden",paddingBottom:"56.25%",position:"relative",height:0}},o.a.createElement("iframe",{src:"https://www.fulcrum.org/embed?hdl="+n,title:""+escape(r),style:{overflow:"hidden",borderWidth:0,left:0,top:0,width:"100%",height:"100%",position:"absolute"}})))},r}(r.Component);n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i})},253:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(284),i=n.n(a),c=n(252),l=n(254),p=n(244),u=i()({createElement:o.a.createElement,components:{FulcrumImageVideo:c.a,FulcrumTextAudio:c.b,AboutTheAuthor:l.a,MapNavigation:p.a}}),d=function(t){var e=t.children;return e&&u(e).tree};n.d(e,"a",function(){return d})},254:function(t,e,n){"use strict";n(43);var r=n(0),o=n.n(r),a=n(253),i=n(246);var c=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.headshot,n=t.name,r=t.bio,c=t.chapterDescription,l=t.interviewDescription;return o.a.createElement("div",{style:{paddingBottom:30}},o.a.createElement("img",{style:{float:"left",paddingRight:10,width:200},src:Object(i.b)(e),alt:Object(i.b)(n)}),o.a.createElement(a.a,null,Object(i.b)(r)),o.a.createElement(a.a,null,Object(i.b)(c)),o.a.createElement(a.a,null,Object(i.b)(l)))},r}(r.Component);n.d(e,"a",function(){return c})},269:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(239),i=(a.default.div.withConfig({displayName:"Background",componentId:"sc-1qwcq2r-0"})(["width:100%;height:100%;background-color:",";"],function(t){return(t.theme.colors||{}).white||"#FFFFFF"}),n(242)),c=n(241),l=n(240);var p=a.default.div.withConfig({displayName:"Breadcrumbs__BreadcrumbWrapper",componentId:"sc-3dyv7-0"})(["margin:0.75rem 0 0 32px;display:flex;flex-direction:row;color:"," a,a:visited{margin:0 0.75rem;color:",';opacity:0.8;}a:first-child{margin-right:0.75rem;margin-left:0;}& span{display:inline-block;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}span:not(:last-child)::after{content:">";margin-right:0.75rem;opacity:0.6;}@media (max-width:',"px){flex-direction:column !important;& span{max-width:300px;white-space:unset;}}"],function(t){return t.theme.colors.darkBlue},c.a.white,l.f),u=a.default.span.withConfig({displayName:"Breadcrumbs__LinkWrapper",componentId:"sc-3dyv7-1"})([""]),d=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.items;return t&&t.length>0?o.a.createElement(p,null,t.map(function(e,n){return n!==t.length-1?o.a.createElement(u,{key:e.slug},o.a.createElement(i.a,{to:e.slug},e.title)):o.a.createElement(u,{key:e.slug},e.title)})):null},r}(r.Component),s=n(251),m=n(258),f=n(275);n(53),n(16),n(11),n(15),n(6),n(21);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var r=t.reduce(function(t,n){var r,o=n.node;if(!o.frontmatter)return t;var a=e?g({},o.fields):{};return g({},t,((r={})[o.frontmatter.key]=g({},o.frontmatter,{},a),r))},{});return n?function t(e,n){void 0===n&&(n=null);var r=Object.keys(e).reduce(function(t,r){return e[r].parentKey===n&&t.push(e[r]),t},[]);return r?(r.forEach(function(n){var r=t(e,n.key);r&&r!==[]&&(n.children=r)}),r):null}(r):r},w=n(262);a.default.div.withConfig({displayName:"SiteContainer__HeadingWrapper",componentId:"sc-1enlc16-0"})(["background:linear-gradient(rgba(0,0,0,1.5) 50%,rgba(0,0,0,0));padding:1rem;display:flex;flex-direction:column;width:calc(100vw - 2rem);position:fixed;top:0;z-index:1;overflow:hidden;a,a:visited{color:",";}@media (max-width:","px){position:initial;background:unset;background:",";border-bottom:2px solid ",";}"],c.a.white,l.f,c.a.contentBackground,c.a.relatedBackground),a.default.div.withConfig({displayName:"SiteContainer__ContentArea",componentId:"sc-1enlc16-1"})(["display:flex;flex-grow:1;flex-direction:column;height:100%;position:relative;z-index:0;padding-bottom:","px;max-width:95%;@media (max-width:","px){margin-top:0;}"],f.FOOTER_HEIGHT,l.f),a.default.div.withConfig({displayName:"SiteContainer__HeadingRow",componentId:"sc-1enlc16-2"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;"]);var v=function(t){var e,n;function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={showFlyout:!1,headingHeight:0},e.shouldShowBreadcrumbs=function(){return e.props.showBreadcrumbs&&e.props.data&&e.props.data.allMdx&&e.props.data.allMdx.edges},e.buildLinkTree=function(){var t=e.props.data.allMdx.edges;return b(t,!0,!0)},e.buildBreadcrumbLinks=function(){if(e.shouldShowBreadcrumbs()){for(var t=e.props,n=t.pageContext.key,r=t.data.allMdx.edges,o=b(r,!0),a=n,i=[];a;){var c=o[a]||{};c&&c.title&&c.slug&&i.push({title:c.title,slug:c.slug}),a=c.parentKey}return i.push({title:"home",slug:"/"}),i.reverse()}},e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){this.buildLinkTree()},a.render=function(){var t=this;this.props.contentStyles,this.buildLinkTree();return this.props.skipLayout?o.a.createElement(w.a,{theme:w.b},this.props.children):o.a.createElement(w.a,{theme:w.b},o.a.createElement(m.e,{onClose:function(){t.setState({showFlyout:!1}),document.body.classList.remove("modalOpen")}},o.a.createElement(s.a,null,o.a.createElement(s.a.Content,{my:24},o.a.createElement(d,{items:this.buildBreadcrumbLinks()}),this.props.children))))},r}(r.Component);v.defaultProps={showBreadcrumbs:!0,breadcrumbLinks:[]},n.d(e,"a",function(){return v})},270:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(239),i=(n(241),n(240));var c=a.default.main.withConfig({displayName:"ContentArea__ContentWrapper",componentId:"y7q6wg-0"})(["padding:0 2rem;align-self:center;max-width:95%;& h2{font-size:2rem;font-weight:800;margin-bottom:0.75rem;}& p,li{margin:1.5rem 0.75rem;}@media (max-width:","px){max-width:95vw;width:95vw;padding:0 0.5rem;margin:0 0.5rem 0 0.5rem;}"],i.f),l=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.children,n=t.style;return o.a.createElement(c,{style:n},e)},r}(o.a.Component);n.d(e,"a",function(){return l})},271:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(242),i=n(239),c=(n(241),n(240)),l=n(276);var p=Object(i.default)(a.a).withConfig({displayName:"SecondaryNavigation__Link",componentId:"sc-19nitkx-0"})(["color:",";font-size:1.3rem;text-decoration:none;position:flex;"],function(t){return t.theme.colors.darkBlue}),u=i.default.ul.withConfig({displayName:"SecondaryNavigation__ListContainer",componentId:"sc-19nitkx-1"})(["list-style-type:none;min-height:500px;@media (max-width:","px){margin-top:6rem;padding:0;}"],c.f),d=i.default.li.withConfig({displayName:"SecondaryNavigation__ListItem",componentId:"sc-19nitkx-2"})(["display:block;float:left;clear:both;margin-bottom:1rem;@media (max-width:","px){margin-left:0.5rem;margin-right:0.5rem;}"],c.f);var s=function(t){var e,n;function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={paddingHeight:90},e.mounted=!1,e.getPaddingAmount=function(){var t=e.props.linkProperties,n=e.container.clientHeight/t.length;e.setState({paddingHeight:n>90?90:n})},e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){this.getPaddingAmount(),window.addEventListener("resize",this.getPaddingAmount)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.getPaddingAmount)},a.render=function(){var t=this,e=this.props.linkProperties,n=this.state.paddingHeight;return e?o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{mx:"2rem",level:"2",color:"darkBlue"},"Continue to:"),o.a.createElement(u,{ref:function(e){return t.container=e}},e.map(function(t,e){return o.a.createElement(d,{key:t.href,left:(r=35,Math.floor(Math.random()*Math.floor(r))),top:e*n},o.a.createElement(p,{to:t.href},t.title));var r}))):null},r}(r.Component);n.d(e,"a",function(){return s})},272:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(239),i=(n(241),n(240));var c=a.default.div.withConfig({displayName:"RelatedContent__ContentWrapper",componentId:"z6antt-0"})(["color:",";padding:1.5rem;max-height:80vh;margin:1rem 0 6rem 0;width:85%;align-self:center;@media (max-width:","px){padding:1rem;max-width:95vw;width:95vw;& h3,ul{padding:0 1rem;}}"],function(t){return t.theme.colors.darkBlue},i.f),l=a.default.a.withConfig({displayName:"RelatedContent__Link",componentId:"z6antt-1"})(["color:",";"],function(t){return t.theme.colors.darkBlue}),p=a.default.h3.withConfig({displayName:"RelatedContent__Heading",componentId:"z6antt-2"})(["color:",";margin:0;font-size:1.5rem;font-weight:800;"],function(t){return t.theme.colors.darkBlue}),u=a.default.ul.withConfig({displayName:"RelatedContent__ListContainer",componentId:"z6antt-3"})(["padding:0;margin-left:0.75rem;list-style-type:none;"]),d=a.default.li.withConfig({displayName:"RelatedContent__ListItem",componentId:"z6antt-4"})(["margin:1.5rem 0;"]),s=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.relatedLinks;return o.a.createElement(c,null,o.a.createElement(p,null,"Related Content"),o.a.createElement(u,null,t.map(function(t){return o.a.createElement(d,{key:t.href},o.a.createElement(l,{href:t.href},t.title))})))},r}(o.a.Component);n.d(e,"a",function(){return s})},273:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(288),i=n.n(a),c=n(240),l={mobile:c.e,mobileLandscape:c.d,tablet:c.g,tabletLandscape:c.f,desktop:c.c,desktopLarge:c.a,desktopWide:c.b},p=function(t){var e=t.children;return o.a.createElement(i.a,{breakpoints:l},e)};n.d(e,"a",function(){return p})},274:function(t,e,n){"use strict";var r=n(239),o="\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  clip: rect(1px,1px,1px,1px) !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  margin: 0 !important; \n",a=r.default.span.withConfig({displayName:"VisuallyHidden",componentId:"ksfyyu-1"})(["",";"],o);n.d(e,"a",function(){return a})}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-da-5-ac-0-cb-463-b-37-c-4-f-2-ca-35-bd-6087-c-53-a-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-fb70a7db25c69aa0cdf2.js.map