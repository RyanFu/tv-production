webpackJsonp([3],{759:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_(777);t.default=n.a},775:function(e,t,_){"use strict";var n=_(3),a=_.n(n),r=_(2),i=_.n(r),o=_(4),c=_.n(o),l=_(6),m=_.n(l),s=_(5),p=_.n(s),u=_(51),d=_.n(u),f=_(0),h=_.n(f),I=_(19),g=_(71),b=_(39),v=_.n(b),w=_(267),y=_.n(w),S=_(785),x=_.n(S),k=_(783),E=_.n(k),M=_(784),D=_.n(M),z=_(12),C=_(101),N=(_(23),_(789)),j=_.n(N),A=[{name:"douyu",url:"http://staticlive.douyucdn.cn/common/share/play.swf?room_id=",attr:'type="application/x-shockwave-flash" allowscriptaccess="always"'},{name:"huomao",url:"https://www.huomao.com/outplayer/index/",attr:""},{name:"twitch",url:"https://player.twitch.tv/?channel="},{name:"afreecatv",url:"http://www.afreecatv.com/player/player.html?isAfreeca=false&type=station&autoPlay=true&szPart=NORMAL"},{name:"douyuvideo",url:"http://v.douyu.com/video/share/index?vid="},{name:"huya",url:"http://liveshare.huya.com/",attr:'type="application/x-shockwave-flash" allowscriptaccess="always"'},{name:"zhanqi",url:"http://www.zhanqi.tv/live/embed?roomId=",attr:""},{name:"quanmin",url:"http://quanmin.tv/static/v2/boot/embed/embed.html?roomid=",attr:'type="application/x-shockwave-flash" allowscriptaccess="always"'},{name:"bilibili",url:"http://static.hdslb.com/live-static/swf/LivePlayerEx_1.swf?cid=",attr:'type="application/x-shockwave-flash" allowscriptaccess="always"'},{name:"longzhu",url:"http://player.plures.net/prod/player/vPlayer_v162.swf?&env=cn&vxml=http://player.plures.net/prod/player/videoConfig/video_homev6.xml&roomId=",attr:'type="application/x-shockwave-flash" allowscriptaccess="always"'}],O=function(e){var t=e.roomId,_=void 0;if("object"!==(void 0===t?"undefined":d()(t)))_=t,"huya"===e.platform&&(_=t+"//huyacoop.swf");else for(var n in t)_+="&"+n+"="+t[n];return _},F=function(e){switch(e){case 1:return"oneScreen";case 2:return"twoScreen";case 3:return"threeScreen";default:return""}},L=function(e){function t(e){i()(this,t);var _=m()(this,(t.__proto__||a()(t)).call(this,e));return _.toggleFavorite=_.toggleFavorite.bind(_),_}return p()(t,e),c()(t,[{key:"toggleFavorite",value:function(){var e=this.props.item;this.props.favoriteStatus?this.props.removeFavorite(e):this.props.addFavorite(e)}},{key:"render",value:function(){var e=this,t=this.props.item,_=O(this.props.item),n=("douyu"===t.platform||"huya"===t.platform||t.platform,16/9),a=(this.props.screenCount,100),r=F(this.props.screenCount),i=this.props.favoriteStatus?h.a.createElement("span",{className:j.a.like},h.a.createElement(D.a,null)):h.a.createElement("span",null,h.a.createElement(E.a,null)),o=void 0,c=void 0;return A.map(function(e){if(e.name===t.platform)return o=e.url,void(c=e.attr)}),h.a.createElement("section",{className:v()(j.a.stageItem,j.a[r])},h.a.createElement("section",{className:j.a.brand},h.a.createElement("div",{className:j.a.title},h.a.createElement("h3",null,t.title),h.a.createElement("h5",null,h.a.createElement(g.e,{to:"/categorys/"+t.type},h.a.createElement("span",null,h.a.createElement(C.b,null)," ",t.type," "),h.a.createElement("span",null,h.a.createElement(C.a,null),t.anchor)," ",h.a.createElement("span",null,h.a.createElement(y.a,null)," ",t.view)," "))),h.a.createElement("section",{className:j.a.itemInfo},h.a.createElement("ul",null,h.a.createElement("li",{onClick:function(){return e.props.removeItem(t)}},h.a.createElement("span",null,h.a.createElement(x.a,null))),h.a.createElement("li",{"data-tip":"取消关注",onClick:this.toggleFavorite},i)))),h.a.createElement("section",{style:{paddingBottom:a/n+"%"},className:j.a.itemIframe,dangerouslySetInnerHTML:{__html:"<embed "+c+' src="'+o+_+'"></embed>'}}))}}]),t}(h.a.Component),H=function(e){return{category:e.category}},P=function(e){return{removeItem:function(t){return e(_.i(z.g)(t))},removeFavorite:function(t){return e(_.i(z.h)(t))},addFavorite:function(t){return e(_.i(z.i)(t))}}};t.a=_.i(I.b)(H,P)(L)},776:function(e,t,_){"use strict";var n=_(775);t.a=n.a},777:function(e,t,_){"use strict";var n=_(3),a=_.n(n),r=_(2),i=_.n(r),o=_(4),c=_.n(o),l=_(6),m=_.n(l),s=_(5),p=_.n(s),u=_(0),d=_.n(u),f=_(19),h=_(776),I=_(12),g=_(790),b=_.n(g),v=function(e,t){var _=!1;return t instanceof Array?t.forEach(function(t){e.roomId===t.roomId&&e.anchor===t.anchor&&(_=!0)}):_=!1,_},w=function(e){function t(e){return i()(this,t),m()(this,(t.__proto__||a()(t)).call(this,e))}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props.location.query.rooms;!this.props.screenItems.data.length&&e&&e.length>0&&this.props.getScreenItems(e)}},{key:"render",value:function(){var e=this,t=[],_=this.props.screenItems.data,n=_.length;return!!n&&_.forEach(function(_){t.push(d.a.createElement(h.a,{key:""+_.roomId+_,favoriteStatus:v(_,e.props.favorite),screenCount:n,item:_}))}),d.a.createElement("section",{className:b.a.stageMain},t.length>0?t:"没有观看的内容")}}]),t}(d.a.Component),y=function(e){return{screenItems:e.screenItems,favorite:e.favorite.data}},S=function(e){return{getScreenItems:function(t){return e(_.i(I.f)(t))}}};t.a=_.i(f.b)(y,S)(w)},781:function(e,t,_){t=e.exports=_(13)(void 0),t.push([e.i,".___ScreenItem__stageItem___1bwDm.___ScreenItem__oneScreen___9LwYF:first-child{width:100%}.___ScreenItem__stageItem___1bwDm{color:#fff;width:50%;float:left;box-sizing:border-box;background:none;position:relative;margin:0;height:auto;padding:0 .5% .5%}.___ScreenItem__stageItem___1bwDm ul{list-style:none;padding:0;overflow:hidden;margin:0}.___ScreenItem__stageItem___1bwDm ul li{display:block;color:#999;font-size:22.4px;font-size:1.4rem;padding:0 16px;padding:0 1rem;text-align:right}.___ScreenItem__stageItem___1bwDm ul li svg{width:22px!important;height:22px!important;opacity:1}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a{width:100%;padding:8px 16px;padding:.5rem 1rem;margin:0;background:#f8f8f8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a svg{fill:#b8b5c0!important;width:20px!important;height:20px!important;vertical-align:text-bottom}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a .___ScreenItem__typeImg___jO0iR{width:64px;width:4rem;height:88px;height:5.5rem;margin-right:16px;margin-right:1rem}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a .___ScreenItem__typeImg___jO0iR img{width:100%}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a .___ScreenItem__title___1-IIa{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a .___ScreenItem__view___2WAiO{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#999;font-size:22.4px;font-size:1.4rem;overflow:hidden}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a h3,.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a h5{font-weight:400;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a h3{color:#19171c;margin:8px 0;margin:.5rem 0;font-size:25.6px;font-size:1.6rem;line-height:32px;line-height:2rem}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a h5{font-size:22.4px;font-size:1.4rem;color:#6441a4;margin:0}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a h5 a{text-decoration:none;display:block;line-height:1em}.___ScreenItem__stageItem___1bwDm .___ScreenItem__brand___3re_a h5 span{margin:0 16px 0 0;margin:0 1rem 0 0;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.___ScreenItem__stageItem___1bwDm .___ScreenItem__itemIframe___3baQY{height:100%;width:100%;position:relative}.___ScreenItem__stageItem___1bwDm .___ScreenItem__itemIframe___3baQY embed,.___ScreenItem__stageItem___1bwDm .___ScreenItem__itemIframe___3baQY iframe{border:none;width:100%;height:100%;max-height:735px;background:#333;position:absolute;left:0;top:0;right:0;bottom:0}.___ScreenItem__itemInfo___2H2My{width:auto;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.___ScreenItem__itemInfo___2H2My .___ScreenItem__like___1_BaA{color:#8bc34a!important}.___ScreenItem__itemInfo___2H2My .___ScreenItem__like___1_BaA svg{fill:#8bc34a!important}.___ScreenItem__itemInfo___2H2My span{cursor:pointer}.___ScreenItem__itemInfo___2H2My span:hover,.___ScreenItem__itemInfo___2H2My span:hover svg{color:#333!important}.___ScreenItem__itemInfo___2H2My svg{color:#999!important}",""]),t.locals={stageItem:"___ScreenItem__stageItem___1bwDm",oneScreen:"___ScreenItem__oneScreen___9LwYF",brand:"___ScreenItem__brand___3re_a",typeImg:"___ScreenItem__typeImg___jO0iR",title:"___ScreenItem__title___1-IIa",view:"___ScreenItem__view___2WAiO",itemIframe:"___ScreenItem__itemIframe___3baQY",itemInfo:"___ScreenItem__itemInfo___2H2My",like:"___ScreenItem__like___1_BaA"}},782:function(e,t,_){t=e.exports=_(13)(void 0),t.push([e.i,".___Screen__stageMain___1-5AU{height:auto;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -.5%;overflow:hidden}.___Screen__emptyScreen___18gu3,.___Screen__stageMain___1-5AU{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.___Screen__emptyScreen___18gu3{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;position:relative;z-index:0;-webkit-animation:___Screen__fadeIn___2Icn7 .5s;animation:___Screen__fadeIn___2Icn7 .5s}.___Screen__emptyScreen___18gu3 p{color:hsla(0,0%,100%,.4);font-size:14px;position:absolute;bottom:20px;left:calc(50% - 194px)}.___Screen__emptyScreen___18gu3 img{width:100%;max-width:280px}.___Screen__navOpenClass___1_9LX{position:relative;left:160px}@-webkit-keyframes ___Screen__fadeIn___2Icn7{0%{opacity:0}to{opacity:1}}@keyframes ___Screen__fadeIn___2Icn7{0%{opacity:0}to{opacity:1}}",""]),t.locals={stageMain:"___Screen__stageMain___1-5AU",emptyScreen:"___Screen__emptyScreen___18gu3",fadeIn:"___Screen__fadeIn___2Icn7",navOpenClass:"___Screen__navOpenClass___1_9LX"}},783:function(e,t,_){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=_(0),r=n(a),i=_(31),o=n(i),c=_(30),l=n(c),m=function(e){return r.default.createElement(l.default,e,r.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}))};m=(0,o.default)(m),m.displayName="ActionFavoriteBorder",m.muiName="SvgIcon",t.default=m},784:function(e,t,_){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=_(0),r=n(a),i=_(31),o=n(i),c=_(30),l=n(c),m=function(e){return r.default.createElement(l.default,e,r.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}))};m=(0,o.default)(m),m.displayName="ActionFavorite",m.muiName="SvgIcon",t.default=m},785:function(e,t,_){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=_(0),r=n(a),i=_(31),o=n(i),c=_(30),l=n(c),m=function(e){return r.default.createElement(l.default,e,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))};m=(0,o.default)(m),m.displayName="ContentClear",m.muiName="SvgIcon",t.default=m},789:function(e,t,_){var n=_(781);"string"==typeof n&&(n=[[e.i,n,""]]),_(14)(n,{}),n.locals&&(e.exports=n.locals)},790:function(e,t,_){var n=_(782);"string"==typeof n&&(n=[[e.i,n,""]]),_(14)(n,{}),n.locals&&(e.exports=n.locals)}});