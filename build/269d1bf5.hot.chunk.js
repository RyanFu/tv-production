webpackJsonp([2],{758:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(774);e.default=a.a},760:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(770),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=o.default},761:function(t,e,r){"use strict";var a=r(0),o=r.n(a),i=r(760),n=r.n(i),l={container:{position:"relative",height:"16rem",width:"100%"},refresh:{display:"inline-block",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},s=function(){return o.a.createElement("div",{style:l.container},o.a.createElement(n.a,{size:60,left:0,top:0,status:"loading",style:l.refresh}))};e.a=s},762:function(t,e,r){"use strict";var a=r(761);e.a=a.a},763:function(t,e,r){t.exports={default:r(766),__esModule:!0}},764:function(t,e,r){t.exports={default:r(767),__esModule:!0}},765:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(764),i=a(o),n=r(763),l=a(n);e.default=function(){function t(t,e){var r=[],a=!0,o=!1,i=void 0;try{for(var n,s=(0,l.default)(t);!(a=(n=s.next()).done)&&(r.push(n.value),!e||r.length!==e);a=!0);}catch(t){o=!0,i=t}finally{try{!a&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},766:function(t,e,r){r(264),r(157),t.exports=r(768)},767:function(t,e,r){r(264),r(157),t.exports=r(769)},768:function(t,e,r){var a=r(49),o=r(266);t.exports=r(26).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}},769:function(t,e,r){var a=r(265),o=r(29)("iterator"),i=r(70);t.exports=r(26).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(a(e))}},770:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=.1*t.size;return{root:{position:"absolute",zIndex:2,width:t.size,height:t.size,padding:e,top:-1e4,left:-1e4,transform:"translate("+(1e4+t.left)+"px, "+(1e4+t.top)+"px)",opacity:"hide"===t.status?0:1,transition:"hide"===t.status?T.default.create("all",".3s","ease-out"):"none"}}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(15),n=a(i),l=r(765),s=a(l),c=r(1),u=a(c),f=r(3),p=a(f),_=r(2),d=a(_),h=r(4),m=a(h),g=r(6),y=a(g),v=r(5),x=a(v),w=r(10),k=a(w),b=r(0),E=a(b),C=r(80),S=a(C),H=r(16),T=a(H),z=r(100),W=a(z),P=function(t){function e(){return(0,d.default)(this,e),(0,y.default)(this,(e.__proto__||(0,p.default)(e)).apply(this,arguments))}return(0,x.default)(e,t),(0,m.default)(e,[{key:"componentDidMount",value:function(){this.scalePath(this.refs.path,0),this.rotateWrapper(this.refs.wrapper)}},{key:"componentDidUpdate",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer),clearTimeout(this.rotateWrapperSecondTimer),this.scalePath(this.refs.path,0),this.rotateWrapper(this.refs.wrapper)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer),clearTimeout(this.rotateWrapperSecondTimer)}},{key:"renderChildren",value:function(){var t=this.context.muiTheme.prepareStyles,e=this.getPaperSize(),r=null;if("ready"!==this.props.status){var a=this.getCircleStyle(e);r=E.default.createElement("div",{ref:"wrapper",style:t({transition:T.default.create("transform","20s",null,"linear"),width:"100%",height:"100%"})},E.default.createElement("svg",{style:{width:e,height:e},viewBox:"0 0 32 32"},E.default.createElement("circle",(0,u.default)({ref:"path",style:t((0,k.default)(a.style,{transition:T.default.create("all","1.5s",null,"ease-in-out")}))},a.attr))))}else{var o=this.getCircleStyle(e),i=this.getPolygonStyle(e);r=E.default.createElement("svg",{style:{width:e,height:e},viewBox:"0 0 32 32"},E.default.createElement("circle",(0,u.default)({style:t(o.style)},o.attr)),E.default.createElement("polygon",(0,u.default)({style:t(i.style)},i.attr)))}return r}},{key:"getTheme",value:function(){return this.context.muiTheme.refreshIndicator}},{key:"getPaddingSize",value:function(){return.1*this.props.size}},{key:"getPaperSize",value:function(){return this.props.size-2*this.getPaddingSize()}},{key:"getCircleAttr",value:function(){return{radiu:11,originX:16,originY:16,strokeWidth:3}}},{key:"getArcDeg",value:function(){var t=this.props.percentage/100;return[120*t,410*t]}},{key:"getFactor",value:function(){var t=this.props.percentage/100;return Math.min(1,t/.4)}},{key:"getCircleStyle",value:function(){var t="loading"===this.props.status,e=t?1:this.getFactor(),r=this.getCircleAttr(),a=2*Math.PI*r.radiu,o=this.getArcDeg(),i=(0,s.default)(o,2),n=i[0],l=i[1],c=(l-n)*a/360,u=-n*a/360,f=this.getTheme();return{style:{strokeDasharray:c+", "+(a-c),strokeDashoffset:u,stroke:t||100===this.props.percentage?this.props.loadingColor||f.loadingStrokeColor:this.props.color||f.strokeColor,strokeLinecap:"round",opacity:e,strokeWidth:r.strokeWidth*e,fill:"none"},attr:{cx:r.originX,cy:r.originY,r:r.radiu}}}},{key:"getPolygonStyle",value:function(){var t=this.getFactor(),e=this.getCircleAttr(),r=e.originX+e.radiu,a=e.originY,o=7*e.strokeWidth/4*t,i=r-o+","+a+" "+(r+o)+","+a+" "+r+","+(a+o),n=this.getArcDeg(),l=(0,s.default)(n,2),c=l[1],u=this.getTheme();return{style:{fill:100===this.props.percentage?this.props.loadingColor||u.loadingStrokeColor:this.props.color||u.strokeColor,transform:"rotate("+c+"deg)",transformOrigin:e.originX+"px "+e.originY+"px",opacity:t},attr:{points:i}}}},{key:"scalePath",value:function(t,e){var r=this;if("loading"===this.props.status){var a=(e||0)%3,o=this.getCircleAttr(),i=2*Math.PI*o.radiu,n=.64*i,l=void 0,s=void 0,c=void 0;0===a?(l="1, 200",s=0,c="0ms"):1===a?(l=n+", 200",s=-15,c="750ms"):(l=n+", 200",s=-(i-1),c="850ms"),S.default.set(t.style,"strokeDasharray",l),S.default.set(t.style,"strokeDashoffset",s),S.default.set(t.style,"transitionDuration",c),this.scalePathTimer=setTimeout(function(){return r.scalePath(t,a+1)},a?750:250)}}},{key:"rotateWrapper",value:function(t){var e=this;"loading"===this.props.status&&(S.default.set(t.style,"transform",null),S.default.set(t.style,"transform","rotate(0deg)"),S.default.set(t.style,"transitionDuration","0ms"),this.rotateWrapperSecondTimer=setTimeout(function(){S.default.set(t.style,"transform","rotate(1800deg)"),S.default.set(t.style,"transitionDuration","10s"),S.default.set(t.style,"transitionTimingFunction","linear")},50),this.rotateWrapperTimer=setTimeout(function(){return e.rotateWrapper(t)},10050))}},{key:"render",value:function(){var t=this.props,e=t.style,r=(t.top,t.left,t.percentage,t.status,t.loadingColor,(0,n.default)(t,["style","top","left","percentage","status","loadingColor"])),a=o(this.props,this.context);return E.default.createElement(W.default,(0,u.default)({circle:!0,style:(0,k.default)(a.root,e)},r),this.renderChildren())}}]),e}(b.Component);P.defaultProps={percentage:0,size:40,status:"hide"},P.contextTypes={muiTheme:b.PropTypes.object.isRequired},e.default=P},774:function(t,e,r){"use strict";var a=r(3),o=r.n(a),i=r(2),n=r.n(i),l=r(4),s=r.n(l),c=r(6),u=r.n(c),f=r(5),p=r.n(f),_=r(0),d=r.n(_),h=r(19),m=r(71),g=r(50),y=(r.n(g),r(81)),v=r(79),x=r(762),w=r(12),k=r(760),b=(r.n(k),r(788)),E=r.n(b),C=function(t){function e(t){n()(this,e);var r=u()(this,(e.__proto__||o()(e)).call(this,t));return r.page=0,r.platform="all",r.word="all",r.scrollEvent=r.scrollEvent.bind(r),r.filterEvent=r.filterEvent.bind(r),r}return p()(e,t),s()(e,[{key:"componentDidMount",value:function(){this.props.getRecommend()}},{key:"moreCategory",value:function(t){m.a.push("/categorys/"+t)}},{key:"scrollEvent",value:function(t){1==t.top&&(this.page++,this.props.getRecommendMore(this.platform,this.word,this.page))}},{key:"filterEvent",value:function(t){var e=t.platform,r=t.word;this.page=0,e&&(this.platform=e),r&&(this.word=r),this.props.getRecommend(this.platform,this.word)}},{key:"render",value:function(){var t=this,e=this.props.recommend,a=e.loading,o=e.pageLoading,i=(e.error,e.done),n=e.data,l=[],s=[],c=[];return this.props.category.done&&this.props.category.data.forEach(function(e,r){if(r>12)return!1;l.push(d.a.createElement("span",{key:e.type,className:t.word==e.type?E.a.active:"",onClick:function(){return t.filterEvent({word:e.type})}},e.type))}),this.props.category.done&&this.props.category.platforms.forEach(function(e,r){s.push(d.a.createElement("span",{key:e,className:t.platform==e?E.a.active:"",onClick:function(){return t.filterEvent({platform:e})}},e))}),n.length>0&&n.forEach(function(t,e){c.push(d.a.createElement(y.a,{filterSwitch:!1,key:t._id,item:t,type:"category"}))}),d.a.createElement("div",{className:E.a.container},d.a.createElement("div",{className:E.a.outerWrapper},d.a.createElement("div",{className:E.a.content},d.a.createElement("div",null,d.a.createElement("h2",null,"全部直播"),d.a.createElement("section",{className:E.a.chipSec},d.a.createElement("span",{className:"all"==this.platform?E.a.active:"",onClick:function(){return t.filterEvent({platform:"all"})}},"所有平台"),s),d.a.createElement("section",{className:E.a.chipSec},d.a.createElement("span",{className:"all"==this.word?E.a.active:"",onClick:function(){return t.filterEvent({word:"all"})}},"所有游戏"),l)),!a&&i?d.a.createElement(g.Scrollbars,{onScrollFrame:o?this.scrollEvent:function(){return null},className:"ScrollContainer"},c,o?r.i(x.a)():""):d.a.createElement("div",{className:E.a.loader},d.a.createElement(v.a,null)))))}}]),e}(d.a.Component),S=function(t,e){return{recommend:t.recommend,category:t.category}},H=function(t,e){return{getRecommend:function(e,a){return t(r.i(w.c)(e,a))},getRecommendMore:function(e,a,o){return t(r.i(w.d)(e,a,o))}}};e.a=r.i(h.b)(S,H)(C)},780:function(t,e,r){e=t.exports=r(13)(void 0),e.push([t.i,'.___Hot__container___1L1zh{width:auto;height:100%;//:radial-gradient(ellipse at bottom,#1c2837 0,#050608 100%);//:fixed}.___Hot__outerWrapper___3SfEs{opacity:1;//:zoomIn 1.2s ease forwards;width:100%;height:100%}.___Hot__loader___3RiWu{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:50vh}.___Hot__itemWrapper___5GWx9{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;max-width:50%;width:480px;width:30rem;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;padding:0 16px;padding:0 1rem}.___Hot__content___2FcED{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;margin:0 auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0;box-sizing:border-box}.___Hot__content___2FcED h2{width:100%;margin:10px 0 38.4px;margin:10px 0 2.4rem;box-sizing:border-box;font-size:44.8px;font-size:2.8rem;font-weight:400;text-transform:uppercase;color:#19171c;position:relative}.___Hot__content___2FcED h2 .___Hot__text___10tSt{color:#6441a4;font-size:14px;padding:0 0 2px 4px}.___Hot__content___2FcED h2 .___Hot__more___1Kgfe{font-size:12px;position:absolute;right:16px;right:1rem;bottom:0;cursor:pointer;color:#6441a4}.___Hot__content___2FcED h2 .___Hot__more___1Kgfe:hover{color:#000}.___Hot__chipSec___10elZ{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:16px;margin-bottom:1rem}.___Hot__chipSec___10elZ span{font-size:19.2px;font-size:1.2rem;display:block;border-radius:1.5rem;font-weight:400;background:#e6e6e6;color:#6d6d6d;padding:1.6px 16px;padding:.1rem 1rem;margin:0 8px 8px 0;margin:0 .5rem .5rem 0;cursor:pointer;transition:all .4s}.___Hot__chipSec___10elZ span.___Hot__active___1-hrV,.___Hot__chipSec___10elZ span:hover{background:#19171c;color:#fff}@-webkit-keyframes ___Hot__zoomIn___3C2aY{0%{opacity:0;-webkit-transform:scale(1.01);transform:scale(1.01);filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(1);filter:grayscale(1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1);filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(0);filter:grayscale(0)}}@keyframes ___Hot__zoomIn___3C2aY{0%{opacity:0;-webkit-transform:scale(1.01);transform:scale(1.01);filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(1);filter:grayscale(1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1);filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(0);filter:grayscale(0)}}',""]),e.locals={container:"___Hot__container___1L1zh",outerWrapper:"___Hot__outerWrapper___3SfEs",loader:"___Hot__loader___3RiWu",itemWrapper:"___Hot__itemWrapper___5GWx9",content:"___Hot__content___2FcED",text:"___Hot__text___10tSt",more:"___Hot__more___1Kgfe",chipSec:"___Hot__chipSec___10elZ",active:"___Hot__active___1-hrV",zoomIn:"___Hot__zoomIn___3C2aY"}},788:function(t,e,r){var a=r(780);"string"==typeof a&&(a=[[t.i,a,""]]),r(14)(a,{}),a.locals&&(t.exports=a.locals)}});