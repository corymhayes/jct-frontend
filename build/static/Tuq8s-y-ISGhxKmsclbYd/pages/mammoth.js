(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7W2i":function(t,e,n){var o=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var o=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},cTJO:function(t,e,n){"use strict";var o=n("lwsE"),r=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),c=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}var l=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var f,p=u(n("q1tI")),h=n("QmWs"),d=n("g/15"),m=l(n("nOHt")),v=n("elyg");function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new Map,w=window.IntersectionObserver,b={};function _(){return f||(w?f=new w((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){i(n,t);var e=s(n);function n(t){var r;return o(this,n),(r=e.call(this,t)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(t){var e=null,n=null,o=null;return function(r,i){if(o&&r===e&&i===n)return o;var a=t(r,i);return e=r,n=i,o=a,a}}((function(t,e){return{href:(0,v.addBasePath)(y(t)),as:e?(0,v.addBasePath)(y(e)):e}})),r.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,o=e.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),a=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),c=c?(0,h.resolve)(s,c):a,t.preventDefault();var l=r.props.scroll;null==l&&(l=c.indexOf("#")<0),m.default[r.props.replace?"replace":"push"](a,c,{shallow:r.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==t.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,o=e.as,r=(0,h.resolve)(t,n);return[r,o?(0,h.resolve)(t,o):r]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,r=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=r||o),p.default.cloneElement(i,a)}}]),n}(p.Component);e.default=k},e3uM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mammoth",function(){return n("ligI")}])},ligI:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return d}));var o=n("q1tI"),r=n.n(o),i=n("vOnD"),a=n("YFqc"),c=n.n(a),s=r.a.createElement,l=i.b.div.withConfig({displayName:"mammoth__Container",componentId:"wulb8y-0"})(["display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;"]),u=i.b.div.withConfig({displayName:"mammoth__LogoSide",componentId:"wulb8y-1"})(["display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;"]),f=i.b.div.withConfig({displayName:"mammoth__LoginSide",componentId:"wulb8y-2"})(["display:flex;justify-content:center;align-items:center;width:100%;flex-flow:column;"]),p=i.b.div.withConfig({displayName:"mammoth__SiteHeader",componentId:"wulb8y-3"})(["height:4rem;width:10rem;background-color:#292929;color:#eee;font-size:2.4rem;font-weight:bold;display:flex;align-items:center;justify-content:center;margin-top:10rem;"]),h=i.b.ul.withConfig({displayName:"mammoth__SiteList",componentId:"wulb8y-4"})(["list-style:none;margin-top:2rem;li,a{font-size:1.8rem;text-align:center;height:5rem;width:20rem;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#292929;}a:hover,li:hover{background-color:#ff7e26;color:#fff;}"]),d=!0;e.default=function(t){var e=t.data;return s(l,null,s(u,null,s("img",{src:"../static/mammoth-logo.png"})),s(f,null,s(p,null,"Sites"),s(h,null,e.map((function(t,e){return s("li",{key:e},s(c.a,{href:"./mammoth/".concat(t.BATTERY.toLowerCase())},s("a",null,t.BATTERY)))})))))}}},[["e3uM",0,1,2,3]]]);