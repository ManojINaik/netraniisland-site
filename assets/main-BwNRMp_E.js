var T0=Object.defineProperty;var A0=(n,t,e)=>t in n?T0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Jt=(n,t,e)=>A0(n,typeof t!="symbol"?t+"":t,e);import{S as _r,a as lr,T as C0,M as Gs,b as R0,D as Lc,G as P0,E as la,t as D0,C as L0,R as I0,F as U0,i as N0,c as F0,H as z0,d as Ic}from"./leads-Cjo1Zqwo.js";var Uc="1.3.27";function wh(n,t,e){return Math.max(n,Math.min(t,e))}function O0(n,t,e){return(1-e)*n+e*t}function k0(n,t,e,i){return O0(n,t,1-Math.exp(-e*i))}function B0(n,t){return(n%t+t)%t}var H0=class{constructor(){Jt(this,"isRunning",!1);Jt(this,"value",0);Jt(this,"from",0);Jt(this,"to",0);Jt(this,"currentTime",0);Jt(this,"lerp");Jt(this,"duration");Jt(this,"easing");Jt(this,"onUpdate")}advance(n){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=wh(0,this.currentTime/this.duration,1);t=i>=1;const r=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=k0(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(n,t,{lerp:e,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=t,this.lerp=e,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function V0(n,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,n.apply(this,i)},t)}}var W0=class{constructor(n,t,{autoResize:e=!0,debounce:i=250}={}){Jt(this,"width",0);Jt(this,"height",0);Jt(this,"scrollHeight",0);Jt(this,"scrollWidth",0);Jt(this,"debouncedResize");Jt(this,"wrapperResizeObserver");Jt(this,"contentResizeObserver");Jt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Jt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Jt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=t,e&&(this.debouncedResize=V0(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,t;(n=this.wrapperResizeObserver)==null||n.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bh=class{constructor(){Jt(this,"events",{})}emit(n,...t){var i;const e=this.events[n]||[];for(let r=0,s=e.length;r<s;r++)(i=e[r])==null||i.call(e,...t)}on(n,t){return this.events[n]?this.events[n].push(t):this.events[n]=[t],()=>{var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}}off(n,t){var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}destroy(){this.events={}}};const G0=100/6,Li={passive:!1};function Nc(n,t){return n===1?G0:n===2?t:1}var X0=class{constructor(n,t={wheelMultiplier:1,touchMultiplier:1}){Jt(this,"touchStart",{x:0,y:0});Jt(this,"lastDelta",{x:0,y:0});Jt(this,"window",{width:0,height:0});Jt(this,"emitter",new bh);Jt(this,"onTouchStart",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Jt(this,"onTouchMove",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n,i=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Jt(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Jt(this,"onWheel",n=>{let{deltaX:t,deltaY:e,deltaMode:i}=n;const r=Nc(i,this.window.width),s=Nc(i,this.window.height);t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:n})});Jt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Li),this.element.addEventListener("touchstart",this.onTouchStart,Li),this.element.addEventListener("touchmove",this.onTouchMove,Li),this.element.addEventListener("touchend",this.onTouchEnd,Li)}on(n,t){return this.emitter.on(n,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Li),this.element.removeEventListener("touchstart",this.onTouchStart,Li),this.element.removeEventListener("touchmove",this.onTouchMove,Li),this.element.removeEventListener("touchend",this.onTouchEnd,Li)}};const Fc=n=>Math.min(1,1.001-2**(-10*n));var q0=class{constructor({wrapper:n=window,content:t=document.documentElement,eventsTarget:e=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:c,lerp:l=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:v=!0,prevent:g,virtualScroll:p,overscroll:y=!0,autoRaf:x=!1,anchors:_=!1,autoToggle:w=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:A=E,stopInertiaOnNavigate:M=!1,respectReducedMotion:b=!0}={}){Jt(this,"_isScrolling",!1);Jt(this,"_isStopped",!1);Jt(this,"_isLocked",!1);Jt(this,"_preventNextNativeScrollEvent",!1);Jt(this,"_resetVelocityTimeout",null);Jt(this,"_rafId",null);Jt(this,"_isDraggingSelection",!1);Jt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Jt(this,"isTouching");Jt(this,"isIos");Jt(this,"time",0);Jt(this,"userData",{});Jt(this,"lastVelocity",0);Jt(this,"velocity",0);Jt(this,"direction",0);Jt(this,"options");Jt(this,"targetScroll");Jt(this,"animatedScroll");Jt(this,"animate",new H0);Jt(this,"emitter",new bh);Jt(this,"dimensions");Jt(this,"virtualScroll");Jt(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Jt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Jt(this,"onTransitionEnd",n=>{var t;(t=n.propertyName)!=null&&t.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Jt(this,"onClick",n=>{const t=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){const i=t.find(r=>e.host===r.host&&e.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Jt(this,"onPointerDown",n=>{n.button===1&&this.reset()});Jt(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:t,deltaY:e,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const l=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(c.find(m=>{var v,g,p,y,x;return m instanceof HTMLElement&&(typeof l=="function"&&(l==null?void 0:l(m))||((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent"))||u==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-horizontal"))||r&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Jt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Jt(this,"raf",n=>{const t=n-(this.time||n);this.time=n,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Uc,window.lenis||(window.lenis={}),window.lenis.version=Uc,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof c!="function"?c=Fc:typeof c=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:t,eventsTarget:e,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:c,lerp:l,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:h,wheelMultiplier:m,autoResize:v,prevent:g,virtualScroll:p,overscroll:y,autoRaf:x,anchors:_,autoToggle:w,allowNestedScroll:S,naiveDimensions:A,stopInertiaOnNavigate:M,respectReducedMotion:b},this.dimensions=new W0(n,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new X0(e,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,t){return this.emitter.on(n,t)}off(n,t){return this.emitter.off(n,t)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=n.targetTouches[0]??n.changedTouches[0];if(!e)return!1;const i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(e.clientX-r.left,e.clientY-r.top)<=o,c=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||c}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,h=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let m=null;if(typeof d=="string"?(m=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),m||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(m=d),m){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?_.left:_.top}const v=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),y=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);d=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(x)?0:x)}}if(typeof d=="number"){if(d+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=d-this.animatedScroll;m>this.limit/2?d-=this.limit:m<-this.limit/2&&(d+=this.limit)}}else d=wh(0,d,this.limit);if(d===this.targetScroll){c==null||c(this),l==null||l(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Fc:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(m,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),v||this.emit(),v&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:t,deltaY:e}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,c,l,u,f,d,h,m;if(i-(r.time??0)>2e3){r.time=Date.now();const S=window.getComputedStyle(n);if(r.computedStyle=S,s=["auto","overlay","scroll"].includes(S.overflowX),o=["auto","overlay","scroll"].includes(S.overflowY),l=["auto"].includes(S.overscrollBehaviorX),u=["auto"].includes(S.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=n.scrollWidth,d=n.scrollHeight,h=n.clientWidth,m=n.clientHeight,a=f>h,c=d>m,r.isScrollableX=a,r.isScrollableY=c,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=h,r.clientHeight=m,r.hasOverscrollBehaviorX=l,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,c=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,l=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&c))return!1;const v=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let g,p,y,x,_,w;if(v==="horizontal")g=Math.round(n.scrollLeft),p=f-h,y=t,x=s,_=a,w=l;else if(v==="vertical")g=Math.round(n.scrollTop),p=d-m,y=e,x=o,_=c,w=u;else return!1;return!w&&(g>=p||g<=0)?!0:(y>0?g<p:g>0)&&x&&_}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?B0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="180",$0=0,zc=1,Y0=2,Eh=1,j0=2,_i=3,hi=0,Dn=1,je=2,Gi=0,Vr=1,$r=2,Oc=3,kc=4,Z0=5,sr=100,K0=101,J0=102,Q0=103,tf=104,ef=200,nf=201,rf=202,sf=203,nl=204,il=205,of=206,af=207,lf=208,cf=209,uf=210,hf=211,ff=212,df=213,pf=214,rl=0,sl=1,ol=2,Yr=3,al=4,ll=5,cl=6,ul=7,Th=0,mf=1,gf=2,Xi=0,vf=1,xf=2,_f=3,yf=4,Mf=5,Sf=6,wf=7,Ah=300,jr=301,Zr=302,hl=303,fl=304,na=306,Rs=1e3,Vi=1001,dl=1002,Xn=1003,bf=1004,Xs=1005,Gn=1006,ca=1007,Ti=1008,oi=1009,Ch=1010,Rh=1011,Ps=1012,lc=1013,hr=1014,li=1015,mr=1016,cc=1017,uc=1018,Ds=1020,Ph=35902,Dh=35899,Lh=1021,Ih=1022,ri=1023,Ls=1026,Is=1027,qi=1028,hc=1029,Uh=1030,fc=1031,dc=1033,Do=33776,Lo=33777,Io=33778,Uo=33779,pl=35840,ml=35841,gl=35842,vl=35843,xl=36196,_l=37492,yl=37496,Ml=37808,Sl=37809,wl=37810,bl=37811,El=37812,Tl=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Dl=37818,Ll=37819,Il=37820,Ul=37821,Nl=36492,Fl=36494,zl=36495,Ol=36283,kl=36284,Bl=36285,Hl=36286,Ef=3200,Tf=3201,Af=0,Cf=1,vn="",$n="srgb",fr="srgb-linear",ko="linear",ke="srgb",yr=7680,Bc=519,Rf=512,Pf=513,Df=514,Nh=515,Lf=516,If=517,Uf=518,Nf=519,Hc=35044,Ff=35048,Vc="300 es",ci=2e3,Bo=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Vl=180/Math.PI;function is(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function zf(n,t){return(n%t+t)%t}function ha(n,t,e){return(1-e)*n+e*t}function ls(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=m,t[e+3]=v;return}if(f!==v||c!==d||l!==h||u!==m){let g=1-a;const p=c*d+l*h+u*m+f*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),S=Math.atan2(w,p*y);g=Math.sin(g*S)/w,a=Math.sin(a*S)/w}const _=a*y;if(c=c*g+d*_,l=l*g+h*_,u=u*g+m*_,f=f*g+v*_,g===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return t[e]=a*m+u*f+c*h-l*d,t[e+1]=c*m+u*d+l*f-a*h,t[e+2]=l*m+u*h+a*d-c*f,t[e+3]=u*m-a*f-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),h=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*h*m,this._y=l*h*f-d*u*m,this._z=l*u*m+d*h*f,this._w=l*u*f-d*h*m;break;case"YXZ":this._x=d*u*f+l*h*m,this._y=l*h*f-d*u*m,this._z=l*u*m-d*h*f,this._w=l*u*f+d*h*m;break;case"ZXY":this._x=d*u*f-l*h*m,this._y=l*h*f+d*u*m,this._z=l*u*m+d*h*f,this._w=l*u*f-d*h*m;break;case"ZYX":this._x=d*u*f-l*h*m,this._y=l*h*f+d*u*m,this._z=l*u*m-d*h*f,this._w=l*u*f+d*h*m;break;case"YZX":this._x=d*u*f+l*h*m,this._y=l*h*f+d*u*m,this._z=l*u*m-d*h*f,this._w=l*u*f-d*h*m;break;case"XZY":this._x=d*u*f-l*h*m,this._y=l*h*f-d*u*m,this._z=l*u*m+d*h*f,this._w=l*u*f+d*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*r+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new P,Wc=new Be;class ve{constructor(t,e,i,r,s,o,a,c,l){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],m=i[8],v=r[0],g=r[3],p=r[6],y=r[1],x=r[4],_=r[7],w=r[2],S=r[5],E=r[8];return s[0]=o*v+a*y+c*w,s[3]=o*g+a*x+c*S,s[6]=o*p+a*_+c*E,s[1]=l*v+u*y+f*w,s[4]=l*g+u*x+f*S,s[7]=l*p+u*_+f*E,s[2]=d*v+h*y+m*w,s[5]=d*g+h*x+m*S,s[8]=d*p+h*_+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*s,h=l*s-o*c,m=e*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=d*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=h*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new ve;function Fh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Of(){const n=Us("canvas");return n.style.display="block",n}const Gc={};function Ns(n){n in Gc||(Gc[n]=!0,console.warn(n))}function kf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Xc=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ke&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vn?ko:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:t,whitePoint:i,transfer:ko,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:i,transfer:ke,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),n}const Re=Bf();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mr;class Hf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mr===void 0&&(Mr=Us("canvas")),Mr.width=t.width,Mr.height=t.height;const r=Mr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Mr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ri(e[i]/255)*255):e[i]=Ri(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vf=0;class pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pa(r[o].image)):s.push(pa(r[o]))}else s=pa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;const ma=new P;class xn extends ns{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,i=Vi,r=Vi,s=Gn,o=Ti,a=ri,c=oi,l=xn.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=is(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ma).x}get height(){return this.source.getSize(ma).y}get depth(){return this.source.getSize(ma).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Ah;xn.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,r=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(h+1)/2,w=(p+1)/2,S=(u+d)/4,E=(f+v)/4,A=(m+g)/4;return x>_&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=S/i,s=E/i):_>w?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=S/r,s=A/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=A/s),this.set(i,r,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends ns{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new xn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new pc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Gf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class zh extends xn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xf extends xn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),$s.subVectors(this.max,cs),Sr.subVectors(t.a,cs),wr.subVectors(t.b,cs),br.subVectors(t.c,cs),Ii.subVectors(wr,Sr),Ui.subVectors(br,wr),Ki.subVectors(Sr,br);let e=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-Ki.z,Ki.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,Ki.z,0,-Ki.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-Ki.y,Ki.x,0];return!ga(e,Sr,wr,br,$s)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,Sr,wr,br,$s))?!1:(Ys.crossVectors(Ii,Ui),e=[Ys.x,Ys.y,Ys.z],ga(e,Sr,wr,br,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new P,new P,new P,new P,new P,new P,new P,new P],Kn=new P,qs=new gr,Sr=new P,wr=new P,br=new P,Ii=new P,Ui=new P,Ki=new P,cs=new P,$s=new P,Ys=new P,Ji=new P;function ga(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ji.fromArray(n,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const qf=new gr,us=new P,va=new P;class vr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(va)),this.expandByPoint(us.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pi=new P,xa=new P,js=new P,Ni=new P,_a=new P,Zs=new P,ya=new P;class ia{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){xa.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(xa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(js),a=Ni.dot(this.direction),c=-Ni.dot(js),l=Ni.lengthSq(),u=Math.abs(1-o*o);let f,d,h,m;if(u>0)if(f=o*c-a,d=o*a-c,m=s*u,f>=0)if(d>=-m)if(d<=m){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=m?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xa).addScaledVector(js,d),h}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,r,s){_a.subVectors(e,t),Zs.subVectors(i,t),ya.crossVectors(_a,Zs);let o=this.direction.dot(ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);const c=a*this.direction.dot(Zs.crossVectors(Ni,Zs));if(c<0)return null;const l=a*this.direction.dot(_a.cross(Ni));if(l<0||c+l>o)return null;const u=-a*Ni.dot(ya);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,o,a,c,l,u,f,d,h,m,v,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,f,d,h,m,v,g)}set(t,e,i,r,s,o,a,c,l,u,f,d,h,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,h=o*f,m=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=h+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+h*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,h=c*f,m=l*u,v=l*f;e[0]=d+v*a,e[4]=m*a-h,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,h=c*f,m=l*u,v=l*f;e[0]=d-v*a,e[4]=-o*f,e[8]=m+h*a,e[1]=h+m*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,h=o*f,m=a*u,v=a*f;e[0]=c*u,e[4]=m*l-h,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=h*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,h=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=v-d*f,e[8]=m*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*f+m,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*c,h=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+v,e[5]=o*u,e[9]=h*f-m,e[2]=m*f-h,e[6]=a*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Yf)}lookAt(t,e,i){const r=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Fi.crossVectors(i,kn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Fi.crossVectors(i,kn)),Fi.normalize(),Ks.crossVectors(kn,Fi),r[0]=Fi.x,r[4]=Ks.x,r[8]=kn.x,r[1]=Fi.y,r[5]=Ks.y,r[9]=kn.y,r[2]=Fi.z,r[6]=Ks.z,r[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],m=i[2],v=i[6],g=i[10],p=i[14],y=i[3],x=i[7],_=i[11],w=i[15],S=r[0],E=r[4],A=r[8],M=r[12],b=r[1],T=r[5],I=r[9],O=r[13],z=r[2],F=r[6],U=r[10],k=r[14],D=r[3],H=r[7],G=r[11],W=r[15];return s[0]=o*S+a*b+c*z+l*D,s[4]=o*E+a*T+c*F+l*H,s[8]=o*A+a*I+c*U+l*G,s[12]=o*M+a*O+c*k+l*W,s[1]=u*S+f*b+d*z+h*D,s[5]=u*E+f*T+d*F+h*H,s[9]=u*A+f*I+d*U+h*G,s[13]=u*M+f*O+d*k+h*W,s[2]=m*S+v*b+g*z+p*D,s[6]=m*E+v*T+g*F+p*H,s[10]=m*A+v*I+g*U+p*G,s[14]=m*M+v*O+g*k+p*W,s[3]=y*S+x*b+_*z+w*D,s[7]=y*E+x*T+_*F+w*H,s[11]=y*A+x*I+_*U+w*G,s[15]=y*M+x*O+_*k+w*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],h=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*h-i*c*h)+v*(+e*c*h-e*l*d+s*o*d-r*o*h+r*l*u-s*c*u)+g*(+e*l*f-e*a*h-s*o*f+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-e*c*f+e*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],h=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=f*g*l-v*d*l+v*c*h-a*g*h-f*c*p+a*d*p,x=m*d*l-u*g*l-m*c*h+o*g*h+u*c*p-o*d*p,_=u*v*l-m*f*l+m*a*h-o*v*h-u*a*p+o*f*p,w=m*f*c-u*v*c-m*a*d+o*v*d+u*a*g-o*f*g,S=e*y+i*x+r*_+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=y*E,t[1]=(v*d*s-f*g*s-v*r*h+i*g*h+f*r*p-i*d*p)*E,t[2]=(a*g*s-v*c*s+v*r*l-i*g*l-a*r*p+i*c*p)*E,t[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*h-i*c*h)*E,t[4]=x*E,t[5]=(u*g*s-m*d*s+m*r*h-e*g*h-u*r*p+e*d*p)*E,t[6]=(m*c*s-o*g*s-m*r*l+e*g*l+o*r*p-e*c*p)*E,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*h+e*c*h)*E,t[8]=_*E,t[9]=(m*f*s-u*v*s-m*i*h+e*v*h+u*i*p-e*f*p)*E,t[10]=(o*v*s-m*a*s+m*i*l-e*v*l-o*i*p+e*a*p)*E,t[11]=(u*a*s-o*f*s-u*i*l+e*f*l+o*i*h-e*a*h)*E,t[12]=w*E,t[13]=(u*v*r-m*f*r+m*i*d-e*v*d-u*i*g+e*f*g)*E,t[14]=(m*a*r-o*v*r-m*i*c+e*v*c+o*i*g-e*a*g)*E,t[15]=(o*f*r-u*a*r+u*i*c-e*f*c-o*i*d+e*a*d)*E,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,d=s*l,h=s*u,m=s*f,v=o*u,g=o*f,p=a*f,y=c*l,x=c*u,_=c*f,w=i.x,S=i.y,E=i.z;return r[0]=(1-(v+p))*w,r[1]=(h+_)*w,r[2]=(m-x)*w,r[3]=0,r[4]=(h-_)*S,r[5]=(1-(d+p))*S,r[6]=(g+y)*S,r[7]=0,r[8]=(m+x)*E,r[9]=(g-y)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Jn.copy(this);const l=1/s,u=1/o,f=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,e.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ci,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r);let m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===ci)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Bo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ci,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),h=-(i+r)/(i-r);let m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===ci)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Bo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Er=new P,Jn=new le,$f=new P(0,0,0),Yf=new P(1,1,1),Fi=new P,Ks=new P,kn=new P,$c=new le,Yc=new Be;class tn{constructor(t=0,e=0,i=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const jc=new P,Tr=new Be,mi=new le,Js=new P,hs=new P,Zf=new P,Kf=new Be,Zc=new P(1,0,0),Kc=new P(0,1,0),Jc=new P(0,0,1),Qc={type:"added"},Jf={type:"removed"},Ar={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ln extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new P,e=new tn,i=new Be,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new ve}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Js.copy(t):Js.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(hs,Js,this.up):mi.lookAt(Js,hs,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(mi),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new P(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new P,gi=new P,Sa=new P,vi=new P,Cr=new P,Rr=new P,tu=new P,wa=new P,ba=new P,Ea=new P,Ta=new Ee,Aa=new Ee,Ca=new Ee;class ni{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Qn.subVectors(t,e),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Qn.subVectors(r,e),gi.subVectors(i,e),Sa.subVectors(t,e);const o=Qn.dot(Qn),a=Qn.dot(gi),c=Qn.dot(Sa),l=gi.dot(gi),u=gi.dot(Sa),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,m=(o*u-a*c)*d;return s.set(1-h-m,m,h)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return Ta.setScalar(0),Aa.setScalar(0),Ca.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,i),Ca.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ta,s.x),o.addScaledVector(Aa,s.y),o.addScaledVector(Ca,s.z),o}static isFrontFacing(t,e,i,r){return Qn.subVectors(i,e),gi.subVectors(t,e),Qn.cross(gi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Qn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ni.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Rr.subVectors(s,i),wa.subVectors(t,i);const c=Cr.dot(wa),l=Rr.dot(wa);if(c<=0&&l<=0)return e.copy(i);ba.subVectors(t,r);const u=Cr.dot(ba),f=Rr.dot(ba);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Cr,o);Ea.subVectors(t,s);const h=Cr.dot(Ea),m=Rr.dot(Ea);if(m>=0&&h<=m)return e.copy(s);const v=h*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(Rr,a);const g=u*m-h*f;if(g<=0&&f-u>=0&&h-m>=0)return tu.subVectors(s,r),a=(f-u)/(f-u+(h-m)),e.copy(r).addScaledVector(tu,a);const p=1/(g+v+d);return o=v*p,a=d*p,e.copy(i).addScaledVector(Cr,o).addScaledVector(Rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class pe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Re.workingColorSpace){return this.r=t,this.g=e,this.b=i,Re.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Re.workingColorSpace){if(t=zf(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ra(o,s,t+1/3),this.g=Ra(o,s,t),this.b=Ra(o,s,t-1/3)}return Re.colorSpaceToWorking(this,r),this}setStyle(t,e=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){const i=Oh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return Re.workingToColorSpace(Mn.copy(this),t),Math.round(Se(Mn.r*255,0,255))*65536+Math.round(Se(Mn.g*255,0,255))*256+Math.round(Se(Mn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=$n){Re.workingToColorSpace(Mn.copy(this),t);const e=Mn.r,i=Mn.g,r=Mn.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Qs);const i=ha(zi.h,Qs.h,e),r=ha(zi.s,Qs.s,e),s=ha(zi.l,Qs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new pe;pe.NAMES=Oh;let Qf=0;class rs extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Vr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kh extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Si=td();function td(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function ed(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Se(n,-65504,65504),Si.floatView[0]=n;const t=Si.uint32View[0],e=t>>23&511;return Si.baseTable[e]+((t&8388607)>>Si.shiftTable[e])}function nd(n){const t=n>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[t]+(n&1023)]+Si.exponentTable[t],Si.floatView[0]}class id{static toHalfFloat(t){return ed(t)}static fromHalfFloat(t){return nd(t)}}const en=new P,to=new kt;let rd=0;class he{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ls(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class Bh extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hh extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qt extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}}let sd=0;const qn=new le,Pa=new Ln,Pr=new P,Bn=new gr,fs=new gr,fn=new P;class ae extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Hh:Bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ve().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Bn.min,fs.min),Bn.expandByPoint(fn),fn.addVectors(Bn.max,fs.max),Bn.expandByPoint(fn)):(Bn.expandByPoint(fs.min),Bn.expandByPoint(fs.max))}Bn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)fn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(fn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)fn.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(t,l),fn.add(Pr)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new P,c[A]=new P;const l=new P,u=new P,f=new P,d=new kt,h=new kt,m=new kt,v=new P,g=new P;function p(A,M,b){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),u.sub(l),f.sub(l),h.sub(d),m.sub(d);const T=1/(h.x*m.y-m.x*h.y);isFinite(T)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(T),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(T),a[A].add(v),a[M].add(v),a[b].add(v),c[A].add(g),c[M].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const b=y[A],T=b.start,I=b.count;for(let O=T,z=T+I;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new P,_=new P,w=new P,S=new P;function E(A){w.fromBufferAttribute(r,A),S.copy(w);const M=a[A];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(S,M);const T=_.dot(c[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,T)}for(let A=0,M=y.length;A<M;++A){const b=y[A],T=b.start,I=b.count;for(let O=T,z=T+I;O<z;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let d=0,h=t.count;d<h;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)d[m++]=l[h++]}return new he(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=t(d,i);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eu=new le,Qi=new ia,eo=new vr,nu=new P,no=new P,io=new P,ro=new P,Da=new P,so=new P,iu=new P,oo=new P;class ue extends Ln{constructor(t=new ae,e=new kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){so.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Da.fromBufferAttribute(f,t),o?so.addScaledVector(Da,u):so.addScaledVector(Da.sub(e),u))}e.add(so)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),Qi.copy(t.ray).recast(t.near),!(eo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(eo,nu)===null||Qi.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(eu),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,w=x;_<w;_+=3){const S=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);r=ao(this,p,t,i,l,u,f,S,E,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);r=ao(this,o,t,i,l,u,f,y,x,_),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,w=x;_<w;_+=3){const S=_,E=_+1,A=_+2;r=ao(this,p,t,i,l,u,f,S,E,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=g,x=g+1,_=g+2;r=ao(this,o,t,i,l,u,f,y,x,_),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function od(n,t,e,i,r,s,o,a){let c;if(t.side===Dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===hi,a),c===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(oo);return l<e.near||l>e.far?null:{distance:l,point:oo.clone(),object:n}}function ao(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,no),n.getVertexPosition(c,io),n.getVertexPosition(l,ro);const u=od(n,t,e,i,no,io,ro,iu);if(u){const f=new P;ni.getBarycoord(iu,no,io,ro,f),r&&(u.uv=ni.getInterpolatedAttribute(r,a,c,l,f,new kt)),s&&(u.uv1=ni.getInterpolatedAttribute(s,a,c,l,f,new kt)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,c,l,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};ni.getNormal(no,io,ro,d.normal),u.face=d,u.barycoord=f}return u}class ne extends ae{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,r,o,2),m("x","z","y",1,-1,t,i,-e,r,o,3),m("x","y","z",1,-1,t,e,i,r,s,4),m("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function m(v,g,p,y,x,_,w,S,E,A,M){const b=_/E,T=w/A,I=_/2,O=w/2,z=S/2,F=E+1,U=A+1;let k=0,D=0;const H=new P;for(let G=0;G<U;G++){const W=G*T-O;for(let X=0;X<F;X++){const st=X*b-I;H[v]=st*y,H[g]=W*x,H[p]=z,l.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[p]=S>0?1:-1,u.push(H.x,H.y,H.z),f.push(X/E),f.push(1-G/A),k+=1}}for(let G=0;G<A;G++)for(let W=0;W<E;W++){const X=d+W+F*G,st=d+W+F*(G+1),ot=d+(W+1)+F*(G+1),V=d+(W+1)+F*G;c.push(X,st,V),c.push(st,ot,V),D+=6}a.addGroup(h,D,M),h+=D,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function An(n){const t={};for(let e=0;e<n.length;e++){const i=Kr(n[e]);for(const r in i)t[r]=i[r]}return t}function ad(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const ld={clone:Kr,merge:An};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ae extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wh extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new P,ru=new kt,su=new kt;class Yn extends Wh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,ru,su),e.subVectors(su,ru)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Dr=-90,Lr=1;class hd extends Ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Dr,Lr,t,e);r.layers=this.layers,this.add(r);const s=new Yn(Dr,Lr,t,e);s.layers=this.layers,this.add(s);const o=new Yn(Dr,Lr,t,e);o.layers=this.layers,this.add(o);const a=new Yn(Dr,Lr,t,e);a.layers=this.layers,this.add(a);const c=new Yn(Dr,Lr,t,e);c.layers=this.layers,this.add(c);const l=new Yn(Dr,Lr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Gh extends xn{constructor(t=[],e=jr,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Gh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ne(5,5,5),s=new Ae({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Gi});s.uniforms.tEquirect.value=e;const o=new ue(r,s),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Gn),new hd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Qe extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dd={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,m=.005;l.inputState.pinching&&d>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class pd extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ui extends xn{constructor(t=null,e=1,i=1,r,s,o,a,c,l=Xn,u=Xn,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs extends he{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ir=new le,ou=new le,lo=[],au=new gr,md=new le,ds=new ue,ps=new vr;class Cn extends ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,md)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ir),au.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(au)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ir),ps.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(i),t.ray.intersectsSphere(ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ir),ou.multiplyMatrices(i,Ir),ds.matrixWorld=ou,ds.raycast(t,lo);for(let o=0,a=lo.length;o<a;o++){const c=lo[o];c.instanceId=s,c.object=this,e.push(c)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(r*this.count),r,this.count,qi,li));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ia=new P,gd=new P,vd=new ve;class ir{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ia.subVectors(i,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vd.getNormalMatrix(t),r=this.coplanarPoint(Ia).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new vr,xd=new kt(.5,.5),co=new P;class Xh{constructor(t=new ir,e=new ir,i=new ir,r=new ir,s=new ir,o=new ir){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],m=s[8],v=s[9],g=s[10],p=s[11],y=s[12],x=s[13],_=s[14],w=s[15];if(r[0].setComponents(l-o,h-u,p-m,w-y).normalize(),r[1].setComponents(l+o,h+u,p+m,w+y).normalize(),r[2].setComponents(l+a,h+f,p+v,w+x).normalize(),r[3].setComponents(l-a,h-f,p-v,w-x).normalize(),i)r[4].setComponents(c,d,g,_).normalize(),r[5].setComponents(l-c,h-d,p-g,w-_).normalize();else if(r[4].setComponents(l-c,h-d,p-g,w-_).normalize(),e===ci)r[5].setComponents(l+c,h+d,p+g,w+_).normalize();else if(e===Bo)r[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);const e=xd.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(co.x=r.normal.x>0?t.max.x:t.min.x,co.y=r.normal.y>0?t.max.y:t.min.y,co.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ho=new P,Vo=new P,lu=new le,ms=new ia,uo=new vr,Ua=new P,cu=new P;class _d extends Ln{constructor(t=new ae,e=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ho.fromBufferAttribute(e,r-1),Vo.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ho.distanceTo(Vo);t.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,t.ray.intersectsSphere(uo)===!1)return;lu.copy(r).invert(),ms.copy(t.ray).applyMatrix4(lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){const p=u.getX(v),y=u.getX(v+1),x=ho(this,t,ms,c,p,y,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(h),p=ho(this,t,ms,c,v,g,m-1);p&&e.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){const p=ho(this,t,ms,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=ho(this,t,ms,c,m-1,h,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ho(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Ho.fromBufferAttribute(a,r),Vo.fromBufferAttribute(a,s),e.distanceSqToSegment(Ho,Vo,Ua,cu)>i)return;Ua.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ua);if(!(l<t.near||l>t.far))return{distance:l,point:cu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class yd extends _d{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Md extends rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uu=new le,Wl=new ia,fo=new vr,po=new P;class zs extends Ln{constructor(t=new ae,e=new Md){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,t.ray.intersectsSphere(fo)===!1)return;uu.copy(r).invert(),Wl.copy(t.ray).applyMatrix4(uu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=d,v=h;m<v;m++){const g=l.getX(m);po.fromBufferAttribute(f,g),hu(po,g,c,r,t,e,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=d,v=h;m<v;m++)po.fromBufferAttribute(f,m),hu(po,m,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hu(n,t,e,i,r,s,o){const a=Wl.distanceSqToPoint(n);if(a<e){const c=new P;Wl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wo extends xn{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $h extends xn{constructor(t,e,i=hr,r,s,o,a=Xn,c=Xn,l,u=Ls,f=1){if(u!==Ls&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yh extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gc extends ae{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new P,u=new kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=i+f/e*r;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Me extends ae{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let m=0;const v=[],g=i/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(h,2));function y(){const _=new P,w=new P;let S=0;const E=(e-t)/i;for(let A=0;A<=s;A++){const M=[],b=A/s,T=b*(e-t)+t;for(let I=0;I<=r;I++){const O=I/r,z=O*c+a,F=Math.sin(z),U=Math.cos(z);w.x=T*F,w.y=-b*i+g,w.z=T*U,f.push(w.x,w.y,w.z),_.set(F,E,U).normalize(),d.push(_.x,_.y,_.z),h.push(O,1-b),M.push(m++)}v.push(M)}for(let A=0;A<r;A++)for(let M=0;M<s;M++){const b=v[M][A],T=v[M+1][A],I=v[M+1][A+1],O=v[M][A+1];(t>0||M!==0)&&(u.push(b,T,O),S+=3),(e>0||M!==s-1)&&(u.push(T,I,O),S+=3)}l.addGroup(p,S,0),p+=S}function x(_){const w=m,S=new kt,E=new P;let A=0;const M=_===!0?t:e,b=_===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,g*b,0),d.push(0,b,0),h.push(.5,.5),m++;const T=m;for(let I=0;I<=r;I++){const z=I/r*c+a,F=Math.cos(z),U=Math.sin(z);E.x=M*U,E.y=g*b,E.z=M*F,f.push(E.x,E.y,E.z),d.push(0,b,0),S.x=F*.5+.5,S.y=U*.5*b+.5,h.push(S.x,S.y),m++}for(let I=0;I<r;I++){const O=w+I,z=T+I;_===!0?u.push(z,z+1,O):u.push(z+1,z,O),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jr extends Me{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Jr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vc extends ae{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new P,_=new P,w=new P;for(let S=0;S<e.length;S+=3)h(e[S+0],x),h(e[S+1],_),h(e[S+2],w),c(x,_,w,y)}function c(y,x,_,w){const S=w+1,E=[];for(let A=0;A<=S;A++){E[A]=[];const M=y.clone().lerp(_,A/S),b=x.clone().lerp(_,A/S),T=S-A;for(let I=0;I<=T;I++)I===0&&A===S?E[A][I]=M:E[A][I]=M.clone().lerp(b,I/T)}for(let A=0;A<S;A++)for(let M=0;M<2*(S-A)-1;M++){const b=Math.floor(M/2);M%2===0?(d(E[A][b+1]),d(E[A+1][b]),d(E[A][b])):(d(E[A][b+1]),d(E[A+1][b+1]),d(E[A+1][b]))}}function l(y){const x=new P;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){const y=new P;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(_,1-w)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],w=o[y+4],S=Math.max(x,_,w),E=Math.min(x,_,w);S>.9&&E<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function m(){const y=new P,x=new P,_=new P,w=new P,S=new kt,E=new kt,A=new kt;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),S.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),A.set(o[b+4],o[b+5]),w.copy(y).add(x).add(_).divideScalar(3);const T=g(w);v(S,b+0,y,T),v(E,b+2,x,T),v(A,b+4,_,T)}}function v(y,x,_,w){w<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.vertices,t.indices,t.radius,t.details)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new kt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,r=[],s=[],o=[],a=new P,c=new le;for(let h=0;h<=t;h++){const m=h/t;r[h]=this.getTangentAt(m,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Se(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(e===!0){let h=Math.acos(Se(s[0].dot(s[t]),-1,1));h/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xc extends fi{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new kt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*u-h*f+this.aX,l=d*f+h*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sd extends xc{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _c(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const mo=new P,Na=new _c,Fa=new _c,za=new _c;class Go extends fi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new P){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(mo.subVectors(r[0],r[1]).add(r[0]),l=mo);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(mo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=mo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Na.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,m,v,g),Fa.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,m,v,g),za.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Fa.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),za.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return i.set(Na.calc(c),Fa.calc(c),za.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fu(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function wd(n,t){const e=1-n;return e*e*t}function bd(n,t){return 2*(1-n)*n*t}function Ed(n,t){return n*n*t}function ws(n,t,e,i){return wd(n,t)+bd(n,e)+Ed(n,i)}function Td(n,t){const e=1-n;return e*e*e*t}function Ad(n,t){const e=1-n;return 3*e*e*n*t}function Cd(n,t){return 3*(1-n)*n*n*t}function Rd(n,t){return n*n*n*t}function bs(n,t,e,i,r){return Td(n,t)+Ad(n,e)+Cd(n,i)+Rd(n,r)}class jh extends fi{constructor(t=new kt,e=new kt,i=new kt,r=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new kt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bs(t,r.x,s.x,o.x,a.x),bs(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pd extends fi{constructor(t=new P,e=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new P){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bs(t,r.x,s.x,o.x,a.x),bs(t,r.y,s.y,o.y,a.y),bs(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends fi{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends fi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends fi{constructor(t=new kt,e=new kt,i=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new kt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ws(t,r.x,s.x,o.x),ws(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends fi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ws(t,r.x,s.x,o.x),ws(t,r.y,s.y,o.y),ws(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t0 extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(fu(a,c.x,l.x,u.x,f.x),fu(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new kt().fromArray(r))}return this}}var Xo=Object.freeze({__proto__:null,ArcCurve:Sd,CatmullRomCurve3:Go,CubicBezierCurve:jh,CubicBezierCurve3:Pd,EllipseCurve:xc,LineCurve:Zh,LineCurve3:Kh,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Qh,SplineCurve:t0});class Dd extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Xo[r.type]().fromJSON(r))}return this}}class du extends Dd{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Zh(this.currentPoint.clone(),new kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Jh(this.currentPoint.clone(),new kt(t,e),new kt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new jh(this.currentPoint.clone(),new kt(t,e),new kt(i,r),new kt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new t0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,r,s,o,a,c),this}absellipse(t,e,i,r,s,o,a,c){const l=new xc(t,e,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ra extends du{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new du().fromJSON(r))}return this}}function Ld(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=e0(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=zd(n,t,s,e)),n.length>80*e){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let d=e;d<r;d+=e){const h=n[d],m=n[d+1];h<a&&(a=h),m<c&&(c=m),h>u&&(u=h),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Os(s,o,e,a,c,l,0),o}function e0(n,t,e,i,r){let s;if(r===Yd(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=pu(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=pu(o/i|0,n[o],n[o+1],s);return s&&Qr(s,s.next)&&(Bs(s),s=s.next),s}function pr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Qr(e,e.next)||Ke(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Os(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Vd(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Ud(n,i,r,s):Id(n)){t.push(c.i,n.i,l.i),Bs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Nd(pr(n),t),Os(n,t,e,i,r,s,2)):o===2&&Fd(n,t,e,i,r,s):Os(pr(n),t,e,i,r,s,1);break}}}function Id(n){const t=n.prev,e=n,i=n.next;if(Ke(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(r,s,o),f=Math.min(a,c,l),d=Math.max(r,s,o),h=Math.max(a,c,l);let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=f&&m.y<=h&&xs(r,a,s,c,o,l,m.x,m.y)&&Ke(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ud(n,t,e,i){const r=n.prev,s=n,o=n.next;if(Ke(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,f=s.y,d=o.y,h=Math.min(a,c,l),m=Math.min(u,f,d),v=Math.max(a,c,l),g=Math.max(u,f,d),p=Gl(h,m,t,e,i),y=Gl(v,g,t,e,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=h&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&xs(a,u,c,f,l,d,x.x,x.y)&&Ke(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=h&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&xs(a,u,c,f,l,d,_.x,_.y)&&Ke(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=h&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&xs(a,u,c,f,l,d,x.x,x.y)&&Ke(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=h&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&xs(a,u,c,f,l,d,_.x,_.y)&&Ke(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Nd(n,t){let e=n;do{const i=e.prev,r=e.next.next;!Qr(i,r)&&i0(i,e,e.next,r)&&ks(i,r)&&ks(r,i)&&(t.push(i.i,e.i,r.i),Bs(e),Bs(e.next),e=n=r),e=e.next}while(e!==n);return pr(e)}function Fd(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xd(o,a)){let c=r0(o,a);o=pr(o,o.next),c=pr(c,c.next),Os(o,t,e,i,r,s,0),Os(c,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function zd(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,c=s<o-1?t[s+1]*i:n.length,l=e0(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Gd(l))}r.sort(Od);for(let s=0;s<r.length;s++)e=kd(r[s],e);return e}function Od(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function kd(n,t){const e=Bd(n,t);if(!e)return t;const i=r0(e,n);return pr(i,i.next),pr(e,e.next)}function Bd(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(Qr(n,e))return e;do{if(Qr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&n0(r<l?i:s,r,c,l,r<l?s:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);ks(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Hd(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Hd(n,t){return Ke(n.prev,n,t.prev)<0&&Ke(t.next,n,n.next)<0}function Vd(n,t,e,i){let r=n;do r.z===0&&(r.z=Gl(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Wd(r)}function Wd(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Gl(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Gd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function n0(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function xs(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&n0(n,t,e,i,r,s,o,a)}function Xd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qd(n,t)&&(ks(n,t)&&ks(t,n)&&$d(n,t)&&(Ke(n.prev,n,t.prev)||Ke(n,t.prev,t))||Qr(n,t)&&Ke(n.prev,n,n.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Qr(n,t){return n.x===t.x&&n.y===t.y}function i0(n,t,e,i){const r=vo(Ke(n,t,e)),s=vo(Ke(n,t,i)),o=vo(Ke(e,i,n)),a=vo(Ke(e,i,t));return!!(r!==s&&o!==a||r===0&&go(n,e,t)||s===0&&go(n,i,t)||o===0&&go(e,n,i)||a===0&&go(e,t,i))}function go(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function vo(n){return n>0?1:n<0?-1:0}function qd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&i0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ks(n,t){return Ke(n.prev,n,n.next)<0?Ke(n,t,n.next)>=0&&Ke(n,n.prev,t)>=0:Ke(n,t,n.prev)<0||Ke(n,n.next,t)<0}function $d(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function r0(n,t){const e=Xl(n.i,n.x,n.y),i=Xl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function pu(n,t,e,i){const r=Xl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Bs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yd(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class jd{static triangulate(t,e,i=2){return Ld(t,e,i)}}class Ai{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Ai.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];mu(t),gu(i,t);let o=t.length;e.forEach(mu);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,gu(i,e[c]);const a=jd.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function mu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function gu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class yc extends ae{constructor(t=new ra([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:h-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Zd;let x,_=!1,w,S,E,A;p&&(x=p.getSpacedPoints(u),_=!0,d=!1,w=p.computeFrenetFrames(u,!1),S=new P,E=new P,A=new P),d||(g=0,h=0,m=0,v=0);const M=a.extractPoints(l);let b=M.shape;const T=M.holes;if(!Ai.isClockWise(b)){b=b.reverse();for(let $=0,Z=T.length;$<Z;$++){const it=T[$];Ai.isClockWise(it)&&(T[$]=it.reverse())}}function O($){const it=10000000000000001e-36;let J=$[0];for(let vt=1;vt<=$.length;vt++){const _t=vt%$.length,wt=$[_t],xt=wt.x-J.x,Ct=wt.y-J.y,N=xt*xt+Ct*Ct,C=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(J.x),Math.abs(J.y)),Y=it*C*C;if(N<=Y){$.splice(_t,1),vt--;continue}J=wt}}O(b),T.forEach(O);const z=T.length,F=b;for(let $=0;$<z;$++){const Z=T[$];b=b.concat(Z)}function U($,Z,it){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(Z,it)}const k=b.length;function D($,Z,it){let J,vt,_t;const wt=$.x-Z.x,xt=$.y-Z.y,Ct=it.x-$.x,N=it.y-$.y,C=wt*wt+xt*xt,Y=wt*N-xt*Ct;if(Math.abs(Y)>Number.EPSILON){const et=Math.sqrt(C),St=Math.sqrt(Ct*Ct+N*N),ft=Z.x-xt/et,$t=Z.y+wt/et,Lt=it.x-N/St,Vt=it.y+Ct/St,at=((Lt-ft)*N-(Vt-$t)*Ct)/(wt*N-xt*Ct);J=ft+wt*at-$.x,vt=$t+xt*at-$.y;const q=J*J+vt*vt;if(q<=2)return new kt(J,vt);_t=Math.sqrt(q/2)}else{let et=!1;wt>Number.EPSILON?Ct>Number.EPSILON&&(et=!0):wt<-Number.EPSILON?Ct<-Number.EPSILON&&(et=!0):Math.sign(xt)===Math.sign(N)&&(et=!0),et?(J=-xt,vt=wt,_t=Math.sqrt(C)):(J=wt,vt=xt,_t=Math.sqrt(C/2))}return new kt(J/_t,vt/_t)}const H=[];for(let $=0,Z=F.length,it=Z-1,J=$+1;$<Z;$++,it++,J++)it===Z&&(it=0),J===Z&&(J=0),H[$]=D(F[$],F[it],F[J]);const G=[];let W,X=H.concat();for(let $=0,Z=z;$<Z;$++){const it=T[$];W=[];for(let J=0,vt=it.length,_t=vt-1,wt=J+1;J<vt;J++,_t++,wt++)_t===vt&&(_t=0),wt===vt&&(wt=0),W[J]=D(it[J],it[_t],it[wt]);G.push(W),X=X.concat(W)}let st;if(g===0)st=Ai.triangulateShape(F,T);else{const $=[],Z=[];for(let it=0;it<g;it++){const J=it/g,vt=h*Math.cos(J*Math.PI/2),_t=m*Math.sin(J*Math.PI/2)+v;for(let wt=0,xt=F.length;wt<xt;wt++){const Ct=U(F[wt],H[wt],_t);Nt(Ct.x,Ct.y,-vt),J===0&&$.push(Ct)}for(let wt=0,xt=z;wt<xt;wt++){const Ct=T[wt];W=G[wt];const N=[];for(let C=0,Y=Ct.length;C<Y;C++){const et=U(Ct[C],W[C],_t);Nt(et.x,et.y,-vt),J===0&&N.push(et)}J===0&&Z.push(N)}}st=Ai.triangulateShape($,Z)}const ot=st.length,V=m+v;for(let $=0;$<k;$++){const Z=d?U(b[$],X[$],V):b[$];_?(E.copy(w.normals[0]).multiplyScalar(Z.x),S.copy(w.binormals[0]).multiplyScalar(Z.y),A.copy(x[0]).add(E).add(S),Nt(A.x,A.y,A.z)):Nt(Z.x,Z.y,0)}for(let $=1;$<=u;$++)for(let Z=0;Z<k;Z++){const it=d?U(b[Z],X[Z],V):b[Z];_?(E.copy(w.normals[$]).multiplyScalar(it.x),S.copy(w.binormals[$]).multiplyScalar(it.y),A.copy(x[$]).add(E).add(S),Nt(A.x,A.y,A.z)):Nt(it.x,it.y,f/u*$)}for(let $=g-1;$>=0;$--){const Z=$/g,it=h*Math.cos(Z*Math.PI/2),J=m*Math.sin(Z*Math.PI/2)+v;for(let vt=0,_t=F.length;vt<_t;vt++){const wt=U(F[vt],H[vt],J);Nt(wt.x,wt.y,f+it)}for(let vt=0,_t=T.length;vt<_t;vt++){const wt=T[vt];W=G[vt];for(let xt=0,Ct=wt.length;xt<Ct;xt++){const N=U(wt[xt],W[xt],J);_?Nt(N.x,N.y+x[u-1].y,x[u-1].x+it):Nt(N.x,N.y,f+it)}}}nt(),gt();function nt(){const $=r.length/3;if(d){let Z=0,it=k*Z;for(let J=0;J<ot;J++){const vt=st[J];yt(vt[2]+it,vt[1]+it,vt[0]+it)}Z=u+g*2,it=k*Z;for(let J=0;J<ot;J++){const vt=st[J];yt(vt[0]+it,vt[1]+it,vt[2]+it)}}else{for(let Z=0;Z<ot;Z++){const it=st[Z];yt(it[2],it[1],it[0])}for(let Z=0;Z<ot;Z++){const it=st[Z];yt(it[0]+k*u,it[1]+k*u,it[2]+k*u)}}i.addGroup($,r.length/3-$,0)}function gt(){const $=r.length/3;let Z=0;Tt(F,Z),Z+=F.length;for(let it=0,J=T.length;it<J;it++){const vt=T[it];Tt(vt,Z),Z+=vt.length}i.addGroup($,r.length/3-$,1)}function Tt($,Z){let it=$.length;for(;--it>=0;){const J=it;let vt=it-1;vt<0&&(vt=$.length-1);for(let _t=0,wt=u+g*2;_t<wt;_t++){const xt=k*_t,Ct=k*(_t+1),N=Z+J+xt,C=Z+vt+xt,Y=Z+vt+Ct,et=Z+J+Ct;Ot(N,C,Y,et)}}}function Nt($,Z,it){c.push($),c.push(Z),c.push(it)}function yt($,Z,it){ct($),ct(Z),ct(it);const J=r.length/3,vt=y.generateTopUV(i,r,J-3,J-2,J-1);R(vt[0]),R(vt[1]),R(vt[2])}function Ot($,Z,it,J){ct($),ct(Z),ct(J),ct(Z),ct(it),ct(J);const vt=r.length/3,_t=y.generateSideWallUV(i,r,vt-6,vt-3,vt-2,vt-1);R(_t[0]),R(_t[1]),R(_t[3]),R(_t[1]),R(_t[2]),R(_t[3])}function ct($){r.push(c[$*3+0]),r.push(c[$*3+1]),r.push(c[$*3+2])}function R($){s.push($.x),s.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kd(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Xo[r.type]().fromJSON(r)),new yc(i,t.options)}}const Zd={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new kt(s,o),new kt(a,c),new kt(l,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],d=t[r*3],h=t[r*3+1],m=t[r*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new kt(o,1-c),new kt(l,1-f),new kt(d,1-m),new kt(v,1-p)]:[new kt(a,1-c),new kt(u,1-f),new kt(h,1-m),new kt(g,1-p)]}};function Kd(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sa extends vc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sa(t.radius,t.detail)}}class Vs extends ae{constructor(t=[new kt(0,-.5),new kt(.5,0),new kt(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=Se(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/e,f=new P,d=new kt,h=new P,m=new P,v=new P;let g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-g,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-g,h.z=p*0,m.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(m)}for(let y=0;y<=e;y++){const x=i+y*u*r,_=Math.sin(x),w=Math.cos(x);for(let S=0;S<=t.length-1;S++){f.x=t[S].x*_,f.y=t[S].y,f.z=t[S].x*w,o.push(f.x,f.y,f.z),d.x=y/e,d.y=S/(t.length-1),a.push(d.x,d.y);const E=c[3*S+0]*_,A=c[3*S+1],M=c[3*S+0]*w;l.push(E,A,M)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,w=_,S=_+t.length,E=_+t.length+1,A=_+1;s.push(w,S,A),s.push(E,A,S)}this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.points,t.segments,t.phiStart,t.phiLength)}}class dn extends ae{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,d=e/c,h=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const y=p*d-o;for(let x=0;x<l;x++){const _=x*f-s;m.push(_,-y,0),v.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+l*p,_=y+l*(p+1),w=y+1+l*(p+1),S=y+1+l*p;h.push(x,_,S),h.push(_,w,S)}this.setIndex(h),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mc extends ae{constructor(t=new ra([new kt(0,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(o,2));function l(u){const f=r.length/3,d=u.extractPoints(e);let h=d.shape;const m=d.holes;Ai.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];Ai.isClockWise(y)===!0&&(m[g]=y.reverse())}const v=Ai.triangulateShape(h,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];h=h.concat(y)}for(let g=0,p=h.length;g<p;g++){const y=h[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){const y=v[g],x=y[0]+f,_=y[1]+f,w=y[2]+f;i.push(x,_,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Jd(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];i.push(o)}return new Mc(i,t.curveSegments)}}function Jd(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class Ws extends ae{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new P,d=new P,h=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let _=0;p===0&&o===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const S=w/e;f.x=-t*Math.cos(r+S*s)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(r+S*s)*Math.sin(o+x*a),m.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(S+_,1-x),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=u[p][y+1],_=u[p][y],w=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&h.push(x,_,S),(p!==i-1||c<Math.PI)&&h.push(_,w,S)}this.setIndex(h),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cr extends ae{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new P,f=new P,d=new P;for(let h=0;h<=i;h++)for(let m=0;m<=r;m++){const v=m/r*s,g=h/i*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(h/i)}for(let h=1;h<=i;h++)for(let m=1;m<=r;m++){const v=(r+1)*h+m-1,g=(r+1)*(h-1)+m-1,p=(r+1)*(h-1)+m,y=(r+1)*h+m;o.push(v,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hs extends ae{constructor(t=new Qh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new kt;let u=new P;const f=[],d=[],h=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(h,2));function v(){for(let x=0;x<e;x++)g(x);g(s===!1?e:0),y(),p()}function g(x){u=t.getPointAt(x/e,u);const _=o.normals[x],w=o.binormals[x];for(let S=0;S<=r;S++){const E=S/r*Math.PI*2,A=Math.sin(E),M=-Math.cos(E);c.x=M*_.x+A*w.x,c.y=M*_.y+A*w.y,c.z=M*_.z+A*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=r;_++){const w=(r+1)*(x-1)+(_-1),S=(r+1)*x+(_-1),E=(r+1)*x+_,A=(r+1)*(x-1)+_;m.push(w,S,A),m.push(S,E,A)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=r;_++)l.x=x/e,l.y=_/r,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Hs(new Xo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Qd extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tp extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Oa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ep{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const h=l[f],m=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const np=new ep;class Sc{constructor(t){this.manager=t!==void 0?t:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ur=new WeakMap;class ip extends Sc{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Oa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=Ur.get(o);f===void 0&&(f=[],Ur.set(o,f)),f.push({onLoad:e,onError:r})}return o}const a=Us("img");function c(){u(),e&&e(this);const f=Ur.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Ur.delete(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),Oa.remove(`image:${t}`);const d=Ur.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onError&&m.onError(f)}Ur.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oa.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class oa extends Sc{constructor(t){super(t)}load(t,e,i,r){const s=new xn,o=new ip(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class rp extends Wh{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sp extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const vu=new le;class xu{constructor(t,e,i=0,r=1/0){this.ray=new ia(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vu),this}intersectObject(t,e=!0,i=[]){return ql(t,this,i,e),i.sort(_u),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ql(t[r],this,i,e);return i.sort(_u),i}}function _u(n,t){return n.distance-t.distance}function ql(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ql(s[o],t,e,!0)}}function yu(n,t,e,i){const r=op(i);switch(e){case Lh:return n*t;case qi:return n*t/r.components*r.byteLength;case hc:return n*t/r.components*r.byteLength;case Uh:return n*t*2/r.components*r.byteLength;case fc:return n*t*2/r.components*r.byteLength;case Ih:return n*t*3/r.components*r.byteLength;case ri:return n*t*4/r.components*r.byteLength;case dc:return n*t*4/r.components*r.byteLength;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:case vl:return Math.max(n,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(n,8)*Math.max(t,8)/2;case xl:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Fl:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ol:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function op(n){switch(n){case oi:case Ch:return{byteLength:1,components:1};case Ps:case Rh:case mr:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case hr:case lc:case li:return{byteLength:4,components:1};case Ph:case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function s0(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ap(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<f.length;h++){const m=f[d],v=f[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,m=f.length;h<m;h++){const v=f[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:vp,begin_vertex:xp,beginnormal_vertex:_p,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Pp,common:Dp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:zp,colorspace_fragment:Op,colorspace_pars_fragment:kp,envmap_fragment:Bp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:tm,envmap_vertex:Gp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:$p,fog_pars_fragment:Yp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:vm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:ym,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:wm,morphtarget_vertex:bm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:zm,project_vertex:Om,dithering_fragment:km,dithering_pars_fragment:Bm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:$m,skinning_pars_vertex:Ym,skinning_vertex:jm,skinnormal_vertex:Zm,specularmap_fragment:Km,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:rg,uv_vertex:sg,worldpos_vertex:og,background_vert:ag,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:ug,cube_vert:hg,cube_frag:fg,depth_vert:dg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:vg,equirect_frag:xg,linedashed_vert:_g,linedashed_frag:yg,meshbasic_vert:Mg,meshbasic_frag:Sg,meshlambert_vert:wg,meshlambert_frag:bg,meshmatcap_vert:Eg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Pg,meshphysical_vert:Dg,meshphysical_frag:Lg,meshtoon_vert:Ig,meshtoon_frag:Ug,points_vert:Ng,points_frag:Fg,shadow_vert:zg,shadow_frag:Og,sprite_vert:kg,sprite_frag:Bg},Wt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},ai={basic:{uniforms:An([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:An([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:An([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:An([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:An([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:An([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:An([Wt.points,Wt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:An([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:An([Wt.common,Wt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:An([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:An([Wt.sprite,Wt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:An([Wt.common,Wt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:An([Wt.lights,Wt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};ai.physical={uniforms:An([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const xo={r:0,b:0,g:0},er=new tn,Hg=new le;function Vg(n,t,e,i,r,s,o){const a=new pe(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const w=m(x);w===null?p(a,c):w&&w.isColor&&(p(w,1),_=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===na)?(u===void 0&&(u=new ue(new ne(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Kr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),er.copy(_.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(er)),u.material.toneMapped=Re.getTransfer(w.colorSpace)!==ke,(f!==w||d!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ue(new dn(2,2),new Ae({name:"BackgroundMaterial",uniforms:Kr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Re.getTransfer(w.colorSpace)!==ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(xo,Vh(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:g,dispose:y}}function Wg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,T,I,O,z){let F=!1;const U=f(O,I,T);s!==U&&(s=U,l(s.object)),F=h(b,O,I,z),F&&m(b,O,I,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(b,T,I,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,T,I){const O=I.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let F=z[T.id];F===void 0&&(F={},z[T.id]=F);let U=F[O];return U===void 0&&(U=d(c()),F[O]=U),U}function d(b){const T=[],I=[],O=[];for(let z=0;z<e;z++)T[z]=0,I[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:O,object:b,attributes:{},index:null}}function h(b,T,I,O){const z=s.attributes,F=T.attributes;let U=0;const k=I.getAttributes();for(const D in k)if(k[D].location>=0){const G=z[D];let W=F[D];if(W===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),G===void 0||G.attribute!==W||W&&G.data!==W.data)return!0;U++}return s.attributesNum!==U||s.index!==O}function m(b,T,I,O){const z={},F=T.attributes;let U=0;const k=I.getAttributes();for(const D in k)if(k[D].location>=0){let G=F[D];G===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(G=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(G=b.instanceColor));const W={};W.attribute=G,G&&G.data&&(W.data=G.data),z[D]=W,U++}s.attributes=z,s.attributesNum=U,s.index=O}function v(){const b=s.newAttributes;for(let T=0,I=b.length;T<I;T++)b[T]=0}function g(b){p(b,0)}function p(b,T){const I=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;I[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),z[b]!==T&&(n.vertexAttribDivisor(b,T),z[b]=T)}function y(){const b=s.newAttributes,T=s.enabledAttributes;for(let I=0,O=T.length;I<O;I++)T[I]!==b[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function x(b,T,I,O,z,F,U){U===!0?n.vertexAttribIPointer(b,T,I,z,F):n.vertexAttribPointer(b,T,I,O,z,F)}function _(b,T,I,O){v();const z=O.attributes,F=I.getAttributes(),U=T.defaultAttributeValues;for(const k in F){const D=F[k];if(D.location>=0){let H=z[k];if(H===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),H!==void 0){const G=H.normalized,W=H.itemSize,X=t.get(H);if(X===void 0)continue;const st=X.buffer,ot=X.type,V=X.bytesPerElement,nt=ot===n.INT||ot===n.UNSIGNED_INT||H.gpuType===lc;if(H.isInterleavedBufferAttribute){const gt=H.data,Tt=gt.stride,Nt=H.offset;if(gt.isInstancedInterleavedBuffer){for(let yt=0;yt<D.locationSize;yt++)p(D.location+yt,gt.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let yt=0;yt<D.locationSize;yt++)g(D.location+yt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let yt=0;yt<D.locationSize;yt++)x(D.location+yt,W/D.locationSize,ot,G,Tt*V,(Nt+W/D.locationSize*yt)*V,nt)}else{if(H.isInstancedBufferAttribute){for(let gt=0;gt<D.locationSize;gt++)p(D.location+gt,H.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let gt=0;gt<D.locationSize;gt++)g(D.location+gt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let gt=0;gt<D.locationSize;gt++)x(D.location+gt,W/D.locationSize,ot,G,W*V,W/D.locationSize*gt*V,nt)}}else if(U!==void 0){const G=U[k];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(D.location,G);break;case 3:n.vertexAttrib3fv(D.location,G);break;case 4:n.vertexAttrib4fv(D.location,G);break;default:n.vertexAttrib1fv(D.location,G)}}}}y()}function w(){A();for(const b in i){const T=i[b];for(const I in T){const O=T[I];for(const z in O)u(O[z].object),delete O[z];delete T[I]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const T=i[b.id];for(const I in T){const O=T[I];for(const z in O)u(O[z].object),delete O[z];delete T[I]}delete i[b.id]}function E(b){for(const T in i){const I=i[T];if(I[b.id]===void 0)continue;const O=I[b.id];for(const z in O)u(O[z].object),delete O[z];delete I[b.id]}}function A(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Gg(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),e.update(u,i,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];e.update(h,i,1)}function c(l,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*d[v];e.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ri&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==oi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==li&&!A)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:w,maxSamples:S}}function qg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ir,a=new ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const y=s?0:i,x=y*4;let _=p.clippingState||null;c.value=_,_=u(m,d,x,h);for(let w=0;w!==x;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,h,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=h+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=h;x!==v;++x,_+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function $g(n){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=jr:a===fl&&(o.mapping=Zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hl||a===fl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fd(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const kr=4,Mu=[.125,.215,.35,.446,.526,.582],or=20,ka=new rp,Su=new pe;let Ba=null,Ha=0,Va=0,Wa=!1;const rr=(1+Math.sqrt(5))/2,Nr=1/rr,wu=[new P(-rr,Nr,0),new P(rr,Nr,0),new P(-Nr,0,rr),new P(Nr,0,rr),new P(0,rr,-Nr),new P(0,rr,Nr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Yg=new P;class bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=Yg}=s;Ba=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,Ha,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jr||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:mr,format:ri,colorSpace:fr,depthBuffer:!1},r=Eu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(s)),this._blurMaterial=Zg(s,t,e)}return r}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,i,r,s){const c=new Yn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Su),f.toneMapping=Xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new kh({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new ue(new ne,v);let p=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(Su),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;_o(r,_*w,x>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(g,c),f.render(t,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===jr||t.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;_o(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ka)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wu[(r-s-1)%wu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ue(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*or-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):or;g>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${or}`);const p=[];let y=0;for(let E=0;E<or;++E){const A=E/v,M=Math.exp(-A*A/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const _=this._sizeLods[r],w=3*_*(r>x-kr?r-x+kr:0),S=4*(this._cubeSize-_);_o(e,w,S,3*_,2*_),c.setRenderTarget(e),c.render(f,ka)}}function jg(n){const t=[],e=[],i=[];let r=n;const s=n-kr+1+Mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-kr?c=Mu[o-n+kr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*h),x=new Float32Array(g*m*h),_=new Float32Array(p*m*h);for(let S=0;S<h;S++){const E=S%3*2/3-1,A=S>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(M,v*m*S),x.set(d,g*m*S);const b=[S,S,S,S,S,S];_.set(b,p*m*S)}const w=new ae;w.setAttribute("position",new he(y,v)),w.setAttribute("uv",new he(x,g)),w.setAttribute("faceIndex",new he(_,p)),t.push(w),r>kr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Eu(n,t,e){const i=new dr(n,t,e);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Zg(n,t,e){const i=new Float32Array(or),r=new P(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Tu(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Au(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===hl||c===fl,u=c===jr||c===Zr;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new bu(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(e===null&&(e=new bu(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Jg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qg(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(t.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)t.update(d[h],n.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,m=f.attributes.position;let v=0;if(h!==null){const y=h.array;v=h.version;for(let x=0,_=y.length;x<_;x+=3){const w=y[x+0],S=y[x+1],E=y[x+2];d.push(w,S,S,E,E,w)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const w=x+0,S=x+1,E=x+2;d.push(w,S,S,E,E,w)}}else return;const g=new(Fh(d)?Hh:Bh)(d,1);g.version=v;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function tv(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),e.update(h,i,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];e.update(g,i,1)}function f(d,h,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=h[y]*v[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ev(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function nv(n,t,e){const i=new WeakMap,r=new Ee;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;h===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const S=new Float32Array(_*w*4*f),E=new zh(S,_,w,f);E.type=li,E.needsUpdate=!0;const A=x*4;for(let b=0;b<f;b++){const T=g[b],I=p[b],O=y[b],z=_*w*4*b;for(let F=0;F<T.count;F++){const U=F*A;h===!0&&(r.fromBufferAttribute(T,F),S[z+U+0]=r.x,S[z+U+1]=r.y,S[z+U+2]=r.z,S[z+U+3]=0),m===!0&&(r.fromBufferAttribute(I,F),S[z+U+4]=r.x,S[z+U+5]=r.y,S[z+U+6]=r.z,S[z+U+7]=0),v===!0&&(r.fromBufferAttribute(O,F),S[z+U+8]=r.x,S[z+U+9]=r.y,S[z+U+10]=r.z,S[z+U+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new kt(_,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];const m=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function iv(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const o0=new xn,Cu=new $h(1,1),a0=new zh,l0=new Xf,c0=new Gh,Ru=[],Pu=[],Du=new Float32Array(16),Lu=new Float32Array(9),Iu=new Float32Array(4);function ss(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ru[r];if(s===void 0&&(s=new Float32Array(r),Ru[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function aa(n,t){let e=Pu[t];e===void 0&&(e=new Int32Array(t),Pu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function lv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),un(e,i)}}function cv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),un(e,i)}}function uv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),un(e,i)}}function hv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function mv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function _v(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=Nh,s=Cu):s=o0,e.setTexture2D(t||s,r)}function yv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||l0,r)}function Mv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||c0,r)}function Sv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||a0,r)}function wv(n){switch(n){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}function bv(n,t){n.uniform1fv(this.addr,t)}function Ev(n,t){const e=ss(t,this.size,2);n.uniform2fv(this.addr,e)}function Tv(n,t){const e=ss(t,this.size,3);n.uniform3fv(this.addr,e)}function Av(n,t){const e=ss(t,this.size,4);n.uniform4fv(this.addr,e)}function Cv(n,t){const e=ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rv(n,t){const e=ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pv(n,t){const e=ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dv(n,t){n.uniform1iv(this.addr,t)}function Lv(n,t){n.uniform2iv(this.addr,t)}function Iv(n,t){n.uniform3iv(this.addr,t)}function Uv(n,t){n.uniform4iv(this.addr,t)}function Nv(n,t){n.uniform1uiv(this.addr,t)}function Fv(n,t){n.uniform2uiv(this.addr,t)}function zv(n,t){n.uniform3uiv(this.addr,t)}function Ov(n,t){n.uniform4uiv(this.addr,t)}function kv(n,t,e){const i=this.cache,r=t.length,s=aa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||o0,s[o])}function Bv(n,t,e){const i=this.cache,r=t.length,s=aa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||l0,s[o])}function Hv(n,t,e){const i=this.cache,r=t.length,s=aa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||c0,s[o])}function Vv(n,t,e){const i=this.cache,r=t.length,s=aa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||a0,s[o])}function Wv(n){switch(n){case 5126:return bv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Dv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return Fv;case 36295:return zv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Vv}}class Gv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wv(e.type)}}class Xv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wv(e.type)}}class qv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Uu(n,t){n.seq.push(t),n.map[t.id]=t}function $v(n,t,e){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),o=Ga.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Uu(e,l===void 0?new Gv(a,n,t):new Xv(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new qv(a),Uu(e,f)),e=f}}}class No{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);$v(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Nu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Yv=37297;let jv=0;function Zv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Fu=new ve;function Kv(n){Re._getMatrix(Fu,Re.workingColorSpace,n);const t=`mat3( ${Fu.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(n)){case ko:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Zv(n.getShaderSource(t),a)}else return s}function Jv(n,t){const e=Kv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qv(n,t){let e;switch(t){case vf:e="Linear";break;case xf:e="Reinhard";break;case _f:e="Cineon";break;case yf:e="ACESFilmic";break;case Sf:e="AgX";break;case wf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yo=new P;function t1(){Re.getLuminanceCoefficients(yo);const n=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function n1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function i1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function _s(n){return n!==""}function Ou(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(r1,o1)}const s1=new Map;function o1(n,t){let e=xe[t];if(e===void 0){const i=s1.get(t);if(i!==void 0)e=xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(a1,l1)}function l1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===j0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function u1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Zr:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zr:t="ENVMAP_MODE_REFRACTION";break}return t}function f1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Th:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function d1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function p1(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=c1(e),l=u1(e),u=h1(e),f=f1(e),d=d1(e),h=e1(e),m=n1(s),v=r.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_s).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(g=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?xe.tonemapping_pars_fragment:"",e.toneMapping!==Xi?Qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Jv("linearToOutputTexel",e.outputColorSpace),t1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),o=$l(o),o=Ou(o,e),o=ku(o,e),a=$l(a),a=Ou(a,e),a=ku(a,e),o=Bu(o),a=Bu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+o,_=y+p+a,w=Nu(r,r.VERTEX_SHADER,x),S=Nu(r,r.FRAGMENT_SHADER,_);r.attachShader(v,w),r.attachShader(v,S),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(T){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(w)||"",z=r.getShaderInfoLog(S)||"",F=I.trim(),U=O.trim(),k=z.trim();let D=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,S);else{const G=zu(r,w,"vertex"),W=zu(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+G+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||k==="")&&(H=!1);H&&(T.diagnostics={runnable:D,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(w),r.deleteShader(S),A=new No(r,v),M=i1(r,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,Yv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let m1=0;class g1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new v1(t),e.set(t,i)),i}}class v1{constructor(t){this.id=m1++,this.code=t,this.usedTimes=0}}function x1(n,t,e,i,r,s,o){const a=new mc,c=new g1,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,b,T,I,O){const z=I.fog,F=O.geometry,U=M.isMeshStandardMaterial?I.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),D=k&&k.mapping===na?k.image.height:null,H=m[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const G=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,W=G!==void 0?G.length:0;let X=0;F.morphAttributes.position!==void 0&&(X=1),F.morphAttributes.normal!==void 0&&(X=2),F.morphAttributes.color!==void 0&&(X=3);let st,ot,V,nt;if(H){const te=ai[H];st=te.vertexShader,ot=te.fragmentShader}else st=M.vertexShader,ot=M.fragmentShader,c.update(M),V=c.getVertexShaderID(M),nt=c.getFragmentShaderID(M);const gt=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,yt=O.isBatchedMesh===!0,Ot=!!M.map,ct=!!M.matcap,R=!!k,$=!!M.aoMap,Z=!!M.lightMap,it=!!M.bumpMap,J=!!M.normalMap,vt=!!M.displacementMap,_t=!!M.emissiveMap,wt=!!M.metalnessMap,xt=!!M.roughnessMap,Ct=M.anisotropy>0,N=M.clearcoat>0,C=M.dispersion>0,Y=M.iridescence>0,et=M.sheen>0,St=M.transmission>0,ft=Ct&&!!M.anisotropyMap,$t=N&&!!M.clearcoatMap,Lt=N&&!!M.clearcoatNormalMap,Vt=N&&!!M.clearcoatRoughnessMap,at=Y&&!!M.iridescenceMap,q=Y&&!!M.iridescenceThicknessMap,bt=et&&!!M.sheenColorMap,Q=et&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Et=!!M.specularColorMap,Ht=!!M.specularIntensityMap,B=St&&!!M.transmissionMap,Mt=St&&!!M.thicknessMap,At=!!M.gradientMap,lt=!!M.alphaMap,ut=M.alphaTest>0,ht=!!M.alphaHash,Ft=!!M.extensions;let Dt=Xi;M.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const Gt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:ot,defines:M.defines,customVertexShaderID:V,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:yt,batchingColor:yt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:Ot,matcap:ct,envMap:R,envMapMode:R&&k.mapping,envMapCubeUVHeight:D,aoMap:$,lightMap:Z,bumpMap:it,normalMap:J,displacementMap:d&&vt,emissiveMap:_t,normalMapObjectSpace:J&&M.normalMapType===Cf,normalMapTangentSpace:J&&M.normalMapType===Af,metalnessMap:wt,roughnessMap:xt,anisotropy:Ct,anisotropyMap:ft,clearcoat:N,clearcoatMap:$t,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,dispersion:C,iridescence:Y,iridescenceMap:at,iridescenceThicknessMap:q,sheen:et,sheenColorMap:bt,sheenRoughnessMap:Q,specularMap:Rt,specularColorMap:Et,specularIntensityMap:Ht,transmission:St,transmissionMap:B,thicknessMap:Mt,gradientMap:At,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:ht,combine:M.combine,mapUv:Ot&&v(M.map.channel),aoMapUv:$&&v(M.aoMap.channel),lightMapUv:Z&&v(M.lightMap.channel),bumpMapUv:it&&v(M.bumpMap.channel),normalMapUv:J&&v(M.normalMap.channel),displacementMapUv:vt&&v(M.displacementMap.channel),emissiveMapUv:_t&&v(M.emissiveMap.channel),metalnessMapUv:wt&&v(M.metalnessMap.channel),roughnessMapUv:xt&&v(M.roughnessMap.channel),anisotropyMapUv:ft&&v(M.anisotropyMap.channel),clearcoatMapUv:$t&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:q&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Q&&v(M.sheenRoughnessMap.channel),specularMapUv:Rt&&v(M.specularMap.channel),specularColorMapUv:Et&&v(M.specularColorMap.channel),specularIntensityMapUv:Ht&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:Mt&&v(M.thicknessMap.channel),alphaMapUv:lt&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(J||Ct),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ot||lt),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&Re.getTransfer(M.map.colorSpace)===ke,decodeVideoTextureEmissive:_t&&M.emissiveMap.isVideoTexture===!0&&Re.getTransfer(M.emissiveMap.colorSpace)===ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===je,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)b.push(T),b.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const b=m[M.type];let T;if(b){const I=ai[b];T=ld.clone(I.uniforms)}else T=M.uniforms;return T}function w(M,b){let T;for(let I=0,O=u.length;I<O;I++){const z=u[I];if(z.cacheKey===b){T=z,++T.usedTimes;break}}return T===void 0&&(T=new p1(n,b,M,s),u.push(T)),T}function S(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:A}}function _1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function y1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,h,m,v,g){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:m,renderOrder:f.renderOrder,z:v,group:g},n[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=v,p.group=g),t++,p}function a(f,d,h,m,v,g){const p=o(f,d,h,m,v,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):e.push(p)}function c(f,d,h,m,v,g){const p=o(f,d,h,m,v,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):e.unshift(p)}function l(f,d){e.length>1&&e.sort(f||y1),i.length>1&&i.sort(d||Vu),r.length>1&&r.sort(d||Vu)}function u(){for(let f=t,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function M1(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Wu,n.set(i,[o])):r>=s.length?(o=new Wu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function S1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new pe};break;case"SpotLight":e={position:new P,direction:new P,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function w1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let b1=0;function E1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function T1(n){const t=new S1,e=w1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const r=new P,s=new le,o=new le;function a(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,w=0,S=0,E=0;l.sort(E1);for(let M=0,b=l.length;M<b;M++){const T=l[M],I=T.color,O=T.intensity,z=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*O,f+=I.g*O,d+=I.b*O;else if(T.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(T.sh.coefficients[U],O);E++}else if(T.isDirectionalLight){const U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const k=T.shadow,D=e.get(T);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,i.directionalShadow[h]=D,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=T.shadow.matrix,y++}i.directional[h]=U,h++}else if(T.isSpotLight){const U=t.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(I).multiplyScalar(O),U.distance=z,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,i.spot[v]=U;const k=T.shadow;if(T.map&&(i.spotLightMap[w]=T.map,w++,k.updateMatrices(T),T.castShadow&&S++),i.spotLightMatrix[v]=k.matrix,T.castShadow){const D=e.get(T);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=F,_++}v++}else if(T.isRectAreaLight){const U=t.get(T);U.color.copy(I).multiplyScalar(O),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=U,g++}else if(T.isPointLight){const U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),U.distance=T.distance,U.decay=T.decay,T.castShadow){const k=T.shadow,D=e.get(T);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=T.shadow.matrix,x++}i.point[m]=U,m++}else if(T.isHemisphereLight){const U=t.get(T);U.skyColor.copy(T.color).multiplyScalar(O),U.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[p]=U,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==h||A.pointLength!==m||A.spotLength!==v||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==_||A.numSpotMaps!==w||A.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,A.directionalLength=h,A.pointLength=m,A.spotLength=v,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=_,A.numSpotMaps=w,A.numLightProbes=E,i.version=b1++)}function c(l,u){let f=0,d=0,h=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(x.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Gu(n){const t=new T1(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function A1(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Gu(n),t.set(r,[a])):s>=o.length?(a=new Gu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P1(n,t,e){let i=new Xh;const r=new kt,s=new kt,o=new Ee,a=new Qd({depthPacking:Tf}),c=new tp,l={},u=e.maxTextureSize,f={[hi]:Dn,[Dn]:hi,[je]:je},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:C1,fragmentShader:R1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new ae;m.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(S,E,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Gi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==_i&&this.type===_i,z=p===_i&&this.type!==_i;for(let F=0,U=S.length;F<U;F++){const k=S[F],D=k.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const H=D.getFrameExtents();if(r.multiply(H),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null||O===!0||z===!0){const W=this.type!==_i?{minFilter:Xn,magFilter:Xn}:{};D.map!==null&&D.map.dispose(),D.map=new dr(r.x,r.y,W),D.map.texture.name=k.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const G=D.getViewportCount();for(let W=0;W<G;W++){const X=D.getViewport(W);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(o),D.updateMatrices(k,W),i=D.getFrustum(),_(E,A,D.camera,k,this.type)}D.isPointLightShadow!==!0&&this.type===_i&&y(D,A),D.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,b,T)};function y(S,E){const A=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new dr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,A,d,v,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,A,h,v,null)}function x(S,E,A,M){let b=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)b=T;else if(b=A.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=b.uuid,O=E.uuid;let z=l[I];z===void 0&&(z={},l[I]=z);let F=z[O];F===void 0&&(F=b.clone(),z[O]=F,E.addEventListener("dispose",w)),b=F}if(b.visible=E.visible,b.wireframe=E.wireframe,M===_i?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=A}return b}function _(S,E,A,M,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===_i)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const O=t.update(S),z=S.material;if(Array.isArray(z)){const F=O.groups;for(let U=0,k=F.length;U<k;U++){const D=F[U],H=z[D.materialIndex];if(H&&H.visible){const G=x(S,H,M,b);S.onBeforeShadow(n,S,E,A,O,G,D),n.renderBufferDirect(A,null,O,G,S,D),S.onAfterShadow(n,S,E,A,O,G,D)}}}else if(z.visible){const F=x(S,z,M,b);S.onBeforeShadow(n,S,E,A,O,F,null),n.renderBufferDirect(A,null,O,F,S,null),S.onAfterShadow(n,S,E,A,O,F,null)}}const I=S.children;for(let O=0,z=I.length;O<z;O++)_(I[O],E,A,M,b)}function w(S){S.target.removeEventListener("dispose",w);for(const A in l){const M=l[A],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const D1={[rl]:sl,[ol]:cl,[al]:ul,[Yr]:ll,[sl]:rl,[cl]:ol,[ul]:al,[ll]:Yr};function L1(n,t){function e(){let B=!1;const Mt=new Ee;let At=null;const lt=new Ee(0,0,0,0);return{setMask:function(ut){At!==ut&&!B&&(n.colorMask(ut,ut,ut,ut),At=ut)},setLocked:function(ut){B=ut},setClear:function(ut,ht,Ft,Dt,Gt){Gt===!0&&(ut*=Dt,ht*=Dt,Ft*=Dt),Mt.set(ut,ht,Ft,Dt),lt.equals(Mt)===!1&&(n.clearColor(ut,ht,Ft,Dt),lt.copy(Mt))},reset:function(){B=!1,At=null,lt.set(-1,0,0,0)}}}function i(){let B=!1,Mt=!1,At=null,lt=null,ut=null;return{setReversed:function(ht){if(Mt!==ht){const Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Mt=ht;const Dt=ut;ut=null,this.setClear(Dt)}},getReversed:function(){return Mt},setTest:function(ht){ht?gt(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(ht){At!==ht&&!B&&(n.depthMask(ht),At=ht)},setFunc:function(ht){if(Mt&&(ht=D1[ht]),lt!==ht){switch(ht){case rl:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=ht}},setLocked:function(ht){B=ht},setClear:function(ht){ut!==ht&&(Mt&&(ht=1-ht),n.clearDepth(ht),ut=ht)},reset:function(){B=!1,At=null,lt=null,ut=null,Mt=!1}}}function r(){let B=!1,Mt=null,At=null,lt=null,ut=null,ht=null,Ft=null,Dt=null,Gt=null;return{setTest:function(te){B||(te?gt(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(te){Mt!==te&&!B&&(n.stencilMask(te),Mt=te)},setFunc:function(te,Ce,Ge){(At!==te||lt!==Ce||ut!==Ge)&&(n.stencilFunc(te,Ce,Ge),At=te,lt=Ce,ut=Ge)},setOp:function(te,Ce,Ge){(ht!==te||Ft!==Ce||Dt!==Ge)&&(n.stencilOp(te,Ce,Ge),ht=te,Ft=Ce,Dt=Ge)},setLocked:function(te){B=te},setClear:function(te){Gt!==te&&(n.clearStencil(te),Gt=te)},reset:function(){B=!1,Mt=null,At=null,lt=null,ut=null,ht=null,Ft=null,Dt=null,Gt=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,w=null,S=null,E=new pe(0,0,0),A=0,M=!1,b=null,T=null,I=null,O=null,z=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=k>=1):D.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=k>=2);let H=null,G={};const W=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),st=new Ee().fromArray(W),ot=new Ee().fromArray(X);function V(B,Mt,At,lt){const ut=new Uint8Array(4),ht=n.createTexture();n.bindTexture(B,ht),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<At;Ft++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(Mt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return ht}const nt={};nt[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(n.DEPTH_TEST),o.setFunc(Yr),it(!1),J(zc),gt(n.CULL_FACE),$(Gi);function gt(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Tt(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Nt(B,Mt){return f[B]!==Mt?(n.bindFramebuffer(B,Mt),f[B]=Mt,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function yt(B,Mt){let At=h,lt=!1;if(B){At=d.get(Mt),At===void 0&&(At=[],d.set(Mt,At));const ut=B.textures;if(At.length!==ut.length||At[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Ft=ut.length;ht<Ft;ht++)At[ht]=n.COLOR_ATTACHMENT0+ht;At.length=ut.length,lt=!0}}else At[0]!==n.BACK&&(At[0]=n.BACK,lt=!0);lt&&n.drawBuffers(At)}function Ot(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const ct={[sr]:n.FUNC_ADD,[K0]:n.FUNC_SUBTRACT,[J0]:n.FUNC_REVERSE_SUBTRACT};ct[Q0]=n.MIN,ct[tf]=n.MAX;const R={[ef]:n.ZERO,[nf]:n.ONE,[rf]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[of]:n.DST_ALPHA,[sf]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[pf]:n.ONE_MINUS_CONSTANT_ALPHA};function $(B,Mt,At,lt,ut,ht,Ft,Dt,Gt,te){if(B===Gi){v===!0&&(Tt(n.BLEND),v=!1);return}if(v===!1&&(gt(n.BLEND),v=!0),B!==Z0){if(B!==g||te!==M){if((p!==sr||_!==sr)&&(n.blendEquation(n.FUNC_ADD),p=sr,_=sr),te)switch(B){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $r:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,x=null,w=null,S=null,E.set(0,0,0),A=0,g=B,M=te}return}ut=ut||Mt,ht=ht||At,Ft=Ft||lt,(Mt!==p||ut!==_)&&(n.blendEquationSeparate(ct[Mt],ct[ut]),p=Mt,_=ut),(At!==y||lt!==x||ht!==w||Ft!==S)&&(n.blendFuncSeparate(R[At],R[lt],R[ht],R[Ft]),y=At,x=lt,w=ht,S=Ft),(Dt.equals(E)===!1||Gt!==A)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Gt),E.copy(Dt),A=Gt),g=B,M=!1}function Z(B,Mt){B.side===je?Tt(n.CULL_FACE):gt(n.CULL_FACE);let At=B.side===Dn;Mt&&(At=!At),it(At),B.blending===Vr&&B.transparent===!1?$(Gi):$(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const lt=B.stencilWrite;a.setTest(lt),lt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),_t(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function J(B){B!==$0?(gt(n.CULL_FACE),B!==T&&(B===zc?n.cullFace(n.BACK):B===Y0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),T=B}function vt(B){B!==I&&(U&&n.lineWidth(B),I=B)}function _t(B,Mt,At){B?(gt(n.POLYGON_OFFSET_FILL),(O!==Mt||z!==At)&&(n.polygonOffset(Mt,At),O=Mt,z=At)):Tt(n.POLYGON_OFFSET_FILL)}function wt(B){B?gt(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function xt(B){B===void 0&&(B=n.TEXTURE0+F-1),H!==B&&(n.activeTexture(B),H=B)}function Ct(B,Mt,At){At===void 0&&(H===null?At=n.TEXTURE0+F-1:At=H);let lt=G[At];lt===void 0&&(lt={type:void 0,texture:void 0},G[At]=lt),(lt.type!==B||lt.texture!==Mt)&&(H!==At&&(n.activeTexture(At),H=At),n.bindTexture(B,Mt||nt[B]),lt.type=B,lt.texture=Mt)}function N(){const B=G[H];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(B){st.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),st.copy(B))}function Q(B){ot.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ot.copy(B))}function Rt(B,Mt){let At=l.get(Mt);At===void 0&&(At=new WeakMap,l.set(Mt,At));let lt=At.get(B);lt===void 0&&(lt=n.getUniformBlockIndex(Mt,B.name),At.set(B,lt))}function Et(B,Mt){const lt=l.get(Mt).get(B);c.get(Mt)!==lt&&(n.uniformBlockBinding(Mt,lt,B.__bindingPointIndex),c.set(Mt,lt))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},H=null,G={},f={},d=new WeakMap,h=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,w=null,S=null,E=new pe(0,0,0),A=0,M=!1,b=null,T=null,I=null,O=null,z=null,st.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:gt,disable:Tt,bindFramebuffer:Nt,drawBuffers:yt,useProgram:Ot,setBlending:$,setMaterial:Z,setFlipSided:it,setCullFace:J,setLineWidth:vt,setPolygonOffset:_t,setScissorTest:wt,activeTexture:xt,bindTexture:Ct,unbindTexture:N,compressedTexImage2D:C,compressedTexImage3D:Y,texImage2D:at,texImage3D:q,updateUBOMapping:Rt,uniformBlockBinding:Et,texStorage2D:Lt,texStorage3D:Vt,texSubImage2D:et,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:$t,scissor:bt,viewport:Q,reset:Ht}}function I1(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,C){return h?new OffscreenCanvas(N,C):Us("canvas")}function v(N,C,Y){let et=1;const St=Ct(N);if((St.width>Y||St.height>Y)&&(et=Y/Math.max(St.width,St.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(et*St.width),$t=Math.floor(et*St.height);f===void 0&&(f=m(ft,$t));const Lt=C?m(ft,$t):f;return Lt.width=ft,Lt.height=$t,Lt.getContext("2d").drawImage(N,0,0,ft,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+$t+")."),Lt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){n.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(N,C,Y,et,St=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=C;if(C===n.RED&&(Y===n.FLOAT&&(ft=n.R32F),Y===n.HALF_FLOAT&&(ft=n.R16F),Y===n.UNSIGNED_BYTE&&(ft=n.R8)),C===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ft=n.R8UI),Y===n.UNSIGNED_SHORT&&(ft=n.R16UI),Y===n.UNSIGNED_INT&&(ft=n.R32UI),Y===n.BYTE&&(ft=n.R8I),Y===n.SHORT&&(ft=n.R16I),Y===n.INT&&(ft=n.R32I)),C===n.RG&&(Y===n.FLOAT&&(ft=n.RG32F),Y===n.HALF_FLOAT&&(ft=n.RG16F),Y===n.UNSIGNED_BYTE&&(ft=n.RG8)),C===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ft=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ft=n.RG16UI),Y===n.UNSIGNED_INT&&(ft=n.RG32UI),Y===n.BYTE&&(ft=n.RG8I),Y===n.SHORT&&(ft=n.RG16I),Y===n.INT&&(ft=n.RG32I)),C===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),Y===n.UNSIGNED_INT&&(ft=n.RGB32UI),Y===n.BYTE&&(ft=n.RGB8I),Y===n.SHORT&&(ft=n.RGB16I),Y===n.INT&&(ft=n.RGB32I)),C===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ft=n.RGBA32UI),Y===n.BYTE&&(ft=n.RGBA8I),Y===n.SHORT&&(ft=n.RGBA16I),Y===n.INT&&(ft=n.RGBA32I)),C===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ft=n.R11F_G11F_B10F)),C===n.RGBA){const $t=St?ko:Re.getTransfer(et);Y===n.FLOAT&&(ft=n.RGBA32F),Y===n.HALF_FLOAT&&(ft=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ft=$t===ke?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function _(N,C){let Y;return N?C===null||C===hr||C===Ds?Y=n.DEPTH24_STENCIL8:C===li?Y=n.DEPTH32F_STENCIL8:C===Ps&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===hr||C===Ds?Y=n.DEPTH_COMPONENT24:C===li?Y=n.DEPTH_COMPONENT32F:C===Ps&&(Y=n.DEPTH_COMPONENT16),Y}function w(N,C){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Xn&&N.minFilter!==Gn?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function S(N){const C=N.target;C.removeEventListener("dispose",S),A(C),C.isVideoTexture&&u.delete(C)}function E(N){const C=N.target;C.removeEventListener("dispose",E),b(C)}function A(N){const C=i.get(N);if(C.__webglInit===void 0)return;const Y=N.source,et=d.get(Y);if(et){const St=et[C.__cacheKey];St.usedTimes--,St.usedTimes===0&&M(N),Object.keys(et).length===0&&d.delete(Y)}i.remove(N)}function M(N){const C=i.get(N);n.deleteTexture(C.__webglTexture);const Y=N.source,et=d.get(Y);delete et[C.__cacheKey],o.memory.textures--}function b(N){const C=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(C.__webglFramebuffer[et]))for(let St=0;St<C.__webglFramebuffer[et].length;St++)n.deleteFramebuffer(C.__webglFramebuffer[et][St]);else n.deleteFramebuffer(C.__webglFramebuffer[et]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[et])}else{if(Array.isArray(C.__webglFramebuffer))for(let et=0;et<C.__webglFramebuffer.length;et++)n.deleteFramebuffer(C.__webglFramebuffer[et]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let et=0;et<C.__webglColorRenderbuffer.length;et++)C.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[et]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Y=N.textures;for(let et=0,St=Y.length;et<St;et++){const ft=i.get(Y[et]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),i.remove(Y[et])}i.remove(N)}let T=0;function I(){T=0}function O(){const N=T;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),T+=1,N}function z(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function F(N,C){const Y=i.get(N);if(N.isVideoTexture&&wt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const et=N.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Y,N,C);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+C)}function U(N,C){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){nt(Y,N,C);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+C)}function k(N,C){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){nt(Y,N,C);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+C)}function D(N,C){const Y=i.get(N);if(N.version>0&&Y.__version!==N.version){gt(Y,N,C);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+C)}const H={[Rs]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},G={[Xn]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},W={[Rf]:n.NEVER,[Nf]:n.ALWAYS,[Pf]:n.LESS,[Nh]:n.LEQUAL,[Df]:n.EQUAL,[Uf]:n.GEQUAL,[Lf]:n.GREATER,[If]:n.NOTEQUAL};function X(N,C){if(C.type===li&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Gn||C.magFilter===ca||C.magFilter===Xs||C.magFilter===Ti||C.minFilter===Gn||C.minFilter===ca||C.minFilter===Xs||C.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,H[C.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,H[C.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,H[C.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,G[C.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,G[C.minFilter]),C.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,W[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Xn||C.minFilter!==Xs&&C.minFilter!==Ti||C.type===li&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function st(N,C){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",S));const et=C.source;let St=d.get(et);St===void 0&&(St={},d.set(et,St));const ft=z(C);if(ft!==N.__cacheKey){St[ft]===void 0&&(St[ft]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),St[ft].usedTimes++;const $t=St[N.__cacheKey];$t!==void 0&&(St[N.__cacheKey].usedTimes--,$t.usedTimes===0&&M(C)),N.__cacheKey=ft,N.__webglTexture=St[ft].texture}return Y}function ot(N,C,Y){return Math.floor(Math.floor(N/Y)/C)}function V(N,C,Y,et){const ft=N.updateRanges;if(ft.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,C.width,C.height,Y,et,C.data);else{ft.sort((q,bt)=>q.start-bt.start);let $t=0;for(let q=1;q<ft.length;q++){const bt=ft[$t],Q=ft[q],Rt=bt.start+bt.count,Et=ot(Q.start,C.width,4),Ht=ot(bt.start,C.width,4);Q.start<=Rt+1&&Et===Ht&&ot(Q.start+Q.count-1,C.width,4)===Et?bt.count=Math.max(bt.count,Q.start+Q.count-bt.start):(++$t,ft[$t]=Q)}ft.length=$t+1;const Lt=n.getParameter(n.UNPACK_ROW_LENGTH),Vt=n.getParameter(n.UNPACK_SKIP_PIXELS),at=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,C.width);for(let q=0,bt=ft.length;q<bt;q++){const Q=ft[q],Rt=Math.floor(Q.start/4),Et=Math.ceil(Q.count/4),Ht=Rt%C.width,B=Math.floor(Rt/C.width),Mt=Et,At=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Ht,B,Mt,At,Y,et,C.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Lt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,at)}}function nt(N,C,Y){let et=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(et=n.TEXTURE_3D);const St=st(N,C),ft=C.source;e.bindTexture(et,N.__webglTexture,n.TEXTURE0+Y);const $t=i.get(ft);if(ft.version!==$t.__version||St===!0){e.activeTexture(n.TEXTURE0+Y);const Lt=Re.getPrimaries(Re.workingColorSpace),Vt=C.colorSpace===vn?null:Re.getPrimaries(C.colorSpace),at=C.colorSpace===vn||Lt===Vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let q=v(C.image,!1,r.maxTextureSize);q=xt(C,q);const bt=s.convert(C.format,C.colorSpace),Q=s.convert(C.type);let Rt=x(C.internalFormat,bt,Q,C.colorSpace,C.isVideoTexture);X(et,C);let Et;const Ht=C.mipmaps,B=C.isVideoTexture!==!0,Mt=$t.__version===void 0||St===!0,At=ft.dataReady,lt=w(C,q);if(C.isDepthTexture)Rt=_(C.format===Is,C.type),Mt&&(B?e.texStorage2D(n.TEXTURE_2D,1,Rt,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,Rt,q.width,q.height,0,bt,Q,null));else if(C.isDataTexture)if(Ht.length>0){B&&Mt&&e.texStorage2D(n.TEXTURE_2D,lt,Rt,Ht[0].width,Ht[0].height);for(let ut=0,ht=Ht.length;ut<ht;ut++)Et=Ht[ut],B?At&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Et.width,Et.height,bt,Q,Et.data):e.texImage2D(n.TEXTURE_2D,ut,Rt,Et.width,Et.height,0,bt,Q,Et.data);C.generateMipmaps=!1}else B?(Mt&&e.texStorage2D(n.TEXTURE_2D,lt,Rt,q.width,q.height),At&&V(C,q,bt,Q)):e.texImage2D(n.TEXTURE_2D,0,Rt,q.width,q.height,0,bt,Q,q.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){B&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Rt,Ht[0].width,Ht[0].height,q.depth);for(let ut=0,ht=Ht.length;ut<ht;ut++)if(Et=Ht[ut],C.format!==ri)if(bt!==null)if(B){if(At)if(C.layerUpdates.size>0){const Ft=yu(Et.width,Et.height,C.format,C.type);for(const Dt of C.layerUpdates){const Gt=Et.data.subarray(Dt*Ft/Et.data.BYTES_PER_ELEMENT,(Dt+1)*Ft/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Dt,Et.width,Et.height,1,bt,Gt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,q.depth,bt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Rt,Et.width,Et.height,q.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?At&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,q.depth,bt,Q,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Rt,Et.width,Et.height,q.depth,0,bt,Q,Et.data)}else{B&&Mt&&e.texStorage2D(n.TEXTURE_2D,lt,Rt,Ht[0].width,Ht[0].height);for(let ut=0,ht=Ht.length;ut<ht;ut++)Et=Ht[ut],C.format!==ri?bt!==null?B?At&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?At&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Et.width,Et.height,bt,Q,Et.data):e.texImage2D(n.TEXTURE_2D,ut,Rt,Et.width,Et.height,0,bt,Q,Et.data)}else if(C.isDataArrayTexture)if(B){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Rt,q.width,q.height,q.depth),At)if(C.layerUpdates.size>0){const ut=yu(q.width,q.height,C.format,C.type);for(const ht of C.layerUpdates){const Ft=q.data.subarray(ht*ut/q.data.BYTES_PER_ELEMENT,(ht+1)*ut/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,q.width,q.height,1,bt,Q,Ft)}C.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,bt,Q,q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,q.width,q.height,q.depth,0,bt,Q,q.data);else if(C.isData3DTexture)B?(Mt&&e.texStorage3D(n.TEXTURE_3D,lt,Rt,q.width,q.height,q.depth),At&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,bt,Q,q.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,q.width,q.height,q.depth,0,bt,Q,q.data);else if(C.isFramebufferTexture){if(Mt)if(B)e.texStorage2D(n.TEXTURE_2D,lt,Rt,q.width,q.height);else{let ut=q.width,ht=q.height;for(let Ft=0;Ft<lt;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Rt,ut,ht,0,bt,Q,null),ut>>=1,ht>>=1}}else if(Ht.length>0){if(B&&Mt){const ut=Ct(Ht[0]);e.texStorage2D(n.TEXTURE_2D,lt,Rt,ut.width,ut.height)}for(let ut=0,ht=Ht.length;ut<ht;ut++)Et=Ht[ut],B?At&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt,Q,Et):e.texImage2D(n.TEXTURE_2D,ut,Rt,bt,Q,Et);C.generateMipmaps=!1}else if(B){if(Mt){const ut=Ct(q);e.texStorage2D(n.TEXTURE_2D,lt,Rt,ut.width,ut.height)}At&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Q,q)}else e.texImage2D(n.TEXTURE_2D,0,Rt,bt,Q,q);g(C)&&p(et),$t.__version=ft.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function gt(N,C,Y){if(C.image.length!==6)return;const et=st(N,C),St=C.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Y);const ft=i.get(St);if(St.version!==ft.__version||et===!0){e.activeTexture(n.TEXTURE0+Y);const $t=Re.getPrimaries(Re.workingColorSpace),Lt=C.colorSpace===vn?null:Re.getPrimaries(C.colorSpace),Vt=C.colorSpace===vn||$t===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const at=C.isCompressedTexture||C.image[0].isCompressedTexture,q=C.image[0]&&C.image[0].isDataTexture,bt=[];for(let ht=0;ht<6;ht++)!at&&!q?bt[ht]=v(C.image[ht],!0,r.maxCubemapSize):bt[ht]=q?C.image[ht].image:C.image[ht],bt[ht]=xt(C,bt[ht]);const Q=bt[0],Rt=s.convert(C.format,C.colorSpace),Et=s.convert(C.type),Ht=x(C.internalFormat,Rt,Et,C.colorSpace),B=C.isVideoTexture!==!0,Mt=ft.__version===void 0||et===!0,At=St.dataReady;let lt=w(C,Q);X(n.TEXTURE_CUBE_MAP,C);let ut;if(at){B&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ht,Q.width,Q.height);for(let ht=0;ht<6;ht++){ut=bt[ht].mipmaps;for(let Ft=0;Ft<ut.length;Ft++){const Dt=ut[Ft];C.format!==ri?Rt!==null?B?At&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,0,0,Dt.width,Dt.height,Rt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,Ht,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,0,0,Dt.width,Dt.height,Rt,Et,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft,Ht,Dt.width,Dt.height,0,Rt,Et,Dt.data)}}}else{if(ut=C.mipmaps,B&&Mt){ut.length>0&&lt++;const ht=Ct(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ht,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(q){B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,bt[ht].width,bt[ht].height,Rt,Et,bt[ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Ht,bt[ht].width,bt[ht].height,0,Rt,Et,bt[ht].data);for(let Ft=0;Ft<ut.length;Ft++){const Gt=ut[Ft].image[ht].image;B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,0,0,Gt.width,Gt.height,Rt,Et,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,Ht,Gt.width,Gt.height,0,Rt,Et,Gt.data)}}else{B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Rt,Et,bt[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Ht,Rt,Et,bt[ht]);for(let Ft=0;Ft<ut.length;Ft++){const Dt=ut[Ft];B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,0,0,Rt,Et,Dt.image[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ft+1,Ht,Rt,Et,Dt.image[ht])}}}g(C)&&p(n.TEXTURE_CUBE_MAP),ft.__version=St.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Tt(N,C,Y,et,St,ft){const $t=s.convert(Y.format,Y.colorSpace),Lt=s.convert(Y.type),Vt=x(Y.internalFormat,$t,Lt,Y.colorSpace),at=i.get(C),q=i.get(Y);if(q.__renderTarget=C,!at.__hasExternalTextures){const bt=Math.max(1,C.width>>ft),Q=Math.max(1,C.height>>ft);St===n.TEXTURE_3D||St===n.TEXTURE_2D_ARRAY?e.texImage3D(St,ft,Vt,bt,Q,C.depth,0,$t,Lt,null):e.texImage2D(St,ft,Vt,bt,Q,0,$t,Lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),_t(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,St,q.__webglTexture,0,vt(C)):(St===n.TEXTURE_2D||St>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,St,q.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(N,C,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,N),C.depthBuffer){const et=C.depthTexture,St=et&&et.isDepthTexture?et.type:null,ft=_(C.stencilBuffer,St),$t=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=vt(C);_t(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,ft,C.width,C.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ft,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ft,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$t,n.RENDERBUFFER,N)}else{const et=C.textures;for(let St=0;St<et.length;St++){const ft=et[St],$t=s.convert(ft.format,ft.colorSpace),Lt=s.convert(ft.type),Vt=x(ft.internalFormat,$t,Lt,ft.colorSpace),at=vt(C);Y&&_t(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Vt,C.width,C.height):_t(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Vt,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Vt,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(C.depthTexture);et.__renderTarget=C,(!et.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const St=et.__webglTexture,ft=vt(C);if(C.depthTexture.format===Ls)_t(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,St,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,St,0);else if(C.depthTexture.format===Is)_t(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,St,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Ot(N){const C=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const et=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),et){const St=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,et.removeEventListener("dispose",St)};et.addEventListener("dispose",St),C.__depthDisposeCallback=St}C.__boundDepthTexture=et}if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const et=N.texture.mipmaps;et&&et.length>0?yt(C.__webglFramebuffer[0],N):yt(C.__webglFramebuffer,N)}else if(Y){C.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[et]),C.__webglDepthbuffer[et]===void 0)C.__webglDepthbuffer[et]=n.createRenderbuffer(),Nt(C.__webglDepthbuffer[et],N,!1);else{const St=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=C.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,ft)}}else{const et=N.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),Nt(C.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,ft)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(N,C,Y){const et=i.get(N);C!==void 0&&Tt(et.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ot(N)}function R(N){const C=N.texture,Y=i.get(N),et=i.get(C);N.addEventListener("dispose",E);const St=N.textures,ft=N.isWebGLCubeRenderTarget===!0,$t=St.length>1;if($t||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=C.version,o.memory.textures++),ft){Y.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[Lt]=[];for(let Vt=0;Vt<C.mipmaps.length;Vt++)Y.__webglFramebuffer[Lt][Vt]=n.createFramebuffer()}else Y.__webglFramebuffer[Lt]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Lt=0;Lt<C.mipmaps.length;Lt++)Y.__webglFramebuffer[Lt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if($t)for(let Lt=0,Vt=St.length;Lt<Vt;Lt++){const at=i.get(St[Lt]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&_t(N)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Vt=St[Lt];Y.__webglColorRenderbuffer[Lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Lt]);const at=s.convert(Vt.format,Vt.colorSpace),q=s.convert(Vt.type),bt=x(Vt.internalFormat,at,q,Vt.colorSpace,N.isXRRenderTarget===!0),Q=vt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,bt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),X(n.TEXTURE_CUBE_MAP,C);for(let Lt=0;Lt<6;Lt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Vt=0;Vt<C.mipmaps.length;Vt++)Tt(Y.__webglFramebuffer[Lt][Vt],N,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Vt);else Tt(Y.__webglFramebuffer[Lt],N,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);g(C)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let Lt=0,Vt=St.length;Lt<Vt;Lt++){const at=St[Lt],q=i.get(at);let bt=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,q.__webglTexture),X(bt,at),Tt(Y.__webglFramebuffer,N,at,n.COLOR_ATTACHMENT0+Lt,bt,0),g(at)&&p(bt)}e.unbindTexture()}else{let Lt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Lt,et.__webglTexture),X(Lt,C),C.mipmaps&&C.mipmaps.length>0)for(let Vt=0;Vt<C.mipmaps.length;Vt++)Tt(Y.__webglFramebuffer[Vt],N,C,n.COLOR_ATTACHMENT0,Lt,Vt);else Tt(Y.__webglFramebuffer,N,C,n.COLOR_ATTACHMENT0,Lt,0);g(C)&&p(Lt),e.unbindTexture()}N.depthBuffer&&Ot(N)}function $(N){const C=N.textures;for(let Y=0,et=C.length;Y<et;Y++){const St=C[Y];if(g(St)){const ft=y(N),$t=i.get(St).__webglTexture;e.bindTexture(ft,$t),p(ft),e.unbindTexture()}}}const Z=[],it=[];function J(N){if(N.samples>0){if(_t(N)===!1){const C=N.textures,Y=N.width,et=N.height;let St=n.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$t=i.get(N),Lt=C.length>1;if(Lt)for(let at=0;at<C.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);const Vt=N.texture.mipmaps;Vt&&Vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let at=0;at<C.length;at++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=n.STENCIL_BUFFER_BIT)),Lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$t.__webglColorRenderbuffer[at]);const q=i.get(C[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,Y,et,0,0,Y,et,St,n.NEAREST),c===!0&&(Z.length=0,it.length=0,Z.push(n.COLOR_ATTACHMENT0+at),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Z.push(ft),it.push(ft),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,it)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Lt)for(let at=0;at<C.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,$t.__webglColorRenderbuffer[at]);const q=i.get(C[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,$t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const C=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function vt(N){return Math.min(r.maxSamples,N.samples)}function _t(N){const C=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function wt(N){const C=o.render.frame;u.get(N)!==C&&(u.set(N,C),N.update())}function xt(N,C){const Y=N.colorSpace,et=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==fr&&Y!==vn&&(Re.getTransfer(Y)===ke?(et!==ri||St!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),C}function Ct(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=D,this.rebindTextures=ct,this.setupRenderTarget=R,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=_t}function U1(n,t){function e(i,r=vn){let s;const o=Re.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ch)return n.BYTE;if(i===Rh)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===Lh)return n.ALPHA;if(i===Ih)return n.RGB;if(i===ri)return n.RGBA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===Is)return n.DEPTH_STENCIL;if(i===qi)return n.RED;if(i===hc)return n.RED_INTEGER;if(i===Uh)return n.RG;if(i===fc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===Do||i===Lo||i===Io||i===Uo)if(o===ke)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Do)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Do)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===gl||i===vl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===_l||i===yl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xl||i===_l)return o===ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===Sl||i===wl||i===bl||i===El||i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ml)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return o===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Fl||i===zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Nl)return o===ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===kl||i===Bl||i===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const N1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Yh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ae({vertexShader:N1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O1 extends ns{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",g=new z1,p={},y=e.getContextAttributes();let x=null,_=null;const w=[],S=[],E=new kt;let A=null;const M=new Yn;M.viewport=new Ee;const b=new Yn;b.viewport=new Ee;const T=[M,b],I=new sp;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let gt=w[nt];return gt===void 0&&(gt=new La,w[nt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(nt){let gt=w[nt];return gt===void 0&&(gt=new La,w[nt]=gt),gt.getGripSpace()},this.getHand=function(nt){let gt=w[nt];return gt===void 0&&(gt=new La,w[nt]=gt),gt.getHandSpace()};function F(nt){const gt=S.indexOf(nt.inputSource);if(gt===-1)return;const Tt=w[gt];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,l||o),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function U(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",k);for(let nt=0;nt<w.length;nt++){const gt=S[nt];gt!==null&&(S[nt]=null,w[nt].disconnect(gt))}O=null,z=null,g.reset();for(const nt in p)delete p[nt];t.setRenderTarget(x),h=null,d=null,f=null,r=null,_=null,V.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",U),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Nt=null,yt=null;y.depth&&(yt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=y.stencil?Is:Ls,Nt=y.stencil?Ds:hr);const Ot={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ot),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new dr(d.textureWidth,d.textureHeight,{format:ri,type:oi,depthTexture:new $h(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,Tt),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new dr(h.framebufferWidth,h.framebufferHeight,{format:ri,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(nt){for(let gt=0;gt<nt.removed.length;gt++){const Tt=nt.removed[gt],Nt=S.indexOf(Tt);Nt>=0&&(S[Nt]=null,w[Nt].disconnect(Tt))}for(let gt=0;gt<nt.added.length;gt++){const Tt=nt.added[gt];let Nt=S.indexOf(Tt);if(Nt===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=S.length){S.push(Tt),Nt=Ot;break}else if(S[Ot]===null){S[Ot]=Tt,Nt=Ot;break}if(Nt===-1)break}const yt=w[Nt];yt&&yt.connect(Tt)}}const D=new P,H=new P;function G(nt,gt,Tt){D.setFromMatrixPosition(gt.matrixWorld),H.setFromMatrixPosition(Tt.matrixWorld);const Nt=D.distanceTo(H),yt=gt.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,ct=yt[14]/(yt[10]-1),R=yt[14]/(yt[10]+1),$=(yt[9]+1)/yt[5],Z=(yt[9]-1)/yt[5],it=(yt[8]-1)/yt[0],J=(Ot[8]+1)/Ot[0],vt=ct*it,_t=ct*J,wt=Nt/(-it+J),xt=wt*-it;if(gt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(xt),nt.translateZ(wt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),yt[10]===-1)nt.projectionMatrix.copy(gt.projectionMatrix),nt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ct=ct+wt,N=R+wt,C=vt-xt,Y=_t+(Nt-xt),et=$*R/N*Ct,St=Z*R/N*Ct;nt.projectionMatrix.makePerspective(C,Y,et,St,Ct,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function W(nt,gt){gt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(gt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let gt=nt.near,Tt=nt.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),I.near=b.near=M.near=gt,I.far=b.far=M.far=Tt,(O!==I.near||z!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,z=I.far),I.layers.mask=nt.layers.mask|6,M.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Nt=nt.parent,yt=I.cameras;W(I,Nt);for(let Ot=0;Ot<yt.length;Ot++)W(yt[Ot],Nt);yt.length===2?G(I,M,b):I.projectionMatrix.copy(M.projectionMatrix),X(nt,I,Nt)};function X(nt,gt,Tt){Tt===null?nt.matrix.copy(gt.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(gt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(gt.projectionMatrix),nt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Vl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=nt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(nt){return p[nt]};let st=null;function ot(nt,gt){if(u=gt.getViewerPose(l||o),m=gt,u!==null){const Tt=u.views;h!==null&&(t.setRenderTargetFramebuffer(_,h.framebuffer),t.setRenderTarget(_));let Nt=!1;Tt.length!==I.cameras.length&&(I.cameras.length=0,Nt=!0);for(let R=0;R<Tt.length;R++){const $=Tt[R];let Z=null;if(h!==null)Z=h.getViewport($);else{const J=f.getViewSubImage(d,$);Z=J.viewport,R===0&&(t.setRenderTargetTextures(_,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(_))}let it=T[R];it===void 0&&(it=new Yn,it.layers.enable(R),it.viewport=new Ee,T[R]=it),it.matrix.fromArray($.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray($.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Z.x,Z.y,Z.width,Z.height),R===0&&(I.matrix.copy(it.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Nt===!0&&I.cameras.push(it)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const R=f.getDepthInformation(Tt[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let R=0;R<Tt.length;R++){const $=Tt[R].camera;if($){let Z=p[$];Z||(Z=new Yh,p[$]=Z);const it=f.getCameraImage($);Z.sourceTexture=it}}}}for(let Tt=0;Tt<w.length;Tt++){const Nt=S[Tt],yt=w[Tt];Nt!==null&&yt!==void 0&&yt.update(Nt,gt,l||o)}st&&st(nt,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),m=null}const V=new s0;V.setAnimationLoop(ot),this.setAnimationLoop=function(nt){st=nt},this.dispose=function(){}}}const nr=new tn,k1=new le;function B1(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Vh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,nr.copy(_),nr.x*=-1,nr.y*=-1,nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),g.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(nr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H1(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function l(y,x){let _=r[y.id];_===void 0&&(m(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(y,w);const S=t.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function u(y){const x=f();y.__bindingPointIndex=x;const _=n.createBuffer(),w=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],_=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,E=_.length;S<E;S++){const A=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,b=A.length;M<b;M++){const T=A[M];if(h(T,S,M,w)===!0){const I=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let F=0;F<O.length;F++){const U=O[F],k=v(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,I+z,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,x,_,w){const S=y.value,E=x+"_"+_;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{const A=w[E];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[E]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function m(y){const x=y.uniforms;let _=0;const w=16;for(let E=0,A=x.length;E<A;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,T=M.length;b<T;b++){const I=M[b],O=Array.isArray(I.value)?I.value:[I.value];for(let z=0,F=O.length;z<F;z++){const U=O[z],k=v(U),D=_%w,H=D%k.boundary,G=D+H;_+=H,G!==0&&w-G<k.storage&&(_+=w-G),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=k.storage}}}const S=_%w;return S>0&&(_+=w-S),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class V1{constructor(t={}){const{canvas:e=Of(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=$n;let S=0,E=0,A=null,M=-1,b=null;const T=new Ee,I=new Ee;let O=null;const z=new pe(0);let F=0,U=e.width,k=e.height,D=1,H=null,G=null;const W=new Ee(0,0,U,k),X=new Ee(0,0,U,k);let st=!1;const ot=new Xh;let V=!1,nt=!1;const gt=new le,Tt=new P,Nt=new Ee,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ct(){return A===null?D:1}let R=i;function $(L,K){return e.getContext(L,K)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const K="webgl2";if(R=$(K,L),R===null)throw $(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Z,it,J,vt,_t,wt,xt,Ct,N,C,Y,et,St,ft,$t,Lt,Vt,at,q,bt,Q,Rt,Et,Ht;function B(){Z=new Jg(R),Z.init(),Rt=new U1(R,Z),it=new Xg(R,Z,t,Rt),J=new L1(R,Z),it.reversedDepthBuffer&&d&&J.buffers.depth.setReversed(!0),vt=new ev(R),_t=new _1,wt=new I1(R,Z,J,_t,it,Rt,vt),xt=new $g(_),Ct=new Kg(_),N=new ap(R),Et=new Wg(R,N),C=new Qg(R,N,vt,Et),Y=new iv(R,C,N,vt),q=new nv(R,it,wt),Lt=new qg(_t),et=new x1(_,xt,Ct,Z,it,Et,Lt),St=new B1(_,_t),ft=new M1,$t=new A1(Z),at=new Vg(_,xt,Ct,J,Y,h,c),Vt=new P1(_,Y,it),Ht=new H1(R,vt,it,J),bt=new Gg(R,Z,vt),Q=new tv(R,Z,vt),vt.programs=et.programs,_.capabilities=it,_.extensions=Z,_.properties=_t,_.renderLists=ft,_.shadowMap=Vt,_.state=J,_.info=vt}B();const Mt=new O1(_,R);this.xr=Mt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const L=Z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(L){L!==void 0&&(D=L,this.setSize(U,k,!1))},this.getSize=function(L){return L.set(U,k)},this.setSize=function(L,K,dt=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,k=K,e.width=Math.floor(L*D),e.height=Math.floor(K*D),dt===!0&&(e.style.width=L+"px",e.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(U*D,k*D).floor()},this.setDrawingBufferSize=function(L,K,dt){U=L,k=K,D=dt,e.width=Math.floor(L*dt),e.height=Math.floor(K*dt),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,K,dt,mt){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,K,dt,mt),J.viewport(T.copy(W).multiplyScalar(D).round())},this.getScissor=function(L){return L.copy(X)},this.setScissor=function(L,K,dt,mt){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,K,dt,mt),J.scissor(I.copy(X).multiplyScalar(D).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(L){J.setScissorTest(st=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){G=L},this.getClearColor=function(L){return L.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(L=!0,K=!0,dt=!0){let mt=0;if(L){let rt=!1;if(A!==null){const It=A.texture.format;rt=It===dc||It===fc||It===hc}if(rt){const It=A.texture.type,Xt=It===oi||It===hr||It===Ps||It===Ds||It===cc||It===uc,Kt=at.getClearColor(),jt=at.getClearAlpha(),se=Kt.r,oe=Kt.g,ee=Kt.b;Xt?(m[0]=se,m[1]=oe,m[2]=ee,m[3]=jt,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=se,v[1]=oe,v[2]=ee,v[3]=jt,R.clearBufferiv(R.COLOR,0,v))}else mt|=R.COLOR_BUFFER_BIT}K&&(mt|=R.DEPTH_BUFFER_BIT),dt&&(mt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),at.dispose(),ft.dispose(),$t.dispose(),_t.dispose(),xt.dispose(),Ct.dispose(),Y.dispose(),Et.dispose(),Ht.dispose(),et.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Ge),Mt.removeEventListener("sessionend",_n),tt.stop()};function At(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=vt.autoReset,K=Vt.enabled,dt=Vt.autoUpdate,mt=Vt.needsUpdate,rt=Vt.type;B(),vt.autoReset=L,Vt.enabled=K,Vt.autoUpdate=dt,Vt.needsUpdate=mt,Vt.type=rt}function ut(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ht(L){const K=L.target;K.removeEventListener("dispose",ht),Ft(K)}function Ft(L){Dt(L),_t.remove(L)}function Dt(L){const K=_t.get(L).programs;K!==void 0&&(K.forEach(function(dt){et.releaseProgram(dt)}),L.isShaderMaterial&&et.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,dt,mt,rt,It){K===null&&(K=yt);const Xt=rt.isMesh&&rt.matrixWorld.determinant()<0,Kt=fe(L,K,dt,mt,rt);J.setMaterial(mt,Xt);let jt=dt.index,se=1;if(mt.wireframe===!0){if(jt=C.getWireframeAttribute(dt),jt===void 0)return;se=2}const oe=dt.drawRange,ee=dt.attributes.position;let _e=oe.start*se,be=(oe.start+oe.count)*se;It!==null&&(_e=Math.max(_e,It.start*se),be=Math.min(be,(It.start+It.count)*se)),jt!==null?(_e=Math.max(_e,0),be=Math.min(be,jt.count)):ee!=null&&(_e=Math.max(_e,0),be=Math.min(be,ee.count));const Ne=be-_e;if(Ne<0||Ne===1/0)return;Et.setup(rt,mt,Kt,dt,jt);let Ie,Pe=bt;if(jt!==null&&(Ie=N.get(jt),Pe=Q,Pe.setIndex(Ie)),rt.isMesh)mt.wireframe===!0?(J.setLineWidth(mt.wireframeLinewidth*ct()),Pe.setMode(R.LINES)):Pe.setMode(R.TRIANGLES);else if(rt.isLine){let re=mt.linewidth;re===void 0&&(re=1),J.setLineWidth(re*ct()),rt.isLineSegments?Pe.setMode(R.LINES):rt.isLineLoop?Pe.setMode(R.LINE_LOOP):Pe.setMode(R.LINE_STRIP)}else rt.isPoints?Pe.setMode(R.POINTS):rt.isSprite&&Pe.setMode(R.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Pe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const re=rt._multiDrawStarts,qe=rt._multiDrawCounts,Te=rt._multiDrawCount,Fe=jt?N.get(jt).bytesPerElement:1,Di=_t.get(mt).currentProgram.getUniforms();for(let En=0;En<Te;En++)Di.setValue(R,"_gl_DrawID",En),Pe.render(re[En]/Fe,qe[En])}else if(rt.isInstancedMesh)Pe.renderInstances(_e,Ne,rt.count);else if(dt.isInstancedBufferGeometry){const re=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,qe=Math.min(dt.instanceCount,re);Pe.renderInstances(_e,Ne,qe)}else Pe.render(_e,Ne)};function Gt(L,K,dt){L.transparent===!0&&L.side===je&&L.forceSinglePass===!1?(L.side=Dn,L.needsUpdate=!0,we(L,K,dt),L.side=hi,L.needsUpdate=!0,we(L,K,dt),L.side=je):we(L,K,dt)}this.compile=function(L,K,dt=null){dt===null&&(dt=L),p=$t.get(dt),p.init(K),x.push(p),dt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(p.pushLight(rt),rt.castShadow&&p.pushShadow(rt))}),L!==dt&&L.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(p.pushLight(rt),rt.castShadow&&p.pushShadow(rt))}),p.setupLights();const mt=new Set;return L.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const It=rt.material;if(It)if(Array.isArray(It))for(let Xt=0;Xt<It.length;Xt++){const Kt=It[Xt];Gt(Kt,dt,rt),mt.add(Kt)}else Gt(It,dt,rt),mt.add(It)}),p=x.pop(),mt},this.compileAsync=function(L,K,dt=null){const mt=this.compile(L,K,dt);return new Promise(rt=>{function It(){if(mt.forEach(function(Xt){_t.get(Xt).currentProgram.isReady()&&mt.delete(Xt)}),mt.size===0){rt(L);return}setTimeout(It,10)}Z.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let te=null;function Ce(L){te&&te(L)}function Ge(){tt.stop()}function _n(){tt.start()}const tt=new s0;tt.setAnimationLoop(Ce),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(L){te=L,Mt.setAnimationLoop(L),L===null?tt.stop():tt.start()},Mt.addEventListener("sessionstart",Ge),Mt.addEventListener("sessionend",_n),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(K),K=Mt.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,K,A),p=$t.get(L,x.length),p.init(K),x.push(p),gt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ot.setFromProjectionMatrix(gt,ci,K.reversedDepth),nt=this.localClippingEnabled,V=Lt.init(this.clippingPlanes,nt),g=ft.get(L,y.length),g.init(),y.push(g),Mt.enabled===!0&&Mt.isPresenting===!0){const It=_.xr.getDepthSensingMesh();It!==null&&pt(It,K,-1/0,_.sortObjects)}pt(L,K,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(H,G),Ot=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Ot&&at.addToRenderList(g,L),this.info.render.frame++,V===!0&&Lt.beginShadows();const dt=p.state.shadowsArray;Vt.render(dt,L,K),V===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=g.opaque,rt=g.transmissive;if(p.setupLights(),K.isArrayCamera){const It=K.cameras;if(rt.length>0)for(let Xt=0,Kt=It.length;Xt<Kt;Xt++){const jt=It[Xt];Bt(mt,rt,L,jt)}Ot&&at.render(L);for(let Xt=0,Kt=It.length;Xt<Kt;Xt++){const jt=It[Xt];Yt(g,L,jt,jt.viewport)}}else rt.length>0&&Bt(mt,rt,L,K),Ot&&at.render(L),Yt(g,L,K);A!==null&&E===0&&(wt.updateMultisampleRenderTarget(A),wt.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(_,L,K),Et.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],V===!0&&Lt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function pt(L,K,dt,mt){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)dt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ot.intersectsSprite(L)){mt&&Nt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(gt);const Xt=Y.update(L),Kt=L.material;Kt.visible&&g.push(L,Xt,Kt,dt,Nt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ot.intersectsObject(L))){const Xt=Y.update(L),Kt=L.material;if(mt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Nt.copy(L.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Nt.copy(Xt.boundingSphere.center)),Nt.applyMatrix4(L.matrixWorld).applyMatrix4(gt)),Array.isArray(Kt)){const jt=Xt.groups;for(let se=0,oe=jt.length;se<oe;se++){const ee=jt[se],_e=Kt[ee.materialIndex];_e&&_e.visible&&g.push(L,Xt,_e,dt,Nt.z,ee)}}else Kt.visible&&g.push(L,Xt,Kt,dt,Nt.z,null)}}const It=L.children;for(let Xt=0,Kt=It.length;Xt<Kt;Xt++)pt(It[Xt],K,dt,mt)}function Yt(L,K,dt,mt){const rt=L.opaque,It=L.transmissive,Xt=L.transparent;p.setupLightsView(dt),V===!0&&Lt.setGlobalState(_.clippingPlanes,dt),mt&&J.viewport(T.copy(mt)),rt.length>0&&me(rt,K,dt),It.length>0&&me(It,K,dt),Xt.length>0&&me(Xt,K,dt),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Bt(L,K,dt,mt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[mt.id]===void 0&&(p.state.transmissionRenderTarget[mt.id]=new dr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?mr:oi,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const It=p.state.transmissionRenderTarget[mt.id],Xt=mt.viewport||T;It.setSize(Xt.z*_.transmissionResolutionScale,Xt.w*_.transmissionResolutionScale);const Kt=_.getRenderTarget(),jt=_.getActiveCubeFace(),se=_.getActiveMipmapLevel();_.setRenderTarget(It),_.getClearColor(z),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Ot&&at.render(dt);const oe=_.toneMapping;_.toneMapping=Xi;const ee=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),p.setupLightsView(mt),V===!0&&Lt.setGlobalState(_.clippingPlanes,mt),me(L,dt,mt),wt.updateMultisampleRenderTarget(It),wt.updateRenderTargetMipmap(It),Z.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let be=0,Ne=K.length;be<Ne;be++){const Ie=K[be],Pe=Ie.object,re=Ie.geometry,qe=Ie.material,Te=Ie.group;if(qe.side===je&&Pe.layers.test(mt.layers)){const Fe=qe.side;qe.side=Dn,qe.needsUpdate=!0,Ue(Pe,dt,mt,re,qe,Te),qe.side=Fe,qe.needsUpdate=!0,_e=!0}}_e===!0&&(wt.updateMultisampleRenderTarget(It),wt.updateRenderTargetMipmap(It))}_.setRenderTarget(Kt,jt,se),_.setClearColor(z,F),ee!==void 0&&(mt.viewport=ee),_.toneMapping=oe}function me(L,K,dt){const mt=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,It=L.length;rt<It;rt++){const Xt=L[rt],Kt=Xt.object,jt=Xt.geometry,se=Xt.group;let oe=Xt.material;oe.allowOverride===!0&&mt!==null&&(oe=mt),Kt.layers.test(dt.layers)&&Ue(Kt,K,dt,jt,oe,se)}}function Ue(L,K,dt,mt,rt,It){L.onBeforeRender(_,K,dt,mt,rt,It),L.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),rt.onBeforeRender(_,K,dt,mt,L,It),rt.transparent===!0&&rt.side===je&&rt.forceSinglePass===!1?(rt.side=Dn,rt.needsUpdate=!0,_.renderBufferDirect(dt,K,mt,rt,L,It),rt.side=hi,rt.needsUpdate=!0,_.renderBufferDirect(dt,K,mt,rt,L,It),rt.side=je):_.renderBufferDirect(dt,K,mt,rt,L,It),L.onAfterRender(_,K,dt,mt,rt,It)}function we(L,K,dt){K.isScene!==!0&&(K=yt);const mt=_t.get(L),rt=p.state.lights,It=p.state.shadowsArray,Xt=rt.state.version,Kt=et.getParameters(L,rt.state,It,K,dt),jt=et.getProgramCacheKey(Kt);let se=mt.programs;mt.environment=L.isMeshStandardMaterial?K.environment:null,mt.fog=K.fog,mt.envMap=(L.isMeshStandardMaterial?Ct:xt).get(L.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,se===void 0&&(L.addEventListener("dispose",ht),se=new Map,mt.programs=se);let oe=se.get(jt);if(oe!==void 0){if(mt.currentProgram===oe&&mt.lightsStateVersion===Xt)return Xe(L,Kt),oe}else Kt.uniforms=et.getUniforms(L),L.onBeforeCompile(Kt,_),oe=et.acquireProgram(Kt,jt),se.set(jt,oe),mt.uniforms=Kt.uniforms;const ee=mt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ee.clippingPlanes=Lt.uniform),Xe(L,Kt),mt.needsLights=ie(L),mt.lightsStateVersion=Xt,mt.needsLights&&(ee.ambientLightColor.value=rt.state.ambient,ee.lightProbe.value=rt.state.probe,ee.directionalLights.value=rt.state.directional,ee.directionalLightShadows.value=rt.state.directionalShadow,ee.spotLights.value=rt.state.spot,ee.spotLightShadows.value=rt.state.spotShadow,ee.rectAreaLights.value=rt.state.rectArea,ee.ltc_1.value=rt.state.rectAreaLTC1,ee.ltc_2.value=rt.state.rectAreaLTC2,ee.pointLights.value=rt.state.point,ee.pointLightShadows.value=rt.state.pointShadow,ee.hemisphereLights.value=rt.state.hemi,ee.directionalShadowMap.value=rt.state.directionalShadowMap,ee.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,ee.spotShadowMap.value=rt.state.spotShadowMap,ee.spotLightMatrix.value=rt.state.spotLightMatrix,ee.spotLightMap.value=rt.state.spotLightMap,ee.pointShadowMap.value=rt.state.pointShadowMap,ee.pointShadowMatrix.value=rt.state.pointShadowMatrix),mt.currentProgram=oe,mt.uniformsList=null,oe}function mn(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=No.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function Xe(L,K){const dt=_t.get(L);dt.outputColorSpace=K.outputColorSpace,dt.batching=K.batching,dt.batchingColor=K.batchingColor,dt.instancing=K.instancing,dt.instancingColor=K.instancingColor,dt.instancingMorph=K.instancingMorph,dt.skinning=K.skinning,dt.morphTargets=K.morphTargets,dt.morphNormals=K.morphNormals,dt.morphColors=K.morphColors,dt.morphTargetsCount=K.morphTargetsCount,dt.numClippingPlanes=K.numClippingPlanes,dt.numIntersection=K.numClipIntersection,dt.vertexAlphas=K.vertexAlphas,dt.vertexTangents=K.vertexTangents,dt.toneMapping=K.toneMapping}function fe(L,K,dt,mt,rt){K.isScene!==!0&&(K=yt),wt.resetTextureUnits();const It=K.fog,Xt=mt.isMeshStandardMaterial?K.environment:null,Kt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fr,jt=(mt.isMeshStandardMaterial?Ct:xt).get(mt.envMap||Xt),se=mt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,oe=!!dt.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),ee=!!dt.morphAttributes.position,_e=!!dt.morphAttributes.normal,be=!!dt.morphAttributes.color;let Ne=Xi;mt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=_.toneMapping);const Ie=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Pe=Ie!==void 0?Ie.length:0,re=_t.get(mt),qe=p.state.lights;if(V===!0&&(nt===!0||L!==b)){const He=L===b&&mt.id===M;Lt.setState(mt,L,He)}let Te=!1;mt.version===re.__version?(re.needsLights&&re.lightsStateVersion!==qe.state.version||re.outputColorSpace!==Kt||rt.isBatchedMesh&&re.batching===!1||!rt.isBatchedMesh&&re.batching===!0||rt.isBatchedMesh&&re.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&re.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&re.instancing===!1||!rt.isInstancedMesh&&re.instancing===!0||rt.isSkinnedMesh&&re.skinning===!1||!rt.isSkinnedMesh&&re.skinning===!0||rt.isInstancedMesh&&re.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&re.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&re.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&re.instancingMorph===!1&&rt.morphTexture!==null||re.envMap!==jt||mt.fog===!0&&re.fog!==It||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Lt.numPlanes||re.numIntersection!==Lt.numIntersection)||re.vertexAlphas!==se||re.vertexTangents!==oe||re.morphTargets!==ee||re.morphNormals!==_e||re.morphColors!==be||re.toneMapping!==Ne||re.morphTargetsCount!==Pe)&&(Te=!0):(Te=!0,re.__version=mt.version);let Fe=re.currentProgram;Te===!0&&(Fe=we(mt,K,rt));let Di=!1,En=!1,Zn=!1;const $e=Fe.getUniforms(),Je=re.uniforms;if(J.useProgram(Fe.program)&&(Di=!0,En=!0,Zn=!0),mt.id!==M&&(M=mt.id,En=!0),Di||b!==L){J.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),$e.setValue(R,"projectionMatrix",L.projectionMatrix),$e.setValue(R,"viewMatrix",L.matrixWorldInverse);const ze=$e.map.cameraPosition;ze!==void 0&&ze.setValue(R,Tt.setFromMatrixPosition(L.matrixWorld)),it.logarithmicDepthBuffer&&$e.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&$e.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,En=!0,Zn=!0)}if(rt.isSkinnedMesh){$e.setOptional(R,rt,"bindMatrix"),$e.setOptional(R,rt,"bindMatrixInverse");const He=rt.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),$e.setValue(R,"boneTexture",He.boneTexture,wt))}rt.isBatchedMesh&&($e.setOptional(R,rt,"batchingTexture"),$e.setValue(R,"batchingTexture",rt._matricesTexture,wt),$e.setOptional(R,rt,"batchingIdTexture"),$e.setValue(R,"batchingIdTexture",rt._indirectTexture,wt),$e.setOptional(R,rt,"batchingColorTexture"),rt._colorsTexture!==null&&$e.setValue(R,"batchingColorTexture",rt._colorsTexture,wt));const De=dt.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&q.update(rt,dt,Fe),(En||re.receiveShadow!==rt.receiveShadow)&&(re.receiveShadow=rt.receiveShadow,$e.setValue(R,"receiveShadow",rt.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(Je.envMap.value=jt,Je.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&K.environment!==null&&(Je.envMapIntensity.value=K.environmentIntensity),En&&($e.setValue(R,"toneMappingExposure",_.toneMappingExposure),re.needsLights&&de(Je,Zn),It&&mt.fog===!0&&St.refreshFogUniforms(Je,It),St.refreshMaterialUniforms(Je,mt,D,k,p.state.transmissionRenderTarget[L.id]),No.upload(R,mn(re),Je,wt)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(No.upload(R,mn(re),Je,wt),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&$e.setValue(R,"center",rt.center),$e.setValue(R,"modelViewMatrix",rt.modelViewMatrix),$e.setValue(R,"normalMatrix",rt.normalMatrix),$e.setValue(R,"modelMatrix",rt.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const He=mt.uniformsGroups;for(let ze=0,hn=He.length;ze<hn;ze++){const on=He[ze];Ht.update(on,Fe),Ht.bind(on,Fe)}}return Fe}function de(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function ie(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,K,dt){const mt=_t.get(L);mt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),_t.get(L.texture).__webglTexture=K,_t.get(L.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:dt,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,K){const dt=_t.get(L);dt.__webglFramebuffer=K,dt.__useDefaultFramebuffer=K===void 0};const ge=R.createFramebuffer();this.setRenderTarget=function(L,K=0,dt=0){A=L,S=K,E=dt;let mt=!0,rt=null,It=!1,Xt=!1;if(L){const jt=_t.get(L);if(jt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(R.FRAMEBUFFER,null),mt=!1;else if(jt.__webglFramebuffer===void 0)wt.setupRenderTarget(L);else if(jt.__hasExternalTextures)wt.rebindTextures(L,_t.get(L.texture).__webglTexture,_t.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ee=L.depthTexture;if(jt.__boundDepthTexture!==ee){if(ee!==null&&_t.has(ee)&&(L.width!==ee.image.width||L.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(L)}}const se=L.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Xt=!0);const oe=_t.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(oe[K])?rt=oe[K][dt]:rt=oe[K],It=!0):L.samples>0&&wt.useMultisampledRTT(L)===!1?rt=_t.get(L).__webglMultisampledFramebuffer:Array.isArray(oe)?rt=oe[dt]:rt=oe,T.copy(L.viewport),I.copy(L.scissor),O=L.scissorTest}else T.copy(W).multiplyScalar(D).floor(),I.copy(X).multiplyScalar(D).floor(),O=st;if(dt!==0&&(rt=ge),J.bindFramebuffer(R.FRAMEBUFFER,rt)&&mt&&J.drawBuffers(L,rt),J.viewport(T),J.scissor(I),J.setScissorTest(O),It){const jt=_t.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,jt.__webglTexture,dt)}else if(Xt){const jt=K;for(let se=0;se<L.textures.length;se++){const oe=_t.get(L.textures[se]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+se,oe.__webglTexture,dt,jt)}}else if(L!==null&&dt!==0){const jt=_t.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,jt.__webglTexture,dt)}M=-1},this.readRenderTargetPixels=function(L,K,dt,mt,rt,It,Xt,Kt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=_t.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt){J.bindFramebuffer(R.FRAMEBUFFER,jt);try{const se=L.textures[Kt],oe=se.format,ee=se.type;if(!it.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-mt&&dt>=0&&dt<=L.height-rt&&(L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Kt),R.readPixels(K,dt,mt,rt,Rt.convert(oe),Rt.convert(ee),It))}finally{const se=A!==null?_t.get(A).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(L,K,dt,mt,rt,It,Xt,Kt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=_t.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt)if(K>=0&&K<=L.width-mt&&dt>=0&&dt<=L.height-rt){J.bindFramebuffer(R.FRAMEBUFFER,jt);const se=L.textures[Kt],oe=se.format,ee=se.type;if(!it.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_e),R.bufferData(R.PIXEL_PACK_BUFFER,It.byteLength,R.STREAM_READ),L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Kt),R.readPixels(K,dt,mt,rt,Rt.convert(oe),Rt.convert(ee),0);const be=A!==null?_t.get(A).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,be);const Ne=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await kf(R,Ne,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,_e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,It),R.deleteBuffer(_e),R.deleteSync(Ne),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,K=null,dt=0){const mt=Math.pow(2,-dt),rt=Math.floor(L.image.width*mt),It=Math.floor(L.image.height*mt),Xt=K!==null?K.x:0,Kt=K!==null?K.y:0;wt.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,dt,0,0,Xt,Kt,rt,It),J.unbindTexture()};const Qt=R.createFramebuffer(),Le=R.createFramebuffer();this.copyTextureToTexture=function(L,K,dt=null,mt=null,rt=0,It=null){It===null&&(rt!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=rt,rt=0):It=0);let Xt,Kt,jt,se,oe,ee,_e,be,Ne;const Ie=L.isCompressedTexture?L.mipmaps[It]:L.image;if(dt!==null)Xt=dt.max.x-dt.min.x,Kt=dt.max.y-dt.min.y,jt=dt.isBox3?dt.max.z-dt.min.z:1,se=dt.min.x,oe=dt.min.y,ee=dt.isBox3?dt.min.z:0;else{const De=Math.pow(2,-rt);Xt=Math.floor(Ie.width*De),Kt=Math.floor(Ie.height*De),L.isDataArrayTexture?jt=Ie.depth:L.isData3DTexture?jt=Math.floor(Ie.depth*De):jt=1,se=0,oe=0,ee=0}mt!==null?(_e=mt.x,be=mt.y,Ne=mt.z):(_e=0,be=0,Ne=0);const Pe=Rt.convert(K.format),re=Rt.convert(K.type);let qe;K.isData3DTexture?(wt.setTexture3D(K,0),qe=R.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(wt.setTexture2DArray(K,0),qe=R.TEXTURE_2D_ARRAY):(wt.setTexture2D(K,0),qe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,K.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,K.unpackAlignment);const Te=R.getParameter(R.UNPACK_ROW_LENGTH),Fe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Di=R.getParameter(R.UNPACK_SKIP_PIXELS),En=R.getParameter(R.UNPACK_SKIP_ROWS),Zn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ie.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,se),R.pixelStorei(R.UNPACK_SKIP_ROWS,oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ee);const $e=L.isDataArrayTexture||L.isData3DTexture,Je=K.isDataArrayTexture||K.isData3DTexture;if(L.isDepthTexture){const De=_t.get(L),He=_t.get(K),ze=_t.get(De.__renderTarget),hn=_t.get(He.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,ze.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let on=0;on<jt;on++)$e&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(L).__webglTexture,rt,ee+on),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(K).__webglTexture,It,Ne+on)),R.blitFramebuffer(se,oe,Xt,Kt,_e,be,Xt,Kt,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(rt!==0||L.isRenderTargetTexture||_t.has(L)){const De=_t.get(L),He=_t.get(K);J.bindFramebuffer(R.READ_FRAMEBUFFER,Qt),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,Le);for(let ze=0;ze<jt;ze++)$e?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,De.__webglTexture,rt,ee+ze):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,De.__webglTexture,rt),Je?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,He.__webglTexture,It,Ne+ze):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,He.__webglTexture,It),rt!==0?R.blitFramebuffer(se,oe,Xt,Kt,_e,be,Xt,Kt,R.COLOR_BUFFER_BIT,R.NEAREST):Je?R.copyTexSubImage3D(qe,It,_e,be,Ne+ze,se,oe,Xt,Kt):R.copyTexSubImage2D(qe,It,_e,be,se,oe,Xt,Kt);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Je?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(qe,It,_e,be,Ne,Xt,Kt,jt,Pe,re,Ie.data):K.isCompressedArrayTexture?R.compressedTexSubImage3D(qe,It,_e,be,Ne,Xt,Kt,jt,Pe,Ie.data):R.texSubImage3D(qe,It,_e,be,Ne,Xt,Kt,jt,Pe,re,Ie):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,It,_e,be,Xt,Kt,Pe,re,Ie.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,It,_e,be,Ie.width,Ie.height,Pe,Ie.data):R.texSubImage2D(R.TEXTURE_2D,It,_e,be,Xt,Kt,Pe,re,Ie);R.pixelStorei(R.UNPACK_ROW_LENGTH,Te),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Fe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Di),R.pixelStorei(R.UNPACK_SKIP_ROWS,En),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zn),It===0&&K.generateMipmaps&&R.generateMipmap(qe),J.unbindTexture()},this.initRenderTarget=function(L){_t.get(L).__webglFramebuffer===void 0&&wt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?wt.setTextureCube(L,0):L.isData3DTexture?wt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?wt.setTexture2DArray(L,0):wt.setTexture2D(L,0),J.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,J.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}}const W1=[14.017088,74.326129],G1=[[13.8,-323.4],[32.8,-289.8],[33.8,-274.8],[36.1,-267.6],[48.4,-283.9],[69.4,-287.7],[110.3,-278.5],[175.5,-251],[236.9,-219.4],[312.7,-163.2],[368.6,-88.8],[408.6,9.1],[430.1,67.5],[423.9,80.9],[409.3,94],[377.9,121.4],[363.7,121.3],[344.7,149.2],[318.7,157],[286.8,176.4],[237.7,170.9],[200.1,157.8],[165.3,135.4],[162,138.6],[171.7,152.1],[164.8,155.9],[154.3,158.3],[139.9,143.7],[128.8,138.8],[120,139.3],[108.8,146.9],[116.6,175],[91.9,219.7],[77.8,247.9],[70.8,274.9],[46.2,294.5],[24.5,324.4],[-1.6,326.2],[-11.4,343.9],[-38.4,351.8],[-66.6,369.7],[-107.5,361.7],[-121.1,353.4],[-132.5,339.4],[-131.1,317.5],[-138,305.7],[-131.9,280.4],[-146.4,298.8],[-170.9,274],[-184.5,241.6],[-177.4,200.1],[-184.3,158.5],[-195.4,138.3],[-193.8,116.3],[-201.6,66.8],[-197.3,55.3],[-182.3,42.2],[-191,22],[-193.1,-3.3],[-182.5,-12.9],[-169.3,-16.8],[-179.1,-34.2],[-178.3,-43.6],[-173.1,-54.2],[-173.1,-63.6],[-165.1,-71.9],[-181.5,-85.6],[-184,-94.3],[-178.6,-126.8],[-173.8,-135.2],[-164.3,-144.7],[-155.7,-138.1],[-155.7,-147.9],[-151.5,-153.8],[-133.9,-154.8],[-108.9,-145.2],[-98.5,-146.5],[-103.4,-157.8],[-96.1,-187.5],[-113,-264.9],[-117.3,-281],[-117.7,-294.5],[-107.4,-302.6],[-97.5,-298.8],[-70.9,-306.9],[-42.7,-311.2],[-33.3,-308.5],[-24.7,-294.4],[-23.3,-299.5],[-29.2,-326],[-18.4,-327.6],[2.9,-328.2]],X1=[[-328.8,-767.8],[-313.6,-766.6],[-306.3,-759.7],[-304.7,-752.9],[-295.5,-753.8],[-289.2,-754.9],[-281.8,-752.3],[-285.9,-736.8],[-295.2,-720.4],[-291.7,-718.6],[-285.6,-719.4],[-278.1,-722.5],[-270,-718.1],[-264.9,-707.5],[-272,-701.1],[-276.6,-703],[-279.4,-698.1],[-283,-685],[-296.3,-677.8],[-316,-655.9],[-333.3,-649.9],[-342.7,-661.5],[-352.1,-670.5],[-367.9,-706.2],[-371.8,-728.4],[-373.5,-755.2],[-369.7,-769],[-351.4,-778.4]],q1=[[[17190,569],[17190,569]],[[17554,250],[17554,250]],[[16494,7181],[16494,7181]],[[16916,-1117],[16916,-1117]],[[15568,7298],[15568,7298]],[[16616,7035],[16616,7035]],[[16635,7745],[16635,7745]],[[16534,7088],[16534,7088]],[[16609,7748],[16609,7748]],[[16664,7755],[16664,7755]],[[16797,7658],[16797,7658]],[[16596,7791],[16596,7791]],[[9207,34916],[9382,34067],[9398,33250],[9445,33080],[10108,31541],[10283,31306],[10426,31238],[10683,30552],[10552,30424],[10516,30267],[10594,29728],[10940,28539],[12044,25171],[12591,23373],[12619,23268],[12595,23183],[12486,23086],[12499,23010],[12454,22921],[12626,22841],[12747,22727],[12733,22618],[12693,22618],[12744,22600],[12728,22520],[13093,22381],[13132,22274],[13195,22224],[13173,22116],[13286,21986],[13348,21753],[13244,21657],[13247,21615],[13392,21582],[13464,21469],[13467,21355],[13400,21277],[13397,21186],[13665,21048],[13642,20794],[13722,20732],[13695,20648],[13826,20525],[13726,20318],[13763,20218],[13851,20182],[13995,20242],[14123,20119],[14276,20084],[14415,20180],[14470,20339],[14634,20336],[14826,20234],[15002,20003],[15551,18452],[16112,15916],[16413,14264],[16444,13808],[16361,13781],[16300,13660],[16349,13626],[16436,13651],[16483,13611],[16481,13507],[16568,13262]],[[16568,13262],[16711,12398],[16942,11545],[17116,10640],[17256,10126],[17374,9845],[17346,9036],[17248,8679],[17198,8593],[17095,8588],[16953,8653],[16860,8608],[16774,8637],[16698,8564],[16678,8461],[16752,8409],[16919,8427],[17080,8324],[17212,8521],[17379,8424],[17493,8217],[17518,7696],[17895,6904],[18659,3824],[18804,3098],[18877,2038],[18844,1387],[18939,973],[18877,846],[18886,767],[19049,403],[19416,-186],[19544,-627],[19705,-1006],[19750,-1240],[19735,-1530],[19838,-1825],[20099,-2065],[20162,-2191],[20320,-2872],[20364,-3273],[20663,-3613],[20948,-3830],[21114,-4069],[21343,-4282],[21440,-4498],[21618,-4747],[21826,-4792],[22052,-5060],[22262,-5421],[22218,-5513],[22266,-5802],[22449,-5779],[22478,-5628],[22569,-5616],[22600,-5575],[22708,-5593],[22945,-5787],[23262,-6217],[23250,-6525],[23328,-6526],[23370,-6623],[23519,-6580],[23722,-6641],[24087,-7316],[24106,-7442],[24054,-7520],[24081,-7578],[24224,-7545],[24281,-7469],[24366,-7451],[24398,-7357],[24725,-7289],[24898,-7187],[24961,-7210],[24915,-7255],[25005,-7257],[25319,-7614],[25350,-7676],[25340,-7745],[25296,-7765],[25312,-7825],[25566,-7873],[25617,-7853],[25740,-7573],[25921,-7465],[26017,-7483],[26229,-7672],[26413,-7929],[26710,-8648],[26926,-9018],[27145,-9548],[27300,-10070],[27612,-10092],[27689,-10064],[27709,-10092]]],$1={temple:[17157,8490],station:[19365,9259],town:[17519,8721]},Rn={center:W1,island:G1,islet:X1,mainland:q1,poi:$1},pn=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = mat2(1.6,1.2,-1.2,1.6) * p; a *= 0.5; } return s; }
// cheap animated caustic net: two warped cell patterns multiplied
float caustic(vec2 p, float t){
  vec2 q = p;
  float c = 0.0;
  for (int i = 0; i < 3; i++){
    q += vec2(sin(q.y*1.7 + t*0.9 + float(i)), cos(q.x*1.3 - t*0.7 + float(i)*1.7)) * 0.35;
    c += abs(sin(q.x*2.1 + t) * sin(q.y*2.3 - t*0.8));
  }
  c = 1.0 - c / 3.0;
  return pow(clamp(c, 0.0, 1.0), 6.0);
}
`,In=`
uniform vec3 uSunDir;
uniform float uDusk;
vec3 skyColor(vec3 d){
  float y = d.y;
  vec3 dayZen = vec3(0.11, 0.33, 0.66), dayHor = vec3(0.62, 0.78, 0.90);
  vec3 duskZen = vec3(0.035, 0.06, 0.16), duskHor = vec3(0.96, 0.47, 0.25);
  vec3 zen = mix(dayZen, duskZen, uDusk), hor = mix(dayHor, duskHor, uDusk);
  float t = pow(clamp(y, 0.0, 1.0), mix(0.55, 0.38, uDusk));
  vec3 c = mix(hor, zen, t);
  // warm band hugging the horizon on the sun's side
  vec2 az = normalize(d.xz + 1e-5), saz = normalize(uSunDir.xz + 1e-5);
  float side = 0.5 + 0.5 * dot(az, saz);
  float band = exp(-max(y, 0.0) * 9.0);
  c = mix(c, mix(vec3(0.36, 0.24, 0.38), vec3(1.0, 0.58, 0.28), pow(side, 1.6)), band * uDusk * (0.3 + 0.7 * side));
  float sd = max(dot(d, uSunDir), 0.0);
  vec3 sunCol = mix(vec3(1.0, 0.97, 0.9), vec3(1.0, 0.62, 0.28), uDusk);
  c += sunCol * (pow(sd, 8.0) * 0.12 + pow(sd, 64.0) * 0.35 + pow(sd, 900.0) * 1.1);
  if (y < 0.0) c = mix(c, hor * 0.55, clamp(-y * 4.0, 0.0, 1.0));
  return c;
}
`,bc=`
uniform vec4 uTorch; uniform vec3 uTorchDir;
float torchAt(vec3 w){
  if (uTorch.w < 0.001) return 0.0;
  vec3 d = w - uTorch.xyz; float L = length(d);
  float cone = smoothstep(0.84, 0.96, dot(d / max(L, 1e-3), uTorchDir));
  return uTorch.w * cone * exp(-L * 0.11) * smoothstep(0.4, 1.2, L);
}
`,ce=(n,t=0,e=1)=>n<t?t:n>e?e:n,Ut=(n,t,e)=>n+(t-n)*e,zt=(n,t,e)=>{const i=ce((e-n)/(t-n));return i*i*(3-2*i)};function sn(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Yl=new Uint8Array(512);{const n=sn(1729),t=[...Array(256).keys()];for(let e=255;e>0;e--){const i=n()*(e+1)|0;[t[e],t[i]]=[t[i],t[e]]}for(let e=0;e<512;e++)Yl[e]=t[e&255]}const Mo=(n,t)=>Yl[Yl[n&255]+t&511]/255;function Y1(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=Mo(e,i),l=Mo(e+1,i),u=Mo(e,i+1),f=Mo(e+1,i+1);return c+(l-c)*o+(u-c)*a+(c-l-u+f)*o*a}function rn(n,t,e=4){let i=0,r=.5,s=0;for(let o=0;o<e;o++){i+=r*Y1(n,t),s+=r;const a=1.6*n+1.2*t,c=-1.2*n+1.6*t;n=a+17.3,t=c+9.1,r*=.5}return i/s}function Gr(n,t){const e=n.length,i=[],r=new Array(e);for(let s=0;s<e-1;s++)i.push((t[s+1]-t[s])/(n[s+1]-n[s]));r[0]=i[0],r[e-1]=i[e-2];for(let s=1;s<e-1;s++)r[s]=i[s-1]*i[s]<=0?0:2*i[s-1]*i[s]/(i[s-1]+i[s]);return s=>{if(s<=n[0])return t[0];if(s>=n[e-1])return t[e-1];let o=0;for(;s>n[o+1];)o++;const a=n[o+1]-n[o],c=(s-n[o])/a,l=c*c,u=l*c;return(2*u-3*l+1)*t[o]+(u-2*l+c)*a*r[o]+(-2*u+3*l)*t[o+1]+(u-l)*a*r[o+1]}}const j1=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Xr=1800,zn=860,wi=Xr/2,Z1=321,ts=1.8,bi=-150,Ec=70,K1=32,u0=n=>n.map(([t,e])=>[t,-e]),Es=u0(Rn.island),Fo=u0(Rn.islet);function J1(n,t,e,i,r,s){const o=r-e,a=s-i,c=ce(((n-e)*o+(t-i)*a)/(o*o+a*a||1),0,1),l=e+o*c-n,u=i+a*c-t;return Math.hypot(l,u)}function Xu(n,t,e){let i=1/0,r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[a,c]=e[o],[l,u]=e[s];i=Math.min(i,J1(n,t,a,c,l,u)),c>t!=u>t&&n<(l-a)*(t-c)/(u-c)+a&&(r=!r)}return r?i:-i}const qu=Fo.reduce((n,t)=>[n[0]+t[0]/Fo.length,n[1]+t[1]/Fo.length],[0,0]),$u=(n,t)=>(n-qu[0])**2+(t-qu[1])**2<22500;function Q1(n,t){return Math.max(Xu(n,t,Es),Xu(n,t,Fo))}function tx(n,t){const e=Q1(n,t);return Math.abs(e)>120?e:e+(rn(n/55,t/55)-.5)*16+(rn(n/13+7,t/13)-.5)*6}function ex(n,t,e){if(e>0){const o=13*(1-Math.exp(-e/9)),a=(Ec-13)*Math.pow(1-Math.exp(-e/105),1.35),c=(rn(n/85,t/85)-.5)*16*zt(0,60,e),l=7*ce(-t/330,-1,1)*zt(0,90,e),u=-Math.abs(rn(n/40+3,t/40)-.5)*6*zt(10,50,e);return o+a+c+l+u}const i=-e;let r=-(5*zt(0,6,i)+(K1-5)*(1-Math.exp(-i/190)));r+=(rn(n/16,t/16)-.45)*7*Math.exp(-i/70);const s=zt(12,40,i)*(1-zt(140,260,i));return r+=Math.max(0,rn(n/26+11,t/26-4)-.52)*18*s,r+=Math.sin(n*.09+rn(n/60,t/60)*6)*.25*zt(150,300,i),r}const xi={basalt:[.25,.22,.2],grass:[.55,.5,.32],grass2:[.46,.46,.28],leaf:[.19,.32,.14],sand:[.8,.72,.55],rockSea:[.36,.33,.3],coral:[[.92,.45,.48],[.95,.6,.3],[.6,.42,.72],[.74,.78,.38],[.95,.75,.55]]},Fr=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e];function nx(){const n=Z1,t=Xr/(n-1),e=new Float32Array(n*n),i=new Float32Array(n*n);for(let v=0;v<n;v++)for(let g=0;g<n;g++){const p=-wi+g*t,y=-wi+v*t,x=v*n+g,_=tx(p,y);i[x]=_,e[x]=ex(p,y,_)*ts*(_>0&&$u(p,y)?.45:1)}const r=new dn(Xr,Xr,n-1,n-1);r.rotateX(-Math.PI/2);const s=r.attributes.position;for(let v=0;v<s.count;v++)s.setY(v,e[v]);r.computeVertexNormals();const o=r.attributes.normal,a=new Float32Array(s.count*3),c=new Float32Array(s.count*4);let l=0;for(let v=0;v<s.count;v++)l=Math.max(l,e[v]);for(let v=0;v<s.count;v++){const g=s.getX(v),p=s.getZ(v),y=e[v]/ts,x=i[v],_=o.getY(v);let w;if(x>0&&$u(g,p))w=Fr(xi.basalt,[.43,.41,.38],zt(1,9,y)*.8),c[v*4]=1;else if(x>0){const E=zt(.82,.6,_),A=zt(.4,.56,rn(g/110,p/110)+ce(-p/900,-.3,.3)+y/Ec*.22-E*.25);w=Fr(xi.grass,xi.grass2,rn(g/20,p/20)),w=Fr(w,xi.leaf,A);const M=1-zt(4,16,y),b=Math.max(M,E*.85);w=Fr(w,xi.basalt,b),c[v*4]=b,c[v*4+1]=(1-A)*(1-b),c[v*4+2]=A*(1-b)}else{const E=-x;w=Fr(xi.rockSea,xi.sand,zt(20,160,E)*(.65+.35*zt(.36,.52,rn(g/30,p/30))));const A=zt(10,40,E)*(1-zt(150,260,E)),M=rn(g/5+3,p/5-1)*.6+rn(g/40,p/40)*.4;if(A>0&&M>.56){const I=Math.floor(rn(g/3,p/3)*17)%xi.coral.length;w=Fr(w,xi.coral[I],A*zt(.56,.64,M)*.85)}const b=(1-zt(8,110,E))*.9,T=(1-b)*A*zt(.46,.6,M);c[v*4]=b,c[v*4+3]=T}const S=.9+rn(g/6,p/6)*.2;a[v*3]=w[0]*S,a[v*3+1]=w[1]*S,a[v*3+2]=w[2]*S}r.setAttribute("color",new he(a,3)),r.setAttribute("aMat",new he(c,4));const u=(v,g,p)=>{const y=ce((g+wi)/t,0,n-1.001),x=ce((p+wi)/t,0,n-1.001),_=Math.floor(y),w=Math.floor(x),S=y-_,E=x-w,A=v[w*n+_],M=v[w*n+_+1],b=v[(w+1)*n+_],T=v[(w+1)*n+_+1];return(A*(1-S)+M*S)*(1-E)+(b*(1-S)+T*S)*E},f=(v,g)=>u(e,v,g),d=(v,g)=>u(i,v,g),h=new Uint8Array(n*n);for(let v=0;v<n*n;v++)h[v]=Math.round(ce(i[v]/400+.5,0,1)*255);const m=new ui(h,n,n,qi,oi);return m.magFilter=m.minFilter=Gn,m.needsUpdate=!0,{geom:r,heightAt:f,sdfAt:d,sdfTex:m,H:e,D:i,maxH:l,step:t}}function ix(n){return new Ae({vertexColors:!0,uniforms:n,vertexShader:`
      attribute vec4 aMat;
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying vec4 vMat;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vC = color; vMat = aMat;
        gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${pn}
      ${In}
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform vec3 uAmbBot;
      uniform float uTime; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen; uniform float uColumn;
      ${bc}
      uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform vec3 uWaterDeep;
      uniform float uClipR; uniform float uDiorama; uniform float uSy;
      uniform sampler2D tRock; uniform sampler2D tGrass; uniform sampler2D tForest; uniform sampler2D tSand; uniform sampler2D tReef; uniform sampler2D tAerial;
      uniform float uTexOn; uniform vec4 uAerialRect; uniform float uHiTex;
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying vec4 vMat;
      vec3 tri(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)); return texture2D(t, p.zy * s).rgb * w.x + texture2D(t, p.xz * s).rgb * w.y + texture2D(t, p.xy * s).rgb * w.z; }
      void main(){
        if (length(vW.xz) > uClipR) discard;
        vec3 n = normalize(vN);
        vec3 base = vC * (0.82 + 0.36 * fbm(vW.xz * 0.11));
        if (uTexOn > 0.001) {
          vec3 P = vec3(vW.x, vW.y / uSy, vW.z);
          vec2 q = P.xz;
          float wr = vMat.x, wg = vMat.y, wf = vMat.z, wc = vMat.w, ws = max(0.0, 1.0 - wr - wg - wf - wc);
          vec3 tex = vec3(0.0);
          // sample only the materials this pixel actually shows
          if (wr > 0.01) tex += wr * (uHiTex > 0.5 ? mix(tri(tRock, P, n, 1.0 / 11.0), tri(tRock, P + 37.0, n, 1.0 / 43.0), 0.4) : texture2D(tRock, q / 11.0).rgb);
          if (wg > 0.01) tex += wg * mix(texture2D(tGrass, q / 16.0).rgb, texture2D(tGrass, q / 61.0 + 0.37).rgb, 0.45 * uHiTex);
          if (wf > 0.01) tex += wf * mix(texture2D(tForest, q / 26.0).rgb, texture2D(tForest, q / 83.0 + 0.61).rgb, 0.4 * uHiTex);
          if (wc > 0.01) tex += wc * mix(texture2D(tReef, q / 14.0).rgb, texture2D(tReef, q / 47.0 + 0.23).rgb, 0.45 * uHiTex);
          if (ws > 0.01) tex += ws * mix(texture2D(tSand, q / 12.0).rgb, texture2D(tSand, q / 39.0 + 0.71).rgb, 0.4 * uHiTex);
          vec3 tb = tex;
          // the island's own colours come from the satellite-style aerial; tiled textures add the grain
          vec2 auv = (vW.xz - uAerialRect.xy) / uAerialRect.z;
          if (vW.y > -0.5 && auv.x > 0.0 && auv.x < 1.0 && auv.y > 0.0 && auv.y < 1.0) {
            vec3 aer = texture2D(tAerial, vec2(auv.x, 1.0 - auv.y)).rgb;
            float sea = smoothstep(0.04, 0.18, aer.b - max(aer.r, aer.g) * 0.95);
            float lum = dot(tex, vec3(0.333));
            vec3 detailed = aer * (0.55 + 0.9 * lum);
            tb = mix(mix(detailed, tex, wr * 0.55), tex, sea);
          }
          base = mix(base, tb, uTexOn);
        }
        float depth = max(-vW.y / uSy, 0.0);
        vec3 att = mix(exp(-depth * vec3(0.040, 0.016, 0.009)), exp(-depth * vec3(0.008, 0.004, 0.002)), uDiorama * 0.85);
        float diff = max(dot(n, uSunDir), 0.0);
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5);
        vec3 lit = depth > 0.0 ? (uSunCol * diff * att + amb * mix(vec3(1.0), att, 0.7)) : (uSunCol * diff + amb);
        vec3 col = base * lit;
        if (depth > 0.0) {
          float c = caustic(vW.xz * 0.075, uTime * 0.8);
          col += c * att * max(n.y, 0.0) * 0.6 * exp(-depth * 0.01) * uSunCol;
          float tl = torchAt(vW);
          if (tl > 0.001) col = mix(col, base * 1.05, clamp(tl * 1.3, 0.0, 1.0));
          col = mix(col, uWaterDeep, (1.0 - exp(-depth * (0.012 + 0.032 * (1.0 - uUnder)))) * uColumn);
        }
        float dist = length(vW - cameraPosition);
        vec3 hd = normalize(vec3(vW.x - cameraPosition.x, 0.015, vW.z - cameraPosition.z));
        vec3 above = mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen));
        vec3 below = mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen));
        col = mix(above, below, uUnder);
        gl_FragColor = vec4(col, 1.0);
      }`})}function rx(n,t=300){const e=zn,i=[[e,null,1,0],[e,bi+30,1,0],[e-3,bi+15,.92,-.38],[e-11,bi+5,.7,-.7],[e-21,bi+1,.36,-.93],[e-30,bi,0,-1]],r=i.length,s=[],o=[],a=[];for(let l=0;l<=t;l++){const u=l/t*Math.PI*2,f=Math.cos(u),d=Math.sin(u),h=Math.min(n.heightAt(f*e,d*e),0);for(const[m,v,g,p]of i)s.push(f*m,v===null?h:v,d*m),o.push(f*g,p,d*g)}for(let l=0;l<t;l++)for(let u=0;u<r-1;u++){const f=l*r+u,d=(l+1)*r+u;a.push(f,f+1,d,f+1,d+1,d)}const c=new ae;return c.setAttribute("position",new qt(s,3)),c.setAttribute("normal",new qt(o,3)),c.setIndex(a),c}function sx(n,t=300,e=1.2){const i=[];for(let r=0;r<t;r++){const s=r/t*Math.PI*2,o=Math.cos(s),a=Math.sin(s);i.push(new P(o*(zn+e),Math.min(n.heightAt(o*zn,a*zn),0),a*(zn+e)))}return i}function Yu(n){return new Ae({side:je,uniforms:n,vertexShader:`
      varying vec3 vW; varying vec3 vN;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${pn}
      uniform vec3 uSunDir; uniform vec3 uAmbTop; uniform float uSy; uniform sampler2D tStrata; uniform float uTexOn;
      varying vec3 vW; varying vec3 vN;
      void main(){
        float along = vW.x + vW.z;
        float y0 = vW.y / uSy;
        float y = y0 + (fbm(vec2(along * 0.004, 1.3)) - 0.5) * 26.0;
        vec3 sed = vec3(0.78, 0.68, 0.5), sand = vec3(0.62, 0.52, 0.38), rock = vec3(0.38, 0.33, 0.3), deep = vec3(0.23, 0.2, 0.19);
        vec3 c = y > -70.0 ? mix(sand, sed, smoothstep(-70.0, -55.0, y)) : y > -105.0 ? mix(rock, sand, smoothstep(-105.0, -95.0, y)) : mix(deep, rock, smoothstep(-140.0, -128.0, y));
        c *= 0.82 + 0.3 * fbm(vec2(along * 0.05, y0 * 0.08));
        c *= 0.92 + 0.08 * sin(y0 * 0.9 + fbm(vec2(along * 0.02, 0.0)) * 5.0);
        // pebbles
        float p = vnoise(vec2(along, y0 * 1.6) * 0.35);
        c = mix(c, c * 0.7, smoothstep(0.78, 0.82, p));
        vec3 n = normalize(vN);
        float l = 0.55 + 0.45 * max(dot(n, normalize(uSunDir)), 0.0);
        // engraving: fine horizontal hatch lines that thicken in shadow
        float hatch = abs(fract(y0 * 0.42) - 0.5);
        float shade = 1.0 - l;
        c *= 1.0 - smoothstep(0.42 - shade * 0.25, 0.5, hatch) * 0.18;
        c *= mix(1.0, 0.7, smoothstep(-0.2, -0.9, n.y));
        if (uTexOn > 0.001) {
          float ang = atan(vW.z, vW.x) + 3.14159265;
          vec2 suv = vec2(ang * 45.0 / 6.2831853, (y0 + 150.0) / 150.0);
          vec3 st = texture2D(tStrata, suv).rgb;
          c = mix(c, st * (0.85 + 0.25 * shade), uTexOn * 0.9);
        }
        gl_FragColor = vec4(c * l * 1.08, 1.0);
      }`})}function ox(n){const t=new Ae({transparent:!0,depthWrite:!1,uniforms:{...n,uR:{value:zn}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uDiorama; uniform float uR; uniform vec3 uSunDir;
      varying vec3 vW;
      float band(float x, float w){ return 1.0 - smoothstep(w * 0.5, w, abs(x)); }
      void main(){
        vec2 p = vW.xz; float r = length(p);
        // contact shadow, pushed away from the light, plus a tight occlusion ring at the foot
        vec2 off = -normalize(uSunDir.xz + 1e-4) * uR * 0.18;
        float soft = 1.0 - smoothstep(uR * 0.7, uR * 1.5, length(p - off));
        float foot = 1.0 - smoothstep(uR * 0.9, uR * 1.03, r);
        float sh = soft * 0.26 + foot * 0.22;
        // compass dial
        float R1 = uR * 1.13, R2 = uR * 1.17, R3 = uR * 1.25;
        float rings = band(r - R1, 3.0) * 0.55 + band(r - R2, 2.2) * 0.4 + band(r - R3, 1.6) * 0.25;
        float deg = degrees(atan(p.x, -p.y)); if (deg < 0.0) deg += 360.0;
        float tw = 2.0 / (r * 0.017453);
        float in12 = step(R1, r) * step(r, R2);
        float t5 = band(abs(fract(deg / 5.0 + 0.5) - 0.5) * 5.0, tw * 1.6) * in12;
        float t30 = band(abs(fract(deg / 30.0 + 0.5) - 0.5) * 30.0, tw * 2.4) * step(R1, r) * step(r, R3);
        float t90 = band(abs(fract(deg / 90.0 + 0.5) - 0.5) * 90.0, tw * 1.8) * step(R1 - 20.0, r) * step(r, R3 + 16.0);
        // north arrow
        vec2 q = vec2(p.x, -p.y);
        float y0 = R3 + 18.0, y1 = R3 + 120.0;
        float hw = 34.0 * (1.0 - clamp((q.y - y0) / (y1 - y0), 0.0, 1.0));
        float arrow = step(y0, q.y) * step(q.y, y1) * step(abs(q.x), hw);
        float split = step(0.0, q.x);
        float ink = max(max(rings, max(t5 * 0.4, t30 * 0.6)), max(t90 * 0.6, arrow * mix(0.85, 0.35, split)));
        vec3 inkCol = vec3(0.13, 0.17, 0.18), shCol = vec3(0.32, 0.25, 0.16);
        float a = max(sh, ink);
        vec3 col = mix(shCol, inkCol, clamp(ink / max(a, 1e-3), 0.0, 1.0));
        gl_FragColor = vec4(col, a * uDiorama);
      }`}),e=new ue(new dn(5200,5200).rotateX(-Math.PI/2).translate(0,bi-.6,0),t);return e.renderOrder=-5,e.frustumCulled=!1,e}function ax(n){const t=new Qe,e=s=>new qh({color:2042412,transparent:!0,opacity:s,depthWrite:!1}),i=(s,o,a=300)=>{const c=[];for(let l=0;l<a;l++){const u=l/a*Math.PI*2;c.push(new P(Math.cos(u)*s,o,Math.sin(u)*s))}return c},r=(s,o)=>{const a=new yd(new ae().setFromPoints(s),e(o));return a.renderOrder=9,a.frustumCulled=!1,t.add(a),a};return t.mats=[r(i(zn+.8,.5),.75).material,r(sx(n),.7).material,r(i(zn+.8,bi+30),.35).material,r(i(zn-29,bi+.4),.55).material],t.base=t.mats.map(s=>s.opacity),t.setFade=s=>t.mats.forEach((o,a)=>o.opacity=t.base[a]*s),t}const lx=`
vec2 waveGrad(vec2 p, float t){
  vec2 g = vec2(0.0);
  vec2 dirs[3]; dirs[0]=vec2(0.94,0.34); dirs[1]=vec2(0.6,-0.8); dirs[2]=vec2(-0.21,0.98);
  float ks[3]; ks[0]=0.037; ks[1]=0.071; ks[2]=0.123;
  float amps[3]; amps[0]=0.5; amps[1]=0.3; amps[2]=0.16;
  for (int i = 0; i < 3; i++){
    float w = sqrt(9.8 * ks[i]);
    g += amps[i] * ks[i] * cos(dot(dirs[i], p) * ks[i] - t * w) * dirs[i];
  }
  return g;
}
// organic ripple field: rotated octaves of noise, each drifting its own way
vec2 rippleGrad(vec2 p, float t){
  vec2 g = vec2(0.0); float a = 1.0; mat2 R = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++){
    p = R * p * 1.87 + vec2(t * 0.21, -t * 0.13) * (1.0 + float(i) * 0.6);
    float n0 = vnoise(p);
    g += a * vec2(vnoise(p + vec2(0.07, 0.0)) - n0, vnoise(p + vec2(0.0, 0.07)) - n0) / 0.07;
    a *= 0.52;
  }
  return g;
}`;function ju(n,t){return new Ae({transparent:!0,depthWrite:!!t,side:je,uniforms:{...n,uIsOuter:{value:t?1:0}},vertexShader:`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${pn}
      ${In}
      ${lx}
      uniform sampler2D uSdf; uniform float uHalf; uniform float uIsOuter; uniform float uOuter; uniform float uDiorama; uniform float uClipR;
      uniform sampler2D uSdf2; uniform vec4 uRect2; uniform sampler2D uSdf3; uniform vec4 uRect3; uniform vec4 uBoat; uniform float uBoatSpeed;
      uniform vec4 uSplash[4]; uniform vec4 uFloaters[3]; uniform vec4 uRipple;
      uniform float uTime; uniform float uFogDen; uniform float uWaterFogDen; uniform float uPaper;
      uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform vec3 uWaterDeep; uniform vec3 uShallow; uniform vec3 uSunCol;
      varying vec3 vW;
      void main(){
        float edge = max(abs(vW.x), abs(vW.z));
        bool inBox = edge < uHalf;
        // the two sheets overlap by a few metres, so no gap can open between them at a grazing angle
        if (uIsOuter > 0.5 && edge < uHalf - 6.0) discard;
        if (uIsOuter < 0.5 && edge > uHalf + 6.0) discard;
        if (uIsOuter < 0.5 && length(vW.xz) > uClipR) discard;
        if (uIsOuter > 0.5 && uOuter < 0.01) discard;
        vec3 toCam = cameraPosition - vW; float dist = length(toCam); vec3 V = toCam / dist;
        float sd = -900.0;
        bool coast = false;
        if (edge < uHalf + 2.0) { sd = (texture2D(uSdf, clamp((vW.xz + uHalf) / (2.0 * uHalf), 0.0, 1.0)).r - 0.5) * 400.0; coast = true; }
        else {
          // the close, sharp shore map where it covers (metres, half floats), the wider one elsewhere
          vec2 q3 = uRect3.z > 0.0 ? (vW.xz - uRect3.xy) / uRect3.zw : vec2(-1.0);
          if (q3.x > 0.002 && q3.x < 0.998 && q3.y > 0.002 && q3.y < 0.998) { sd = texture2D(uSdf3, q3).r; coast = true; }
          else if (uRect2.z > 0.0) {
            vec2 q2 = (vW.xz - uRect2.xy) / uRect2.zw;
            if (q2.x > 0.0 && q2.x < 1.0 && q2.y > 0.0 && q2.y < 1.0) { sd = (texture2D(uSdf2, q2).r - 0.5) * 400.0; coast = true; }
          }
        }
        float s = max(-sd, 0.0);
        float fade = exp(-dist * 0.0005);
        vec2 g = waveGrad(vW.xz, uTime) * fade * (1.0 - uDiorama * 0.6);
        vec2 gd = rippleGrad(vW.xz * 0.06, uTime) * 0.05 * exp(-dist * 0.0012) * (1.0 - uDiorama * 0.7);
        vec3 N = normalize(vec3(-(g.x + gd.x), 1.0, -(g.y + gd.y)));
        if (!gl_FrontFacing) {
          // seen from below: Snell's window, then total internal reflection outside ~48 degrees
          float up = -V.y + (g.x + g.y) * 0.25;
          float win = smoothstep(0.62, 0.74, up);
          vec3 col = mix(uWaterCol * 0.85, mix(uShallow * 1.5, vec3(1.0, 0.96, 0.86), 0.45), win);
          col += caustic(vW.xz * 0.05, uTime) * win * 0.35;
          col = mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen * 0.7));
          gl_FragColor = vec4(col, 1.0);
          return;
        }
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        vec3 sky = mix(skyColor(R), vec3(0.94, 0.95, 0.93), uPaper * 0.85);
        vec3 body = mix(uWaterDeep, uShallow, coast ? exp(-s / 55.0) : 0.0);
        vec3 col = mix(body, sky, fres);
        float sd2 = max(dot(R, uSunDir), 0.0);
        // sun glitter: sparkles up close; where a pixel covers more sea than one sparkle, show their average
        // and widen the glint, as the facets that make it are now too small to see one by one
        float foot = length(fwidth(vW.xz));
        float far = smoothstep(0.12, 0.6, foot);
        float glit = smoothstep(0.72, 0.92, vnoise(vW.xz * 1.9 + vec2(uTime * 1.3, -uTime * 0.7)) * 0.6 + vnoise(vW.xz * 4.3 - vec2(uTime * 0.8, uTime * 1.1)) * 0.5);
        glit = mix(glit, 0.16, far);
        float disc = pow(sd2, mix(1400.0, 220.0, far)) * mix(1.0, 0.22, far);
        col += uSunCol * (disc * mix(0.5, 2.2, uDusk) + pow(sd2, mix(90.0, 30.0, far)) * mix(0.9, 0.6, uDusk) * glit + pow(sd2, 18.0) * 0.12 * uDusk) * (1.0 - uPaper);
        if (coast && s < 46.0) {
          float n1 = fbm(vW.xz * 0.05 + uTime * 0.08);
          float wave = sin(s * 0.33 - uTime * 1.5 + n1 * 6.0) * 0.5 + 0.5;
          float foam = smoothstep(0.7, 1.0, wave) * exp(-s / 13.0) + smoothstep(7.0, 0.0, s);
          foam *= smoothstep(0.32, 0.62, fbm(vW.xz * 0.14 + vec2(uTime * 0.05, -uTime * 0.03)));
          col = mix(col, mix(vec3(0.96, 0.97, 0.97), vec3(1.0, 0.86, 0.72), uDusk * 0.5), clamp(foam, 0.0, 1.0) * 0.92);
        }
        // the dive boat's wake: a churned trail astern and the two Kelvin arms (~19.5°) from the bow
        if (uBoatSpeed > 0.001) {
          vec2 dir = uBoat.zw, rel = vW.xz - uBoat.xy;
          float along = -dot(rel, dir), lat = dot(rel, vec2(-dir.y, dir.x)), al = along + 5.5;
          if (al > -3.0 && al < 700.0) {
            float n = fbm((vW.xz + dir * uTime * 8.0) * 0.28);
            float trailW = 1.5 + max(along, 0.0) * 0.045;
            float trail = smoothstep(trailW, trailW * 0.2, abs(lat)) * smoothstep(-6.0, 1.0, along) * exp(-max(along, 0.0) / (50.0 + 200.0 * uBoatSpeed));
            float armD = abs(abs(lat) - max(al, 0.0) * 0.354);
            float arm = exp(-armD * armD / (0.6 + al * 0.05)) * smoothstep(0.0, 6.0, al) * exp(-al / 220.0);
            float bow = exp(-dot(rel - dir * 5.0, rel - dir * 5.0) / 10.0);
            float n2 = fbm((vW.xz + dir * uTime * 8.0) * 0.9 + 7.0);
            float churn = smoothstep(0.3, 0.75, n * 0.7 + n2 * 0.5);
            float foam = (trail * churn * 1.1 + arm * 0.32 * smoothstep(0.35, 0.8, n2) + bow * 0.7) * uBoatSpeed;
            col = mix(col, vec3(0.95, 0.97, 0.97), clamp(foam, 0.0, 1.0));
          }
        }
        // white water: a burst and a spreading ring where a diver rolls in, and a stirred ring round each floating diver
        float ww = 0.0;
        for (int i = 0; i < 4; i++) {
          float age = uTime - uSplash[i].w;
          if (age > 0.0 && age < 7.0) {
            float d = length(vW.xz - uSplash[i].xz), r = 0.35 + age * 0.85;
            float n = vnoise(vW.xz * 3.1 + float(i) * 7.0 + uTime * 0.6);
            ww += (exp(-pow(d - r, 2.0) / (0.12 + age * 0.05)) * 0.8 + exp(-d * d / (0.5 + age * 0.6)) * 1.1) * exp(-age * 0.55) * smoothstep(0.25, 0.7, n + 0.25);
          }
        }
        for (int i = 0; i < 3; i++) {
          if (uFloaters[i].z > 0.5) {
            float d = length(vW.xz - uFloaters[i].xy);
            float n = vnoise(vW.xz * 4.0 + float(i) * 3.0 + uTime * 0.9);
            ww += exp(-pow(d - 0.55 - 0.08 * sin(uTime * 2.0 + float(i)), 2.0) / 0.03) * 0.55 * smoothstep(0.3, 0.7, n);
          }
        }
        // a tap on the sea: two rings spreading from the spot (sized to how far away it is, so it reads at any distance)
        float rAge = uTime - uRipple.z;
        if (rAge > 0.0 && rAge < 3.2) {
          float dr = length(vW.xz - uRipple.xy), camD = length(cameraPosition - vec3(uRipple.x, 0.0, uRipple.y));
          float R = rAge * (1.2 + camD * 0.035), wdt = 0.18 + camD * 0.0035, fadeR = 1.0 - rAge / 3.2;
          ww += (exp(-pow(dr - R, 2.0) / (wdt * wdt)) * 0.85 + exp(-pow(dr - R * 0.62, 2.0) / (wdt * wdt)) * 0.45) * fadeR * fadeR * uRipple.w;
        }
        col = mix(col, vec3(0.95, 0.97, 0.97), clamp(ww, 0.0, 1.0));
        // above-water haze towards the horizon colour in this exact direction
        vec3 hd = normalize(vec3(-V.x, 0.015, -V.z));
        vec3 fogC = mix(skyColor(hd), uPaperColor, uPaper);
        col = mix(col, fogC, 1.0 - exp(-dist * uFogDen));
        float a = 1.0;
        if (inBox && uIsOuter < 0.5) {
          // clear over the shallows, deep blue once the bottom drops away (from a boat, 15 m of water hides the reef)
          float clear = mix(0.5, 0.93, smoothstep(18.0, 130.0, s));
          // fully opaque well before the tile edge, so the end of the seabed can never show through at an angle
          float forced = smoothstep(uHalf - 430.0, uHalf - 170.0, edge) * (1.0 - uDiorama);
          a = max(max(clear, fres * 1.2), forced);
          a = mix(a, min(a, 0.26 + fres * 0.3), uDiorama);
        } else a = uOuter;
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
      }`})}function cx(n,t=300){const e=zn,i=[],r=[],s=[];for(let a=0;a<=t;a++){const c=a/t*Math.PI*2,l=Math.cos(c),u=Math.sin(c),f=Math.min(n.heightAt(l*e,u*e),0);i.push(l*e,0,u*e,l*e,f,u*e),r.push(a/t,0,a/t,1)}for(let a=0;a<t;a++){const c=a*2;s.push(c,c+1,c+2,c+1,c+3,c+2)}const o=new ae;return o.setAttribute("position",new qt(i,3)),o.setAttribute("uv",new qt(r,2)),o.setIndex(s),o}function ux(n){return new Ae({transparent:!0,depthWrite:!1,side:je,uniforms:{...n,uVex:{value:ts}},vertexShader:`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${pn}
      uniform float uTime; uniform float uDiorama; uniform float uVex; uniform float uSy;
      varying vec3 vW;
      void main(){
        float d = max(-vW.y / uSy, 0.0), dm = d / uVex;
        vec3 N = normalize(vec3(vW.x, 0.0, vW.z));
        vec3 V = normalize(cameraPosition - vW);
        float facing = dot(N, V);
        float fres = pow(1.0 - abs(facing), 2.5);
        // the colour of the water column itself: red is absorbed first (clear-water coefficients)
        vec3 lightAt = exp(-dm * vec3(0.38, 0.06, 0.018));
        vec3 col = mix(vec3(0.03, 0.2, 0.32), vec3(0.62, 0.92, 0.92) * lightAt + vec3(0.02, 0.12, 0.22), 0.85);
        // caustics and rays playing on the glass, strongest near the surface
        float ang = atan(vW.z, vW.x);
        vec2 cp = vec2(ang * 860.0 * 0.05, vW.y * 0.09);
        col += vec3(0.75, 1.0, 1.0) * caustic(cp, uTime * 0.7) * exp(-dm / 7.0) * 0.55;
        float rays = fbm(vec2(ang * 40.0 + uTime * 0.04, dm * 0.03));
        col += vec3(0.55, 0.9, 0.95) * smoothstep(0.55, 0.85, rays) * exp(-dm / 16.0) * 0.22;
        // engraved depth lines every 5 m
        float m5 = abs(fract(dm / 5.0 + 0.5) - 0.5) * 5.0;
        float w = fwidth(dm);
        float line = (1.0 - smoothstep(w * 0.6, w * 1.6, m5)) * step(2.5, dm);
        col = mix(col, vec3(0.94, 0.99, 1.0), line * 0.75);
        // the meniscus: a bright lip at the surface
        float men = smoothstep(1.8, 0.0, d);
        col = mix(col, vec3(0.96, 1.0, 1.0), men * 0.9);
        float a = mix(0.28, 0.62, smoothstep(0.0, 36.0, dm)) + fres * 0.4 + line * 0.35 + men * 0.5;
        if (facing < 0.0) a *= 0.45;
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0) * uDiorama);
      }`})}function hx(n){const t=new Ae({side:Dn,depthWrite:!1,depthTest:!1,uniforms:n,vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
      ${pn}
      ${In}
      uniform float uTime; uniform float uPaper; uniform vec3 uPaperColor; uniform vec2 uRes; uniform float uUnder; uniform vec3 uWaterCol;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        vec3 c = skyColor(d);
        float sd = dot(d, uSunDir);
        vec3 sunCol = mix(vec3(1.0, 0.98, 0.92), vec3(1.0, 0.72, 0.4), uDusk);
        c += sunCol * smoothstep(0.99955, 0.99975, sd) * 1.6;
        if (d.y > 0.0) {
          vec2 uv = d.xz / (d.y + 0.1);
          uv = mat2(0.8, -0.6, 0.6, 0.8) * uv;
          uv.x *= 0.28;
          float n = fbm(uv * 1.15 + vec2(uTime * 0.005, uTime * 0.002));
          float m = smoothstep(0.5, 0.74, n) * smoothstep(0.0, 0.1, d.y) * (1.0 - smoothstep(0.45, 0.9, d.y));
          float lit = pow(max(sd, 0.0), 3.0);
          vec3 day = vec3(1.0, 0.99, 0.97);
          vec3 dusk = mix(vec3(0.42, 0.28, 0.4), vec3(1.0, 0.6, 0.36), clamp(lit * 1.6 + (1.0 - smoothstep(0.5, 0.75, n)) * 0.35, 0.0, 1.0));
          c = mix(c, mix(day, dusk, uDusk), m * 0.9);
        }
        vec2 sp = gl_FragCoord.xy / uRes - 0.5;
        vec3 paper = uPaperColor * (1.0 - 0.1 * dot(sp, sp));
        c = mix(c, paper, uPaper);
        c = mix(c, uWaterCol, uUnder);
        gl_FragColor = vec4(c, 1.0);
      }`}),e=new ue(new Ws(1,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e}const fx=new oa,zr={},dx=(()=>{const n=new ui(new Uint8Array([0,0,0,0]),1,1);return n.needsUpdate=!0,n})();function On(n,t){if(!zr[n]){const e={value:dx,ready:!1,cbs:[]};zr[n]=e,fx.load(`/sprites/${n}.webp`,i=>{i.colorSpace=vn,i.anisotropy=4,i.generateMipmaps=!0,i.minFilter=Ti,e.value=i,e.ready=!0,e.cbs.forEach(r=>r(i))},void 0,()=>console.warn("sprite missing:",n))}return t&&(zr[n].ready?t(zr[n].value):zr[n].cbs.push(t)),zr[n]}const $i=`
  uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen;
  uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform float uClipR; uniform float uDiorama; uniform float uSy;
  vec3 fogIt(vec3 col, vec3 w){
    float dist = length(w - cameraPosition);
    vec3 hd = normalize(vec3(w.x - cameraPosition.x, 0.015, w.z - cameraPosition.z));
    return mix(mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen)), mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen)), uUnder);
  }`;function jl(n,t,{light:e=.35,instanced:i=!1,center:r=null,size:s=null}={}){return new Ae({side:je,alphaToCoverage:!0,transparent:!1,uniforms:{...n,uMap:t,uLight:{value:e},uCenter:{value:r||new P},uSize:{value:s||new kt(1,1)}},vertexShader:`
      uniform vec3 uCenter; uniform vec2 uSize; varying vec2 vUv; varying vec3 vW;
      void main(){
        vUv = uv;
        vec3 c = uCenter; vec2 sz = uSize;
        ${i?"c = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz; sz = vec2(instanceMatrix[0][0], instanceMatrix[1][1]);":""}
        vec3 toCam = cameraPosition - c; toCam.y = 0.0; toCam = normalize(toCam + 1e-5);
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
        vec3 w = c + right * position.x * sz.x + vec3(0.0, 1.0, 0.0) * position.y * sz.y;
        vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; uniform float uLight; varying vec2 vUv; varying vec3 vW;
      void main(){
        if (length(vW.xz) > uClipR) discard;
        vec4 c = texture2D(uMap, vUv);
        if (c.a < 0.35) discard;
        // pre-lit photographs: nudge toward the scene's light colour so they sit in the same morning or noon
        vec3 col = c.rgb * mix(vec3(1.0), uSunCol * 0.8 + uAmbTop * 0.35, uLight);
        gl_FragColor = vec4(fogIt(col, vW), c.a);
      }`})}function Zl(){return new dn(1,1).translate(0,.5,0)}function px(n,t,e=8){const i=n/t,r=[],s=[],o=[];for(let c=0;c<=e;c++){const l=c/e,u=(l-.5)*n;if(r.push(0,-i/2,u,0,i/2,u),s.push(l,0,l,1),c<e){const f=c*2;o.push(f,f+2,f+1,f+1,f+2,f+3)}}const a=new ae;return a.setAttribute("position",new qt(r,3)),a.setAttribute("uv",new qt(s,2)),a.setAttribute("normal",new qt(new Array(r.length/3).fill([1,0,0]).flat(),3)),a.setIndex(o),a}function mx(n){const t=n,e=[],i=[],r=[],s=(a,c)=>{const l=e.length/3;e.push(-a*t/2,0,-c*t/2,a*t/2,0,c*t/2,a*t/2,1,c*t/2,-a*t/2,1,-c*t/2),i.push(0,0,1,0,1,1,0,1),r.push(l,l+1,l+2,l,l+2,l+3)};s(1,0),s(0,1);const o=new ae;return o.setAttribute("position",new qt(e,3)),o.setAttribute("uv",new qt(i,2)),o.setAttribute("normal",new qt(new Array(e.length/3).fill([0,1,0]).flat(),3)),o.setIndex(r),o}function gx(n,t,e=.05){return new Ae({side:je,alphaToCoverage:!0,uniforms:{...n,uMap:t,uSway:{value:e}},vertexShader:`
      uniform float uTime; uniform float uSway; varying vec2 vUv; varying vec3 vW;
      void main(){
        vUv = uv; vec3 p = position;
        float ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.17;
        p.x += sin(uTime * 1.1 + ph) * uSway * p.y * p.y; p.z += cos(uTime * 0.9 + ph) * uSway * 0.6 * p.y * p.y;
        vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0); vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      ${bc}
      uniform sampler2D uMap; uniform float uTime; varying vec2 vUv; varying vec3 vW;
      uniform vec3 uWaterDeep; uniform float uColumn;
      #define uWaterDeepC uWaterDeep
      #define uColumnC uColumn
      void main(){
        vec4 c = texture2D(uMap, vUv);
        if (c.a < 0.35) discard;
        // flat cut-outs only read as coral from the side: seen from steeply above they dissolve away (dithered)
        float steep = abs(normalize(vW - cameraPosition).y);
        float keep = 1.0 - smoothstep(0.72, 0.9, steep);
        if (keep < 0.999 && fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) > keep) discard;
        float depth = max(-vW.y / uSy, 0.0);
        vec3 att = mix(exp(-depth * vec3(0.040, 0.016, 0.009)), vec3(1.0), uDiorama * 0.85);
        float shade = 0.65 + 0.35 * vUv.y;
        vec3 col = c.rgb * (uSunCol * 0.85 + uAmbTop * 0.6) * att * shade;
        col += caustic(vW.xz * 0.075, uTime * 0.8) * att * 0.25 * uSunCol * vUv.y;
        col = mix(col, uWaterDeepC, (1.0 - exp(-depth * 0.044)) * uColumnC * (1.0 - uUnder));
        col = mix(col, c.rgb * 1.15, clamp(torchAt(vW) * 1.5, 0.0, 1.0));
        gl_FragColor = vec4(fogIt(col, vW), c.a);
      }`})}function qo(n,t="",e="",i={}){return new Ae({uniforms:n,side:i.side??hi,vertexShader:`
      uniform float uTime;
      ${e}
      varying vec3 vW; varying vec3 vN; varying vec3 vC;
      void main(){
        vec3 p = position; vec3 n = normal;
        ${t}
        mat4 m = modelMatrix;
        #ifdef USE_INSTANCING
          m = m * instanceMatrix;
        #endif
        vec4 w = m * vec4(p, 1.0); vW = w.xyz; vN = normalize(mat3(m) * n);
        #ifdef USE_INSTANCING_COLOR
          vC = instanceColor;
        #else
          vC = vec3(1.0);
        #endif
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${pn}
      ${In}
      ${bc}
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform vec3 uAmbBot; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen;
      uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform float uTime; uniform float uDiorama; uniform float uSy;
      uniform vec3 uWaterDeep; uniform float uColumn;
      uniform sampler2D tForest; uniform sampler2D tAerial; uniform float uTexOn; uniform vec4 uAerialRect;
      uniform sampler2D tRock; uniform sampler2D tReef;
      varying vec3 vW; varying vec3 vN; varying vec3 vC;
      vec3 triL(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)); return texture2D(t, p.zy * s).rgb * w.x + texture2D(t, p.xz * s).rgb * w.y + texture2D(t, p.xy * s).rgb * w.z; }
      void main(){
        vec3 n = normalize(vN);
        if (!gl_FrontFacing) n = -n;
        float depth = max(-vW.y / uSy, 0.0);
        vec3 att = mix(exp(-depth * vec3(0.040, 0.016, 0.009)), exp(-depth * vec3(0.008, 0.004, 0.002)), uDiorama * 0.85);
        float diff = max(dot(n, uSunDir), 0.0);
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5);
        vec3 light = depth > 0.0 ? uSunCol * diff * att + amb * mix(vec3(1.0), att, 0.7) : uSunCol * diff + amb;
        vec3 col = vC * light;
        ${i.frag||""}
        if (depth > 0.0) { float tl = torchAt(vW); if (tl > 0.001) col = mix(col, col / max(light, vec3(0.06)) * 0.95, clamp(tl * 1.4, 0.0, 1.0)); }
        if (depth > 0.0) col = mix(col, uWaterDeep, (1.0 - exp(-depth * 0.044)) * uColumn * (1.0 - uUnder));
        float dist = length(vW - cameraPosition);
        vec3 hd = normalize(vec3(vW.x - cameraPosition.x, 0.015, vW.z - cameraPosition.z));
        col = mix(mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen)), mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen)), uUnder);
        gl_FragColor = vec4(col, 1.0);
      }`})}function vx(n,t,e){const i=sn(7),r=[],s=e>.6?4.2:7;for(let m=-420;m<420;m+=s)for(let v=-460;v<460;v+=s){const g=m+(i()-.5)*s,p=v+(i()-.5)*s;if(t.sdfAt(g,p)<10)continue;const x=t.heightAt(g,p)/ts,_=zt(.4,.56,rn(g/110,p/110)+ce(-p/900,-.3,.3)+x/Ec*.22);i()>_*.97+.03||r.push([g,p,x,_])}const o=new sa(1,1),a=new Cn(o,qo(n,`
    vec3 seed = instanceMatrix[3].xyz * 0.013;
    float lump = vnoiseV(p * 1.6 + seed) * 0.62 + vnoiseV(p * 3.9 + seed * 1.7) * 0.3;
    p += n * (lump - 0.46) * 0.75;
    if (p.y < 0.0) p.y *= 0.5;
    vec2 auvV = (instanceMatrix[3].xz - uAerialRect.xy) / uAerialRect.z;
    vec3 aerV = texture2D(tAerial, vec2(auvV.x, 1.0 - auvV.y)).rgb;
    float forest = smoothstep(0.012, 0.055, aerV.g - max(aerV.r, aerV.b));
    p *= mix(1.0, forest, uTexOn);`,`
    uniform sampler2D tAerial; uniform vec4 uAerialRect; uniform float uTexOn;
    float hv(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
    float vnoiseV(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(mix(hv(i), hv(i+vec3(1,0,0)), f.x), mix(hv(i+vec3(0,1,0)), hv(i+vec3(1,1,0)), f.x), f.y),
                 mix(mix(hv(i+vec3(0,0,1)), hv(i+vec3(1,0,1)), f.x), mix(hv(i+vec3(0,1,1)), hv(i+vec3(1,1,1)), f.x), f.y), f.z); }`,{frag:`
        if (uTexOn > 0.001) {
          vec2 auv = (vW.xz - uAerialRect.xy) / uAerialRect.z;
          vec3 aer = texture2D(tAerial, vec2(auv.x, 1.0 - auv.y)).rgb;
          vec3 leaf = mix(texture2D(tForest, vW.xz / 9.0 + vW.y * 0.05).rgb, texture2D(tForest, vW.xz / 31.0).rgb, 0.4);
          float isLand = 1.0 - smoothstep(0.04, 0.18, aer.b - max(aer.r, aer.g) * 0.95);
          vec3 tint = mix(vec3(0.22, 0.36, 0.15), aer * 1.15, isLand);
          vec3 tc = tint * (0.45 + 1.25 * dot(leaf, vec3(0.333)));
          float diff2 = max(dot(n, uSunDir), 0.0);
          col = mix(col, tc * (uSunCol * diff2 + mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5)), uTexOn);
        }
        col *= 0.55 + 0.55 * smoothstep(-0.5, 0.9, n.y); col += vec3(0.04, 0.05, 0.0) * smoothstep(0.6, 1.0, n.y) * (1.0 - uTexOn * 0.7);`}),r.length),c=new le,l=new Be,u=new P,f=new P,d=new pe,h=[[.16,.3,.11],[.22,.38,.13],[.29,.41,.15],[.13,.26,.11],[.34,.43,.18],[.24,.34,.12]];return r.forEach(([m,v,,g],p)=>{const y=1.9+i()*2.6+g*1.2,x=t.heightAt(m,v);f.set(m,x+y*.55,v),l.setFromEuler(new tn(0,i()*6.28,0)),u.set(y,y*(.8+i()*.5),y*(.85+i()*.3)),c.compose(f,l,u),a.setMatrixAt(p,c);const _=h[i()*h.length|0];d.setRGB(_[0],_[1],_[2]),a.setColorAt(p,d)}),a.frustumCulled=!1,a}function xx(n,t=46){const e=new ae,i=[0,0,1.2,-.25,0,-.9,.25,0,-.9,0,0,.5,-3,.1,-.2,0,0,-.5,0,0,.5,0,0,-.5,3,.1,-.2];e.setAttribute("position",new qt(i,3)),e.setAttribute("normal",new qt(new Array(i.length/3).fill([0,1,0]).flat(),3));const r=qo(n,`
    float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
    float flap = sin(uTime * 11.0 + ph) * 0.9 + 0.2;
    p.y += abs(p.x) * flap * 0.45;`,"",{side:je,frag:"col = mix(col, vec3(0.08, 0.06, 0.07), 0.55);"}),s=new Cn(e,r,t);s.frustumCulled=!1;const o=sn(11),a=Array.from({length:t},()=>({rad:260+o()*260,h:110+o()*140,ph:o()*6.28,sp:.07+o()*.05,wob:o()*10,size:1.6+o()*.8})),c=new le,l=new P,u=new P,f=new P(0,1,0),d=new P,h=new le,m=new Be,v=(g,p,y)=>{const x=g.ph+p*g.sp,_=g.rad+Math.sin(p*.3+g.wob)*60;return y.set(Math.cos(x)*_+Math.sin(p*.21+g.wob)*40,g.h+Math.sin(p*.5+g.wob)*22,Math.sin(x)*_*.8-40)};return s.update=g=>{a.forEach((p,y)=>{v(p,g,l),v(p,g+.2,u),h.lookAt(u,l,f),m.setFromRotationMatrix(h),d.setScalar(p.size),c.compose(l,m,d),s.setMatrixAt(y,c)}),s.instanceMatrix.needsUpdate=!0},s}function _x(n,t=1600){const e=sn(5),i=new Float32Array(t*3),r=new Float32Array(t);for(let c=0;c<t;c++)i[c*3]=e()*140,i[c*3+1]=e()*140,i[c*3+2]=e()*140,r[c]=.5+e()*1.5;const s=new ae;s.setAttribute("position",new he(i,3)),s.setAttribute("aSize",new he(r,1));const o=new Ae({transparent:!0,depthWrite:!1,blending:$r,uniforms:n,vertexShader:`
      uniform float uTime; uniform float uPx; attribute float aSize; varying float vA;
      void main(){
        vec3 b = position + vec3(sin(uTime * 0.2 + position.y) * 2.0, -uTime * 0.6, cos(uTime * 0.17 + position.x) * 2.0);
        vec3 w = mod(b - cameraPosition + 70.0, 140.0) - 70.0 + cameraPosition;
        vec4 mv = viewMatrix * vec4(w, 1.0);
        gl_Position = projectionMatrix * mv;
        float d = -mv.z;
        gl_PointSize = aSize * uPx * 30.0 / max(d, 1.0);
        vA = exp(-d * 0.02) * step(w.y, -0.5);
      }`,fragmentShader:`
      uniform float uUnder; varying float vA;
      void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c)); gl_FragColor = vec4(vec3(0.75, 0.88, 0.9), a * vA * 0.55 * uUnder); }`}),a=new zs(s,o);return a.frustumCulled=!1,a}function yx(n,t=9){const e=new dn(1,1,1,1);e.translate(0,-.5,0);const i=sn(21),r=new Qe,s=new Ae({transparent:!0,depthWrite:!1,blending:$r,side:je,uniforms:{...n,uSeed:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${pn}
      uniform float uTime; uniform float uUnder; uniform float uSeed; varying vec2 vUv; varying vec3 vW;
      void main(){
        float edge = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.65, vUv.x);
        float fall = pow(vUv.y, 1.6);
        float flick = 0.55 + 0.45 * vnoise(vec2(uTime * 0.6 + uSeed * 9.0, vUv.x * 3.0));
        float d = length(vW - cameraPosition);
        float a = edge * fall * flick * smoothstep(4.0, 30.0, d) * exp(-d * 0.012);
        gl_FragColor = vec4(vec3(0.7, 0.92, 0.95) * a * 0.22 * uUnder, 1.0);
      }`}),o=[];for(let a=0;a<t;a++){const c=s.clone();c.uniforms={...n,uSeed:{value:i()}};const l=new ue(e,c);l.frustumCulled=!1,o.push({mesh:l,ox:(i()-.5)*120,oz:(i()-.5)*120,w:4+i()*10,len:60+i()*50}),r.add(l)}return r.update=a=>{for(const c of o)c.mesh.position.set(Math.round((a.position.x+c.ox)/4)*4,0,Math.round((a.position.z+c.oz)/4)*4),c.mesh.scale.set(c.w,c.len,1),c.mesh.rotation.set(0,Math.atan2(a.position.x-c.mesh.position.x,a.position.z-c.mesh.position.z),.12)},r}function Mx(n,t){const e=Es.map(([d,h])=>new P(d,0,h)),r=new Go(e,!0,"centripetal").getSpacedPoints(600),s=[],o=[],a=[],c=[];for(let d=0;d<r.length;d++){const h=r[d],m=r[(d+1)%r.length],v=m.x-h.x,g=m.z-h.z,p=Math.hypot(v,g)||1,y=-g/p,x=v/p,_=2.5;if(s.push(h.x+y*7,_,h.z+x*7,h.x-y*7,_,h.z-x*7),o.push(d/(r.length-1),d/(r.length-1)),a.push(-1,1),d<r.length-1){const w=d*2;c.push(w,w+1,w+2,w+1,w+3,w+2)}}const l=new ae;l.setAttribute("position",new qt(s,3)),l.setAttribute("aAlong",new qt(o,1)),l.setAttribute("aSide",new qt(a,1)),l.setIndex(c);const u=new Ae({transparent:!0,depthWrite:!1,depthTest:!1,blending:$r,side:je,uniforms:n,vertexShader:"attribute float aAlong; attribute float aSide; varying float vA; varying float vS; void main(){ vA = aAlong; vS = aSide; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uHeart; uniform float uTime; varying float vA; varying float vS;
      void main(){
        float drawn = step(vA, uHeart);
        float head = exp(-abs(vA - uHeart) * 60.0) * step(uHeart, 0.999);
        float core = exp(-vS * vS * 9.0) + exp(-vS * vS * 1.5) * 0.35;
        float pulse = 0.8 + 0.2 * sin(vA * 80.0 - uTime * 3.0);
        vec3 c = vec3(1.0, 0.8, 0.5);
        gl_FragColor = vec4(c * (core * drawn * pulse * 1.5 + head * 3.0) * smoothstep(0.0, 0.05, uHeart), 1.0);
      }`}),f=new ue(l,u);return f.frustumCulled=!1,f.renderOrder=5,f}function Sx(n,t=70){const e=sn(77),i=new Float32Array(t*3),r=new Float32Array(t);for(let c=0;c<t;c++)i[c*3]=(e()-.5)*3,i[c*3+1]=0,i[c*3+2]=(e()-.5)*3,r[c]=e();const s=new ae;s.setAttribute("position",new he(i,3)),s.setAttribute("aSeed",new he(r,1));const o=new Ae({transparent:!0,depthWrite:!1,uniforms:{...n,uOrigin:{value:new P}},vertexShader:`
      uniform float uTime; uniform float uPx; uniform vec3 uOrigin; attribute float aSeed; varying float vA;
      void main(){
        float cyc = 5.0; float t = mod(uTime + aSeed * 1.2, cyc);
        float rise = t * (2.0 + aSeed * 2.5);
        vec3 w = uOrigin + position + vec3(sin(t * 4.0 + aSeed * 20.0) * 0.3, rise, cos(t * 3.0 + aSeed * 10.0) * 0.3);
        vec4 mv = viewMatrix * vec4(w, 1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = (2.0 + aSeed * 5.0) * uPx * 6.0 / max(-mv.z, 0.5);
        vA = smoothstep(0.0, 0.3, t) * (1.0 - smoothstep(1.8, 2.6, t)) * step(w.y, -0.3);
      }`,fragmentShader:`
      uniform float uUnder; varying float vA;
      void main(){ vec2 c = gl_PointCoord - 0.5; float r = length(c); float ring = smoothstep(0.5, 0.42, r) * (0.35 + smoothstep(0.25, 0.45, r)); float hi = smoothstep(0.12, 0.0, length(c - vec2(-0.14, -0.14)));
        gl_FragColor = vec4(vec3(0.85, 0.97, 1.0), (ring * 0.6 + hi) * vA * uUnder); }`}),a=new zs(s,o);return a.frustumCulled=!1,a}function wx(n,t,e,i){const r=sn(404),s=new Qe,o=(M,b,T)=>{for(let I=0;I<80;I++){let O,z;if(r()<T){const U=r()*6.283,k=Math.sqrt(r())*170;O=e.x+Math.cos(U)*k,z=e.z-30+Math.sin(U)*k}else O=(r()-.5)*1700,z=(r()-.5)*1700;const F=-t.sdfAt(O,z);if(F>M&&F<b&&Math.hypot(O,z)<zn-20)return[O,z,F]}return null},a=`float hh = fract(sin(dot(floor(p * 3.0) + instanceMatrix[3].xyz, vec3(12.9, 78.2, 37.7))) * 43758.5);
    p += n * (hh - 0.5) * 0.22;`,c=new le,l=new Be,u=new P,f=new P,d=new pe,h=new tn,m=(M,b,T)=>{let I=0;for(let O=0;O<b;O++){const z=T();if(!z)continue;const[F,U,k,D,H,G]=z;f.set(F,k,U),h.set((r()-.5)*.25,H,(r()-.5)*.25),l.setFromEuler(h),u.set(D[0],D[1],D[2]),c.compose(f,l,u),M.setMatrixAt(I,c),d.setRGB(G[0],G[1],G[2]),M.setColorAt(I,d),I++}M.count=I,M.frustumCulled=!1,s.add(M)},v=i>.6?1:.45,g={frag:"if (uTexOn > 0.001) col = mix(col, triL(tRock, vW, n, 0.22) * (0.6 + 0.6 * vC) * light * 1.25, uTexOn);"},p={frag:"if (uTexOn > 0.001) col = mix(col, triL(tReef, vW, n, 0.3) * mix(vec3(1.0), vC * 1.6, 0.45) * light * 1.2, uTexOn);"},y=new Cn(new sa(1,1),qo(n,a,"",g),Math.round(300*v));m(y,Math.round(300*v),()=>{const M=o(2,90,.25);if(!M)return null;const[b,T,I]=M,O=(2+r()*4.5)*(1.2-Math.min(I,90)/150),z=.3+r()*.1;return[b,T,t.heightAt(b,T)+O*.25,[O,O*(.55+r()*.3),O*(.8+r()*.4)],r()*6.28,[z+.04,z,z-.03]]});const x=new Ws(1,22,10,0,Math.PI*2,0,Math.PI/2),_=[[.76,.63,.38],[.64,.62,.36],[.82,.72,.52],[.58,.52,.32],[.72,.56,.42]],w=`vec3 sd = instanceMatrix[3].xyz * 0.07;
    float kn = vn3(p * 2.3 + sd) * 0.65 + vn3(p * 5.5 + sd.zxy) * 0.35;
    p += n * (kn - 0.5) * 0.42 * smoothstep(-0.05, 0.25, p.y);`,S=`float h3(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
    float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
                 mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }`,E=new Cn(x,qo(n,w,S,p),Math.round(380*v));m(E,Math.round(380*v),()=>{const M=o(10,260,.3);if(!M)return null;const[b,T]=M,I=.9+r()*2.1;return[b,T,t.heightAt(b,T)-.35,[I*(.85+r()*.5),I*(.42+r()*.3),I*(.85+r()*.5)],r()*6.28,_[r()*_.length|0]]});const A=[{name:"staghorn",aspect:1.4043,n:220,h:[1.2,2.6],sway:0,s:[12,230]},{name:"softcoral",aspect:1.0039,n:170,h:[1,2.2],sway:.06,s:[10,200]},{name:"sponge",aspect:.752,n:120,h:[.9,2],sway:0,s:[14,220]},{name:"seafan",aspect:.7285,n:110,h:[1.4,3],sway:.05,s:[16,200]}];for(const M of A){const b=new Cn(mx(M.aspect),gx(n,On(M.name),M.sway),Math.round(M.n*1.5*v));let T=0;for(let I=0;I<Math.round(M.n*v);I++){const O=o(M.s[0],M.s[1],.45);if(!O)continue;const[z,F]=O,U=M.h[0]+r()*(M.h[1]-M.h[0]);f.set(z,t.heightAt(z,F)-.15,F),h.set(0,r()*6.28,0),l.setFromEuler(h),u.set(U,U,U),c.compose(f,l,u),b.setMatrixAt(T++,c)}for(let I=0;I<Math.round(M.n*.45*v);I++){const O=r()*6.28,z=Math.sqrt(r())*46,F=e.x+6+Math.cos(O)*z,U=e.z+22+Math.sin(O)*z*.8;if(-t.sdfAt(F,U)<6)continue;const k=(M.h[0]+r()*(M.h[1]-M.h[0]))*1.15;f.set(F,t.heightAt(F,U)-.15,U),h.set(0,r()*6.28,0),l.setFromEuler(h),u.set(k,k,k),c.compose(f,l,u),b.setMatrixAt(T++,c)}b.count=T,b.frustumCulled=!1,s.add(b)}return s}function bx(n){const t=new Ae({side:je,alphaToCoverage:!0,uniforms:{...n,uMap:On("eagle"),uRoll:{value:0},uSize:{value:new kt(2.05,1.02)},uFade:{value:0},uFlip:{value:-1}},vertexShader:`
      uniform float uTime; uniform float uRoll; uniform vec2 uSize; uniform float uFlip; varying vec2 vUv; varying vec3 vW;
      void main(){
        vUv = vec2(uFlip < 0.0 ? 1.0 - uv.x : uv.x, uv.y);
        vec2 q = position.xy;
        // wingtips flex a little as it rides the air
        q.y += sin(uTime * 1.6) * 0.035 * q.x * q.x * 4.0;
        float c = cos(uRoll), s = sin(uRoll);
        q = vec2(c * q.x - s * q.y, s * q.x + c * q.y) * uSize;
        vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 w = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + right * q.x + up * q.y;
        vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; uniform float uFade; varying vec2 vUv; varying vec3 vW;
      void main(){
        vec4 c = texture2D(uMap, vUv);
        c.a *= uFade;
        if (c.a < 0.35) discard;
        // seen from below against a low sun: the underside sits in shade, thin feathers glow at the edges
        vec3 V = normalize(vW - cameraPosition);
        float back = pow(max(dot(V, uSunDir), 0.0), 3.0);
        float lum = dot(c.rgb, vec3(0.333));
        vec3 col = c.rgb * (uAmbTop * 0.95 + uSunCol * 0.32) + uSunCol * back * 0.35 * (1.0 - smoothstep(0.1, 0.6, lum));
        gl_FragColor = vec4(fogIt(col, vW), c.a);
      }`}),e=new ue(new dn(1,1),t);e.frustumCulled=!1;const i=new P(1500,22,470),r=new P(-1650,40,-430).normalize(),s=new P(-r.z,0,r.x).normalize(),o=i.clone().addScaledVector(r,78).add(new P(0,16,0)),a=44,c=26,l=new P,u=new P,f=(d,h,m)=>{const v=d/c*Math.PI*2;return m.copy(o).addScaledVector(s,Math.cos(v)*a*h).addScaledVector(r,Math.sin(v)*a*.75).add(new P(0,Math.sin(v*2+.6)*3.5,0))};return e.update=(d,h,m=1)=>{if(e.visible=h>.01,!e.visible)return;f(d,m,l),f(d-.2,m,u),e.position.copy(l),t.uniforms.uFade.value=1;const v=(l.x-u.x)*s.x+(l.z-u.z)*s.z;t.uniforms.uFlip.value=v<0?1:-1,t.uniforms.uRoll.value=(v<0?-1:1)*.18+Math.sin(d*.7)*.05},e}function Zu(n,t,e){const r=new Float32Array(t*e);for(let s=0;s<t*e;s++)r[s]=n[s]?1e9:0;for(let s=0;s<e;s++)for(let o=0;o<t;o++){const a=s*t+o;if(!r[a])continue;let c=r[a];(o===0||s===0)&&(c=Math.min(c,1)),o>0&&(c=Math.min(c,r[a-1]+1)),s>0&&(c=Math.min(c,r[a-t]+1),o>0&&(c=Math.min(c,r[a-t-1]+1.414)),o<t-1&&(c=Math.min(c,r[a-t+1]+1.414))),r[a]=c}for(let s=e-1;s>=0;s--)for(let o=t-1;o>=0;o--){const a=s*t+o;if(!r[a])continue;let c=r[a];(o===t-1||s===e-1)&&(c=Math.min(c,1)),o<t-1&&(c=Math.min(c,r[a+1]+1)),s<e-1&&(c=Math.min(c,r[a+t]+1),o<t-1&&(c=Math.min(c,r[a+t+1]+1.414)),o>0&&(c=Math.min(c,r[a+t-1]+1.414))),r[a]=c}return r}function Ex(n,t,e,i=.45){const s=Math.max(24,Math.round(256/e)),o=256*s,a=document.createElement("canvas");a.width=256,a.height=s;const c=a.getContext("2d",{willReadFrequently:!0});c.drawImage(n,0,0,256,s);const l=c.getImageData(0,0,256,s).data,u=new Uint8Array(o);for(let F=0;F<o;F++)u[F]=l[F*4+3]>127?1:0;const f=Zu(u,256,s);let d=1;for(let F=0;F<o;F++)u[F]&&(d=Math.max(d,f[F]));const h=Math.max(1.5,d*.32),m=new Uint8Array(o);for(let F=0;F<o;F++)m[F]=f[F]>h?0:1;const v=Zu(m,256,s),g=new Float32Array(256).fill(-1),p=new Float32Array(256).fill(-1);for(let F=0;F<256;F++)for(let U=0;U<s;U++){const k=U*256+F;!u[k]||v[k]>h||(g[F]<0&&(g[F]=U),p[F]=U+1)}let y=0,x=255;for(;y<256&&g[y]<0;)y++;for(;x>y&&g[x]<0;)x--;const _=t/256,w=t/e/s,S=[],E=[],A=[],M=(F,U,k,D=U)=>(S.push(k*_,(s/2-U)*w,(F/256-.5)*t),E.push(F/256,1-D/s),S.length/3-1),b=F=>{let U=0,k=0,D=0;for(let H=-2;H<=2;H++){const G=Math.round(F)+H;G<y||G>x||g[G]<0||(U+=g[G],k+=p[G],D++)}return D?[U/D,k/D]:[s/2,s/2]};if(x>y+4){const k=(H,G,W)=>[i*G*Math.sin(W),G*Math.cos(W)],D=S.length/3;for(let H=0;H<=28;H++){const G=y+.5+(x-y-1)*(H/28),[W,X]=b(G),st=(W+X)/2,ot=Math.max(.3,(X-W)/2);for(let V=0;V<12;V++){const[nt,gt]=k(st,ot,V/12*Math.PI*2);M(G,st-gt,nt,st-gt*Math.max(0,ot-1)/ot)}}for(let H=0;H<28;H++)for(let G=0;G<12;G++){const W=D+H*12+G,X=D+H*12+(G+1)%12,st=W+12,ot=X+12;A.push(W,X,st,X,ot,st)}for(const H of[0,28]){const G=y+.5+(x-y-1)*(H/28),[W,X]=b(G),st=M(G,(W+X)/2,0);for(let ot=0;ot<12;ot++)A.push(st,D+H*12+ot,D+H*12+(ot+1)%12)}}const T=S.length/3,I=20,O=2;for(let F=0;F<=O;F++)for(let U=0;U<=I;U++)M(256*(U/I),s*(F/O),0);for(let F=0;F<O;F++)for(let U=0;U<I;U++){const k=T+F*(I+1)+U,D=k+1,H=k+I+1,G=H+1;A.push(k,H,D,D,H,G)}const z=new ae;return z.setAttribute("position",new qt(S,3)),z.setAttribute("uv",new qt(E,2)),z.setIndex(A),z.computeVertexNormals(),z}function qr(n,t,{len:e,height:i,wave:r=1,instanced:s=!1,turtle:o=!1,fin:a=!1,solid:c=!1,shade:l=[1,1,1]}){const u={};return s&&(u.INSTANCED=1),o&&(u.TURTLE=1),a&&(u.FIN=1),c&&(u.SOLID=1),new Ae({side:je,alphaToCoverage:!0,defines:u,uniforms:{...n,uMap:t,uPhase:{value:0},uAmp:{value:0},uStroke:{value:0},uLen:{value:e},uH:{value:i},uWave:{value:r},uFade:{value:1},uShade:{value:new P(...l)}},vertexShader:`
      #ifdef INSTANCED
        attribute vec2 aSwim;
      #endif
      uniform float uPhase; uniform float uAmp; uniform float uStroke; uniform float uLen; uniform float uH; uniform float uWave;
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      vec2 rot2(vec2 v, float a){ float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }
      void main(){
        vUv = uv; vec3 p = position; vec3 n = normal;
        float ph = uPhase, amp = uAmp;
        #ifdef INSTANCED
          ph = aSwim.x; amp = aSwim.y;
        #endif
        {
          // the body wave: rolls from head to tail, growing towards the tail
          float s = clamp(0.5 - p.z / uLen, 0.0, 1.0);
          float A = amp * uLen * (0.03 + 0.97 * s * s);
          float k = 6.2832 / (uLen * uWave);
          float arg = ph - k * (uLen * 0.5 - p.z);
          p.x += A * sin(arg);
          // the sideways shear tilts the surface: n.z picks up -n.x times the slope of the wave
          n = normalize(vec3(n.x, n.y, n.z - n.x * A * k * cos(arg)));
        }
        mat4 M = modelMatrix;
        #ifdef INSTANCED
          M = modelMatrix * instanceMatrix;
        #endif
        vec4 w = M * vec4(p, 1.0); vW = w.xyz; vN = normalize(mat3(M) * n);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; uniform float uFade; uniform float uTime; uniform vec3 uShade;
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){
        vec4 c = texture2D(uMap, vUv);
        #ifndef SOLID
          if (c.a < 0.45) discard; // (a solid body's outline is its geometry: its picture is padded beyond the edge)
        #endif
        if (uFade < 0.999 && fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) > uFade) discard;
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        #ifdef TURTLE
          // the plastron and the undersides of the flippers, neck and head are pale and creamy
          float lum = dot(c.rgb, vec3(0.333));
          c.rgb = mix(c.rgb, vec3(0.86, 0.80, 0.62) * (0.72 + 0.4 * lum), (1.0 - smoothstep(-0.55, -0.05, n.y)) * 0.85);
        #endif
        #ifdef FIN
          // the underside of a pectoral or pelvic fin is pale, as on the belly
          c.rgb = mix(c.rgb, vec3(0.80, 0.83, 0.82), 0.75 * smoothstep(0.05, 0.5, -n.y));
        #endif
        float depth = max(-vW.y / uSy, 0.0);
        vec3 att = mix(exp(-depth * vec3(0.040, 0.016, 0.009)), vec3(1.0), uDiorama * 0.85);
        // underwater, light comes from above: lit backs, shadowed bellies
        float top = smoothstep(-0.75, 0.9, n.y);
        vec3 col = c.rgb * uShade * (uSunCol * (0.5 + 0.65 * top) + uAmbTop * 0.5) * att;
        col += c.rgb * caustic(vW.xz * 0.11, uTime * 0.8) * 0.3 * att * uSunCol * max(n.y, 0.0);
        #ifdef INSTANCED
          // a silvery flash as a flank turns to the light
          vec3 V = normalize(cameraPosition - vW), Hh = normalize(uSunDir + V);
          col += vec3(0.75, 0.92, 1.0) * pow(max(dot(n, Hh), 0.0), 20.0) * 0.45 * att;
        #endif
        gl_FragColor = vec4(fogIt(col, vW), 1.0);
      }`})}function Ku(n,{want:t,L:e,dt:i,base:r,vmax:s,open:o,rest:a,unseen:c}){if(!n.on)return n.idle=(n.idle??1e9)+i,o&&n.idle>a&&c(0)&&(n.on=!0,n.s=0,n.v=r),n;const l=n.s<e?ce(r+.35*(t-n.s),r*.6,s):r;return n.v+=(l-n.v)*(1-Math.exp(-i/1.5)),n.s+=n.v*i,n.s>e&&c(n.s)&&(n.on=!1,n.idle=0),n}const Wi={W:1024,H:330,end:870,top:[[3,178],[10,165],[25,150],[50,138],[75,129],[100,122],[150,110],[200,99],[250,91],[300,85],[350,82],[400,82],[450,84],[500,88],[550,95],[600,103],[650,112],[700,122],[750,133],[800,143],[830,147],[870,150]],bot:[[3,192],[10,205],[20,215],[40,225],[60,233],[100,243],[150,251],[200,257],[250,260],[300,258],[350,255],[400,249],[450,241],[500,233],[550,231],[600,228],[650,224],[700,214],[750,205],[800,196],[830,192],[870,190]],ratio:[[0,1.5],[50,1.45],[150,1.35],[250,1.2],[350,1.1],[450,1],[550,.95],[650,.85],[750,.7],[870,.55]],fins:[{hinge:[[350,200],[466,206]],box:[326,182,550,330],out:1.2},{hinge:[[612,229],[670,221]],box:[594,212,682,256],out:.8}]},Xa=(n,t)=>{if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){const[i,r]=n[e-1],[s,o]=n[e];return r+(o-r)*(t-i)/(s-i)}return n[n.length-1][1]};function Tx(n,t){const{W:e,H:i,end:r}=Wi,s=t/e,o=document.createElement("canvas");o.width=e,o.height=i;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,e,i);const c=a.getImageData(0,0,e,i).data,l=T=>{const I=Math.min(e-1,Math.max(0,Math.round(T)));let O=-1,z=-1;for(let F=0;F<i;F++)c[(F*e+I)*4+3]>127&&(O<0&&(O=F),z=F);return[O,z]},u=(T,I)=>I.some(([O,z])=>T>=O&&T<=z),f=T=>{const[I,O]=l(T);let z=u(T,[[505,708],[728,806],[834,880]])?Math.max(I,Xa(Wi.top,T)):I+.3,F=u(T,[[728,806],[834,880]])?Math.min(O,Xa(Wi.bot,T)):O-.3;F>z||(z=F=(z+F)/2);const U=(F-z)/2;return{x:T,c:(z+F)/2,b:U,w:Xa(Wi.ratio,T)*U}},d=(T,I)=>{const O=Math.sin(I),z=Math.cos(I),F=z<0?2.5:2.1;return[T.w*Math.sign(O)*Math.abs(O)**(2/F),T.b*Math.sign(z)*Math.abs(z)**(2/F)]},h=[],m=[],v=[],g=(T,I,O,z=I)=>(h.push(O*s,(i/2-I)*s,(e/2-T)*s),m.push(T/e,1-z/i),h.length/3-1),p=(T,I)=>T.c-I*Math.max(0,T.b-2.5)/Math.max(T.b,.001),y=90,x=32,_=[];for(let T=0;T<=y;T++){const I=f(3+(r-3)*(T/y)**1.5);_.push(I);for(let O=0;O<x;O++){const[z,F]=d(I,O/x*Math.PI*2);g(I.x,I.c-F,z,p(I,F))}}for(let T=0;T<y;T++)for(let I=0;I<x;I++){const O=T*x+I,z=T*x+(I+1)%x,F=O+x,U=z+x;v.push(O,z,F,z,U,F)}for(const[T,I]of[[0,1],[y,-1]]){const O=_[T],z=g(O.x,O.c,0),F=h.length/3;for(let U=0;U<x;U++){const[k,D]=d(O,U/x*Math.PI*2);g(O.x,O.c-D,k,p(O,D))}for(let U=0;U<x;U++){const k=F+U,D=F+(U+1)%x;I>0?v.push(z,D,k):v.push(z,k,D)}}const w=new ae;w.setAttribute("position",new qt(h,3)),w.setAttribute("uv",new qt(m,2)),w.setIndex(v),w.computeVertexNormals(),h.length=0,m.length=0,v.length=0;const S=64,E=10,A=470;for(let T=0;T<=E;T++)for(let I=0;I<=S;I++)g(A+(e-A)*(I/S),i*(T/E),0);for(let T=0;T<E;T++)for(let I=0;I<S;I++){const O=T*(S+1)+I,z=O+1,F=O+S+1,U=F+1;v.push(O,F,z,z,F,U)}const M=new ae;return M.setAttribute("position",new qt(h,3)),M.setAttribute("uv",new qt(m,2)),M.setIndex(v),M.computeVertexNormals(),{geo:w,sheet:M,surfaceX:(T,I)=>{const O=f(T),z=ce((O.c-I)/Math.max(O.b,.001),-1,1),F=z<0?2.5:2.1;return O.w*Math.max(0,1-Math.abs(z)**F)**(1/F)}}}function Ax(n,t){const{W:e,H:i}=Wi,r=n/e,s=[],o=[],a=[],c=new P,l=new Be,u=new P,f=new P,d=new P;for(const m of Wi.fins)for(const v of[1,-1]){const[[g,p],[y,x]]=m.hinge,[_,w,S,E]=m.box,A=22,M=16,b=s.length/3,T=t(g,p)*.96,I=t(y,x)*.96,O=(z,F,U)=>U.set(v*Ut(T,I,ce((z-g)/(y-g)))*r,(i/2-F)*r,(e/2-z)*r);O(g,p,u),O(y,x,f),d.subVectors(f,u).normalize(),l.setFromAxisAngle(d,m.out),O(S,E,c).sub(u).applyQuaternion(l),Math.sign(c.x)!==v&&l.setFromAxisAngle(d,-m.out);for(let z=0;z<=M;z++)for(let F=0;F<=A;F++){const U=_+(S-_)*(F/A),k=w+(E-w)*(z/M);O(U,k,c).sub(u).applyQuaternion(l).add(u),s.push(c.x,c.y,c.z),o.push(U/e,1-k/i)}for(let z=0;z<M;z++)for(let F=0;F<A;F++){const U=b+z*(A+1)+F,k=U+1,D=U+A+1,H=D+1;a.push(U,D,k,k,D,H)}}const h=new ae;return h.setAttribute("position",new qt(s,3)),h.setAttribute("uv",new qt(o,2)),h.setIndex(a),h.computeVertexNormals(),h}function Cx(n){const e=Wi.W/Wi.H,i={len:8.5,height:8.5/e,wave:1.15,shade:[.72,.84,.92]},r=qr(n,On("whaleshark-body"),{...i,solid:!0}),s=qr(n,On("whaleshark-body"),i),o=qr(n,On("whaleshark-fins"),{...i,fin:!0});for(const d of[s,o])d.uniforms.uPhase=r.uniforms.uPhase,d.uniforms.uAmp=r.uniforms.uAmp;const a=new Qe,c=()=>new ae,l=new ue(c(),r),u=new ue(c(),s),f=new ue(c(),o);On("whaleshark-body",d=>{const h=Tx(d.image,8.5);l.geometry.dispose(),l.geometry=h.geo,u.geometry.dispose(),u.geometry=h.sheet,f.geometry.dispose(),f.geometry=Ax(8.5,h.surfaceX)});for(const d of[l,u,f])d.frustumCulled=!1,d.renderOrder=8.5,a.add(d);return a.material=r,a.rotation.order="YXZ",a.state={s:0,v:1.3,ph:0},a}const ii={W:1024,H:1034,cx:428,cy:509,rx:322,ry:310,len:.68,dome:.16,belly:.055,neck:[690,1003],neckBand:[425,593],flippers:[{hinge:[700,392],box:[565,0,800,440],front:!0,side:-1},{hinge:[700,626],box:[565,578,800,1034],front:!0,side:1},{hinge:[165,400],box:[15,290,230,460],front:!1,side:-1},{hinge:[165,618],box:[15,558,230,730],front:!1,side:1}]},$o=ii.len/(2*ii.rx);function Rx(n){const{W:t,H:e,cx:i,cy:r,rx:s,ry:o}=ii,a=$o,c=document.createElement("canvas");c.width=t,c.height=e;const l=c.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0,t,e);const u=l.getImageData(0,0,t,e).data,f=(U,k)=>{const D=Math.round(U),H=Math.round(k);return D<0||H<0||D>=t||H>=e?0:u[(H*t+D)*4+3]},d=[],h=[],m=[],v=(U,k,D,H=U,G=k)=>(d.push((k-r)*a,D,(U-i)*a),h.push(H/t,1-G/e),d.length/3-1),g=120,p=20,y=[];for(let U=0;U<g;U++){const k=U/g*Math.PI*2,D=Math.cos(k),H=Math.sin(k);let G=1;for(let W=.7;W<=1;W+=.003)if(f(i+D*s*W,r+H*o*W)<128){G=W-.003;break}y.push(G)}const x=y.map((U,k)=>(y[(k+g-1)%g]+2*U+y[(k+1)%g])/4),_=U=>.012+(ii.dome-.012)*Math.pow(Math.max(0,1-U**2.2),.55),w=U=>-(.006+(ii.belly-.006)*(1-zt(.58,.86,U))*(1-.12*U*U)),S={};for(const[U,k]of[[1,_],[-1,w]]){const D=v(i,r,k(0)),H=d.length/3;for(let W=1;W<=p;W++)for(let X=0;X<g;X++){const st=W/p,ot=X/g*Math.PI*2,V=x[X]*st,nt=i+Math.cos(ot)*s*V,gt=r+Math.sin(ot)*o*V,Tt=Math.min(V,x[X]-.012);v(nt,gt,k(st),i+Math.cos(ot)*s*Tt,r+Math.sin(ot)*o*Tt)}const G=(W,X)=>H+(W-1)*g+X%g;S[U]=W=>G(p,W);for(let W=0;W<g;W++)U>0?m.push(D,G(1,W+1),G(1,W)):m.push(D,G(1,W),G(1,W+1));for(let W=1;W<p;W++)for(let X=0;X<g;X++){const st=G(W,X),ot=G(W,X+1),V=G(W+1,X),nt=G(W+1,X+1);U>0?m.push(st,ot,V,ot,nt,V):m.push(st,V,ot,ot,V,nt)}}for(let U=0;U<g;U++){const k=S[1](U),D=S[1](U+1),H=S[-1](U),G=S[-1](U+1);m.push(k,H,D,D,H,G)}const[E,A]=ii.neck,[M,b]=ii.neckBand,T=40,I=20,O=d.length/3,z=[];for(let U=0;U<=T;U++){const k=E+(A-E)*(1-(1-U/T)**1.4);let D=-1,H=-1;for(let V=M;V<=b;V++)f(k,V)>127&&(D<0&&(D=V),H=V);D<0&&(D=H=r);const G=Math.max(.5,(H-D)/2),W=(D+H)/2,X=ce((k-840)/80),st=G*Ut(.72,.8,X),ot=Ut(.03,.045,X);z.push({px:k,c:W,hw:G,hh:st,yc:ot});for(let V=0;V<I;V++){const nt=V/I*Math.PI*2,gt=Math.sin(nt),Tt=Math.cos(nt),Nt=G*Math.sign(gt)*Math.abs(gt)**(2/2.3),yt=st*Math.sign(Tt)*Math.abs(Tt)**(2/2.3);v(k,W+Nt,ot+yt*a,k,W+Nt*Math.max(0,G-2.5)/G)}}for(let U=0;U<T;U++)for(let k=0;k<I;k++){const D=O+U*I+k,H=O+U*I+(k+1)%I,G=D+I,W=H+I;m.push(D,G,H,H,G,W)}{const U=z[T],k=v(U.px+1,U.c,U.yc);for(let D=0;D<I;D++)m.push(O+T*I+D,O+T*I+(D+1)%I,k)}const F=new ae;return F.setAttribute("position",new qt(d,3)),F.setAttribute("uv",new qt(h,2)),F.setIndex(m),F.computeVertexNormals(),F}function Px(n){const{W:t,H:e}=ii,i=$o,[r,s]=n.hinge,[o,a,c,l]=n.box,u=18,f=18,d=[],h=[],m=[];for(let g=0;g<=f;g++)for(let p=0;p<=u;p++){const y=o+(c-o)*(p/u),x=a+(l-a)*(g/f);d.push((x-s)*i,0,(y-r)*i),h.push(y/t,1-x/e)}for(let g=0;g<f;g++)for(let p=0;p<u;p++){const y=g*(u+1)+p,x=y+1,_=y+u+1,w=_+1;m.push(y,_,x,x,_,w)}const v=new ae;return v.setAttribute("position",new qt(d,3)),v.setAttribute("uv",new qt(h,2)),v.setIndex(m),v.computeVertexNormals(),v}function Dx(n){const t={len:1,height:1,turtle:!0,shade:[.95,.98,1]},e=qr(n,On("turtle-top"),{...t,solid:!0}),i=qr(n,On("turtle-flippers"),t),r=new Qe,s=new ue(new ae,e);On("turtle-top",h=>{s.geometry.dispose(),s.geometry=Rx(h.image)}),s.frustumCulled=!1,s.renderOrder=8.4,r.add(s);const o=ii.flippers.map(h=>{const m=new ue(Px(h),i);return m.position.set((h.hinge[1]-ii.cy)*$o,-.012,(h.hinge[0]-ii.cx)*$o),m.frustumCulled=!1,m.renderOrder=8.4,m.userData=h,r.add(m),m});r.material=e,r.rotation.order="YXZ",r.state={s:0,v:.6,ph:0,glide:0};const a=new Be,c=new Be,l=new Be,u=new P(0,1,0),f=new P(0,0,1),d=new P(1,0,0);return r.swim=(h,m,v,g)=>{const p=zt(.18,.36,.5+.32*Math.sin(m*.37+.6)+.18*Math.sin(m*1.07+2));h.ph+=v*Ut(.5,.75,ce(g/1.5))*(.15+.85*p)*Math.PI*2,h.glide+=(1-p-h.glide)*(1-Math.exp(-v/.5));const y=h.glide,x=Math.cos(h.ph),_=Math.sin(h.ph);for(const w of o){const S=w.userData,E=S.front?Ut(.72*_,-.1,y):Ut(.3*Math.sin(h.ph+.9),.05,y),A=S.front?Ut(.36*x-.12,-.9,y):Ut(.18*Math.sin(h.ph+.3)+.1*Math.sin(m*.4),0,y),M=S.front?Ut(-.6*x,.05,y):Ut(.25*x,0,y);a.setFromAxisAngle(u,-S.side*A),c.setFromAxisAngle(f,S.side*E),l.setFromAxisAngle(d,M),w.quaternion.copy(a).multiply(c).multiply(l)}h.lift=-.035*_*(1-y)},r.swim(r.state,0,0,.6),r}const Ju={fusilier:{sprite:"fusilier",len:.3,aspect:3.26,ratio:.5,wave:.95},butterfly:{sprite:"butterfly",len:.17,aspect:1.42,ratio:.26,wave:1.1},damsel:{sprite:"damsel",len:.09,aspect:1.8,ratio:.42,wave:1},trigger:{sprite:"triggerfish",len:.4,aspect:1.8893,ratio:.33,wave:1.25},trevally:{sprite:"trevally",len:.6,aspect:2.0645,ratio:.32,wave:1}};function Lx(n,t,e,i=1){const r=ce(i,.55,1),s=D=>Math.max(4,Math.round(D*r)),o=e.schools,a=(D,H,G,W,X,st,ot)=>({kind:"school",sp:D,n:s(H),c:o[G].at.clone(),c0:o[G].at,c1:o[G].atN,right:o[G].right,size:W.slice(),size0:W,cruise:X,near:st,gap:ot}),c=[a("fusilier",150,"descent",[5.5,3,4.5],.55,1.2,.34),a("fusilier",120,"bottom",[5,1.6,4],.5,1.2,.34),a("fusilier",190,"reef",[5.5,1.4,2.8],.5,1.2,.34),a("trevally",46,"blue",[6.5,3,6],.6,2.6,.8),a("fusilier",100,"ascent",[4.5,3,4],.55,1.2,.34),a("trevally",28,"stop",[5,2.2,4.5],.55,2.6,.8),{kind:"pair",sp:"butterfly",n:24},{kind:"cloud",sp:"damsel",n:s(96)},{kind:"solo",sp:"trigger",n:7}],l=new Qe,u=[],f=sn(733),d={},h=sn(9001),m=()=>(h()+h()+h()+h()-2)*1.732;for(const D in Ju){const H=Ju[D],G=c.filter(ot=>ot.sp===D).reduce((ot,V)=>ot+V.n,0);if(!G)continue;const W=qr(n,On(H.sprite),{len:H.len,height:H.len/H.aspect,wave:H.wave,instanced:!0}),X=new Cn(px(H.len,H.aspect,10),W,G),st=new Fs(new Float32Array(G*2),2);st.setUsage(Ff),X.geometry.setAttribute("aSwim",st),On(H.sprite,ot=>{const V=Ex(ot.image,H.len,H.aspect,H.ratio);V.setAttribute("aSwim",st),X.geometry.dispose(),X.geometry=V}),X.frustumCulled=!1,l.add(X),d[D]={mesh:X,swim:st,sp:H,next:0}}const v=e.route,g=e.side,p=e.exp,y=new P(0,1,0),x=(D,H)=>t.heightAt(D,H),_=(D,H,G,W)=>{const X=v[Math.min(v.length-1,Math.floor(D/H*v.length))].clone();return X.addScaledVector(g,G+f()*(W-G)).addScaledVector(p,(f()-.5)*8),X.y=x(X.x,X.z),X},w=(D,H,G=.8)=>{let W,X,st;do W=h()*2-1,X=h()*2-1,st=h()*2-1;while(W*W+X*X+st*st>1);return H.copy(D.c).addScaledVector(D.right,W*D.size[0]*G).addScaledVector(D.fwd,st*D.size[2]*G),H.y+=X*D.size[1]*G,H.y=Math.min(Math.max(H.y,x(H.x,H.z)+1.8),-2.5),H};for(const D of c){const H=d[D.sp],G=(W,X)=>(Object.assign(W,{m:H,i:H.next++,gr:D,sz:.85+f()*.3,tail:f()*6.28,pos:X.clone(),vel:new P,w:new P,head:new P(f()-.5,0,f()-.5).normalize()}),W.vel.copy(W.head).multiplyScalar(.1),u.push(W),W);if(D.kind==="school"){D.fwd=new P(D.right.z,0,-D.right.x).normalize(),D.goal=w(D,new P,.3),D.way=w(D,new P),D.until=0,D.members=[];const W=new P(h()-.5,0,h()-.5).normalize();for(let X=0;X<D.n;X++){const st=D.goal.clone().add(new P((f()-.5)*3,(f()-.5)*1.2,(f()-.5)*3)),ot=G({kind:"school",pace:D.cruise*(.85+.3*f())},st);ot.head.copy(W),ot.vel.copy(W).multiplyScalar(ot.pace),ot.sep=new P,ot.ali=new P,ot.coh=new P,ot.nb=0,D.members.push(ot)}}else if(D.kind==="pair")for(let W=0;W<D.n/2;W++){const X=_(W,D.n/2,3,7),st=G({kind:"roam",home:X,range:1.8,lift:[.5,1.1],pace:.18+.08*f(),pause:[1,3.5]},X.clone().setY(X.y+.8));st.to=st.pos.clone(),st.wait=f()*2,G({kind:"mate",lead:st,side:f()<.5?-1:1,pace:st.pace*1.3},st.pos.clone().add(new P(.3,.05,.3)))}else if(D.kind==="cloud"){const X=Math.floor(D.n/6);for(let st=0;st<6;st++){const ot=_(st,6,1.5,6);for(let V=0;V<X;V++){const nt=G({kind:"hover",home:ot,to:new P,wait:f()*3},ot.clone().add(new P((f()-.5)*1.4,.3+f()*.9,(f()-.5)*1.4)));nt.to.copy(nt.pos)}}}else if(D.kind==="solo")for(let W=0;W<D.n;W++){const X=_(W,D.n,2,8),st=G({kind:"roam",home:X,range:3,lift:[.35,1.3],pace:.22+.1*f(),pause:[1.5,5]},X.clone().setY(X.y+.9));st.to=st.pos.clone(),st.wait=f()*3}}for(const D in d)d[D].mesh.count=d[D].next;const S=new P,E=new P,A=new P,M=new P,b=new le,T=new Be,I=new P,O=new le,z=(D,H,G,W,X=2)=>{M.subVectors(H,D.pos);const st=M.length();st>1e-4?M.multiplyScalar(G*Math.min(1,st/W)/st):M.set(0,0,0),S.addScaledVector(M.sub(D.vel),X)},F=(D,H)=>{const G=h()*6.283,W=H*Math.sqrt(h());D.to.set(D.home.x+Math.cos(G)*W,0,D.home.z+Math.sin(G)*W),D.to.y=x(D.to.x,D.to.z)+D.lift[0]+h()*(D.lift[1]-D.lift[0])};let U=-1;const k=(D,H)=>{if(D<0||Math.abs(D-U)<.02)return;U<0&&(H=!1),U=D;const G=ce(D/.9);for(const W of c)if(W.kind==="school"){if(E.copy(W.c),W.c.lerpVectors(W.c0,W.c1,G),W.size[0]=W.size0[0]*Ut(1,.45,G),!H){E.subVectors(W.c,E),W.goal.add(E);for(const X of W.members)X.pos.add(E)}w(W,W.way),W.until=0}};return l.update=(D,H=.016,G=null,W=0,X=0,st=!0)=>{k(X,st);const ot=Math.min(Math.max(H,0),.05);if(ot>0){for(const V of c){if(V.kind!=="school")continue;(V.goal.distanceTo(V.way)<1||D>V.until)&&(w(V,V.way),V.until=D+8+h()*12),M.subVectors(V.way,V.goal);const nt=M.length();nt>1e-4&&V.goal.addScaledVector(M,Math.min(1,V.cruise*.7*ot/nt));const gt=V.members,Tt=gt.length,Nt=V.near*V.near;for(const yt of gt)yt.sep.set(0,0,0),yt.ali.set(0,0,0),yt.coh.set(0,0,0),yt.nb=0;for(let yt=0;yt<Tt;yt++){const Ot=gt[yt];for(let ct=yt+1;ct<Tt;ct++){const R=gt[ct],$=Ot.pos.x-R.pos.x,Z=Ot.pos.y-R.pos.y,it=Ot.pos.z-R.pos.z,J=$*$+Z*Z+it*it;if(J>Nt)continue;Ot.ali.add(R.vel),R.ali.add(Ot.vel),Ot.coh.add(R.pos),R.coh.add(Ot.pos),Ot.nb++,R.nb++;const vt=Math.sqrt(J)+1e-4;if(vt<V.gap){const _t=(V.gap-vt)/(V.gap*vt);Ot.sep.x+=$*_t,Ot.sep.y+=Z*_t,Ot.sep.z+=it*_t,R.sep.x-=$*_t,R.sep.y-=Z*_t,R.sep.z-=it*_t}}}}for(const V of u){if(S.set(0,0,0),V.kind==="school"){const Ot=V.gr;V.nb&&(S.addScaledVector(E.copy(V.ali).multiplyScalar(1/V.nb).sub(V.vel),1.1),S.addScaledVector(E.copy(V.coh).multiplyScalar(1/V.nb).sub(V.pos),.55)),S.addScaledVector(V.sep,2.2),M.subVectors(Ot.goal,V.pos);const ct=M.length();ct>1e-4&&S.addScaledVector(M,.22*Math.min(1,ct/2.5)/ct),M.subVectors(V.pos,Ot.c);const R=Math.hypot(M.dot(Ot.right)/Ot.size[0],M.y/Ot.size[1],M.dot(Ot.fwd)/Ot.size[2]);R>1&&S.addScaledVector(M,-.8*(R-1)/Math.max(R,.001));const $=V.vel.length();$>1e-4&&S.addScaledVector(V.vel,(V.pace-$)*.9/$)}else if(V.kind==="roam")V.wait>0?(V.wait-=ot,z(V,V.to,0,1,1.5)):(z(V,V.to,V.pace,.6),V.pos.distanceTo(V.to)<.15&&(V.wait=V.pause[0]+h()*(V.pause[1]-V.pause[0]),F(V,V.range)));else if(V.kind==="mate"){E.copy(V.lead.vel);const Ot=E.length();Ot>.02?E.multiplyScalar(-.35/Ot):E.set(0,0,0),E.add(A.set(-V.lead.head.z,0,V.lead.head.x).multiplyScalar(.22*V.side)).add(V.lead.pos),E.y+=.08,z(V,E,V.pace,.5,2.4)}else V.kind==="hover"&&(V.wait-=ot,V.wait<=0&&(V.to.copy(V.home).add(E.set((h()-.5)*1.5,.25+h()*1,(h()-.5)*1.5)),V.wait=.8+h()*3.5,V.dash=.35),V.dash=Math.max(0,(V.dash||0)-ot),z(V,V.to,V.dash>0?.9:.25,.3,V.dash>0?6:2.5));const nt=V.kind==="school"?.35:V.kind==="hover"?.25:.12,gt=Math.sqrt(2*ot/1.6);V.w.x+=-V.w.x*(ot/1.6)+nt*gt*m(),V.w.y+=-V.w.y*(ot/1.6)+nt*.4*gt*m(),V.w.z+=-V.w.z*(ot/1.6)+nt*gt*m(),S.add(V.w);const Tt=x(V.pos.x,V.pos.z)+(V.kind==="school"?1.2:.2);if(V.pos.y<Tt+.5&&(S.y+=(Tt+.5-V.pos.y)*4),V.pos.y>-2&&(S.y-=(V.pos.y+2)*4),G&&W>0){G.closestPointToPoint(V.pos,A);const Ot=V.pos.distanceTo(A),ct=1.6+1.6*W;Ot<ct&&(E.subVectors(V.pos,A),E.lengthSq()<1e-6&&E.set(0,1,0),S.addScaledVector(E.normalize(),W*30*(1-Ot/ct)**2))}V.vel.addScaledVector(S,ot);const Nt=V.kind==="school"?V.gr.cruise*2.6:1.4,yt=V.vel.length();yt>Nt&&V.vel.multiplyScalar(Nt/yt),V.pos.addScaledVector(V.vel,ot),V.pos.y<Tt&&(V.pos.y=Tt,V.vel.y<0&&(V.vel.y=0))}}for(const V of u){const nt=V.vel.length();nt>.02&&ot>0&&(E.copy(V.vel).multiplyScalar(1/nt),E.y*=.7,V.head.lerp(E.normalize(),1-Math.exp(-ot*5)).normalize());const gt=V.m.sp.len,Tt=ce(1.3+nt/(.7*gt)*.35,1.1,9);V.tail+=ot*Tt*Math.PI*2,V.m.swim.setXY(V.i,V.tail,ce(.05+nt*.12/Math.max(gt*3,.3),.045,.16)),E.copy(V.pos).add(V.head),O.lookAt(E,V.pos,y),T.setFromRotationMatrix(O),I.setScalar(V.sz),b.compose(V.pos,T,I),V.m.mesh.setMatrixAt(V.i,b)}for(const V in d)d[V].mesh.instanceMatrix.needsUpdate=!0,d[V].swim.needsUpdate=!0},l.fish=u,l.update(0,0,null,0,-1),l}function Yi(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new ae;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(t){let h;if(e)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(e){let u=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let m=0;m<h.count;++m)f.push(h.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Qu(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][d]);const m=Qu(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Qu(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new he(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let d=0,h=u.count;d<h;d++)for(let m=0;m<e;m++){const v=u.getComponent(d,m);a.setComponent(d+f,m,v)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const Ze={x:17143,z:-8464},Wn={x:17161,z:-8526},Br={x:17026,z:-8457},Ts={x:16985,z:-8466},yi={x:17401,z:-8893,ry:1.305,R:40},Nn={minX:14e3,minZ:-11600,size:6400},Sn={minX:16550,minZ:-9400,size:1450},Ix=[];for(const n of Rn.mainland)for(let t=0;t<n.length-1;t++)Ix.push([n[t][0],n[t][1],n[t+1][0],n[t+1][1]]);const h0=(n,t)=>21*zt(17160,17035,n)*(1-.62*zt(16900,16690,n))+1.5*Math.exp(-((n-Ts.x)**2+(t-Ts.z)**2)/12800),Tn={x:17240,z:-8520,ang:-.08,step:38,street:7,R:650};function Ux(n,t,e){const i=t<-8500,r=i?zt(16880,16905,n)*(1-zt(17168,17188,n)):zt(16975,16995,n)*(1-zt(17200,17222,n));return r<=0||e<=2?{w:0,h:0}:{w:r*zt(2.5,7,e)*(1-zt(i?47:30,i?66:48,e)),h:i?4.6+(17170-n)*.005:5}}function Nx(n,t,e){const i=h0(n,t),r=zt(1,4,i);if(r>0&&(e+=r*(rn(n/23,t/23)-.5)*7),e<=0){const d=-e;return-Math.min(.06*d+.0025*d*d,3+d*.04)-r*Math.min(d,10)*.3}const s=.06*Math.min(e,3)+.55*zt(0,14,e)+1.75*zt(12,46,e)+1.1*zt(50,57,e),o=zt(60,1100,e)*(3+rn(n/900,t/900)*12),a=zt(1800,9e3,e)*(30+rn(n/2500+3,t/2500)*120),c=zt(13e3,24e3,e)*(480+rn(n/4200+7,t/3200)*420),l=r*zt(0,3,e)*zt(34,8,e)*(rn(n/6.5,t/6.5)-.32)*3.4,u=s+o+a+c+i*zt(0,18,e)+l,f=Ux(n,t,e);return f.w>0?Ut(u,f.h,f.w):u}function th(n,t,e){const i=ce((t-n.minX)/n.step,0,n.n-1.001),r=ce((e-n.minZ)/n.step,0,n.n-1.001),s=i|0,o=r|0,a=i-s,c=r-o,l=n.n,u=n.D;return(u[o*l+s]*(1-a)+u[o*l+s+1]*a)*(1-c)+(u[(o+1)*l+s]*(1-a)+u[(o+1)*l+s+1]*a)*c}const Zt={root:0,spine:1,head:2,uArmA:3,fArmA:4,handA:5,uArmB:6,fArmB:7,handB:8,thighA:9,calfA:10,footA:11,thighB:12,calfB:13,footB:14,finA:15,finB:16,finTipA:17,finTipB:18},Tc=19,Fx=[[-1,[0,0,0]],[0,[0,.04,0]],[1,[0,.53,0]],[1,[.2,.46,-.01]],[3,[0,-.29,0]],[4,[0,-.255,0]],[1,[-.2,.46,-.01]],[6,[0,-.29,0]],[7,[0,-.255,0]],[0,[.095,-.04,0]],[9,[0,-.44,0]],[10,[0,-.42,0]],[0,[-.095,-.04,0]],[12,[0,-.44,0]],[13,[0,-.42,0]],[11,[0,-.035,.16]],[14,[0,-.035,.16]],[15,[0,0,.26]],[16,[0,0,.26]]],j={skin:0,cloth:1,neo:2,plastic:3,metal:4,glass:5,hair:6,rubber:7,hull:8,wood:9};function Fn(n,t,e,{down:i=!1,radial:r=14,k:s=5,sx:o=1,sz:a=1}={}){let c=[];for(let u=0;u<=s;u++){const f=-Math.PI/2+u/s*(Math.PI/2);c.push([n*Math.cos(f),n*Math.sin(f)])}for(let u=0;u<=s;u++){const f=u/s*(Math.PI/2);c.push([t*Math.cos(f),e+t*Math.sin(f)])}i&&(c=c.map(([u,f])=>[u,-f]).reverse());const l=new Vs(c.map(([u,f])=>new kt(Math.max(u,1e-4),f)),r);return(o!==1||a!==1)&&l.applyMatrix4(new le().makeScale(o,1,a)),l}function ki(n,t,e,i=18){const r=new Vs(n.map(([s,o])=>new kt(Math.max(s,1e-4),o)),i);return r.applyMatrix4(new le().makeScale(t,1,e)),r}function So(n,{radial:t=14,sx:e=1,sz:i=1}={}){const r=n[0][0],[s,o]=n[n.length-1],a=[];for(let l=0;l<=4;l++){const u=Math.PI/2*(1-l/4);a.push([r*Math.cos(u),r*Math.sin(u)])}for(const[l,u]of n)a.push([l,-u]);for(let l=1;l<=4;l++){const u=Math.PI/2*(l/4);a.push([s*Math.cos(u),-o-s*Math.sin(u)])}a.reverse();const c=new Vs(a.map(([l,u])=>new kt(Math.max(l,1e-4),u)),t);return(e!==1||i!==1)&&c.applyMatrix4(new le().makeScale(e,1,i)),c}function ln(n,t,e,i=16,r=12,s=Math.PI){const o=new Ws(1,i,r,0,Math.PI*2,0,s);return o.applyMatrix4(new le().makeScale(n,t,e)),o}const zx=new le,eh=new Be,nh=new tn,ih=new P,rh=new P;function Pt(n,t,e,i,r=0,s=0,o=0){return nh.set(r,s,o),eh.setFromEuler(nh),rh.set(t,e,i),ih.set(1,1,1),n.applyMatrix4(zx.compose(rh,eh,ih))}function Pi(n,t,e,i){n=n.index?n.toNonIndexed():n;for(const l of Object.keys(n.attributes))l!=="position"&&l!=="normal"&&n.deleteAttribute(l);const r=n.attributes.position.count,s=n.attributes.normal,o=new Float32Array(r*3),a=new Float32Array(r).fill(t),c=new Float32Array(r).fill(i);for(let l=0;l<r;l++){const u=.82+.18*(s.getY(l)*.5+.5);o[l*3]=e[0]*u,o[l*3+1]=e[1]*u,o[l*3+2]=e[2]*u}return n.setAttribute("color",new he(o,3)),n.setAttribute("aBone",new he(a,1)),n.setAttribute("aKind",new he(c,1)),n.setAttribute("aBone2",new he(a.slice(),1)),n.setAttribute("aW",new he(new Float32Array(r),1)),n.setAttribute("aPos2",new he(n.attributes.position.array.slice(),3)),n}const Ox=.26;function sh(n,t){const e=[],i=n[0].length;for(let s=0;s<n.length-1;s++)for(let o=0;o<i;o++){const a=n[s][o],c=n[s][(o+1)%i],l=n[s+1][(o+1)%i],u=n[s+1][o];e.push(...a,...c,...l,...a,...l,...u)}for(const s of[n[0],n[n.length-1]]){const o=s.reduce((l,u)=>l+u[0],0)/i,a=s.reduce((l,u)=>l+u[1],0)/i,c=s[0][2];for(let l=0;l<i;l++)e.push(o,a,c,...s[(l+1)%i],...s[l])}const r=new ae;return r.setAttribute("position",new qt(e,3)),r.computeVertexNormals(),r}function kx(n,t,e,i,r){const s=[];for(let u=0;u<=8;u++){const f=-.19+u/8*.25,d=Math.sin(Math.min(1,(u+.6)/8.6)*Math.PI)**.35,h=.054*d,m=.044*d,v=[];for(let g=0;g<14;g++){const p=g/14*Math.PI*2;v.push([Math.cos(p)*h,Math.sin(p)*m,f])}s.push(v)}n(sh(s),i,0);const o=[],a=.47,c=14;for(let u=0;u<=c;u++){const f=u/c,d=0+f*a,h=.058+.052*Math.min(1,f/.5)**.8,m=l(.024,.006,f)/2,v=l(.026,.01,f),g=.013;o.push([[-h,-m-v,d],[-h+g,-m-v,d],[-h+g,-m,d],[h-g,-m,d],[h-g,-m-v,d],[h,-m-v,d],[h,m+v,d],[h-g,m+v,d],[h-g,m,d],[-h+g,m,d],[-h+g,m+v,d],[-h,m+v,d]])}n(sh(o),r,1);function l(u,f,d){return u+(f-u)*d}}function Bx(n,t,e,i,r){n=Pi(n,t,i,j.rubber);const s=n.attributes.position,o=n.attributes.aW,a=n.attributes.aBone2,c=n.attributes.aPos2;for(let l=0;l<s.count;l++){const u=s.getZ(l),f=r?Math.min(1,Math.max(0,(u-.05)/.4))**1.4:0;o.setX(l,f),a.setX(l,e),c.setXYZ(l,s.getX(l),s.getY(l),u-Ox)}return n}const ur=[[.55,.37,.27],[.47,.31,.22],[.62,.44,.33],[.41,.27,.19],[.58,.4,.3]],Hx=[[.05,.045,.04],[.08,.06,.05],[.12,.09,.07]];function f0(n={}){const t=[],e=(h,m,v,g)=>t.push(Pi(h,m,v,g)),i=n,r=i.skin||ur[0],s=i.hair||Hx[0],o=i.diver,a=o?o.suit:null,c=o?a:i.shirt||[.85,.85,.83],l=o?a:i.pants||[.2,.22,.3],u=i.build||1,f=o?j.neo:j.cloth;e(ki([[.001,-.02],[.13,0],[.142,.06],[.128,.19],[.145,.33],[.155,.42],[.13,.49],[.06,.53],[.001,.535]],1.18*u,.74),Zt.spine,c,f),o&&o.panel&&e(Pt(ki([[.001,.2],[.147,.24],[.157,.36],[.158,.42],[.001,.43]],1.19*u,.75),0,0,0),Zt.spine,o.panel,j.neo),o&&e(Pt(ki([[.001,.02],[.146,.05],[.147,.17],[.001,.2]],1.2*u,.755),0,0,0),Zt.spine,(o.side||o.suit).map(h=>h*1),j.neo),e(Pt(ln(.165*u,.1,.12),0,-.02,0),Zt.root,l,f),e(Fn(.052,.05,.09,{radial:12}),Zt.head,o?a:r,o?j.neo:j.skin),e(Pt(ln(.092,.115,.104,18,14),0,.17,.012),Zt.head,r,j.skin),e(Pt(ln(.035,.03,.05,10,8),0,.105,.06),Zt.head,r,j.skin),e(Pt(ln(.016,.026,.02,8,6),0,.165,.108),Zt.head,r.map(h=>h*.94),j.skin);for(const h of[-1,1])e(Pt(ln(.016,.026,.014,8,6),h*.092,.165,0),Zt.head,r.map(m=>m*.9),j.skin);if(e(Pt(ln(.098,.1,.108,18,10,Math.PI*.56),0,.185,-.004,-.25),Zt.head,s,j.hair),i.longHair&&e(Pt(ln(.085,.13,.05,12,8),0,.12,-.075,.25),Zt.head,s,j.hair),i.cap&&(e(Pt(ln(.103,.075,.112,16,8,Math.PI/2),0,.215,0),Zt.head,i.cap,j.cloth),e(Pt(new Me(.095,.1,.008,16,1,!1,-.9,1.8),0,.215,.07),Zt.head,i.cap,j.cloth)),o){const h=o.accent||[.16,.3,.55],m=[.06,.06,.07],v=[.72,.74,.77];e(Pt(new ne(.165,.08,.055,2,2,1),0,.185,.1),Zt.head,[.04,.04,.045],j.rubber),e(Pt(new ne(.15,.062,.014),0,.186,.127),Zt.head,[.05,.08,.1],j.glass),e(Pt(new cr(.1,.009,6,20),0,.19,0,0,0,0),Zt.head,[.05,.05,.05],j.rubber),e(Pt(new Me(.024,.028,.055,12),0,.09,.122,Math.PI/2),Zt.head,[.08,.08,.09],j.plastic),e(Pt(new Me(.03,.03,.02,12),0,.09,.152,Math.PI/2),Zt.head,h,j.plastic),e(Pt(ki([[.001,.07],[.168,.09],[.182,.22],[.186,.36],[.178,.45],[.142,.51],[.001,.52]],1.2*u,.86),0,0,-.012),Zt.spine,o.bcd,j.neo),e(Pt(ki([[.18,.445],[.181,.47]],1.212*u,.872,18),0,0,-.012),Zt.spine,h,j.plastic),e(Pt(ki([[.172,.08],[.176,.17]],1.215*u,.875,18),0,0,-.01),Zt.spine,m,j.rubber);for(const g of[-1,1])e(Pt(new ne(.075,.1,.05),g*.15*u,.13,.1,0,g*.5,0),Zt.spine,[.1,.1,.11],j.rubber),e(Pt(new ne(.03,.02,.012),g*.16*u,.17,.13,0,g*.5,0),Zt.spine,h,j.plastic);e(Pt(Fn(.092,.092,.6,{radial:18}),0,-.04,-.215),Zt.spine,o.tank,j.metal),e(Pt(new Me(.096,.096,.1,18),0,-.07,-.215),Zt.spine,m,j.rubber);for(const g of[.18,.36])e(Pt(new Me(.097,.097,.035,18),0,g,-.215),Zt.spine,m,j.rubber);e(Pt(new Me(.024,.032,.07,10),0,.68,-.215),Zt.spine,v,j.metal),e(Pt(new Me(.018,.018,.09,8),0,.71,-.215,0,0,Math.PI/2),Zt.spine,v,j.metal),e(Pt(new ne(.08,.05,.06),-.035,.725,-.2),Zt.spine,[.12,.12,.13],j.metal),e(Pt(new cr(.17,.011,6,16,Math.PI*.75),-.11*u,.6,-.04,0,Math.PI/2,Math.PI*.95),Zt.spine,m,j.rubber),e(Pt(new cr(.16,.012,6,14,Math.PI*.7),.11*u,.35,.055,0,Math.PI/2,Math.PI*.45),Zt.spine,m,j.rubber),e(Pt(new Me(.014,.014,.12,8),.12*u,.25,.135,.15),Zt.spine,[.2,.2,.22],j.plastic),e(Pt(new Me(.01,.01,.5,6),.19*u,.22,-.07,.35,0,.12),Zt.spine,m,j.rubber),e(Pt(new ne(.06,.13,.035),.2*u,-.03,.02,.2,0,.15),Zt.spine,[.1,.1,.11],j.plastic),e(Pt(new Me(.022,.022,.012,14),.2*u,0,.04,Math.PI/2+.2,0,.15),Zt.spine,[.7,.75,.72],j.glass),e(Pt(new Me(.019,.019,.12,8),-.12*u,.33,.12,.3,0,0),Zt.spine,[.9,.74,.1],j.plastic),e(Pt(new Me(.028,.028,.02,12),-.12*u,.27,.135,Math.PI/2,0,0),Zt.spine,[.9,.74,.1],j.plastic);for(const g of[-1,1])e(Pt(new ne(.065,.36,.022),g*.09*u,.33,.128,-.12,0,0),Zt.spine,m,j.rubber);e(Pt(new ne(.2*u,.035,.02),0,.37,.132),Zt.spine,m,j.rubber),e(Pt(new ne(.04,.03,.016),0,.37,.142),Zt.spine,h,j.plastic),e(Pt(new ne(.3*u,.05,.27),0,.03,0),Zt.spine,[.06,.06,.07],j.rubber),e(Pt(new ne(.06,.045,.03),0,.03,.14),Zt.spine,[.65,.66,.68],j.metal)}if(i.lifejacket){const h=i.lifejacket;e(Pt(ki([[.001,.14],[.152,.15],[.166,.3],[.163,.41],[.12,.47],[.001,.48]],1.2*u,.9),0,0,.006),Zt.spine,h,j.cloth),e(Pt(Fn(.05,.05,.16,{radial:10}),-.08,.52,-.075,0,0,-Math.PI/2),Zt.spine,h,j.cloth);for(const m of[.22,.32])e(Pt(new ne(.33*u,.02,.24),0,m,.004),Zt.spine,[.07,.07,.08],j.cloth),e(Pt(new ne(.045,.03,.02),0,m,.135),Zt.spine,[.08,.08,.09],j.plastic);e(Pt(new ne(.012,.3,.02),0,.31,.15),Zt.spine,h.map(m=>m*.55),j.plastic);for(const m of[.4,.44])e(Pt(ki([[.155,m],[.16,m+.022]],1.215*u,.905,18),0,0,.006),Zt.spine,[.78,.8,.82],j.metal)}for(const[h,m,v,g]of[[Zt.uArmA,Zt.fArmA,Zt.handA,1],[Zt.uArmB,Zt.fArmB,Zt.handB,-1]]){const p=o||i.sleeves==="long";e(Pt(ln(.056,.056,.056),0,0,0),h,o?a:i.sleeves==="none"?r:c,o?j.neo:i.sleeves==="none"?j.skin:j.cloth),o?e(So([[.064,0],[.061,.09],[.055,.2],[.048,.28]]),h,a,j.neo):e(Fn(.057,.046,.28,{down:!0}),h,p?c:r,p?f:j.skin),o&&o.accent&&e(new Me(.0645,.0625,.05,16,1,!0).translate(0,-.1,0),h,o.accent,j.neo),!p&&i.sleeves!=="none"&&e(Fn(.062,.056,.1,{down:!0}),h,c,j.cloth),o?e(So([[.049,0],[.051,.07],[.044,.16],[.035,.24]]),m,a,j.neo):e(Fn(.045,.033,.25,{down:!0}),m,i.sleeves==="long"?c:r,i.sleeves==="long"?j.cloth:j.skin),o&&g>0&&e(Pt(new ne(.05,.022,.05),0,-.2,0),m,[.06,.06,.07],j.plastic),e(Pt(Fn(.032,.026,.11,{down:!0,sx:.55,sz:1.15}),0,0,0),v,r,j.skin),e(Pt(Fn(.012,.011,.045,{down:!0,radial:6}),0,-.02,.028,0,0,g*.35),v,r,j.skin),i.torch&&g<0&&(e(Pt(new Me(.028,.024,.2,12),0,-.1,.03,Math.PI/2),v,[.15,.15,.16],j.metal),e(Pt(new Me(.036,.03,.035,12),0,-.1,.13,Math.PI/2),v,[.6,.62,.66],j.metal))}for(const[h,m,v,g,p,y]of[[Zt.thighA,Zt.calfA,Zt.footA,Zt.finA,Zt.finTipA,1],[Zt.thighB,Zt.calfB,Zt.footB,Zt.finB,Zt.finTipB,-1]]){o?e(So([[.09*u,0],[.088*u,.1],[.078*u,.24],[.062,.38],[.058,.42]]),h,l,j.neo):e(Fn(.075*u,.052,.42,{down:!0}),h,l,f);const x=!o&&i.shorts!==!1;o?e(So([[.058,0],[.066,.1],[.06,.2],[.046,.33],[.04,.39]]),m,l,j.neo):e(Fn(.05,.036,.4,{down:!0}),m,x?r:l,x?j.skin:f),o&&o.accent&&e(new Me(.0625,.0585,.045,16,1,!0).translate(0,-.2,0),m,o.accent,j.neo),o&&e(Pt(ln(.052,.075,.026,12,8),0,-.035,.042),m,[.13,.13,.14],j.rubber);const _=o?[.04,.04,.05]:i.shoes||r;if(e(Pt(Fn(.034,.03,.17,{sx:.8,sz:1}),0,-.035,-.035,Math.PI/2),v,_,o?j.rubber:i.shoes?j.cloth:j.skin),!o&&!i.shoes&&e(Pt(new ne(.08,.012,.25),0,-.07,.05),v,[.15,.12,.1],j.rubber),o){const w=o.fins||[.05,.05,.06];kx((S,E,A)=>t.push(Bx(S,g,p,E,A)),g,p,[.045,.045,.05],w)}}return Yi(t)}const ys=new ui(new Uint8Array([128,128,128,255]),1,1);ys.needsUpdate=!0;const Kl={tNeo:{value:ys},tHull:{value:ys},tCanvas:{value:ys},tTeak:{value:ys},uDetailOn:{value:0}};let oh=!1;function Vx(){if(oh)return;oh=!0;const n=new oa,t={tNeo:"neoprene",tHull:"hull",tCanvas:"canvas",tTeak:"teak"};let e=4;for(const i in t)n.load(`/textures/mat-${t[i]}.webp`,r=>{r.wrapS=r.wrapT=Rs,r.colorSpace=vn,r.anisotropy=4,Kl[i].value=r,--e===0&&(Kl.uDetailOn.value=1)},void 0,()=>{})}function si(n,t=Tc){Vx();const e={value:Array.from({length:Math.max(1,t)},()=>new le)},i=new Ae({vertexColors:!0,side:je,defines:{NBONES:Math.max(1,t),SKINNED:t>0?1:0},uniforms:{...n,...Kl,uBones:e,uFade:{value:1}},vertexShader:`
      attribute float aBone; attribute float aKind;
      #if SKINNED
        attribute float aBone2; attribute float aW; attribute vec3 aPos2;
      #endif
      uniform mat4 uBones[NBONES];
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vK; varying vec3 vP; varying vec3 vNl;
      void main(){
        vec4 lp = vec4(position, 1.0); vec3 ln = normal;
        #if SKINNED
          mat4 B1 = uBones[int(aBone + 0.5)];
          lp = B1 * vec4(position, 1.0); ln = mat3(B1) * normal;
          if (aW > 0.0) {
            // a fin blade: blend between the fin bone and the fin-tip bone along its length
            mat4 B2 = uBones[int(aBone2 + 0.5)];
            lp = mix(lp, B2 * vec4(aPos2, 1.0), aW);
            ln = mix(ln, mat3(B2) * normal, aW);
          }
        #endif
        vec4 w = modelMatrix * lp;
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * ln); vC = color; vK = aKind;
        vP = position; vNl = normal;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${pn}
      ${In}
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform vec3 uAmbBot; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen;
      uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform float uTime; uniform float uDiorama; uniform float uSy; uniform float uClipR;
      uniform float uFade; uniform vec3 uWaterDeep; uniform float uColumn;
      uniform sampler2D tNeo; uniform sampler2D tHull; uniform sampler2D tCanvas; uniform sampler2D tTeak; uniform float uDetailOn;
      uniform mat4 uBoatInv; uniform vec4 uCanopy; // world -> boat frame; canopy x0, x1, half-width, roof height
      // the canopy's shade: follow the sunlight back up to the roof; if it meets the fabric, the point is in shade
      float canopyShade(vec3 Lp, vec3 sunL){
        if (Lp.y > uCanopy.w - 0.04 || abs(Lp.z) > 5.0 || abs(Lp.x) > 9.0 || sunL.y < 0.05) return 0.0;
        vec2 hit = Lp.xz + sunL.xz * ((uCanopy.w - Lp.y) / sunL.y);
        float inX = smoothstep(uCanopy.x - 0.12, uCanopy.x + 0.12, hit.x) * (1.0 - smoothstep(uCanopy.y - 0.12, uCanopy.y + 0.12, hit.x));
        float inZ = 1.0 - smoothstep(uCanopy.z - 0.12, uCanopy.z + 0.12, abs(hit.y));
        return inX * inZ;
      }
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vK; varying vec3 vP; varying vec3 vNl;
      float tri(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)) + 1e-5;
        return texture2D(t, p.zy * s).r * w.x + texture2D(t, p.xz * s).r * w.y + texture2D(t, p.xy * s).r * w.z; }
      void main(){
        if (length(vW.xz) > uClipR) discard;
        // dithered hand-over (used where a figure must give way to something else)
        if (uFade < 0.999 && fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) < 1.0 - uFade) discard;
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        vec3 V = normalize(cameraPosition - vW);
        float k = vK;
        // per material: light wrap, specular power and strength, mirror strength
        float wrap = 0.1, sp = 24.0, ss = 0.14, mr = 0.0;
        if (k < 0.5) { wrap = 0.45; sp = 14.0; ss = 0.12; }                 // skin
        else if (k < 1.5) { wrap = 0.2; sp = 6.0; ss = 0.03; }              // cloth
        else if (k < 2.5) { wrap = 0.2; sp = 12.0; ss = 0.26; }             // neoprene
        else if (k < 3.5) { sp = 48.0; ss = 0.35; mr = 0.12; }             // plastic
        else if (k < 4.5) { sp = 90.0; ss = 0.9; mr = 0.35; }              // metal
        else if (k < 5.5) { sp = 260.0; ss = 1.2; mr = 0.8; }              // glass
        else if (k < 6.5) { sp = 20.0; ss = 0.18; }                         // hair
        else if (k < 7.5) { sp = 24.0; ss = 0.16; }                         // rubber
        else if (k < 8.5) { sp = 60.0; ss = 0.4; mr = 0.1; }               // hull gelcoat
        else { wrap = 0.1; sp = 8.0; ss = 0.05; }                           // teak
        // surface detail from the material photographs (each has a mean of 0.5, so x2 keeps the colour)
        vec3 alb = vC;
        if (uDetailOn > 0.5) {
          float d = 0.5;
          if (k > 1.5 && k < 2.5) d = tri(tNeo, vP, vNl, 7.0);
          else if (k > 6.5 && k < 7.5) d = tri(tNeo, vP, vNl, 10.0);
          else if (k > 0.5 && k < 1.5) d = tri(tCanvas, vP, vNl, 2.4);
          else if (k > 7.5 && k < 8.5) d = 0.5 + (tri(tHull, vP, vNl, 0.55) - 0.5) * 1.8;
          else if (k > 8.5) d = tri(tTeak, vP, vNl, 0.5833); // 8 planks a tile: 21 cm planks, as on the deck
          alb *= mix(1.0, d * 2.0, k > 8.5 ? 0.9 : k > 7.5 ? 0.7 : 0.6);
        }
        // weathering at the scale of the whole boat (what reads from a distance): grime along the waterline,
        // faint streaks running down the white topsides, scuffs along the rail; a sun-faded canopy; a worn deck
        vec3 Lp = (uBoatInv * vec4(vW, 1.0)).xyz;
        if (k > 7.5 && k < 8.5) {
          float grime = smoothstep(0.42, 0.02, Lp.y) * (0.55 + 0.45 * vnoise(Lp.xy * vec2(0.9, 3.0)));
          alb = mix(alb, alb * vec3(0.62, 0.66, 0.55), grime * 0.75);
          float streak = smoothstep(0.55, 0.9, vnoise(vec2(Lp.x * 5.0, Lp.y * 0.35 + Lp.z * 0.2))) * smoothstep(1.25, 0.35, Lp.y);
          alb *= 1.0 - streak * 0.14;
          float scuff = smoothstep(0.62, 0.92, vnoise(Lp.xz * 4.0 + Lp.y * 7.0)) * smoothstep(0.75, 1.2, Lp.y);
          alb *= 1.0 - scuff * 0.18;
        } else if (k > 0.5 && k < 1.5 && Lp.y > uCanopy.w - 0.3 && abs(Lp.z) < uCanopy.z + 0.1 && n.y > 0.3) {
          alb = mix(alb, alb * 1.35 + 0.04, 0.55 * (0.6 + 0.4 * vnoise(Lp.xz * 1.3)));   // sun-bleached fabric
        } else if (k > 8.5) {
          alb *= 0.86 + 0.14 * smoothstep(0.25, 0.9, abs(Lp.z));                          // a worn path down the middle
        }
        float depth = max(-vW.y / uSy, 0.0);
        vec3 att = mix(exp(-depth * vec3(0.040, 0.016, 0.009)), exp(-depth * vec3(0.008, 0.004, 0.002)), uDiorama * 0.85);
        float dl = dot(n, uSunDir);
        float diff = max((dl + wrap) / (1.0 + wrap), 0.0);
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5);
        // above water, walls and undersides also catch the sunlight thrown back by the bright ground and the sea
        // (without it a shaded white wall went slate-grey)
        if (depth <= 0.0) amb += uSunCol * max(uSunDir.y, 0.0) * 0.9 * ((1.0 - abs(n.y)) * 0.5 + max(-n.y, 0.0) * 0.3);
        // in the canopy's shade the sun is cut off, and under the roof part of the sky is too
        if (depth <= 0.0) {
          vec3 sunL = normalize(mat3(uBoatInv) * uSunDir);
          float sh = canopyShade(Lp, sunL);
          diff *= 1.0 - 0.88 * sh;
          float roofed = (1.0 - smoothstep(uCanopy.z - 0.2, uCanopy.z + 0.3, abs(Lp.z))) * smoothstep(uCanopy.x - 0.3, uCanopy.x + 0.2, Lp.x) * (1.0 - smoothstep(uCanopy.y - 0.2, uCanopy.y + 0.3, Lp.x)) * step(Lp.y, uCanopy.w - 0.05);
          amb *= 1.0 - 0.32 * roofed;
        }
        vec3 lit = depth > 0.0 ? uSunCol * diff * att + amb * mix(vec3(1.0), att, 0.7) : uSunCol * diff + amb;
        vec3 col = alb * lit;
        if (k < 0.5) col += alb * uSunCol * vec3(0.5, 0.2, 0.1) * 0.35 * exp(-dl * dl * 9.0) * (depth > 0.0 ? 0.4 : 1.0);
        vec3 H = normalize(uSunDir + V);
        col += uSunCol * pow(max(dot(n, H), 0.0), sp) * ss * (depth > 0.0 ? att * 0.6 : vec3(1.0));
        float fres = pow(1.0 - max(dot(n, V), 0.0), 4.0);
        vec3 R = reflect(-V, n); R.y = abs(R.y);
        vec3 env = depth > 0.0 ? uWaterCol * 1.3 : skyColor(R);
        col = mix(col, env, mr * (0.25 + 0.75 * fres));
        // a soft rim of light from the water around a dark wetsuit, so a diver reads as a rounded body, not a cut-out
        col += env * fres * (k > 1.5 && k < 2.5 && depth > 0.0 ? 0.3 : 0.12);
        if (depth > 0.0) col += caustic(vW.xz * 0.075, uTime * 0.8) * att * max(n.y, 0.0) * 0.35 * uSunCol;
        if (depth > 0.0) col = mix(col, uWaterDeep, (1.0 - exp(-depth * 0.044)) * uColumn * (1.0 - uUnder));
        float dist = length(vW - cameraPosition);
        vec3 hd = normalize(vec3(vW.x - cameraPosition.x, 0.015, vW.z - cameraPosition.z));
        col = mix(mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen)), mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen)), uUnder);
        gl_FragColor = vec4(col, 1.0);
      }`});return i.bones=e.value,i}const Yo=[0,0,0];function d0(n){for(const t of Object.keys(n))delete n[t];return n}function Mi(n,t,e,i={}){(i===n||i===t)&&(i={});const r=new Set([...Object.keys(n),...Object.keys(t)]);d0(i);for(const s of r){const o=n[s]||(s==="root"?[0,0,0,0,0,0]:Yo),a=t[s]||(s==="root"?[0,0,0,0,0,0]:Yo);i[s]=o.map((c,l)=>c+(a[l]-c)*e)}return i}const Wx=Object.keys(Zt),wo=Array.from({length:Tc},()=>new le),qa=new tn(0,0,0,"YXZ"),ah=new Be,$a=new P,Gx=new P(1,1,1);function Jl(n,t){for(let e=0;e<Tc;e++){const[i,r]=Fx[e],s=t[Wx[e]]||Yo;if(e===0){const o=t.root||[0,0,0,0,0,0];qa.set(o[3],o[4],o[5]),$a.set(o[0],o[1],o[2])}else qa.set(s[0],s[1],s[2]),$a.set(r[0],r[1],r[2]);ah.setFromEuler(qa),wo[e].compose($a,ah,Gx),i>=0&&wo[e].premultiply(wo[i]),n.bones[e].copy(wo[e])}}function Xx(n,t,e,i,r,s,o=new P){return o.set(e,i,r).applyMatrix4(n.bones[t]),s?o.applyMatrix4(s.matrixWorld):o}const nn={stand:{root:[0,.98,0,0,0,0],uArmA:[.02,0,.1],uArmB:[.02,0,-.1],fArmA:[-.2,0,0],fArmB:[-.2,0,0]},sit:{root:[0,.07,0,-.05,0,0],spine:[.05,0,0],thighA:[-1.5,0,.06],thighB:[-1.5,0,-.06],calfA:[1.45,0,0],calfB:[1.45,0,0],uArmA:[-.35,0,.1],uArmB:[-.35,0,-.1],fArmA:[-1.05,0,0],fArmB:[-1.05,0,0],head:[.05,0,0]},rollReady:{root:[0,.07,0,.12,0,0],spine:[.22,0,0],head:[.32,0,0],thighA:[-1.25,0,.1],thighB:[-1.25,0,-.1],calfA:[1.2,0,0],calfB:[1.2,0,0],uArmB:[-1.25,0,.35],fArmB:[-1.95,0,0],uArmA:[.3,0,2.1],fArmA:[0,0,2.25],footA:[.6,0,0],footB:[.6,0,0]},tuck:{spine:[.45,0,0],head:[.5,0,0],thighA:[-1.9,0,.12],thighB:[-1.9,0,-.12],calfA:[1.7,0,0],calfB:[1.7,0,0],uArmB:[-1.25,0,.35],fArmB:[-1.95,0,0],uArmA:[.3,0,2.1],fArmA:[0,0,2.25],footA:[.9,0,0],footB:[.9,0,0]},surfaceOK:{root:[0,0,0,.1,0,0],spine:[-.05,0,0],head:[-.1,0,0],uArmA:[0,0,2.55],fArmA:[0,0,2.2],uArmB:[-.3,0,-.55],fArmB:[-.5,0,0],thighA:[-.3,0,.08],thighB:[.15,0,-.08],calfA:[.5,0,0],calfB:[.35,0,0],footA:[1.2,0,0],footB:[1.2,0,0]},descend:{root:[0,0,0,.25,0,0],spine:[.08,0,0],head:[-.15,0,0],uArmA:[-1.3,0,.3],fArmA:[-.6,0,0],uArmB:[-1.35,0,.45],fArmB:[-2.05,0,0],thighA:[-.18,0,.05],thighB:[-.1,0,-.05],calfA:[.3,0,0],calfB:[.24,0,0],footA:[1.45,0,0],footB:[1.45,0,0]},swim:{root:[0,0,0,Math.PI/2-.12,0,0],spine:[.05,0,0],head:[-.72,0,0],uArmA:[-.28,0,.32],fArmA:[-2.05,0,-.62],uArmB:[-.28,0,-.32],fArmB:[-2.05,0,.62],handA:[.2,0,-.2],handB:[.2,0,.2],thighA:[-.02,0,.06],thighB:[-.02,0,-.06],calfA:[.3,0,0],calfB:[.3,0,0],footA:[1.35,0,0],footB:[1.35,0,0]},hover:{root:[0,0,0,Math.PI/2-.08,0,0],spine:[.04,0,0],head:[-.6,0,0],uArmA:[-.3,0,.36],fArmA:[-2.1,0,-.66],uArmB:[-.3,0,-.36],fArmB:[-2.1,0,.66],handA:[.2,0,-.2],handB:[.2,0,.2],thighA:[.12,0,.16],thighB:[.12,0,-.16],calfA:[1.48,0,0],calfB:[1.48,0,0],footA:[.1,.25,0],footB:[.1,-.25,0]}},Bi={hip:.17,shank:.4,foot:.46,tip:.66,lagShank:.9,lagFoot:1.6,lagTip:2.2,knee0:.3};function lh(n,t,e,i={}){i===n&&(i={}),d0(i);for(const o of Object.keys(n))i[o]=n[o].slice();const r=(o,a,c)=>{const l=(i[o]||Yo).slice();l[a]+=c,i[o]=l},s=(o,a,c,l,u)=>{const f=Bi.hip*e*Math.sin(u),d=Bi.shank*e*Math.sin(u-Bi.lagShank),h=Bi.foot*e*Math.sin(u-Bi.lagFoot),m=Bi.tip*e*Math.sin(u-Bi.lagTip);r(o,0,-f),r(a,0,Bi.knee0*Math.min(1,e*2.5)+(f-d)),r(c,0,d-h),r(l,0,h-m)};return s("thighA","calfA","footA","finTipA",t),s("thighB","calfB","footB","finTipB",t+Math.PI),i}function bo(n,t,e,{bowRise:i=.55,sternRise:r=.18,fine:s=.6,tTo:o=1,tFrom:a=0,thFrom:c=0,thTo:l=Math.PI,NU:u=22,NV:f=8}={}){const d=[],h=[],m=y=>t*Math.pow(Math.max(0,Math.sin(Math.PI*Math.min(1,y*.92+.04))),s)*(y<.5?.92+.16*y:1),v=y=>e*Math.pow(Math.max(0,Math.sin(Math.PI*(.03+.94*y))),.35),g=y=>e+r*Math.pow(Math.max(0,1-y*4),2)+i*Math.pow(Math.max(0,(y-.72)/.28),2);for(let y=0;y<=u;y++){const x=y/u,_=(x-.5)*n,w=m(x)/2,S=v(x),E=g(x);for(let A=0;A<=f;A++){const M=c+(l-c)*(A/f),b=Math.sin(M),T=w*Math.cos(M),I=E-(E-(e-S))*Math.pow(b,.75);d.push(_,Math.max(0,I),T)}}for(let y=0;y<u;y++)for(let x=0;x<f;x++){const _=y*(f+1)+x,w=_+1,S=_+f+1,E=S+1;h.push(_,S,w,w,S,E)}const p=new ae;return p.setAttribute("position",new qt(d,3)),p.setIndex(h),p.computeVertexNormals(),p}function qx(n,t,e,i={}){return{sides:bo(n,t,e,{...i,thFrom:.22,thTo:Math.PI-.22}),band:[bo(n,t*1.012,e,{...i,thFrom:0,thTo:.22,NV:2}),bo(n,t*1.012,e,{...i,thFrom:Math.PI-.22,thTo:Math.PI,NV:2})],bottom:bo(n*.985,t*.99,e*1.004,{...i,thFrom:Math.PI/2-.5,thTo:Math.PI/2+.5,NV:4}),floor:new dn(n*.8,t*.62).rotateX(-Math.PI/2).translate(0,e*.62,0)}}const p0=new oa,$x=n=>{const t=n*Math.PI/180;return Math.atan2(Math.sin(t),-Math.cos(t))},Ql=8,m0=20,Ms=3,Ei=Ql+m0*Ms,tc=31,jo=15.2,Zo=.68;function Yx(){const n=[],t=[],e=[],i=[],r=c=>Ut(tc,tc*Zo,c/Ei),s=c=>Ut(jo,jo*Zo,c/Ei),o=(c,l,u,f)=>{const d=r(c)/2+u,h=r(l)/2+u,m=s(c)/2+u,v=s(l)/2+u,g=[[[-d,c,m],[d,c,m],[h,l,v],[-h,l,v],[0,0,1],!0],[[d,c,-m],[-d,c,-m],[-h,l,-v],[h,l,-v],[0,0,-1],!0],[[d,c,m],[d,c,-m],[h,l,-v],[h,l,v],[1,0,0],!1],[[-d,c,-m],[-d,c,m],[-h,l,v],[-h,l,-v],[-1,0,0],!1]];for(const[p,y,x,_,w,S]of g){const E=T=>S?.5+(w[2]>0?1:-1)*T[0]/(2*Math.max(d,h)):.04+.3*(.5+(w[0]>0?-1:1)*T[2]/(2*Math.max(m,v))),A=T=>ce(T[1]/Ei),M=(S?m-v:d-h)/(l-c||1),b=new P(w[0],M*.5,w[2]).normalize();for(const T of[p,y,x,p,x,_])n.push(...T),t.push(b.x,b.y,b.z),e.push(E(T),A(T)),i.push(f?1:0)}if(f){const p=r(c)/2,y=s(c)/2;for(const[x,_,w,S]of[[c,-1,d,m],[l,1,h,v]]){const E=[[-w,-S],[w,-S],[w,S],[-w,S]],A=[[-p,-y],[p,-y],[p,y],[-p,y]];for(let M=0;M<4;M++){const b=E[M],T=E[(M+1)%4],I=A[(M+1)%4],O=A[M],z=_<0?[b,O,I,b,I,T]:[b,T,I,b,I,O];for(const[F,U]of z)n.push(F,x,U),t.push(0,_,0),e.push(.5,ce(x/Ei)),i.push(1)}}}};o(0,Ql,0,!1);for(let c=0;c<m0;c++){const l=Ql+c*Ms;o(l,l+Ms-.45,-.25,!1),o(l+Ms-.45,l+Ms,.35,!0)}const a=new ae;return a.setAttribute("position",new qt(n,3)),a.setAttribute("normal",new qt(t,3)),a.setAttribute("uv",new qt(e,2)),a.setAttribute("aLedge",new qt(i,1)),a}function jx(n,t,e=[1,1,1]){return new Ae({uniforms:{...n,uMap:{value:t},uTint:{value:new P(...e)},uReady:{value:0}},vertexShader:`
      attribute float aLedge; varying vec2 vUv; varying vec3 vW; varying vec3 vN; varying float vL;
      void main(){ vUv = uv; vL = aLedge; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; uniform vec3 uTint; uniform float uReady; uniform vec3 uAmbBot; varying vec2 vUv; varying vec3 vW; varying vec3 vN; varying float vL;
      void main(){
        vec3 n = normalize(vN);
        // the generated elevation, or a plain weathered grey until it arrives
        vec3 tex = texture2D(uMap, vUv).rgb;
        vec3 plain = vec3(0.72, 0.71, 0.68) * (0.85 + 0.25 * vnoise(vUv * vec2(40.0, 300.0)));
        vec3 alb = mix(plain, tex, uReady) * uTint;
        if (vL > 0.5) alb = mix(alb, vec3(0.78, 0.77, 0.74) * uTint, 0.45);
        float diff = max(dot(n, uSunDir), 0.0);
        // pale stone in shade still gets plenty of light from the open sky and the bright ground
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5) * 1.45 + uSunCol * 0.08;
        vec3 col = alb * (uSunCol * diff + amb);
        vec3 V = normalize(cameraPosition - vW), H = normalize(uSunDir + V);
        col += uSunCol * pow(max(dot(n, H), 0.0), 40.0) * 0.08 * (uTint.r > 0.95 && uTint.b < 0.6 ? 6.0 : 1.0);
        gl_FragColor = vec4(fogIt(col, vW), 1.0);
      }`})}function Zx(n,t,e){const i=[.84,.83,.8],r=[.86,.67,.27];n(Pt(new ne(t+.8,1,e+.8),0,Ei+.5,0),i,j.cloth);const s=e/2-.3;n(Pt(new Me(s,s,t-1.2,20,1,!1,0,Math.PI),0,Ei+1,0,0,0,Math.PI/2).rotateY(0),i,j.cloth);for(const a of[-1,1])n(Pt(new Me(s+.5,s+.5,.8,20,1,!1,0,Math.PI),a*(t/2-.4),Ei+1,0,0,0,Math.PI/2),[.8,.79,.76],j.cloth);const o=11;for(let a=0;a<o;a++){const c=-t/2+1.6+a/(o-1)*(t-3.2);n(Pt(ln(.55,.65,.55,10,8),c,Ei+1+s+.5,0),r,j.metal),n(Pt(new Jr(.28,1.4,8),c,Ei+1+s+1.6,0),r,j.metal)}}function Kx(n,t){const e=new Qe,i=t(Wn.x,Wn.z)-.6;e.position.set(Wn.x,i,Wn.z),e.rotation.y=$x(71);const r=new ui(new Uint8Array([180,178,172,255]),1,1);r.needsUpdate=!0;const s=jx(n,r);p0.load("/textures/gopura-face.webp",u=>{u.colorSpace=vn,u.anisotropy=8,s.uniforms.uMap.value=u,s.uniforms.uReady.value=1},void 0,()=>{});const o=new ue(Yx(),s);o.frustumCulled=!1,e.add(o);const a=[],c=(u,f,d)=>a.push(Pi(u,0,f,d));Zx(c,tc*Zo,jo*Zo),c(Pt(new ne(14,1.2,6),0,.2,jo/2+3),[.7,.68,.63],j.cloth);const l=new ue(Yi(a),si(n,0));return l.frustumCulled=!1,e.add(l),e.facade=s,e}function Jx(n,t,e){const i=new Qe,r=Math.min(t(Ze.x-25,Ze.z),t(Ze.x+25,Ze.z),t(Ze.x,Ze.z-40),t(Ze.x,Ze.z+40));i.position.set(Ze.x,r,Ze.z),i.rotation.y=-(9*Math.PI)/180;const s=[],o=(v,g,p)=>s.push(Pi(v,0,g,p)),a=[.84,.82,.78],c=[.62,.61,.58],l=[.88,.68,.24];for(const[v,g,p,y]of[[0,-44,60,8],[0,44,60,8],[-26,0,8,80],[26,0,8,80]]){o(Pt(new ne(p,12,y),v,-6,g),[.62,.6,.56],j.cloth),o(Pt(new ne(p,6,y),v,3,g),a,j.cloth),o(Pt(new ne(p+.6,.8,y+.6),v,6.4,g),c,j.cloth);for(let x=0;x<Math.max(p,y)/6;x++){const _=(x+.5)/(Math.max(p,y)/6)-.5;o(Pt(ln(.35,.5,.35,8,6),v+(p>y?_*p:0),7.2,g+(y>p?_*y:0)),l,j.metal)}}const u=-6,f=6;let d=0,h=15;for(let v=0;v<6;v++){const g=v===0?7:2.6;o(Pt(new ne(h,g,h),u,d+g/2,f),l.map(p=>p*(.9+v%2*.1)),j.metal),o(Pt(new ne(h+.8,.5,h+.8),u,d+g,f),l.map(p=>p*.8),j.metal),d+=g,h*=.8}o(Pt(ln(h*.75,h*.7,h*.75,14,10,Math.PI/2),u,d,f),l,j.metal),o(Pt(new Jr(.5,2.6,8),u,d+h*.7+1.2,f),l,j.metal),d=0,h=8;for(let v=0;v<4;v++){const g=v===0?5:2;o(Pt(new ne(h,g,h),22,d+g/2,-30),l.map(p=>p*.95),j.metal),d+=g,h*=.78}o(Pt(ln(h*.7,h*.6,h*.7,12,8,Math.PI/2),22,d,-30),l,j.metal);const m=new ue(Yi(s),si(n,0));return m.frustumCulled=!1,i.add(m),i}function Qx(n,t){const e=new Qe,i=t(Br.x,Br.z)-1.2,r=new Ae({side:je,alphaToCoverage:!0,uniforms:{...n,uMap:{value:null},uReady:{value:0}},vertexShader:`varying vec2 vUv; varying vec3 vW;
      void main(){ vUv = uv;
        vec3 c = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec2 sz = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        vec3 toCam = cameraPosition - c; toCam.y = 0.0; toCam = normalize(toCam + 1e-5);
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
        vec3 w = c + right * position.x * sz.x + vec3(0.0, position.y * sz.y, 0.0);
        vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; uniform float uReady; varying vec2 vUv; varying vec3 vW;
      void main(){
        if (uReady < 0.5) discard;
        vec4 c = texture2D(uMap, vUv);
        if (c.a < 0.4) discard;
        // a photograph lit by the morning: nudge it toward the scene's light
        vec3 col = c.rgb * mix(vec3(1.0), uSunCol * 0.85 + uAmbTop * 0.3, 0.35);
        gl_FragColor = vec4(fogIt(col, vW), 1.0);
      }`}),s=new ue(new dn(1,1).translate(0,.5,0),r);s.frustumCulled=!1,e.add(s),e.position.set(Br.x,i,Br.z),p0.load("/sprites/statue-left.webp",l=>{l.colorSpace=vn,l.anisotropy=8,r.uniforms.uMap.value=l,r.uniforms.uReady.value=1;const u=l.image.width/l.image.height,f=52;s.scale.set(f*u,f,1)},void 0,()=>{});const o=[];((l,u,f)=>o.push(Pi(l,0,u,f)))(Pt(ln(21,4.5,21,18,8,Math.PI/2),0,-1.5,0),[.45,.43,.4],j.cloth);const c=new ue(Yi(o),si(n,0));return c.frustumCulled=!1,e.add(c),e}function ec(n,t,e,i,{fg:r="#1d4f9c",bg:s="#f4f3ee",font:o='bold 150px "Instrument Sans", Arial, sans-serif'}={}){const a=document.createElement("canvas");a.width=1024,a.height=Math.round(1024*i/e);const c=a.getContext("2d");c.fillStyle=s,c.fillRect(0,0,a.width,a.height),c.fillStyle=r,c.font=o,c.textAlign="center",c.textBaseline="middle";let l=parseFloat(o.match(/(\d+)px/)[1]);for(;c.measureText(t).width>a.width*.9&&l>10;)l-=4,c.font=o.replace(/\d+px/,`${l}px`);c.fillText(t,a.width/2,a.height/2+l*.04);const u=new Wo(a);u.colorSpace=vn,u.anisotropy=4;const f=new Ae({side:je,uniforms:{...n,uMap:{value:u}},vertexShader:`varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){ vec3 c = texture2D(uMap, vUv).rgb; vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        vec3 col = c * (uSunCol * (0.35 + 0.65 * max(dot(n, uSunDir), 0.0)) + uAmbTop * 0.6);
        gl_FragColor = vec4(fogIt(col, vW), 1.0); }`}),d=new ue(new dn(e,i),f);return d.frustumCulled=!1,d}function t2(n,t,e){const i=sn(77),r=[],s=(x,_,w)=>r.push(Pi(x,0,_,w)),o=new Qe,a=[.93,.93,.91],c=[.2,.26,.31],l=[.42,.13,.1],u=[.62,.6,.56],f=(x,_,w,S,E=0)=>Pt(x,0,0,0).applyMatrix4(new le().compose(new P(_,t(_,w)+E,w),new Be().setFromEuler(new tn(0,S,0)),new P(1,1,1))),d=(x,_,w,S,E=0)=>x.applyMatrix4(new le().compose(new P(_,w,S),new Be().setFromEuler(new tn(0,E,0)),new P(1,1,1))),h=(x,_,w)=>new ne(x,_,w),m=(x,_,w,S)=>{let E=_;for(let A=0;A<400&&e(x,E)>S;A++)E+=w*.5;return E},v=(x,_,w,S,E)=>{let A=1/0,M=-1/0;const b=Math.cos(E),T=Math.sin(E);for(let I=0;I<=4;I++)for(let O=0;O<=4;O++){const z=(I/4-.5)*w,F=(O/4-.5)*S,U=t(x+z*b+F*T,_-z*T+F*b);A=Math.min(A,U),M=Math.max(M,U)}return{lo:A,hi:M}},g=(x,_,w,S,E,A,{fh:M=3.3,face:b=-1,trim:T=null,tanks:I=2,base:O=null,balconies:z=!0}={})=>{const F=O??v(x,_,w+2,S+2,A).lo-.25,U=F+E*M,k=(D,H,G=j.cloth,W=0,X=0,st=0)=>{D.translate(W,X,st),s(d(D,x,0,_,A),H,G)};k(h(w,U-F+6,S),a,j.cloth,0,(U+F-6)/2,0);for(let D=0;D<E;D++){const H=F+D*M;{const G=Math.max(1,Math.floor(w/4.2)),W=(w-.6)/G;for(let X=0;X<G;X++){const st=-w/2+.3+W*(X+.5);k(h(1.25,2.25,.12),c,j.glass,st-W*.2,H+1.2,b*(S/2+.04)),k(h(1.3,1.25,.12),c,j.glass,st+W*.22,H+1.65,b*(S/2+.04))}}D>0&&z&&(k(h(w+.2,.24,1.5),a,j.cloth,0,H,b*(S/2+.7)),k(h(w+.2,1,.16),[.95,.95,.93],j.cloth,0,H+.5,b*(S/2+1.42)));for(let G=0;G<Math.floor(w/3.6);G++)k(h(1.5,1.35,.12),c,j.glass,-w/2+1.8+G*3.6,H+1.75,-b*(S/2+.05));for(const G of[-1,1])for(let W=0;W<Math.max(1,Math.floor(S/4.2));W++)k(h(.12,1.35,1.5),c,j.glass,G*(w/2+.05),H+1.75,-S/2+2.1+W*4.2)}if(z)for(let D=0;D<=Math.floor(w/4.2);D++)k(h(.28,E*M-.2,1.5),a,j.cloth,-w/2+.3+D*((w-.6)/Math.floor(w/4.2)),F+E*M/2+.1,b*(S/2+.7));k(h(w-.2,.2,S-.2),[.56,.55,.52],j.cloth,0,U+.1,0);for(const[D,H,G,W]of[[w+.3,.3,0,S/2],[w+.3,.3,0,-S/2],[.3,S+.3,w/2,0],[.3,S+.3,-w/2,0]])k(h(D,1,H),a,j.cloth,G,U+.5,W),T&&k(h(D+.04,.32,H+.04),T,j.cloth,G,U+.62,W);k(h(4,2.6,3.5),a,j.cloth,w*.25,U+1.3,0);for(let D=0;D<I;D++)k(new Me(.75,.75,1.5,12),[.08,.08,.09],j.plastic,-w*.3+D*2,U+1.55,S*.15);return{g0:F,top:U}};{const{top:S}=g(16979,-8607,52,17,7,.04,{face:-1,trim:[.7,.16,.12],tanks:3}),E=16965,A=-8606,M=g(E,A,15,11,2,.04,{base:S+1,face:-1,tanks:1,trim:[.7,.16,.12],balconies:!1});for(const[b,T,I,O]of[[E,A-5.8,.04,12],[E+7.8,A,.04+Math.PI/2,9]]){const z=ec(n,"RNS",O,O*.32,{fg:"#1f4fa8",bg:"#f5f4ef"});z.position.set(b,M.top-1.6,T),z.rotation.y=I+(I===.04?Math.PI:0),o.add(z)}g(17036,m(17036,-8540,-1,12),42,10,3,.12,{face:-1,tanks:2}),g(17083,m(17083,-8540,-1,12),30,10,4,.1,{face:-1,tanks:2})}{let x=17116,_=-8609;for(let k=0;k<40;k++){const D=e(x,_);if(Math.abs(D-1.5)<.5)break;const H=2,G=e(x+H,_)-e(x-H,_),W=e(x,_+H)-e(x,_-H),X=Math.hypot(G,W)||1;x-=G/X*(D-1.5)*.6,_-=W/X*(D-1.5)*.6}const w=Math.PI/8,S=2.6,E=(k,D,H,G=8,W=!1)=>new Me(k,D,H,G,1,W);s(d(E(11.5,12.8,S+3.5).translate(0,(S-3.5)/2,0),x,0,_,w),u,j.cloth);let A=S,M=10.2;for(let k=0;k<3;k++){const D=k===2?3.1:3.7;s(d(E(M-1,M-1,D).translate(0,D/2,0),x,A,_,w),c,j.glass);for(let H=0;H<8;H++){const G=H/8*Math.PI*2;s(d(E(.32,.32,D,8).translate(Math.cos(G)*(M-.4),D/2,Math.sin(G)*(M-.4)),x,A,_,0),a,j.cloth)}s(d(E(M+.7,M+.5,.42).translate(0,D+.21,0),x,A,_,w),a,j.cloth),s(d(E(M+.55,M+.55,1,8,!0).translate(0,D+.92,0),x,A,_,w),l,j.cloth),s(d(E(M+.62,M+.62,.12).translate(0,D+1.42,0),x,A,_,w),l,j.cloth),A+=D+.42,M*=k===0?.86:.78}for(let k=0;k<8;k++){const D=k/8*Math.PI*2;s(d(E(.2,.2,2.6,6).translate(Math.cos(D)*2.4,1.3,Math.sin(D)*2.4),x,A,_,0),a,j.cloth)}s(d(E(2.9,2.9,.4).translate(0,2.8,0),x,A,_,w),a,j.cloth),s(d(ln(2.6,2.4,2.6,16,10,Math.PI/2).translate(0,3,0),x,A,_,0),[.95,.94,.9],j.cloth),s(d(E(.08,.22,1.4,8).translate(0,6,0),x,A,_,0),[.86,.68,.26],j.metal);const b=ec(n,"NAVEEN BEACH RESTAURANT",11,1,{fg:"#b3261e",bg:"#f6f4ee"}),T=Math.atan2(17200-x,-8640-_);b.position.set(x+Math.sin(T)*8.95,S+3.7+.42+.95,_+Math.cos(T)*8.95),b.rotation.y=T,o.add(b);for(let k=0;k<26;k++){const D=i()*6.28,H=12.5+i()*4,G=1.2+i()*2.2,W=ln(G,G*.6,G*.9,9,7);s(Pt(W,x+Math.cos(D)*H,-.6+i()*.8,_+Math.sin(D)*H,0,i()*6.28,0),[.24,.22,.2],j.cloth)}const I=x+Math.sin(T)*12,O=_+Math.cos(T)*12,z=34,F=S+.6,U=h(2.6,.35,z).translate(0,0,z/2);s(d(U,I,F,O,T),u,j.cloth);for(const k of[-1,1])s(d(h(.1,1,z).translate(k*1.25,.65,z/2),I,F,O,T),l,j.cloth);for(let k=0;k<=5;k++)s(d(h(.6,F+3,.6).translate(0,-6.2/2,k/5*z),I,F,O,T),u,j.cloth)}for(const[x,_,w,S]of[[17082,3,26,.08],[17048,4,24,.08],[17014,3,22,.08]])g(x,m(x,-8460,1,13),w,12,_,S,{face:1,tanks:2});s(f(new Me(.25,.25,6,6).translate(0,3,0),16955,-8574,0),[.6,.55,.45],j.metal),s(f(new Me(3.2,3.2,.4,24).rotateX(Math.PI/2).translate(0,7.5,0),16955,-8574,-.3),[.92,.72,.25],j.metal);const p=[[17148,-8410],[17166,-8446],[17184,-8500]];for(let x=0;x<p.length-1;x++){const[_,w]=p[x],[S,E]=p[x+1],A=Math.hypot(S-_,E-w),M=Math.atan2(-(E-w),S-_),b=Math.max(t(_,w),t(S,E))+.5;s(Pt(new ne(A+2,b+2,2.5).translate(0,(b+2)/2-2,0),(_+S)/2,0,(w+E)/2,0,M,0),[.5,.47,.42],j.cloth)}for(let x=0,_=0;x<170&&_<6e3;_++){const w=16660+i()*580,S=-8690+i()*330,E=e(w,S);if(E>6||E<-10||Math.hypot(w-Wn.x,S-Wn.z)<60&&E>-4)continue;const A=1.2+i()*3.2,M=ln(A,A*(.55+i()*.3),A*(.8+i()*.4),9,7),b=M.attributes.position;for(let I=0;I<b.count;I++){const O=.85+.3*Math.sin(b.getX(I)*3.1+x)*Math.cos(b.getZ(I)*2.7);b.setXYZ(I,b.getX(I)*O,b.getY(I)*O,b.getZ(I)*O)}M.computeVertexNormals();const T=.22+i()*.1;s(Pt(M,w,Math.max(-.8,t(w,S))-A*.25,S,0,i()*6.28,0),[T+.02,T,T-.02],j.cloth),x++}const y=new ue(Yi(r),si(n,0));return y.frustumCulled=!1,o.add(y),o}function e2(n,t,e){const i=sn(515),r=[],s=(p,y,x)=>r.push(Pi(p,0,y,x)),o=(p,y)=>{const _=e(p+3,y)-e(p-3,y),w=e(p,y+3)-e(p,y-3),S=Math.hypot(_,w)||1;return[_/S,w/S]},a=(p,y,x)=>{for(let _=0;_<60;_++){const w=e(p,y),[S,E]=o(p,y);if(Math.abs(w-x)<.3)break;p-=S*(w-x)*.7,y-=E*(w-x)*.7}return[p,y]},c=(p,y,x,_,w,S,E,A,M)=>{const b=qx(p,y,x,_),T=new le().compose(new P(w,S,E),new Be().setFromEuler(new tn(0,A,0)),new P(1,1,1));s(b.sides.applyMatrix4(T),M.side,j.plastic);for(const I of b.band)s(I.applyMatrix4(T),M.band,j.plastic);return s(b.bottom.applyMatrix4(T),M.bottom,j.plastic),s(b.floor.applyMatrix4(T),M.floor,j.wood),T},l=[[.12,.35,.62],[.1,.42,.55],[.16,.3,.7],[.08,.48,.5],[.14,.4,.32],[.1,.36,.66],[.85,.85,.82],[.7,.2,.15]],u=[[.93,.93,.9],[.95,.82,.25],[.8,.2,.15],[.93,.93,.9]],f=[[17213,-8521],[17336,-8464],[17493,-8215],[17510,-8056]],d=f.slice(1).map((p,y)=>Math.hypot(p[0]-f[y][0],p[1]-f[y][1])),h=d.reduce((p,y)=>p+y,0),m=p=>{let y=p*h;for(let x=0;x<d.length;x++){if(y<=d[x]){const _=y/d[x];return[f[x][0]+(f[x+1][0]-f[x][0])*_,f[x][1]+(f[x+1][1]-f[x][1])*_]}y-=d[x]}return f[f.length-1]};for(const[p,y]of[[0,16],[1,27]])for(let x=6+p*1.3;x<h*.55;x+=2.5+i()*1.2){if(i()<.12)continue;let[_,w]=m(x/h);[_,w]=a(_,w,y+(i()-.5)*3);const[S,E]=o(_,w),A=Math.atan2(E,-S)+(i()-.5)*.18,M=7.5+i()*3,b=1.7+i()*.35,T=.85+i()*.2,I=l[i()*l.length|0],O=c(M,b,T,{bowRise:.45+i()*.25},_,t(_,w)-.05,w,A,{side:I,band:u[i()*u.length|0],bottom:i()<.5?[.32,.12,.1]:[.12,.12,.13],floor:[.3,.25,.2]});i()<.22&&s(new ne(M*.62,.35,b*1.05).translate(-M*.05,T+.1,0).applyMatrix4(O),[.12,.5,.55],j.cloth)}const v=[[17199,-8593],[17249,-8680],[17313,-8846],[17358,-9156]];for(let p=0;p<30;p++){const y=i()*.999*(v.length-1),x=Math.floor(y),_=y-x,[w,S]=v[x],[E,A]=v[x+1];let M=w+(E-w)*_,b=S+(A-S)*_,T=i();[M,b]=a(M,b,-(T<.35?9:5)-i()*10);const[I,O]=o(M,b),z=Math.atan2(-O,I)+(i()-.5)*.5;if(T<.35){const F=10+i()*3,U=2.6,k=1.15,D=i()<.5?[.95,.8,.22]:[.93,.93,.9],H=c(F,U,k,{bowRise:.35,fine:.5},M,-.45,b,z,{side:D,band:[.15,.35,.7],bottom:[.7,.15,.12],floor:[.85,.85,.82]});s(new ne(F*.6,1.5,U*.86).translate(-F*.06,k+.75,0).applyMatrix4(H),[.94,.94,.92],j.plastic);for(const G of[-1,1])s(new ne(F*.56,.7,.05).translate(-F*.06,k+.95,G*U*.435).applyMatrix4(H),[.12,.16,.2],j.glass);s(new ne(F*.64,.14,U*.95).translate(-F*.06,k+1.57,0).applyMatrix4(H),[[.92,.42,.12],[.15,.35,.7],[.8,.15,.12]][i()*3|0],j.plastic)}else if(T<.75){const F=5.5+i()*1.5,U=2,k=.85,D=[[.95,.95,.93],[.95,.8,.2],[.9,.25,.15]][i()*3|0],H=c(F,U,k,{bowRise:.22,sternRise:0,fine:.45},M,-.3,b,z,{side:D,band:[.12,.3,.65],bottom:[.9,.9,.88],floor:[.85,.83,.78]});s(new ne(.5,.55,U*.75).translate(F*.08,k+.3,0).applyMatrix4(H),[.15,.2,.24],j.glass)}else{const U=[[.1,.1,.12],[.95,.5,.1],[.95,.85,.2],[.2,.5,.9]][i()*4|0],k=c(3,1.1,.6,{bowRise:.1,sternRise:0,fine:.4},M,-.2,b,z,{side:U,band:[.93,.93,.9],bottom:[.9,.9,.9],floor:U});s(new ne(1.1,.25,.45).translate(-.2,.75,0).applyMatrix4(k),[.1,.1,.1],j.rubber)}}const g=new ue(Yi(r),si(n,0));return g.frustumCulled=!1,g}function n2(n,t,e){const i=sn(909),r=[],s=(X,st,ot)=>r.push(Pi(X,0,st,ot)),o=new Qe,a=[.93,.89,.8],c=[.74,.7,.62],l=[.95,.95,.93],u=[.13,.16,.19],f=[.62,.16,.12],d=[.3,.5,.2],{x:h,z:m,ry:v}=yi,g=Math.cos(v),p=Math.sin(v),y=(X,st)=>[h+X*g+-st*p,m-X*p+-st*g],x=Math.min(...[[-30,-24],[30,-24],[-30,22],[30,22],[0,0]].map(([X,st])=>{const[ot,V]=y(X,st);return t(ot,V)}))-.15,_=(X,st,ot,V,nt=0)=>{const[gt,Tt]=y(st,V);return X.applyMatrix4(new le().compose(new P(gt,x+ot,Tt),new Be().setFromEuler(new tn(0,v+nt,0)),new P(1,1,1)))},w=(X,st,ot)=>new ne(X,st,ot),S=44,E=12,A=3.5,M=2*A+.6;s(_(w(S,M+1.2,E).translate(0,(M-1.2)/2,0),0,0,-6),a,j.cloth);for(let X=.5;X<M-.3;X+=.42)s(_(w(S+.06,.07,E+.06).translate(0,X,0),0,0,-6),c,j.cloth);const b=(X,st,ot,V,nt,gt)=>{const Tt=gt?-1:1,Nt=($,Z)=>new Me($,$,Z,16,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),yt=w(V,nt,.1).translate(0,nt/2,Tt*.1),Ot=Nt(V/2,.1).translate(0,nt,Tt*.1),ct=w(V+.36,nt,.08).translate(0,nt/2,Tt*.05),R=Nt(V/2+.18,.08).translate(0,nt,Tt*.05);for(const[$,Z,it]of[[ct,l,j.cloth],[R,l,j.cloth],[yt,u,j.glass],[Ot,u,j.glass]])s(_($,X,st,ot),Z,it)},T=6;for(let X=0;X<2;X++)for(let st=0;st<T;st++){const ot=-S/2+S/T*(st+.5),V=X*A+.55;b(ot,V+.35,-6+E/2,2,1.75,!0),b(ot,V+.5,-6-E/2,1.2,1.2,!1),X===1&&(s(_(w(2.8,.18,1.1).translate(0,0,-.55),ot,V-.05,-6+E/2),l,j.cloth),s(_(w(2.8,.9,.08).translate(0,.45,-1.08),ot,V-.05,-6+E/2),l,j.cloth))}s(_(w(S-.2,.2,E-.2).translate(0,M+.1,0),0,0,-6),[.58,.56,.52],j.cloth);for(const[X,st,ot,V]of[[S+.4,.3,0,E/2],[S+.4,.3,0,-E/2],[.3,E+.4,S/2,0],[.3,E+.4,-S/2,0]])s(_(w(X,.9,st).translate(ot,M+.45,-V),0,0,-6),a,j.cloth),s(_(w(X+.06,.14,st+.06).translate(ot,M+.95,-V),0,0,-6),f,j.cloth);s(_(w(9,3.2,E+.8).translate(0,M+1.6,0),0,0,-6),a,j.cloth),b(0,M+.2,-6+E/2+.4,3.2,1.5,!0);const I=-6+E/2,O=22,z=O-I;s(_(w(6.4,.5,z).translate(0,4.05,-z/2),0,0,I),l,j.cloth);for(const X of[-3,3])for(let st=0;st<=5;st++){const ot=I+st/5*z;s(_(new Me(.17,.2,3.8,10).translate(0,1.9,0),X,0,ot),l,j.cloth),st<5&&s(_(w(.24,.55,z/5-.4).translate(0,3.55,-z/10),X,0,ot),l,j.cloth)}for(const[X,st]of[[-32,-4.5],[4.5,32]]){const ot=st-X;s(_(w(ot,1.5,.35).translate(0,.75,0),(X+st)/2,0,23),a,j.cloth),s(_(w(ot+.05,.12,.42).translate(0,1.56,0),(X+st)/2,0,23),f,j.cloth)}for(const X of[-4.5,4.5])s(_(w(.9,2.6,.9).translate(0,1.3,0),X,0,23),a,j.cloth);for(const[X,st,ot,V]of[[-32,0,.35,46],[32,0,.35,46],[0,-23,64,.35]])s(_(w(ot,1.5,V).translate(0,.75,0),X,0,st),a,j.cloth);for(const[X,st,ot,V]of[[-30,-4,1,21],[4,30,1,21]]){const nt=st-X,gt=V-ot;s(_(w(nt,.12,gt).translate(0,.08,0),(X+st)/2,0,(ot+V)/2),d,j.cloth);for(const[Tt,Nt,yt,Ot]of[[(X+st)/2,ot,nt,.2],[(X+st)/2,V,nt,.2],[X,(ot+V)/2,.2,gt],[st,(ot+V)/2,.2,gt]])s(_(w(yt,.22,Ot).translate(0,.11,0),Tt,0,Nt),f,j.cloth)}s(_(w(64,.06,1.2).translate(0,.03,0),0,0,0),[.62,.58,.52],j.cloth);const F=ec(n,"NAVEEN BEACH RESORT",8.5,1,{fg:"#1c4f96",bg:"#f6f2e6"}),[U,k]=y(0,23.3);F.position.set(U,x+3.3,k),F.rotation.y=v+Math.PI,o.add(F),s(_(w(8.9,1.3,.25).translate(0,3.3,0),0,0,23.1),a,j.cloth);const D=[];for(let X=0;X<16;X++){const st=(i()-.5)*58,ot=2+i()*19;Math.abs(st)<5||D.push(y(st,ot))}for(let X=0;X<6;X++)D.push(y(-28+X*11,-20));const H=new Cn(Zl(),jl(n,On("palm"),{instanced:!0,light:.45}),D.length),G=new le;D.forEach(([X,st],ot)=>{const V=9+i()*7;G.compose(new P(X,x-.2,st),new Be,new P(V*.5322*(i()<.5?-1:1),V,1)),H.setMatrixAt(ot,G)}),H.frustumCulled=!1,o.add(H);const W=new ue(Yi(r),si(n,0));return W.frustumCulled=!1,o.add(W),o}function i2(n,t,e){const i=new Qe,r=Kx(n,t);return i.add(r,Jx(n,t),Qx(n,t),t2(n,t,e),e2(n,t,e),n2(n,t)),i}const Ko={x:17260,z:-9150},ch={x:25,z:455},uh={x:7e3,z:-2500},As=n=>{const t=1-n;return[t*t*Ko.x+2*t*n*uh.x+n*n*ch.x,t*t*Ko.z+2*t*n*uh.z+n*n*ch.z]},Hi=(()=>{const t=[0];let[e,i]=As(0);for(let r=1;r<=400;r++){const[s,o]=As(r/400);t.push(t[r-1]+Math.hypot(s-e,o-i)),e=s,i=o}return t})(),Cs=Hi[Hi.length-1];function os(n,t={}){const e=ce(n)*Cs;let i=0,r=Hi.length-1;for(;r-i>1;){const g=i+r>>1;Hi[g]<e?i=g:r=g}const s=(e-Hi[i])/(Hi[r]-Hi[i]||1),o=(i+s)/(Hi.length-1),[a,c]=As(o),[l,u]=As(Math.min(1,o+.002)),[f,d]=As(Math.max(0,o-.002)),h=l-f,m=u-d,v=Math.hypot(h,m)||1;return t.x=a,t.z=c,t.hx=h/v,t.hz=m/v,t}const r2=Gr([.425,.44,.465,.515,.545,.552],[0,.004,.05,.86,.996,1]),zo=n=>n<=.425?0:n>=.552?1:r2(n);function Ss(n,{gloss:t=.12,hole:e=null,side:i=hi,detail:r=0,facade:s=null}={}){return new Ae({vertexColors:!0,side:i,uniforms:{...n,uHole:{value:e||new Ee(0,0,-1,-1)},uGloss:{value:t},uDetail:{value:r},uFacade:{value:s?1:0},uFacadeBase:{value:s?s.base:0}},vertexShader:`
      varying vec3 vW; varying vec3 vN; varying vec3 vC;
      attribute float aKind; varying float vKind;
      void main(){
        vKind = aKind;
        mat4 m = modelMatrix;
        #ifdef USE_INSTANCING
          m = m * instanceMatrix;   // houses, roofs and boats are instanced: place each one
        #endif
        vec4 w = m * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(m) * normal);
        #ifdef USE_INSTANCING_COLOR
          vC = color * instanceColor;
        #else
          vC = color;
        #endif
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${pn}
      ${In}
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform vec3 uAmbBot; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen;
      uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform float uTime; uniform float uDiorama; uniform float uSy; uniform float uClipR;
      uniform vec4 uHole; uniform float uGloss; uniform float uDetail; uniform float uFacade; uniform float uFacadeBase;
      uniform sampler2D tGrass; uniform sampler2D tForest; uniform sampler2D tGopura; uniform sampler2D tSand; uniform sampler2D tRock; uniform float uTexOn;
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vKind;
      void main(){
        if (length(vW.xz) > uClipR) discard;
        if (vW.x > uHole.x && vW.x < uHole.z && vW.z > uHole.y && vW.z < uHole.w) discard;
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        vec3 vc = vC;
        if (uTexOn > 0.001 && uDetail > 0.5) {
          // the ground's own grain, by kind: sand, grass and fields, rock, paving (weights blend across their borders)
          float wS = max(0.0, 1.0 - abs(vKind)), wG = max(0.0, 1.0 - abs(vKind - 1.0)), wR = max(0.0, 1.0 - abs(vKind - 2.0)), wP = max(0.0, 1.0 - abs(vKind - 3.0));
          vec3 g = mix(texture2D(tGrass, vW.xz / 40.0).rgb, texture2D(tForest, vW.xz / 70.0).rgb, smoothstep(0.25, 0.4, vC.g - vC.r));
          float lg = 0.35 + 1.4 * dot(g, vec3(0.333));
          float ls = 0.72 + 0.55 * dot(texture2D(tSand, vW.xz / 7.0).rgb, vec3(0.333)) * (0.85 + 0.3 * dot(texture2D(tSand, vW.xz / 41.0).rgb, vec3(0.333)));
          // rock: projected from the side it faces, so cliffs are not smeared
          vec3 an = abs(n); vec2 ruv = an.y > 0.7 ? vW.xz / 9.0 : (an.x > an.z ? vW.zy : vW.xy) / 9.0;
          float lr = 0.45 + 1.15 * dot(texture2D(tRock, ruv).rgb, vec3(0.333));
          vec2 pv = fract(vW.xz / 1.6); float lp = 0.92 + 0.08 * step(0.06, min(pv.x, pv.y)) - 0.05 * fbm(vW.xz * 0.3);
          vc = mix(vc, vc * (wS * ls + wG * lg + wR * lr + wP * lp) / max(wS + wG + wR + wP, 1e-3), uTexOn * 0.85);
        }
        if (uTexOn > 0.001 && uFacade > 0.5 && abs(n.y) < 0.6) {
          vec2 tg = normalize(vec2(-n.z, n.x));
          vec2 fuv = vec2(dot(vW.xz, tg) / 10.0, fract((vW.y - uFacadeBase) / 3.35));
          vc = mix(vc, texture2D(tGopura, fuv).rgb * 1.05, uTexOn * 0.9);
        }
        float depth = max(-vW.y / uSy, 0.0);
        vec3 att = mix(exp(-depth * vec3(0.040, 0.016, 0.009)), exp(-depth * vec3(0.008, 0.004, 0.002)), uDiorama * 0.85);
        float diff = max(dot(n, uSunDir), 0.0);
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5);
        if (depth <= 0.0) amb += uSunCol * max(uSunDir.y, 0.0) * 0.9 * ((1.0 - abs(n.y)) * 0.5 + max(-n.y, 0.0) * 0.3); // light thrown back by the ground
        vec3 col = vc * (depth > 0.0 ? uSunCol * diff * att + amb * mix(vec3(1.0), att, 0.7) : uSunCol * diff + amb);
        vec3 V = normalize(cameraPosition - vW), H = normalize(uSunDir + V);
        col += uSunCol * pow(max(dot(n, H), 0.0), 70.0) * uGloss * (depth > 0.0 ? 0.2 : 1.0);
        if (depth > 0.0) col += caustic(vW.xz * 0.075, uTime * 0.8) * att * max(n.y, 0.0) * 0.4 * uSunCol;
        float dist = length(vW - cameraPosition);
        vec3 hd = normalize(vec3(vW.x - cameraPosition.x, 0.015, vW.z - cameraPosition.z));
        col = mix(mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen)), mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen)), uUnder);
        gl_FragColor = vec4(col, 1.0);
      }`})}function hh(n,t){return new Ae({uniforms:{...n,uPart:{value:t}},vertexShader:`
      attribute vec3 aInfo; varying vec3 vW; varying vec3 vN; varying vec3 vC; varying vec3 vO; varying vec3 vS; varying vec3 vI; varying vec3 vNo;
      void main(){
        mat4 m = modelMatrix * instanceMatrix;
        vec4 w = m * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(m) * normal); vNo = normal;
        vS = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        vO = position; vI = aInfo;
        #ifdef USE_INSTANCING_COLOR
          vC = instanceColor;
        #else
          vC = vec3(1.0);
        #endif
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${pn}
      ${In}
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform vec3 uAmbBot; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen;
      uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform float uClipR; uniform float uPart;
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying vec3 vO; varying vec3 vS; varying vec3 vI; varying vec3 vNo;
      float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        if (length(vW.xz) > uClipR) discard;
        vec3 n = normalize(vN);
        vec3 c = vC; float emit = 0.0;
        if (uPart < 0.5) {
          if (vNo.y > 0.5) {
            // the flat roof: weathered concrete, a pale parapet round its edge
            float edge = min(min(vO.x + 0.5, 0.5 - vO.x) * vS.x, min(vO.z + 0.5, 0.5 - vO.z) * vS.z);
            c = mix(vec3(0.5, 0.49, 0.46) * (0.8 + 0.35 * fbm(vW.xz * 0.4)), vC * 1.02, step(edge, 0.35));
          } else {
            // a wall, in metres across (u) and up (v)
            float u = (abs(vNo.x) > 0.5 ? vO.z * vS.z : vO.x * vS.x), wdt = (abs(vNo.x) > 0.5 ? vS.z : vS.x), v = vO.y * vS.y;
            float floors = max(vI.x, 1.0), fh = vS.y / floors, fl = floor(v / fh), fv = v - fl * fh;
            float bay = 3.1, nb = max(1.0, floor(wdt / bay)), cu = (u / wdt + 0.5) * nb, bi = floor(cu), bu = fract(cu) * wdt / nb;
            float side = vNo.x + vNo.z * 2.0;
            float seed = h1(vec2(bi + side * 17.0, fl + vI.y * 31.0));
            float win = step(0.9, fv) * step(fv, 2.15) * step(abs(bu - wdt / nb * 0.5), 0.62) * step(0.3, seed + 0.25);
            float frame = step(0.82, fv) * step(fv, 2.25) * step(abs(bu - wdt / nb * 0.5), 0.72) * (1.0 - win) * step(0.3, seed + 0.25);
            // monsoon streaks and grime low down
            float streak = fbm(vec2(u * 0.9 + vI.y * 9.0, v * 0.12));
            c *= 0.82 + 0.28 * streak; c *= mix(0.78, 1.0, smoothstep(0.0, 1.6, v));
            c = mix(c, vec3(0.93, 0.92, 0.88), frame * 0.8);
            vec3 glass = mix(vec3(0.1, 0.13, 0.16), vec3(0.22, 0.25, 0.27), seed);
            float lit = step(0.86, h1(vec2(bi * 3.1 + side, fl * 7.7 + vI.y))) * uDusk;
            c = mix(c, glass, win); emit = win * lit;
            // a shopfront: the dark opening and a signboard over it
            if (vI.z > 0.5 && fl < 0.5) {
              float sign = step(2.55, v) * step(v, 3.15), open = step(0.05, v) * step(v, 2.45) * step(abs(bu - wdt / nb * 0.5), wdt / nb * 0.42);
              vec3 sc = 0.55 + 0.45 * cos(6.2832 * (vI.y + vec3(0.0, 0.33, 0.67)));
              c = mix(c, sc, sign); c = mix(c, vec3(0.12, 0.11, 0.1), open); emit = max(emit, open * 0.6 * uDusk);
            }
            // the parapet line round the top
            c = mix(c, c * 1.08, step(vS.y - 0.9, v));
          }
        } else {
          // Mangalore tiles: courses running round the roof, each tile a little different
          vec2 tp = vec2(atan(vO.z, vO.x) * 6.0 * max(vS.x, vS.z) * 0.25, vO.y * vS.y * 3.6);
          float course = fract(tp.y), tile = h1(floor(vec2(tp.x * 1.6, tp.y)));
          c = vC * (0.82 + 0.25 * tile) * (0.75 + 0.25 * smoothstep(0.0, 0.25, course));
          c *= 0.85 + 0.25 * fbm(vW.xz * 0.5);
        }
        float diff = max(dot(n, uSunDir), 0.0);
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5) + uSunCol * max(uSunDir.y, 0.0) * 0.9 * (1.0 - abs(n.y)) * 0.5; // with the light thrown back by the ground
        vec3 col = c * (uSunCol * diff + amb) + emit * vec3(1.0, 0.72, 0.4) * 0.9;
        float dist = length(vW - cameraPosition);
        vec3 hd = normalize(vec3(vW.x - cameraPosition.x, 0.015, vW.z - cameraPosition.z));
        col = mix(mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen)), mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen)), uUnder);
        gl_FragColor = vec4(col, 1.0);
      }`})}function fh(){const n=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.22,1,0],[.22,1,0]],t=[[0,4,5,1],[1,5,2],[2,5,4,3],[3,4,0]],e=[];for(const r of t){const s=r.length===4?[[r[0],r[1],r[2]],[r[0],r[2],r[3]]]:[r];for(const o of s)for(const a of o)e.push(...n[a])}const i=new ae;return i.setAttribute("position",new qt(e,3)),i.computeVertexNormals(),i}function Eo(n,t){const e=n.index?n.toNonIndexed():n;for(const s of Object.keys(e.attributes))s!=="position"&&s!=="normal"&&e.deleteAttribute(s);e.attributes.normal||e.computeVertexNormals();const i=e.attributes.position.count,r=new Float32Array(i*3);for(let s=0;s<i;s++)r[s*3]=t[0],r[s*3+1]=t[1],r[s*3+2]=t[2];return e.setAttribute("color",new he(r,3)),e}new le;new P;new P;function Ya(n,t,e){const i=new ae;i.setAttribute("position",new he(n.pos,3)),i.setAttribute("normal",new he(n.nrm,3)),i.setAttribute("color",new he(n.col,3)),n.kind&&i.setAttribute("aKind",new he(n.kind,1)),i.setIndex(new he(n.idx,1));const r=new ue(i,Ss(t,{gloss:0,hole:e,detail:1}));return r.frustumCulled=!1,r}function s2(n,t,e){const i=new Qe,r=sn(2024),s=e.fine,o=e.near,a=new Ee(Nn.minX+30,Nn.minZ+30,Nn.minX+Nn.size-30,Nn.minZ+Nn.size-30),c=new Ee(Sn.minX,Sn.minZ,Sn.minX+Sn.size,Sn.minZ+Sn.size);i.add(Ya(o,n,null),Ya(s,n,c),Ya(e.coarse,n,a));const l=(ct,R)=>ct>Sn.minX+1&&ct<Sn.minX+Sn.size-1&&R>Sn.minZ+1&&R<Sn.minZ+Sn.size-1,u=(ct,R)=>l(ct,R)?th(o,ct,R):th(s,ct,R),f=(ct,R)=>Nx(ct,R,u(ct,R));{const R=new ui(e.shore,256,256,qi,oi);R.magFilter=R.minFilter=Gn,R.needsUpdate=!0,n.uSdf2.value=R,n.uRect2.value.set(Nn.minX,Nn.minZ,Nn.size,Nn.size)}if(e.shoreNear){const R=new Uint16Array(262144);for(let Z=0;Z<R.length;Z++)R[Z]=id.toHalfFloat(e.shoreNear[Z]);const $=new ui(R,512,512,qi,mr);$.magFilter=$.minFilter=Gn,$.needsUpdate=!0,n.uSdf3.value=$,n.uRect3.value.set(Sn.minX,Sn.minZ,Sn.size,Sn.size)}const d=(ct,R,$)=>Math.hypot(ct.x-R.x,ct.z-R.z)<$;let h=0;const m=new le,v=new pe;i.add(i2(n,f,u));const g=t>.6?1700:700,p=new ne(1,1,1).translate(0,.5,0),y=new Cn(p,hh(n,0),g),x=new Cn(fh(),hh(n,1),g),_=new Float32Array(g*3);y.geometry.setAttribute("aInfo",new Fs(_,3)),x.geometry.setAttribute("aInfo",new Fs(new Float32Array(g*3),3));const w=Eo(new Me(.7,.7,1.4,10).translate(0,.7,0),[.07,.07,.08]),S=new Cn(w,Ss(n,{gloss:.3}),g),E=Eo(new ne(1,1,1).translate(0,.5,0),[1,1,1]),A=Eo(fh(),[1,1,1]),M=new Cn(E,Ss(n,{gloss:.05}),260),b=new Cn(A,Ss(n,{gloss:.25}),260),T=[[.95,.94,.9],[.95,.9,.76],[.84,.9,.95],[.96,.84,.82],[.86,.94,.86],[.93,.93,.93],[.98,.86,.55],[.8,.88,.8]],I=[[.95,.94,.9],[.95,.88,.7],[.75,.42,.3],[.86,.9,.95],[.92,.86,.74]],O=new Set,z=7,F=(ct,R)=>ct*100003+R,U=(ct,R,$,Z,it)=>{const J=Math.hypot($,Z)/2+1.5,vt=Math.floor((ct-J)/z),_t=Math.floor((ct+J)/z),wt=Math.floor((R-J)/z),xt=Math.floor((R+J)/z);for(let Ct=vt;Ct<=_t;Ct++)for(let N=wt;N<=xt;N++)if(O.has(F(Ct,N)))return!1;for(let Ct=vt;Ct<=_t;Ct++)for(let N=wt;N<=xt;N++)O.add(F(Ct,N));return!0};let k=0,D=0,H=0,G=0;const W=new Be,X=new tn;for(let ct=0;ct<4e3&&G<110;ct++){const R=Wn.x-80+r()*320,$=Wn.z-260+r()*520,Z=u(R,$);if(Z<59||Z>78||d({x:R,z:$},Ze,75)||d({x:R,z:$},Wn,34)||d({x:R,z:$},Ts,240)||d({x:R,z:$},yi,yi.R+8))continue;const it=3,J=u(R+it,$)-u(R-it,$),vt=u(R,$+it)-u(R,$-it),_t=Math.atan2(J,vt)+(r()-.5)*.1,wt=2.6+r()*2.4,xt=2.4+r()*1.4,Ct=2.1+r()*.5;if(!U(R,$,wt,xt))continue;const N=f(R,$)-.2;X.set(0,_t,0),W.setFromEuler(X),m.compose(new P(R,N,$),W,new P(wt,Ct,xt)),M.setMatrixAt(G,m);const C=.22+r()*.16;v.setRGB(C*(.9+r()*.3),C*(.85+r()*.2),C*(.8+r()*.2)),M.setColorAt(G,v),m.compose(new P(R,N+Ct,$),W,new P(wt*1.2,.3+r()*.25,xt*1.3)),b.setMatrixAt(G,m);const Y=[[.12,.42,.78],[.1,.52,.6],[.15,.35,.72],[.85,.3,.15],[.95,.8,.2]][r()<.75?r()*3|0:3+(r()*2|0)];v.setRGB(...Y),b.setColorAt(G,v),G++}const st=(ct,R,$,Z,it,J,vt,_t)=>{const wt=it*(J?3.2:3)+(J?.9:.4),xt=Math.min(f(ct-$/2,R),f(ct+$/2,R),f(ct,R-Z/2),f(ct,R+Z/2))-.3;X.set(0,vt,0),W.setFromEuler(X),m.compose(new P(ct,xt,R),W,new P($,wt,Z)),y.setMatrixAt(k,m);const Ct=(J?T:I)[r()*(J?T.length:I.length)|0];if(v.setRGB(Ct[0],Ct[1],Ct[2]),y.setColorAt(k,v),_[k*3]=it,_[k*3+1]=r(),_[k*3+2]=_t?1:0,!J||r()<.12){const N=$>=Z;X.set(0,vt+(N?0:Math.PI/2),0),W.setFromEuler(X),m.compose(new P(ct,xt+wt,R),W,new P((N?$:Z)*1.16,Math.min($,Z)*.36,(N?Z:$)*1.18)),x.setMatrixAt(D,m);const C=.82+r()*.22;v.setRGB(.72*C,.33*C,.2*C),x.setColorAt(D,v),D++}else if(r()<.75)for(let N=0,C=1+(r()*2|0);N<C&&H<g;N++)m.compose(new P(ct+(r()-.5)*$*.5,xt+wt,R+(r()-.5)*Z*.5),W,new P(1,.9+r()*.4,1)),S.setMatrixAt(H++,m);k++};{const ct=Tn.step,R=(ct-Tn.street)/2,$=Math.cos(Tn.ang),Z=Math.sin(Tn.ang),it=(J,vt)=>[Tn.x+J*$-vt*Z,Tn.z+J*Z+vt*$];for(let J=-18;J<=18&&k<g*.62;J++)for(let vt=-18;vt<=18&&k<g*.62;vt++){const _t=(J+.5)*ct,wt=(vt+.5)*ct,[xt,Ct]=it(_t,wt);if(Math.hypot(xt-Tn.x,Ct-Tn.z)>Tn.R||u(xt,Ct)<80||d({x:xt,z:Ct},Ze,90)||d({x:xt,z:Ct},Wn,55)||d({x:xt,z:Ct},Ts,250))continue;const N=Math.exp(-Math.hypot(xt-Tn.x,Ct-Tn.z)/380);for(let C=0;C<4;C++)for(let Y=-R+2;Y<R-4;){const et=8+r()*6,St=9+r()*4;if(Y+et>R-1)break;const ft=Y+et/2,$t=R-1-St/2,[Lt,Vt]=C===0?[ft,-$t]:C===1?[$t,ft]:C===2?[-ft,$t]:[-$t,-ft],[at,q]=it(_t+Lt,wt+Vt);if(Y+=et+.6+r()*1.8,u(at,q)<66||r()<.08||d({x:at,z:q},yi,yi.R+10))continue;const bt=r()<.55+.4*N,Q=bt?1+Math.floor(r()*r()*4)+(r()<N?1:0):r()<.3?2:1;U(at,q,Math.min(et,St)*.9,Math.min(et,St)*.9)&&st(at,q,C%2?St:et,C%2?et:St,Q,bt,Tn.ang,bt&&Q>=2&&r()<.7)}}}for(let ct=0;ct<g*14&&k<g;ct++){const R=Ze.x-400+r()*3200,$=Ze.z-2600+r()*5200,Z=u(R,$);if(Math.hypot(R-Tn.x,$-Tn.z)<Tn.R||d({x:R,z:$},yi,yi.R+10)||Z<66||Z>2600||d({x:R,z:$},Ze,80)||d({x:R,z:$},Wn,45)||d({x:R,z:$},Ts,230))continue;const it=Math.hypot(R-Ze.x,($-Ze.z)*.7),J=Math.exp(-it/900);if(r()>J*1.6)continue;const vt=r()<.12+.5*J,_t=vt?8+r()*10:7+r()*6,wt=vt?8+r()*8:6+r()*5,xt=vt?1+Math.floor(r()*r()*3):r()<.2?2:1,Ct=(r()-.5)*.5;U(R,$,_t,wt)&&st(R,$,_t,wt,xt,vt,Ct,!1)}y.count=k,x.count=D,S.count=H,M.count=b.count=G;for(const ct of[y,x,S,M,b])ct.frustumCulled=!1,i.add(ct);{const ct=t>.6?140:70,R=new Cn(Zl(),jl(n,On("figtree"),{instanced:!0,light:.5}),ct);let $=0;for(let Z=0;Z<ct*40&&$<ct;Z++){const it=16680+r()*520,J=-8700+r()*380;if(u(it,J)<12||h0(it,J)<3||d({x:it,z:J},Br,40)||d({x:it,z:J},Ze,60)||d({x:it,z:J},Wn,40))continue;const _t=Math.abs(f(it+3,J)-f(it-3,J))+Math.abs(f(it,J+3)-f(it,J-3));if(r()>.25+_t*.18+(it<16900?.4:0))continue;const wt=7+r()*6;m.compose(new P(it,f(it,J)-.6,J),new Be,new P(wt*1.4713*(r()<.5?-1:1),wt,1)),R.setMatrixAt($++,m)}R.count=$,R.frustumCulled=!1,i.add(R)}const ot=t>.6?1700:700,V=new Cn(Zl(),jl(n,On("palm"),{instanced:!0,light:.45}),ot);h=0;for(let ct=0;ct<ot*10&&h<ot;ct++){const R=Nn.minX+r()*Nn.size,$=Nn.minZ+r()*Nn.size,Z=u(R,$);if(Z<14||Z>1800||Z>260&&r()<.7||d({x:R,z:$},Ze,60)||d({x:R,z:$},Wn,35)||d({x:R,z:$},Br,45)||d({x:R,z:$},yi,yi.R))continue;const it=12+r()*9,J=f(R,$)-.4;m.compose(new P(R,J,$),new Be,new P(it*.5322*(r()<.5?-1:1),it,1)),V.setMatrixAt(h,m),h++}V.count=h,V.frustumCulled=!1,i.add(V);const nt=new ra;nt.moveTo(-3.5,0),nt.quadraticCurveTo(-3,-.9,0,-.95),nt.quadraticCurveTo(3,-.9,3.8,0),nt.quadraticCurveTo(3,.9,0,.95),nt.quadraticCurveTo(-3,.9,-3.5,0);const gt=Eo(new yc(nt,{depth:.8,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:1}).rotateX(-Math.PI/2),[1,1,1]),Tt=26,Nt=new Cn(gt,Ss(n,{gloss:.2}),Tt),yt=[[.12,.35,.62],[.1,.42,.55],[.16,.3,.7],[.08,.48,.5],[.85,.3,.2]];h=0;const Ot=[];for(let ct=0;ct<4e3&&h<Tt;ct++){const R=Ze.x-900+r()*2200,$=Ze.z-2600+r()*5e3,Z=u(R,$),it=Z<-50&&Z>-380&&Math.hypot(R-Ko.x,$-Ko.z)>900;if(!it)continue;const J=r()*6.28,vt=.15;m.compose(new P(R,vt,$),new Be().setFromEuler(new tn(0,J,0)),new P(1.1,1,1.1)),Nt.setMatrixAt(h,m);const _t=yt[r()*yt.length|0];v.setRGB(_t[0],_t[1],_t[2]),Nt.setColorAt(h,v),it&&Ot.push({k:h,x:R,z:$,rot:J,ph:r()*6.28}),h++}return Nt.count=h,Nt.frustumCulled=!1,i.add(Nt),i.update=ct=>{for(const R of Ot)m.compose(new P(R.x,.15+Math.sin(ct*1.1+R.ph)*.2,R.z),new Be().setFromEuler(new tn(Math.sin(ct+R.ph)*.04,R.rot,Math.sin(ct*.8+R.ph)*.05)),new P(1.1,1,1.1)),Nt.setMatrixAt(R.k,m);Nt.instanceMatrix.needsUpdate=!0},i}const Or="Murudeshwar.co.in";function o2(){const e=document.createElement("canvas");e.width=2048,e.height=148;const i=e.getContext("2d"),r=new Wo(e);r.colorSpace=vn,r.anisotropy=8;const s=()=>{i.clearRect(0,0,2048,148),i.fillStyle="#163f7e",i.beginPath(),i.moveTo(0,0),i.lineTo(2048,0);const o=24,a=2048/o;for(let c=o;c>0;c--)i.arc((c-.5)*a,148*.8,a/2,0,Math.PI,!1);i.lineTo(0,0),i.closePath(),i.fill(),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(0,6,2048,4),i.fillStyle="#f4f2ea",i.textAlign="center",i.textBaseline="middle",i.font='600 92px "Instrument Sans", "Helvetica Neue", Arial, sans-serif',i.fillText(Or,2048/2,148*.42),r.needsUpdate=!0};return s(),document.fonts&&document.fonts.load&&document.fonts.load('600 92px "Instrument Sans"').then(s).catch(()=>{}),r}function a2(n,t=We+2.15){const r=document.createElement("canvas");r.width=2048,r.height=256;const s=r.getContext("2d"),o=new Wo(r);o.colorSpace=vn,o.anisotropy=8,o.generateMipmaps=!0,o.minFilter=Ti;const a=()=>{s.clearRect(0,0,2048,256);let z=176;const F='"Instrument Sans", "Helvetica Neue", Arial, sans-serif';s.font=`600 ${z}px ${F}`;const U=s.measureText(Or).width;U>2048*.9&&(z*=2048*.9/U,s.font=`600 ${z}px ${F}`),s.fillStyle="#123a6b",s.textAlign="center",s.textBaseline="middle",s.fillText(Or,2048/2,256*.44);const k=Math.min(2048*.9,s.measureText(Or).width);s.strokeStyle="#1b4f8e",s.lineWidth=9,s.lineCap="round",s.beginPath();for(let D=(2048-k)/2;D<=(2048+k)/2;D+=6){const H=222.72+Math.sin(D/34)*6;D===(2048-k)/2?s.moveTo(D,H):s.lineTo(D,H)}s.stroke(),o.needsUpdate=!0};a(),document.fonts&&document.fonts.load&&document.fonts.load('600 176px "Instrument Sans"').then(a).catch(()=>{});const c=new Ae({transparent:!0,depthWrite:!1,side:je,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,uniforms:{...n,uMap:{value:o}},vertexShader:`varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${pn}
      ${In}
      ${$i}
      uniform sampler2D uMap; uniform vec3 uAmbBot; varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){
        vec4 c = texture2D(uMap, vUv);
        if (c.a < 0.02) discard;
        // printed on the outside only: seen from inside, the fabric is plain
        if (!gl_FrontFacing) c.rgb = vec3(0.07, 0.24, 0.48);
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        float diff = max(dot(n, uSunDir), 0.0);
        vec3 amb = mix(uAmbBot, uAmbTop, n.y * 0.5 + 0.5);
        // painted on gelcoat: a touch of wear where the paint has thinned
        float wear = 0.9 + 0.1 * vnoise(vUv * vec2(160.0, 20.0));
        vec3 col = c.rgb * (uSunCol * diff + amb) * wear;
        gl_FragColor = vec4(fogIt(col, vW), c.a);
      }`}),l=new Qe,u=.17,f=.65,d=(f-u)*2048/256,h=-1.3;for(const z of[-1,1]){const k=[],D=[],H=[],G=[];for(let st=0;st<=4;st++)for(let ot=0;ot<=48;ot++){const V=ot/48,nt=st/4,gt=h-d/2+V*d,Tt=u+nt*(f-u),Nt=bn((gt+Pn/2)/Pn),yt=Ve(Nt,Tt),Ot=(Ve(Nt,Tt+.01)-Ve(Nt,Tt-.01))/.02;k.push(gt,Tt,z*(yt+.006)),D.push(z>0?V:1-V,nt);const ct=new P(0,-Ot,z).normalize();H.push(ct.x,ct.y,ct.z)}for(let st=0;st<4;st++)for(let ot=0;ot<48;ot++){const V=st*49+ot;G.push(V,V+1,V+48+2,V,V+48+2,V+48+1)}const W=new ae;W.setAttribute("position",new qt(k,3)),W.setAttribute("uv",new qt(D,2)),W.setAttribute("normal",new qt(H,3)),W.setIndex(G);const X=new ue(W,c);X.frustumCulled=!1,X.renderOrder=3.5,l.add(X)}const m=3072,v=216,g=document.createElement("canvas");g.width=m,g.height=v;const p=g.getContext("2d"),y=new Wo(g);y.colorSpace=vn,y.anisotropy=8;const x=()=>{p.clearRect(0,0,m,v),p.fillStyle="#123d7a",p.beginPath(),p.moveTo(0,0),p.lineTo(m,0);const z=30,F=m/z;for(let H=z;H>0;H--)p.arc((H-.5)*F,v*.86,F/2,0,Math.PI,!1);p.lineTo(0,0),p.closePath(),p.fill(),p.fillStyle="rgba(255,255,255,0.85)",p.fillRect(0,10,m,6);let U=150;const k='"Instrument Sans", "Helvetica Neue", Arial, sans-serif';p.font=`700 ${U}px ${k}`;const D=p.measureText(Or).width;D>m*.62&&(U*=m*.62/D,p.font=`700 ${U}px ${k}`),p.fillStyle="#f6f3ea",p.textAlign="center",p.textBaseline="middle",p.fillText(Or,m/2,v*.47),y.needsUpdate=!0};x(),document.fonts&&document.fonts.load&&document.fonts.load('700 150px "Instrument Sans"').then(x).catch(()=>{});const _=c.clone();_.uniforms={...c.uniforms,uMap:{value:y}},_.polygonOffset=!1,_.depthWrite=!0;const w=-4.1,S=2.6,E=t-.15,A=.44,M=1.755;for(const z of[-1,1]){const F=new dn(S-w,A);z<0&&F.rotateY(Math.PI),F.translate((w+S)/2,E-A/2,z*M);const U=new ue(F,_);U.frustumCulled=!1,U.renderOrder=3.5,l.add(U)}l.brand=[];for(const z of[-1,1]){const F=(X,st)=>z*(Ve(bn((X+Pn/2)/Pn),st)+.006),U=h-d/2,k=h+d/2;l.brand.push({kind:"hull",corners:[new P(U,u,F(U,u)),new P(k,u,F(k,u)),new P(k,f,F(k,f)),new P(U,f,F(U,f))],normal:new P(0,0,z)});const D=(w+S)/2-(S-w)*.33,H=(w+S)/2+(S-w)*.33,G=E-A*.78,W=E-A*.12;l.brand.push({kind:"banner",corners:[new P(D,G,z*M),new P(H,G,z*M),new P(H,W,z*M),new P(D,W,z*M)],normal:new P(0,0,z)})}const b=c.clone();b.uniforms={...c.uniforms,uMap:{value:o2()}},b.polygonOffset=!1,b.depthWrite=!0;const T=t-.15,I=.25,O=3.5;for(const[z,F]of[[-4.1,-1],[2.6,1]]){const U=new dn(O,I);U.rotateY(F<0?-Math.PI/2:Math.PI/2),U.translate(z+F*.01,T-I/2,0);const k=new ue(U,b);k.frustumCulled=!1,k.renderOrder=3.5,l.add(k)}return l}const Pn=11,l2=3.3,c2=1.2,We=.55,Jo=We+.45,ei=36;function bn(n){const t=-Pn/2+n*Pn,e=l2/2*(n<.6?1:Math.pow(Math.cos((n-.6)/.4*Math.PI/2),.7))+.015,i=c2*(.8+.3*n*n),r=-.42*(n<.7?1:1-(n-.7)/.3*.85);return{x:t,hb:e,sheer:i,keel:r}}function Ve(n,t){const e=ce((t-n.keel)/(n.sheer-n.keel));return n.hb*(.16+.84*Math.pow(e,.5))}function g0(n){const t=ce((n+Pn/2)/Pn),e=bn(t);return{y:e.sheer+.05,z:Ve(e,e.sheer)-.06}}function u2(n){const t=[[e=>e.sheer,e=>e.sheer-.1,[.93,.93,.9],j.hull],[e=>e.sheer-.1,e=>e.sheer-.3,[.1,.31,.58],j.hull],[e=>e.sheer-.3,()=>.1,[.94,.93,.89],j.hull],[()=>.1,()=>-.03,[.09,.12,.19],j.hull],[()=>-.03,e=>e.keel*.55,[.5,.16,.12],j.hull]];for(const e of[-1,1])for(const[i,r,s,o]of t){const a=[];for(let l=0;l<ei-1;l++){const u=bn(l/(ei-1)),f=bn((l+1)/(ei-1)),d=i(u),h=r(u),m=i(f),v=r(f),g=[[u.x,d,e*Ve(u,d)],[u.x,h,e*Ve(u,h)],[f.x,m,e*Ve(f,m)],[f.x,v,e*Ve(f,v)]];e>0?a.push(...g[0],...g[1],...g[2],...g[1],...g[3],...g[2]):a.push(...g[0],...g[2],...g[1],...g[1],...g[2],...g[3])}const c=new ae;c.setAttribute("position",new qt(a,3)),c.computeVertexNormals(),n(c,s,o)}{const e=[];for(let r=0;r<ei-1;r++){const s=bn(r/(ei-1)),o=bn((r+1)/(ei-1)),a=s.keel*.55,c=o.keel*.55;e.push(s.x,a,-Ve(s,a),s.x,s.keel,0,o.x,c,-Ve(o,c),s.x,s.keel,0,o.x,o.keel,0,o.x,c,-Ve(o,c),s.x,a,Ve(s,a),o.x,c,Ve(o,c),s.x,s.keel,0,s.x,s.keel,0,o.x,c,Ve(o,c),o.x,o.keel,0)}const i=new ae;i.setAttribute("position",new qt(e,3)),i.computeVertexNormals(),n(i,[.46,.15,.11],j.hull)}{const e=bn(0),i=new ra;i.moveTo(-Ve(e,e.sheer),e.sheer),i.lineTo(Ve(e,e.sheer),e.sheer),i.lineTo(Ve(e,0),0),i.lineTo(0,e.keel),i.lineTo(-Ve(e,0),0),i.closePath();const r=new Mc(i);r.rotateY(-Math.PI/2),r.translate(e.x,0,0),n(r,[.92,.92,.88],j.hull)}for(const e of[-1,1]){const i=[],r=[];for(let s=0;s<ei;s++){const o=bn(s/(ei-1));i.push(new P(o.x,o.sheer+.025,e*(Ve(o,o.sheer)-.03))),r.push(new P(o.x,o.sheer-.06,e*(Ve(o,o.sheer-.06)+.025)))}n(new Hs(new Go(i),60,.045,6,!1),[.86,.86,.84],j.plastic),n(new Hs(new Go(r),60,.04,6,!1),[.13,.13,.14],j.rubber)}}function h2(n,t){for(let i=0;i<14;i++){const r=-1.5+i/14*3,s=r+3/14,o=[];for(let l=0;l<ei-1;l++){const u=bn(l/(ei-1)),f=bn((l+1)/(ei-1)),d=Ve(u,We)-.07,h=Ve(f,We)-.07,m=ce(r,-d,d),v=ce(s,-d,d),g=ce(r,-h,h),p=ce(s,-h,h);v-m<.005&&p-g<.005||o.push(u.x,We,m,u.x,We,v,f.x,We,g,f.x,We,g,u.x,We,v,f.x,We,p)}if(!o.length)continue;const a=new ae;a.setAttribute("position",new qt(o,3)),a.computeVertexNormals();const c=.93+t()*.1;n(a,[.56*c,.42*c,.3*c],j.wood)}for(const i of[-1,1]){n(Pt(new ne(6,.42,.06),-.7,We+.21,i*.9),[.9,.9,.87],j.hull),n(Pt(new ne(6,.06,.46),-.7,Jo-.06,i*1.12),[.55,.39,.25],j.wood);for(let r=0;r<5;r++)n(Pt(new ne(1.08,.05,.42),-3.2+r*1.2,Jo-.01,i*1.12),[.12,.27,.5],j.cloth)}}function f2(n){const t=We+2.15,e=-4.1,i=2.6,r=3.5;{const l=new dn(i-e,r,28,8),u=l.attributes.position;for(let f=0;f<u.count;f++){const d=u.getX(f),h=u.getY(f),m=.05*Math.pow(Math.sin((d+(i-e)/2)/.95*Math.PI),2);u.setZ(f,-.16*(h/(r/2))**2-m)}l.computeVertexNormals(),l.rotateX(-Math.PI/2),l.translate((e+i)/2,t,0),n(l,[.1,.33,.62],j.cloth);for(let f=0;f<=7;f++){const d=e+f/7*(i-e);n(Pt(new ne(.035,.02,r+.02),d,t-.012,0),[.07,.22,.44],j.cloth)}}for(const[l,u]of[[-4,-1.6],[-4,1.6],[-.7,-1.62],[-.7,1.62],[2.5,-1.45],[2.5,1.45]])n(Pt(new Me(.028,.028,t-We,8),l,(t+We)/2-.05,u),[.8,.82,.84],j.metal);for(const l of[-4,-.7,2.5])n(Pt(new Me(.025,.025,r,8),l,t-.18,0,Math.PI/2),[.8,.82,.84],j.metal);n(Pt(new Me(.018,.018,1.3,6),-4,t+.55,-1.6),[.75,.76,.78],j.metal);const s=.86,o=.6,a=10,c=7;for(let l=0;l<a;l++)for(let u=0;u<c;u++){const f=(l+.5)/a,d=(u+.5)/c,h=Math.abs(d-(1-f))<.15,m=new dn(s/a,o/c);m.translate(-4-.02-f*s,t+.9+(d-.5)*o,-1.6),m.rotateY(0),n(m,h?[.96,.96,.94]:[.82,.1,.09],j.cloth)}return t}function d2(n){n(Pt(new ne(.62,.95,.75),-4.45,We+.47,.25),[.92,.92,.89],j.hull),n(Pt(new ne(.05,.3,.7),-4.2,We+1.08,.25,0,0,-.35),[.12,.16,.2],j.glass),n(Pt(new cr(.17,.02,6,18),-4.72,We+1,.25,0,Math.PI/2,.45),[.1,.1,.11],j.rubber),n(Pt(new ne(.08,.06,.1),-4.62,We+1.02,.55),[.15,.15,.16],j.metal);for(const e of[-.55,.55]){const i=-Pn/2-.42;n(Pt(ln(.32,.36,.25,16,12),i,1.15,e),[.17,.18,.2],j.plastic),n(Pt(new ne(.5,.06,.4),i,.86,e),[.85,.86,.88],j.plastic),n(Pt(new ne(.3,.55,.22),i+.05,.56,e),[.17,.18,.2],j.plastic),n(Pt(Fn(.08,.05,.5,{down:!0,radial:10,sx:.6}),i+.08,.28,e),[.17,.18,.2],j.plastic),n(Pt(new ne(.42,.02,.24),i+.05,-.12,e),[.17,.18,.2],j.metal),n(Pt(new Me(.045,.03,.14,8),i-.12,-.24,e,0,0,Math.PI/2),[.5,.52,.55],j.metal);for(let r=0;r<3;r++)n(Pt(new ne(.02,.17,.07),i-.18,-.24,e,r*2.09,0,0),[.55,.57,.6],j.metal);n(Pt(new ne(.28,.12,.05),i-.02,1.14,e+.23*Math.sign(e)),[.9,.9,.92],j.plastic)}const t=sn(91);for(let e=0;e<10;e++){const i=-2.85+e%5*.62,r=e<5?-.17:.17;n(Pt(Fn(.09,.09,.56,{radial:14}),i,We+.12,r),t()<.55?[.93,.74,.14]:[.76,.78,.82],j.metal),n(Pt(new Me(.022,.028,.07,8),i,We+.82,r),[.7,.72,.74],j.metal),t()<.4&&n(Pt(new ne(.26,.42,.12),i,We+.5,r+Math.sign(r)*.13),[.09,.09,.1],j.rubber)}for(const e of[.3,.62])n(Pt(new ne(3.1,.06,.6),-1.6,We+e,0),[.5,.36,.23],j.wood);for(let e=0;e<4;e++)n(Pt(new ne(.62,.025,.2),2.6+e%2*.1,We+.02+e*.03,-.2+e*.12,0,.3+e*.4,0),e%2?[.08,.12,.3]:[.05,.05,.06],j.rubber);n(Pt(new ne(.5,.3,.38),3.2,We+.15,.55),[.9,.55,.12],j.plastic);for(const e of[-1,1])for(const i of[-3.9,2.4]){const r=bn((i+Pn/2)/Pn),s=e*(Ve(r,.6)+.12);n(Pt(Fn(.09,.09,.32,{radial:10}),i,.32,s),[.94,.94,.92],j.plastic),n(Pt(new Me(.006,.006,.45,4),i,.85,s),[.85,.82,.72],j.cloth)}{const i=bn((-4.2+Pn/2)/Pn),r=-(Ve(i,i.sheer)+.04);for(const s of[-.17,.17])n(Pt(new Me(.02,.02,1.7,6),-4.2+s,.25,r-.06,.12,0,0),[.8,.82,.84],j.metal);for(let s=0;s<4;s++)n(Pt(new Me(.016,.016,.34,6),-4.2,-.35+s*.32,r-.06-(.35-s*.32)*.12+.02,0,0,Math.PI/2),[.8,.82,.84],j.metal)}n(Pt(new cr(.22,.04,6,16),4.2,We+.4,.1,Math.PI/2),[.82,.78,.66],j.cloth),n(Pt(new Me(.06,.06,.18,10),Pn/2-.15,bn(1).sheer+.05,0,0,0,Math.PI/2),[.7,.72,.74],j.metal)}const p2=[[.85,.2,.22],[.2,.42,.7],[.92,.92,.9],[.3,.55,.42],[.95,.78,.3],[.55,.35,.6],[.95,.55,.55]],m2=[[.2,.22,.3],[.45,.4,.32],[.15,.15,.17],[.3,.32,.4]],g2=[.95,.42,.08];function v2(n){const t=sn(808),e=[],i=(p,y,x)=>e.push(Pi(p,0,y,x));u2(i),h2(i,t);const r=f2(i);d2(i);const s=new ue(Yi(e),si(n,0));s.frustumCulled=!1;const o=new Qe;o.add(s);const a=a2(n,r);o.add(a),o.brand=a.brand,o.length=Pn,o.roofY=r;const c=[],l=(p,y,x,_,w)=>{const S=si(n),E=new ue(f0(p),S);E.position.set(...y),E.rotation.y=x,E.frustumCulled=!1,o.add(E);const A={m:S,mesh:E,pose:_,role:w,ph:t()*6.28};return c.push(A),Jl(S,_),A},u=p=>p[t()*p.length|0];[[-2.6,1],[-1.5,1],[-.4,1],[.7,1],[1.8,1],[1.2,-1],[2.2,-1]].forEach(([p,y],x)=>{l({skin:u(ur),shirt:u(p2),pants:u(m2),lifejacket:g2,cap:x%3===0?u([[.95,.95,.93],[.15,.3,.6],[.8,.2,.2]]):null,longHair:x%4===1,build:.95+t()*.15},[p,Jo,y*1.12],y>0?Math.PI:0,nn.sit,x===3?"pointer":x===1?"photo":"guest")}),l({skin:ur[3],shirt:[.92,.92,.9],pants:[.15,.15,.17],cap:[.15,.3,.6],sleeves:"short"},[-4.95,We,.25],Math.PI/2,nn.stand,"skipper"),l({skin:ur[1],shirt:[.3,.32,.36],pants:[.2,.22,.3],sleeves:"none"},[3.75,We,.25],Math.PI/2,nn.stand,"deckhand");const d={},h={...nn.stand,uArmA:[-.9,0,.1],uArmB:[-.9,0,-.1],fArmA:[-.6,0,0],fArmB:[-.6,0,0]},m={...nn.sit,uArmA:[-1.5,0,.25],uArmB:[-1.5,0,-.25],fArmA:[-1.2,0,-.3],fArmB:[-1.2,0,.3],head:[.05,0,0]},v={...nn.sit,uArmB:[-1.75,.2,-.25],fArmB:[-.15,0,0],head:[-.05,0,0]},g={...nn.stand,root:[0,.9,0,.55,0,0],spine:[.35,0,0],head:[-.4,0,0],uArmA:[-.9,0,.1],uArmB:[-.9,0,-.1],fArmA:[-.3,0,0],fArmB:[-.3,0,0],thighA:[-.5,0,0],thighB:[-.4,0,0],calfA:[.5,0,0],calfB:[.4,0,0]};return o.update=(p,y)=>{for(const x of c){let _=x.pose;x.role==="skipper"&&(_=h),x.role==="photo"&&(_=Mi(nn.sit,m,zt(.43,.445,p)*(1-zt(.47,.485,p)),d)),x.role==="pointer"&&(_=Mi(nn.sit,v,zt(.512,.524,p)*(1-zt(.55,.562,p)),d)),x.role==="deckhand"&&(_=Mi(nn.stand,g,zt(.549,.555,p)*(1-zt(.562,.57,p)),d));const w=x.role==="photo"||x.role==="pointer"||x.role==="deckhand"?_:{..._},S=(w.head||[0,0,0]).slice();(x.role==="guest"||x.role==="deckhand")&&(S[1]+=Math.sin(y*.27+x.ph)*.55+Math.sin(y*.11+x.ph*2)*.3),S[0]+=Math.sin(y*.5+x.ph)*.04;const E=(w.spine||[0,0,0]).slice();E[2]+=Math.sin(y*.8+x.ph)*.03,Jl(x.m,{...w,head:S,spine:E})}},o.crew=c,o.spray=x2(n),o.add(o.spray),o}function x2(n){const e=new Float32Array(1280),i=sn(4242);for(let l=0;l<320*4;l++)e[l]=i();const r=new ae;r.setAttribute("position",new he(new Float32Array(320*3),3)),r.setAttribute("aSeed",new he(e,4));const s=Ve(bn(.74),.1),o=Ve(bn(.97),.1),a=new Ae({transparent:!0,depthWrite:!1,uniforms:{...n,uSpray:{value:0},uBow:{value:new kt(s,o)}},vertexShader:`
      uniform float uTime; uniform float uSpray; uniform vec2 uBow; uniform vec2 uRes;
      attribute vec4 aSeed; varying float vA;
      void main(){
        vec4 s = aSeed;
        float life = 0.7 + s.x * 0.7;
        float age = mod(uTime * (0.85 + s.y * 0.4) + s.z * 17.0, life);
        float side = s.w < 0.5 ? -1.0 : 1.0;
        bool stern = s.w > 0.86;
        vec3 p0, v0;
        if (!stern) {
          float f = s.y;
          p0 = vec3(2.6 + f * 2.6, 0.12, side * mix(uBow.x, uBow.y, f));
          v0 = vec3(-1.5 - s.x * 2.5, 1.6 + s.z * 2.6 * (1.0 - f * 0.5), side * (1.8 + s.x * 2.8)) * (0.45 + 0.55 * uSpray);
        } else {
          p0 = vec3(-5.9 - s.y * 0.6, 0.05, (s.z - 0.5) * 1.4);
          v0 = vec3(-2.0 - s.x * 2.0, 0.6 + s.y * 1.2, (s.z - 0.5) * 1.6);
        }
        vec3 p = p0 + v0 * age + vec3(0.0, -4.9 * age * age, 0.0);
        vec4 w = modelMatrix * vec4(p, 1.0);
        vec4 mv = viewMatrix * w; gl_Position = projectionMatrix * mv;
        float rad = (0.03 + s.x * s.x * 0.09) * (stern ? 1.6 : 1.0);
        gl_PointSize = clamp(rad * projectionMatrix[1][1] * uRes.y / max(-mv.z, 0.5), 1.0, 26.0);
        vA = smoothstep(0.0, 0.06, age) * (1.0 - smoothstep(life * 0.55, life, age)) * step(-0.25, w.y) * smoothstep(0.08, 0.35, uSpray) * (stern ? 0.5 : 1.0);
      }`,fragmentShader:`
      uniform vec3 uSunCol; uniform vec3 uAmbTop; varying float vA;
      void main(){
        vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.15, length(c));
        gl_FragColor = vec4(min(uSunCol * 0.55 + uAmbTop * 0.9, vec3(1.0)), a * vA * 0.8);
      }`}),c=new zs(r,a);return c.frustumCulled=!1,c.renderOrder=9,c}const ye={stop:.552,anchor:[.553,.563],gear:[.556,.566],roll:[.572,.5805,.589],rollDur:.0065,right:.0055,ok:[.598,.607],toLine:[.601,.613],down:[.613,.646],level:[.642,.654],swap:[.655,.661],stop5:.822},jn=os(1,{}),v0=new P(jn.hx,0,jn.hz),_2=new P(jn.hz,0,-jn.hx),Qo=new P(0,1,0),Ci=(n,t,e,i=new P)=>i.set(jn.x+n*jn.hx-e*jn.hz,t,jn.z+n*jn.hz+e*jn.hx),Hr=Math.atan2(-jn.hz,jn.hx),nc=[-3,-2.05,-1.1];let ja=null;function x0(n){if(!ja){const t=Ci(17.6,0,0);t.y=n.heightAt(t.x,t.z)+.25,ja=t}return ja}const ar=Ci(5.45,1.38,0);function y2(n,t,e=new P){const i=x0(t),r=Ci(6.6,-.2,0);if(n<=.12){const a=n/.12;return e.copy(ar).lerp(r,a).setY(Ut(ar.y,r.y,a*a))}const s=(n-.12)/.88,o=s*s*(3-2*s);return e.copy(r).lerp(i,o).add(new P(0,0,0))}const To=new P;function es(n,t,e=new P){const i=ar.distanceTo(t);To.copy(ar).add(t).multiplyScalar(.5).addScaledVector(Qo,-.1*i).addScaledVector(v0,Math.min(3,i*.12));const r=1-n;return e.set(r*r*ar.x+2*r*n*To.x+n*n*t.x,r*r*ar.y+2*r*n*To.y+n*n*t.y,r*r*ar.z+2*r*n*To.z+n*n*t.z)}function dh(n,t){let e=0,i=1;for(let r=0;r<30;r++){const s=(e+i)/2;es(s,t,_0).y>n?e=s:i=s}return(e+i)/2}const _0=new P;let Ao=null;function as(n){if(Ao)return Ao;const t=x0(n),e=dh(-.9,t),i=es(.86,t),r=es(dh(-9,t),t),s=[[ye.swap[0],i.x-1.5,i.y,i.z+1.5],[.68,2,-29.8,468],[.71,-6,-29.3,477],[.745,-11,-28.8,486],[.79,-12.5,-28.6,489],[.806,t.x+2.2,t.y+9,t.z-.8],[ye.stop5,r.x+.4,r.y,r.z+.3],[1,r.x+.4,r.y,r.z+.3]],o=s.map(d=>d[0]),a=Gr(o,s.map(d=>d[1])),c=Gr(o,s.map(d=>d[2])),l=Gr(o,s.map(d=>d[3])),u=new P(s[3][1]-s[1][1],0,s[3][3]-s[1][3]).normalize(),f=new P(-u.z,0,u.x);return f.x<0&&f.negate(),Ao={A:t,sTop:e,bottom:i,stop5:r,at:(d,h)=>h.set(a(d),c(d),l(d)),exp:u,side:f},Ao}function M2(n,t,e){const i=as(t);if(!i.ang){const c=i.at(ye.swap[0],new P),l=i.at(.68,new P),u=i.at(.79,new P);i.ang={a0:Math.atan2(l.x-c.x,l.z-c.z),a1:Math.atan2(i.exp.x,i.exp.z),a2:Math.atan2(i.A.x-u.x,i.A.z-u.z)}}const{a0:r,a1:s,a2:o}=i.ang;let a=ic(r,s,zt(.66,.69,n));return a=ic(a,o,zt(.784,.8,n)),e.set(Math.sin(a),0,Math.cos(a))}const S2=[[1.6,.9,.5],[-1.1,-1.5,0],[-2.6,1.7,-.6]],Za=[-.6,1.1,2.7],gs=[{},{},{}],ph=[{},{},{}],w2=[{},{},{}],mh={...nn.surfaceOK,uArmA:[-.2,0,.7],fArmA:[-.4,0,0],uArmB:[-.2,0,-.7],fArmB:[-.4,0,0]};function y0(n,t,e,i=0,r={}){const s=nc[n],o=g0(s),a=ye.roll[n],c=a+ye.rollDur,l=c+ye.right;if(r.local=!0,r.pos=r.pos||new P,r.ry=0,r.rx=0,r.rootY=.07,r.sprite=0,r.under=!1,t<a){const U=zt(ye.gear[0]+n*.002,ye.gear[1]+n*.002,t);return r.pos.set(s,Ut(Jo,o.y,U),Ut(-1.12,-o.z+.1,U)),r.pose=Mi(nn.sit,nn.rollReady,U,gs[n]),r.rx=Ut(-.05,.12,U),r}if(t<c){const U=(t-a)/(c-a);return r.pos.set(s,o.y-(o.y+.7)*Math.pow(U,1.1),-o.z+.1-1.25*Math.pow(U,.9)),r.rx=.12-(Math.PI+.45)*Math.pow(U,1.6),r.pose=Mi(nn.rollReady,nn.tuck,zt(0,.4,U),gs[n]),r.under=U>.6,r}const u=[s+.6,-.62,-3.1-.35*n];if(t<l){const U=(t-c)/(l-c),k=U*U*(3-2*U);return r.pos.set(Ut(s,u[0],k),Ut(-.7,u[1],k)-Math.sin(U*Math.PI)*.9,Ut(-o.z+.1-1.25,u[2],k)),r.rx=Ut(.12-(Math.PI+.45),-Math.PI*2+.1,k),r.pose=Mi(nn.tuck,mh,zt(.2,.9,U),gs[n]),r.under=U<.85,r}const f=as(e);if(t<ye.down[0]+n*.0015){const U=zt(ye.ok[0]+n*.0015,ye.ok[0]+.003+n*.0015,t)*(1-zt(ye.ok[1]-.002,ye.ok[1]+.002,t)),k=zt(ye.toLine[0],ye.toLine[1],t),D=es(f.sTop,f.A,new P),H=Za[n]+Hr,G=D.x+Math.cos(H)*.8,W=D.z+Math.sin(H)*.8,X=Ci(u[0],u[1],u[2]);r.local=!1,r.pos.set(Ut(X.x,G,k),u[1]+Math.sin(i*1.3+n*2)*.06,Ut(X.z,W,k));const st=Math.atan2(D.x-r.pos.x,D.z-r.pos.z);r.ry=Ut(Hr,st,zt(0,.4,k)),r.rx=.1+.25*k;const ot=Mi(mh,nn.surfaceOK,U,ph[n]);return r.pose=lh(ot,r.kickPhase==null?i*2.2+n*1.7:r.kickPhase,.18+.4*Math.sin(k*Math.PI),gs[n]),r}r.local=!1,r.under=!0;const d=ye.down[0]+n*.0015,h=ye.down[1]-(2-n)*.001,m=ce((t-d)/(h-d)),v=Ut(f.sTop,.86,m*m*(3-2*m)*.85+m*.15),g=es(v,f.A,new P),p=Za[n]+Hr,y=.8,x=new P(g.x+Math.cos(p)*y,g.y-.35+(1-n)*.35*zt(.1,.4,m),g.z+Math.sin(p)*y),_=Math.atan2(-Math.cos(p),-Math.sin(p)),w=zt(ye.level[0]+n*.002,ye.level[1],t),S=M2(Math.max(t,ye.swap[0]),e,new P),E=f.at(Math.max(t,ye.swap[0]),new P),A=S2[n],M=new P(-S.z,0,S.x),b=E.addScaledVector(S,A[0]).addScaledVector(M,A[1]).addScaledVector(Qo,A[2]);b.y=Math.max(b.y,e.heightAt(b.x,b.z)+2);const T=zt(.796,.81,t);if(T>0){const U=Za[n]+Hr,k=f.at(t,new P),D=new P(k.x+Math.cos(U)*1,k.y-.5*n,k.z+Math.sin(U)*1);b.lerp(D,T)}r.pos.copy(x).lerp(b,w),r.pos.y+=.045*Math.sin((i/4.6+n*.37)*Math.PI*2)*w,r.ry=ic(_,Math.atan2(S.x,S.z),w),r.rx=Ut(.25,Math.PI/2-.12,w)-T*.45*(1-zt(ye.stop5-.004,ye.stop5+.004,t));const I=r.kickPhase==null?i*3.1+n*1.7:r.kickPhase,O=r.kickAmp==null?.7:r.kickAmp,z=Mi(nn.hover,nn.swim,zt(.2,.75,O),w2[n]),F=lh(z,I,O,ph[n]);return r.pose=w<1?Mi(nn.descend,F,w,gs[n]):F,r.sprite=0,r}const ic=(n,t,e)=>n+Math.atan2(Math.sin(t-n),Math.cos(t-n))*e,b2=[{},{},{}];function M0(n,t,e=new P){e.set(0,0,0);for(let i=0;i<3;i++){const r=y0(i,n,t,0,b2[i]),s=r.local?Ci(r.pos.x,r.pos.y,r.pos.z,_0):r.pos;e.add(s)}return e.multiplyScalar(1/3)}let vs=null;function Ac(n,t,e,i,r={}){const s=as(t);if(!vs){const x=[[.568,8,-.6,1.05,0,2.6,-.35,50],[.592,7,-.4,1,0,2.4,-.3,50],[.604,5.4,-1.2,.95,0,2,.1,48],[.612,5.6,-2.6,.9,0,2.4,-.6,48],[.6175,6.4,-2.2,-3.4,0,2.4,0,50],[.632,7.6,-1.5,-15.5,0,2.6,1.5,54],[.648,7.8,-.5,-28.4,0,2.4,-.5,54],[.666,13,-2,-27,0,1,-1,52],[.72,12.5,-1,-26.6,0,.5,-1.4,52],[.745,10,-3,-29,0,2,4,56],[.79,10,-3,-29,0,2,4,56],[.806,9,0,-25.5,0,0,1,52],[.822,8,0,-9.6,0,0,0,50],[1,8,0,-9.6,0,0,0,50]],_=x.map(w=>w[0]);vs=[1,2,3,4,5,6,7].map(w=>Gr(_,x.map(S=>S[w]))),vs.ps=_}const o=M0(n,t,new P),a=zt(.648,.666,n),c=_2.clone().lerp(s.side,a).normalize(),l=v0.clone().lerp(s.exp,a).normalize(),u=1+.85*i*Math.max(zt(.64,.67,n),.75*zt(.556,.57,n)),[f,d,h,m,v,g,p]=vs.map(x=>x(Math.max(n,vs.ps[0]))),y=v*(1-i);if(r.cx=o.x+c.x*f*u+l.x*d,r.cy=h,r.cz=o.z+c.z*f*u+l.z*d,r.tx=o.x+c.x*m+l.x*y,r.ty=o.y+g,r.tz=o.z+c.z*m+l.z*y,r.fov=p,n<.568&&e){const x=zt(ye.stop,.568,n),_={...r};r.cx=Ut(e.cx,_.cx,x),r.cy=Ut(e.cy,_.cy,x),r.cz=Ut(e.cz,_.cz,x);const w=new P(e.tx-e.cx,e.ty-e.cy,e.tz-e.cz),S=new P(_.tx-_.cx,_.ty-_.cy,_.tz-_.cz),E=w.length(),A=S.length(),M=new Be().setFromUnitVectors(w.normalize(),S.normalize()),b=w.applyQuaternion(new Be().slerp(M,x)),T=Ut(E,A,x);r.tx=r.cx+b.x*T,r.ty=r.cy+b.y*T,r.tz=r.cz+b.z*T,r.fov=Ut(e.fov,_.fov,x)}return r}const Ka=4.6,gn=4,Co=24;function E2(n,t,e){const i=new Qe;as(t);const s=[{skin:ur[1],diver:{suit:[.07,.075,.09],panel:[.1,.24,.5],side:[.2,.21,.24],accent:[.12,.34,.7],tank:[.74,.76,.8],bcd:[.14,.14,.16],fins:[.07,.07,.08]},torch:!0},{skin:ur[2],diver:{suit:[.07,.07,.08],panel:[.25,.27,.3],side:[.22,.23,.26],accent:[.75,.2,.15],tank:[.92,.72,.13],bcd:[.1,.1,.11],fins:[.09,.22,.5]}},{skin:ur[4],longHair:!0,diver:{suit:[.07,.07,.08],panel:[.12,.42,.45],side:[.2,.22,.24],accent:[.15,.6,.62],tank:[.92,.72,.13],bcd:[.1,.1,.11],fins:[.8,.64,.12]}}].map((ct,R)=>{const $=si(n),Z=new ue(f0(ct),$);return Z.matrixAutoUpdate=!1,Z.frustumCulled=!1,i.add(Z),{i:R,m:$,mesh:Z,st:{},head:new P,breath:(R*.37+.11)%1,last:-1,hit:-1e3,hitArmed:!1,kickPhase:R*2.3}}),o=(()=>{const ct=si(n,0),R=[],$=(J,vt)=>{const _t=J.index?J.toNonIndexed():J,wt=_t.attributes.position.count;_t.setAttribute("color",new he(new Float32Array(wt*3).fill(0).map((xt,Ct)=>vt[Ct%3]),3)),_t.setAttribute("aBone",new he(new Float32Array(wt),1)),_t.setAttribute("aKind",new he(new Float32Array(wt).fill(4),1));for(const xt of Object.keys(_t.attributes))["position","normal","color","aBone","aKind"].includes(xt)||_t.deleteAttribute(xt);R.push(_t)},Z=[.32,.33,.35];$(new Me(.035,.035,.9,8).translate(0,.45,0),Z),$(new Me(.025,.025,.8,8).rotateZ(Math.PI/2),Z);for(const J of[-1,1]){const vt=new Jr(.16,.5,4).rotateX(Math.PI).translate(J*.14,.2,0);vt.scale(1,1,.25),$(vt,Z)}new ae;const it=R.reduce((J,vt)=>(J.push(vt),J),[]);return new ue(T2(it),ct)})();o.frustumCulled=!1,i.add(o);const a=60,c=6,l=new ue(new Hs(new Kh(new P,new P(0,-1,0)),a,.035,c,!1),si(n,0));{const ct=l.geometry.attributes.position.count;l.geometry.setAttribute("color",new he(new Float32Array(ct*3).fill(.62),3)),l.geometry.setAttribute("aBone",new he(new Float32Array(ct),1)),l.geometry.setAttribute("aKind",new he(new Float32Array(ct).fill(1),1));const R=l.geometry.attributes.color;for(let $=0;$<ct;$++)R.setXYZ($,.78,.7,.52)}l.frustumCulled=!1,i.add(l);const u=Array.from({length:a+1},()=>new P),f=ct=>{for(let vt=0;vt<=a;vt++)es(vt/a,ct,u[vt]);const R=l.geometry.attributes.position,$=l.geometry.attributes.normal,Z=new P,it=new P,J=new P;for(let vt=0;vt<=a;vt++){const _t=u[Math.max(0,vt-1)],wt=u[Math.min(a,vt+1)];Z.subVectors(wt,_t).normalize(),it.set(0,1,0).cross(Z),it.lengthSq()<1e-6&&it.set(1,0,0),it.normalize(),J.crossVectors(Z,it);for(let xt=0;xt<=c;xt++){const Ct=xt/c*Math.PI*2,N=Math.cos(Ct),C=Math.sin(Ct),Y=vt*(c+1)+xt,et=it.x*N+J.x*C,St=it.y*N+J.y*C,ft=it.z*N+J.z*C;R.setXYZ(Y,u[vt].x+et*.035,u[vt].y+St*.035,u[vt].z+ft*.035),$.setXYZ(Y,et,St,ft)}}R.needsUpdate=!0,$.needsUpdate=!0},d=s.length*gn*Co+240,h=new Float32Array(d),m=new Float32Array(d*3);let v=625341585;const g=()=>(v=Math.imul(v^v>>>15,2246822519)+2654435769|0,(v>>>0)%1e5/1e5),p=s.length*gn+4;for(let ct=0;ct<d;ct++)h[ct]=ct<s.length*gn*Co?Math.floor(ct/Co):s.length*gn+Math.floor((ct-s.length*gn*Co)/60),m[ct*3]=g(),m[ct*3+1]=g(),m[ct*3+2]=g();const y=new ae;y.setAttribute("position",new he(new Float32Array(d*3),3)),y.setAttribute("aSlot",new he(h,1)),y.setAttribute("aSeed",new he(m,3));const x=Array.from({length:p},()=>new Ee(0,-100,0,-1e3)),_=new Ae({transparent:!0,depthWrite:!1,uniforms:{...n,uEmit:{value:x},uVex:{value:ts}},vertexShader:`
      uniform vec4 uEmit[${p}]; uniform float uTime; uniform float uVex; uniform vec2 uRes; uniform float uSy;
      attribute float aSlot; attribute vec3 aSeed; varying float vA;
      void main(){
        vec4 e = uEmit[int(aSlot)];
        bool big = aSlot > ${s.length*gn-.5};          // an entry: a whole cloud of air at once
        float age = uTime - e.w - aSeed.x * (big ? 0.25 : 0.55);
        float sz = aSeed.y;
        float rise = max(age, 0.0) * (0.55 + sz * 0.75) * uVex;
        vec3 w = e.xyz + vec3(0.0, rise, 0.0);
        float spread = (big ? 0.6 : 0.18) + rise * 0.045;
        w.x += sin(age * (3.0 + aSeed.z * 3.0) + sz * 20.0) * 0.1 + (aSeed.z - 0.5) * spread;
        w.z += cos(age * (2.6 + aSeed.x * 3.0) + aSeed.z * 17.0) * 0.1 + (sz - 0.5) * spread;
        // Boyle: P = 1 + depth/10 bar; volume ∝ 1/P, radius ∝ (P0/P)^(1/3)
        float d0 = max(-e.y / uVex, 0.0), d1 = max(-w.y / uVex, 0.0);
        float grow = pow((1.0 + d0 / 10.0) / (1.0 + d1 / 10.0), 1.0 / 3.0);
        float rad = (0.035 + sz * sz * 0.11) * grow * 1.5;
        w.y *= uSy;
        vec4 mv = viewMatrix * vec4(w, 1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(rad * projectionMatrix[1][1] * uRes.y / max(-mv.z, 0.5), 1.0, 48.0);
        vA = step(0.0, age) * smoothstep(0.0, 0.2, age) * (1.0 - smoothstep(-1.2, -0.2, w.y)) * exp(-max(-mv.z, 0.0) * 0.012) * (big ? 1.0 - smoothstep(2.0, 4.0, age) : 1.0);
      }`,fragmentShader:`
      uniform float uUnder; varying float vA;
      void main(){
        vec2 c = gl_PointCoord - 0.5; float r = length(c);
        float ring = smoothstep(0.5, 0.4, r) * (0.3 + smoothstep(0.22, 0.46, r));
        float hi = smoothstep(0.13, 0.0, length(c - vec2(-0.15, -0.15)));
        gl_FragColor = vec4(vec3(0.86, 0.97, 1.0), (ring * 0.65 + hi) * vA * mix(0.55, 1.0, uUnder));
      }`}),w=new zs(y,_);w.frustumCulled=!1,i.add(w);const S=280,E=new Float32Array(S*4),A=new Float32Array(S);for(let ct=0;ct<S;ct++){A[ct]=Math.floor(ct/70);for(let R=0;R<4;R++)E[ct*4+R]=g()}const M=new ae;M.setAttribute("position",new he(new Float32Array(S*3),3)),M.setAttribute("aSeed",new he(E,4)),M.setAttribute("aSlot",new he(A,1));const b=n.uSplash?n.uSplash.value:Array.from({length:4},()=>new Ee(0,0,0,-1e3)),T=n.uFloaters?n.uFloaters.value:[],I=new Ae({transparent:!0,depthWrite:!1,uniforms:{...n,uSplash:{value:b}},vertexShader:`
      uniform vec4 uSplash[4]; uniform float uTime; uniform vec2 uRes;
      attribute vec4 aSeed; attribute float aSlot; varying float vA;
      void main(){
        vec4 s = uSplash[int(aSlot)];
        float age = uTime - s.w - aSeed.w * 0.12;
        float a = aSeed.x * 6.2832, sp = 0.6 + aSeed.y * 2.4, up = 1.5 + aSeed.z * 3.2;
        float scale = aSlot > 2.5 ? 0.5 : 1.0;
        vec3 p = vec3(s.x + cos(a) * sp * age * scale, max(0.0, up * age - 4.9 * age * age) * scale, s.z + sin(a) * sp * age * scale);
        vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
        float rad = 0.04 + aSeed.y * 0.06;
        gl_PointSize = clamp(rad * projectionMatrix[1][1] * uRes.y / max(-mv.z, 0.5), 1.0, 30.0);
        vA = step(0.0, age) * (1.0 - smoothstep(0.5, 1.1, age)) * step(0.001, up * age - 4.9 * age * age + 0.05);
      }`,fragmentShader:`
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform float uUnder; varying float vA;
      void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.12, length(c));
        gl_FragColor = vec4(min(uSunCol * 0.6 + uAmbTop * 0.8, vec3(1.0)), a * vA * 0.85 * (1.0 - uUnder)); }`}),O=new zs(M,I);O.frustumCulled=!1,O.renderOrder=9,i.add(O);const z=new Ae({transparent:!0,depthWrite:!1,blending:$r,side:je,uniforms:{...n,uOn:{value:0}},vertexShader:`varying float vAlong; varying vec3 vW; varying vec3 vN;
      void main(){ vAlong = -position.y / 7.0; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uOn; varying float vAlong; varying vec3 vW; varying vec3 vN;
      void main(){ vec3 V = normalize(cameraPosition - vW); float edge = pow(abs(dot(normalize(vN), V)), 1.5);
        float a = uOn * edge * (1.0 - smoothstep(0.1, 1.0, vAlong)) * smoothstep(0.0, 0.05, vAlong) * 0.45;
        gl_FragColor = vec4(vec3(1.0, 0.96, 0.86) * a, 1.0); }`}),F=new ue(new Jr(1.7,6,24,1,!0).translate(0,-3,0),z);F.frustumCulled=!1,F.renderOrder=8.6,i.add(F);const U=ct=>zt(.703,.709,ct)*(1-zt(.738,.744,ct)),k=new le,D=new Be,H=new tn(0,0,0,"YXZ"),G=new P(1,1,1),W=new P,X=new P,st=new P,ot=new P;let V=!0,nt=null,gt=null,Tt=.3;const Nt=new P,yt=new P;i.update=(ct,R,$,Z=1)=>{const it=ce((ct-ye.anchor[0])/(ye.anchor[1]-ye.anchor[0]));it<=0?(k.compose(X.set(5.45,1.32,0),D.setFromEuler(H.set(0,0,-1.2)),G),o.matrixAutoUpdate=!1,o.matrix.multiplyMatrices(e.matrixWorld,k),o.matrixWorldNeedsUpdate=!0,l.visible=!1):(y2(it,t,W),o.matrix.compose(X.copy(W).setY(W.y*Z),D.setFromEuler(H.set(0,Hr,Ut(-1.2,-.3,it))),G),o.matrixWorldNeedsUpdate=!0,l.visible=!0,f(W),l.scale.y=Z),Ot(3,ct,ye.anchor[0]+.12*(ye.anchor[1]-ye.anchor[0]),R,Ci(6.6,0,0)),$.getWorldDirection(ot);const J=Math.max(.001,Math.min(.1,R-(nt??R)));M0(ct,t,Nt);const vt=nt==null||Math.abs(ct-gt)>.02||ct<gt?0:Nt.distanceTo(yt),_t=Math.min(2,vt/J);Tt+=(zt(.03,.6,_t)-Tt)*(1-Math.exp(-J/.8)),yt.copy(Nt),nt=R,gt=ct;for(const xt of s){xt.kickPhase+=J*Ut(1.7,3.6,Tt)*(.94+.06*xt.i),xt.st.kickPhase=xt.kickPhase,xt.st.kickAmp=Ut(.16,.95,Tt)*(.92+.08*Math.sin(R*.37+xt.i*2.1));const Ct=y0(xt.i,ct,t,R,xt.st);if(Jl(xt.m,{...Ct.pose,root:[0,Ct.rootY,0,Ct.rx,0,0]}),H.set(0,Ct.ry,0),D.setFromEuler(H),Ct.local)if(k.compose(X.copy(Ct.pos),D,G),ct<ye.roll[xt.i])xt.mesh.matrix.multiplyMatrices(e.matrixWorld,k);else{Ci(Ct.pos.x,Ct.pos.y,Ct.pos.z,st);const ft=zt(ye.roll[xt.i],ye.roll[xt.i]+ye.rollDur*.4,ct);ft<1&&st.lerp(X.copy(Ct.pos).applyMatrix4(e.matrixWorld),1-ft),H.set(0,Hr+Ct.ry,0),D.setFromEuler(H),xt.mesh.matrix.compose(st,D,G)}else H.set(0,Ct.ry,0),D.setFromEuler(H),xt.mesh.matrix.compose(X.copy(Ct.pos).setY(Ct.pos.y*Z),D,G);if(xt.mesh.matrixWorldNeedsUpdate=!0,xt.m.uniforms.uFade.value=1,xt.mesh.visible=!0,T[xt.i]){const St=!Ct.under&&Ct.pos&&!Ct.local&&ct>ye.roll[xt.i]+ye.rollDur,ft=Ct.local?Ci(Ct.pos.x,Ct.pos.y,Ct.pos.z,st):Ct.pos;T[xt.i].set(ft.x,ft.z,St&&ft.y>-1.4?1:0,0)}Xx(xt.m,Zt.head,0,.09,.14,null,xt.head).applyMatrix4(xt.mesh.matrix),Z!==1&&(xt.head.y/=Z);const N=ye.roll[xt.i]+.6*ye.rollDur,C=Ci(nc[xt.i],0,-g0(nc[xt.i]).z-1);Ot(xt.i,ct,N,R,C)&&x[s.length*gn+xt.i].set(C.x,-.9,C.z,R);const Y=Math.floor(R/Ka-xt.breath),et=xt.head.y<-.4;if(V||Y<xt.last)for(let St=0;St<gn;St++){const ft=Y-St;x[xt.i*gn+(ft%gn+gn)%gn].set(xt.head.x,et?xt.head.y:-100,xt.head.z,(ft+xt.breath)*Ka)}else Y>xt.last&&x[xt.i*gn+(Y%gn+gn)%gn].set(xt.head.x,et?xt.head.y:-100,xt.head.z,(Y+xt.breath)*Ka);xt.last=Y}V=!1;const wt=U(ct);if(F.visible=wt>.001,i.torch=i.torch||{pos:new P,dir:new P(0,-1,0),on:0},i.torch.on=wt,wt>.001){const xt=s[0].st,Ct=new P(Math.sin(xt.ry),0,Math.cos(xt.ry)),N=new P(xt.pos.x,xt.pos.y,xt.pos.z).addScaledVector(Ct,.9).add(new P(0,-.25,0)),C=new P($.position.x-N.x,0,$.position.z-N.z).normalize(),Y=N.clone().addScaledVector(Ct,2.2).addScaledVector(C,3);Y.y=t.heightAt(Y.x,Y.z)+.6;const et=Y.sub(N).normalize();i.torch.pos.copy(N),i.torch.dir.copy(et),F.position.set(N.x,N.y*Z,N.z),F.quaternion.setFromUnitVectors(new P(0,-1,0),et),z.uniforms.uOn.value=wt}},i.reset=()=>{V=!0},i.tap=(ct,R)=>{x[s.length*gn+3].set(ct.x,ct.y,ct.z,R)},i.bubbles=w,i.splashSlots=b;function Ot(ct,R,$,Z,it){const J=b[ct];return R<$?(J.w=-1e3,J.armed=!0,!1):J.armed&&R-$<.05?(J.set(it.x,0,it.z,Z),J.armed=!1,i.splashes=(i.splashes||0)+1,!0):(J.armed=!1,!1)}return i.divers=s,i}function T2(n){let t=0;for(const i of n)t+=i.attributes.position.count;const e=new ae;for(const i of["position","normal","color","aBone","aKind"]){const r=n[0].attributes[i].itemSize,s=new Float32Array(t*r);let o=0;for(const a of n)s.set(a.attributes[i].array,o),o+=a.attributes[i].array.length;e.setAttribute(i,new he(s,r))}return e}function A2(n){const t=as(n),e=t.at(.77,new P);return{A:e.clone().addScaledVector(t.exp,-40).addScaledVector(t.side,-6).addScaledVector(Qo,12),B:e.clone().addScaledVector(t.exp,40).addScaledVector(t.side,-7).addScaledVector(Qo,10.5)}}function C2(n){const t=Ac(.692,n,null,0,{}),e=new P(t.tx-t.cx,0,t.tz-t.cz).normalize(),i=new P(-e.z,0,e.x),r=new P(t.cx,0,t.cz).addScaledVector(e,9);return r.y=Math.max(n.heightAt(r.x,r.z)+1.6,t.cy-1.5),{A:r.clone().addScaledVector(i,-22).add(new P(0,.6,0)),B:r.clone().addScaledVector(i,22).add(new P(0,-.3,0))}}function R2(n){const t=as(n),e=[];for(let o=0;o<=8;o++)e.push(t.at(Ut(.66,.795,o/8),new P));const i=(o,a,c=0,l=0,u=0)=>{const f=Ac(o,n,null,u,{}),d=new P(f.tx-f.cx,f.ty-f.cy,f.tz-f.cz).normalize(),h=new P(-d.z,0,d.x).normalize(),m=new P(f.cx,f.cy,f.cz).addScaledVector(d,a).addScaledVector(h,c);return m.y+=l,{at:m,right:h}},r=(o,a,c,l)=>{const u=i(o,a,c,l,0),f=i(o,a,c*.25,l*.7,.9);return{at:u.at,atN:f.at,right:u.right}},s={descent:r(.627,10,1,0),bottom:r(.648,9,2,1),reef:r(.69,9.5,1.5,2.4),blue:r(.765,19,.5,1),ascent:r(.81,9.5,1.5,.5),stop:r(.822,9,2,-1)};for(const o of["bottom","reef"])for(const a of[s[o].at,s[o].atN])a.y=Math.max(a.y,n.heightAt(a.x,a.z)+2.4);return{route:e,side:t.side.clone(),exp:t.exp.clone(),schools:s}}Re.enabled=!1;const P2={notch:[120,-165],nwLobe:[-67,-370],neLobe:[287,-176],south:[3,328],east:[430,-68],islet:[-310,721]},Ye={x:-10,z:470},ta=[{a:0,rho:44,h:7,tgt:[0,0,15],fov:32},{a:Math.atan2(-7,-30),rho:30.8,h:6,tgt:[60,-17,2],fov:44},{a:0,rho:36,h:9,tgt:[0,0,3],fov:44}];function D2(n,t=0){const e=Ze.x-n.x,i=Ze.z-n.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r,a=-o,c=s,l=6*(1-t),u=-s*40-a*l,f=-o*40-c*l,d=ta[0];d.a=Math.atan2(u*-n.hz+f*n.hx,u*n.hx+f*n.hz),d.rho=Math.hypot(u,f);const h=Math.min(r*.5,450),m=Ut(-.087,.08,t/.9)*h,v=s*h+a*m,g=o*h+c*m;d.tgt[0]=v*n.hx+g*n.hz,d.tgt[1]=v*-n.hz+g*n.hx,d.fov=Ut(32,50,t/.9)}function L2(n,t=0){const e=-n.x,i=-n.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r,a=-o,c=s,l=12*(1-t),u=-s*33-a*l,f=-o*33-c*l,d=ta[2];d.a=Math.atan2(u*-n.hz+f*n.hx,u*n.hx+f*n.hz),d.rho=Math.hypot(u,f);const h=Math.min(r,700),m=Math.atan2(135-d.h,r+33),v=Math.atan2(-d.h,35),g=u+s*h,p=f+o*h;d.tgt[0]=g*n.hx+p*n.hz,d.tgt[1]=g*-n.hz+p*n.hx,d.tgt[2]=d.h+Math.tan((m+v)/2)*h}const I2=n=>Math.atan2(Math.sin(n),Math.cos(n)),gh=(n,t,e)=>n+I2(t-n)*e;function rc(n,t,e={},i=0){D2(t,i),L2(t,i);const r=ta[1],s=1-i;r.a=Math.atan2(-7*s,-30),r.rho=Math.hypot(7*s,30),r.tgt[1]=-17*s;const o=zt(.452,.486,n),a=zt(.506,.53,n),[c,l,u]=ta,f=T=>Ut(Ut(c[T],l[T],o),u[T],a),d=gh(gh(c.a,l.a,o),u.a,a),h=f("rho"),m=f("h"),v=f("fov"),g=Ut(.22,.05,i/.9),p=T=>zt(0,g,T)*(1-zt(1-g,1,T)),y=Math.max(p(o),p(a))*Ut(.95,1,i/.9),x=[0,1,2].map(T=>Ut(Ut(Ut(c.tgt[T],l.tgt[T],o),u.tgt[T],a),[0,0,2.5][T],y)),_=t.hx,w=t.hz,S=-t.hz,E=t.hx,A=Math.cos(d)*h,M=Math.sin(d)*h;if(i>0){const T=Math.hypot(x[0]-A,x[1]-M)||1,I=Math.hypot(A,M)||1,O=Math.atan2(x[2]-m,T),z=Math.atan2(1-m,I);x[2]=m+Math.tan(Ut(O,z+.04,i/.9))*T}e.cx=t.x+_*A+S*M,e.cy=m,e.cz=t.z+w*A+E*M,e.tx=t.x+_*x[0]+S*x[1],e.ty=x[2],e.tz=t.z+w*x[0]+E*x[1],e.fov=v;const b=Ut(.26,.63,i/.9)*(1-zt(.437,.458,n));if(b>1e-4){const T=Math.cos(b),I=Math.sin(b),O=(z,F)=>[t.x+(z-t.x)*T+(F-t.z)*I,t.z-(z-t.x)*I+(F-t.z)*T];[e.cx,e.cz]=O(e.cx,e.cz),[e.tx,e.tz]=O(e.tx,e.tz)}return e}const S0=os(1,{}),Oe=rc(.6,S0),sc=[[0,1500,22,470,-150,62,40,24,1,0,1,0,0,0,-.93,.055,-.62],[.075,1250,40,420,-120,58,30,25,1,0,1,0,0,0,-.93,.06,-.62],[.15,900,760,820,0,0,40,40,.45,0,1,0,0,0,-.7,.45,-.3],[.215,40,1750,4,40,0,0,40,0,0,1,0,0,0,-.55,.6,.45],[.3,40,1750,4,40,0,0,40,0,0,1,0,1,0,-.55,.6,.45],[.345,40,1950,4,40,0,0,40,0,0,1,0,1,0,-.55,.6,.45],[.375,40,1950,4,40,0,0,40,0,0,1,0,1,1,-.55,.6,.45],[.413,40,1950,4,40,0,0,40,0,0,1,0,1,1,-.55,.6,.45],[.42,Oe.cx,Oe.cy,Oe.cz,Oe.tx,Oe.ty,Oe.tz,Oe.fov,.45,0,1,0,0,0,.62,.36,.7],[.5,Oe.cx,Oe.cy,Oe.cz,Oe.tx,Oe.ty,Oe.tz,Oe.fov,.38,0,1,0,0,0,.55,.42,.7],[.548,Oe.cx,Oe.cy,Oe.cz,Oe.tx,Oe.ty,Oe.tz,Oe.fov,.22,0,1,0,0,0,.35,.55,.7],[.578,Oe.cx,Oe.cy,Oe.cz,Oe.tx,Oe.ty,Oe.tz,Oe.fov,.1,0,1,0,0,0,.05,.72,.6],[.612,Ye.x+70,14,Ye.z+60,Ye.x-10,-10,Ye.z-30,48,0,0,1,0,0,0,-.3,.8,.45],[.65,Ye.x+30,7,Ye.z+110,Ye.x,-12,Ye.z-10,50,0,0,1,0,0,0,-.3,.8,.45],[.69,Ye.x+10,-10,Ye.z+62,Ye.x-6,-20,Ye.z-30,55,0,0,1,0,0,0,-.3,.8,.45],[.745,Ye.x+30,-24,Ye.z+36,Ye.x-70,-30,Ye.z+48,55,0,0,1,0,0,0,-.3,.8,.45],[.785,Ye.x+34,-25,Ye.z+50,Ye.x-66,-30,Ye.z+78,54,0,0,1,0,0,0,-.3,.8,.45],[.815,25,-11,472,8,-10,462,50,0,0,1,0,0,0,-.2,.82,.48],[.85,240,-40,1150,0,-40,0,42,0,1,0,1,0,0,.5,.75,.55],[.9,1950,1420,2350,0,-60,40,33,0,1,0,1,0,0,.5,.75,.55],[1,1950,1420,2350,0,-60,40,33,0,1,0,1,0,0,.5,.75,.55]],w0=sc[0].length,b0=[];for(let n=1;n<w0;n++)b0[n]=Gr(sc.map(t=>t[0]),sc.map(t=>t[n]));const oc=n=>{const t=[];for(let e=1;e<w0;e++)t[e]=b0[e](n);return t};function U2(n,t,e,i={}){const r=oc(n);let[,s,o,a,c,l,u,f]=r;const d=ce((1.6-t)/1.14)*.9;if(i.narrow=d,i.wr=0,i.wd=0,n<ye.stop){const h=zt(.41,.418,n);if(h>0){const m=rc(n,os(zo(n),N2),F2,d);s=Ut(s,m.cx,h),o=Ut(o,m.cy,h),a=Ut(a,m.cz,h),c=Ut(c,m.tx,h),l=Ut(l,m.ty,h),u=Ut(u,m.tz,h),f=Ut(f,m.fov,h)}i.wr=h}else{const h=Ac(n,e,rc(.6,S0,z2,d),d,O2),m=zt(.815,.85,n);s=Ut(h.cx,s,m),o=Ut(h.cy,o,m),a=Ut(h.cz,a,m),c=Ut(h.tx,c,m),l=Ut(h.ty,l,m),u=Ut(h.tz,u,m),f=Ut(h.fov,f,m),i.wd=1-m}return i.cx=s,i.cy=o,i.cz=a,i.tx=c,i.ty=l,i.tz=u,i.fov=f,i}const N2={},F2={},z2={},O2={};function k2(n,{quality:t=1,onFrameCost:e}={}){const i=new V1({canvas:n,antialias:t>.6,powerPreference:"high-performance",alpha:!1});i.outputColorSpace=fr;const r=t>.6?1.75:1.25;let s=Math.min(window.devicePixelRatio||1,r);i.setPixelRatio(s);const o=new pd,a=new Yn(35,1,1,6e4),c=nx(),l={uTime:{value:0},uSunDir:{value:new P(-.9,.1,-.3).normalize()},uDusk:{value:1},uSunCol:{value:new pe(1,.7,.45)},uAmbTop:{value:new pe(.3,.3,.4)},uAmbBot:{value:new pe(.15,.12,.12)},uUnder:{value:0},uFogDen:{value:3e-4},uWaterFogDen:{value:.018},uColumn:{value:1},uPaper:{value:0},uPaperColor:{value:new pe("#efe6d2")},uWaterCol:{value:new pe(.05,.3,.38)},uWaterDeep:{value:new pe(.02,.13,.22)},uShallow:{value:new pe(.12,.55,.56)},uSdf:{value:c.sdfTex},uHalf:{value:wi},uOuter:{value:1},uDiorama:{value:0},uHeart:{value:0},uRes:{value:new kt(1,1)},uPx:{value:1},uClipR:{value:1e9},uSy:{value:1},uSdf2:{value:new ui(new Uint8Array([0]),1,1,qi)},uRect2:{value:new Ee(0,0,0,0)},uSdf3:{value:new ui(new Uint16Array([0]),1,1,qi,mr)},uRect3:{value:new Ee(0,0,0,0)},uBoat:{value:new Ee(0,0,1,0)},uBoatSpeed:{value:0},uTexOn:{value:0},uAerialRect:{value:new Ee(-340,-465,910,0)},uHiTex:{value:t>.6?1:0},uSplash:{value:Array.from({length:4},()=>new Ee(0,0,0,-1e3))},uFloaters:{value:Array.from({length:3},()=>new Ee(0,0,0,0))},uBoatInv:{value:new le},uCanopy:{value:new Ee(-4.1,2.6,1.75,.55+2.15)},uRipple:{value:new Ee(0,0,-1e3,0)},uTorch:{value:new Ee(0,-100,0,0)},uTorchDir:{value:new P(0,-1,0)}},u=new ui(new Uint8Array([128,128,128,255]),1,1);u.needsUpdate=!0;const f={tRock:"rock",tGrass:"grass",tForest:"canopy",tSand:"sand",tReef:"reef",tStrata:"strata",tAerial:"aerial"};for(const lt in f)l[lt]={value:u};l.tGopura={value:u};{const lt=new oa,ut=Object.keys(f);let ht=ut.length;const Ft=Math.min(8,i.capabilities.getMaxAnisotropy());for(const Dt of ut)lt.load(`/textures/${t>.6?"":"sm/"}${f[Dt]}.webp`,Gt=>{Gt.wrapS=Gt.wrapT=Dt==="tAerial"?Vi:Rs,Gt.anisotropy=Ft,Gt.colorSpace=vn,l[Dt].value=Gt,--ht===0&&(et.texReady=performance.now())},void 0,()=>console.warn("texture missing:",f[Dt]))}const d=new Qe;o.add(d);const h=hx(l);o.add(h);const m=new ue(c.geom,ix(l));d.add(m);const v=new ue(rx(c),Yu(l));d.add(v);const g=new ue(new gc(zn-30,96).rotateX(Math.PI/2).translate(0,bi,0),Yu(l));d.add(g);const p=ox(l);d.add(p);const y=ax(c);d.add(y);const x=new ue(new dn(8e4,8e4,96,96).rotateX(-Math.PI/2),ju(l,!0));x.renderOrder=2,o.add(x);const _=new ue(new dn(Xr+16,Xr+16,8,8).rotateX(-Math.PI/2),ju(l,!1));_.renderOrder=3,o.add(_);const w=new ue(cx(c),ux(l));w.renderOrder=4,d.add(w);const S=vx(l,c,t);d.add(S);const E=xx(l);o.add(E),c.heightAt(Ye.x,Ye.z);const A=Lx(l,c,R2(c),t);d.add(A);const M=_x(l,t>.6?1600:700);M.renderOrder=6,o.add(M);const b=yx(l);b.children.forEach(lt=>lt.renderOrder=7),o.add(b);const T=Cx(l);d.add(T);const I=Dx(l);d.add(I);const O=A2(c),z=C2(c),F=O.A.distanceTo(O.B),U=z.A.distanceTo(z.B),k=new P,D=Mx(l);d.add(D);const H=Sx(l);H.renderOrder=8,o.add(H);const G=wx(l,c,Ye,t);d.add(G);const W=v2(l);o.add(W),W.rotation.order="YZX";const X=bx(l);X.renderOrder=1,o.add(X);const st=()=>Math.min(1,a.aspect/1.6),ot=E2(l,c,W);o.add(ot);let V=null,nt=null;const gt=()=>{V||!nt||(performance.now(),V=s2(l,t,nt),o.add(V),V.visible=!0,(i.compileAsync?i.compileAsync(o,a):Promise.resolve()).catch(()=>{}))};try{const lt=new Worker(new URL("/assets/landWorker-DclVU_uQ.js",import.meta.url),{type:"module"});lt.onmessage=ut=>{nt=ut.data,lt.terminate(),(window.requestIdleCallback||(ht=>setTimeout(ht,30)))(gt)},lt.postMessage({quality:t})}catch(lt){console.warn("land worker unavailable",lt)}const Tt={},Nt={},yt={x:0,y:0,sx:0,sy:0,kick:0,px:0,py:0};let Ot=0,ct=0,R=!1,$=0,Z=0;window.addEventListener("pointermove",lt=>{lt.pointerType==="mouse"&&(yt.x=lt.clientX/innerWidth*2-1,yt.y=lt.clientY/innerHeight*2-1,yt.px=yt.x,yt.py=yt.y,yt.kick=Math.max(yt.kick,1))}),window.addEventListener("pointerdown",lt=>{yt.px=lt.clientX/innerWidth*2-1,yt.py=lt.clientY/innerHeight*2-1,yt.kick=2.4});const it=new xu,J=lt=>{R=!0,$=lt.clientX},vt=lt=>{if(!R)return;const ut=lt.clientX-$;$=lt.clientX,ct=ut*.004,Ot+=ct},_t=()=>{R=!1},wt=()=>{const lt=n.clientWidth||innerWidth,ut=n.clientHeight||innerHeight;i.setSize(lt,ut,!1),a.aspect=lt/ut,lt/ut<.8?a.setViewOffset(lt,ut,0,ut*.16,lt,ut):a.clearViewOffset(),a.updateProjectionMatrix(),l.uRes.value.set(lt*s,ut*s),l.uPx.value=s*(ut/900)};wt(),window.addEventListener("resize",wt);const xt=new P,Ct=new P;let N=-1;const C=new P,Y=(lt,ut)=>{if(!lt)return!1;C.copy(lt).project(a);const ht=a.position.distanceTo(lt),Ft=ut/Math.max(ht,1),Dt=et.wet>.01?Math.log(25)/Math.max(l.uWaterFogDen.value,1e-4):4e3;return C.z<1&&Math.abs(C.x)<1+Ft&&Math.abs(C.y)<1+Ft&&ht<Dt},et={p:0,b:oc(0),under:0,depthM:0},St=new pe(1.05,1,.93),ft=new pe(1.25,.72,.45);function $t(lt,ut,ht){const Ft=oc(lt);et.p=lt,et.b=Ft;const[,Dt,Gt,te,Ce,Ge,_n,tt,pt,Yt,Bt,me,Ue,,we,mn,Xe]=Ft;l.uTime.value=ut,et.texReady&&(l.uTexOn.value=Math.min(1,(performance.now()-et.texReady)/900)),yt.sx+=(yt.x-yt.sx)*Math.min(1,ht*2.5),yt.sy+=(yt.y-yt.sy)*Math.min(1,ht*2.5);const fe=zt(.86,.9,lt);R||(ct*=Math.pow(.04,ht),Ot+=ct,Z+=ht*.035*fe),fe<.01&&(Ot*=Math.pow(.02,ht),Z*=Math.pow(.02,ht));const de=(Ot+Z)*fe,ie=yt.sx*.04*(1-fe*.6),ge=zo(lt);os(ge,Tt);const Qt=(zo(lt+.002)-zo(lt-.002))/.004,Le=ce(Qt/14);et.cross=ge,et.km=ge*Cs/1e3,et.speed=Le,W.position.set(Tt.x,Math.sin(ut*.9)*.14+Le*.18,Tt.z),W.rotation.set(Math.sin(ut*.8)*.03*(1-Le*.5),Math.atan2(-Tt.hz,Tt.hx),Le*.06+Math.sin(ut*1.3)*.015),l.uBoat.value.set(Tt.x,Tt.z,Tt.hx,Tt.hz),l.uBoatSpeed.value=Le,lt>.3&&gt(),V&&(V.visible=lt>.38&&lt<.59,V.visible&&V.update(ut)),W.update(lt,ut),W.updateMatrixWorld(),l.uBoatInv.value.copy(W.matrixWorld).invert();const L=U2(lt,a.aspect,c,Nt),K=L.wr,dt=L.cx,mt=L.cy,rt=L.cz,It=L.tx,Xt=L.ty,Kt=L.tz,jt=L.fov;et.crossW=K;const se=dt-It,oe=rt-Kt,ee=Math.cos(de),_e=Math.sin(de);let be=It+se*ee-oe*_e,Ne=Kt+se*_e+oe*ee,Ie=It,Pe=Kt;{const Je=Ie-be,De=Pe-Ne,He=Math.hypot(Je,De)||1,ze=K>.01?Math.hypot(W.position.x-be,W.position.z-Ne):Math.min(He,120),hn=Math.min(He,Ut(Math.min(He,120),ze,K)),on=be+Je/He*hn,ji=Ne+De/He*hn,xr=Math.cos(ie),Zi=Math.sin(ie),Rc=(Pc,Dc)=>[on+(Pc-on)*xr-(Dc-ji)*Zi,ji+(Pc-on)*Zi+(Dc-ji)*xr];[be,Ne]=Rc(be,Ne),[Ie,Pe]=Rc(Ie,Pe)}a.position.set(be,mt-yt.sy*(mt>60?10:.6)*(mt>0?1:.3),Ne),xt.set(Ie,Xt,Pe);const re=xt.clone().sub(a.position).normalize(),qe=zt(.85,.99,-re.y);Ct.set(0,1,0).lerp(new P(0,0,-1),qe).normalize(),a.up.copy(Ct),a.fov=jt,a.updateProjectionMatrix(),a.lookAt(xt),h.position.copy(a.position),h.scale.setScalar(3e4);const Te=Math.max(Math.abs(a.position.x),Math.abs(a.position.z)),Fe=zt(.8,-2.2,a.position.y)*(1-zt(wi-150,wi+10,Te)),Di=Fe>.5?1:0;et.under=Di,et.wet=Fe,et.depthM=Fe>.01?Math.max(0,-a.position.y/ts):0,l.uUnder.value=Fe,l.uSunDir.value.set(we,mn,Xe).normalize(),l.uDusk.value=pt,l.uPaper.value=Yt,l.uOuter.value=Bt,l.uDiorama.value=me,l.uHeart.value=Ue,l.uSunCol.value.copy(St).lerp(ft,pt),l.uAmbTop.value.setRGB(Ut(.42,.3,pt),Ut(.5,.3,pt),Ut(.62,.45,pt)).lerp(new pe(.62,.62,.6),Yt),l.uAmbBot.value.setRGB(Ut(.22,.17,pt),Ut(.2,.11,pt),Ut(.17,.12,pt)),l.uFogDen.value=Ut(Ut(9e-5,15e-5,pt),0,Yt)*Ut(1,.55,K),l.uWaterDeep.value.setRGB(Ut(.03,.03,pt),Ut(.2,.11,pt),Ut(.32,.2,pt)),l.uShallow.value.setRGB(Ut(.12,.1,pt),Ut(.58,.38,pt),Ut(.58,.42,pt));const En=zt(wi-520,wi-60,Math.max(Math.abs(a.position.x),Math.abs(a.position.z)));l.uWaterFogDen.value=Ut(.0135,.003,En),l.uColumn.value=Ut(1,.2,me),w.visible=me>.01,v.visible=me>.01,g.visible=me>.01,p.visible=me>.01,y.visible=me>.2,y.setFade(zt(.2,.9,me)),l.uClipR.value=me>.01?zn:1e9,G.visible=lt>.45;const Zn=1+.8*zt(.835,.9,lt);d.scale.y=Zn,l.uSy.value=Zn,et.sy=Zn,x.visible=Bt>.01,D.visible=Ue>.001;const $e=a.position.y<30;E.visible=Fe<.5&&lt<.38,E.visible&&E.update(ut),X.update(ut,lt<.2&&Fe<.5?1:0,st()),yt.kick=Math.max(0,yt.kick-ht*2.2),A.visible=lt>.45&&lt<.84,A.visible&&(yt.kick>0&&(a.updateMatrixWorld(),it.setFromCamera({x:yt.px,y:-yt.py},a)),A.update(ut,ht,yt.kick>0?it.ray:null,yt.kick,L.narrow||0,Fe>.5)),W.updateMatrixWorld(),Math.abs(lt-N)>.03&&ot.reset(),N=lt,ot.update(lt,ut,a,Zn),et.splashes=ot.splashes||0,ot.torch&&(l.uTorch.value.set(ot.torch.pos.x,ot.torch.pos.y,ot.torch.pos.z,ot.torch.on),l.uTorchDir.value.copy(ot.torch.dir)),ot.bubbles.renderOrder=Fe>.5?8:2.5,W.spray.material.uniforms.uSpray.value=Le*K,W.spray.visible=Le*K>.05,M.visible=Fe>.01,b.visible=Fe>.01,b.visible&&b.update(a),H.visible=Fe>.01,H.material.uniforms.uOrigin.value.copy(a.position).add(new P(0,-1.6,0).applyQuaternion(a.quaternion)).add(re.clone().multiplyScalar(2.2));{const Je=(ze,hn)=>{const on=ze/F,ji=O.B.x-O.A.x,xr=O.B.z-O.A.z,Zi=Math.sin(on*Math.PI*1.6)*3;return hn.set(Ut(O.A.x,O.B.x,on)-xr/F*Zi,Ut(O.A.y,O.B.y,on),Ut(O.A.z,O.B.z,on)+ji/F*Zi)},De=T.state;Ku(De,{want:F*ce((lt-.735)/.065),L:F,dt:ht,base:1.3,vmax:3.2,open:lt>.725&&lt<.86,rest:18,unseen:ze=>Fe<=.01||!Y(Je(ze,k),8)});const He=!!De.on&&Fe>.01;if(T.visible=He,He){const ze=De.s/F,hn=O.B.x-O.A.x,on=O.B.z-O.A.z,ji=-on/F,xr=hn/F;Je(De.s,T.position),T.position.y+=Math.sin(ut*.21)*.6;const Zi=Math.atan2(hn+ji*Math.cos(ze*Math.PI*1.6)*3*Math.PI*1.6,on+xr*Math.cos(ze*Math.PI*1.6)*3*Math.PI*1.6);T.rotation.set(Math.sin(ut*.21+1.2)*.03,Zi,-Math.cos(ze*Math.PI*1.6)*.06),De.ph+=ht*Math.PI*2*Ut(.16,.3,ce(De.v/2.4)),T.material.uniforms.uPhase.value=De.ph,T.material.uniforms.uAmp.value=Ut(.07,.1,ce(De.v/2.4))}}{const Je=(ze,hn)=>(hn.lerpVectors(z.A,z.B,ze/U),hn.y=Math.max(hn.y,c.heightAt(hn.x,hn.z)+1.1),hn),De=I.state;Ku(De,{want:Ut(16,30,ce((lt-.672)/.04)),L:U,dt:ht,base:.6,vmax:2.4,open:lt>.655&&lt<.8,rest:25,unseen:ze=>Fe<=.01||!Y(Je(ze,k),3)});const He=!!De.on&&Fe>.01;I.visible=He,He&&(I.swim(De,ut,ht,De.v),Je(De.s,I.position),I.position.y+=(De.lift||0)+Math.sin(ut*.3)*.2,I.position.y*=Zn,I.rotation.set(-Math.cos(De.ph)*.05,Math.atan2(z.B.x-z.A.x,z.B.z-z.A.z)+Math.sin(ut*.17)*.1,Math.sin(ut*.37)*.05))}return et.underish=$e,et}let Lt=0,Vt=0,at=0;function q(lt){at&&(s=at,at=0,i.setPixelRatio(s),wt());const ut=performance.now();i.render(o,a);const ht=performance.now()-ut;e&&e(ht),lt>1/40?Lt++:Lt=Math.max(0,Lt-1),lt<1/58?Vt++:Vt=0,Lt>40&&s>.75&&(at=Math.max(.75,s-.25),Lt=0),Vt>240&&s<Math.min(window.devicePixelRatio||1,r)&&(at=Math.min(r,s+.25),Vt=0)}const bt=new xu,Q=new P,Rt=(lt,ut)=>{const ht=n.getBoundingClientRect();a.updateMatrixWorld(),bt.setFromCamera({x:(lt-ht.left)/ht.width*2-1,y:-((ut-ht.top)/ht.height)*2+1},a);const Ft=bt.ray.origin,Dt=bt.ray.direction;if(et.wet<.5){if(Dt.y>=-.01||et.b[9]>.5||et.b[13]>.5)return null;const Gt=-Ft.y/Dt.y;return Gt>4e3?null:(Q.copy(Ft).addScaledVector(Dt,Gt),l.uRipple.value.set(Q.x,Q.z,l.uTime.value,1),"ripple")}return Q.copy(Ft).addScaledVector(Dt,4.5),Q.y/=et.sy||1,ot.tap(Q,l.uTime.value),"bubbles"},Et=new P,Ht=new P,B=new P,Mt=()=>{const lt=[];if(!W.visible||!W.brand||a.position.y<.3)return lt;W.updateMatrixWorld();for(const ut of W.brand){B.set(0,0,0);for(const Ge of ut.corners)B.add(Ge);B.multiplyScalar(.25).applyMatrix4(W.matrixWorld),Ht.copy(ut.normal).transformDirection(W.matrixWorld);const ht=Ht.dot(Et.copy(a.position).sub(B).normalize());let Ft=1e9,Dt=1e9,Gt=-1e9,te=-1e9,Ce=!1;for(const Ge of ut.corners){Et.copy(Ge).applyMatrix4(W.matrixWorld);const _n=At(Et.x,Et.y/(et.sy||1),Et.z);Ce=Ce||_n.behind,Ft=Math.min(Ft,_n.x),Dt=Math.min(Dt,_n.y),Gt=Math.max(Gt,_n.x),te=Math.max(te,_n.y)}lt.push({kind:ut.kind,x:Ft,y:Dt,w:Gt-Ft,h:te-Dt,facing:ht,behind:Ce})}return lt},At=(lt,ut,ht)=>{const Ft=new P(lt,ut*(et.sy||1),ht).project(a);return{x:(Ft.x*.5+.5)*n.clientWidth,y:(-Ft.y*.5+.5)*n.clientHeight,behind:Ft.z>1}};return{debug:{terrain:m,innerOcean:_,outerOcean:x,canopy:S,reef:G,fish:A,boat:W,divers:ot,shark:T,turtle:I,eagle:X,renderer:i},update:$t,render:q,size:wt,camera:a,project:At,brandRects:Mt,tap:Rt,T:c,U:l,CORE_R:zn,startDrag:J,moveDrag:vt,endDrag:_t,state:et,worldPerPixelTopDown:()=>2*a.position.y*Math.tan(a.fov*Math.PI/360)/n.clientHeight,SPOT:Ye}}const Cc=n=>n.map(([t,e])=>[t,-e]),E0=Cc(Rn.island),B2=Cc(Rn.islet),Ja=Rn.mainland.map(Cc),ti=Object.fromEntries(Object.entries(Rn.poi).map(([n,[t,e]])=>[n,[t,-e]])),H2=Math.min(...E0.map(n=>n[1])),[Oo,Qa]=Rn.center,tl=110574,V2=111320*Math.cos(Oo*Math.PI/180);Math.hypot(ti.temple[0],ti.temple[1])/1e3;const Ro=Array.from({length:121},(n,t)=>{const e=os(t/120,{});return[e.x,e.z]});function W2(n){const t=n.getContext("2d");let e=0,i=0,r=1;const s=()=>{r=Math.min(window.devicePixelRatio||1,2),e=n.clientWidth,i=n.clientHeight,n.width=Math.round(e*r),n.height=Math.round(i*r)};s(),window.addEventListener("resize",s);const o=document.createElement("canvas");o.width=o.height=256;{const l=o.getContext("2d"),u=l.createImageData(256,256),f=sn(9);for(let d=0;d<u.data.length;d+=4){const h=200+f()*55;u.data[d]=h,u.data[d+1]=h*.97,u.data[d+2]=h*.9,u.data[d+3]=22}l.putImageData(u,0,0)}function a(l,u,f,d,h){const m=y=>l.x+l.w/2+(y-f)*u,v=y=>l.y+l.h/2-(h.lift||0)+(y-d)*u;t.fillStyle="#efe6d2",t.fillRect(l.x,l.y,l.w,l.h),t.fillStyle=t.createPattern(o,"repeat"),t.fillRect(l.x,l.y,l.w,l.h),t.save(),t.globalAlpha*=h.ink==null?1:h.ink,t.lineWidth=1,t.strokeStyle="rgba(70,95,110,0.22)",t.fillStyle="rgba(55,75,88,0.75)",t.font='11px "JetBrains Mono", monospace';const g=u*tl*.005>70?.005:u*tl*.02>50?.02:.05;for(let y=Math.ceil((Oo-.3)/g)*g;y<Oo+.3;y+=g){const x=v(-(y-Oo)*tl);x<l.y-10||x>l.y+l.h+10||(t.beginPath(),t.moveTo(l.x,x),t.lineTo(l.x+l.w,x),t.stroke(),h.small||t.fillText(xh(y,"N"),l.x+8,x-4))}for(let y=Math.ceil((Qa-.3)/g)*g;y<Qa+.5;y+=g){const x=m((y-Qa)*V2);x<l.x-10||x>l.x+l.w+10||(t.beginPath(),t.moveTo(x,l.y),t.lineTo(x,l.y+l.h),t.stroke(),h.small||t.fillText(xh(y,"E"),x+4,l.y+l.h-10))}t.fillStyle="#ddd0b2";for(const y of Ja){if(t.beginPath(),y.forEach(([_,w],S)=>S?t.lineTo(m(_),v(w)):t.moveTo(m(_),v(w))),!(y.length>2&&y[0][0]===y[y.length-1][0]&&y[0][1]===y[y.length-1][1])){const _=y[y.length-1],w=y[0];t.lineTo(m(6e4),v(_[1])),t.lineTo(m(6e4),v(w[1]))}t.closePath(),t.fill()}for(let y=3;y>=1;y--){t.strokeStyle=`rgba(46,110,128,${.1+.05*(3-y)})`,t.lineWidth=1;for(const x of Ja)t.beginPath(),x.forEach(([_,w],S)=>S?t.lineTo(m(_)-y*5,v(w)):t.moveTo(m(_)-y*5,v(w))),t.stroke()}t.strokeStyle="#2d3a3f",t.lineWidth=1.4;for(const y of Ja)t.beginPath(),y.forEach(([x,_],w)=>w?t.lineTo(m(x),v(_)):t.moveTo(m(x),v(_))),t.stroke();const p=(y,x)=>{t.beginPath();const _=vh(y);y.forEach(([w,S],E)=>{const A=w-_[0],M=S-_[1],b=Math.hypot(A,M)||1,T=m(w)+A/b*x,I=v(S)+M/b*x;E?t.lineTo(T,I):t.moveTo(T,I)}),t.closePath()};for(const y of[E0,B2]){if(!h.small)for(let w=4;w>=1;w--)p(y,w*6),t.strokeStyle=`rgba(46,110,128,${.07+.06*(4-w)})`,t.lineWidth=1,t.stroke();p(y,0);const x=vh(y),_=t.createRadialGradient(m(x[0]),v(x[1]-120),1,m(x[0]),v(x[1]),Math.max(4,420*u));_.addColorStop(0,"#6f8f4a"),_.addColorStop(.7,"#9aa267"),_.addColorStop(1,"#c4ad7c"),t.fillStyle=_,t.fill(),t.strokeStyle="#26302f",t.lineWidth=h.small?1:1.6,t.stroke()}if(h.route>0){t.save(),t.globalAlpha*=h.route,t.setLineDash([6,6]),t.lineDashOffset=-h.t*18,t.strokeStyle="rgba(180,70,47,0.75)",t.lineWidth=h.small?1.4:2,t.beginPath(),Ro.forEach(([x,_],w)=>w?t.lineTo(m(x),v(_)):t.moveTo(m(x),v(_))),t.stroke(),t.setLineDash([]);const y=os(h.u,{});if(h.u>.001){t.strokeStyle="#b4462f",t.lineWidth=h.small?2.2:3,t.beginPath();const x=Math.floor(h.u*120);for(let _=0;_<=x;_++){const[w,S]=Ro[_];_?t.lineTo(m(w),v(S)):t.moveTo(m(w),v(S))}t.lineTo(m(y.x),v(y.z)),t.stroke()}q2(t,m(y.x),v(y.z),Math.atan2(y.hz,y.hx),h.small?.8:1.15),t.restore()}if(h.labels>0){t.save(),t.globalAlpha*=h.labels,X2(t,m(ti.temple[0]),v(ti.temple[1]),h.small?.7:1);const y=m(ti.temple[0]),x=v(ti.temple[1]),_=`600 ${h.small?12:20}px "Fraunces Variable", serif`;if(h.small||l.w>=600)Hn(t,"Murudeshwar",y+(h.small?9:16),x+4,_,"#2a2a26"),h.small||Hn(t,"temple headland · boats leave from the beach",y+16,x+24,"18px Caveat, cursive","#7a4a32");else{const w="boats leave from the beach";t.globalAlpha*=Math.max(0,Math.min(1,(l.x+l.w-6-y)/30)),t.font=_;const S=t.measureText("Murudeshwar").width;t.font="18px Caveat, cursive";const E=t.measureText(w).width;Hn(t,"Murudeshwar",y-14-S,x-24,_,"#2a2a26"),Hn(t,w,y-14-E,x-5,"18px Caveat, cursive","#7a4a32")}if(!h.small){const w=m(ti.station[0]),S=v(ti.station[1]),E="Murdeshwar station · Konkan Railway",A='12px "Instrument Sans", sans-serif';t.font=A,w+10+t.measureText(E).width<l.x+l.w-8&&(G2(t,w,S),Hn(t,E,w+10,S+4,A,"#3c4645"))}t.restore()}return t.restore(),{X:m,Y:v}}function c(l,u,f,d=0){const h=zt(.345,.378,l)*(1-zt(.424,.44,l)),m=zt(.459,.468,l)*(1-zt(.538,.552,l));if(h<=.001&&m<=.001){n.style.opacity!=="0"&&(n.style.opacity="0");return}if(n.style.opacity="1",t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,e,i),h>.001){t.globalAlpha=h;const v=zt(.383,.412,l),g=zt(.413,.437,l),p=Math.abs(ti.temple[0])+9e3,x=Math.min(e*.84/p,i*.8/14e3),_=1/f;let w=Math.exp(Ut(Math.log(_),Math.log(x),v)),S=Ut(40,ti.temple[0]*.5+2600,v**3),E=Ut(0,ti.temple[1]*.5-600,v**3);const A=Ro[0];w*=Math.exp(g*3.4),S=Ut(S,A[0],g**.6),E=Ut(E,A[1],g**.6);const M=1-zt(.416,.428,l),{X:b,Y:T}=a({x:0,y:0,w:e,h:i},w,S,E,{route:zt(.395,.41,l),labels:zt(.4,.412,l),u:0,t:u,small:!1,ink:M,lift:e/i<.8?i*.16:0});t.globalAlpha=h*M;const I=(G,...W)=>{let X=0;for(const[st,ot,V=0]of W)t.font=ot,X=Math.max(X,t.measureText(st).width+st.length*V);return Math.max(12,Math.min(G,e-12-X))},O=Ut(30,22,v),z=`italic 600 ${O}px "Fraunces Variable", serif`,F=v<.5?"the heart · about 27 ha":"Pigeon Island",U=e<600;t.font=z;const k=t.measureText("Netrani").width,D=U?T(H2)-52:Ut(T(-120),T(0)+46,v),H=I(Ut(U?b(0)-k/2:b(-260)-150,b(0)-40,v),["Netrani",z],[F,"18px Caveat, cursive"]);if(t.save(),U&&(t.globalAlpha*=Math.max(0,Math.min(1,(D-100)/40))),Hn(t,"Netrani",H,D,z,"#1f2a2c"),Hn(t,F,H,D+22,"18px Caveat, cursive","#7a4a32"),t.restore(),v>.6){t.save(),t.globalAlpha=h*M*zt(.6,.9,v);const G='500 14px "Instrument Sans", sans-serif';Hn(t,"ARABIAN  SEA",I(b(-2600),["ARABIAN  SEA",G,6]),U?Math.max(T(5200),D+64):T(5200),G,"rgba(40,90,105,0.7)",6),t.restore()}if(v>.7){const G=Ro[62];t.save(),t.globalAlpha=h*M*zt(.7,1,v);const W=`≈ ${(Cs/1e3).toFixed(0)} km`,X='600 22px "JetBrains Mono", monospace',st="≈ 10 nautical miles · 45–90 min by boat",ot="18px Caveat, cursive",V=I(b(G[0])-30,[W,X],[st,ot]);Hn(t,W,V,T(G[1])-16,X,"#b4462f"),Hn(t,st,V,T(G[1])+6,ot,"#7a4a32"),t.restore()}$2(t,e-70,86,34),Y2(t,24,i-54,w),t.globalAlpha=1}if(m>.001){const v=Math.min(310,e*.42),g=v*.66,p={x:e-v-18,y:Math.min(86,i*.12),w:v,h:g};t.save(),t.globalAlpha=m,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=24,t.shadowOffsetY=10,t.fillStyle="#efe6d2",t.beginPath(),t.roundRect(p.x,p.y,p.w,p.h,12),t.fill(),t.shadowColor="transparent",t.beginPath(),t.roundRect(p.x,p.y,p.w,p.h,12),t.clip();const y=Math.min(p.w/21e3,p.h/12500);a(p,y,8300,-3900,{route:1,labels:1,u:d,t:u,small:!0}),t.restore(),t.save(),t.globalAlpha=m;const x=d*Cs/1e3;Hn(t,`${x.toFixed(1)} km`,p.x+14,p.y+26,'600 18px "JetBrains Mono", monospace',"#b4462f"),Hn(t,`of ≈ ${(Cs/1e3).toFixed(0)} km · ${(x/1.852).toFixed(1)} nmi`,p.x+14,p.y+45,"16px Caveat, cursive","#7a4a32"),Hn(t,"Netrani",p.x+12,p.y+p.h-14,'italic 600 13px "Fraunces Variable", serif',"#1f2a2c"),t.strokeStyle="rgba(29,39,41,0.25)",t.lineWidth=1,t.beginPath(),t.roundRect(p.x+.5,p.y+.5,p.w-1,p.h-1,12),t.stroke(),t.restore()}}return{draw:c,resize:s}}function vh(n){let t=0,e=0;for(const i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function xh(n,t){const e=Math.round(n*600)/10,i=Math.floor(e/60),r=e-i*60;return`${i}°${r.toFixed(1).padStart(4,"0")}′${t}`}function Hn(n,t,e,i,r,s,o=0){n.font=r,n.fillStyle=s,"letterSpacing"in n&&(n.letterSpacing=`${o}px`),n.fillText(t,e,i),"letterSpacing"in n&&(n.letterSpacing="0px")}function G2(n,t,e){n.fillStyle="#2d3a3f",n.beginPath(),n.arc(t,e,3.5,0,6.283),n.fill()}function X2(n,t,e,i=1){n.save(),n.translate(t,e),n.scale(i,i),n.fillStyle="#b4462f";for(let r=0;r<5;r++){const s=12-r*2;n.fillRect(-s/2,-r*3.2,s,3)}n.beginPath(),n.arc(0,-17,1.8,0,6.283),n.fill(),n.restore()}function q2(n,t,e,i,r){n.save(),n.translate(t,e),n.rotate(i),n.scale(r,r),n.strokeStyle="rgba(46,110,128,0.55)",n.lineWidth=1;for(let s=1;s<=3;s++)n.beginPath(),n.moveTo(-6-s*7,-3-s*2.2),n.lineTo(-6,0),n.lineTo(-6-s*7,3+s*2.2),n.stroke();n.fillStyle="#f7f1e4",n.strokeStyle="#26302f",n.lineWidth=1.3,n.beginPath(),n.moveTo(12,0),n.quadraticCurveTo(4,-6,-8,-5),n.lineTo(-8,5),n.quadraticCurveTo(4,6,12,0),n.fill(),n.stroke(),n.fillStyle="#1c5b96",n.fillRect(-5,-3.2,8,6.4),n.restore()}function $2(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="rgba(38,48,47,0.55)",n.lineWidth=1,n.beginPath(),n.arc(0,0,i,0,6.283),n.stroke(),n.beginPath(),n.arc(0,0,i*.82,0,6.283),n.stroke();for(let r=0;r<4;r++)n.rotate(Math.PI/2),n.fillStyle=r===3?"#b4462f":"#26302f",n.beginPath(),n.moveTo(0,-i*1.05),n.lineTo(i*.14,0),n.lineTo(-i*.14,0),n.closePath(),n.fill();n.fillStyle="#26302f",n.font='600 13px "Fraunces Variable", serif',n.textAlign="center",n.fillText("N",0,-i-8),n.textAlign="start",n.restore()}function Y2(n,t,e,i){const r=[100,200,500,1e3,2e3,5e3];let s=r[0];for(const a of r)a*i<180&&(s=a);const o=s*i;n.save(),n.fillStyle="#26302f",n.fillRect(t,e,o/2,5),n.strokeStyle="#26302f",n.lineWidth=1,n.strokeRect(t,e,o,5),n.font='11px "JetBrains Mono", monospace',n.fillText("0",t-3,e-6),n.fillText(s>=1e3?`${s/1e3} km`:`${s} m`,t+o-14,e-6),n.restore()}function j2(){const n=new Path2D;return n.moveTo(40,160),n.bezierCurveTo(40,110,120,92,260,96),n.bezierCurveTo(420,100,600,120,760,146),n.lineTo(860,150),n.lineTo(960,70),n.lineTo(930,160),n.lineTo(990,250),n.lineTo(860,170),n.lineTo(760,176),n.bezierCurveTo(600,204,420,222,260,224),n.bezierCurveTo(120,226,40,210,40,160),n}function Z2(n,t="sea"){const e=j2(),i=t==="plate",r=n.createLinearGradient(0,90,0,230);i?(r.addColorStop(0,"#4f6f80"),r.addColorStop(.55,"#6f90a0"),r.addColorStop(1,"#d8e4e6")):(r.addColorStop(0,"#2b4a5c"),r.addColorStop(.55,"#38627a"),r.addColorStop(1,"#a9c3cc")),n.fillStyle=r,n.fill(e),n.fillStyle=i?"#557686":"#2f566b",n.beginPath(),n.moveTo(470,106),n.lineTo(560,40),n.lineTo(600,112),n.fill(),n.beginPath(),n.moveTo(300,200),n.lineTo(370,290),n.lineTo(410,210),n.fill(),n.save(),n.clip(e);const s=sn(3);n.fillStyle=i?"rgba(255,255,255,0.9)":"rgba(232,242,240,0.85)";for(let o=0;o<260;o++){const a=80+s()*700,c=100+s()*90,l=2+s()*5;n.beginPath(),n.arc(a,c,l,0,6.28),n.fill()}n.strokeStyle=i?"rgba(255,255,255,0.6)":"rgba(232,242,240,0.5)",n.lineWidth=3;for(let o=0;o<9;o++){const a=180+o*70;n.beginPath(),n.moveTo(a,100),n.lineTo(a+10,200),n.stroke()}if(i){const o=n.createLinearGradient(0,96,0,150);o.addColorStop(0,"rgba(40,70,85,0.35)"),o.addColorStop(1,"rgba(40,70,85,0)"),n.fillStyle=o,n.fillRect(0,90,1e3,70)}n.restore(),i&&(n.strokeStyle="rgba(60,50,40,0.75)",n.lineWidth=1.6,n.stroke(e)),n.fillStyle=i?"#30434c":"#132a36",n.fillRect(48,172,70,4)}function K2(){const n=document.createElement("canvas");n.width=960,n.height=720;const t=n.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,960,720),t.save(),t.translate(60,230),t.scale(.85,.85),Z2(t,"plate"),t.restore();const e=sn(12);t.fillStyle="rgba(80,110,120,0.5)";for(let i=0;i<40;i++)t.beginPath(),t.arc(80+e()*800,120+e()*520,1+e()*1.5,0,6.28),t.fill();return n.toDataURL("image/png")}const _h={often:"Often seen",sometimes:"Sometimes",rare:"Lucky day",above:"Above water"};function J2(n){for(const c of _r)!c.img&&c.art==="whaleshark"&&(c.img=K2());const t=document.getElementById("species"),e=document.getElementById("species-dialog"),i=e.querySelector(".species-dialog-body");t.innerHTML=_r.map((c,l)=>`
    <button class="sp reveal" type="button" data-i="${l}" data-group="${c.group}" aria-haspopup="dialog">
      <div class="sp-art">${c.img?`<img src="${c.img}" alt="${c.alt}" loading="lazy" width="960" height="720" />`:""}</div>
      <div class="sp-meta"><h3>${c.name}</h3><span class="odds odds-${c.odds}">${_h[c.odds]}</span></div>
      <p class="sp-sci">${c.sci}</p>
      <p class="sp-hand">${c.hand}</p>
    </button>`).join("");const r=[{label:"Above the water",note:"cliffs and fig canopy",ids:["seaeagle","swiftlet","pigeon"]},{label:"Surface and open blue",note:"passing visitors",ids:["whaleshark","turtle","ray"]},{label:"Reef, about 8–15 m",note:"where most dives go",ids:["butterflyfish","triggerfish","parrotfish","wrasse","barracuda"]},{label:"Crevices and rock",note:"look into the gaps",ids:["moray","giantclam"]}],s=Object.fromEntries(_r.map((c,l)=>[c.id,l]));document.getElementById("ladder").innerHTML=r.map((c,l)=>`
    <div class="zone zone-${l}"><div class="zone-label"><b>${c.label}</b><span>${c.note}</span></div>
      <div class="zone-row">${c.ids.filter(u=>u in s).map(u=>`<button type="button" class="zone-sp" data-i="${s[u]}" title="${_r[s[u]].name}"><img src="${_r[s[u]].img}" alt="" loading="lazy"/></button>`).join("")}</div></div>`).join(""),document.getElementById("ladder").addEventListener("click",c=>{const l=c.target.closest(".zone-sp");l&&o(+l.dataset.i)}),t.addEventListener("click",c=>{const l=c.target.closest(".sp");l&&o(+l.dataset.i)});function o(c){var u;const l=_r[c];i.innerHTML=`
      <div>${l.img?`<img src="${l.img}" alt="${l.alt}" width="960" height="720" />`:""}</div>
      <div>
        <span class="odds odds-${l.odds}">${_h[l.odds]}</span>
        <h3>${l.name}</h3>
        <p class="sp-sci">${l.sci}</p>
        <p>${l.about}</p>
        <dl>
          <div><dt>Where to look</dt><dd>${l.where}</dd></div>
          <div><dt>Good manners</dt><dd>${l.manners}</dd></div>
        </dl>
        <p class="sp-hand" style="margin-top:16px">${l.hand}</p>
        ${(u=l.src)!=null&&u.length?`<p class="tl-src">Sources: ${l.src.map(f=>`<a href="${lr[f].url}" target="_blank" rel="noopener">${lr[f].short}</a>`).join(", ")}</p>`:""}
      </div>`,e.showModal(),n==null||n.blip()}e.addEventListener("click",c=>{c.target===e&&e.close()});const a=[...document.querySelectorAll(".chips button")];a.forEach(c=>c.addEventListener("click",()=>{a.forEach(u=>u.setAttribute("aria-selected",String(u===c)));const l=c.dataset.filter;t.querySelectorAll(".sp").forEach(u=>{u.hidden=!(l==="all"||u.dataset.group===l)})}))}const Vn=30,yh=[{name:"red",k:.4,col:"#e5412f"},{name:"orange",k:.22,col:"#f08a24"},{name:"yellow",k:.1,col:"#f2cf3a"},{name:"green",k:.07,col:"#4cb35a"},{name:"blue",k:.06,col:"#2f7fd8"}],an=(n,t)=>[n[0]*Math.exp(-.3*t),n[1]*Math.exp(-.075*t),n[2]*Math.exp(-.06*t)],wn=(n,t=1)=>`rgba(${n[0]|0},${n[1]|0},${n[2]|0},${t})`,Q2=[118,206,212],el=[5,24,40],t_=n=>{const t=an(Q2,n*.9);return[el[0]+t[0],el[1]+t[1],el[2]+t[2]]};function e_(){const n=document.getElementById("lab-canvas"),t=n.getContext("2d"),e=document.getElementById("lab-depth"),i=document.getElementById("lab-depth-out"),r=document.getElementById("lab-bar"),s=document.getElementById("lab-vol"),o=document.getElementById("lab-tank"),a=document.getElementById("lab-insight"),c=document.getElementById("lab-torch"),l=document.getElementById("spec-bars"),u=document.getElementById("spec-path");let f=0,d=0,h=1,m=0,v=0,g=0,p=!1,y=!1,x=!1;const _=sn(31);let w=0,S=0,E=()=>0,A=null;const M=at=>w+at/Vn*S,b=at=>(at-w)/S*Vn,T=Array.from({length:64},()=>_());function I(){h=Math.min(devicePixelRatio||1,2),f=n.clientWidth,d=n.clientHeight,n.width=Math.round(f*h),n.height=Math.round(d*h),w=d*.085,S=d-w-d*.035,E=at=>{const q=at/Vn,bt=Math.min(63,q*63|0);return f*(.86-.17*Math.pow(q,.8))+(T[bt]-.5)*f*.03},A=O()}function O(){const at=document.createElement("canvas");at.width=Math.round(f*h),at.height=Math.round(d*h);const q=at.getContext("2d");q.setTransform(h,0,0,h,0,0);const bt=q.createLinearGradient(0,0,0,w);bt.addColorStop(0,"#f6e6c8"),bt.addColorStop(1,"#fbeedb"),q.fillStyle=bt,q.fillRect(0,0,f,w+2);const Q=q.createLinearGradient(0,w,0,M(Vn));for(let B=0;B<=Vn;B+=1)Q.addColorStop(B/Vn,wn(t_(B)));q.fillStyle=Q,q.fillRect(0,w,f,d-w);const Rt=new Path2D;Rt.moveTo(f,M(.6));for(let B=.6;B<=Vn;B+=.5)Rt.lineTo(E(B),M(B));Rt.lineTo(f,d),Rt.closePath();const Et=q.createLinearGradient(0,w,0,d);for(let B=0;B<=Vn;B+=2)Et.addColorStop(B/Vn,wn(an([150,128,104],B+1.5)));q.fillStyle=Et,q.fill(Rt),q.save(),q.clip(Rt);for(let B=0;B<900;B++){const Mt=_()*Vn,At=E(Mt)+_()*f*.2,lt=M(Mt),ut=1+_()*3;q.fillStyle=wn(an(_()<.5?[90,80,70]:[200,180,150],Mt+1.5),.35),q.beginPath(),q.ellipse(At,lt,ut*1.6,ut,0,0,6.28),q.fill()}q.restore(),q.strokeStyle="rgba(10,20,25,0.35)",q.lineWidth=1.2,q.stroke(Rt);const Ht=new Path2D;Ht.moveTo(0,d),Ht.lineTo(0,M(28.6));for(let B=0;B<=40;B++){const Mt=B/40*f;Ht.lineTo(Mt,M(28.6+Math.sin(B*.9)*.25+B%3*.1))}Ht.lineTo(f,d),Ht.closePath(),q.fillStyle=wn(an([214,196,158],30)),q.fill(Ht),q.font='500 10.5px "JetBrains Mono", monospace',q.textBaseline="middle";for(let B=0;B<=Vn;B++){const Mt=M(B),At=B%5===0;q.strokeStyle=`rgba(235,250,248,${At?.7:.3})`,q.lineWidth=1,q.beginPath(),q.moveTo(14,Mt),q.lineTo(At?30:22,Mt),q.stroke(),At&&(q.fillStyle="rgba(240,252,250,0.85)",q.fillText(`${B} m`,36,Mt),q.fillStyle="rgba(240,252,250,0.5)",q.fillText(`${(1+B/10).toFixed(1)} bar`,36,Mt+13))}return at}const z=[];(function at(q,bt,Q,Rt,Et,Ht){const B=q+Math.cos(Q)*Rt,Mt=bt+Math.sin(Q)*Rt;if(z.push([q,bt,B,Mt,Et]),!(Ht>5))for(let At=0;At<2;At++)at(B,Mt,Q+(At?.42:-.42)+(_()-.5)*.4,Rt*.76,Et*.7,Ht+1)})(0,0,-Math.PI/2-.35,.26,.05,0);const F=[2.2,9,17,25.5],U=[[5.5,[242,205,70]],[13,[242,205,70]],[21.5,[242,205,70]]],k=[[11,[160,92,196]],[19.5,[160,92,196]],[27.5,[160,92,196]]],D=Array.from({length:14},()=>({ox:_()*2-1,oy:_()*2-1,ph:_()*6.28,sp:.6+_()*.5})),H=[];let G=1.2;function W(at,q){const bt=E(at)+4,Q=M(at),Rt=Math.min(f,d)*.085,Et=q?an([214,60,44],1.5):an([214,60,44],at+1.5);t.save(),t.translate(bt,Q),t.scale(-1,1),t.rotate(.15),t.lineCap="round",t.strokeStyle=wn(Et);const Ht=Math.sin(g*.9+at)*.03;for(const[B,Mt,At,lt,ut]of z)t.lineWidth=Math.max(.8,ut*Rt),t.beginPath(),t.moveTo(B*Rt+Mt*Rt*Ht,Mt*Rt),t.lineTo(At*Rt+lt*Rt*Ht,lt*Rt),t.stroke();t.restore()}function X(at,q,bt){const Q=E(at)-2,Rt=M(at),Et=Math.min(f,d)*.018,Ht=bt?an(q,1.5):an(q,at+1.5);for(let B=0;B<4;B++)t.fillStyle=wn(Ht),t.beginPath(),t.roundRect(Q-B*Et*1.3-Et,Rt-Et*(2.4+B%2),Et*1.05,Et*(2.4+B%2),Et*.5),t.fill(),t.fillStyle="rgba(0,0,0,0.35)",t.beginPath(),t.ellipse(Q-B*Et*1.3-Et*.47,Rt-Et*(2.4+B%2)+2,Et*.3,Et*.18,0,0,6.28),t.fill()}function st(at,q,bt){const Q=E(at)+2,Rt=M(at),Et=Math.min(f,d)*.05,Ht=bt?an(q,1.5):an(q,at+1.5);t.save(),t.translate(Q,Rt),t.strokeStyle=wn(Ht),t.lineCap="round";for(let B=0;B<9;B++){const Mt=-Math.PI/2-.9+B*.22+Math.sin(g+B)*.05;t.lineWidth=3,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(Math.cos(Mt)*Et*.4,Math.sin(Mt)*Et*.6,Math.cos(Mt)*Et,Math.sin(Mt)*Et),t.stroke()}t.restore()}function ot(at){F.forEach(q=>W(q,at)),U.forEach(([q,bt])=>X(q,bt,at)),k.forEach(([q,bt])=>st(q,bt,at))}function V(at,q,bt,Q){const Rt=bt+1,Et=wn(an([28,40,58],Rt)),Ht=wn(an([214,58,44],Rt)),B=wn(an([214,58,44],Rt)),Mt=wn(an([242,196,40],Rt)),At=wn(an([176,120,92],Rt)),lt=wn(an([20,26,32],Rt));t.save(),t.translate(at,q),t.rotate(-.08),t.lineCap="round",t.lineJoin="round";for(const[ut,ht]of[[1,0],[-1,Math.PI]]){const Ft=Math.sin(g*3.2+ht)*.22;t.save(),t.translate(-.12*Q,.03*Q*ut),t.rotate(Ft*.6),t.strokeStyle=Et,t.lineWidth=.09*Q,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(-.2*Q,.03*Q,-.36*Q,.01*Q),t.stroke(),t.translate(-.36*Q,.01*Q),t.rotate(Ft),t.fillStyle=B,t.beginPath(),t.moveTo(0,-.03*Q),t.lineTo(-.26*Q,-.07*Q),t.lineTo(-.28*Q,.06*Q),t.lineTo(0,.04*Q),t.closePath(),t.fill(),t.restore()}return t.fillStyle=Et,t.beginPath(),t.ellipse(.06*Q,0,.21*Q,.075*Q,0,0,6.28),t.fill(),t.fillStyle=Ht,t.fillRect(-.08*Q,.025*Q,.26*Q,.018*Q),t.fillStyle=lt,t.beginPath(),t.roundRect(-.02*Q,-.1*Q,.24*Q,.07*Q,.03*Q),t.fill(),t.fillStyle=Mt,t.beginPath(),t.roundRect(-.06*Q,-.16*Q,.32*Q,.075*Q,.035*Q),t.fill(),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(-.03*Q,-.152*Q,.26*Q,.012*Q),t.strokeStyle=Et,t.lineWidth=.06*Q,t.beginPath(),t.moveTo(.18*Q,.01*Q),t.quadraticCurveTo(.3*Q,.06*Q,.4*Q,.05*Q),t.stroke(),t.fillStyle=wn(an([60,64,70],Rt)),t.beginPath(),t.roundRect(.39*Q,.03*Q,.1*Q,.035*Q,.01*Q),t.fill(),t.fillStyle=Et,t.beginPath(),t.arc(.32*Q,-.045*Q,.065*Q,0,6.28),t.fill(),t.fillStyle=At,t.beginPath(),t.arc(.35*Q,-.03*Q,.035*Q,0,6.28),t.fill(),t.fillStyle=wn(an([150,210,230],Rt),.9),t.strokeStyle=lt,t.lineWidth=.012*Q,t.beginPath(),t.roundRect(.33*Q,-.08*Q,.07*Q,.045*Q,.012*Q),t.fill(),t.stroke(),t.fillStyle="rgba(255,255,255,0.7)",t.fillRect(.345*Q,-.073*Q,.018*Q,.01*Q),t.fillStyle=lt,t.beginPath(),t.arc(.39*Q,0,.022*Q,0,6.28),t.fill(),t.strokeStyle=lt,t.lineWidth=.014*Q,t.beginPath(),t.moveTo(.38*Q,.01*Q),t.quadraticCurveTo(.3*Q,-.17*Q,.22*Q,-.13*Q),t.stroke(),t.restore(),{mouthX:at+.39*Q,mouthY:q-.03*Q,torchX:at+.49*Q,torchY:q+.02*Q,handX:at+.4*Q,handY:q+.05*Q}}const nt=(at,q)=>{v=ce(at,0,Vn),q||(e.value=String(Math.round(v*2)/2))};e.addEventListener("input",()=>nt(parseFloat(e.value),!0));const gt=at=>{const q=n.getBoundingClientRect();nt(b(at.clientY-q.top),!1)};n.addEventListener("pointerdown",at=>{y=!0,n.setPointerCapture(at.pointerId),gt(at),n.classList.add("is-grab")}),n.addEventListener("pointermove",at=>y&&gt(at));const Tt=()=>{y=!1,n.classList.remove("is-grab")};n.addEventListener("pointerup",Tt),n.addEventListener("pointercancel",Tt),c.addEventListener("click",()=>{x=!x,c.setAttribute("aria-pressed",String(x))}),new IntersectionObserver(([at])=>p=at.isIntersecting).observe(n),addEventListener("resize",I),I();const Nt="http://www.w3.org/2000/svg",yt=(at,q,bt)=>{const Q=document.createElementNS(Nt,at);for(const Rt in q)Q.setAttribute(Rt,q[Rt]);return bt.append(Q),Q},Ot=document.getElementById("inst-gauge"),ct=-210*Math.PI/180,R=30*Math.PI/180,$=at=>ct+(at-1)/3*(R-ct),Z=(at,q)=>[60+Math.cos(at)*q,64+Math.sin(at)*q];yt("path",{d:`M${Z(ct,46).join(" ")} A46 46 0 1 1 ${Z(R,46).join(" ")}`,fill:"none",stroke:"rgba(217,236,234,0.25)","stroke-width":7,"stroke-linecap":"round"},Ot);const it=yt("path",{fill:"none",stroke:"#f2a65a","stroke-width":7,"stroke-linecap":"round"},Ot);for(let at=1;at<=4.001;at+=.5){const q=$(at),[bt,Q]=Z(q,36),[Rt,Et]=Z(q,at%1===0?29:32);if(yt("line",{x1:bt,y1:Q,x2:Rt,y2:Et,stroke:"rgba(217,236,234,0.7)","stroke-width":1.4},Ot),at%1===0){const[Ht,B]=Z(q,21),Mt=yt("text",{x:Ht,y:B+3.5,"text-anchor":"middle",fill:"rgba(217,236,234,0.75)","font-size":9,"font-family":"JetBrains Mono, monospace"},Ot);Mt.textContent=at}}const J=yt("line",{x1:60,y1:64,x2:60,y2:24,stroke:"#fff6ea","stroke-width":2.2,"stroke-linecap":"round"},Ot);yt("circle",{cx:60,cy:64,r:4.5,fill:"#fff6ea"},Ot);const vt=document.getElementById("inst-breath");yt("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"rgba(217,236,234,0.5)","stroke-dasharray":"3 5"},vt);const _t=yt("circle",{cx:60,cy:60,r:44,fill:"rgba(160,225,235,0.35)",stroke:"#bfeff2","stroke-width":1.5},vt),wt=yt("circle",{cx:46,cy:46,r:8,fill:"rgba(255,255,255,0.6)"},vt),xt=document.getElementById("inst-tank");yt("rect",{x:40,y:22,width:40,height:86,rx:18,fill:"none",stroke:"rgba(217,236,234,0.6)","stroke-width":1.6},xt),yt("rect",{x:54,y:10,width:12,height:13,rx:2,fill:"rgba(217,236,234,0.6)"},xt);const Ct="tankclip",N=yt("defs",{},xt),C=yt("clipPath",{id:Ct},N);yt("rect",{x:41,y:23,width:38,height:84,rx:17},C);const Y=yt("rect",{x:41,y:23,width:38,height:84,fill:"#f2c228","clip-path":`url(#${Ct})`},xt);l.innerHTML=yh.map(at=>`<div class="spec"><i style="--c:${at.col}"></i><b>100%</b><span>${at.name}</span></div>`).join("");const et=[...l.querySelectorAll(".spec")];function St(at){const q=1+at/10,bt=Math.round(100/q),Q=[];return at<.5?Q.push("At the surface the whole atmosphere already presses on you: <em>1 bar</em>."):at<=10?Q.push(`Just ${at.toFixed(0)} m of seawater adds ${(at/10).toFixed(1)} bar. Air from the surface now fills only <em>${bt}%</em> of its space, so most of the squeeze happens near the top. That is why you equalise your ears early and often.`):at<=20?Q.push(`From 10 m to ${at.toFixed(0)} m your air only shrinks from 50% to <em>${bt}%</em>. The squeeze feels gentler deeper down, even though the pressure keeps rising.`):Q.push(`Every breath now holds <em>${q.toFixed(1)}×</em> as much air as at the surface, so a tank that would last an hour up top lasts about ${Math.round(60/q)} minutes here.`),at>=2.5&&at<9?Q.push("Look at the red sea fans: the deeper ones have already turned brown."):at>=9&&at<18?Q.push("Red has gone and orange is fading, but yellow still shows."):at>=18&&Q.push("Only greens and blues are left. <em>Switch on the torch</em> and the reds come back: the colour was there all along."),at>2&&Q.push("Watch the bubbles grow on their way up."),Q.join(" ")}let ft="";function $t(at){const q=1+at/10,bt=1/q;i.textContent=`${at.toFixed(at<10?1:0)} m`,r.textContent=`${q.toFixed(1)} bar`,s.textContent=`${Math.round(bt*100)}%`,o.textContent=`${Math.round(60/q)} min`;const Q=$(q),[Rt,Et]=Z(Q,40);J.setAttribute("x2",Rt.toFixed(1)),J.setAttribute("y2",Et.toFixed(1)),it.setAttribute("d",q>1.01?`M${Z(ct,46).join(" ")} A46 46 0 ${Q-ct>Math.PI?1:0} 1 ${Z(Q,46).map(lt=>lt.toFixed(1)).join(" ")}`:"");const Ht=44*Math.cbrt(bt);_t.setAttribute("r",Ht.toFixed(1)),wt.setAttribute("cx",(60-Ht*.32).toFixed(1)),wt.setAttribute("cy",(60-Ht*.32).toFixed(1)),wt.setAttribute("r",(Ht*.18).toFixed(1));const B=84*bt;Y.setAttribute("y",(107-B).toFixed(1)),Y.setAttribute("height",B.toFixed(1));const Mt=at+2;u.textContent=`${Mt.toFixed(at<10?1:0)} m`,yh.forEach((lt,ut)=>{const ht=Math.exp(-lt.k*Mt);et[ut].style.setProperty("--v",ht.toFixed(3)),et[ut].querySelector("b").textContent=`${ht<.01?"<1":Math.round(ht*100)}%`});const At=St(Math.round(at));At!==ft&&(a.innerHTML=At,ft=At)}function Lt(at){m+=(v-m)*Math.min(1,at*5);const q=m,bt=1+q/10;$t(q),t.setTransform(h,0,0,h,0,0),t.drawImage(A,0,0,f,d),t.fillStyle="rgba(255,214,150,0.9)",t.beginPath(),t.arc(f*.82,w*.55,w*.32,0,6.28),t.fill(),t.save(),t.globalCompositeOperation="lighter";for(let Dt=0;Dt<7;Dt++){const Gt=f*(.08+Dt*.12)+Math.sin(g*.25+Dt*1.7)*18,te=.07*(.6+.4*Math.sin(g*.6+Dt*2.1)),Ce=t.createLinearGradient(0,w,0,M(16));Ce.addColorStop(0,`rgba(210,255,248,${te})`),Ce.addColorStop(1,"rgba(210,255,248,0)"),t.fillStyle=Ce,t.beginPath(),t.moveTo(Gt-10,w),t.lineTo(Gt+12,w),t.lineTo(Gt+70,M(16)),t.lineTo(Gt-22,M(16)),t.fill()}t.restore(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=2,t.beginPath();for(let Dt=0;Dt<=60;Dt++){const Gt=Dt/60*f,te=w+Math.sin(Dt*.7+g*1.6)*2.2+Math.sin(Dt*.23-g)*1.4;Dt?t.lineTo(Gt,te):t.moveTo(Gt,te)}t.stroke();const Q=f*.2;t.fillStyle="rgba(14,30,38,0.75)",t.beginPath(),t.moveTo(Q-60,w-2),t.lineTo(Q+58,w-2),t.quadraticCurveTo(Q+40,w+12,Q-46,w+11),t.closePath(),t.fill(),t.strokeStyle="rgba(220,240,240,0.35)",t.lineWidth=1,t.setLineDash([3,4]),t.beginPath(),t.moveTo(Q+40,w+6),t.quadraticCurveTo(Q+30,M(15),Q+70,M(28.6)),t.stroke(),t.setLineDash([]),ot(!1);const Rt=f*.45,Et=M(q);for(const Dt of D){const Gt=Rt+f*.1+Math.cos(g*Dt.sp+Dt.ph)*f*.12+Dt.ox*20,te=Et-50+Math.sin(g*Dt.sp*1.3+Dt.ph)*26+Dt.oy*18,Ce=ce(b(te),0,Vn),Ge=an([240,200,50],Ce+1.5),_n=Math.cos(g*Dt.sp+Dt.ph+Math.PI/2)>0?-1:1;t.save(),t.translate(Gt,te),t.scale(_n,1),t.fillStyle=wn(Ge),t.beginPath(),t.ellipse(0,0,7,3.4,0,0,6.28),t.fill(),t.beginPath(),t.moveTo(-6,0),t.lineTo(-11,-3.5),t.lineTo(-11,3.5),t.fill(),t.restore()}const Ht=Math.min(f,d)*.29,B=V(Rt,Et+Math.sin(g*1.1)*3,q,Ht);if(x){const Dt=B.torchX,Gt=B.torchY,te=E(q)-Dt+40,Ce=new Path2D;Ce.moveTo(Dt,Gt),Ce.lineTo(Dt+te,Gt-te*.32),Ce.lineTo(Dt+te,Gt+te*.32),Ce.closePath(),t.save(),t.clip(Ce);const Ge=t.createRadialGradient(Dt,Gt,2,Dt,Gt,te);Ge.addColorStop(0,"rgba(255,244,214,0.55)"),Ge.addColorStop(1,"rgba(255,244,214,0.06)"),t.fillStyle=Ge,t.fillRect(Dt,Gt-te,te+60,te*2),ot(!0),t.restore()}const Mt=Math.min(f,d)*.07,At=Mt*Math.cbrt(1/bt),lt=B.handX-Ht*.05,ut=Et-Ht*.42;t.strokeStyle="rgba(230,248,248,0.5)",t.lineWidth=1,t.beginPath(),t.moveTo(B.handX,B.handY),t.quadraticCurveTo(lt+10,ut+At+20,lt,ut+At),t.stroke(),t.setLineDash([3,4]),t.strokeStyle="rgba(230,248,248,0.55)",t.beginPath(),t.arc(lt,ut,Mt,0,6.28),t.stroke(),t.setLineDash([]);const ht=t.createRadialGradient(lt-At*.35,ut-At*.4,At*.1,lt,ut,At);if(ht.addColorStop(0,"rgba(255,255,255,0.85)"),ht.addColorStop(.5,"rgba(190,240,245,0.35)"),ht.addColorStop(1,"rgba(160,225,235,0.55)"),t.fillStyle=ht,t.beginPath(),t.arc(lt,ut,At,0,6.28),t.fill(),t.fillStyle="#fff",t.font=`600 ${Math.max(11,At*.42)}px "JetBrains Mono", monospace`,t.textAlign="center",t.textBaseline="middle",t.fillText(`${Math.round(100/bt)}%`,lt,ut),t.font="19px Caveat, cursive",t.fillStyle="rgba(255,246,230,0.92)",t.fillText("one surface breath",lt,ut-Mt-12),t.textAlign="start",G-=at,G<=0&&q>.6){G=3.4;for(let Dt=0;Dt<9;Dt++)H.push({d0:q,d:q,x:B.mouthX+(_()-.5)*6,r0:2+_()*3.5,ph:_()*6.28,delay:Dt*.07})}for(let Dt=H.length-1;Dt>=0;Dt--){const Gt=H[Dt];if(Gt.delay>0){Gt.delay-=at;continue}if(Gt.d-=at*(1.6+Gt.r0*.25),Gt.d<=0){H.splice(Dt,1);continue}const te=Math.cbrt((1+Gt.d0/10)/(1+Gt.d/10)),Ce=Gt.r0*te,Ge=Gt.x+Math.sin(g*3+Gt.ph)*3+(Gt.d0-Gt.d)*1.2,_n=M(Gt.d);t.strokeStyle="rgba(225,250,252,0.85)",t.lineWidth=1.2,t.beginPath(),t.arc(Ge,_n,Ce,0,6.28),t.stroke(),t.fillStyle="rgba(255,255,255,0.55)",t.beginPath(),t.arc(Ge-Ce*.35,_n-Ce*.35,Ce*.28,0,6.28),t.fill()}const Ft=M(q);t.setLineDash([2,5]),t.strokeStyle="rgba(242,166,90,0.75)",t.lineWidth=1,t.beginPath(),t.moveTo(130,Ft),t.lineTo(Rt-Ht*.7,Ft),t.stroke(),t.setLineDash([]),t.fillStyle="#f2a65a",t.beginPath(),t.roundRect(8,Ft-13,120,26,13),t.fill(),t.fillStyle="#2a1a0c",t.font='600 12px "JetBrains Mono", monospace',t.textBaseline="middle",t.fillText(`${q.toFixed(1)} m · ${bt.toFixed(2)} bar`,18,Ft),t.font="20px Caveat, cursive",t.fillStyle="rgba(255,246,230,0.9)",t.textAlign="right",t.fillText("the same red sea fan,",E(2.2)-30,M(3.6)),t.fillText("at four depths",E(2.2)-30,M(4.6)),t.textAlign="start"}let Vt=performance.now();(function at(q){const bt=Math.min(.1,(q-Vt)/1e3);Vt=q,g+=bt,p&&Lt(bt),requestAnimationFrame(at)})(Vt),Lt(.016),addEventListener("keydown",at=>{p&&(at.key==="t"||at.key==="T")&&!at.target.closest("input, textarea")&&c.click()})}const n_={legend:"Murudeshwar lies about 19 km to the east-north-east; the Atmalinga story belongs to the mainland temple.",caves:"Sea caves along the cliffs: the 1908 account of pigeons, and swiftlets that nest in a cave.",reef:"The reef surveyed around the island: most dives were made at 8 to 15 m.",eagles:"White-bellied sea eagles nest in the fig trees on top of the island: 25 nests counted in 2008.",navy:"The Navy says its target is a rock about 1 km from the island. The exact spot is not published, so it is shown as a ring.",fishing:"The water around Netrani is also a fishing ground for boats from the coast.",divers:"Dive boats anchor off the reef; nobody needs to land.",today:"Visits are by boat from Murudeshwar, and the district closes the sea to water sports every monsoon."};function i_(){const n=document.getElementById("timeline");n.innerHTML=C0.map((i,r)=>{var s;return`
    <li class="tl${i.kind==="legend"?" legend":""}" data-i="${r}" data-map="${i.map||""}">
      <div class="tl-when">${i.when}</div>
      <div>
        <span class="tl-tag">${i.kind==="legend"?"Mainland legend":i.kind==="now"?"Now":"Documented"}</span>
        <h3>${i.title}</h3>
        <p>${i.body}</p>
        ${(s=i.src)!=null&&s.length?`<p class="tl-src">Source: ${i.src.map(o=>`<a href="${lr[o].url}" target="_blank" rel="noopener">${lr[o].short}</a>`).join(", ")}</p>`:""}
      </div>
    </li>`}).join(""),document.getElementById("sources").innerHTML=Object.values(lr).map(i=>`<li><a href="${i.url}" target="_blank" rel="noopener">${i.title}</a></li>`).join(""),r_();const t=[...n.querySelectorAll(".tl")],e=new IntersectionObserver(i=>{for(const r of i)r.isIntersecting&&Mh(r.target.dataset.map,r.target)},{rootMargin:"-45% 0px -45% 0px"});t.forEach(i=>e.observe(i)),Mh("legend",t[0])}let ea;function Mh(n,t){ea&&(ea.querySelectorAll("[data-layer]").forEach(e=>e.classList.toggle("is-on",e.dataset.layer===n)),document.getElementById("chron-cap").textContent=n_[n]||"",document.querySelectorAll(".tl.is-current").forEach(e=>e.classList.remove("is-current")),t==null||t.classList.add("is-current"))}function r_(){ea=document.getElementById("chron-svg");const n=u=>"M"+u.map(([f,d])=>`${f.toFixed(0)} ${(-d).toFixed(0)}`).join(" L")+"Z",t=(u,f)=>{let d=0,h=0;for(const[m,v]of u)d+=m,h+=v;return d/=u.length,h/=u.length,u.map(([m,v])=>{const g=m-d,p=v-h,y=Math.hypot(g,p)||1;return[m+g/y*f,v+p/y*f]})},e=n(Rn.island),i=n(Rn.islet),r=Math.atan2(-8490,Rn.poi.temple[0]),s=Math.cos(r)*1250,o=Math.sin(r)*1250,a=[40,90,150,220].map((u,f)=>`<path d="${n(t(Rn.island,u))}" fill="none" stroke="rgba(46,110,128,${.28-f*.05})" stroke-width="5"/>`).join(""),c=[[-700,300],[650,520],[-420,-760],[880,-300]].map(([u,f],d)=>`<g transform="translate(${u} ${f}) rotate(${d*70})"><path d="M-40 0 Q-10 -16 40 0 Q-10 16 -40 0Z" fill="#c4512f"/></g>`).join(""),l=[[-120,520],[420,300],[-380,-40],[260,-560]].map(([u,f])=>`<g transform="translate(${u} ${f})"><rect x="0" y="-60" width="8" height="70" fill="#1d2729"/><rect x="8" y="-60" width="60" height="40" fill="#c4512f"/><path d="M8 -60 L68 -20" stroke="#fff" stroke-width="9"/></g>`).join("");ea.innerHTML=`
    <defs>
      <radialGradient id="cm-sea" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#d7e6e2"/><stop offset="1" stop-color="#efe6d2"/></radialGradient>
      <pattern id="cm-hatch" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="40" stroke="#2e6e80" stroke-width="7" opacity="0.45"/></pattern>
      <radialGradient id="cm-canopy" cx="45%" cy="40%" r="60%"><stop offset="0" stop-color="#3f6b2f"/><stop offset="1" stop-color="#7d9a4f"/></radialGradient>
    </defs>
    <circle r="1380" fill="url(#cm-sea)"/>
    ${a}
    <g data-layer="reef"><path d="${n(t(Rn.island,220))}" fill="url(#cm-hatch)"/><path d="${n(t(Rn.island,40))}" fill="#d7e6e2"/></g>
    <g data-layer="divers">${l}</g>
    <g data-layer="fishing">${c}</g>
    <g data-layer="navy"><circle r="1000" fill="none" stroke="#c4512f" stroke-width="10" stroke-dasharray="40 30"/><text x="0" y="-1040" text-anchor="middle" class="cm-t">≈ 1 km</text></g>
    <path d="${e}" fill="#a7b07a" stroke="#1d2729" stroke-width="9"/>
    <path d="${i}" fill="#b9a982" stroke="#1d2729" stroke-width="7"/>
    <g data-layer="eagles"><path d="${n(t(Rn.island,-70))}" fill="url(#cm-canopy)" opacity="0.9"/><path d="M-60 -60 q60 -50 120 0 q-60 -20 -120 0z" fill="#f4efe4" stroke="#1d2729" stroke-width="5"/></g>
    <g data-layer="caves"><path d="${e}" fill="none" stroke="#c4512f" stroke-width="18" stroke-dasharray="6 26" stroke-linecap="round"/></g>
    <g data-layer="legend"><path d="M${(s*.35).toFixed(0)} ${(o*.35).toFixed(0)} L${s.toFixed(0)} ${o.toFixed(0)}" stroke="#1d2729" stroke-width="10" stroke-dasharray="30 20" marker-end="url(#cm-arrow)"/><text x="${(s*.62).toFixed(0)}" y="${(o*.62-40).toFixed(0)}" class="cm-t">Murudeshwar 19 km</text></g>
    <g data-layer="today"><path d="M${s.toFixed(0)} ${o.toFixed(0)} Q 700 300 120 520" fill="none" stroke="#c4512f" stroke-width="12" stroke-dasharray="34 22"/><path d="M80 500 q30 -14 70 0 q-30 14 -70 0z" fill="#1d2729"/></g>
    <g class="cm-static"><path d="M1180 -1180 l0 -120 m0 0 l-30 60 m30 -60 l30 60" stroke="#1d2729" stroke-width="10" fill="none"/><text x="1180" y="-1080" text-anchor="middle" class="cm-t">N</text>
      <path d="M-1250 1220 h500" stroke="#1d2729" stroke-width="12"/><text x="-1000" y="1180" text-anchor="middle" class="cm-t">500 m</text></g>
    <marker id="cm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#1d2729"/></marker>`}const Po={good:{cls:"st-good",label:"Dive season",col:"#5f8a4a"},edge:{cls:"st-edge",label:"Shoulder month",col:"#d39b45"},closed:{cls:"st-closed",label:"Monsoon: boats stay ashore",col:"#c4512f"}};function s_(){const n=document.getElementById("wheel"),t=document.getElementById("season-detail"),e="http://www.w3.org/2000/svg",i=(p,y,x)=>{const _=document.createElementNS(e,p);for(const w in y)_.setAttribute(w,y[w]);return x==null||x.append(_),_},r=(p,y,x,_)=>{const w=(E,A)=>`${(Math.cos(A)*E).toFixed(2)} ${(Math.sin(A)*E).toFixed(2)}`,S=_-x>Math.PI?1:0;return`M${w(y,x)} A${y} ${y} 0 ${S} 1 ${w(y,_)} L${w(p,_)} A${p} ${p} 0 ${S} 0 ${w(p,x)}Z`};i("circle",{r:196,fill:"none",stroke:"rgba(29,39,41,0.18)","stroke-dasharray":"2 6"},n);const s=Gs.map((p,y)=>{const x=-Math.PI/2+y/12*Math.PI*2+.012,_=-Math.PI/2+(y+1)/12*Math.PI*2-.012,w=i("g",{class:"m",tabindex:"0",role:"button","aria-label":`${p.name}: ${Po[p.status].label}`},n);i("path",{d:r(78,186,x,_),fill:Po[p.status].col,opacity:p.status==="closed"?.5:.88},w);const S=(x+_)/2,E=i("text",{x:(Math.cos(S)*140).toFixed(1),y:(Math.sin(S)*140+4).toFixed(1),"text-anchor":"middle",fill:"#fff"},w);return E.textContent=p.short.toUpperCase(),w.addEventListener("click",()=>f(y)),w.addEventListener("keydown",A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),f(y)),(A.key==="ArrowRight"||A.key==="ArrowDown")&&(A.preventDefault(),f((y+1)%12,!0)),(A.key==="ArrowLeft"||A.key==="ArrowUp")&&(A.preventDefault(),f((y+11)%12,!0))}),w}),o=i("line",{x1:0,y1:0,x2:0,y2:-52,stroke:"#1d2729","stroke-width":2,"stroke-linecap":"round",style:"transition: transform 0.5s cubic-bezier(.2,.8,.2,1)"},n);i("circle",{r:70,fill:"#f6f0e3",stroke:"rgba(29,39,41,0.15)"},n),n.append(o),i("circle",{r:5,fill:"#1d2729"},n);const a=i("g",{},n);[["in season","#5f8a4a"],["shoulder","#d39b45"],["monsoon ban","#c4512f"]].forEach(([p,y],x)=>{i("rect",{x:-38,y:12+x*13,width:8,height:8,rx:2,fill:y},a);const _=i("text",{x:-26,y:19.5+x*13,fill:"#3c4645",style:"font-size:9px"},a);_.textContent=p});let c=!1;const l=p=>{const y=n.getBoundingClientRect(),x=p.clientX-(y.left+y.width/2),_=p.clientY-(y.top+y.height/2);let w=Math.atan2(_,x)+Math.PI/2;w<0&&(w+=Math.PI*2),f(Math.floor(w/(Math.PI*2)*12)%12)};n.addEventListener("pointerdown",p=>{c=!0,n.setPointerCapture(p.pointerId),l(p)}),n.addEventListener("pointermove",p=>c&&l(p)),n.addEventListener("pointerup",()=>c=!1);let u=-1;function f(p,y){if(p===u)return;u=p;const x=Gs[p],_=Po[x.status];s.forEach((w,S)=>w.classList.toggle("is-on",S===p)),y&&s[p].focus(),o.style.transform=`rotate(${(p+.5)*30}deg)`,t.innerHTML=`
      <h3>${x.name}</h3>
      <span class="season-status ${_.cls}">${_.label}</span>
      <p>${x.note}</p>
      <dl class="season-facts">${R0.map(w=>`<div><dt>${w.k}</dt><dd><b>${w.v}</b> ${w.d} <a href="${lr[w.src].url}" target="_blank" rel="noopener" class="cite">${lr[w.src].short}</a></dd></div>`).join("")}</dl>`}const d=new Date().getMonth();f(Gs[d].status==="closed"?10:d);const h=Gs[d],m=Po[h.status],v=o_(new Date);document.getElementById("now-card").innerHTML=`
    <p class="now-k">Right now</p>
    <p class="now-m">${h.name}</p>
    <span class="season-status ${m.cls}">${m.label}</span>
    <p class="now-t">${h.note}</p>
    <dl class="now-sun"><div><dt>Sunrise</dt><dd>${Sh(v.rise)}</dd></div><div><dt>Sunset</dt><dd>${Sh(v.set)}</dd></div></dl>
    <p class="now-f">Sun times today at Murudeshwar, in Indian time, worked out from the sun's position. Dates and sea conditions change every year. The dive team confirms each trip.</p>`;const g=document.getElementById("day-line");g.style.setProperty("--n",Lc.length),g.innerHTML=Lc.map(p=>`<li><time>${p.time}</time><h4>${p.title}</h4><p>${p.text}</p></li>`).join(""),document.getElementById("getting").innerHTML=`<h3>Getting to Murudeshwar</h3><div class="ways">${P0.map(p=>`<div class="way"><span>${p.mode}</span><h4>${p.title}</h4><p>${p.text}</p></div>`).join("")}</div>`}function o_(n,t=14.094,e=74.485){const i=new Date(n.getTime()+198e5),r=i.getUTCFullYear(),s=Math.floor((Date.UTC(r,i.getUTCMonth(),i.getUTCDate())-Date.UTC(r,0,0))/864e5),o=2*Math.PI/365*(s-1),a=229.18*(75e-6+.001868*Math.cos(o)-.032077*Math.sin(o)-.014615*Math.cos(2*o)-.040849*Math.sin(2*o)),c=.006918-.399912*Math.cos(o)+.070257*Math.sin(o)-.006758*Math.cos(2*o)+907e-6*Math.sin(2*o)-.002697*Math.cos(3*o)+.00148*Math.sin(3*o),l=Math.PI/180,u=Math.acos(Math.cos(90.833*l)/(Math.cos(t*l)*Math.cos(c))-Math.tan(t*l)*Math.tan(c))/l;return{rise:720-4*(e+u)-a+330,set:720-4*(e-u)-a+330}}function Sh(n){const t=Math.round(n),e=Math.floor(t/60),i=t-e*60;return`${e%12||12}:${String(i).padStart(2,"0")} ${e<12?"am":"pm"}`}const a_={try:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 27c4-5 8-5 12 0s8 5 12 0" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="23" cy="15" r="3" fill="currentColor"/><circle cx="30" cy="11" r="1.6" fill="none" stroke="currentColor"/><circle cx="33" cy="6" r="1.1" fill="none" stroke="currentColor"/>',fun:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 25c6-6 12 6 18 0 3-3 6-3 8 0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 18l4-3 4 3-4 3z" fill="currentColor"/><path d="M27 31l3-2 3 2-3 2z" fill="currentColor"/>',course:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 19l11-5 11 5-11 5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 22v6c4 3 10 3 14 0v-6" fill="none" stroke="currentColor" stroke-width="1.6"/>',snorkel:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="12" y="19" width="16" height="8" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M31 30V12" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M8 31c5-3 10 3 15 0s10 3 15 0" fill="none" stroke="currentColor" stroke-width="1.2"/>',boat:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M11 26h24l-4 6H15z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M23 26V12l8 10h-8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 35c4-2 8 2 12 0s8 2 12 0 6 1 7 0" fill="none" stroke="currentColor" stroke-width="1.2"/>'};function l_(){const n=document.getElementById("experiences");let t=0;n.innerHTML=la.map((h,m)=>`
    <button class="xp" type="button" role="radio" aria-checked="${m===0}" tabindex="${m===0?0:-1}" data-i="${m}">
      <svg class="xp-icon" viewBox="0 0 46 46" aria-hidden="true">${a_[h.icon]}</svg>
      <h3>${h.title}</h3>
      <p>${h.text}</p>
      <span class="xp-meta">${h.meta}</span>
    </button>`).join("");const e=[...n.querySelectorAll(".xp")],i=(h,m)=>{t=h,e.forEach((v,g)=>{v.setAttribute("aria-checked",String(g===h)),v.tabIndex=g===h?0:-1}),m&&e[h].focus(),u()};e.forEach((h,m)=>{h.addEventListener("click",()=>i(m)),h.addEventListener("keydown",v=>{["ArrowRight","ArrowDown"].includes(v.key)&&(v.preventDefault(),i((m+1)%e.length,!0)),["ArrowLeft","ArrowUp"].includes(v.key)&&(v.preventDefault(),i((m+e.length-1)%e.length,!0))})});const r=document.getElementById("enquiry"),s=document.getElementById("preview"),o=document.getElementById("form-error"),a=r.elements.people;r.querySelectorAll("[data-step]").forEach(h=>h.addEventListener("click",()=>{a.value=String(Math.min(30,Math.max(1,(+a.value||1)+ +h.dataset.step))),u()}));const c=new Date;c.setMinutes(c.getMinutes()-c.getTimezoneOffset()),r.elements.date.min=c.toISOString().slice(0,10);function l(){const h=r.elements,m=la[t],v=h.date.value?new Date(h.date.value+"T00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"flexible, please suggest";return["Hello! I found you through the Netrani Island guide.","",`I'd like to ask about: ${m.title}`,`Name: ${h.name.value.trim()||"—"}`,`Phone: ${h.phone.value.trim()||"—"}`,`Preferred date: ${v}`,`People: ${h.people.value||1}`,h.notes.value.trim()?`Notes: ${h.notes.value.trim()}`:null,"","Could you share availability, what is included, eligibility and the price? Thank you!"].filter(g=>g!==null).join(`
`)}function u(){s.textContent=l()}r.addEventListener("input",u),u();const f=()=>{const h=r.elements,m=[];h.name.setAttribute("aria-invalid",String(!h.name.value.trim())),h.name.value.trim()||m.push("your name");const v=h.phone.value.replace(/\D/g,""),g=/^[+\d\s()-]+$/.test(h.phone.value.trim())&&v.length>=8&&v.length<=15;return h.phone.setAttribute("aria-invalid",String(!g)),g||m.push("a phone number we can call back"),o.hidden=!m.length,o.textContent=m.length?`Please add ${m.join(" and ")}.`:"",!m.length};r.addEventListener("submit",h=>{if(h.preventDefault(),!f())return;const m=encodeURIComponent(l());D0("whatsapp","booking_form",la[t].title),window.open(`https://wa.me/${L0.whatsapp}?text=${m}`,"_blank","noopener")});const d=document.getElementById("copy");d.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l()),d.textContent="Copied ✓"}catch{d.textContent="Select the text above to copy"}setTimeout(()=>d.textContent="Copy message",2200)})}const c_={hands:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M18 34c0-6 2-12 4-14m4 14V16m4 18V18m4 16V22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>',fins:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M14 22c8 0 14 4 16 10l8 6-12 1-6-6c-4-3-6-7-6-11z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 40c4-2 8 2 12 0s8 2 12 0" fill="none" stroke="currentColor" stroke-width="1.2"/>',feed:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M16 28c4-6 14-6 18 0-4 6-14 6-18 0z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M34 28l6-4v8z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>',take:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M17 36c2-8 6-14 10-18 2 4 6 6 10 6-2 6-8 12-20 12z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>',sun:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="27" cy="27" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M27 12v5m0 20v5M12 27h5m20 0h5M16 16l3 3m16 16l3 3M16 38l3-3m16-16l3-3" stroke="currentColor" stroke-width="1.4"/>',land:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M14 34c2-8 8-14 13-14s11 6 13 14z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 38c5-2 9 2 14 0s9 2 14 0 6 1 6 0" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>'};function u_(){document.getElementById("rules").innerHTML=I0.map(n=>`<li class="reveal"><svg viewBox="0 0 54 54" aria-hidden="true">${c_[n.icon]}</svg><div><b>${n.title}</b><p>${n.text}</p></div></li>`).join(""),document.getElementById("faq-list").innerHTML=U0.map(n=>`<details><summary>${n.q}</summary><p>${n.a}</p></details>`).join("")}function h_(){let n=null,t=!1,e,i,r,s,o=1,a=0,c=0,l=0,u=[],f,d;function h(S){const E=n.sampleRate*4,A=n.createBuffer(1,E,n.sampleRate),M=A.getChannelData(0);let b=0;for(let T=0;T<E;T++){const I=Math.random()*2-1;S==="brown"?(b=(b+.02*I)/1.02,M[T]=b*3.5):M[T]=I}return A}function m(S){const E=n.createBufferSource();return E.buffer=S,E.loop=!0,E.start(),E}function v(S,E,A){const M=n.createOscillator(),b=n.createGain();return M.frequency.value=S,b.gain.value=E,M.connect(b).connect(A),M.start(),M}function g(){n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain(),e.gain.value=0;const S=n.createDynamicsCompressor();S.threshold.value=-18,S.ratio.value=3,e.connect(S).connect(n.destination);const E=h("brown"),A=h("white");f=E,d=A,i=n.createGain(),i.gain.value=1,i.connect(e);const M=n.createBiquadFilter();M.type="lowpass",M.frequency.value=520,M.Q.value=.4;const b=n.createGain();b.gain.value=.55,m(E).connect(M).connect(b).connect(i),v(.11,.3,b.gain),v(.067,.18,b.gain),v(.09,260,M.frequency);const T=n.createBiquadFilter();T.type="bandpass",T.frequency.value=2600,T.Q.value=.6;const I=n.createGain();I.gain.value=.03,m(A).connect(T).connect(I).connect(i),v(.11,.028,I.gain),r=n.createGain(),r.gain.value=0,r.connect(e);const O=n.createBiquadFilter();O.type="lowpass",O.frequency.value=240,O.Q.value=.7;const z=n.createGain();z.gain.value=.9,m(E).connect(O).connect(z).connect(r),v(.05,60,O.frequency),r.muff=O;const F=n.createGain();F.gain.value=.05,F.connect(r),[55,82.4,110.3].forEach((G,W)=>{const X=n.createOscillator();X.type="sine",X.frequency.value=G,X.detune.value=W*4,X.connect(F),X.start()}),v(.03,.03,F.gain),s=n.createGain(),s.gain.value=0,s.connect(e);const U=n.createBiquadFilter();U.type="lowpass",U.frequency.value=420,U.Q.value=.8;const k=n.createGain();k.gain.value=.6,U.connect(k).connect(s),[[78,0],[117,7]].forEach(([G,W])=>{const X=n.createOscillator();X.type="sawtooth",X.frequency.value=G,X.detune.value=W;const st=n.createGain();st.gain.value=.05,X.connect(st).connect(U),X.start()}),v(9,.35,k.gain);const D=n.createBiquadFilter();D.type="bandpass",D.frequency.value=900,D.Q.value=.7;const H=n.createGain();H.gain.value=.06,m(A).connect(D).connect(H).connect(s),v(.7,.05,H.gain),u.push(setInterval(()=>{t&&a<.5&&o>.6&&Math.random()<.45&&_()},7e3))}function p(){const S=n.currentTime,E=n.createBufferSource(),A=n.createBiquadFilter(),M=n.createGain();E.buffer=d,A.type="bandpass",A.frequency.setValueAtTime(1500,S),A.frequency.linearRampToValueAtTime(2100,S+1.4),A.Q.value=1.1,M.gain.setValueAtTime(1e-4,S),M.gain.exponentialRampToValueAtTime(.05,S+.25),M.gain.setValueAtTime(.05,S+1.2),M.gain.exponentialRampToValueAtTime(1e-4,S+1.6),E.connect(A).connect(M).connect(r),E.start(S,Math.random()*2),E.stop(S+1.7)}function y(){const S=n.currentTime,E=n.createBufferSource(),A=n.createBiquadFilter(),M=n.createGain();E.buffer=f,A.type="lowpass",A.frequency.value=380,M.gain.setValueAtTime(1e-4,S),M.gain.exponentialRampToValueAtTime(.5,S+.12),M.gain.exponentialRampToValueAtTime(1e-4,S+1.3),E.connect(A).connect(M).connect(r),E.start(S,Math.random()*2),E.stop(S+1.4),x()}function x(){const S=n.currentTime,E=9+Math.floor(Math.random()*8);for(let A=0;A<E;A++){const M=S+A*(.035+Math.random()*.06),b=n.createOscillator(),T=n.createGain(),I=260+Math.random()*520;b.frequency.setValueAtTime(I,M),b.frequency.exponentialRampToValueAtTime(I*1.9,M+.07),T.gain.setValueAtTime(1e-4,M),T.gain.exponentialRampToValueAtTime(.05,M+.008),T.gain.exponentialRampToValueAtTime(1e-4,M+.09),b.connect(T).connect(r),b.start(M),b.stop(M+.1)}}function _(){const S=n.currentTime+.05,E=(A,M,b,T,I)=>{const O=n.createOscillator(),z=n.createGain(),F=n.createOscillator(),U=n.createGain(),k=n.createBiquadFilter();k.type="bandpass",k.frequency.value=520,k.Q.value=1.4,O.type="triangle",O.frequency.setValueAtTime(M,A),O.frequency.linearRampToValueAtTime(b,A+T),F.frequency.value=7,U.gain.value=9,F.connect(U).connect(O.frequency),z.gain.setValueAtTime(1e-4,A),z.gain.exponentialRampToValueAtTime(I,A+.06),z.gain.exponentialRampToValueAtTime(1e-4,A+T),O.connect(k).connect(z).connect(i),O.start(A),F.start(A),O.stop(A+T+.05),F.stop(A+T+.05)};E(S,360,400,.28,.025),E(S+.34,420,330,.55,.03)}function w(){if(!n)return;const S=n.currentTime;e.gain.setTargetAtTime(t?.55*(.3+.7*o):0,S,.4),i.gain.setTargetAtTime(1-a,S,.25),r.gain.setTargetAtTime(a,S,.25),r.muff.frequency.setTargetAtTime(260-Math.min(c,20)*6,S,.5),s.gain.setTargetAtTime(l*.9,S,.3)}return{async toggle(){return n||g(),t=!t,t&&n.state==="suspended"&&await n.resume(),w(),t},setUnder(S,E){(S!==a||Math.abs(E-c)>.5)&&(a=S,c=E,w())},setPresence(S){Math.abs(S-o)>.05&&(o=S,w())},setEngine(S){Math.abs(S-l)>.04&&(l=S,w())},splash(){if(!n||!t)return;const S=n.currentTime,E=n.createBufferSource(),A=n.createBiquadFilter(),M=n.createGain();E.buffer=d,A.type="lowpass",A.frequency.setValueAtTime(5200,S),A.frequency.exponentialRampToValueAtTime(380,S+.7),M.gain.setValueAtTime(1e-4,S),M.gain.exponentialRampToValueAtTime(.32,S+.03),M.gain.exponentialRampToValueAtTime(1e-4,S+.9),E.connect(A).connect(M).connect(i),E.start(S,Math.random()*2),E.stop(S+1),a>.5&&x()},plip(){if(!n||!t)return;const S=n.currentTime,E=n.createOscillator(),A=n.createGain();E.type="sine",E.frequency.setValueAtTime(1350,S),E.frequency.exponentialRampToValueAtTime(380,S+.11),A.gain.setValueAtTime(1e-4,S),A.gain.exponentialRampToValueAtTime(.09,S+.008),A.gain.exponentialRampToValueAtTime(1e-4,S+.22),E.connect(A).connect(e),E.start(S),E.stop(S+.25)},breathIn(){n&&t&&a>.5&&p()},breathOut(){n&&t&&a>.5&&y()},blip(){if(!n||!t)return;const S=n.currentTime,E=n.createOscillator(),A=n.createGain();E.frequency.setValueAtTime(880,S),E.frequency.exponentialRampToValueAtTime(620,S+.12),A.gain.setValueAtTime(1e-4,S),A.gain.exponentialRampToValueAtTime(.06,S+.01),A.gain.exponentialRampToValueAtTime(1e-4,S+.18),E.connect(A).connect(e),E.start(S),E.stop(S+.2)}}}N0();F0();function f_(){const n=(tt,pt=document)=>pt.querySelector(tt),t=(tt,pt=document)=>[...pt.querySelectorAll(tt)];let e="";{const tt=Es.map(Xe=>Xe[0]),pt=Es.map(Xe=>Xe[1]),Yt=Math.min(...tt),Bt=Math.max(...tt),me=Math.min(...pt),Ue=Math.max(...pt),we=32/Math.max(Bt-Yt,Ue-me),mn=Es.map(([Xe,fe],de)=>`${de?"L":"M"}${(4+(Xe-Yt)*we+(32-(Bt-Yt)*we)/2).toFixed(1)} ${(4+(fe-me)*we).toFixed(1)}`).join(" ")+"Z";t(".brand-heart").forEach(Xe=>Xe.setAttribute("d",mn)),e=mn}const i=n("#story"),r=n("#stage"),s=n("#topbar"),o=j1(),c=matchMedia("(pointer: coarse)").matches||innerWidth<760?.5:1;let l=null,u=null;try{if(!document.createElement("canvas").getContext("webgl2"))throw new Error("no webgl2");l=k2(n("#gl"),{quality:c}),u=W2(n("#chart"))}catch(tt){console.warn("3D stage unavailable:",tt),n("#nogl").hidden=!1,r.classList.add("is-paper")}const f=()=>{const tt=i.offsetTop,pt=i.offsetHeight-innerHeight;return{top:tt,h:pt}},d=[0,.425,.53,.66,.835,1],h=[0,574,994,1594,2394,2619],m=h.map(tt=>tt/h[h.length-1]),v=(tt,pt,Yt)=>{for(let Bt=1;Bt<tt.length;Bt++)if(Yt<=tt[Bt])return pt[Bt-1]+(pt[Bt]-pt[Bt-1])*(Yt-tt[Bt-1])/(tt[Bt]-tt[Bt-1]);return pt[pt.length-1]},g=tt=>v(m,d,ce(tt)),p=tt=>v(d,m,ce(tt)),y=()=>{const{top:tt,h:pt}=f();return g(ce((scrollY-tt)/pt))},x=1,_=.085,w={v:0,t:0},S=tt=>{const pt=tt.event;if(!pt||!pt.type.startsWith("touch"))return!0;if(pt.type==="touchstart")return w.v=0,w.t=pt.timeStamp,!0;if(pt.type==="touchmove"){const Yt=Math.max(4,pt.timeStamp-w.t)/1e3;return w.v=w.v*.4+tt.deltaY/Yt*.6,w.t=pt.timeStamp,!0}if(pt.type==="touchend"||pt.type==="touchcancel"){E&&(E.isTouching=!1);const Yt=pt.timeStamp-w.t>110?0:w.v,Bt=Math.sign(Yt)*Math.min(Math.abs(Yt)*.32,1.2*innerHeight);if(E&&Math.abs(Bt)>2&&!E.isStopped){const me=E.animatedScroll,Ue=Math.max(.35,2*Math.abs(Bt)/(x*innerHeight));E.scrollTo(Math.max(0,Math.min(E.limit,me+Bt)),{duration:Ue,easing:we=>1-(1-we)*(1-we)})}return!1}return!0},E=o?null:new q0({lerp:_,wheelMultiplier:.85,smoothWheel:!0,syncTouch:!0,syncTouchLerp:.075,allowNestedScroll:!0,autoRaf:!1,virtualScroll:S,prevent:tt=>{var pt;return((pt=tt.matches)==null?void 0:pt.call(tt,"#lab-canvas, .wheel"))||!1}});let A=null,M=!1;if(E){const tt=E.scrollTo.bind(E);E.scrollTo=(pt,Yt={})=>(M=Yt.programmatic===!1,M||(A=null),tt(pt,Yt))}E&&E.on("virtual-scroll",()=>{A=null}),addEventListener("keydown",tt=>{var Yt,Bt;if(!E||tt.defaultPrevented||tt.ctrlKey||tt.metaKey||tt.altKey||document.querySelector("dialog[open]")||(Bt=(Yt=tt.target).closest)!=null&&Bt.call(Yt,'input, textarea, select, button, [contenteditable], [role="slider"], [role="tab"]'))return;const pt={ArrowDown:.15,ArrowUp:-.15,PageDown:.85,PageUp:-.85," ":tt.shiftKey?-.85:.85}[tt.key];pt!==void 0&&(tt.preventDefault(),A=Math.max(0,Math.min(E.limit,(A??E.targetScroll)+pt*innerHeight)))});const b=tt=>tt<.5?2*tt*tt:1-(-2*tt+2)**2/2;new MutationObserver(()=>{E&&(document.querySelector("dialog[open]")?E.stop():E.start())}).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["open"]});const T=document.createElement("div");T.className="curtain",T.setAttribute("aria-hidden","true");{const tt="http://www.w3.org/2000/svg",pt=document.createElementNS(tt,"svg"),Yt=document.createElementNS(tt,"path");pt.setAttribute("viewBox","0 0 40 40"),Yt.setAttribute("d",e),pt.append(Yt),T.append(pt)}document.body.append(T);const I={phase:0,at:0,quiet:0,y:null},O=tt=>{if(A=null,o){scrollTo(0,tt);return}const pt=Math.abs(tt-scrollY);pt>innerHeight*3?(I.phase=1,I.at=performance.now(),I.y=tt,T.classList.add("is-on")):E?E.scrollTo(tt,{duration:Math.max(.9,1.6*pt/(x*innerHeight)),easing:b}):scrollTo({top:tt,behavior:"smooth"})},z=tt=>{const{top:pt,h:Yt}=f();O(pt+p(tt)*Yt+2)};t('a[href^="#"]:not([data-jump])').forEach(tt=>tt.addEventListener("click",pt=>{const Yt=tt.getAttribute("href").slice(1),Bt=Yt&&document.getElementById(Yt);Bt&&(pt.preventDefault(),Et(),O(Math.max(0,Bt.getBoundingClientRect().top+scrollY-64)))}));for(const tt of t(".beat")){const pt=parseFloat(tt.style.getPropertyValue("--p"))||0;tt.dataset.p=pt,tt.style.setProperty("--p",p(pt).toFixed(4))}const F=new URLSearchParams(location.search).has("probe"),U={on:!1,left:0,dt:.1};F&&(window.__netrani={stage:l,unwarp:p,PACE:x,setTime:tt=>{B=tt},get lenis(){return E},hold:tt=>{U.on=tt,U.left=0},step:(tt,pt=.1)=>{U.left=tt,U.dt=pt}}),t("[data-jump]").forEach(tt=>tt.addEventListener("click",pt=>{pt.preventDefault(),z(parseFloat(tt.dataset.jump)),Et()}));const k=n("#labels"),D=z0.map(tt=>{const pt=document.createElement("div");return pt.className="tag",pt.innerHTML=`<span class="tag-text">${tt.text}</span><span class="tag-stem"></span>`,k.append(pt),{...tt,el:pt,pos:P2[tt.at]}}),H=n("#fieldnote");let G=null;const W="http://www.w3.org/2000/svg",X=document.createElementNS(W,"svg");X.setAttribute("class","ink"),X.setAttribute("aria-hidden","true"),k.append(X);const st=l?Ic.map((tt,pt)=>{const Yt=document.createElement("button");Yt.type="button",Yt.className="anno",Yt.setAttribute("aria-expanded","false"),Yt.setAttribute("aria-label",`${pt+1}. ${tt.title}: open field note`),Yt.innerHTML=`<span class="anno-in"><span class="anno-num">${pt+1}</span><span class="anno-title">${tt.title}</span></span>`,Yt.addEventListener("click",()=>gt(pt)),k.append(Yt);const Bt=(Xe,fe,de)=>{const ie=document.createElementNS(W,Xe);return ie.setAttribute("class",fe),de&&ie.setAttribute("r",de),X.append(ie),ie},me=Bt("path","anno-line"),Ue=Bt("circle","anno-ring",10),we=Bt("circle","anno-dot",3.6);Yt.addEventListener("pointerenter",()=>me.classList.add("is-hot")),Yt.addEventListener("pointerleave",()=>me.classList.remove("is-hot"));const mn=tt.y!=null?tt.y:l.T.heightAt(tt.x,tt.z)+(tt.lift||6);return{...tt,el:Yt,y:mn,path:me,ring:Ue,dot:we}}):[],ot=document.createElement("div");ot.className="dial-n",ot.innerHTML='<svg viewBox="-30 -30 60 60" aria-hidden="true"><circle r="27" fill="none" stroke="currentColor" stroke-opacity="0.35"/><circle r="21" fill="none" stroke="currentColor" stroke-opacity="0.2"/><g class="dial-needle"><path d="M0 -24 L5 0 L0 4 L-5 0 Z" fill="#c4512f"/><path d="M0 24 L5 0 L0 -4 L-5 0 Z" fill="currentColor" fill-opacity="0.55"/><text y="-30" text-anchor="middle">N</text></g></svg>',r.append(ot);const V=ot.querySelector(".dial-needle"),nt=document.createElement("div");nt.className="drag-hint",nt.innerHTML='<svg viewBox="0 0 40 16" aria-hidden="true"><path d="M4 8h32M4 8l5-4M4 8l5 4M36 8l-5-4M36 8l-5 4"/></svg><span>drag to turn the specimen · tap a number for its field note</span><small>coastline from OpenStreetMap; relief and seabed modelled, heights stretched so the layers read</small>',r.append(nt);function gt(tt){const pt=Ic[tt];if(G===tt)return Tt();st.forEach((Yt,Bt)=>Yt.el.setAttribute("aria-expanded",String(Bt===tt))),G=tt,n(".fieldnote-kicker",H).textContent=pt.kicker,n("h3",H).textContent=pt.title,n(".fieldnote-body",H).textContent=pt.body,n(".fieldnote-hand",H).textContent=pt.hand||"",H.hidden=!1,q.blip()}function Tt(){H.hidden=!0,G=null,st.forEach(tt=>tt.el.setAttribute("aria-expanded","false"))}n(".fieldnote-close",H).addEventListener("click",Tt),addEventListener("keydown",tt=>{tt.key==="Escape"&&(Tt(),Et())});const Nt=40;function yt(tt){if(X.classList.toggle("is-on",tt),ot.classList.toggle("is-on",tt),nt.classList.toggle("is-on",tt),!tt){for(const de of st)de.el.classList.remove("is-on");return}const pt=r.clientWidth,Yt=r.clientHeight,Bt=l.CORE_R,me=l.project(0,-40,0);let Ue=0;for(let de=0;de<24;de++){const ie=de/24*Math.PI*2,ge=l.project(Math.cos(ie)*Bt,0,Math.sin(ie)*Bt);Ue=Math.max(Ue,Math.abs(ge.x-me.x))}const we=pt<700,mn=st.map(de=>{const ie=l.project(de.x,de.y,de.z);let ge=ie.x-me.x,Qt=ie.y-me.y,Le=Math.hypot(ge,Qt);Le<1&&(ge=1,Qt=0,Le=1),ge/=Le,Qt/=Le;const L=ge>=0?1:-1,K=we?ie.x+ge*46:me.x+L*(Ue+36)+ge*10,dt=we?ie.y+Qt*46:ie.y+Qt*40;return{p:de,A:ie,dx:ge,dy:Qt,side:L,lx:K,ly:dt}});if(!we)for(const de of[1,-1]){const ie=mn.filter(Qt=>Qt.side===de).sort((Qt,Le)=>Qt.ly-Le.ly);for(let Qt=1;Qt<ie.length;Qt++)ie[Qt].ly-ie[Qt-1].ly<Nt&&(ie[Qt].ly=ie[Qt-1].ly+Nt);const ge=Yt-80;for(let Qt=ie.length-1;Qt>=0;Qt--)ie[Qt].ly=Math.min(ie[Qt].ly,ge-(ie.length-1-Qt)*Nt);for(let Qt=0;Qt<ie.length;Qt++)ie[Qt].ly=Math.max(ie[Qt].ly,96+Qt*Nt)}for(const de of mn){const{p:ie,A:ge,side:Qt}=de;ie.w||(ie.w=ie.el.firstChild.offsetWidth);const Le=(ie.w||160)+(Qt<0&&!we?64:18),L=Qt>0?Math.min(de.lx,pt-Le):Math.max(de.lx,Le),K=de.ly;ie.el.classList.add("is-on"),ie.el.classList.toggle("left",Qt<0),ie.el.style.transform=`translate(${L.toFixed(1)}px, ${K.toFixed(1)}px)`;const dt=ge.x+de.dx*36,mt=ge.y+de.dy*36,rt=L-Qt*42;ie.path.setAttribute("d",`M${ge.x.toFixed(1)} ${ge.y.toFixed(1)} C${dt.toFixed(1)} ${mt.toFixed(1)} ${rt.toFixed(1)} ${K.toFixed(1)} ${L.toFixed(1)} ${K.toFixed(1)}`);for(const It of[ie.dot,ie.ring])It.setAttribute("cx",ge.x.toFixed(1)),It.setAttribute("cy",ge.y.toFixed(1))}const Xe=l.project(0,-150,0),fe=l.project(0,-150,-600);V.setAttribute("transform",`rotate(${(Math.atan2(fe.x-Xe.x,-(fe.y-Xe.y))*180/Math.PI).toFixed(1)})`)}l&&n("#gl").addEventListener("click",tt=>{if(tt.button!==0||y()>.86)return;const pt=l.tap(tt.clientX,tt.clientY);pt==="ripple"?q.plip():pt==="bubbles"&&q.blip()});const Ot=document.createElement("div");Ot.className="idle-hint",Ot.setAttribute("aria-hidden","true"),Ot.innerHTML='<span>Scroll to keep going</span><svg viewBox="0 0 20 12"><path d="M2 2l8 8 8-8"/></svg>',r.append(Ot);let ct=performance.now(),R=scrollY;if(l){const tt=n("#gl");tt.addEventListener("pointerdown",pt=>{y()>.88&&(l.startDrag(pt),tt.setPointerCapture(pt.pointerId))}),tt.addEventListener("pointermove",pt=>l.moveDrag(pt)),tt.addEventListener("pointerup",()=>l.endDrag()),tt.addEventListener("pointercancel",()=>l.endDrag())}const $=["hull","banner"].map(tt=>{const pt=document.createElement("a");return pt.className="brand-link",pt.dataset.kind=tt,pt.href="https://murudeshwar.co.in/",pt.target="_blank",pt.rel="noopener",pt.setAttribute("aria-label","Murudeshwar.co.in (opens in a new tab)"),pt.innerHTML='<span class="brand-link-tip">Visit Murudeshwar.co.in <span aria-hidden="true">↗</span></span>',pt.tabIndex=-1,k.append(pt),pt}),Z=[];function it(tt){const pt=tt&&l?l.brandRects():[];for(const Yt of $){let Bt=null;for(const we of pt)we.kind===Yt.dataset.kind&&!we.behind&&(!Bt||we.facing>Bt.facing)&&(Bt=we);const me=6;let Ue=!!Bt&&Bt.facing>.3&&Bt.w>70&&Bt.h>10&&Bt.x>8&&Bt.y>60&&Bt.x+Bt.w<innerWidth-8&&Bt.y+Bt.h<innerHeight-8;if(Ue){for(const we of Z)if(Bt.x<we.right&&Bt.x+Bt.w>we.left&&Bt.y<we.bottom&&Bt.y+Bt.h>we.top){Ue=!1;break}}Yt.classList.toggle("is-on",Ue),Yt.tabIndex=Ue?0:-1,Ue&&(Yt.style.transform=`translate(${(Bt.x-me).toFixed(1)}px, ${(Bt.y-me).toFixed(1)}px)`,Yt.style.width=`${(Bt.w+me*2).toFixed(1)}px`,Yt.style.height=`${(Bt.h+me*2).toFixed(1)}px`)}}const J=n("#hud"),vt=n("#gauge-scale"),_t=n("#gauge-mark"),wt=n("#depth-read"),xt=20;for(let tt=0;tt<=xt;tt+=1){const pt=document.createElement("i");if(tt%5===0){pt.className="major";const Yt=document.createElement("b");Yt.textContent=`${tt}`,Yt.style.top=`${tt/xt*100}%`,vt.append(Yt)}pt.style.top=`${tt/xt*100}%`,vt.append(pt)}const Ct=t("#swatches i"),N=[[226,59,46,.35],[240,138,36,.2],[244,208,63,.07],[76,175,80,.05],[47,127,216,.02]],C=[10,58,74],Y=[.613,.646,.66,.69,.72,.775,.79,.806,.818,.835],et=[0,3,6,13,21,33,38,43,45,48],St=tt=>tt<=Y[0]?0:tt>=Y[Y.length-1]?48:(()=>{let pt=1;for(;tt>Y[pt];)pt++;const Yt=(tt-Y[pt-1])/(Y[pt]-Y[pt-1]);return et[pt-1]+(et[pt]-et[pt-1])*Yt})(),ft=n("#hud-time"),$t=n("#hud-tank");function Lt(tt,pt,Yt=0){if(J.classList.toggle("is-on",pt),!pt)return;const Bt=St(Yt);ft.textContent=`${Math.floor(Bt)} min`,$t.textContent=`${Math.round(200-Bt*2.75)} bar`,_t.style.top=`${ce(tt/xt)*100}%`,wt.textContent=tt.toFixed(1);const me=1+tt/10;n("#hud-bar").textContent=`${me.toFixed(1)} bar`,n("#hud-vol").textContent=`${Math.round(100/me)}%`;const Ue=tt+2;Ct.forEach((we,mn)=>{const[Xe,fe,de,ie]=N[mn],ge=Math.exp(-ie*Ue);we.style.background=`rgb(${Math.round(Xe*ge+C[0]*(1-ge))},${Math.round(fe*ge+C[1]*(1-ge))},${Math.round(de*ge+C[2]*(1-ge))})`})}const Vt=t("#rail button"),at=tt=>tt<.18?0:tt<.36?1:tt<.56?2:tt<.82?3:4,q=h_(),bt=n("#sound");bt.addEventListener("click",async()=>{const tt=await q.toggle();bt.setAttribute("aria-pressed",String(tt)),bt.setAttribute("aria-label",tt?"Turn off the sound":"Turn on the sound of the sea")});const Q=n("#menu"),Rt=n("#nav");function Et(){Rt.classList.remove("is-open"),Q.setAttribute("aria-expanded","false")}Q.addEventListener("click",()=>{const tt=!Rt.classList.contains("is-open");Rt.classList.toggle("is-open",tt),Q.setAttribute("aria-expanded",String(tt))}),t("#nav a:not([data-jump])").forEach(tt=>tt.addEventListener("click",Et));let Ht=performance.now(),B=0,Mt=-1;const At={in:-1,out:-1};let lt=0;const ut=n("#dock"),ht=t(".beat");let Ft=!1;const Dt=()=>{const tt=innerWidth/innerHeight<.8;if(tt!==Ft&&(Ft=tt,document.documentElement.classList.toggle("is-docked",tt),!tt))for(const pt of ht)pt.classList.remove("is-on")};Dt(),addEventListener("resize",Dt);function Gt(tt){requestAnimationFrame(Gt);let pt=Math.min(.1,Math.max(0,(tt-Ht)/1e3));if(Ht=tt,U.on){if(U.left<=0)return;U.left--,pt=U.dt}if(B+=o?pt*.35:pt,E){const fe=E.animate;if(A!==null&&(E.isScrolling==="native"||Math.abs(A-E.animatedScroll)<1?A=null:E.scrollTo(A,{programmatic:!1,lerp:_})),M&&fe.isRunning&&fe.lerp){const de=Math.max(.004166666666666667,Math.min(.25,(tt-(E.time||tt))/1e3)),ie=x*innerHeight*de/(1-Math.exp(-60*fe.lerp*de)),ge=Math.max(fe.value-ie,Math.min(fe.value+ie,fe.to));ge!==fe.to&&(fe.to=ge,E.targetScroll=ge)}E.raf(tt)}I.phase===1&&tt-I.at>230&&(I.y!=null&&(E?E.scrollTo(I.y,{immediate:!0,force:!0}):scrollTo(0,I.y),I.y=null),Mt=y(),I.phase=2,I.at=tt,T.classList.remove("is-on"),I.quiet=tt+700),I.phase===2&&tt>I.quiet&&(I.phase=0);const Yt=y();{const{h:fe}=f(),de=p(Mt),ie=p(Yt),ge=(ie-de)*fe/innerHeight;if(o||Mt<0||Math.abs(ge)<1e-4)Mt=Yt;else if(Math.abs(ge)>2.5&&I.phase!==1&&tt>I.quiet)I.phase=1,I.at=tt,I.y=null,T.classList.add("is-on");else if(I.phase!==1){const Qt=1.35*x*innerHeight*pt/Math.max(fe,1);Mt=g(de+Math.max(-Qt,Math.min(Qt,(ie-de)*(1-Math.exp(-pt*(E?12:7))))))}}const Bt=Mt,{top:me,h:Ue}=f(),we=scrollY<me+Ue+innerHeight,mn=Bt>.845||Bt>.36&&Bt<.432;r.classList.toggle("is-paper",mn||!l),s.classList.toggle("is-paper",mn&&we),s.classList.toggle("is-solid",!we||scrollY>me+Ue-40),ut.classList.toggle("is-on",scrollY>me+Ue*.95&&!te("#dive"));const Xe=at(Bt);Vt.forEach((fe,de)=>fe.classList.toggle("is-on",de===Xe));{const fe=[0,.18,.36,.56,.82,1];Vt[Xe]&&Vt[Xe].style.setProperty("--prog",ce((Bt-fe[Xe])/(fe[Xe+1]-fe[Xe])).toFixed(3))}if(Math.abs(scrollY-R)>2&&(ct=tt,R=scrollY),Ot.classList.toggle("is-on",we&&Bt>.03&&Bt<.84&&tt-ct>6500&&I.phase===0),l&&we){const fe=l.update(Bt,B,pt);u&&u.draw(Bt,B,l.worldPerPixelTopDown(),fe.cross),l.render(pt),Lt(fe.depthM,fe.under===1&&Bt>.61&&Bt<.83,Bt),q.setUnder(fe.under,fe.depthM),q.setPresence(1-zt(.83,.9,Bt)),q.setEngine(fe.speed*fe.crossW),fe.splashes>lt&&q.splash(),lt=fe.splashes;const de=Math.floor((B-1.6)/5),ie=Math.floor((B-3.8)/5);de>At.in&&q.breathIn(),ie>At.out&&q.breathOut(),At.in=de,At.out=ie;for(const Qt of D){const Le=Bt>Qt.from&&Bt<Qt.to;if(Qt.el.classList.toggle("is-on",Le),Le){const L=l.project(Qt.pos[0],40,Qt.pos[1]);Qt.el.style.transform=`translate(${L.x}px, ${L.y}px) translate(-50%, -100%)`}}const ge=Bt>.9;if(yt(ge),(!ge||scrollY>me+Ue+160)&&G!==null&&Tt(),Z.length=0,Ft){let Qt=null,Le=.55*innerHeight;for(const L of ht){if(L.classList.contains("beat-hero")){const dt=L.getBoundingClientRect(),mt=ce((dt.bottom-70)/150)*ce((innerHeight-dt.top)/150);L.style.opacity=mt.toFixed(3);continue}const K=Math.abs(scrollY-(me+p(+L.dataset.p)*Ue));K<Le&&(Le=K,Qt=L)}for(const L of ht)L.classList.contains("beat-hero")||(L.style.opacity="",L.classList.toggle("is-on",L===Qt));Qt&&Z.push(Qt.getBoundingClientRect()),document.documentElement.style.setProperty("--dock-h",Qt?`${Math.round(innerHeight-Qt.getBoundingClientRect().top+10)}px`:"0px")}else for(const Qt of ht){const Le=Qt.getBoundingClientRect();if(Le.bottom<-50||Le.top>innerHeight+50)continue;const L=ce((Le.bottom-70)/150)*ce((innerHeight-Le.top)/150);Qt.style.opacity=L.toFixed(3),L>.15&&Z.push(Le)}it(Bt>.425&&Bt<.61&&fe.under===0)}else it(!1),q.setPresence(0),G!==null&&Tt();F&&(window.__frames=(window.__frames||0)+1)}function te(tt){const pt=n(tt).getBoundingClientRect();return pt.top<innerHeight&&pt.bottom>0}requestAnimationFrame(Gt),J2(q),e_(),i_(),s_(),l_(),u_();const Ce=t("#nav a:not([data-jump])"),Ge=new IntersectionObserver(tt=>{for(const pt of tt)pt.isIntersecting&&Ce.forEach(Yt=>Yt.classList.toggle("is-active",Yt.getAttribute("href")===`#${pt.target.id}`))},{rootMargin:"-45% 0px -50% 0px"});["field-guide","dive-lab","chronicle","plan"].forEach(tt=>Ge.observe(document.getElementById(tt)));const _n=new IntersectionObserver(tt=>tt.forEach(pt=>pt.isIntersecting&&pt.target.classList.add("is-in")),{rootMargin:"0px 0px -10% 0px"});t(".section-head, .tl, .reveal").forEach(tt=>_n.observe(tt))}requestAnimationFrame(()=>requestAnimationFrame(f_));
