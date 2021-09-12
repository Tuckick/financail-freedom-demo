(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{342:function(t,e,n){"use strict";(function(t){function o(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function r(t,e){var n=function(t,e){var n=o(t)*o(e);if(0===n)return 0;var r=function(t,e){return t.x*e.x+t.y*e.y}(t,e)/n;return r>1&&(r=1),Math.acos(r)}(t,e);return function(t,e){return t.x*e.y-e.x*t.y}(t,e)>0&&(n*=-1),180*n/Math.PI}n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return x}));var l=function(t){this.handlers=[],this.el=t};function h(t,e){var n=new l(t);return n.add(e),n}l.prototype.add=function(t){this.handlers.push(t)},l.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},l.prototype.dispatch=function(){for(var t=arguments,i=0,e=this.handlers.length;i<e;i++){var n=this.handlers[i];"function"==typeof n&&n.apply(this.el,t)}};var d=function(t,option){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var e=function(){};this.rotate=h(this.element,option.rotate||e),this.touchStart=h(this.element,option.touchStart||e),this.multipointStart=h(this.element,option.multipointStart||e),this.multipointEnd=h(this.element,option.multipointEnd||e),this.pinch=h(this.element,option.pinch||e),this.swipe=h(this.element,option.swipe||e),this.tap=h(this.element,option.tap||e),this.doubleTap=h(this.element,option.doubleTap||e),this.longTap=h(this.element,option.longTap||e),this.singleTap=h(this.element,option.singleTap||e),this.pressMove=h(this.element,option.pressMove||e),this.twoFingerPressMove=h(this.element,option.twoFingerPressMove||e),this.touchMove=h(this.element,option.touchMove||e),this.touchEnd=h(this.element,option.touchEnd||e),this.touchCancel=h(this.element,option.touchCancel||e),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};d.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=n.x,e.y=n.y,this.pinchStartLen=o(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var e=this.preV,n=t.touches.length,l=t.touches[0].pageX,h=t.touches[0].pageY;if(this.isDoubleTap=!1,n>1){var d=t.touches[1].pageX,c=t.touches[1].pageY,f={x:t.touches[1].pageX-l,y:t.touches[1].pageY-h};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=o(f)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=r(f,e),this.rotate.dispatch(t,this.element)),e.x=f.x,e.y=f.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(l-this.x2+d-this.sx2)/2,t.deltaY=(h-this.y2+c-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=d,this.sy2=c}else{if(null!==this.x2){t.deltaX=l-this.x2,t.deltaY=h-this.y2;var m=Math.abs(this.x1-this.x2),v=Math.abs(this.y1-this.y2);(m>10||v>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=l,this.y2=h,n>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,n,o){return Math.abs(t-e)>=Math.abs(n-o)?t-e>0?"Left":"Right":n-o>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}};var script={name:"Slider",model:{prop:"value",event:"change"},props:{value:{type:Number,default:0},width:{type:String,default:"auto"},height:{type:String,default:"300px"},touch:{type:Boolean,default:!0},animation:{type:String,default:"normal"},autoplay:{type:Boolean,default:!0},stopOnHover:{type:Boolean,default:!1},interval:{type:Number,default:3e3},speed:{type:Number,default:500},indicators:{type:[String,Boolean],default:"center"},controlBtn:{type:Boolean,default:!0},beforePrevious:{type:Function,default:function(){return!0}},beforeNext:{type:Function,default:function(){return!0}},prevBtnLabel:{type:String,default:"Previous slide"},nextBtnLabel:{type:String,default:"Next slide"}},data:function(){return{sliderItems:[],currentIndex:0,timer:0,af:null,isStopped:!1}},watch:{value:function(t){var e=t-this.currentIndex;!e||t<0||t>this.sliderItems.length-1||this.handleIndicator(e)}},created:function(){var t,e,n,o,r;this.init=(t=this.init,e=100,r=null,function(){var l=this,h=arguments,d=+new Date;clearTimeout(r),o||(o=d),d-o>=n?(t.apply(l,h),o=d):r=setTimeout((function(){t.apply(l,h)}),e)}),this.move=function(t,e){var n=!1;return function(){n||(n=!0,t.apply(this,arguments),setTimeout((function(){return n=!1}),e))}}(this.move,this.speed-200),this.$on("slider:init",this.init)},mounted:function(){this.init(),this.initTouchArea()},activated:function(){this.init(),this.initTouchArea()},beforeDestroy:function(){this.timer&&clearInterval(this.timer),this.af&&this.af.destroy()},deactivated:function(){this.timer&&clearInterval(this.timer),this.af&&this.af.destroy(),this.af=null},methods:{init:function(){this.sliderItems=this.$children.filter((function(t){return"SliderItem"===t.$options.name})),this.sliderItems[this.value]&&(this.currentIndex=this.value);var t=this.sliderItems[this.currentIndex];t&&(t.init(),this.auto())},initTouchArea:function(){var t=this;if(!this.af&&this.touch){var e=this.$refs.touchArea;this.af=new d(e,{swipe:function(e){"Left"===e.direction?t.next():t.prev()}})}},auto:function(){var t=this;this.autoplay&&!this.isStopped&&(this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){t.move(1)}),this.interval))},move:function(t){if(t&&this.canMove()){var e=t>0,n=this.getNextIndex(t),o=this.sliderItems[this.currentIndex],r=this.sliderItems[n];o.hide(e),r.show(e),this.currentIndex=n,this.$emit("change",n)}},prev:function(){this.beforePrevious()&&this.handleControlBtn("previous")},next:function(){this.beforeNext()&&this.handleControlBtn("next")},handleIndicator:function(t){t&&this.canMove()&&(this.move(t),this.auto())},handleControlBtn:function(t){if(this.canMove()){var e="next"===t?1:-1,n=this.getNextIndex(e);this.$emit(t,{original:this.currentIndex,next:n}),this.move(e),this.auto()}},getNextIndex:function(t){var e=this.sliderItems.length;return this.sliderItems[this.currentIndex]||(this.currentIndex=e-1),(this.currentIndex+t+e)%e},canMove:function(){return this.sliderItems.length>1},handleMouseenter:function(){this.autoplay&&this.stopOnHover&&(this.isStopped=!0,this.timer&&clearInterval(this.timer))},handleMouseleave:function(){this.autoplay&&this.stopOnHover&&(this.isStopped=!1,this.auto())}}};function c(template,style,script,t,e,n,o,r,l,h){"boolean"!=typeof o&&(l=r,r=o,o=!1);var d,c="function"==typeof script?script.options:script;if(template&&template.render&&(c.render=template.render,c.staticRenderFns=template.staticRenderFns,c._compiled=!0,e&&(c.functional=!0)),t&&(c._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=d):style&&(d=o?function(t){style.call(this,h(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),d)if(c.functional){var f=c.render;c.render=function(t,e){return d.call(e),f(t,e)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,d):[d]}return script}var f,m="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function v(t){return function(t,style){return function(t,e){var n=m?e.media||"default":t,style=y[n]||(y[n]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);var code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{var o=style.ids.size-1,r=document.createTextNode(code),l=style.element.childNodes;l[o]&&style.element.removeChild(l[o]),l.length?style.element.insertBefore(r,l[o]):style.element.appendChild(r)}}}(t,style)}}var y={};var T=c({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider",style:{width:t.width,height:t.height},on:{mouseenter:t.handleMouseenter,mouseleave:t.handleMouseleave}},[t.sliderItems.length?t._e():t._t("loading",[t._m(0)]),t._v(" "),n("div",{ref:"touchArea",staticClass:"slider-items"},[t._t("default")],2),t._v(" "),t.indicators?n("div",{class:"slider-indicators slider-indicators-"+t.indicators,on:{click:function(t){t.stopPropagation()}}},t._l(t.sliderItems.length,(function(i){return n("span",{key:i,staticClass:"slider-indicator-icon",class:{"slider-indicator-active":t.currentIndex===i-1},on:{click:function(e){return t.handleIndicator(i-t.currentIndex-1)}}})})),0):t._e(),t._v(" "),t.controlBtn?[n("button",{staticClass:"slider-btn slider-btn-left",attrs:{type:"button","aria-label":t.prevBtnLabel},on:{click:function(e){return e.stopPropagation(),t.prev(e)}}},[n("i",{staticClass:"slider-icon slider-icon-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("button",{staticClass:"slider-btn slider-btn-right",attrs:{type:"button","aria-label":t.nextBtnLabel},on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[n("i",{staticClass:"slider-icon slider-icon-right",attrs:{"aria-hidden":"true"}})])]:t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-loading"},[n("div",{staticClass:"ball-pulse"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])}]},(function(t){t&&t("data-v-f56384ae_0",{source:".slider[data-v-f56384ae]{position:relative;overflow:hidden}.slider-items[data-v-f56384ae]{width:100%;height:100%}.slider-btn[data-v-f56384ae]{position:absolute;top:0;z-index:999;height:100%;width:50px;border:none;background:rgba(0,0,0,.1);outline:0;transition:background .3s;cursor:pointer}.slider-btn:hover .slider-icon[data-v-f56384ae]{border-color:#fff}.slider-btn-left[data-v-f56384ae]{left:0;background:linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.slider-btn-right[data-v-f56384ae]{right:0;background:linear-gradient(-90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.slider-icon[data-v-f56384ae]{display:inline-block;width:15px;height:15px;border-left:2px solid rgba(255,255,255,.6);border-bottom:2px solid rgba(255,255,255,.6);transition:border .2s}.slider-icon-left[data-v-f56384ae]{transform:rotate(45deg)}.slider-icon-right[data-v-f56384ae]{transform:rotate(-135deg)}.slider-indicators[data-v-f56384ae]{position:absolute;bottom:20px;z-index:999}.slider-indicators-center[data-v-f56384ae]{left:50%;transform:translateX(-50%)}.slider-indicators-left[data-v-f56384ae]{left:6%}.slider-indicators-right[data-v-f56384ae]{right:6%}.slider-indicator-icon[data-v-f56384ae]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[data-v-f56384ae]{background-color:rgba(255,255,255,.2)}.slider-loading[data-v-f56384ae]{position:absolute;top:0;left:0;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.1);display:flex;justify-content:center;align-items:center}.ball-pulse>div[data-v-f56384ae]:nth-child(1){animation:scale-data-v-f56384ae .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-f56384ae]:nth-child(2){animation:scale-data-v-f56384ae .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-f56384ae]:nth-child(3){animation:scale-data-v-f56384ae .75s 0s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-f56384ae]{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;animation-fill-mode:both;display:inline-block}@-moz-keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@-webkit-keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@-o-keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@keyframes scale-data-v-f56384ae{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}",map:void 0,media:void 0})}),script,"data-v-f56384ae",false,undefined,!1,v,void 0,void 0),x=c({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.initAnimation?"":t.animation+"-"+(t.direction?"left":"right")}},[n("div",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"slider-item",style:{zIndex:t.zIndex,transition:"all "+t.speed/1e3+"s"}},"div",t.$attrs,!1),t.$listeners),[t._t("default")],2)])},staticRenderFns:[]},(function(t){t&&t("data-v-31f46842_0",{source:".slider-item[data-v-31f46842]{position:absolute;top:0;left:0;width:100%;height:100%}.normal-left-leave-to[data-v-31f46842],.normal-right-enter[data-v-31f46842]{transform:translateX(-100%)}.normal-left-enter[data-v-31f46842],.normal-right-leave-to[data-v-31f46842]{transform:translateX(100%)}.fade-left-enter[data-v-31f46842],.fade-left-leave-to[data-v-31f46842],.fade-right-enter[data-v-31f46842],.fade-right-leave-to[data-v-31f46842]{opacity:0}.fade-left-leave-to[data-v-31f46842],.fade-right-enter[data-v-31f46842]{transform:translateX(-10px)}.fade-left-enter[data-v-31f46842],.fade-right-leave-to[data-v-31f46842]{transform:translateX(10px)}",map:void 0,media:void 0})}),{name:"SliderItem",data:function(){return{display:!1,isInit:!1,initAnimation:!1,direction:!1,animation:"normal",speed:500,zIndex:99}},created:function(){this.$parent.$emit("slider:init"),this.speed=this.$parent.speed||500,this.animation=this.$parent.animation||"normal"},destroyed:function(){this.$parent.$emit("slider:init")},methods:{init:function(){var t=this;this.isInit||(this.isInit=!0,this.display=!0,this.initAnimation=!0,this.$nextTick((function(){return t.initAnimation=!1})))},show:function(t){var e=this;this.zIndex=99,this.direction=t,this.$nextTick((function(){return e.display=!0}))},hide:function(t){var e=this;this.zIndex=98,this.direction=t,this.$nextTick((function(){return e.display=!1}))}}},"data-v-31f46842",false,undefined,!1,v,void 0,void 0),w={version:"5.3.4",install:function(t){t.component(T.name,T),t.component(x.name,x)}},_=null;"undefined"!=typeof window?_=window.Vue:void 0!==t&&(_=t.Vue),_&&_.use(w)}).call(this,n(53))}}]);