(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,i=r("q1tI"),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var i,a=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),c=n(r("pVnL")),u=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=d(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,_=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),u.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function T(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),_.set(e,t)),function(){r.unobserve(e),_.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+u+o+s+r+n+t+a+i+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(I,(0,c.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,i(n),s):s})),I=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:n,src:i},h,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));I.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,_=e.itemProp,T=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,c.default)({opacity:C?1:0,transition:k?"opacity "+b+"ms":"none"},s),j="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},x=(0,c.default)({opacity:this.state.imgLoaded?0:1},k&&P,{},s,{},f),N={title:t,alt:this.state.isVisible?"":r,style:x,className:p,itemProp:_};if(m){var M=m,q=h(m);return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),j&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&P)}),q.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:N,imageVariants:M,generateSources:E}),q.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:N,imageVariants:M,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,w(M),u.default.createElement(I,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,c.default)({alt:r,title:t,loading:T},q,{imageVariants:M}))}}))}if(g){var H=g,F=h(g),V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},a);return"inherit"===a.display&&delete V.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},j&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:j,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},k&&P)}),F.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:N,imageVariants:H,generateSources:E}),F.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:N,imageVariants:H,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,w(H),u.default.createElement(I,{alt:r,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,c.default)({alt:r,title:t,loading:T},F,{imageVariants:H}))}}))}return null},t}(u.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),j=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});k.propTypes={resolutions:R,sizes:j,fixed:l.default.oneOfType([R,l.default.arrayOf(R)]),fluid:l.default.oneOfType([j,l.default.arrayOf(j)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var P=k;t.default=P},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),a=function(){return i.a.createElement("footer",null,i.a.createElement("h4",null,"ADAM HELDRING"),i.a.createElement("p",null,"hello@adamheldring.com"),i.a.createElement("p",null,"+46 708-841828"))};r("mSCr"),t.a=function(e){var t=e.children;return i.a.createElement("div",{className:"outerFullPageWrapper"},i.a.createElement("main",null,i.a.createElement("pre",{className:"GREETINGS_FRIEND! inspector-only"},"Hey, thanks for having a look at this code. Shoot me an e-mail and we'll talk! Cheers,","       \n    ___    ____  ___    __  ___   __  __________    ____  ____  _____   ________\n   /   |  / __ \\/   |  /  |/  /  / / / / ____/ /   / __ \\/ __ \\/  _/ | / / ____/\n  / /| | / / / / /| | / /|_/ /  / /_/ / __/ / /   / / / / /_/ // //  |/ / / __\n / ___ |/ /_/ / ___ |/ /  / /  / __  / /___/ /___/ /_/ / _, _// // /|  / /_/ /\n/_/  |_/_____/_/  |_/_/  /_/  /_/ /_/_____/_____/_____/_/ |_/___/_/ |_/\\____/\n\n"),t),i.a.createElement(a,null))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Portfolio – Adam Heldring","description":"Adam Heldring Portfolio – Resume with code samples","author":"Adam Heldring"}}}}')},EK0E:function(e,t,r){"use strict";var n,i=r("dyZX"),a=r("CkkT")(0),o=r("KroJ"),s=r("Z6vF"),c=r("czNK"),u=r("ZD67"),l=r("0/R4"),d=r("s5qY"),f=r("s5qY"),p=!i.ActiveXObject&&"ActiveXObject"in i,h=s.getWeak,m=Object.isExtensible,g=u.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(l(e)){var t=h(e);return!0===t?g(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(d(this,"WeakMap"),e,t)}},v=e.exports=r("4LiD")("WeakMap",y,b,u,!0,!0);f&&p&&(c((n=u.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,a(["delete","has","get","set"],(function(e){var t=v.prototype,r=t[e];o(t,e,(function(t,i){if(l(t)&&!m(t)){this._f||(this._f=new n);var a=this._f[e](t,i);return"set"==e?this:a}return r.call(this,t,i)}))})))},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},INYr:function(e,t,r){"use strict";var n=r("XKFU"),i=r("CkkT")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(a)},OGtf:function(e,t,r){var n=r("XKFU"),i=r("eeVq"),a=r("vhPU"),o=/"/g,s=function(e,t,r,n){var i=String(a(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},Oyvg:function(e,t,r){var n=r("dyZX"),i=r("Xbzi"),a=r("hswa").f,o=r("kJMx").f,s=r("quPj"),c=r("C/va"),u=n.RegExp,l=u,d=u.prototype,f=/a/g,p=/a/g,h=new u(f)!==f;if(r("nh4g")&&(!h||r("eeVq")((function(){return p[r("K0xU")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(e,t){var r=this instanceof u,n=s(e),a=void 0===t;return!r&&n&&e.constructor===u&&a?e:i(h?new l(n&&!a?e.source:e,t):l((n=e instanceof u)?e.source:e,n&&a?c.call(e):t),r?this:d,u)};for(var m=function(e){e in u||a(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=o(l),y=0;g.length>y;)m(g[y++]);d.constructor=u,u.prototype=d,r("KroJ")(n,"RegExp",u)}r("elZq")("RegExp")},ZD67:function(e,t,r){"use strict";var n=r("3Lyj"),i=r("Z6vF").getWeak,a=r("y3w9"),o=r("0/R4"),s=r("9gX7"),c=r("SlkY"),u=r("CkkT"),l=r("aagx"),d=r("s5qY"),f=u(5),p=u(6),h=0,m=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,a){var u=e((function(e,n){s(e,u,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&c(n,r,e[a],e)}));return n(u.prototype,{delete:function(e){if(!o(e))return!1;var r=i(e);return!0===r?m(d(this,t)).delete(e):r&&l(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=i(e);return!0===r?m(d(this,t)).has(e):r&&l(r,this._i)}}),u},def:function(e,t,r){var n=i(a(t),!0);return!0===n?m(e).set(t,r):n[e._i]=r,e},ufstore:m}},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,c,u,l=n(t),d=n(r);if(l&&d){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,m=r instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==r.toString();var g=i(t);if((c=g.length)!==i(r).length)return!1;for(s=c;0!=s--;)if(!a.call(r,g[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=c;0!=s--;)if(!("_owner"===(u=g[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},h7Nl:function(e,t,r){var n=Date.prototype,i=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=a.call(this);return e==e?i.call(this):"Invalid Date"}))},mSCr:function(e,t,r){},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,i,a,o,s=r("17x9"),c=r.n(s),u=r("8+s/"),l=r.n(u),d=r("bmMU"),f=r.n(d),p=r("q1tI"),h=r.n(p),m=r("MgzW"),g=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",_={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(_).map((function(e){return _[e]})),"charset"),T="cssText",S="href",E="http-equiv",O="innerHTML",C="itemprop",A="name",L="property",I="rel",k="src",R="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",x="defer",N="encodeSpecialCharacters",M="onChangeClientState",q="titleTemplate",H=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),F=[_.NOSCRIPT,_.SCRIPT,_.STYLE],V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},B=function(e){var t=Q(e,_.TITLE),r=Q(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,P);return t||n||void 0},G=function(e){return Q(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[_.BASE]})).map((function(e){return e[_.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],c=s.toLowerCase();-1===t.indexOf(c)||r===I&&"canonical"===e[r].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==T&&s!==C||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],c=g()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ce(_.BODY,n),ce(_.HTML,i),se(d,f);var p={baseTag:ue(_.BASE,r),linkTags:ue(_.LINK,a),metaTags:ue(_.META,o),noscriptTags:ue(_.NOSCRIPT,s),scriptTags:ue(_.SCRIPT,u),styleTags:ue(_.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(_.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=a.indexOf(c);-1!==l&&a.splice(l,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(_.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case _.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,i=de(r,n),[h.a.createElement(_.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=le(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Y(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),h.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(_.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,i,n),link:fe(_.LINK,a,n),meta:fe(_.META,o,n),noscript:fe(_.NOSCRIPT,s,n),script:fe(_.SCRIPT,c,n),style:fe(_.STYLE,u,n),title:fe(_.TITLE,{title:d,titleAttributes:f},n)}},he=l()((function(e){return{baseTag:X([S,R],e),bodyAttributes:J(y,e),defer:Q(e,x),encode:Q(e,N),htmlAttributes:J(b,e),linkTags:Z(_.LINK,[I,S],e),metaTags:Z(_.META,[A,w,E,L,C],e),noscriptTags:Z(_.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:Z(_.SCRIPT,[k,O],e),styleTags:Z(_.STYLE,[T],e),title:B(e),titleAttributes:J(v,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),me=(i=he,o=a=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.SCRIPT:case _.NOSCRIPT:return{innerHTML:t};case _.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case _.TITLE:return W({},i,((t={})[n.type]=o,t.titleAttributes=W({},a),t));case _.BODY:return W({},i,{bodyAttributes:W({},a)});case _.HTML:return W({},i,{htmlAttributes:W({},a)})}return W({},i,((r={})[n.type]=W({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(K(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case _.LINK:case _.META:case _.NOSCRIPT:case _.SCRIPT:case _.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=K(e,["children"]),n=W({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(i,n)},z(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(h.a.Component),a.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),i=r("q1tI"),a=r.n(i),o=r("qhky");function s(e){var t=e.description,r=e.lang,i=e.meta,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=aec5ca1966ca001a6f9aa5c2b825d41705876cf9-cf53838d4b4028ff2bee.js.map