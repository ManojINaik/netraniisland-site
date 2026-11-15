var Nf=Object.defineProperty;var Ff=(n,t,e)=>t in n?Nf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Yt=(n,t,e)=>Ff(n,typeof t!="symbol"?t+"":t,e);import{S as br,a as lr,T as zf,M as ho,b as Of,D as Su,G as kf,E as Va,t as Bf,C as Hf,R as Vf,F as Wf,H as Gf,c as y0,i as Xf,d as qf}from"./leads-DwjXKWHj.js";var wu="1.3.27";function M0(n,t,e){return Math.max(n,Math.min(t,e))}function $f(n,t,e){return(1-e)*n+e*t}function Yf(n,t,e,i){return $f(n,t,1-Math.exp(-e*i))}function jf(n,t){return(n%t+t)%t}var Zf=class{constructor(){Yt(this,"isRunning",!1);Yt(this,"value",0);Yt(this,"from",0);Yt(this,"to",0);Yt(this,"currentTime",0);Yt(this,"lerp");Yt(this,"duration");Yt(this,"easing");Yt(this,"onUpdate")}advance(n){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=M0(0,this.currentTime/this.duration,1);t=i>=1;const r=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Yf(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(n,t,{lerp:e,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=t,this.lerp=e,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Kf(n,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,n.apply(this,i)},t)}}var Jf=class{constructor(n,t,{autoResize:e=!0,debounce:i=250}={}){Yt(this,"width",0);Yt(this,"height",0);Yt(this,"scrollHeight",0);Yt(this,"scrollWidth",0);Yt(this,"debouncedResize");Yt(this,"wrapperResizeObserver");Yt(this,"contentResizeObserver");Yt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Yt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Yt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=t,e&&(this.debouncedResize=Kf(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,t;(n=this.wrapperResizeObserver)==null||n.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},S0=class{constructor(){Yt(this,"events",{})}emit(n,...t){var i;const e=this.events[n]||[];for(let r=0,s=e.length;r<s;r++)(i=e[r])==null||i.call(e,...t)}on(n,t){return this.events[n]?this.events[n].push(t):this.events[n]=[t],()=>{var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}}off(n,t){var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}destroy(){this.events={}}};const Qf=100/6,Ci={passive:!1};function bu(n,t){return n===1?Qf:n===2?t:1}var td=class{constructor(n,t={wheelMultiplier:1,touchMultiplier:1}){Yt(this,"touchStart",{x:0,y:0});Yt(this,"lastDelta",{x:0,y:0});Yt(this,"window",{width:0,height:0});Yt(this,"emitter",new S0);Yt(this,"onTouchStart",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Yt(this,"onTouchMove",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n,i=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Yt(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Yt(this,"onWheel",n=>{let{deltaX:t,deltaY:e,deltaMode:i}=n;const r=bu(i,this.window.width),s=bu(i,this.window.height);t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:n})});Yt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ci),this.element.addEventListener("touchstart",this.onTouchStart,Ci),this.element.addEventListener("touchmove",this.onTouchMove,Ci),this.element.addEventListener("touchend",this.onTouchEnd,Ci)}on(n,t){return this.emitter.on(n,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ci),this.element.removeEventListener("touchstart",this.onTouchStart,Ci),this.element.removeEventListener("touchmove",this.onTouchMove,Ci),this.element.removeEventListener("touchend",this.onTouchEnd,Ci)}};const Eu=n=>Math.min(1,1.001-2**(-10*n));var ed=class{constructor({wrapper:n=window,content:t=document.documentElement,eventsTarget:e=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:c,lerp:l=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:v=!0,prevent:g,virtualScroll:p,overscroll:y=!0,autoRaf:x=!1,anchors:_=!1,autoToggle:w=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:C=E,stopInertiaOnNavigate:M=!1,respectReducedMotion:b=!0}={}){Yt(this,"_isScrolling",!1);Yt(this,"_isStopped",!1);Yt(this,"_isLocked",!1);Yt(this,"_preventNextNativeScrollEvent",!1);Yt(this,"_resetVelocityTimeout",null);Yt(this,"_rafId",null);Yt(this,"_isDraggingSelection",!1);Yt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Yt(this,"isTouching");Yt(this,"isIos");Yt(this,"time",0);Yt(this,"userData",{});Yt(this,"lastVelocity",0);Yt(this,"velocity",0);Yt(this,"direction",0);Yt(this,"options");Yt(this,"targetScroll");Yt(this,"animatedScroll");Yt(this,"animate",new Zf);Yt(this,"emitter",new S0);Yt(this,"dimensions");Yt(this,"virtualScroll");Yt(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Yt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Yt(this,"onTransitionEnd",n=>{var t;(t=n.propertyName)!=null&&t.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Yt(this,"onClick",n=>{const t=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){const i=t.find(r=>e.host===r.host&&e.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Yt(this,"onPointerDown",n=>{n.button===1&&this.reset()});Yt(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:t,deltaY:e,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const l=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(c.find(m=>{var v,g,p,y,x;return m instanceof HTMLElement&&(typeof l=="function"&&(l==null?void 0:l(m))||((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent"))||u==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-horizontal"))||r&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Yt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Yt(this,"raf",n=>{const t=n-(this.time||n);this.time=n,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wu,window.lenis||(window.lenis={}),window.lenis.version=wu,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof c!="function"?c=Eu:typeof c=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:t,eventsTarget:e,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:c,lerp:l,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:h,wheelMultiplier:m,autoResize:v,prevent:g,virtualScroll:p,overscroll:y,autoRaf:x,anchors:_,autoToggle:w,allowNestedScroll:S,naiveDimensions:C,stopInertiaOnNavigate:M,respectReducedMotion:b},this.dimensions=new Jf(n,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new td(e,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,t){return this.emitter.on(n,t)}off(n,t){return this.emitter.off(n,t)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=n.targetTouches[0]??n.changedTouches[0];if(!e)return!1;const i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(e.clientX-r.left,e.clientY-r.top)<=o,c=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||c}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,h=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let m=null;if(typeof d=="string"?(m=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),m||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(m=d),m){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?_.left:_.top}const v=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),y=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);d=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(x)?0:x)}}if(typeof d=="number"){if(d+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=d-this.animatedScroll;m>this.limit/2?d-=this.limit:m<-this.limit/2&&(d+=this.limit)}}else d=M0(0,d,this.limit);if(d===this.targetScroll){c==null||c(this),l==null||l(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Eu:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(m,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),v||this.emit(),v&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:t,deltaY:e}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,c,l,u,f,d,h,m;if(i-(r.time??0)>2e3){r.time=Date.now();const S=window.getComputedStyle(n);if(r.computedStyle=S,s=["auto","overlay","scroll"].includes(S.overflowX),o=["auto","overlay","scroll"].includes(S.overflowY),l=["auto"].includes(S.overscrollBehaviorX),u=["auto"].includes(S.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=n.scrollWidth,d=n.scrollHeight,h=n.clientWidth,m=n.clientHeight,a=f>h,c=d>m,r.isScrollableX=a,r.isScrollableY=c,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=h,r.clientHeight=m,r.hasOverscrollBehaviorX=l,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,c=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,l=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&c))return!1;const v=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let g,p,y,x,_,w;if(v==="horizontal")g=Math.round(n.scrollLeft),p=f-h,y=t,x=s,_=a,w=l;else if(v==="vertical")g=Math.round(n.scrollTop),p=d-m,y=e,x=o,_=c,w=u;else return!1;return!w&&(g>=p||g<=0)?!0:(y>0?g<p:g>0)&&x&&_}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?jf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="180",nd=0,Tu=1,id=2,w0=1,rd=2,di=3,ii=0,Mn=1,Oe=2,Vi=0,jr=1,es=2,Au=3,Cu=4,sd=5,rr=100,od=101,ad=102,ld=103,cd=104,ud=200,hd=201,fd=202,dd=203,Hl=204,Vl=205,pd=206,md=207,gd=208,vd=209,xd=210,_d=211,yd=212,Md=213,Sd=214,Wl=0,Gl=1,Xl=2,ns=3,ql=4,$l=5,Yl=6,jl=7,b0=0,wd=1,bd=2,Wi=0,Ed=1,Td=2,Ad=3,Cd=4,Rd=5,Pd=6,Dd=7,E0=300,is=301,rs=302,Zl=303,Kl=304,La=306,Bs=1e3,ki=1001,Jl=1002,Fn=1003,Ld=1004,fo=1005,Nn=1006,Wa=1007,yi=1008,Jn=1009,T0=1010,A0=1011,Hs=1012,Jc=1013,hr=1014,ti=1015,vr=1016,Qc=1017,tu=1018,Vs=1020,C0=35902,R0=35899,P0=1021,D0=1022,Zn=1023,Ws=1026,Gs=1027,Gi=1028,eu=1029,L0=1030,nu=1031,iu=1033,ta=33776,ea=33777,na=33778,ia=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,rc=37492,sc=37496,oc=37808,ac=37809,lc=37810,cc=37811,uc=37812,hc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,vc=37819,xc=37820,_c=37821,yc=36492,Mc=36494,Sc=36495,wc=36283,bc=36284,Ec=36285,Tc=36286,Id=3200,Ud=3201,Nd=0,Fd=1,an="",On="srgb",fr="srgb-linear",ha="linear",Ae="srgb",Er=7680,Ru=519,zd=512,Od=513,kd=514,I0=515,Bd=516,Hd=517,Vd=518,Wd=519,Pu=35044,Gd=35048,Du="300 es",ei=2e3,fa=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,Ac=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function Xd(n,t){return(n%t+t)%t}function Xa(n,t,e){return(1-e)*n+e*t}function _s(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=m,t[e+3]=v;return}if(f!==v||c!==d||l!==h||u!==m){let g=1-a;const p=c*d+l*h+u*m+f*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),S=Math.atan2(w,p*y);g=Math.sin(g*S)/w,a=Math.sin(a*S)/w}const _=a*y;if(c=c*g+d*_,l=l*g+h*_,u=u*g+m*_,f=f*g+v*_,g===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return t[e]=a*m+u*f+c*h-l*d,t[e+1]=c*m+u*d+l*f-a*h,t[e+2]=l*m+u*h+a*d-c*f,t[e+3]=u*m-a*f-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),h=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*h*m,this._y=l*h*f-d*u*m,this._z=l*u*m+d*h*f,this._w=l*u*f-d*h*m;break;case"YXZ":this._x=d*u*f+l*h*m,this._y=l*h*f-d*u*m,this._z=l*u*m-d*h*f,this._w=l*u*f+d*h*m;break;case"ZXY":this._x=d*u*f-l*h*m,this._y=l*h*f+d*u*m,this._z=l*u*m+d*h*f,this._w=l*u*f-d*h*m;break;case"ZYX":this._x=d*u*f-l*h*m,this._y=l*h*f+d*u*m,this._z=l*u*m-d*h*f,this._w=l*u*f+d*h*m;break;case"YZX":this._x=d*u*f+l*h*m,this._y=l*h*f+d*u*m,this._z=l*u*m-d*h*f,this._w=l*u*f-d*h*m;break;case"XZY":this._x=d*u*f-l*h*m,this._y=l*h*f-d*u*m,this._z=l*u*m+d*h*f,this._w=l*u*f+d*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*r+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new P,Lu=new Ce;class ae{constructor(t,e,i,r,s,o,a,c,l){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],m=i[8],v=r[0],g=r[3],p=r[6],y=r[1],x=r[4],_=r[7],w=r[2],S=r[5],E=r[8];return s[0]=o*v+a*y+c*w,s[3]=o*g+a*x+c*S,s[6]=o*p+a*_+c*E,s[1]=l*v+u*y+f*w,s[4]=l*g+u*x+f*S,s[7]=l*p+u*_+f*E,s[2]=d*v+h*y+m*w,s[5]=d*g+h*x+m*S,s[8]=d*p+h*_+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*s,h=l*s-o*c,m=e*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=d*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=h*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new ae;function U0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qd(){const n=Xs("canvas");return n.style.display="block",n}const Iu={};function qs(n){n in Iu||(Iu[n]=!0,console.warn(n))}function $d(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Uu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ae&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===an?ha:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:t,whitePoint:i,transfer:ha,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),n}const ve=Yd();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Tr;class jd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Tr===void 0&&(Tr=Xs("canvas")),Tr.width=t.width,Tr.height=t.height;const r=Tr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zd=0;class ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ya(r[o].image)):s.push(Ya(r[o]))}else s=Ya(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;const ja=new P;class ln extends us{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,i=ki,r=ki,s=Nn,o=yi,a=Zn,c=Jn,l=ln.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=hs(),this.name="",this.source=new ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=E0;ln.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,r=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(h+1)/2,w=(p+1)/2,S=(u+d)/4,E=(f+v)/4,C=(m+g)/4;return x>_&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=S/i,s=E/i):_>w?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=S/r,s=C/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=C/s),this.set(i,r,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends us{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new ln(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ru(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Jd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class N0 extends ln{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends ln{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),mo.subVectors(this.max,ys),Ar.subVectors(t.a,ys),Cr.subVectors(t.b,ys),Rr.subVectors(t.c,ys),Ri.subVectors(Cr,Ar),Pi.subVectors(Rr,Cr),ji.subVectors(Ar,Rr);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-ji.z,ji.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,ji.z,0,-ji.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-ji.y,ji.x,0];return!Za(e,Ar,Cr,Rr,mo)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,Ar,Cr,Rr,mo))?!1:(go.crossVectors(Ri,Pi),e=[go.x,go.y,go.z],Za(e,Ar,Cr,Rr,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ai=[new P,new P,new P,new P,new P,new P,new P,new P],Wn=new P,po=new xr,Ar=new P,Cr=new P,Rr=new P,Ri=new P,Pi=new P,ji=new P,ys=new P,mo=new P,go=new P,Zi=new P;function Za(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zi.fromArray(n,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),c=t.dot(Zi),l=e.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const tp=new xr,Ms=new P,Ka=new P;class _r{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Ka)),this.expandByPoint(Ms.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const li=new P,Ja=new P,vo=new P,Di=new P,Qa=new P,xo=new P,tl=new P;class Ia{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ja.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(Ja);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Di.dot(this.direction),c=-Di.dot(vo),l=Di.lengthSq(),u=Math.abs(1-o*o);let f,d,h,m;if(u>0)if(f=o*c-a,d=o*a-c,m=s*u,f>=0)if(d>=-m)if(d<=m){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=m?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ja).addScaledVector(vo,d),h}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,r,s){Qa.subVectors(e,t),xo.subVectors(i,t),tl.crossVectors(Qa,xo);let o=this.direction.dot(tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const c=a*this.direction.dot(xo.crossVectors(Di,xo));if(c<0)return null;const l=a*this.direction.dot(Qa.cross(Di));if(l<0||c+l>o)return null;const u=-a*Di.dot(tl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,i,r,s,o,a,c,l,u,f,d,h,m,v,g){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,f,d,h,m,v,g)}set(t,e,i,r,s,o,a,c,l,u,f,d,h,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),o=1/Pr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,h=o*f,m=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=h+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+h*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,h=c*f,m=l*u,v=l*f;e[0]=d+v*a,e[4]=m*a-h,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,h=c*f,m=l*u,v=l*f;e[0]=d-v*a,e[4]=-o*f,e[8]=m+h*a,e[1]=h+m*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,h=o*f,m=a*u,v=a*f;e[0]=c*u,e[4]=m*l-h,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=h*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,h=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=v-d*f,e[8]=m*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*f+m,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*c,h=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+v,e[5]=o*u,e[9]=h*f-m,e[2]=m*f-h,e[6]=a*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,i){const r=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Li.crossVectors(i,Dn),Li.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Li.crossVectors(i,Dn)),Li.normalize(),_o.crossVectors(Dn,Li),r[0]=Li.x,r[4]=_o.x,r[8]=Dn.x,r[1]=Li.y,r[5]=_o.y,r[9]=Dn.y,r[2]=Li.z,r[6]=_o.z,r[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],m=i[2],v=i[6],g=i[10],p=i[14],y=i[3],x=i[7],_=i[11],w=i[15],S=r[0],E=r[4],C=r[8],M=r[12],b=r[1],T=r[5],I=r[9],O=r[13],z=r[2],F=r[6],U=r[10],k=r[14],D=r[3],H=r[7],G=r[11],W=r[15];return s[0]=o*S+a*b+c*z+l*D,s[4]=o*E+a*T+c*F+l*H,s[8]=o*C+a*I+c*U+l*G,s[12]=o*M+a*O+c*k+l*W,s[1]=u*S+f*b+d*z+h*D,s[5]=u*E+f*T+d*F+h*H,s[9]=u*C+f*I+d*U+h*G,s[13]=u*M+f*O+d*k+h*W,s[2]=m*S+v*b+g*z+p*D,s[6]=m*E+v*T+g*F+p*H,s[10]=m*C+v*I+g*U+p*G,s[14]=m*M+v*O+g*k+p*W,s[3]=y*S+x*b+_*z+w*D,s[7]=y*E+x*T+_*F+w*H,s[11]=y*C+x*I+_*U+w*G,s[15]=y*M+x*O+_*k+w*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],h=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*h-i*c*h)+v*(+e*c*h-e*l*d+s*o*d-r*o*h+r*l*u-s*c*u)+g*(+e*l*f-e*a*h-s*o*f+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-e*c*f+e*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],h=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=f*g*l-v*d*l+v*c*h-a*g*h-f*c*p+a*d*p,x=m*d*l-u*g*l-m*c*h+o*g*h+u*c*p-o*d*p,_=u*v*l-m*f*l+m*a*h-o*v*h-u*a*p+o*f*p,w=m*f*c-u*v*c-m*a*d+o*v*d+u*a*g-o*f*g,S=e*y+i*x+r*_+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=y*E,t[1]=(v*d*s-f*g*s-v*r*h+i*g*h+f*r*p-i*d*p)*E,t[2]=(a*g*s-v*c*s+v*r*l-i*g*l-a*r*p+i*c*p)*E,t[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*h-i*c*h)*E,t[4]=x*E,t[5]=(u*g*s-m*d*s+m*r*h-e*g*h-u*r*p+e*d*p)*E,t[6]=(m*c*s-o*g*s-m*r*l+e*g*l+o*r*p-e*c*p)*E,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*h+e*c*h)*E,t[8]=_*E,t[9]=(m*f*s-u*v*s-m*i*h+e*v*h+u*i*p-e*f*p)*E,t[10]=(o*v*s-m*a*s+m*i*l-e*v*l-o*i*p+e*a*p)*E,t[11]=(u*a*s-o*f*s-u*i*l+e*f*l+o*i*h-e*a*h)*E,t[12]=w*E,t[13]=(u*v*r-m*f*r+m*i*d-e*v*d-u*i*g+e*f*g)*E,t[14]=(m*a*r-o*v*r-m*i*c+e*v*c+o*i*g-e*a*g)*E,t[15]=(o*f*r-u*a*r+u*i*c-e*f*c-o*i*d+e*a*d)*E,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,d=s*l,h=s*u,m=s*f,v=o*u,g=o*f,p=a*f,y=c*l,x=c*u,_=c*f,w=i.x,S=i.y,E=i.z;return r[0]=(1-(v+p))*w,r[1]=(h+_)*w,r[2]=(m-x)*w,r[3]=0,r[4]=(h-_)*S,r[5]=(1-(d+p))*S,r[6]=(g+y)*S,r[7]=0,r[8]=(m+x)*E,r[9]=(g-y)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Gn.copy(this);const l=1/s,u=1/o,f=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,e.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ei,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r);let m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===ei)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===fa)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ei,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),h=-(i+r)/(i-r);let m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===ei)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===fa)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Pr=new P,Gn=new ne,ep=new P(0,0,0),np=new P(1,1,1),Li=new P,_o=new P,Dn=new P,Fu=new ne,zu=new Ce;class Ge{constructor(t=0,e=0,i=0,r=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const Ou=new P,Dr=new Ce,ci=new ne,yo=new P,Ss=new P,rp=new P,sp=new Ce,ku=new P(1,0,0),Bu=new P(0,1,0),Hu=new P(0,0,1),Vu={type:"added"},op={type:"removed"},Lr={type:"childadded",child:null},el={type:"childremoved",child:null};class Sn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new P,e=new Ge,i=new Ce,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ne},normalMatrix:{value:new ae}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yo.copy(t):yo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ss,yo,this.up):ci.lookAt(yo,Ss,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ci),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),el.child=t,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new P(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new P,ui=new P,nl=new P,hi=new P,Ir=new P,Ur=new P,Wu=new P,il=new P,rl=new P,sl=new P,ol=new pe,al=new pe,ll=new pe;class Yn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Xn.subVectors(t,e),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Xn.subVectors(r,e),ui.subVectors(i,e),nl.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(ui),c=Xn.dot(nl),l=ui.dot(ui),u=ui.dot(nl),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,m=(o*u-a*c)*d;return s.set(1-h-m,m,h)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return ol.setScalar(0),al.setScalar(0),ll.setScalar(0),ol.fromBufferAttribute(t,e),al.fromBufferAttribute(t,i),ll.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ol,s.x),o.addScaledVector(al,s.y),o.addScaledVector(ll,s.z),o}static isFrontFacing(t,e,i,r){return Xn.subVectors(i,e),ui.subVectors(t,e),Xn.cross(ui).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Xn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Yn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Ur.subVectors(s,i),il.subVectors(t,i);const c=Ir.dot(il),l=Ur.dot(il);if(c<=0&&l<=0)return e.copy(i);rl.subVectors(t,r);const u=Ir.dot(rl),f=Ur.dot(rl);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ir,o);sl.subVectors(t,s);const h=Ir.dot(sl),m=Ur.dot(sl);if(m>=0&&h<=m)return e.copy(s);const v=h*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(Ur,a);const g=u*m-h*f;if(g<=0&&f-u>=0&&h-m>=0)return Wu.subVectors(s,r),a=(f-u)/(f-u+(h-m)),e.copy(r).addScaledVector(Wu,a);const p=1/(g+v+d);return o=v*p,a=d*p,e.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function cl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ve.workingColorSpace){if(t=Xd(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=cl(o,s,t+1/3),this.g=cl(o,s,t),this.b=cl(o,s,t-1/3)}return ve.colorSpaceToWorking(this,r),this}setStyle(t,e=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=On){const i=F0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return ve.workingToColorSpace(un.copy(this),t),Math.round(fe(un.r*255,0,255))*65536+Math.round(fe(un.g*255,0,255))*256+Math.round(fe(un.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(un.copy(this),e);const i=un.r,r=un.g,s=un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=On){ve.workingToColorSpace(un.copy(this),t);const e=un.r,i=un.g,r=un.b;return t!==On?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(Mo);const i=Xa(Ii.h,Mo.h,e),r=Xa(Ii.s,Mo.s,e),s=Xa(Ii.l,Mo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new oe;oe.NAMES=F0;let ap=0;class fs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=jr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class z0 extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gi=lp();function lp(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function cp(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=fe(n,-65504,65504),gi.floatView[0]=n;const t=gi.uint32View[0],e=t>>23&511;return gi.baseTable[e]+((t&8388607)>>gi.shiftTable[e])}function up(n){const t=n>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[t]+(n&1023)]+gi.exponentTable[t],gi.floatView[0]}class hp{static toHalfFloat(t){return cp(t)}static fromHalfFloat(t){return up(t)}}const Xe=new P,So=new Nt;let fp=0;class se{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_s(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pu&&(t.usage=this.usage),t}}class O0 extends se{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class k0 extends se{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ht extends se{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dp=0;const zn=new ne,ul=new Sn,Nr=new P,Ln=new xr,ws=new xr,nn=new P;class ee extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U0(t)?k0:O0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ae().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Ln.min,ws.min),Ln.expandByPoint(nn),nn.addVectors(Ln.max,ws.max),Ln.expandByPoint(nn)):(Ln.expandByPoint(ws.min),Ln.expandByPoint(ws.max))}Ln.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)nn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(nn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Nr.fromBufferAttribute(t,l),nn.add(Nr)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new P,c[C]=new P;const l=new P,u=new P,f=new P,d=new Nt,h=new Nt,m=new Nt,v=new P,g=new P;function p(C,M,b){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),u.sub(l),f.sub(l),h.sub(d),m.sub(d);const T=1/(h.x*m.y-m.x*h.y);isFinite(T)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(T),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(T),a[C].add(v),a[M].add(v),a[b].add(v),c[C].add(g),c[M].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const b=y[C],T=b.start,I=b.count;for(let O=T,z=T+I;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new P,_=new P,w=new P,S=new P;function E(C){w.fromBufferAttribute(r,C),S.copy(w);const M=a[C];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(S,M);const T=_.dot(c[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,T)}for(let C=0,M=y.length;C<M;++C){const b=y[C],T=b.start,I=b.count;for(let O=T,z=T+I;O<z;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let d=0,h=t.count;d<h;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)d[m++]=l[h++]}return new se(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=t(d,i);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new ne,Ki=new Ia,wo=new _r,Xu=new P,bo=new P,Eo=new P,To=new P,hl=new P,Ao=new P,qu=new P,Co=new P;class re extends Sn{constructor(t=new ee,e=new z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ao.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(hl.fromBufferAttribute(f,t),o?Ao.addScaledVector(hl,u):Ao.addScaledVector(hl.sub(e),u))}e.add(Ao)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),Ki.copy(t.ray).recast(t.near),!(wo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(wo,Xu)===null||Ki.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Gu.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,w=x;_<w;_+=3){const S=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);r=Ro(this,p,t,i,l,u,f,S,E,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);r=Ro(this,o,t,i,l,u,f,y,x,_),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,w=x;_<w;_+=3){const S=_,E=_+1,C=_+2;r=Ro(this,p,t,i,l,u,f,S,E,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=g,x=g+1,_=g+2;r=Ro(this,o,t,i,l,u,f,y,x,_),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function pp(n,t,e,i,r,s,o,a){let c;if(t.side===Mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===ii,a),c===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Co);return l<e.near||l>e.far?null:{distance:l,point:Co.clone(),object:n}}function Ro(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,bo),n.getVertexPosition(c,Eo),n.getVertexPosition(l,To);const u=pp(n,t,e,i,bo,Eo,To,qu);if(u){const f=new P;Yn.getBarycoord(qu,bo,Eo,To,f),r&&(u.uv=Yn.getInterpolatedAttribute(r,a,c,l,f,new Nt)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,c,l,f,new Nt)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,c,l,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Yn.getNormal(bo,Eo,To,d.normal),u.face=d,u.barycoord=f}return u}class Zt extends ee{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,r,o,2),m("x","z","y",1,-1,t,i,-e,r,o,3),m("x","y","z",1,-1,t,e,i,r,s,4),m("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(f,2));function m(v,g,p,y,x,_,w,S,E,C,M){const b=_/E,T=w/C,I=_/2,O=w/2,z=S/2,F=E+1,U=C+1;let k=0,D=0;const H=new P;for(let G=0;G<U;G++){const W=G*T-O;for(let X=0;X<F;X++){const st=X*b-I;H[v]=st*y,H[g]=W*x,H[p]=z,l.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[p]=S>0?1:-1,u.push(H.x,H.y,H.z),f.push(X/E),f.push(1-G/C),k+=1}}for(let G=0;G<C;G++)for(let W=0;W<E;W++){const X=d+W+F*G,st=d+W+F*(G+1),lt=d+(W+1)+F*(G+1),V=d+(W+1)+F*G;c.push(X,st,V),c.push(st,lt,V),D+=6}a.addGroup(h,D,M),h+=D,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function gn(n){const t={};for(let e=0;e<n.length;e++){const i=ss(n[e]);for(const r in i)t[r]=i[r]}return t}function mp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function B0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const gp={clone:ss,merge:gn};var vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class H0 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new P,$u=new Nt,Yu=new Nt;class Bn extends H0{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ac*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Yu),e.subVectors(Yu,$u)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fr=-90,zr=1;class _p extends Sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Fr,zr,t,e);r.layers=this.layers,this.add(r);const s=new Bn(Fr,zr,t,e);s.layers=this.layers,this.add(s);const o=new Bn(Fr,zr,t,e);o.layers=this.layers,this.add(o);const a=new Bn(Fr,zr,t,e);a.layers=this.layers,this.add(a);const c=new Bn(Fr,zr,t,e);c.layers=this.layers,this.add(c);const l=new Bn(Fr,zr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class V0 extends ln{constructor(t=[],e=is,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yp extends dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new V0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zt(5,5,5),s=new ge({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Vi});s.uniforms.tEquirect.value=e;const o=new re(r,s),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Nn),new _p(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class We extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,m=.005;l.inputState.pinching&&d>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Sp extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ni extends ln{constructor(t=null,e=1,i=1,r,s,o,a,c,l=Fn,u=Fn,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s extends se{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Or=new ne,ju=new ne,Po=[],Zu=new xr,wp=new ne,bs=new re,Es=new _r;class xn extends re{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),Zu.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(Zu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _r),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),Es.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),t.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Or),ju.multiplyMatrices(i,Or),bs.matrixWorld=ju,bs.raycast(t,Po);for(let o=0,a=Po.length;o<a;o++){const c=Po[o];c.instanceId=s,c.object=this,e.push(c)}Po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(r*this.count),r,this.count,Gi,ti));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const dl=new P,bp=new P,Ep=new ae;class nr{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=dl.subVectors(i,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ep.getNormalMatrix(t),r=this.coplanarPoint(dl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new _r,Tp=new Nt(.5,.5),Do=new P;class W0{constructor(t=new nr,e=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ei,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],m=s[8],v=s[9],g=s[10],p=s[11],y=s[12],x=s[13],_=s[14],w=s[15];if(r[0].setComponents(l-o,h-u,p-m,w-y).normalize(),r[1].setComponents(l+o,h+u,p+m,w+y).normalize(),r[2].setComponents(l+a,h+f,p+v,w+x).normalize(),r[3].setComponents(l-a,h-f,p-v,w-x).normalize(),i)r[4].setComponents(c,d,g,_).normalize(),r[5].setComponents(l-c,h-d,p-g,w-_).normalize();else if(r[4].setComponents(l-c,h-d,p-g,w-_).normalize(),e===ei)r[5].setComponents(l+c,h+d,p+g,w+_).normalize();else if(e===fa)r[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);const e=Tp.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Do.x=r.normal.x>0?t.max.x:t.min.x,Do.y=r.normal.y>0?t.max.y:t.min.y,Do.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class G0 extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new P,pa=new P,Ku=new ne,Ts=new Ia,Lo=new _r,pl=new P,Ju=new P;class Ap extends Sn{constructor(t=new ee,e=new G0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)da.fromBufferAttribute(e,r-1),pa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=da.distanceTo(pa);t.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,t.ray.intersectsSphere(Lo)===!1)return;Ku.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){const p=u.getX(v),y=u.getX(v+1),x=Io(this,t,Ts,c,p,y,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(h),p=Io(this,t,Ts,c,v,g,m-1);p&&e.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){const p=Io(this,t,Ts,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Io(this,t,Ts,c,m-1,h,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Io(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(da.fromBufferAttribute(a,r),pa.fromBufferAttribute(a,s),e.distanceSqToSegment(da,pa,pl,Ju)>i)return;pl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(pl);if(!(l<t.near||l>t.far))return{distance:l,point:Ju.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Cp extends Ap{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Rp extends fs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qu=new ne,Cc=new Ia,Uo=new _r,No=new P;class Ys extends Sn{constructor(t=new ee,e=new Rp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,t.ray.intersectsSphere(Uo)===!1)return;Qu.copy(r).invert(),Cc.copy(t.ray).applyMatrix4(Qu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=d,v=h;m<v;m++){const g=l.getX(m);No.fromBufferAttribute(f,g),th(No,g,c,r,t,e,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=d,v=h;m<v;m++)No.fromBufferAttribute(f,m),th(No,m,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function th(n,t,e,i,r,s,o){const a=Cc.distanceSqToPoint(n);if(a<e){const c=new P;Cc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ma extends ln{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class X0 extends ln{constructor(t,e,i=hr,r,s,o,a=Fn,c=Fn,l,u=Ws,f=1){if(u!==Ws&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ru(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class q0 extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ou extends ee{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new P,u=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=i+f/e*r;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends ee{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let m=0;const v=[],g=i/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(h,2));function y(){const _=new P,w=new P;let S=0;const E=(e-t)/i;for(let C=0;C<=s;C++){const M=[],b=C/s,T=b*(e-t)+t;for(let I=0;I<=r;I++){const O=I/r,z=O*c+a,F=Math.sin(z),U=Math.cos(z);w.x=T*F,w.y=-b*i+g,w.z=T*U,f.push(w.x,w.y,w.z),_.set(F,E,U).normalize(),d.push(_.x,_.y,_.z),h.push(O,1-b),M.push(m++)}v.push(M)}for(let C=0;C<r;C++)for(let M=0;M<s;M++){const b=v[M][C],T=v[M+1][C],I=v[M+1][C+1],O=v[M][C+1];(t>0||M!==0)&&(u.push(b,T,O),S+=3),(e>0||M!==s-1)&&(u.push(T,I,O),S+=3)}l.addGroup(p,S,0),p+=S}function x(_){const w=m,S=new Nt,E=new P;let C=0;const M=_===!0?t:e,b=_===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,g*b,0),d.push(0,b,0),h.push(.5,.5),m++;const T=m;for(let I=0;I<=r;I++){const z=I/r*c+a,F=Math.cos(z),U=Math.sin(z);E.x=M*U,E.y=g*b,E.z=M*F,f.push(E.x,E.y,E.z),d.push(0,b,0),S.x=F*.5+.5,S.y=U*.5*b+.5,h.push(S.x,S.y),m++}for(let I=0;I<r;I++){const O=w+I,z=T+I;_===!0?u.push(z,z+1,O):u.push(z+1,z,O),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends he{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new os(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class au extends ee{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new P,_=new P,w=new P;for(let S=0;S<e.length;S+=3)h(e[S+0],x),h(e[S+1],_),h(e[S+2],w),c(x,_,w,y)}function c(y,x,_,w){const S=w+1,E=[];for(let C=0;C<=S;C++){E[C]=[];const M=y.clone().lerp(_,C/S),b=x.clone().lerp(_,C/S),T=S-C;for(let I=0;I<=T;I++)I===0&&C===S?E[C][I]=M:E[C][I]=M.clone().lerp(b,I/T)}for(let C=0;C<S;C++)for(let M=0;M<2*(S-C)-1;M++){const b=Math.floor(M/2);M%2===0?(d(E[C][b+1]),d(E[C+1][b]),d(E[C][b])):(d(E[C][b+1]),d(E[C+1][b+1]),d(E[C+1][b]))}}function l(y){const x=new P;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){const y=new P;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(_,1-w)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],w=o[y+4],S=Math.max(x,_,w),E=Math.min(x,_,w);S>.9&&E<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function m(){const y=new P,x=new P,_=new P,w=new P,S=new Nt,E=new Nt,C=new Nt;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),S.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),w.copy(y).add(x).add(_).divideScalar(3);const T=g(w);v(S,b+0,y,T),v(E,b+2,x,T),v(C,b+4,_,T)}}function v(y,x,_,w){w<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.vertices,t.indices,t.radius,t.details)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Nt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,r=[],s=[],o=[],a=new P,c=new ne;for(let h=0;h<=t;h++){const m=h/t;r[h]=this.getTangentAt(m,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(fe(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(e===!0){let h=Math.acos(fe(s[0].dot(s[t]),-1,1));h/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lu extends ri{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*u-h*f+this.aX,l=d*f+h*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pp extends lu{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Fo=new P,ml=new cu,gl=new cu,vl=new cu;class ga extends ri{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new P){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Fo.subVectors(r[0],r[1]).add(r[0]),l=Fo);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Fo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ml.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,m,v,g),gl.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,m,v,g),vl.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),gl.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),vl.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return i.set(ml.calc(c),gl.calc(c),vl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eh(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function Dp(n,t){const e=1-n;return e*e*t}function Lp(n,t){return 2*(1-n)*n*t}function Ip(n,t){return n*n*t}function Us(n,t,e,i){return Dp(n,t)+Lp(n,e)+Ip(n,i)}function Up(n,t){const e=1-n;return e*e*e*t}function Np(n,t){const e=1-n;return 3*e*e*n*t}function Fp(n,t){return 3*(1-n)*n*n*t}function zp(n,t){return n*n*n*t}function Ns(n,t,e,i,r){return Up(n,t)+Np(n,e)+Fp(n,i)+zp(n,r)}class $0 extends ri{constructor(t=new Nt,e=new Nt,i=new Nt,r=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Nt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(t,r.x,s.x,o.x,a.x),Ns(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Op extends ri{constructor(t=new P,e=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new P){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(t,r.x,s.x,o.x,a.x),Ns(t,r.y,s.y,o.y,a.y),Ns(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y0 extends ri{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j0 extends ri{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z0 extends ri{constructor(t=new Nt,e=new Nt,i=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Nt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Us(t,r.x,s.x,o.x),Us(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K0 extends ri{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Us(t,r.x,s.x,o.x),Us(t,r.y,s.y,o.y),Us(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J0 extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(eh(a,c.x,l.x,u.x,f.x),eh(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Nt().fromArray(r))}return this}}var va=Object.freeze({__proto__:null,ArcCurve:Pp,CatmullRomCurve3:ga,CubicBezierCurve:$0,CubicBezierCurve3:Op,EllipseCurve:lu,LineCurve:Y0,LineCurve3:j0,QuadraticBezierCurve:Z0,QuadraticBezierCurve3:K0,SplineCurve:J0});class kp extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new va[r.type]().fromJSON(r))}return this}}class nh extends kp{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Y0(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Z0(this.currentPoint.clone(),new Nt(t,e),new Nt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new $0(this.currentPoint.clone(),new Nt(t,e),new Nt(i,r),new Nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new J0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,r,s,o,a,c),this}absellipse(t,e,i,r,s,o,a,c){const l=new lu(t,e,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ua extends nh{constructor(t){super(t),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new nh().fromJSON(r))}return this}}function Bp(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Q0(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Xp(n,t,s,e)),n.length>80*e){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let d=e;d<r;d+=e){const h=n[d],m=n[d+1];h<a&&(a=h),m<c&&(c=m),h>u&&(u=h),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return js(s,o,e,a,c,l,0),o}function Q0(n,t,e,i,r){let s;if(r===nm(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=ih(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=ih(o/i|0,n[o],n[o+1],s);return s&&as(s,s.next)&&(Ks(s),s=s.next),s}function pr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(as(e,e.next)||Be(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function js(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Zp(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Vp(n,i,r,s):Hp(n)){t.push(c.i,n.i,l.i),Ks(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Wp(pr(n),t),js(n,t,e,i,r,s,2)):o===2&&Gp(n,t,e,i,r,s):js(pr(n),t,e,i,r,s,1);break}}}function Hp(n){const t=n.prev,e=n,i=n.next;if(Be(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(r,s,o),f=Math.min(a,c,l),d=Math.max(r,s,o),h=Math.max(a,c,l);let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=f&&m.y<=h&&Rs(r,a,s,c,o,l,m.x,m.y)&&Be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Vp(n,t,e,i){const r=n.prev,s=n,o=n.next;if(Be(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,f=s.y,d=o.y,h=Math.min(a,c,l),m=Math.min(u,f,d),v=Math.max(a,c,l),g=Math.max(u,f,d),p=Rc(h,m,t,e,i),y=Rc(v,g,t,e,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=h&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Rs(a,u,c,f,l,d,x.x,x.y)&&Be(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=h&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Rs(a,u,c,f,l,d,_.x,_.y)&&Be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=h&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Rs(a,u,c,f,l,d,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=h&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Rs(a,u,c,f,l,d,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Wp(n,t){let e=n;do{const i=e.prev,r=e.next.next;!as(i,r)&&ef(i,e,e.next,r)&&Zs(i,r)&&Zs(r,i)&&(t.push(i.i,e.i,r.i),Ks(e),Ks(e.next),e=n=r),e=e.next}while(e!==n);return pr(e)}function Gp(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qp(o,a)){let c=nf(o,a);o=pr(o,o.next),c=pr(c,c.next),js(o,t,e,i,r,s,0),js(c,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Xp(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,c=s<o-1?t[s+1]*i:n.length,l=Q0(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Jp(l))}r.sort(qp);for(let s=0;s<r.length;s++)e=$p(r[s],e);return e}function qp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function $p(n,t){const e=Yp(n,t);if(!e)return t;const i=nf(e,n);return pr(i,i.next),pr(e,e.next)}function Yp(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(as(n,e))return e;do{if(as(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&tf(r<l?i:s,r,c,l,r<l?s:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);Zs(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&jp(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function jp(n,t){return Be(n.prev,n,t.prev)<0&&Be(t.next,n,n.next)<0}function Zp(n,t,e,i){let r=n;do r.z===0&&(r.z=Rc(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Kp(r)}function Kp(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Rc(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Jp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function tf(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Rs(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&tf(n,t,e,i,r,s,o,a)}function Qp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!tm(n,t)&&(Zs(n,t)&&Zs(t,n)&&em(n,t)&&(Be(n.prev,n,t.prev)||Be(n,t.prev,t))||as(n,t)&&Be(n.prev,n,n.next)>0&&Be(t.prev,t,t.next)>0)}function Be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function as(n,t){return n.x===t.x&&n.y===t.y}function ef(n,t,e,i){const r=Oo(Be(n,t,e)),s=Oo(Be(n,t,i)),o=Oo(Be(e,i,n)),a=Oo(Be(e,i,t));return!!(r!==s&&o!==a||r===0&&zo(n,e,t)||s===0&&zo(n,i,t)||o===0&&zo(e,n,i)||a===0&&zo(e,t,i))}function zo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Oo(n){return n>0?1:n<0?-1:0}function tm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ef(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Zs(n,t){return Be(n.prev,n,n.next)<0?Be(n,t,n.next)>=0&&Be(n,n.prev,t)>=0:Be(n,t,n.prev)<0||Be(n,n.next,t)<0}function em(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function nf(n,t){const e=Pc(n.i,n.x,n.y),i=Pc(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function ih(n,t,e,i){const r=Pc(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ks(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class im{static triangulate(t,e,i=2){return Bp(t,e,i)}}class Mi{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Mi.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];rh(t),sh(i,t);let o=t.length;e.forEach(rh);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,sh(i,e[c]);const a=im.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function rh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function sh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class uu extends ee{constructor(t=new Ua([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Ht(r,3)),this.setAttribute("uv",new Ht(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:h-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:rm;let x,_=!1,w,S,E,C;p&&(x=p.getSpacedPoints(u),_=!0,d=!1,w=p.computeFrenetFrames(u,!1),S=new P,E=new P,C=new P),d||(g=0,h=0,m=0,v=0);const M=a.extractPoints(l);let b=M.shape;const T=M.holes;if(!Mi.isClockWise(b)){b=b.reverse();for(let q=0,Z=T.length;q<Z;q++){const et=T[q];Mi.isClockWise(et)&&(T[q]=et.reverse())}}function O(q){const et=10000000000000001e-36;let K=q[0];for(let mt=1;mt<=q.length;mt++){const gt=mt%q.length,Mt=q[gt],vt=Mt.x-K.x,At=Mt.y-K.y,N=vt*vt+At*At,A=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(K.x),Math.abs(K.y)),j=et*A*A;if(N<=j){q.splice(gt,1),mt--;continue}K=Mt}}O(b),T.forEach(O);const z=T.length,F=b;for(let q=0;q<z;q++){const Z=T[q];b=b.concat(Z)}function U(q,Z,et){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(Z,et)}const k=b.length;function D(q,Z,et){let K,mt,gt;const Mt=q.x-Z.x,vt=q.y-Z.y,At=et.x-q.x,N=et.y-q.y,A=Mt*Mt+vt*vt,j=Mt*N-vt*At;if(Math.abs(j)>Number.EPSILON){const tt=Math.sqrt(A),yt=Math.sqrt(At*At+N*N),ht=Z.x-vt/tt,Gt=Z.y+Mt/tt,Pt=et.x-N/yt,Vt=et.y+At/yt,rt=((Pt-ht)*N-(Vt-Gt)*At)/(Mt*N-vt*At);K=ht+Mt*rt-q.x,mt=Gt+vt*rt-q.y;const Y=K*K+mt*mt;if(Y<=2)return new Nt(K,mt);gt=Math.sqrt(Y/2)}else{let tt=!1;Mt>Number.EPSILON?At>Number.EPSILON&&(tt=!0):Mt<-Number.EPSILON?At<-Number.EPSILON&&(tt=!0):Math.sign(vt)===Math.sign(N)&&(tt=!0),tt?(K=-vt,mt=Mt,gt=Math.sqrt(A)):(K=Mt,mt=vt,gt=Math.sqrt(A/2))}return new Nt(K/gt,mt/gt)}const H=[];for(let q=0,Z=F.length,et=Z-1,K=q+1;q<Z;q++,et++,K++)et===Z&&(et=0),K===Z&&(K=0),H[q]=D(F[q],F[et],F[K]);const G=[];let W,X=H.concat();for(let q=0,Z=z;q<Z;q++){const et=T[q];W=[];for(let K=0,mt=et.length,gt=mt-1,Mt=K+1;K<mt;K++,gt++,Mt++)gt===mt&&(gt=0),Mt===mt&&(Mt=0),W[K]=D(et[K],et[gt],et[Mt]);G.push(W),X=X.concat(W)}let st;if(g===0)st=Mi.triangulateShape(F,T);else{const q=[],Z=[];for(let et=0;et<g;et++){const K=et/g,mt=h*Math.cos(K*Math.PI/2),gt=m*Math.sin(K*Math.PI/2)+v;for(let Mt=0,vt=F.length;Mt<vt;Mt++){const At=U(F[Mt],H[Mt],gt);Ft(At.x,At.y,-mt),K===0&&q.push(At)}for(let Mt=0,vt=z;Mt<vt;Mt++){const At=T[Mt];W=G[Mt];const N=[];for(let A=0,j=At.length;A<j;A++){const tt=U(At[A],W[A],gt);Ft(tt.x,tt.y,-mt),K===0&&N.push(tt)}K===0&&Z.push(N)}}st=Mi.triangulateShape(q,Z)}const lt=st.length,V=m+v;for(let q=0;q<k;q++){const Z=d?U(b[q],X[q],V):b[q];_?(E.copy(w.normals[0]).multiplyScalar(Z.x),S.copy(w.binormals[0]).multiplyScalar(Z.y),C.copy(x[0]).add(E).add(S),Ft(C.x,C.y,C.z)):Ft(Z.x,Z.y,0)}for(let q=1;q<=u;q++)for(let Z=0;Z<k;Z++){const et=d?U(b[Z],X[Z],V):b[Z];_?(E.copy(w.normals[q]).multiplyScalar(et.x),S.copy(w.binormals[q]).multiplyScalar(et.y),C.copy(x[q]).add(E).add(S),Ft(C.x,C.y,C.z)):Ft(et.x,et.y,f/u*q)}for(let q=g-1;q>=0;q--){const Z=q/g,et=h*Math.cos(Z*Math.PI/2),K=m*Math.sin(Z*Math.PI/2)+v;for(let mt=0,gt=F.length;mt<gt;mt++){const Mt=U(F[mt],H[mt],K);Ft(Mt.x,Mt.y,f+et)}for(let mt=0,gt=T.length;mt<gt;mt++){const Mt=T[mt];W=G[mt];for(let vt=0,At=Mt.length;vt<At;vt++){const N=U(Mt[vt],W[vt],K);_?Ft(N.x,N.y+x[u-1].y,x[u-1].x+et):Ft(N.x,N.y,f+et)}}}nt(),ft();function nt(){const q=r.length/3;if(d){let Z=0,et=k*Z;for(let K=0;K<lt;K++){const mt=st[K];xt(mt[2]+et,mt[1]+et,mt[0]+et)}Z=u+g*2,et=k*Z;for(let K=0;K<lt;K++){const mt=st[K];xt(mt[0]+et,mt[1]+et,mt[2]+et)}}else{for(let Z=0;Z<lt;Z++){const et=st[Z];xt(et[2],et[1],et[0])}for(let Z=0;Z<lt;Z++){const et=st[Z];xt(et[0]+k*u,et[1]+k*u,et[2]+k*u)}}i.addGroup(q,r.length/3-q,0)}function ft(){const q=r.length/3;let Z=0;bt(F,Z),Z+=F.length;for(let et=0,K=T.length;et<K;et++){const mt=T[et];bt(mt,Z),Z+=mt.length}i.addGroup(q,r.length/3-q,1)}function bt(q,Z){let et=q.length;for(;--et>=0;){const K=et;let mt=et-1;mt<0&&(mt=q.length-1);for(let gt=0,Mt=u+g*2;gt<Mt;gt++){const vt=k*gt,At=k*(gt+1),N=Z+K+vt,A=Z+mt+vt,j=Z+mt+At,tt=Z+K+At;zt(N,A,j,tt)}}}function Ft(q,Z,et){c.push(q),c.push(Z),c.push(et)}function xt(q,Z,et){at(q),at(Z),at(et);const K=r.length/3,mt=y.generateTopUV(i,r,K-3,K-2,K-1);R(mt[0]),R(mt[1]),R(mt[2])}function zt(q,Z,et,K){at(q),at(Z),at(K),at(Z),at(et),at(K);const mt=r.length/3,gt=y.generateSideWallUV(i,r,mt-6,mt-3,mt-2,mt-1);R(gt[0]),R(gt[1]),R(gt[3]),R(gt[1]),R(gt[2]),R(gt[3])}function at(q){r.push(c[q*3+0]),r.push(c[q*3+1]),r.push(c[q*3+2])}function R(q){s.push(q.x),s.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return sm(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new va[r.type]().fromJSON(r)),new uu(i,t.options)}}const rm={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new Nt(s,o),new Nt(a,c),new Nt(l,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],d=t[r*3],h=t[r*3+1],m=t[r*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-f),new Nt(d,1-m),new Nt(v,1-p)]:[new Nt(a,1-c),new Nt(u,1-f),new Nt(h,1-m),new Nt(g,1-p)]}};function sm(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Na extends au{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class no extends ee{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=fe(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/e,f=new P,d=new Nt,h=new P,m=new P,v=new P;let g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-g,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-g,h.z=p*0,m.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(m)}for(let y=0;y<=e;y++){const x=i+y*u*r,_=Math.sin(x),w=Math.cos(x);for(let S=0;S<=t.length-1;S++){f.x=t[S].x*_,f.y=t[S].y,f.z=t[S].x*w,o.push(f.x,f.y,f.z),d.x=y/e,d.y=S/(t.length-1),a.push(d.x,d.y);const E=c[3*S+0]*_,C=c[3*S+1],M=c[3*S+0]*w;l.push(E,C,M)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,w=_,S=_+t.length,E=_+t.length+1,C=_+1;s.push(w,S,C),s.push(E,C,S)}this.setIndex(s),this.setAttribute("position",new Ht(o,3)),this.setAttribute("uv",new Ht(a,2)),this.setAttribute("normal",new Ht(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.points,t.segments,t.phiStart,t.phiLength)}}class rn extends ee{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,d=e/c,h=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const y=p*d-o;for(let x=0;x<l;x++){const _=x*f-s;m.push(_,-y,0),v.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+l*p,_=y+l*(p+1),w=y+1+l*(p+1),S=y+1+l*p;h.push(x,_,S),h.push(_,w,S)}this.setIndex(h),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class hu extends ee{constructor(t=new Ua([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(s,3)),this.setAttribute("uv",new Ht(o,2));function l(u){const f=r.length/3,d=u.extractPoints(e);let h=d.shape;const m=d.holes;Mi.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];Mi.isClockWise(y)===!0&&(m[g]=y.reverse())}const v=Mi.triangulateShape(h,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];h=h.concat(y)}for(let g=0,p=h.length;g<p;g++){const y=h[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){const y=v[g],x=y[0]+f,_=y[1]+f,w=y[2]+f;i.push(x,_,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return om(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];i.push(o)}return new hu(i,t.curveSegments)}}function om(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class io extends ee{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new P,d=new P,h=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let _=0;p===0&&o===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const S=w/e;f.x=-t*Math.cos(r+S*s)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(r+S*s)*Math.sin(o+x*a),m.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(S+_,1-x),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=u[p][y+1],_=u[p][y],w=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&h.push(x,_,S),(p!==i-1||c<Math.PI)&&h.push(_,w,S)}this.setIndex(h),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cr extends ee{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new P,f=new P,d=new P;for(let h=0;h<=i;h++)for(let m=0;m<=r;m++){const v=m/r*s,g=h/i*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(h/i)}for(let h=1;h<=i;h++)for(let m=1;m<=r;m++){const v=(r+1)*h+m-1,g=(r+1)*(h-1)+m-1,p=(r+1)*(h-1)+m,y=(r+1)*h+m;o.push(v,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Js extends ee{constructor(t=new K0(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new Nt;let u=new P;const f=[],d=[],h=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(h,2));function v(){for(let x=0;x<e;x++)g(x);g(s===!1?e:0),y(),p()}function g(x){u=t.getPointAt(x/e,u);const _=o.normals[x],w=o.binormals[x];for(let S=0;S<=r;S++){const E=S/r*Math.PI*2,C=Math.sin(E),M=-Math.cos(E);c.x=M*_.x+C*w.x,c.y=M*_.y+C*w.y,c.z=M*_.z+C*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=r;_++){const w=(r+1)*(x-1)+(_-1),S=(r+1)*x+(_-1),E=(r+1)*x+_,C=(r+1)*(x-1)+_;m.push(w,S,C),m.push(S,E,C)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=r;_++)l.x=x/e,l.y=_/r,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Js(new va[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class am extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lm extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xl={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cm{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const h=l[f],m=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const um=new cm;class fu{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}fu.DEFAULT_MATERIAL_NAME="__DEFAULT";const kr=new WeakMap;class hm extends fu{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=xl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=kr.get(o);f===void 0&&(f=[],kr.set(o,f)),f.push({onLoad:e,onError:r})}return o}const a=Xs("img");function c(){u(),e&&e(this);const f=kr.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}kr.delete(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),xl.remove(`image:${t}`);const d=kr.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onError&&m.onError(f)}kr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xl.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Fa extends fu{constructor(t){super(t)}load(t,e,i,r){const s=new ln,o=new hm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class fm extends H0{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dm extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const oh=new ne;class ah{constructor(t,e,i=0,r=1/0){this.ray=new Ia(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oh),this}intersectObject(t,e=!0,i=[]){return Dc(t,this,i,e),i.sort(lh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Dc(t[r],this,i,e);return i.sort(lh),i}}function lh(n,t){return n.distance-t.distance}function Dc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Dc(s[o],t,e,!0)}}function ch(n,t,e,i){const r=pm(i);switch(e){case P0:return n*t;case Gi:return n*t/r.components*r.byteLength;case eu:return n*t/r.components*r.byteLength;case L0:return n*t*2/r.components*r.byteLength;case nu:return n*t*2/r.components*r.byteLength;case D0:return n*t*3/r.components*r.byteLength;case Zn:return n*t*4/r.components*r.byteLength;case iu:return n*t*4/r.components*r.byteLength;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(n,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(n,8)*Math.max(t,8)/2;case ic:case rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yc:case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wc:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ec:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pm(n){switch(n){case Jn:case T0:return{byteLength:1,components:1};case Hs:case A0:case vr:return{byteLength:2,components:1};case Qc:case tu:return{byteLength:2,components:4};case hr:case Jc:case ti:return{byteLength:4,components:1};case C0:case R0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rf(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function mm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<f.length;h++){const m=f[d],v=f[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,m=f.length;h<m;h++){const v=f[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
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
#endif`,Pm=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ym=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
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
#endif`,pg=`struct PhysicalMaterial {
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
}`,mg=`
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tv=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`#include <common>
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
}`,Sv=`#if DEPTH_PACKING == 3200
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
}`,wv=`#define DISTANCE
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
}`,bv=`#define DISTANCE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Iv=`#define MATCAP
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
}`,Uv=`#define MATCAP
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
}`,Nv=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,zv=`#define PHONG
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
}`,Ov=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,Bv=`#define STANDARD
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
}`,Hv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Wv=`uniform float size;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,qv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:gm,alphahash_pars_fragment:vm,alphamap_fragment:xm,alphamap_pars_fragment:_m,alphatest_fragment:ym,alphatest_pars_fragment:Mm,aomap_fragment:Sm,aomap_pars_fragment:wm,batching_pars_vertex:bm,batching_vertex:Em,begin_vertex:Tm,beginnormal_vertex:Am,bsdfs:Cm,iridescence_fragment:Rm,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Um,color_fragment:Nm,color_pars_fragment:Fm,color_pars_vertex:zm,color_vertex:Om,common:km,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Wm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:$m,envmap_fragment:Ym,envmap_common_pars_fragment:jm,envmap_pars_fragment:Zm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:lg,envmap_vertex:Jm,fog_vertex:Qm,fog_pars_vertex:tg,fog_fragment:eg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_pars_fragment:rg,lights_lambert_fragment:sg,lights_lambert_pars_fragment:og,lights_pars_begin:ag,lights_toon_fragment:cg,lights_toon_pars_fragment:ug,lights_phong_fragment:hg,lights_phong_pars_fragment:fg,lights_physical_fragment:dg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:vg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:Mg,map_fragment:Sg,map_pars_fragment:wg,map_particle_fragment:bg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:Cg,morphcolor_vertex:Rg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Lg,normal_fragment_begin:Ig,normal_fragment_maps:Ug,normal_pars_fragment:Ng,normal_pars_vertex:Fg,normal_vertex:zg,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Gg,premultiplied_alpha_fragment:Xg,project_vertex:qg,dithering_fragment:$g,dithering_pars_fragment:Yg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Qg,shadowmask_pars_fragment:tv,skinbase_vertex:ev,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:rv,specularmap_fragment:sv,specularmap_pars_fragment:ov,tonemapping_fragment:av,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:uv,uv_pars_fragment:hv,uv_pars_vertex:fv,uv_vertex:dv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:vv,backgroundCube_frag:xv,cube_vert:_v,cube_frag:yv,depth_vert:Mv,depth_frag:Sv,distanceRGBA_vert:wv,distanceRGBA_frag:bv,equirect_vert:Ev,equirect_frag:Tv,linedashed_vert:Av,linedashed_frag:Cv,meshbasic_vert:Rv,meshbasic_frag:Pv,meshlambert_vert:Dv,meshlambert_frag:Lv,meshmatcap_vert:Iv,meshmatcap_frag:Uv,meshnormal_vert:Nv,meshnormal_frag:Fv,meshphong_vert:zv,meshphong_frag:Ov,meshphysical_vert:kv,meshphysical_frag:Bv,meshtoon_vert:Hv,meshtoon_frag:Vv,points_vert:Wv,points_frag:Gv,shadow_vert:Xv,shadow_frag:qv,sprite_vert:$v,sprite_frag:Yv},kt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Qn={basic:{uniforms:gn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:gn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new oe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:gn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:gn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:gn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new oe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:gn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:gn([kt.points,kt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:gn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:gn([kt.common,kt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:gn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:gn([kt.sprite,kt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:gn([kt.common,kt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:gn([kt.lights,kt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Qn.physical={uniforms:gn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ko={r:0,b:0,g:0},Qi=new Ge,jv=new ne;function Zv(n,t,e,i,r,s,o){const a=new oe(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const w=m(x);w===null?p(a,c):w&&w.isColor&&(p(w,1),_=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===La)?(u===void 0&&(u=new re(new Zt(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:ss(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qi.copy(_.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Qi)),u.material.toneMapped=ve.getTransfer(w.colorSpace)!==Ae,(f!==w||d!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new re(new rn(2,2),new ge({name:"BackgroundMaterial",uniforms:ss(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ve.getTransfer(w.colorSpace)!==Ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(ko,B0(n)),i.buffers.color.setClear(ko.r,ko.g,ko.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:g,dispose:y}}function Kv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,T,I,O,z){let F=!1;const U=f(O,I,T);s!==U&&(s=U,l(s.object)),F=h(b,O,I,z),F&&m(b,O,I,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(b,T,I,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,T,I){const O=I.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let F=z[T.id];F===void 0&&(F={},z[T.id]=F);let U=F[O];return U===void 0&&(U=d(c()),F[O]=U),U}function d(b){const T=[],I=[],O=[];for(let z=0;z<e;z++)T[z]=0,I[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:O,object:b,attributes:{},index:null}}function h(b,T,I,O){const z=s.attributes,F=T.attributes;let U=0;const k=I.getAttributes();for(const D in k)if(k[D].location>=0){const G=z[D];let W=F[D];if(W===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),G===void 0||G.attribute!==W||W&&G.data!==W.data)return!0;U++}return s.attributesNum!==U||s.index!==O}function m(b,T,I,O){const z={},F=T.attributes;let U=0;const k=I.getAttributes();for(const D in k)if(k[D].location>=0){let G=F[D];G===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(G=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(G=b.instanceColor));const W={};W.attribute=G,G&&G.data&&(W.data=G.data),z[D]=W,U++}s.attributes=z,s.attributesNum=U,s.index=O}function v(){const b=s.newAttributes;for(let T=0,I=b.length;T<I;T++)b[T]=0}function g(b){p(b,0)}function p(b,T){const I=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;I[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),z[b]!==T&&(n.vertexAttribDivisor(b,T),z[b]=T)}function y(){const b=s.newAttributes,T=s.enabledAttributes;for(let I=0,O=T.length;I<O;I++)T[I]!==b[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function x(b,T,I,O,z,F,U){U===!0?n.vertexAttribIPointer(b,T,I,z,F):n.vertexAttribPointer(b,T,I,O,z,F)}function _(b,T,I,O){v();const z=O.attributes,F=I.getAttributes(),U=T.defaultAttributeValues;for(const k in F){const D=F[k];if(D.location>=0){let H=z[k];if(H===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),H!==void 0){const G=H.normalized,W=H.itemSize,X=t.get(H);if(X===void 0)continue;const st=X.buffer,lt=X.type,V=X.bytesPerElement,nt=lt===n.INT||lt===n.UNSIGNED_INT||H.gpuType===Jc;if(H.isInterleavedBufferAttribute){const ft=H.data,bt=ft.stride,Ft=H.offset;if(ft.isInstancedInterleavedBuffer){for(let xt=0;xt<D.locationSize;xt++)p(D.location+xt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let xt=0;xt<D.locationSize;xt++)g(D.location+xt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let xt=0;xt<D.locationSize;xt++)x(D.location+xt,W/D.locationSize,lt,G,bt*V,(Ft+W/D.locationSize*xt)*V,nt)}else{if(H.isInstancedBufferAttribute){for(let ft=0;ft<D.locationSize;ft++)p(D.location+ft,H.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ft=0;ft<D.locationSize;ft++)g(D.location+ft);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ft=0;ft<D.locationSize;ft++)x(D.location+ft,W/D.locationSize,lt,G,W*V,W/D.locationSize*ft*V,nt)}}else if(U!==void 0){const G=U[k];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(D.location,G);break;case 3:n.vertexAttrib3fv(D.location,G);break;case 4:n.vertexAttrib4fv(D.location,G);break;default:n.vertexAttrib1fv(D.location,G)}}}}y()}function w(){C();for(const b in i){const T=i[b];for(const I in T){const O=T[I];for(const z in O)u(O[z].object),delete O[z];delete T[I]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const T=i[b.id];for(const I in T){const O=T[I];for(const z in O)u(O[z].object),delete O[z];delete T[I]}delete i[b.id]}function E(b){for(const T in i){const I=i[T];if(I[b.id]===void 0)continue;const O=I[b.id];for(const z in O)u(O[z].object),delete O[z];delete I[b.id]}}function C(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Jv(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),e.update(u,i,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];e.update(h,i,1)}function c(l,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*d[v];e.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Zn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Jn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ti&&!C)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:w,maxSamples:S}}function t1(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new nr,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const y=s?0:i,x=y*4;let _=p.clippingState||null;c.value=_,_=u(m,d,x,h);for(let w=0;w!==x;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,h,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=h+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=h;x!==v;++x,_+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function e1(n){let t=new WeakMap;function e(o,a){return a===Zl?o.mapping=is:a===Kl&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zl||a===Kl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yp(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const qr=4,uh=[.125,.215,.35,.446,.526,.582],sr=20,_l=new fm,hh=new oe;let yl=null,Ml=0,Sl=0,wl=!1;const ir=(1+Math.sqrt(5))/2,Br=1/ir,fh=[new P(-ir,Br,0),new P(ir,Br,0),new P(-Br,0,ir),new P(Br,0,ir),new P(0,ir,-Br),new P(0,ir,Br),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],n1=new P;class dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=n1}=s;yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,Ml,Sl),this._renderer.xr.enabled=wl,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:vr,format:Zn,colorSpace:fr,depthBuffer:!1},r=ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(s)),this._blurMaterial=r1(s,t,e)}return r}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,i,r,s){const c=new Bn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(hh),f.toneMapping=Wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new z0({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new re(new Zt,v);let p=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(hh),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;Bo(r,_*w,x>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(g,c),f.render(t,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===is||t.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Bo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,_l)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fh[(r-s-1)%fh.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new re(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*sr-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):sr;g>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const p=[];let y=0;for(let E=0;E<sr;++E){const C=E/v,M=Math.exp(-C*C/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const _=this._sizeLods[r],w=3*_*(r>x-qr?r-x+qr:0),S=4*(this._cubeSize-_);Bo(e,w,S,3*_,2*_),c.setRenderTarget(e),c.render(f,_l)}}function i1(n){const t=[],e=[],i=[];let r=n;const s=n-qr+1+uh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-qr?c=uh[o-n+qr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*h),x=new Float32Array(g*m*h),_=new Float32Array(p*m*h);for(let S=0;S<h;S++){const E=S%3*2/3-1,C=S>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(M,v*m*S),x.set(d,g*m*S);const b=[S,S,S,S,S,S];_.set(b,p*m*S)}const w=new ee;w.setAttribute("position",new se(y,v)),w.setAttribute("uv",new se(x,g)),w.setAttribute("faceIndex",new se(_,p)),t.push(w),r>qr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ph(n,t,e){const i=new dr(n,t,e);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function r1(n,t,e){const i=new Float32Array(sr),r=new P(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:du(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function mh(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gh(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function s1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zl||c===Kl,u=c===is||c===rs;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new dh(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(e===null&&(e=new dh(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function o1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&qs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a1(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(t.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)t.update(d[h],n.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,m=f.attributes.position;let v=0;if(h!==null){const y=h.array;v=h.version;for(let x=0,_=y.length;x<_;x+=3){const w=y[x+0],S=y[x+1],E=y[x+2];d.push(w,S,S,E,E,w)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const w=x+0,S=x+1,E=x+2;d.push(w,S,S,E,E,w)}}else return;const g=new(U0(d)?k0:O0)(d,1);g.version=v;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function l1(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),e.update(h,i,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];e.update(g,i,1)}function f(d,h,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=h[y]*v[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function c1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function u1(n,t,e){const i=new WeakMap,r=new pe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;h===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const S=new Float32Array(_*w*4*f),E=new N0(S,_,w,f);E.type=ti,E.needsUpdate=!0;const C=x*4;for(let b=0;b<f;b++){const T=g[b],I=p[b],O=y[b],z=_*w*4*b;for(let F=0;F<T.count;F++){const U=F*C;h===!0&&(r.fromBufferAttribute(T,F),S[z+U+0]=r.x,S[z+U+1]=r.y,S[z+U+2]=r.z,S[z+U+3]=0),m===!0&&(r.fromBufferAttribute(I,F),S[z+U+4]=r.x,S[z+U+5]=r.y,S[z+U+6]=r.z,S[z+U+7]=0),v===!0&&(r.fromBufferAttribute(O,F),S[z+U+8]=r.x,S[z+U+9]=r.y,S[z+U+10]=r.z,S[z+U+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new Nt(_,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];const m=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function h1(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const sf=new ln,vh=new X0(1,1),of=new N0,af=new Qd,lf=new V0,xh=[],_h=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=xh[r];if(s===void 0&&(s=new Float32Array(r),xh[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function za(n,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function f1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function d1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function p1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function m1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function g1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),tn(e,i)}}function v1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),tn(e,i)}}function x1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),tn(e,i)}}function _1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function y1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function M1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function S1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function w1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function b1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function E1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function T1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function A1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vh.compareFunction=I0,s=vh):s=sf,e.setTexture2D(t||s,r)}function C1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||af,r)}function R1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||lf,r)}function P1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||of,r)}function D1(n){switch(n){case 5126:return f1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return M1;case 35669:case 35673:return S1;case 5125:return w1;case 36294:return b1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return P1}}function L1(n,t){n.uniform1fv(this.addr,t)}function I1(n,t){const e=ds(t,this.size,2);n.uniform2fv(this.addr,e)}function U1(n,t){const e=ds(t,this.size,3);n.uniform3fv(this.addr,e)}function N1(n,t){const e=ds(t,this.size,4);n.uniform4fv(this.addr,e)}function F1(n,t){const e=ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function z1(n,t){const e=ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function O1(n,t){const e=ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function k1(n,t){n.uniform1iv(this.addr,t)}function B1(n,t){n.uniform2iv(this.addr,t)}function H1(n,t){n.uniform3iv(this.addr,t)}function V1(n,t){n.uniform4iv(this.addr,t)}function W1(n,t){n.uniform1uiv(this.addr,t)}function G1(n,t){n.uniform2uiv(this.addr,t)}function X1(n,t){n.uniform3uiv(this.addr,t)}function q1(n,t){n.uniform4uiv(this.addr,t)}function $1(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||sf,s[o])}function Y1(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||af,s[o])}function j1(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||lf,s[o])}function Z1(n,t,e){const i=this.cache,r=t.length,s=za(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||of,s[o])}function K1(n){switch(n){case 5126:return L1;case 35664:return I1;case 35665:return U1;case 35666:return N1;case 35674:return F1;case 35675:return z1;case 35676:return O1;case 5124:case 35670:return k1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return G1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Z1}}class J1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=D1(e.type)}}class Q1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K1(e.type)}}class tx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function wh(n,t){n.seq.push(t),n.map[t.id]=t}function ex(n,t,e){const i=n.name,r=i.length;for(bl.lastIndex=0;;){const s=bl.exec(i),o=bl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){wh(e,l===void 0?new J1(a,n,t):new Q1(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new tx(a),wh(e,f)),e=f}}}class ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ex(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function bh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nx=37297;let ix=0;function rx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Eh=new ae;function sx(n){ve._getMatrix(Eh,ve.workingColorSpace,n);const t=`mat3( ${Eh.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(n)){case ha:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Th(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+rx(n.getShaderSource(t),a)}else return s}function ox(n,t){const e=sx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ax(n,t){let e;switch(t){case Ed:e="Linear";break;case Td:e="Reinhard";break;case Ad:e="Cineon";break;case Cd:e="ACESFilmic";break;case Pd:e="AgX";break;case Dd:e="Neutral";break;case Rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new P;function lx(){ve.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function ux(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ps(n){return n!==""}function Ah(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ch(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(fx,px)}const dx=new Map;function px(n,t){let e=le[t];if(e===void 0){const i=dx.get(t);if(i!==void 0)e=le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}const mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(n){return n.replace(mx,gx)}function gx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ph(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function vx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===w0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function xx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case rs:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _x(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function yx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case b0:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case bd:t="ENVMAP_BLENDING_ADD";break}return t}function Mx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Sx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=vx(e),l=xx(e),u=_x(e),f=yx(e),d=Mx(e),h=cx(e),m=ux(s),v=r.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ps).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(g=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?le.tonemapping_pars_fragment:"",e.toneMapping!==Wi?ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=Lc(o),o=Ah(o,e),o=Ch(o,e),a=Lc(a),a=Ah(a,e),a=Ch(a,e),o=Rh(o),a=Rh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+o,_=y+p+a,w=bh(r,r.VERTEX_SHADER,x),S=bh(r,r.FRAGMENT_SHADER,_);r.attachShader(v,w),r.attachShader(v,S),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(T){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(w)||"",z=r.getShaderInfoLog(S)||"",F=I.trim(),U=O.trim(),k=z.trim();let D=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,S);else{const G=Th(r,w,"vertex"),W=Th(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+G+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||k==="")&&(H=!1);H&&(T.diagnostics={runnable:D,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(w),r.deleteShader(S),C=new ra(r,v),M=hx(r,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,nx)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let wx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ex(t),e.set(t,i)),i}}class Ex{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}}function Tx(n,t,e,i,r,s,o){const a=new su,c=new bx,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,b,T,I,O){const z=I.fog,F=O.geometry,U=M.isMeshStandardMaterial?I.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),D=k&&k.mapping===La?k.image.height:null,H=m[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const G=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,W=G!==void 0?G.length:0;let X=0;F.morphAttributes.position!==void 0&&(X=1),F.morphAttributes.normal!==void 0&&(X=2),F.morphAttributes.color!==void 0&&(X=3);let st,lt,V,nt;if(H){const Kt=Qn[H];st=Kt.vertexShader,lt=Kt.fragmentShader}else st=M.vertexShader,lt=M.fragmentShader,c.update(M),V=c.getVertexShaderID(M),nt=c.getFragmentShaderID(M);const ft=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,xt=O.isBatchedMesh===!0,zt=!!M.map,at=!!M.matcap,R=!!k,q=!!M.aoMap,Z=!!M.lightMap,et=!!M.bumpMap,K=!!M.normalMap,mt=!!M.displacementMap,gt=!!M.emissiveMap,Mt=!!M.metalnessMap,vt=!!M.roughnessMap,At=M.anisotropy>0,N=M.clearcoat>0,A=M.dispersion>0,j=M.iridescence>0,tt=M.sheen>0,yt=M.transmission>0,ht=At&&!!M.anisotropyMap,Gt=N&&!!M.clearcoatMap,Pt=N&&!!M.clearcoatNormalMap,Vt=N&&!!M.clearcoatRoughnessMap,rt=j&&!!M.iridescenceMap,Y=j&&!!M.iridescenceThicknessMap,St=tt&&!!M.sheenColorMap,J=tt&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,wt=!!M.specularColorMap,Ot=!!M.specularIntensityMap,B=yt&&!!M.transmissionMap,_t=yt&&!!M.thicknessMap,Et=!!M.gradientMap,ot=!!M.alphaMap,ct=M.alphaTest>0,ut=!!M.alphaHash,Ut=!!M.extensions;let Rt=Wi;M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Rt=n.toneMapping);const Wt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:lt,defines:M.defines,customVertexShaderID:V,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:xt,batchingColor:xt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:at,envMap:R,envMapMode:R&&k.mapping,envMapCubeUVHeight:D,aoMap:q,lightMap:Z,bumpMap:et,normalMap:K,displacementMap:d&&mt,emissiveMap:gt,normalMapObjectSpace:K&&M.normalMapType===Fd,normalMapTangentSpace:K&&M.normalMapType===Nd,metalnessMap:Mt,roughnessMap:vt,anisotropy:At,anisotropyMap:ht,clearcoat:N,clearcoatMap:Gt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Vt,dispersion:A,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:Y,sheen:tt,sheenColorMap:St,sheenRoughnessMap:J,specularMap:Ct,specularColorMap:wt,specularIntensityMap:Ot,transmission:yt,transmissionMap:B,thicknessMap:_t,gradientMap:Et,opaque:M.transparent===!1&&M.blending===jr&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:ct,alphaHash:ut,combine:M.combine,mapUv:zt&&v(M.map.channel),aoMapUv:q&&v(M.aoMap.channel),lightMapUv:Z&&v(M.lightMap.channel),bumpMapUv:et&&v(M.bumpMap.channel),normalMapUv:K&&v(M.normalMap.channel),displacementMapUv:mt&&v(M.displacementMap.channel),emissiveMapUv:gt&&v(M.emissiveMap.channel),metalnessMapUv:Mt&&v(M.metalnessMap.channel),roughnessMapUv:vt&&v(M.roughnessMap.channel),anisotropyMapUv:ht&&v(M.anisotropyMap.channel),clearcoatMapUv:Gt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:J&&v(M.sheenRoughnessMap.channel),specularMapUv:Ct&&v(M.specularMap.channel),specularColorMapUv:wt&&v(M.specularColorMap.channel),specularIntensityMapUv:Ot&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:_t&&v(M.thicknessMap.channel),alphaMapUv:ot&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(K||At),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(zt||ot),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&ve.getTransfer(M.map.colorSpace)===Ae,decodeVideoTextureEmissive:gt&&M.emissiveMap.isVideoTexture===!0&&ve.getTransfer(M.emissiveMap.colorSpace)===Ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oe,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)b.push(T),b.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const b=m[M.type];let T;if(b){const I=Qn[b];T=gp.clone(I.uniforms)}else T=M.uniforms;return T}function w(M,b){let T;for(let I=0,O=u.length;I<O;I++){const z=u[I];if(z.cacheKey===b){T=z,++T.usedTimes;break}}return T===void 0&&(T=new Sx(n,b,M,s),u.push(T)),T}function S(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:C}}function Ax(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Cx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Dh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,h,m,v,g){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:m,renderOrder:f.renderOrder,z:v,group:g},n[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=v,p.group=g),t++,p}function a(f,d,h,m,v,g){const p=o(f,d,h,m,v,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):e.push(p)}function c(f,d,h,m,v,g){const p=o(f,d,h,m,v,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):e.unshift(p)}function l(f,d){e.length>1&&e.sort(f||Cx),i.length>1&&i.sort(d||Dh),r.length>1&&r.sort(d||Dh)}function u(){for(let f=t,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Rx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Lh,n.set(i,[o])):r>=s.length?(o=new Lh,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Px(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new oe};break;case"SpotLight":e={position:new P,direction:new P,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Lx=0;function Ix(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ux(n){const t=new Px,e=Dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const r=new P,s=new ne,o=new ne;function a(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,w=0,S=0,E=0;l.sort(Ix);for(let M=0,b=l.length;M<b;M++){const T=l[M],I=T.color,O=T.intensity,z=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*O,f+=I.g*O,d+=I.b*O;else if(T.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(T.sh.coefficients[U],O);E++}else if(T.isDirectionalLight){const U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const k=T.shadow,D=e.get(T);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,i.directionalShadow[h]=D,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=T.shadow.matrix,y++}i.directional[h]=U,h++}else if(T.isSpotLight){const U=t.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(I).multiplyScalar(O),U.distance=z,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,i.spot[v]=U;const k=T.shadow;if(T.map&&(i.spotLightMap[w]=T.map,w++,k.updateMatrices(T),T.castShadow&&S++),i.spotLightMatrix[v]=k.matrix,T.castShadow){const D=e.get(T);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=F,_++}v++}else if(T.isRectAreaLight){const U=t.get(T);U.color.copy(I).multiplyScalar(O),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=U,g++}else if(T.isPointLight){const U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),U.distance=T.distance,U.decay=T.decay,T.castShadow){const k=T.shadow,D=e.get(T);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=T.shadow.matrix,x++}i.point[m]=U,m++}else if(T.isHemisphereLight){const U=t.get(T);U.skyColor.copy(T.color).multiplyScalar(O),U.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[p]=U,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==h||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==w||C.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,C.directionalLength=h,C.pointLength=m,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=w,C.numLightProbes=E,i.version=Lx++)}function c(l,u){let f=0,d=0,h=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(x.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Ih(n){const t=new Ux(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Nx(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ih(n),t.set(r,[a])):s>=o.length?(a=new Ih(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
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
}`;function Ox(n,t,e){let i=new W0;const r=new Nt,s=new Nt,o=new pe,a=new am({depthPacking:Ud}),c=new lm,l={},u=e.maxTextureSize,f={[ii]:Mn,[Mn]:ii,[Oe]:Oe},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Fx,fragmentShader:zx}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new ee;m.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new re(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w0;let p=this.type;this.render=function(S,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Vi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==di&&this.type===di,z=p===di&&this.type!==di;for(let F=0,U=S.length;F<U;F++){const k=S[F],D=k.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const H=D.getFrameExtents();if(r.multiply(H),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null||O===!0||z===!0){const W=this.type!==di?{minFilter:Fn,magFilter:Fn}:{};D.map!==null&&D.map.dispose(),D.map=new dr(r.x,r.y,W),D.map.texture.name=k.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const G=D.getViewportCount();for(let W=0;W<G;W++){const X=D.getViewport(W);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(o),D.updateMatrices(k,W),i=D.getFrustum(),_(E,C,D.camera,k,this.type)}D.isPointLightShadow!==!0&&this.type===di&&y(D,C),D.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,b,T)};function y(S,E){const C=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new dr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,v,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,C,h,v,null)}function x(S,E,C,M){let b=null;const T=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)b=T;else if(b=C.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=b.uuid,O=E.uuid;let z=l[I];z===void 0&&(z={},l[I]=z);let F=z[O];F===void 0&&(F=b.clone(),z[O]=F,E.addEventListener("dispose",w)),b=F}if(b.visible=E.visible,b.wireframe=E.wireframe,M===di?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=C}return b}function _(S,E,C,M,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===di)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const O=t.update(S),z=S.material;if(Array.isArray(z)){const F=O.groups;for(let U=0,k=F.length;U<k;U++){const D=F[U],H=z[D.materialIndex];if(H&&H.visible){const G=x(S,H,M,b);S.onBeforeShadow(n,S,E,C,O,G,D),n.renderBufferDirect(C,null,O,G,S,D),S.onAfterShadow(n,S,E,C,O,G,D)}}}else if(z.visible){const F=x(S,z,M,b);S.onBeforeShadow(n,S,E,C,O,F,null),n.renderBufferDirect(C,null,O,F,S,null),S.onAfterShadow(n,S,E,C,O,F,null)}}const I=S.children;for(let O=0,z=I.length;O<z;O++)_(I[O],E,C,M,b)}function w(S){S.target.removeEventListener("dispose",w);for(const C in l){const M=l[C],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const kx={[Wl]:Gl,[Xl]:Yl,[ql]:jl,[ns]:$l,[Gl]:Wl,[Yl]:Xl,[jl]:ql,[$l]:ns};function Bx(n,t){function e(){let B=!1;const _t=new pe;let Et=null;const ot=new pe(0,0,0,0);return{setMask:function(ct){Et!==ct&&!B&&(n.colorMask(ct,ct,ct,ct),Et=ct)},setLocked:function(ct){B=ct},setClear:function(ct,ut,Ut,Rt,Wt){Wt===!0&&(ct*=Rt,ut*=Rt,Ut*=Rt),_t.set(ct,ut,Ut,Rt),ot.equals(_t)===!1&&(n.clearColor(ct,ut,Ut,Rt),ot.copy(_t))},reset:function(){B=!1,Et=null,ot.set(-1,0,0,0)}}}function i(){let B=!1,_t=!1,Et=null,ot=null,ct=null;return{setReversed:function(ut){if(_t!==ut){const Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=ut;const Rt=ct;ct=null,this.setClear(Rt)}},getReversed:function(){return _t},setTest:function(ut){ut?ft(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(ut){Et!==ut&&!B&&(n.depthMask(ut),Et=ut)},setFunc:function(ut){if(_t&&(ut=kx[ut]),ot!==ut){switch(ut){case Wl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Xl:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case ql:n.depthFunc(n.EQUAL);break;case $l:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=ut}},setLocked:function(ut){B=ut},setClear:function(ut){ct!==ut&&(_t&&(ut=1-ut),n.clearDepth(ut),ct=ut)},reset:function(){B=!1,Et=null,ot=null,ct=null,_t=!1}}}function r(){let B=!1,_t=null,Et=null,ot=null,ct=null,ut=null,Ut=null,Rt=null,Wt=null;return{setTest:function(Kt){B||(Kt?ft(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Kt){_t!==Kt&&!B&&(n.stencilMask(Kt),_t=Kt)},setFunc:function(Kt,Me,Fe){(Et!==Kt||ot!==Me||ct!==Fe)&&(n.stencilFunc(Kt,Me,Fe),Et=Kt,ot=Me,ct=Fe)},setOp:function(Kt,Me,Fe){(ut!==Kt||Ut!==Me||Rt!==Fe)&&(n.stencilOp(Kt,Me,Fe),ut=Kt,Ut=Me,Rt=Fe)},setLocked:function(Kt){B=Kt},setClear:function(Kt){Wt!==Kt&&(n.clearStencil(Kt),Wt=Kt)},reset:function(){B=!1,_t=null,Et=null,ot=null,ct=null,ut=null,Ut=null,Rt=null,Wt=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,w=null,S=null,E=new oe(0,0,0),C=0,M=!1,b=null,T=null,I=null,O=null,z=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=k>=1):D.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=k>=2);let H=null,G={};const W=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),st=new pe().fromArray(W),lt=new pe().fromArray(X);function V(B,_t,Et,ot){const ct=new Uint8Array(4),ut=n.createTexture();n.bindTexture(B,ut),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<Et;Ut++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(_t+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return ut}const nt={};nt[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(n.DEPTH_TEST),o.setFunc(ns),et(!1),K(Tu),ft(n.CULL_FACE),q(Vi);function ft(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function bt(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ft(B,_t){return f[B]!==_t?(n.bindFramebuffer(B,_t),f[B]=_t,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function xt(B,_t){let Et=h,ot=!1;if(B){Et=d.get(_t),Et===void 0&&(Et=[],d.set(_t,Et));const ct=B.textures;if(Et.length!==ct.length||Et[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Ut=ct.length;ut<Ut;ut++)Et[ut]=n.COLOR_ATTACHMENT0+ut;Et.length=ct.length,ot=!0}}else Et[0]!==n.BACK&&(Et[0]=n.BACK,ot=!0);ot&&n.drawBuffers(Et)}function zt(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const at={[rr]:n.FUNC_ADD,[od]:n.FUNC_SUBTRACT,[ad]:n.FUNC_REVERSE_SUBTRACT};at[ld]=n.MIN,at[cd]=n.MAX;const R={[ud]:n.ZERO,[hd]:n.ONE,[fd]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[xd]:n.SRC_ALPHA_SATURATE,[gd]:n.DST_COLOR,[pd]:n.DST_ALPHA,[dd]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[vd]:n.ONE_MINUS_DST_COLOR,[md]:n.ONE_MINUS_DST_ALPHA,[_d]:n.CONSTANT_COLOR,[yd]:n.ONE_MINUS_CONSTANT_COLOR,[Md]:n.CONSTANT_ALPHA,[Sd]:n.ONE_MINUS_CONSTANT_ALPHA};function q(B,_t,Et,ot,ct,ut,Ut,Rt,Wt,Kt){if(B===Vi){v===!0&&(bt(n.BLEND),v=!1);return}if(v===!1&&(ft(n.BLEND),v=!0),B!==sd){if(B!==g||Kt!==M){if((p!==rr||_!==rr)&&(n.blendEquation(n.FUNC_ADD),p=rr,_=rr),Kt)switch(B){case jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case es:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Au:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,x=null,w=null,S=null,E.set(0,0,0),C=0,g=B,M=Kt}return}ct=ct||_t,ut=ut||Et,Ut=Ut||ot,(_t!==p||ct!==_)&&(n.blendEquationSeparate(at[_t],at[ct]),p=_t,_=ct),(Et!==y||ot!==x||ut!==w||Ut!==S)&&(n.blendFuncSeparate(R[Et],R[ot],R[ut],R[Ut]),y=Et,x=ot,w=ut,S=Ut),(Rt.equals(E)===!1||Wt!==C)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Wt),E.copy(Rt),C=Wt),g=B,M=!1}function Z(B,_t){B.side===Oe?bt(n.CULL_FACE):ft(n.CULL_FACE);let Et=B.side===Mn;_t&&(Et=!Et),et(Et),B.blending===jr&&B.transparent===!1?q(Vi):q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ot=B.stencilWrite;a.setTest(ot),ot&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function K(B){B!==nd?(ft(n.CULL_FACE),B!==T&&(B===Tu?n.cullFace(n.BACK):B===id?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),T=B}function mt(B){B!==I&&(U&&n.lineWidth(B),I=B)}function gt(B,_t,Et){B?(ft(n.POLYGON_OFFSET_FILL),(O!==_t||z!==Et)&&(n.polygonOffset(_t,Et),O=_t,z=Et)):bt(n.POLYGON_OFFSET_FILL)}function Mt(B){B?ft(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function vt(B){B===void 0&&(B=n.TEXTURE0+F-1),H!==B&&(n.activeTexture(B),H=B)}function At(B,_t,Et){Et===void 0&&(H===null?Et=n.TEXTURE0+F-1:Et=H);let ot=G[Et];ot===void 0&&(ot={type:void 0,texture:void 0},G[Et]=ot),(ot.type!==B||ot.texture!==_t)&&(H!==Et&&(n.activeTexture(Et),H=Et),n.bindTexture(B,_t||nt[B]),ot.type=B,ot.texture=_t)}function N(){const B=G[H];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(B){st.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),st.copy(B))}function J(B){lt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),lt.copy(B))}function Ct(B,_t){let Et=l.get(_t);Et===void 0&&(Et=new WeakMap,l.set(_t,Et));let ot=Et.get(B);ot===void 0&&(ot=n.getUniformBlockIndex(_t,B.name),Et.set(B,ot))}function wt(B,_t){const ot=l.get(_t).get(B);c.get(_t)!==ot&&(n.uniformBlockBinding(_t,ot,B.__bindingPointIndex),c.set(_t,ot))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},H=null,G={},f={},d=new WeakMap,h=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,w=null,S=null,E=new oe(0,0,0),C=0,M=!1,b=null,T=null,I=null,O=null,z=null,st.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ft,disable:bt,bindFramebuffer:Ft,drawBuffers:xt,useProgram:zt,setBlending:q,setMaterial:Z,setFlipSided:et,setCullFace:K,setLineWidth:mt,setPolygonOffset:gt,setScissorTest:Mt,activeTexture:vt,bindTexture:At,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:j,texImage2D:rt,texImage3D:Y,updateUBOMapping:Ct,uniformBlockBinding:wt,texStorage2D:Pt,texStorage3D:Vt,texSubImage2D:tt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Gt,scissor:St,viewport:J,reset:Ot}}function Hx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return h?new OffscreenCanvas(N,A):Xs("canvas")}function v(N,A,j){let tt=1;const yt=At(N);if((yt.width>j||yt.height>j)&&(tt=j/Math.max(yt.width,yt.height)),tt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(tt*yt.width),Gt=Math.floor(tt*yt.height);f===void 0&&(f=m(ht,Gt));const Pt=A?m(ht,Gt):f;return Pt.width=ht,Pt.height=Gt,Pt.getContext("2d").drawImage(N,0,0,ht,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Gt+")."),Pt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){n.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(N,A,j,tt,yt=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=A;if(A===n.RED&&(j===n.FLOAT&&(ht=n.R32F),j===n.HALF_FLOAT&&(ht=n.R16F),j===n.UNSIGNED_BYTE&&(ht=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ht=n.R8UI),j===n.UNSIGNED_SHORT&&(ht=n.R16UI),j===n.UNSIGNED_INT&&(ht=n.R32UI),j===n.BYTE&&(ht=n.R8I),j===n.SHORT&&(ht=n.R16I),j===n.INT&&(ht=n.R32I)),A===n.RG&&(j===n.FLOAT&&(ht=n.RG32F),j===n.HALF_FLOAT&&(ht=n.RG16F),j===n.UNSIGNED_BYTE&&(ht=n.RG8)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(ht=n.RG8UI),j===n.UNSIGNED_SHORT&&(ht=n.RG16UI),j===n.UNSIGNED_INT&&(ht=n.RG32UI),j===n.BYTE&&(ht=n.RG8I),j===n.SHORT&&(ht=n.RG16I),j===n.INT&&(ht=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(ht=n.RGB8UI),j===n.UNSIGNED_SHORT&&(ht=n.RGB16UI),j===n.UNSIGNED_INT&&(ht=n.RGB32UI),j===n.BYTE&&(ht=n.RGB8I),j===n.SHORT&&(ht=n.RGB16I),j===n.INT&&(ht=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(ht=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(ht=n.RGBA16UI),j===n.UNSIGNED_INT&&(ht=n.RGBA32UI),j===n.BYTE&&(ht=n.RGBA8I),j===n.SHORT&&(ht=n.RGBA16I),j===n.INT&&(ht=n.RGBA32I)),A===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(ht=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(ht=n.R11F_G11F_B10F)),A===n.RGBA){const Gt=yt?ha:ve.getTransfer(tt);j===n.FLOAT&&(ht=n.RGBA32F),j===n.HALF_FLOAT&&(ht=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ht=Gt===Ae?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(ht=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ht=n.RGB5_A1)}return(ht===n.R16F||ht===n.R32F||ht===n.RG16F||ht===n.RG32F||ht===n.RGBA16F||ht===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function _(N,A){let j;return N?A===null||A===hr||A===Vs?j=n.DEPTH24_STENCIL8:A===ti?j=n.DEPTH32F_STENCIL8:A===Hs&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===hr||A===Vs?j=n.DEPTH_COMPONENT24:A===ti?j=n.DEPTH_COMPONENT32F:A===Hs&&(j=n.DEPTH_COMPONENT16),j}function w(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Fn&&N.minFilter!==Nn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function S(N){const A=N.target;A.removeEventListener("dispose",S),C(A),A.isVideoTexture&&u.delete(A)}function E(N){const A=N.target;A.removeEventListener("dispose",E),b(A)}function C(N){const A=i.get(N);if(A.__webglInit===void 0)return;const j=N.source,tt=d.get(j);if(tt){const yt=tt[A.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&M(N),Object.keys(tt).length===0&&d.delete(j)}i.remove(N)}function M(N){const A=i.get(N);n.deleteTexture(A.__webglTexture);const j=N.source,tt=d.get(j);delete tt[A.__cacheKey],o.memory.textures--}function b(N){const A=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(A.__webglFramebuffer[tt]))for(let yt=0;yt<A.__webglFramebuffer[tt].length;yt++)n.deleteFramebuffer(A.__webglFramebuffer[tt][yt]);else n.deleteFramebuffer(A.__webglFramebuffer[tt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[tt])}else{if(Array.isArray(A.__webglFramebuffer))for(let tt=0;tt<A.__webglFramebuffer.length;tt++)n.deleteFramebuffer(A.__webglFramebuffer[tt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let tt=0;tt<A.__webglColorRenderbuffer.length;tt++)A.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[tt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=N.textures;for(let tt=0,yt=j.length;tt<yt;tt++){const ht=i.get(j[tt]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(j[tt])}i.remove(N)}let T=0;function I(){T=0}function O(){const N=T;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),T+=1,N}function z(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function F(N,A){const j=i.get(N);if(N.isVideoTexture&&Mt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const tt=N.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(j,N,A);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function U(N,A){const j=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){nt(j,N,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function k(N,A){const j=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){nt(j,N,A);return}e.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function D(N,A){const j=i.get(N);if(N.version>0&&j.__version!==N.version){ft(j,N,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}const H={[Bs]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},G={[Fn]:n.NEAREST,[Ld]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},W={[zd]:n.NEVER,[Wd]:n.ALWAYS,[Od]:n.LESS,[I0]:n.LEQUAL,[kd]:n.EQUAL,[Vd]:n.GEQUAL,[Bd]:n.GREATER,[Hd]:n.NOTEQUAL};function X(N,A){if(A.type===ti&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Nn||A.magFilter===Wa||A.magFilter===fo||A.magFilter===yi||A.minFilter===Nn||A.minFilter===Wa||A.minFilter===fo||A.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,H[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,H[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,H[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,G[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,G[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==fo&&A.minFilter!==yi||A.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function st(N,A){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",S));const tt=A.source;let yt=d.get(tt);yt===void 0&&(yt={},d.set(tt,yt));const ht=z(A);if(ht!==N.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),yt[ht].usedTimes++;const Gt=yt[N.__cacheKey];Gt!==void 0&&(yt[N.__cacheKey].usedTimes--,Gt.usedTimes===0&&M(A)),N.__cacheKey=ht,N.__webglTexture=yt[ht].texture}return j}function lt(N,A,j){return Math.floor(Math.floor(N/j)/A)}function V(N,A,j,tt){const ht=N.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,j,tt,A.data);else{ht.sort((Y,St)=>Y.start-St.start);let Gt=0;for(let Y=1;Y<ht.length;Y++){const St=ht[Gt],J=ht[Y],Ct=St.start+St.count,wt=lt(J.start,A.width,4),Ot=lt(St.start,A.width,4);J.start<=Ct+1&&wt===Ot&&lt(J.start+J.count-1,A.width,4)===wt?St.count=Math.max(St.count,J.start+J.count-St.start):(++Gt,ht[Gt]=J)}ht.length=Gt+1;const Pt=n.getParameter(n.UNPACK_ROW_LENGTH),Vt=n.getParameter(n.UNPACK_SKIP_PIXELS),rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let Y=0,St=ht.length;Y<St;Y++){const J=ht[Y],Ct=Math.floor(J.start/4),wt=Math.ceil(J.count/4),Ot=Ct%A.width,B=Math.floor(Ct/A.width),_t=wt,Et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Ot,B,_t,Et,j,tt,A.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Pt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function nt(N,A,j){let tt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(tt=n.TEXTURE_3D);const yt=st(N,A),ht=A.source;e.bindTexture(tt,N.__webglTexture,n.TEXTURE0+j);const Gt=i.get(ht);if(ht.version!==Gt.__version||yt===!0){e.activeTexture(n.TEXTURE0+j);const Pt=ve.getPrimaries(ve.workingColorSpace),Vt=A.colorSpace===an?null:ve.getPrimaries(A.colorSpace),rt=A.colorSpace===an||Pt===Vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Y=v(A.image,!1,r.maxTextureSize);Y=vt(A,Y);const St=s.convert(A.format,A.colorSpace),J=s.convert(A.type);let Ct=x(A.internalFormat,St,J,A.colorSpace,A.isVideoTexture);X(tt,A);let wt;const Ot=A.mipmaps,B=A.isVideoTexture!==!0,_t=Gt.__version===void 0||yt===!0,Et=ht.dataReady,ot=w(A,Y);if(A.isDepthTexture)Ct=_(A.format===Gs,A.type),_t&&(B?e.texStorage2D(n.TEXTURE_2D,1,Ct,Y.width,Y.height):e.texImage2D(n.TEXTURE_2D,0,Ct,Y.width,Y.height,0,St,J,null));else if(A.isDataTexture)if(Ot.length>0){B&&_t&&e.texStorage2D(n.TEXTURE_2D,ot,Ct,Ot[0].width,Ot[0].height);for(let ct=0,ut=Ot.length;ct<ut;ct++)wt=Ot[ct],B?Et&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,wt.width,wt.height,St,J,wt.data):e.texImage2D(n.TEXTURE_2D,ct,Ct,wt.width,wt.height,0,St,J,wt.data);A.generateMipmaps=!1}else B?(_t&&e.texStorage2D(n.TEXTURE_2D,ot,Ct,Y.width,Y.height),Et&&V(A,Y,St,J)):e.texImage2D(n.TEXTURE_2D,0,Ct,Y.width,Y.height,0,St,J,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){B&&_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Ct,Ot[0].width,Ot[0].height,Y.depth);for(let ct=0,ut=Ot.length;ct<ut;ct++)if(wt=Ot[ct],A.format!==Zn)if(St!==null)if(B){if(Et)if(A.layerUpdates.size>0){const Ut=ch(wt.width,wt.height,A.format,A.type);for(const Rt of A.layerUpdates){const Wt=wt.data.subarray(Rt*Ut/wt.data.BYTES_PER_ELEMENT,(Rt+1)*Ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Rt,wt.width,wt.height,1,St,Wt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,wt.width,wt.height,Y.depth,St,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Ct,wt.width,wt.height,Y.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,wt.width,wt.height,Y.depth,St,J,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Ct,wt.width,wt.height,Y.depth,0,St,J,wt.data)}else{B&&_t&&e.texStorage2D(n.TEXTURE_2D,ot,Ct,Ot[0].width,Ot[0].height);for(let ct=0,ut=Ot.length;ct<ut;ct++)wt=Ot[ct],A.format!==Zn?St!==null?B?Et&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Ct,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Et&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,wt.width,wt.height,St,J,wt.data):e.texImage2D(n.TEXTURE_2D,ct,Ct,wt.width,wt.height,0,St,J,wt.data)}else if(A.isDataArrayTexture)if(B){if(_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Ct,Y.width,Y.height,Y.depth),Et)if(A.layerUpdates.size>0){const ct=ch(Y.width,Y.height,A.format,A.type);for(const ut of A.layerUpdates){const Ut=Y.data.subarray(ut*ct/Y.data.BYTES_PER_ELEMENT,(ut+1)*ct/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,Y.width,Y.height,1,St,J,Ut)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,St,J,Y.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,Y.width,Y.height,Y.depth,0,St,J,Y.data);else if(A.isData3DTexture)B?(_t&&e.texStorage3D(n.TEXTURE_3D,ot,Ct,Y.width,Y.height,Y.depth),Et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,St,J,Y.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,Y.width,Y.height,Y.depth,0,St,J,Y.data);else if(A.isFramebufferTexture){if(_t)if(B)e.texStorage2D(n.TEXTURE_2D,ot,Ct,Y.width,Y.height);else{let ct=Y.width,ut=Y.height;for(let Ut=0;Ut<ot;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,Ct,ct,ut,0,St,J,null),ct>>=1,ut>>=1}}else if(Ot.length>0){if(B&&_t){const ct=At(Ot[0]);e.texStorage2D(n.TEXTURE_2D,ot,Ct,ct.width,ct.height)}for(let ct=0,ut=Ot.length;ct<ut;ct++)wt=Ot[ct],B?Et&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,St,J,wt):e.texImage2D(n.TEXTURE_2D,ct,Ct,St,J,wt);A.generateMipmaps=!1}else if(B){if(_t){const ct=At(Y);e.texStorage2D(n.TEXTURE_2D,ot,Ct,ct.width,ct.height)}Et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,J,Y)}else e.texImage2D(n.TEXTURE_2D,0,Ct,St,J,Y);g(A)&&p(tt),Gt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ft(N,A,j){if(A.image.length!==6)return;const tt=st(N,A),yt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);const ht=i.get(yt);if(yt.version!==ht.__version||tt===!0){e.activeTexture(n.TEXTURE0+j);const Gt=ve.getPrimaries(ve.workingColorSpace),Pt=A.colorSpace===an?null:ve.getPrimaries(A.colorSpace),Vt=A.colorSpace===an||Gt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const rt=A.isCompressedTexture||A.image[0].isCompressedTexture,Y=A.image[0]&&A.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!rt&&!Y?St[ut]=v(A.image[ut],!0,r.maxCubemapSize):St[ut]=Y?A.image[ut].image:A.image[ut],St[ut]=vt(A,St[ut]);const J=St[0],Ct=s.convert(A.format,A.colorSpace),wt=s.convert(A.type),Ot=x(A.internalFormat,Ct,wt,A.colorSpace),B=A.isVideoTexture!==!0,_t=ht.__version===void 0||tt===!0,Et=yt.dataReady;let ot=w(A,J);X(n.TEXTURE_CUBE_MAP,A);let ct;if(rt){B&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,Ot,J.width,J.height);for(let ut=0;ut<6;ut++){ct=St[ut].mipmaps;for(let Ut=0;Ut<ct.length;Ut++){const Rt=ct[Ut];A.format!==Zn?Ct!==null?B?Et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,Ot,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,0,0,Rt.width,Rt.height,Ct,wt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,Ot,Rt.width,Rt.height,0,Ct,wt,Rt.data)}}}else{if(ct=A.mipmaps,B&&_t){ct.length>0&&ot++;const ut=At(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,Ot,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Y){B?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Ct,wt,St[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ot,St[ut].width,St[ut].height,0,Ct,wt,St[ut].data);for(let Ut=0;Ut<ct.length;Ut++){const Wt=ct[Ut].image[ut].image;B?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,0,0,Wt.width,Wt.height,Ct,wt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,Ot,Wt.width,Wt.height,0,Ct,wt,Wt.data)}}else{B?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ct,wt,St[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ot,Ct,wt,St[ut]);for(let Ut=0;Ut<ct.length;Ut++){const Rt=ct[Ut];B?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,0,0,Ct,wt,Rt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,Ot,Ct,wt,Rt.image[ut])}}}g(A)&&p(n.TEXTURE_CUBE_MAP),ht.__version=yt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function bt(N,A,j,tt,yt,ht){const Gt=s.convert(j.format,j.colorSpace),Pt=s.convert(j.type),Vt=x(j.internalFormat,Gt,Pt,j.colorSpace),rt=i.get(A),Y=i.get(j);if(Y.__renderTarget=A,!rt.__hasExternalTextures){const St=Math.max(1,A.width>>ht),J=Math.max(1,A.height>>ht);yt===n.TEXTURE_3D||yt===n.TEXTURE_2D_ARRAY?e.texImage3D(yt,ht,Vt,St,J,A.depth,0,Gt,Pt,null):e.texImage2D(yt,ht,Vt,St,J,0,Gt,Pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),gt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,yt,Y.__webglTexture,0,mt(A)):(yt===n.TEXTURE_2D||yt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,yt,Y.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(N,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){const tt=A.depthTexture,yt=tt&&tt.isDepthTexture?tt.type:null,ht=_(A.stencilBuffer,yt),Gt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=mt(A);gt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,ht,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ht,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ht,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Gt,n.RENDERBUFFER,N)}else{const tt=A.textures;for(let yt=0;yt<tt.length;yt++){const ht=tt[yt],Gt=s.convert(ht.format,ht.colorSpace),Pt=s.convert(ht.type),Vt=x(ht.internalFormat,Gt,Pt,ht.colorSpace),rt=mt(A);j&&gt(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Vt,A.width,A.height):gt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,Vt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Vt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(A.depthTexture);tt.__renderTarget=A,(!tt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const yt=tt.__webglTexture,ht=mt(A);if(A.depthTexture.format===Ws)gt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,yt,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,yt,0);else if(A.depthTexture.format===Gs)gt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,yt,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function zt(N){const A=i.get(N),j=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const tt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),tt){const yt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,tt.removeEventListener("dispose",yt)};tt.addEventListener("dispose",yt),A.__depthDisposeCallback=yt}A.__boundDepthTexture=tt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const tt=N.texture.mipmaps;tt&&tt.length>0?xt(A.__webglFramebuffer[0],N):xt(A.__webglFramebuffer,N)}else if(j){A.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[tt]),A.__webglDepthbuffer[tt]===void 0)A.__webglDepthbuffer[tt]=n.createRenderbuffer(),Ft(A.__webglDepthbuffer[tt],N,!1);else{const yt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,ht)}}else{const tt=N.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ft(A.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(N,A,j){const tt=i.get(N);A!==void 0&&bt(tt.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&zt(N)}function R(N){const A=N.texture,j=i.get(N),tt=i.get(A);N.addEventListener("dispose",E);const yt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Gt=yt.length>1;if(Gt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=A.version,o.memory.textures++),ht){j.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Pt]=[];for(let Vt=0;Vt<A.mipmaps.length;Vt++)j.__webglFramebuffer[Pt][Vt]=n.createFramebuffer()}else j.__webglFramebuffer[Pt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)j.__webglFramebuffer[Pt]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Gt)for(let Pt=0,Vt=yt.length;Pt<Vt;Pt++){const rt=i.get(yt[Pt]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&gt(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Pt=0;Pt<yt.length;Pt++){const Vt=yt[Pt];j.__webglColorRenderbuffer[Pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Pt]);const rt=s.convert(Vt.format,Vt.colorSpace),Y=s.convert(Vt.type),St=x(Vt.internalFormat,rt,Y,Vt.colorSpace,N.isXRRenderTarget===!0),J=mt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,St,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,j.__webglColorRenderbuffer[Pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(j.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),X(n.TEXTURE_CUBE_MAP,A);for(let Pt=0;Pt<6;Pt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)bt(j.__webglFramebuffer[Pt][Vt],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Vt);else bt(j.__webglFramebuffer[Pt],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);g(A)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let Pt=0,Vt=yt.length;Pt<Vt;Pt++){const rt=yt[Pt],Y=i.get(rt);let St=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(St=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,Y.__webglTexture),X(St,rt),bt(j.__webglFramebuffer,N,rt,n.COLOR_ATTACHMENT0+Pt,St,0),g(rt)&&p(St)}e.unbindTexture()}else{let Pt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Pt,tt.__webglTexture),X(Pt,A),A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)bt(j.__webglFramebuffer[Vt],N,A,n.COLOR_ATTACHMENT0,Pt,Vt);else bt(j.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Pt,0);g(A)&&p(Pt),e.unbindTexture()}N.depthBuffer&&zt(N)}function q(N){const A=N.textures;for(let j=0,tt=A.length;j<tt;j++){const yt=A[j];if(g(yt)){const ht=y(N),Gt=i.get(yt).__webglTexture;e.bindTexture(ht,Gt),p(ht),e.unbindTexture()}}}const Z=[],et=[];function K(N){if(N.samples>0){if(gt(N)===!1){const A=N.textures,j=N.width,tt=N.height;let yt=n.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Gt=i.get(N),Pt=A.length>1;if(Pt)for(let rt=0;rt<A.length;rt++)e.bindFramebuffer(n.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const Vt=N.texture.mipmaps;Vt&&Vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let rt=0;rt<A.length;rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=n.STENCIL_BUFFER_BIT)),Pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Gt.__webglColorRenderbuffer[rt]);const Y=i.get(A[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,j,tt,0,0,j,tt,yt,n.NEAREST),c===!0&&(Z.length=0,et.length=0,Z.push(n.COLOR_ATTACHMENT0+rt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Z.push(ht),et.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pt)for(let rt=0;rt<A.length;rt++){e.bindFramebuffer(n.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,Gt.__webglColorRenderbuffer[rt]);const Y=i.get(A[rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,Y,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function mt(N){return Math.min(r.maxSamples,N.samples)}function gt(N){const A=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Mt(N){const A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function vt(N,A){const j=N.colorSpace,tt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==fr&&j!==an&&(ve.getTransfer(j)===Ae?(tt!==Zn||yt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function At(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=D,this.rebindTextures=at,this.setupRenderTarget=R,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=gt}function Vx(n,t){function e(i,r=an){let s;const o=ve.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===C0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===R0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===T0)return n.BYTE;if(i===A0)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===P0)return n.ALPHA;if(i===D0)return n.RGB;if(i===Zn)return n.RGBA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Gs)return n.DEPTH_STENCIL;if(i===Gi)return n.RED;if(i===eu)return n.RED_INTEGER;if(i===L0)return n.RG;if(i===nu)return n.RG_INTEGER;if(i===iu)return n.RGBA_INTEGER;if(i===ta||i===ea||i===na||i===ia)if(o===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===tc||i===ec||i===nc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===rc||i===sc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ic||i===rc)return o===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===vc||i===xc||i===_c)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===oc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xc)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return o===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===Mc||i===Sc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===yc)return o===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wc||i===bc||i===Ec||i===Tc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new q0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ge({vertexShader:Wx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends us{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Xx,p={},y=e.getContextAttributes();let x=null,_=null;const w=[],S=[],E=new Nt;let C=null;const M=new Bn;M.viewport=new pe;const b=new Bn;b.viewport=new pe;const T=[M,b],I=new dm;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ft=w[nt];return ft===void 0&&(ft=new fl,w[nt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(nt){let ft=w[nt];return ft===void 0&&(ft=new fl,w[nt]=ft),ft.getGripSpace()},this.getHand=function(nt){let ft=w[nt];return ft===void 0&&(ft=new fl,w[nt]=ft),ft.getHandSpace()};function F(nt){const ft=S.indexOf(nt.inputSource);if(ft===-1)return;const bt=w[ft];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,l||o),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function U(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",k);for(let nt=0;nt<w.length;nt++){const ft=S[nt];ft!==null&&(S[nt]=null,w[nt].disconnect(ft))}O=null,z=null,g.reset();for(const nt in p)delete p[nt];t.setRenderTarget(x),h=null,d=null,f=null,r=null,_=null,V.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",U),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ft=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?Gs:Ws,Ft=y.stencil?Vs:hr);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(zt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new dr(d.textureWidth,d.textureHeight,{format:Zn,type:Jn,depthTexture:new X0(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,bt),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new dr(h.framebufferWidth,h.framebufferHeight,{format:Zn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(nt){for(let ft=0;ft<nt.removed.length;ft++){const bt=nt.removed[ft],Ft=S.indexOf(bt);Ft>=0&&(S[Ft]=null,w[Ft].disconnect(bt))}for(let ft=0;ft<nt.added.length;ft++){const bt=nt.added[ft];let Ft=S.indexOf(bt);if(Ft===-1){for(let zt=0;zt<w.length;zt++)if(zt>=S.length){S.push(bt),Ft=zt;break}else if(S[zt]===null){S[zt]=bt,Ft=zt;break}if(Ft===-1)break}const xt=w[Ft];xt&&xt.connect(bt)}}const D=new P,H=new P;function G(nt,ft,bt){D.setFromMatrixPosition(ft.matrixWorld),H.setFromMatrixPosition(bt.matrixWorld);const Ft=D.distanceTo(H),xt=ft.projectionMatrix.elements,zt=bt.projectionMatrix.elements,at=xt[14]/(xt[10]-1),R=xt[14]/(xt[10]+1),q=(xt[9]+1)/xt[5],Z=(xt[9]-1)/xt[5],et=(xt[8]-1)/xt[0],K=(zt[8]+1)/zt[0],mt=at*et,gt=at*K,Mt=Ft/(-et+K),vt=Mt*-et;if(ft.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(vt),nt.translateZ(Mt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),xt[10]===-1)nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const At=at+Mt,N=R+Mt,A=mt-vt,j=gt+(Ft-vt),tt=q*R/N*At,yt=Z*R/N*At;nt.projectionMatrix.makePerspective(A,j,tt,yt,At,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function W(nt,ft){ft===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ft.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ft=nt.near,bt=nt.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),I.near=b.near=M.near=ft,I.far=b.far=M.far=bt,(O!==I.near||z!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,z=I.far),I.layers.mask=nt.layers.mask|6,M.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Ft=nt.parent,xt=I.cameras;W(I,Ft);for(let zt=0;zt<xt.length;zt++)W(xt[zt],Ft);xt.length===2?G(I,M,b):I.projectionMatrix.copy(M.projectionMatrix),X(nt,I,Ft)};function X(nt,ft,bt){bt===null?nt.matrix.copy(ft.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ft.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ac*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=nt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(nt){return p[nt]};let st=null;function lt(nt,ft){if(u=ft.getViewerPose(l||o),m=ft,u!==null){const bt=u.views;h!==null&&(t.setRenderTargetFramebuffer(_,h.framebuffer),t.setRenderTarget(_));let Ft=!1;bt.length!==I.cameras.length&&(I.cameras.length=0,Ft=!0);for(let R=0;R<bt.length;R++){const q=bt[R];let Z=null;if(h!==null)Z=h.getViewport(q);else{const K=f.getViewSubImage(d,q);Z=K.viewport,R===0&&(t.setRenderTargetTextures(_,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(_))}let et=T[R];et===void 0&&(et=new Bn,et.layers.enable(R),et.viewport=new pe,T[R]=et),et.matrix.fromArray(q.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(q.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Z.x,Z.y,Z.width,Z.height),R===0&&(I.matrix.copy(et.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ft===!0&&I.cameras.push(et)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const R=f.getDepthInformation(bt[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(xt&&xt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let R=0;R<bt.length;R++){const q=bt[R].camera;if(q){let Z=p[q];Z||(Z=new q0,p[q]=Z);const et=f.getCameraImage(q);Z.sourceTexture=et}}}}for(let bt=0;bt<w.length;bt++){const Ft=S[bt],xt=w[bt];Ft!==null&&xt!==void 0&&xt.update(Ft,ft,l||o)}st&&st(nt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),m=null}const V=new rf;V.setAnimationLoop(lt),this.setAnimationLoop=function(nt){st=nt},this.dispose=function(){}}}const tr=new Ge,$x=new ne;function Yx(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,B0(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,tr.copy(_),tr.x*=-1,tr.y*=-1,tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(tr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function l(y,x){let _=r[y.id];_===void 0&&(m(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(y,w);const S=t.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function u(y){const x=f();y.__bindingPointIndex=x;const _=n.createBuffer(),w=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],_=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,E=_.length;S<E;S++){const C=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,b=C.length;M<b;M++){const T=C[M];if(h(T,S,M,w)===!0){const I=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let F=0;F<O.length;F++){const U=O[F],k=v(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,I+z,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,x,_,w){const S=y.value,E=x+"_"+_;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{const C=w[E];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return w[E]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(y){const x=y.uniforms;let _=0;const w=16;for(let E=0,C=x.length;E<C;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,T=M.length;b<T;b++){const I=M[b],O=Array.isArray(I.value)?I.value:[I.value];for(let z=0,F=O.length;z<F;z++){const U=O[z],k=v(U),D=_%w,H=D%k.boundary,G=D+H;_+=H,G!==0&&w-G<k.storage&&(_+=w-G),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=k.storage}}}const S=_%w;return S>0&&(_+=w-S),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Zx{constructor(t={}){const{canvas:e=qd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=On;let S=0,E=0,C=null,M=-1,b=null;const T=new pe,I=new pe;let O=null;const z=new oe(0);let F=0,U=e.width,k=e.height,D=1,H=null,G=null;const W=new pe(0,0,U,k),X=new pe(0,0,U,k);let st=!1;const lt=new W0;let V=!1,nt=!1;const ft=new ne,bt=new P,Ft=new pe,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function at(){return C===null?D:1}let R=i;function q(L,Q){return e.getContext(L,Q)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ct,!1),R===null){const Q="webgl2";if(R=q(Q,L),R===null)throw q(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Z,et,K,mt,gt,Mt,vt,At,N,A,j,tt,yt,ht,Gt,Pt,Vt,rt,Y,St,J,Ct,wt,Ot;function B(){Z=new o1(R),Z.init(),Ct=new Vx(R,Z),et=new Qv(R,Z,t,Ct),K=new Bx(R,Z),et.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),mt=new c1(R),gt=new Ax,Mt=new Hx(R,Z,K,gt,et,Ct,mt),vt=new e1(_),At=new s1(_),N=new mm(R),wt=new Kv(R,N),A=new a1(R,N,mt,wt),j=new h1(R,A,N,mt),Y=new u1(R,et,Mt),Pt=new t1(gt),tt=new Tx(_,vt,At,Z,et,wt,Pt),yt=new Yx(_,gt),ht=new Rx,Gt=new Nx(Z),rt=new Zv(_,vt,At,K,j,h,c),Vt=new Ox(_,j,et),Ot=new jx(R,mt,et,K),St=new Jv(R,Z,mt),J=new l1(R,Z,mt),mt.programs=tt.programs,_.capabilities=et,_.extensions=Z,_.properties=gt,_.renderLists=ht,_.shadowMap=Vt,_.state=K,_.info=mt}B();const _t=new qx(_,R);this.xr=_t,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const L=Z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(L){L!==void 0&&(D=L,this.setSize(U,k,!1))},this.getSize=function(L){return L.set(U,k)},this.setSize=function(L,Q,dt=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,k=Q,e.width=Math.floor(L*D),e.height=Math.floor(Q*D),dt===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(U*D,k*D).floor()},this.setDrawingBufferSize=function(L,Q,dt){U=L,k=Q,D=dt,e.width=Math.floor(L*dt),e.height=Math.floor(Q*dt),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,Q,dt,pt){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,Q,dt,pt),K.viewport(T.copy(W).multiplyScalar(D).round())},this.getScissor=function(L){return L.copy(X)},this.setScissor=function(L,Q,dt,pt){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,Q,dt,pt),K.scissor(I.copy(X).multiplyScalar(D).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(L){K.setScissorTest(st=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){G=L},this.getClearColor=function(L){return L.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,dt=!0){let pt=0;if(L){let it=!1;if(C!==null){const Dt=C.texture.format;it=Dt===iu||Dt===nu||Dt===eu}if(it){const Dt=C.texture.type,Bt=Dt===Jn||Dt===hr||Dt===Hs||Dt===Vs||Dt===Qc||Dt===tu,$t=rt.getClearColor(),Xt=rt.getClearAlpha(),Qt=$t.r,te=$t.g,jt=$t.b;Bt?(m[0]=Qt,m[1]=te,m[2]=jt,m[3]=Xt,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=Qt,v[1]=te,v[2]=jt,v[3]=Xt,R.clearBufferiv(R.COLOR,0,v))}else pt|=R.COLOR_BUFFER_BIT}Q&&(pt|=R.DEPTH_BUFFER_BIT),dt&&(pt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),rt.dispose(),ht.dispose(),Gt.dispose(),gt.dispose(),vt.dispose(),At.dispose(),j.dispose(),wt.dispose(),Ot.dispose(),tt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Fe),_t.removeEventListener("sessionend",bn),Ti.stop()};function Et(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=mt.autoReset,Q=Vt.enabled,dt=Vt.autoUpdate,pt=Vt.needsUpdate,it=Vt.type;B(),mt.autoReset=L,Vt.enabled=Q,Vt.autoUpdate=dt,Vt.needsUpdate=pt,Vt.type=it}function ct(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ut(L){const Q=L.target;Q.removeEventListener("dispose",ut),Ut(Q)}function Ut(L){Rt(L),gt.remove(L)}function Rt(L){const Q=gt.get(L).programs;Q!==void 0&&(Q.forEach(function(dt){tt.releaseProgram(dt)}),L.isShaderMaterial&&tt.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,dt,pt,it,Dt){Q===null&&(Q=xt);const Bt=it.isMesh&&it.matrixWorld.determinant()<0,$t=Sr(L,Q,dt,pt,it);K.setMaterial(pt,Bt);let Xt=dt.index,Qt=1;if(pt.wireframe===!0){if(Xt=A.getWireframeAttribute(dt),Xt===void 0)return;Qt=2}const te=dt.drawRange,jt=dt.attributes.position;let ce=te.start*Qt,de=(te.start+te.count)*Qt;Dt!==null&&(ce=Math.max(ce,Dt.start*Qt),de=Math.min(de,(Dt.start+Dt.count)*Qt)),Xt!==null?(ce=Math.max(ce,0),de=Math.min(de,Xt.count)):jt!=null&&(ce=Math.max(ce,0),de=Math.min(de,jt.count));const we=de-ce;if(we<0||we===1/0)return;wt.setup(it,pt,$t,dt,Xt);let Se,_e=St;if(Xt!==null&&(Se=N.get(Xt),_e=J,_e.setIndex(Se)),it.isMesh)pt.wireframe===!0?(K.setLineWidth(pt.wireframeLinewidth*at()),_e.setMode(R.LINES)):_e.setMode(R.TRIANGLES);else if(it.isLine){let Jt=pt.linewidth;Jt===void 0&&(Jt=1),K.setLineWidth(Jt*at()),it.isLineSegments?_e.setMode(R.LINES):it.isLineLoop?_e.setMode(R.LINE_LOOP):_e.setMode(R.LINE_STRIP)}else it.isPoints?_e.setMode(R.POINTS):it.isSprite&&_e.setMode(R.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))_e.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Jt=it._multiDrawStarts,Ie=it._multiDrawCounts,me=it._multiDrawCount,be=Xt?N.get(Xt).bytesPerElement:1,Ai=gt.get(pt).currentProgram.getUniforms();for(let pn=0;pn<me;pn++)Ai.setValue(R,"_gl_DrawID",pn),_e.render(Jt[pn]/be,Ie[pn])}else if(it.isInstancedMesh)_e.renderInstances(ce,we,it.count);else if(dt.isInstancedBufferGeometry){const Jt=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ie=Math.min(dt.instanceCount,Jt);_e.renderInstances(ce,we,Ie)}else _e.render(ce,we)};function Wt(L,Q,dt){L.transparent===!0&&L.side===Oe&&L.forceSinglePass===!1?(L.side=Mn,L.needsUpdate=!0,Mr(L,Q,dt),L.side=ii,L.needsUpdate=!0,Mr(L,Q,dt),L.side=Oe):Mr(L,Q,dt)}this.compile=function(L,Q,dt=null){dt===null&&(dt=L),p=Gt.get(dt),p.init(Q),x.push(p),dt.traverseVisible(function(it){it.isLight&&it.layers.test(Q.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),L!==dt&&L.traverseVisible(function(it){it.isLight&&it.layers.test(Q.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),p.setupLights();const pt=new Set;return L.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Dt=it.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const $t=Dt[Bt];Wt($t,dt,it),pt.add($t)}else Wt(Dt,dt,it),pt.add(Dt)}),p=x.pop(),pt},this.compileAsync=function(L,Q,dt=null){const pt=this.compile(L,Q,dt);return new Promise(it=>{function Dt(){if(pt.forEach(function(Bt){gt.get(Bt).currentProgram.isReady()&&pt.delete(Bt)}),pt.size===0){it(L);return}setTimeout(Dt,10)}Z.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Kt=null;function Me(L){Kt&&Kt(L)}function Fe(){Ti.stop()}function bn(){Ti.start()}const Ti=new rf;Ti.setAnimationLoop(Me),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(L){Kt=L,_t.setAnimationLoop(L),L===null?Ti.stop():Ti.start()},_t.addEventListener("sessionstart",Fe),_t.addEventListener("sessionend",bn),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(Q),Q=_t.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,Q,C),p=Gt.get(L,x.length),p.init(Q),x.push(p),ft.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),lt.setFromProjectionMatrix(ft,ei,Q.reversedDepth),nt=this.localClippingEnabled,V=Pt.init(this.clippingPlanes,nt),g=ht.get(L,y.length),g.init(),y.push(g),_t.enabled===!0&&_t.isPresenting===!0){const Dt=_.xr.getDepthSensingMesh();Dt!==null&&je(Dt,Q,-1/0,_.sortObjects)}je(L,Q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(H,G),zt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,zt&&rt.addToRenderList(g,L),this.info.render.frame++,V===!0&&Pt.beginShadows();const dt=p.state.shadowsArray;Vt.render(dt,L,Q),V===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=g.opaque,it=g.transmissive;if(p.setupLights(),Q.isArrayCamera){const Dt=Q.cameras;if(it.length>0)for(let Bt=0,$t=Dt.length;Bt<$t;Bt++){const Xt=Dt[Bt];gs(pt,it,L,Xt)}zt&&rt.render(L);for(let Bt=0,$t=Dt.length;Bt<$t;Bt++){const Xt=Dt[Bt];yr(g,L,Xt,Xt.viewport)}}else it.length>0&&gs(pt,it,L,Q),zt&&rt.render(L),yr(g,L,Q);C!==null&&E===0&&(Mt.updateMultisampleRenderTarget(C),Mt.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(_,L,Q),wt.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],V===!0&&Pt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function je(L,Q,dt,pt){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)dt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||lt.intersectsSprite(L)){pt&&Ft.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ft);const Bt=j.update(L),$t=L.material;$t.visible&&g.push(L,Bt,$t,dt,Ft.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||lt.intersectsObject(L))){const Bt=j.update(L),$t=L.material;if(pt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ft.copy(L.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Ft.copy(Bt.boundingSphere.center)),Ft.applyMatrix4(L.matrixWorld).applyMatrix4(ft)),Array.isArray($t)){const Xt=Bt.groups;for(let Qt=0,te=Xt.length;Qt<te;Qt++){const jt=Xt[Qt],ce=$t[jt.materialIndex];ce&&ce.visible&&g.push(L,Bt,ce,dt,Ft.z,jt)}}else $t.visible&&g.push(L,Bt,$t,dt,Ft.z,null)}}const Dt=L.children;for(let Bt=0,$t=Dt.length;Bt<$t;Bt++)je(Dt[Bt],Q,dt,pt)}function yr(L,Q,dt,pt){const it=L.opaque,Dt=L.transmissive,Bt=L.transparent;p.setupLightsView(dt),V===!0&&Pt.setGlobalState(_.clippingPlanes,dt),pt&&K.viewport(T.copy(pt)),it.length>0&&En(it,Q,dt),Dt.length>0&&En(Dt,Q,dt),Bt.length>0&&En(Bt,Q,dt),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function gs(L,Q,dt,pt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[pt.id]===void 0&&(p.state.transmissionRenderTarget[pt.id]=new dr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?vr:Jn,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const Dt=p.state.transmissionRenderTarget[pt.id],Bt=pt.viewport||T;Dt.setSize(Bt.z*_.transmissionResolutionScale,Bt.w*_.transmissionResolutionScale);const $t=_.getRenderTarget(),Xt=_.getActiveCubeFace(),Qt=_.getActiveMipmapLevel();_.setRenderTarget(Dt),_.getClearColor(z),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),zt&&rt.render(dt);const te=_.toneMapping;_.toneMapping=Wi;const jt=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),p.setupLightsView(pt),V===!0&&Pt.setGlobalState(_.clippingPlanes,pt),En(L,dt,pt),Mt.updateMultisampleRenderTarget(Dt),Mt.updateRenderTargetMipmap(Dt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let de=0,we=Q.length;de<we;de++){const Se=Q[de],_e=Se.object,Jt=Se.geometry,Ie=Se.material,me=Se.group;if(Ie.side===Oe&&_e.layers.test(pt.layers)){const be=Ie.side;Ie.side=Mn,Ie.needsUpdate=!0,vs(_e,dt,pt,Jt,Ie,me),Ie.side=be,Ie.needsUpdate=!0,ce=!0}}ce===!0&&(Mt.updateMultisampleRenderTarget(Dt),Mt.updateRenderTargetMipmap(Dt))}_.setRenderTarget($t,Xt,Qt),_.setClearColor(z,F),jt!==void 0&&(pt.viewport=jt),_.toneMapping=te}function En(L,Q,dt){const pt=Q.isScene===!0?Q.overrideMaterial:null;for(let it=0,Dt=L.length;it<Dt;it++){const Bt=L[it],$t=Bt.object,Xt=Bt.geometry,Qt=Bt.group;let te=Bt.material;te.allowOverride===!0&&pt!==null&&(te=pt),$t.layers.test(dt.layers)&&vs($t,Q,dt,Xt,te,Qt)}}function vs(L,Q,dt,pt,it,Dt){L.onBeforeRender(_,Q,dt,pt,it,Dt),L.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),it.onBeforeRender(_,Q,dt,pt,L,Dt),it.transparent===!0&&it.side===Oe&&it.forceSinglePass===!1?(it.side=Mn,it.needsUpdate=!0,_.renderBufferDirect(dt,Q,pt,it,L,Dt),it.side=ii,it.needsUpdate=!0,_.renderBufferDirect(dt,Q,pt,it,L,Dt),it.side=Oe):_.renderBufferDirect(dt,Q,pt,it,L,Dt),L.onAfterRender(_,Q,dt,pt,it,Dt)}function Mr(L,Q,dt){Q.isScene!==!0&&(Q=xt);const pt=gt.get(L),it=p.state.lights,Dt=p.state.shadowsArray,Bt=it.state.version,$t=tt.getParameters(L,it.state,Dt,Q,dt),Xt=tt.getProgramCacheKey($t);let Qt=pt.programs;pt.environment=L.isMeshStandardMaterial?Q.environment:null,pt.fog=Q.fog,pt.envMap=(L.isMeshStandardMaterial?At:vt).get(L.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,Qt===void 0&&(L.addEventListener("dispose",ut),Qt=new Map,pt.programs=Qt);let te=Qt.get(Xt);if(te!==void 0){if(pt.currentProgram===te&&pt.lightsStateVersion===Bt)return lo(L,$t),te}else $t.uniforms=tt.getUniforms(L),L.onBeforeCompile($t,_),te=tt.acquireProgram($t,Xt),Qt.set(Xt,te),pt.uniforms=$t.uniforms;const jt=pt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(jt.clippingPlanes=Pt.uniform),lo(L,$t),pt.needsLights=uo(L),pt.lightsStateVersion=Bt,pt.needsLights&&(jt.ambientLightColor.value=it.state.ambient,jt.lightProbe.value=it.state.probe,jt.directionalLights.value=it.state.directional,jt.directionalLightShadows.value=it.state.directionalShadow,jt.spotLights.value=it.state.spot,jt.spotLightShadows.value=it.state.spotShadow,jt.rectAreaLights.value=it.state.rectArea,jt.ltc_1.value=it.state.rectAreaLTC1,jt.ltc_2.value=it.state.rectAreaLTC2,jt.pointLights.value=it.state.point,jt.pointLightShadows.value=it.state.pointShadow,jt.hemisphereLights.value=it.state.hemi,jt.directionalShadowMap.value=it.state.directionalShadowMap,jt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,jt.spotShadowMap.value=it.state.spotShadowMap,jt.spotLightMatrix.value=it.state.spotLightMatrix,jt.spotLightMap.value=it.state.spotLightMap,jt.pointShadowMap.value=it.state.pointShadowMap,jt.pointShadowMatrix.value=it.state.pointShadowMatrix),pt.currentProgram=te,pt.uniformsList=null,te}function ao(L){if(L.uniformsList===null){const Q=L.currentProgram.getUniforms();L.uniformsList=ra.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function lo(L,Q){const dt=gt.get(L);dt.outputColorSpace=Q.outputColorSpace,dt.batching=Q.batching,dt.batchingColor=Q.batchingColor,dt.instancing=Q.instancing,dt.instancingColor=Q.instancingColor,dt.instancingMorph=Q.instancingMorph,dt.skinning=Q.skinning,dt.morphTargets=Q.morphTargets,dt.morphNormals=Q.morphNormals,dt.morphColors=Q.morphColors,dt.morphTargetsCount=Q.morphTargetsCount,dt.numClippingPlanes=Q.numClippingPlanes,dt.numIntersection=Q.numClipIntersection,dt.vertexAlphas=Q.vertexAlphas,dt.vertexTangents=Q.vertexTangents,dt.toneMapping=Q.toneMapping}function Sr(L,Q,dt,pt,it){Q.isScene!==!0&&(Q=xt),Mt.resetTextureUnits();const Dt=Q.fog,Bt=pt.isMeshStandardMaterial?Q.environment:null,$t=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fr,Xt=(pt.isMeshStandardMaterial?At:vt).get(pt.envMap||Bt),Qt=pt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,te=!!dt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),jt=!!dt.morphAttributes.position,ce=!!dt.morphAttributes.normal,de=!!dt.morphAttributes.color;let we=Wi;pt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=_.toneMapping);const Se=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,_e=Se!==void 0?Se.length:0,Jt=gt.get(pt),Ie=p.state.lights;if(V===!0&&(nt===!0||L!==b)){const Pe=L===b&&pt.id===M;Pt.setState(pt,L,Pe)}let me=!1;pt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ie.state.version||Jt.outputColorSpace!==$t||it.isBatchedMesh&&Jt.batching===!1||!it.isBatchedMesh&&Jt.batching===!0||it.isBatchedMesh&&Jt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Jt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Jt.instancing===!1||!it.isInstancedMesh&&Jt.instancing===!0||it.isSkinnedMesh&&Jt.skinning===!1||!it.isSkinnedMesh&&Jt.skinning===!0||it.isInstancedMesh&&Jt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Jt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Jt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Jt.instancingMorph===!1&&it.morphTexture!==null||Jt.envMap!==Xt||pt.fog===!0&&Jt.fog!==Dt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Pt.numPlanes||Jt.numIntersection!==Pt.numIntersection)||Jt.vertexAlphas!==Qt||Jt.vertexTangents!==te||Jt.morphTargets!==jt||Jt.morphNormals!==ce||Jt.morphColors!==de||Jt.toneMapping!==we||Jt.morphTargetsCount!==_e)&&(me=!0):(me=!0,Jt.__version=pt.version);let be=Jt.currentProgram;me===!0&&(be=Mr(pt,Q,it));let Ai=!1,pn=!1,Vn=!1;const Ue=be.getUniforms(),Ve=Jt.uniforms;if(K.useProgram(be.program)&&(Ai=!0,pn=!0,Vn=!0),pt.id!==M&&(M=pt.id,pn=!0),Ai||b!==L){K.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ue.setValue(R,"projectionMatrix",L.projectionMatrix),Ue.setValue(R,"viewMatrix",L.matrixWorldInverse);const Ee=Ue.map.cameraPosition;Ee!==void 0&&Ee.setValue(R,bt.setFromMatrixPosition(L.matrixWorld)),et.logarithmicDepthBuffer&&Ue.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&Ue.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,pn=!0,Vn=!0)}if(it.isSkinnedMesh){Ue.setOptional(R,it,"bindMatrix"),Ue.setOptional(R,it,"bindMatrixInverse");const Pe=it.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Ue.setValue(R,"boneTexture",Pe.boneTexture,Mt))}it.isBatchedMesh&&(Ue.setOptional(R,it,"batchingTexture"),Ue.setValue(R,"batchingTexture",it._matricesTexture,Mt),Ue.setOptional(R,it,"batchingIdTexture"),Ue.setValue(R,"batchingIdTexture",it._indirectTexture,Mt),Ue.setOptional(R,it,"batchingColorTexture"),it._colorsTexture!==null&&Ue.setValue(R,"batchingColorTexture",it._colorsTexture,Mt));const ye=dt.morphAttributes;if((ye.position!==void 0||ye.normal!==void 0||ye.color!==void 0)&&Y.update(it,dt,be),(pn||Jt.receiveShadow!==it.receiveShadow)&&(Jt.receiveShadow=it.receiveShadow,Ue.setValue(R,"receiveShadow",it.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Ve.envMap.value=Xt,Ve.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&Q.environment!==null&&(Ve.envMapIntensity.value=Q.environmentIntensity),pn&&(Ue.setValue(R,"toneMappingExposure",_.toneMappingExposure),Jt.needsLights&&co(Ve,Vn),Dt&&pt.fog===!0&&yt.refreshFogUniforms(Ve,Dt),yt.refreshMaterialUniforms(Ve,pt,D,k,p.state.transmissionRenderTarget[L.id]),ra.upload(R,ao(Jt),Ve,Mt)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(ra.upload(R,ao(Jt),Ve,Mt),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&Ue.setValue(R,"center",it.center),Ue.setValue(R,"modelViewMatrix",it.modelViewMatrix),Ue.setValue(R,"normalMatrix",it.normalMatrix),Ue.setValue(R,"modelMatrix",it.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const Pe=pt.uniformsGroups;for(let Ee=0,en=Pe.length;Ee<en;Ee++){const Ze=Pe[Ee];Ot.update(Ze,be),Ot.bind(Ze,be)}}return be}function co(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function uo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,Q,dt){const pt=gt.get(L);pt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),gt.get(L.texture).__webglTexture=Q,gt.get(L.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:dt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){const dt=gt.get(L);dt.__webglFramebuffer=Q,dt.__useDefaultFramebuffer=Q===void 0};const xs=R.createFramebuffer();this.setRenderTarget=function(L,Q=0,dt=0){C=L,S=Q,E=dt;let pt=!0,it=null,Dt=!1,Bt=!1;if(L){const Xt=gt.get(L);if(Xt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(R.FRAMEBUFFER,null),pt=!1;else if(Xt.__webglFramebuffer===void 0)Mt.setupRenderTarget(L);else if(Xt.__hasExternalTextures)Mt.rebindTextures(L,gt.get(L.texture).__webglTexture,gt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const jt=L.depthTexture;if(Xt.__boundDepthTexture!==jt){if(jt!==null&&gt.has(jt)&&(L.width!==jt.image.width||L.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(L)}}const Qt=L.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Bt=!0);const te=gt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(te[Q])?it=te[Q][dt]:it=te[Q],Dt=!0):L.samples>0&&Mt.useMultisampledRTT(L)===!1?it=gt.get(L).__webglMultisampledFramebuffer:Array.isArray(te)?it=te[dt]:it=te,T.copy(L.viewport),I.copy(L.scissor),O=L.scissorTest}else T.copy(W).multiplyScalar(D).floor(),I.copy(X).multiplyScalar(D).floor(),O=st;if(dt!==0&&(it=xs),K.bindFramebuffer(R.FRAMEBUFFER,it)&&pt&&K.drawBuffers(L,it),K.viewport(T),K.scissor(I),K.setScissorTest(O),Dt){const Xt=gt.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Xt.__webglTexture,dt)}else if(Bt){const Xt=Q;for(let Qt=0;Qt<L.textures.length;Qt++){const te=gt.get(L.textures[Qt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Qt,te.__webglTexture,dt,Xt)}}else if(L!==null&&dt!==0){const Xt=gt.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Xt.__webglTexture,dt)}M=-1},this.readRenderTargetPixels=function(L,Q,dt,pt,it,Dt,Bt,$t=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=gt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt){K.bindFramebuffer(R.FRAMEBUFFER,Xt);try{const Qt=L.textures[$t],te=Qt.format,jt=Qt.type;if(!et.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-pt&&dt>=0&&dt<=L.height-it&&(L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+$t),R.readPixels(Q,dt,pt,it,Ct.convert(te),Ct.convert(jt),Dt))}finally{const Qt=C!==null?gt.get(C).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(L,Q,dt,pt,it,Dt,Bt,$t=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=gt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt)if(Q>=0&&Q<=L.width-pt&&dt>=0&&dt<=L.height-it){K.bindFramebuffer(R.FRAMEBUFFER,Xt);const Qt=L.textures[$t],te=Qt.format,jt=Qt.type;if(!et.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ce),R.bufferData(R.PIXEL_PACK_BUFFER,Dt.byteLength,R.STREAM_READ),L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+$t),R.readPixels(Q,dt,pt,it,Ct.convert(te),Ct.convert(jt),0);const de=C!==null?gt.get(C).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,de);const we=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await $d(R,we,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ce),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Dt),R.deleteBuffer(ce),R.deleteSync(we),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,dt=0){const pt=Math.pow(2,-dt),it=Math.floor(L.image.width*pt),Dt=Math.floor(L.image.height*pt),Bt=Q!==null?Q.x:0,$t=Q!==null?Q.y:0;Mt.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,dt,0,0,Bt,$t,it,Dt),K.unbindTexture()};const Ha=R.createFramebuffer(),oi=R.createFramebuffer();this.copyTextureToTexture=function(L,Q,dt=null,pt=null,it=0,Dt=null){Dt===null&&(it!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=it,it=0):Dt=0);let Bt,$t,Xt,Qt,te,jt,ce,de,we;const Se=L.isCompressedTexture?L.mipmaps[Dt]:L.image;if(dt!==null)Bt=dt.max.x-dt.min.x,$t=dt.max.y-dt.min.y,Xt=dt.isBox3?dt.max.z-dt.min.z:1,Qt=dt.min.x,te=dt.min.y,jt=dt.isBox3?dt.min.z:0;else{const ye=Math.pow(2,-it);Bt=Math.floor(Se.width*ye),$t=Math.floor(Se.height*ye),L.isDataArrayTexture?Xt=Se.depth:L.isData3DTexture?Xt=Math.floor(Se.depth*ye):Xt=1,Qt=0,te=0,jt=0}pt!==null?(ce=pt.x,de=pt.y,we=pt.z):(ce=0,de=0,we=0);const _e=Ct.convert(Q.format),Jt=Ct.convert(Q.type);let Ie;Q.isData3DTexture?(Mt.setTexture3D(Q,0),Ie=R.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Mt.setTexture2DArray(Q,0),Ie=R.TEXTURE_2D_ARRAY):(Mt.setTexture2D(Q,0),Ie=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Q.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Q.unpackAlignment);const me=R.getParameter(R.UNPACK_ROW_LENGTH),be=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ai=R.getParameter(R.UNPACK_SKIP_PIXELS),pn=R.getParameter(R.UNPACK_SKIP_ROWS),Vn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qt),R.pixelStorei(R.UNPACK_SKIP_ROWS,te),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jt);const Ue=L.isDataArrayTexture||L.isData3DTexture,Ve=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){const ye=gt.get(L),Pe=gt.get(Q),Ee=gt.get(ye.__renderTarget),en=gt.get(Pe.__renderTarget);K.bindFramebuffer(R.READ_FRAMEBUFFER,Ee.__webglFramebuffer),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let Ze=0;Ze<Xt;Ze++)Ue&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gt.get(L).__webglTexture,it,jt+Ze),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gt.get(Q).__webglTexture,Dt,we+Ze)),R.blitFramebuffer(Qt,te,Bt,$t,ce,de,Bt,$t,R.DEPTH_BUFFER_BIT,R.NEAREST);K.bindFramebuffer(R.READ_FRAMEBUFFER,null),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(it!==0||L.isRenderTargetTexture||gt.has(L)){const ye=gt.get(L),Pe=gt.get(Q);K.bindFramebuffer(R.READ_FRAMEBUFFER,Ha),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,oi);for(let Ee=0;Ee<Xt;Ee++)Ue?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.__webglTexture,it,jt+Ee):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ye.__webglTexture,it),Ve?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pe.__webglTexture,Dt,we+Ee):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pe.__webglTexture,Dt),it!==0?R.blitFramebuffer(Qt,te,Bt,$t,ce,de,Bt,$t,R.COLOR_BUFFER_BIT,R.NEAREST):Ve?R.copyTexSubImage3D(Ie,Dt,ce,de,we+Ee,Qt,te,Bt,$t):R.copyTexSubImage2D(Ie,Dt,ce,de,Qt,te,Bt,$t);K.bindFramebuffer(R.READ_FRAMEBUFFER,null),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ve?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(Ie,Dt,ce,de,we,Bt,$t,Xt,_e,Jt,Se.data):Q.isCompressedArrayTexture?R.compressedTexSubImage3D(Ie,Dt,ce,de,we,Bt,$t,Xt,_e,Se.data):R.texSubImage3D(Ie,Dt,ce,de,we,Bt,$t,Xt,_e,Jt,Se):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Dt,ce,de,Bt,$t,_e,Jt,Se.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Dt,ce,de,Se.width,Se.height,_e,Se.data):R.texSubImage2D(R.TEXTURE_2D,Dt,ce,de,Bt,$t,_e,Jt,Se);R.pixelStorei(R.UNPACK_ROW_LENGTH,me),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,be),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ai),R.pixelStorei(R.UNPACK_SKIP_ROWS,pn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vn),Dt===0&&Q.generateMipmaps&&R.generateMipmap(Ie),K.unbindTexture()},this.initRenderTarget=function(L){gt.get(L).__webglFramebuffer===void 0&&Mt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Mt.setTextureCube(L,0):L.isData3DTexture?Mt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Mt.setTexture2DArray(L,0):Mt.setTexture2D(L,0),K.unbindTexture()},this.resetState=function(){S=0,E=0,C=null,K.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}const Kx=[14.017088,74.326129],Jx=[[13.8,-323.4],[32.8,-289.8],[33.8,-274.8],[36.1,-267.6],[48.4,-283.9],[69.4,-287.7],[110.3,-278.5],[175.5,-251],[236.9,-219.4],[312.7,-163.2],[368.6,-88.8],[408.6,9.1],[430.1,67.5],[423.9,80.9],[409.3,94],[377.9,121.4],[363.7,121.3],[344.7,149.2],[318.7,157],[286.8,176.4],[237.7,170.9],[200.1,157.8],[165.3,135.4],[162,138.6],[171.7,152.1],[164.8,155.9],[154.3,158.3],[139.9,143.7],[128.8,138.8],[120,139.3],[108.8,146.9],[116.6,175],[91.9,219.7],[77.8,247.9],[70.8,274.9],[46.2,294.5],[24.5,324.4],[-1.6,326.2],[-11.4,343.9],[-38.4,351.8],[-66.6,369.7],[-107.5,361.7],[-121.1,353.4],[-132.5,339.4],[-131.1,317.5],[-138,305.7],[-131.9,280.4],[-146.4,298.8],[-170.9,274],[-184.5,241.6],[-177.4,200.1],[-184.3,158.5],[-195.4,138.3],[-193.8,116.3],[-201.6,66.8],[-197.3,55.3],[-182.3,42.2],[-191,22],[-193.1,-3.3],[-182.5,-12.9],[-169.3,-16.8],[-179.1,-34.2],[-178.3,-43.6],[-173.1,-54.2],[-173.1,-63.6],[-165.1,-71.9],[-181.5,-85.6],[-184,-94.3],[-178.6,-126.8],[-173.8,-135.2],[-164.3,-144.7],[-155.7,-138.1],[-155.7,-147.9],[-151.5,-153.8],[-133.9,-154.8],[-108.9,-145.2],[-98.5,-146.5],[-103.4,-157.8],[-96.1,-187.5],[-113,-264.9],[-117.3,-281],[-117.7,-294.5],[-107.4,-302.6],[-97.5,-298.8],[-70.9,-306.9],[-42.7,-311.2],[-33.3,-308.5],[-24.7,-294.4],[-23.3,-299.5],[-29.2,-326],[-18.4,-327.6],[2.9,-328.2]],Qx=[[-328.8,-767.8],[-313.6,-766.6],[-306.3,-759.7],[-304.7,-752.9],[-295.5,-753.8],[-289.2,-754.9],[-281.8,-752.3],[-285.9,-736.8],[-295.2,-720.4],[-291.7,-718.6],[-285.6,-719.4],[-278.1,-722.5],[-270,-718.1],[-264.9,-707.5],[-272,-701.1],[-276.6,-703],[-279.4,-698.1],[-283,-685],[-296.3,-677.8],[-316,-655.9],[-333.3,-649.9],[-342.7,-661.5],[-352.1,-670.5],[-367.9,-706.2],[-371.8,-728.4],[-373.5,-755.2],[-369.7,-769],[-351.4,-778.4]],t2=[[[17190,569],[17190,569]],[[17554,250],[17554,250]],[[16494,7181],[16494,7181]],[[16916,-1117],[16916,-1117]],[[15568,7298],[15568,7298]],[[16616,7035],[16616,7035]],[[16635,7745],[16635,7745]],[[16534,7088],[16534,7088]],[[16609,7748],[16609,7748]],[[16664,7755],[16664,7755]],[[16797,7658],[16797,7658]],[[16596,7791],[16596,7791]],[[9207,34916],[9382,34067],[9398,33250],[9445,33080],[10108,31541],[10283,31306],[10426,31238],[10683,30552],[10552,30424],[10516,30267],[10594,29728],[10940,28539],[12044,25171],[12591,23373],[12619,23268],[12595,23183],[12486,23086],[12499,23010],[12454,22921],[12626,22841],[12747,22727],[12733,22618],[12693,22618],[12744,22600],[12728,22520],[13093,22381],[13132,22274],[13195,22224],[13173,22116],[13286,21986],[13348,21753],[13244,21657],[13247,21615],[13392,21582],[13464,21469],[13467,21355],[13400,21277],[13397,21186],[13665,21048],[13642,20794],[13722,20732],[13695,20648],[13826,20525],[13726,20318],[13763,20218],[13851,20182],[13995,20242],[14123,20119],[14276,20084],[14415,20180],[14470,20339],[14634,20336],[14826,20234],[15002,20003],[15551,18452],[16112,15916],[16413,14264],[16444,13808],[16361,13781],[16300,13660],[16349,13626],[16436,13651],[16483,13611],[16481,13507],[16568,13262]],[[16568,13262],[16711,12398],[16942,11545],[17116,10640],[17256,10126],[17374,9845],[17346,9036],[17248,8679],[17198,8593],[17095,8588],[16953,8653],[16860,8608],[16774,8637],[16698,8564],[16678,8461],[16752,8409],[16919,8427],[17080,8324],[17212,8521],[17379,8424],[17493,8217],[17518,7696],[17895,6904],[18659,3824],[18804,3098],[18877,2038],[18844,1387],[18939,973],[18877,846],[18886,767],[19049,403],[19416,-186],[19544,-627],[19705,-1006],[19750,-1240],[19735,-1530],[19838,-1825],[20099,-2065],[20162,-2191],[20320,-2872],[20364,-3273],[20663,-3613],[20948,-3830],[21114,-4069],[21343,-4282],[21440,-4498],[21618,-4747],[21826,-4792],[22052,-5060],[22262,-5421],[22218,-5513],[22266,-5802],[22449,-5779],[22478,-5628],[22569,-5616],[22600,-5575],[22708,-5593],[22945,-5787],[23262,-6217],[23250,-6525],[23328,-6526],[23370,-6623],[23519,-6580],[23722,-6641],[24087,-7316],[24106,-7442],[24054,-7520],[24081,-7578],[24224,-7545],[24281,-7469],[24366,-7451],[24398,-7357],[24725,-7289],[24898,-7187],[24961,-7210],[24915,-7255],[25005,-7257],[25319,-7614],[25350,-7676],[25340,-7745],[25296,-7765],[25312,-7825],[25566,-7873],[25617,-7853],[25740,-7573],[25921,-7465],[26017,-7483],[26229,-7672],[26413,-7929],[26710,-8648],[26926,-9018],[27145,-9548],[27300,-10070],[27612,-10092],[27689,-10064],[27709,-10092]]],e2={temple:[17157,8490],station:[19365,9259],town:[17519,8721]},_n={center:Kx,island:Jx,islet:Qx,mainland:t2,poi:e2},sn=`
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
`,wn=`
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
`,pu=`
uniform vec4 uTorch; uniform vec3 uTorchDir;
float torchAt(vec3 w){
  if (uTorch.w < 0.001) return 0.0;
  vec3 d = w - uTorch.xyz; float L = length(d);
  float cone = smoothstep(0.84, 0.96, dot(d / max(L, 1e-3), uTorchDir));
  return uTorch.w * cone * exp(-L * 0.11) * smoothstep(0.4, 1.2, L);
}
`,ie=(n,t=0,e=1)=>n<t?t:n>e?e:n,Lt=(n,t,e)=>n+(t-n)*e,It=(n,t,e)=>{const i=ie((e-n)/(t-n));return i*i*(3-2*i)};function Ye(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Ic=new Uint8Array(512);{const n=Ye(1729),t=[...Array(256).keys()];for(let e=255;e>0;e--){const i=n()*(e+1)|0;[t[e],t[i]]=[t[i],t[e]]}for(let e=0;e<512;e++)Ic[e]=t[e&255]}const Vo=(n,t)=>Ic[Ic[n&255]+t&511]/255;function n2(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=r*r*(3-2*r),a=s*s*(3-2*s),c=Vo(e,i),l=Vo(e+1,i),u=Vo(e,i+1),f=Vo(e+1,i+1);return c+(l-c)*o+(u-c)*a+(c-l-u+f)*o*a}function $e(n,t,e=4){let i=0,r=.5,s=0;for(let o=0;o<e;o++){i+=r*n2(n,t),s+=r;const a=1.6*n+1.2*t,c=-1.2*n+1.6*t;n=a+17.3,t=c+9.1,r*=.5}return i/s}function Kr(n,t){const e=n.length,i=[],r=new Array(e);for(let s=0;s<e-1;s++)i.push((t[s+1]-t[s])/(n[s+1]-n[s]));r[0]=i[0],r[e-1]=i[e-2];for(let s=1;s<e-1;s++)r[s]=i[s-1]*i[s]<=0?0:2*i[s-1]*i[s]/(i[s-1]+i[s]);return s=>{if(s<=n[0])return t[0];if(s>=n[e-1])return t[e-1];let o=0;for(;s>n[o+1];)o++;const a=n[o+1]-n[o],c=(s-n[o])/a,l=c*c,u=l*c;return(2*u-3*l+1)*t[o]+(u-2*l+c)*a*r[o]+(-2*u+3*l)*t[o+1]+(u-l)*a*r[o+1]}}const i2=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Jr=1800,Rn=860,vi=Jr/2,r2=321,ls=1.8,xi=-150,mu=70,s2=32,cf=n=>n.map(([t,e])=>[t,-e]),Fs=cf(_n.island),sa=cf(_n.islet);function o2(n,t,e,i,r,s){const o=r-e,a=s-i,c=ie(((n-e)*o+(t-i)*a)/(o*o+a*a||1),0,1),l=e+o*c-n,u=i+a*c-t;return Math.hypot(l,u)}function Uh(n,t,e){let i=1/0,r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[a,c]=e[o],[l,u]=e[s];i=Math.min(i,o2(n,t,a,c,l,u)),c>t!=u>t&&n<(l-a)*(t-c)/(u-c)+a&&(r=!r)}return r?i:-i}const Nh=sa.reduce((n,t)=>[n[0]+t[0]/sa.length,n[1]+t[1]/sa.length],[0,0]),Fh=(n,t)=>(n-Nh[0])**2+(t-Nh[1])**2<22500;function a2(n,t){return Math.max(Uh(n,t,Fs),Uh(n,t,sa))}function l2(n,t){const e=a2(n,t);return Math.abs(e)>120?e:e+($e(n/55,t/55)-.5)*16+($e(n/13+7,t/13)-.5)*6}function c2(n,t,e){if(e>0){const o=13*(1-Math.exp(-e/9)),a=(mu-13)*Math.pow(1-Math.exp(-e/105),1.35),c=($e(n/85,t/85)-.5)*16*It(0,60,e),l=7*ie(-t/330,-1,1)*It(0,90,e),u=-Math.abs($e(n/40+3,t/40)-.5)*6*It(10,50,e);return o+a+c+l+u}const i=-e;let r=-(5*It(0,6,i)+(s2-5)*(1-Math.exp(-i/190)));r+=($e(n/16,t/16)-.45)*7*Math.exp(-i/70);const s=It(12,40,i)*(1-It(140,260,i));return r+=Math.max(0,$e(n/26+11,t/26-4)-.52)*18*s,r+=Math.sin(n*.09+$e(n/60,t/60)*6)*.25*It(150,300,i),r}const fi={basalt:[.25,.22,.2],grass:[.55,.5,.32],grass2:[.46,.46,.28],leaf:[.19,.32,.14],sand:[.8,.72,.55],rockSea:[.36,.33,.3],coral:[[.92,.45,.48],[.95,.6,.3],[.6,.42,.72],[.74,.78,.38],[.95,.75,.55]]},Hr=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e];function u2(){const n=r2,t=Jr/(n-1),e=new Float32Array(n*n),i=new Float32Array(n*n);for(let v=0;v<n;v++)for(let g=0;g<n;g++){const p=-vi+g*t,y=-vi+v*t,x=v*n+g,_=l2(p,y);i[x]=_,e[x]=c2(p,y,_)*ls*(_>0&&Fh(p,y)?.45:1)}const r=new rn(Jr,Jr,n-1,n-1);r.rotateX(-Math.PI/2);const s=r.attributes.position;for(let v=0;v<s.count;v++)s.setY(v,e[v]);r.computeVertexNormals();const o=r.attributes.normal,a=new Float32Array(s.count*3),c=new Float32Array(s.count*4);let l=0;for(let v=0;v<s.count;v++)l=Math.max(l,e[v]);for(let v=0;v<s.count;v++){const g=s.getX(v),p=s.getZ(v),y=e[v]/ls,x=i[v],_=o.getY(v);let w;if(x>0&&Fh(g,p))w=Hr(fi.basalt,[.43,.41,.38],It(1,9,y)*.8),c[v*4]=1;else if(x>0){const E=It(.82,.6,_),C=It(.4,.56,$e(g/110,p/110)+ie(-p/900,-.3,.3)+y/mu*.22-E*.25);w=Hr(fi.grass,fi.grass2,$e(g/20,p/20)),w=Hr(w,fi.leaf,C);const M=1-It(4,16,y),b=Math.max(M,E*.85);w=Hr(w,fi.basalt,b),c[v*4]=b,c[v*4+1]=(1-C)*(1-b),c[v*4+2]=C*(1-b)}else{const E=-x;w=Hr(fi.rockSea,fi.sand,It(20,160,E)*(.65+.35*It(.36,.52,$e(g/30,p/30))));const C=It(10,40,E)*(1-It(150,260,E)),M=$e(g/5+3,p/5-1)*.6+$e(g/40,p/40)*.4;if(C>0&&M>.56){const I=Math.floor($e(g/3,p/3)*17)%fi.coral.length;w=Hr(w,fi.coral[I],C*It(.56,.64,M)*.85)}const b=(1-It(8,110,E))*.9,T=(1-b)*C*It(.46,.6,M);c[v*4]=b,c[v*4+3]=T}const S=.9+$e(g/6,p/6)*.2;a[v*3]=w[0]*S,a[v*3+1]=w[1]*S,a[v*3+2]=w[2]*S}r.setAttribute("color",new se(a,3)),r.setAttribute("aMat",new se(c,4));const u=(v,g,p)=>{const y=ie((g+vi)/t,0,n-1.001),x=ie((p+vi)/t,0,n-1.001),_=Math.floor(y),w=Math.floor(x),S=y-_,E=x-w,C=v[w*n+_],M=v[w*n+_+1],b=v[(w+1)*n+_],T=v[(w+1)*n+_+1];return(C*(1-S)+M*S)*(1-E)+(b*(1-S)+T*S)*E},f=(v,g)=>u(e,v,g),d=(v,g)=>u(i,v,g),h=new Uint8Array(n*n);for(let v=0;v<n*n;v++)h[v]=Math.round(ie(i[v]/400+.5,0,1)*255);const m=new ni(h,n,n,Gi,Jn);return m.magFilter=m.minFilter=Nn,m.needsUpdate=!0,{geom:r,heightAt:f,sdfAt:d,sdfTex:m,H:e,D:i,maxH:l,step:t}}function h2(n){return new ge({vertexColors:!0,uniforms:n,vertexShader:`
      attribute vec4 aMat;
      varying vec3 vW; varying vec3 vN; varying vec3 vC; varying vec4 vMat;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vC = color; vMat = aMat;
        gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${sn}
      ${wn}
      uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform vec3 uAmbBot;
      uniform float uTime; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen; uniform float uColumn;
      ${pu}
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
      }`})}function f2(n,t=300){const e=Rn,i=[[e,null,1,0],[e,xi+30,1,0],[e-3,xi+15,.92,-.38],[e-11,xi+5,.7,-.7],[e-21,xi+1,.36,-.93],[e-30,xi,0,-1]],r=i.length,s=[],o=[],a=[];for(let l=0;l<=t;l++){const u=l/t*Math.PI*2,f=Math.cos(u),d=Math.sin(u),h=Math.min(n.heightAt(f*e,d*e),0);for(const[m,v,g,p]of i)s.push(f*m,v===null?h:v,d*m),o.push(f*g,p,d*g)}for(let l=0;l<t;l++)for(let u=0;u<r-1;u++){const f=l*r+u,d=(l+1)*r+u;a.push(f,f+1,d,f+1,d+1,d)}const c=new ee;return c.setAttribute("position",new Ht(s,3)),c.setAttribute("normal",new Ht(o,3)),c.setIndex(a),c}function d2(n,t=300,e=1.2){const i=[];for(let r=0;r<t;r++){const s=r/t*Math.PI*2,o=Math.cos(s),a=Math.sin(s);i.push(new P(o*(Rn+e),Math.min(n.heightAt(o*Rn,a*Rn),0),a*(Rn+e)))}return i}function zh(n){return new ge({side:Oe,uniforms:n,vertexShader:`
      varying vec3 vW; varying vec3 vN;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${sn}
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
      }`})}function p2(n){const t=new ge({transparent:!0,depthWrite:!1,uniforms:{...n,uR:{value:Rn}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`}),e=new re(new rn(5200,5200).rotateX(-Math.PI/2).translate(0,xi-.6,0),t);return e.renderOrder=-5,e.frustumCulled=!1,e}function m2(n){const t=new We,e=s=>new G0({color:2042412,transparent:!0,opacity:s,depthWrite:!1}),i=(s,o,a=300)=>{const c=[];for(let l=0;l<a;l++){const u=l/a*Math.PI*2;c.push(new P(Math.cos(u)*s,o,Math.sin(u)*s))}return c},r=(s,o)=>{const a=new Cp(new ee().setFromPoints(s),e(o));return a.renderOrder=9,a.frustumCulled=!1,t.add(a),a};return t.mats=[r(i(Rn+.8,.5),.75).material,r(d2(n),.7).material,r(i(Rn+.8,xi+30),.35).material,r(i(Rn-29,xi+.4),.55).material],t.base=t.mats.map(s=>s.opacity),t.setFade=s=>t.mats.forEach((o,a)=>o.opacity=t.base[a]*s),t}const g2=`
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
}`;function Oh(n,t){return new ge({transparent:!0,depthWrite:!!t,side:Oe,uniforms:{...n,uIsOuter:{value:t?1:0}},vertexShader:`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${sn}
      ${wn}
      ${g2}
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
      }`})}function v2(n,t=300){const e=Rn,i=[],r=[],s=[];for(let a=0;a<=t;a++){const c=a/t*Math.PI*2,l=Math.cos(c),u=Math.sin(c),f=Math.min(n.heightAt(l*e,u*e),0);i.push(l*e,0,u*e,l*e,f,u*e),r.push(a/t,0,a/t,1)}for(let a=0;a<t;a++){const c=a*2;s.push(c,c+1,c+2,c+1,c+3,c+2)}const o=new ee;return o.setAttribute("position",new Ht(i,3)),o.setAttribute("uv",new Ht(r,2)),o.setIndex(s),o}function x2(n){return new ge({transparent:!0,depthWrite:!1,side:Oe,uniforms:{...n,uVex:{value:ls}},vertexShader:`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${sn}
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
      }`})}function _2(n){const t=new ge({side:Mn,depthWrite:!1,depthTest:!1,uniforms:n,vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
      ${sn}
      ${wn}
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
      }`}),e=new re(new io(1,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e}const y2=new Fa,Vr={},M2=(()=>{const n=new ni(new Uint8Array([0,0,0,0]),1,1);return n.needsUpdate=!0,n})();function Pn(n,t){if(!Vr[n]){const e={value:M2,ready:!1,cbs:[]};Vr[n]=e,y2.load(`/sprites/${n}.webp`,i=>{i.colorSpace=an,i.anisotropy=4,i.generateMipmaps=!0,i.minFilter=yi,e.value=i,e.ready=!0,e.cbs.forEach(r=>r(i))},void 0,()=>console.warn("sprite missing:",n))}return t&&(Vr[n].ready?t(Vr[n].value):Vr[n].cbs.push(t)),Vr[n]}const Xi=`
  uniform vec3 uSunCol; uniform vec3 uAmbTop; uniform float uUnder; uniform float uFogDen; uniform float uWaterFogDen;
  uniform float uPaper; uniform vec3 uPaperColor; uniform vec3 uWaterCol; uniform float uClipR; uniform float uDiorama; uniform float uSy;
  vec3 fogIt(vec3 col, vec3 w){
    float dist = length(w - cameraPosition);
    vec3 hd = normalize(vec3(w.x - cameraPosition.x, 0.015, w.z - cameraPosition.z));
    return mix(mix(col, mix(skyColor(hd), uPaperColor, uPaper), 1.0 - exp(-dist * uFogDen)), mix(col, uWaterCol, 1.0 - exp(-dist * uWaterFogDen)), uUnder);
  }`;function Uc(n,t,{light:e=.35,instanced:i=!1,center:r=null,size:s=null}={}){return new ge({side:Oe,alphaToCoverage:!0,transparent:!1,uniforms:{...n,uMap:t,uLight:{value:e},uCenter:{value:r||new P},uSize:{value:s||new Nt(1,1)}},vertexShader:`
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
      ${sn}
      ${wn}
      ${Xi}
      uniform sampler2D uMap; uniform float uLight; varying vec2 vUv; varying vec3 vW;
      void main(){
        if (length(vW.xz) > uClipR) discard;
        vec4 c = texture2D(uMap, vUv);
        if (c.a < 0.35) discard;
        // pre-lit photographs: nudge toward the scene's light colour so they sit in the same morning or noon
        vec3 col = c.rgb * mix(vec3(1.0), uSunCol * 0.8 + uAmbTop * 0.35, uLight);
        gl_FragColor = vec4(fogIt(col, vW), c.a);
      }`})}function Nc(){return new rn(1,1).translate(0,.5,0)}function S2(n,t,e=8){const i=n/t,r=[],s=[],o=[];for(let c=0;c<=e;c++){const l=c/e,u=(l-.5)*n;if(r.push(0,-i/2,u,0,i/2,u),s.push(l,0,l,1),c<e){const f=c*2;o.push(f,f+2,f+1,f+1,f+2,f+3)}}const a=new ee;return a.setAttribute("position",new Ht(r,3)),a.setAttribute("uv",new Ht(s,2)),a.setAttribute("normal",new Ht(new Array(r.length/3).fill([1,0,0]).flat(),3)),a.setIndex(o),a}function w2(n){const t=n,e=[],i=[],r=[],s=(a,c)=>{const l=e.length/3;e.push(-a*t/2,0,-c*t/2,a*t/2,0,c*t/2,a*t/2,1,c*t/2,-a*t/2,1,-c*t/2),i.push(0,0,1,0,1,1,0,1),r.push(l,l+1,l+2,l,l+2,l+3)};s(1,0),s(0,1);const o=new ee;return o.setAttribute("position",new Ht(e,3)),o.setAttribute("uv",new Ht(i,2)),o.setAttribute("normal",new Ht(new Array(e.length/3).fill([0,1,0]).flat(),3)),o.setIndex(r),o}function b2(n,t,e=.05){return new ge({side:Oe,alphaToCoverage:!0,uniforms:{...n,uMap:t,uSway:{value:e}},vertexShader:`
      uniform float uTime; uniform float uSway; varying vec2 vUv; varying vec3 vW;
      void main(){
        vUv = uv; vec3 p = position;
        float ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.17;
        p.x += sin(uTime * 1.1 + ph) * uSway * p.y * p.y; p.z += cos(uTime * 0.9 + ph) * uSway * 0.6 * p.y * p.y;
        vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0); vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      ${sn}
      ${wn}
      ${Xi}
      ${pu}
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
      }`})}function xa(n,t="",e="",i={}){return new ge({uniforms:n,side:i.side??ii,vertexShader:`
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
      ${sn}
      ${wn}
      ${pu}
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
      }`})}function E2(n,t,e){const i=Ye(7),r=[],s=e>.6?4.2:7;for(let m=-420;m<420;m+=s)for(let v=-460;v<460;v+=s){const g=m+(i()-.5)*s,p=v+(i()-.5)*s;if(t.sdfAt(g,p)<10)continue;const x=t.heightAt(g,p)/ls,_=It(.4,.56,$e(g/110,p/110)+ie(-p/900,-.3,.3)+x/mu*.22);i()>_*.97+.03||r.push([g,p,x,_])}const o=new Na(1,1),a=new xn(o,xa(n,`
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
        col *= 0.55 + 0.55 * smoothstep(-0.5, 0.9, n.y); col += vec3(0.04, 0.05, 0.0) * smoothstep(0.6, 1.0, n.y) * (1.0 - uTexOn * 0.7);`}),r.length),c=new ne,l=new Ce,u=new P,f=new P,d=new oe,h=[[.16,.3,.11],[.22,.38,.13],[.29,.41,.15],[.13,.26,.11],[.34,.43,.18],[.24,.34,.12]];return r.forEach(([m,v,,g],p)=>{const y=1.9+i()*2.6+g*1.2,x=t.heightAt(m,v);f.set(m,x+y*.55,v),l.setFromEuler(new Ge(0,i()*6.28,0)),u.set(y,y*(.8+i()*.5),y*(.85+i()*.3)),c.compose(f,l,u),a.setMatrixAt(p,c);const _=h[i()*h.length|0];d.setRGB(_[0],_[1],_[2]),a.setColorAt(p,d)}),a.frustumCulled=!1,a}function T2(n,t=46){const e=new ee,i=[0,0,1.2,-.25,0,-.9,.25,0,-.9,0,0,.5,-3,.1,-.2,0,0,-.5,0,0,.5,0,0,-.5,3,.1,-.2];e.setAttribute("position",new Ht(i,3)),e.setAttribute("normal",new Ht(new Array(i.length/3).fill([0,1,0]).flat(),3));const r=xa(n,`
    float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
    float flap = sin(uTime * 11.0 + ph) * 0.9 + 0.2;
    p.y += abs(p.x) * flap * 0.45;`,"",{side:Oe,frag:"col = mix(col, vec3(0.08, 0.06, 0.07), 0.55);"}),s=new xn(e,r,t);s.frustumCulled=!1;const o=Ye(11),a=Array.from({length:t},()=>({rad:260+o()*260,h:110+o()*140,ph:o()*6.28,sp:.07+o()*.05,wob:o()*10,size:1.6+o()*.8})),c=new ne,l=new P,u=new P,f=new P(0,1,0),d=new P,h=new ne,m=new Ce,v=(g,p,y)=>{const x=g.ph+p*g.sp,_=g.rad+Math.sin(p*.3+g.wob)*60;return y.set(Math.cos(x)*_+Math.sin(p*.21+g.wob)*40,g.h+Math.sin(p*.5+g.wob)*22,Math.sin(x)*_*.8-40)};return s.update=g=>{a.forEach((p,y)=>{v(p,g,l),v(p,g+.2,u),h.lookAt(u,l,f),m.setFromRotationMatrix(h),d.setScalar(p.size),c.compose(l,m,d),s.setMatrixAt(y,c)}),s.instanceMatrix.needsUpdate=!0},s}function A2(n,t=1600){const e=Ye(5),i=new Float32Array(t*3),r=new Float32Array(t);for(let c=0;c<t;c++)i[c*3]=e()*140,i[c*3+1]=e()*140,i[c*3+2]=e()*140,r[c]=.5+e()*1.5;const s=new ee;s.setAttribute("position",new se(i,3)),s.setAttribute("aSize",new se(r,1));const o=new ge({transparent:!0,depthWrite:!1,blending:es,uniforms:n,vertexShader:`
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
      void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c)); gl_FragColor = vec4(vec3(0.75, 0.88, 0.9), a * vA * 0.55 * uUnder); }`}),a=new Ys(s,o);return a.frustumCulled=!1,a}function C2(n,t=9){const e=new rn(1,1,1,1);e.translate(0,-.5,0);const i=Ye(21),r=new We,s=new ge({transparent:!0,depthWrite:!1,blending:es,side:Oe,uniforms:{...n,uSeed:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${sn}
      uniform float uTime; uniform float uUnder; uniform float uSeed; varying vec2 vUv; varying vec3 vW;
      void main(){
        float edge = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.65, vUv.x);
        float fall = pow(vUv.y, 1.6);
        float flick = 0.55 + 0.45 * vnoise(vec2(uTime * 0.6 + uSeed * 9.0, vUv.x * 3.0));
        float d = length(vW - cameraPosition);
        float a = edge * fall * flick * smoothstep(4.0, 30.0, d) * exp(-d * 0.012);
        gl_FragColor = vec4(vec3(0.7, 0.92, 0.95) * a * 0.22 * uUnder, 1.0);
      }`}),o=[];for(let a=0;a<t;a++){const c=s.clone();c.uniforms={...n,uSeed:{value:i()}};const l=new re(e,c);l.frustumCulled=!1,o.push({mesh:l,ox:(i()-.5)*120,oz:(i()-.5)*120,w:4+i()*10,len:60+i()*50}),r.add(l)}return r.update=a=>{for(const c of o)c.mesh.position.set(Math.round((a.position.x+c.ox)/4)*4,0,Math.round((a.position.z+c.oz)/4)*4),c.mesh.scale.set(c.w,c.len,1),c.mesh.rotation.set(0,Math.atan2(a.position.x-c.mesh.position.x,a.position.z-c.mesh.position.z),.12)},r}function R2(n,t){const e=Fs.map(([d,h])=>new P(d,0,h)),r=new ga(e,!0,"centripetal").getSpacedPoints(600),s=[],o=[],a=[],c=[];for(let d=0;d<r.length;d++){const h=r[d],m=r[(d+1)%r.length],v=m.x-h.x,g=m.z-h.z,p=Math.hypot(v,g)||1,y=-g/p,x=v/p,_=2.5;if(s.push(h.x+y*7,_,h.z+x*7,h.x-y*7,_,h.z-x*7),o.push(d/(r.length-1),d/(r.length-1)),a.push(-1,1),d<r.length-1){const w=d*2;c.push(w,w+1,w+2,w+1,w+3,w+2)}}const l=new ee;l.setAttribute("position",new Ht(s,3)),l.setAttribute("aAlong",new Ht(o,1)),l.setAttribute("aSide",new Ht(a,1)),l.setIndex(c);const u=new ge({transparent:!0,depthWrite:!1,depthTest:!1,blending:es,side:Oe,uniforms:n,vertexShader:"attribute float aAlong; attribute float aSide; varying float vA; varying float vS; void main(){ vA = aAlong; vS = aSide; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uHeart; uniform float uTime; varying float vA; varying float vS;
      void main(){
        float drawn = step(vA, uHeart);
        float head = exp(-abs(vA - uHeart) * 60.0) * step(uHeart, 0.999);
        float core = exp(-vS * vS * 9.0) + exp(-vS * vS * 1.5) * 0.35;
        float pulse = 0.8 + 0.2 * sin(vA * 80.0 - uTime * 3.0);
        vec3 c = vec3(1.0, 0.8, 0.5);
        gl_FragColor = vec4(c * (core * drawn * pulse * 1.5 + head * 3.0) * smoothstep(0.0, 0.05, uHeart), 1.0);
      }`}),f=new re(l,u);return f.frustumCulled=!1,f.renderOrder=5,f}function P2(n,t=70){const e=Ye(77),i=new Float32Array(t*3),r=new Float32Array(t);for(let c=0;c<t;c++)i[c*3]=(e()-.5)*3,i[c*3+1]=0,i[c*3+2]=(e()-.5)*3,r[c]=e();const s=new ee;s.setAttribute("position",new se(i,3)),s.setAttribute("aSeed",new se(r,1));const o=new ge({transparent:!0,depthWrite:!1,uniforms:{...n,uOrigin:{value:new P}},vertexShader:`
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
        gl_FragColor = vec4(vec3(0.85, 0.97, 1.0), (ring * 0.6 + hi) * vA * uUnder); }`}),a=new Ys(s,o);return a.frustumCulled=!1,a}function D2(n,t,e,i){const r=Ye(404),s=new We,o=(M,b,T)=>{for(let I=0;I<80;I++){let O,z;if(r()<T){const U=r()*6.283,k=Math.sqrt(r())*170;O=e.x+Math.cos(U)*k,z=e.z-30+Math.sin(U)*k}else O=(r()-.5)*1700,z=(r()-.5)*1700;const F=-t.sdfAt(O,z);if(F>M&&F<b&&Math.hypot(O,z)<Rn-20)return[O,z,F]}return null},a=`float hh = fract(sin(dot(floor(p * 3.0) + instanceMatrix[3].xyz, vec3(12.9, 78.2, 37.7))) * 43758.5);
    p += n * (hh - 0.5) * 0.22;`,c=new ne,l=new Ce,u=new P,f=new P,d=new oe,h=new Ge,m=(M,b,T)=>{let I=0;for(let O=0;O<b;O++){const z=T();if(!z)continue;const[F,U,k,D,H,G]=z;f.set(F,k,U),h.set((r()-.5)*.25,H,(r()-.5)*.25),l.setFromEuler(h),u.set(D[0],D[1],D[2]),c.compose(f,l,u),M.setMatrixAt(I,c),d.setRGB(G[0],G[1],G[2]),M.setColorAt(I,d),I++}M.count=I,M.frustumCulled=!1,s.add(M)},v=i>.6?1:.45,g={frag:"if (uTexOn > 0.001) col = mix(col, triL(tRock, vW, n, 0.22) * (0.6 + 0.6 * vC) * light * 1.25, uTexOn);"},p={frag:"if (uTexOn > 0.001) col = mix(col, triL(tReef, vW, n, 0.3) * mix(vec3(1.0), vC * 1.6, 0.45) * light * 1.2, uTexOn);"},y=new xn(new Na(1,1),xa(n,a,"",g),Math.round(300*v));m(y,Math.round(300*v),()=>{const M=o(2,90,.25);if(!M)return null;const[b,T,I]=M,O=(2+r()*4.5)*(1.2-Math.min(I,90)/150),z=.3+r()*.1;return[b,T,t.heightAt(b,T)+O*.25,[O,O*(.55+r()*.3),O*(.8+r()*.4)],r()*6.28,[z+.04,z,z-.03]]});const x=new io(1,22,10,0,Math.PI*2,0,Math.PI/2),_=[[.76,.63,.38],[.64,.62,.36],[.82,.72,.52],[.58,.52,.32],[.72,.56,.42]],w=`vec3 sd = instanceMatrix[3].xyz * 0.07;
    float kn = vn3(p * 2.3 + sd) * 0.65 + vn3(p * 5.5 + sd.zxy) * 0.35;
    p += n * (kn - 0.5) * 0.42 * smoothstep(-0.05, 0.25, p.y);`,S=`float h3(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
    float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(mix(h3(i), h3(i+vec3(1,0,0)), f.x), mix(h3(i+vec3(0,1,0)), h3(i+vec3(1,1,0)), f.x), f.y),
                 mix(mix(h3(i+vec3(0,0,1)), h3(i+vec3(1,0,1)), f.x), mix(h3(i+vec3(0,1,1)), h3(i+vec3(1,1,1)), f.x), f.y), f.z); }`,E=new xn(x,xa(n,w,S,p),Math.round(380*v));m(E,Math.round(380*v),()=>{const M=o(10,260,.3);if(!M)return null;const[b,T]=M,I=.9+r()*2.1;return[b,T,t.heightAt(b,T)-.35,[I*(.85+r()*.5),I*(.42+r()*.3),I*(.85+r()*.5)],r()*6.28,_[r()*_.length|0]]});const C=[{name:"staghorn",aspect:1.4043,n:220,h:[1.2,2.6],sway:0,s:[12,230]},{name:"softcoral",aspect:1.0039,n:170,h:[1,2.2],sway:.06,s:[10,200]},{name:"sponge",aspect:.752,n:120,h:[.9,2],sway:0,s:[14,220]},{name:"seafan",aspect:.7285,n:110,h:[1.4,3],sway:.05,s:[16,200]}];for(const M of C){const b=new xn(w2(M.aspect),b2(n,Pn(M.name),M.sway),Math.round(M.n*1.5*v));let T=0;for(let I=0;I<Math.round(M.n*v);I++){const O=o(M.s[0],M.s[1],.45);if(!O)continue;const[z,F]=O,U=M.h[0]+r()*(M.h[1]-M.h[0]);f.set(z,t.heightAt(z,F)-.15,F),h.set(0,r()*6.28,0),l.setFromEuler(h),u.set(U,U,U),c.compose(f,l,u),b.setMatrixAt(T++,c)}for(let I=0;I<Math.round(M.n*.45*v);I++){const O=r()*6.28,z=Math.sqrt(r())*46,F=e.x+6+Math.cos(O)*z,U=e.z+22+Math.sin(O)*z*.8;if(-t.sdfAt(F,U)<6)continue;const k=(M.h[0]+r()*(M.h[1]-M.h[0]))*1.15;f.set(F,t.heightAt(F,U)-.15,U),h.set(0,r()*6.28,0),l.setFromEuler(h),u.set(k,k,k),c.compose(f,l,u),b.setMatrixAt(T++,c)}b.count=T,b.frustumCulled=!1,s.add(b)}return s}function L2(n){const t=new ge({side:Oe,alphaToCoverage:!0,uniforms:{...n,uMap:Pn("eagle"),uRoll:{value:0},uSize:{value:new Nt(2.05,1.02)},uFade:{value:0},uFlip:{value:-1}},vertexShader:`
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
      ${sn}
      ${wn}
      ${Xi}
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
      }`}),e=new re(new rn(1,1),t);e.frustumCulled=!1;const i=new P(1500,22,470),r=new P(-1650,40,-430).normalize(),s=new P(-r.z,0,r.x).normalize(),o=i.clone().addScaledVector(r,78).add(new P(0,16,0)),a=44,c=26,l=new P,u=new P,f=(d,h,m)=>{const v=d/c*Math.PI*2;return m.copy(o).addScaledVector(s,Math.cos(v)*a*h).addScaledVector(r,Math.sin(v)*a*.75).add(new P(0,Math.sin(v*2+.6)*3.5,0))};return e.update=(d,h,m=1)=>{if(e.visible=h>.01,!e.visible)return;f(d,m,l),f(d-.2,m,u),e.position.copy(l),t.uniforms.uFade.value=1;const v=(l.x-u.x)*s.x+(l.z-u.z)*s.z;t.uniforms.uFlip.value=v<0?1:-1,t.uniforms.uRoll.value=(v<0?-1:1)*.18+Math.sin(d*.7)*.05},e}function kh(n,t,e){const r=new Float32Array(t*e);for(let s=0;s<t*e;s++)r[s]=n[s]?1e9:0;for(let s=0;s<e;s++)for(let o=0;o<t;o++){const a=s*t+o;if(!r[a])continue;let c=r[a];(o===0||s===0)&&(c=Math.min(c,1)),o>0&&(c=Math.min(c,r[a-1]+1)),s>0&&(c=Math.min(c,r[a-t]+1),o>0&&(c=Math.min(c,r[a-t-1]+1.414)),o<t-1&&(c=Math.min(c,r[a-t+1]+1.414))),r[a]=c}for(let s=e-1;s>=0;s--)for(let o=t-1;o>=0;o--){const a=s*t+o;if(!r[a])continue;let c=r[a];(o===t-1||s===e-1)&&(c=Math.min(c,1)),o<t-1&&(c=Math.min(c,r[a+1]+1)),s<e-1&&(c=Math.min(c,r[a+t]+1),o<t-1&&(c=Math.min(c,r[a+t+1]+1.414)),o>0&&(c=Math.min(c,r[a+t-1]+1.414))),r[a]=c}return r}function I2(n,t,e,i=.45){const s=Math.max(24,Math.round(256/e)),o=256*s,a=document.createElement("canvas");a.width=256,a.height=s;const c=a.getContext("2d",{willReadFrequently:!0});c.drawImage(n,0,0,256,s);const l=c.getImageData(0,0,256,s).data,u=new Uint8Array(o);for(let F=0;F<o;F++)u[F]=l[F*4+3]>127?1:0;const f=kh(u,256,s);let d=1;for(let F=0;F<o;F++)u[F]&&(d=Math.max(d,f[F]));const h=Math.max(1.5,d*.32),m=new Uint8Array(o);for(let F=0;F<o;F++)m[F]=f[F]>h?0:1;const v=kh(m,256,s),g=new Float32Array(256).fill(-1),p=new Float32Array(256).fill(-1);for(let F=0;F<256;F++)for(let U=0;U<s;U++){const k=U*256+F;!u[k]||v[k]>h||(g[F]<0&&(g[F]=U),p[F]=U+1)}let y=0,x=255;for(;y<256&&g[y]<0;)y++;for(;x>y&&g[x]<0;)x--;const _=t/256,w=t/e/s,S=[],E=[],C=[],M=(F,U,k,D=U)=>(S.push(k*_,(s/2-U)*w,(F/256-.5)*t),E.push(F/256,1-D/s),S.length/3-1),b=F=>{let U=0,k=0,D=0;for(let H=-2;H<=2;H++){const G=Math.round(F)+H;G<y||G>x||g[G]<0||(U+=g[G],k+=p[G],D++)}return D?[U/D,k/D]:[s/2,s/2]};if(x>y+4){const k=(H,G,W)=>[i*G*Math.sin(W),G*Math.cos(W)],D=S.length/3;for(let H=0;H<=28;H++){const G=y+.5+(x-y-1)*(H/28),[W,X]=b(G),st=(W+X)/2,lt=Math.max(.3,(X-W)/2);for(let V=0;V<12;V++){const[nt,ft]=k(st,lt,V/12*Math.PI*2);M(G,st-ft,nt,st-ft*Math.max(0,lt-1)/lt)}}for(let H=0;H<28;H++)for(let G=0;G<12;G++){const W=D+H*12+G,X=D+H*12+(G+1)%12,st=W+12,lt=X+12;C.push(W,X,st,X,lt,st)}for(const H of[0,28]){const G=y+.5+(x-y-1)*(H/28),[W,X]=b(G),st=M(G,(W+X)/2,0);for(let lt=0;lt<12;lt++)C.push(st,D+H*12+lt,D+H*12+(lt+1)%12)}}const T=S.length/3,I=20,O=2;for(let F=0;F<=O;F++)for(let U=0;U<=I;U++)M(256*(U/I),s*(F/O),0);for(let F=0;F<O;F++)for(let U=0;U<I;U++){const k=T+F*(I+1)+U,D=k+1,H=k+I+1,G=H+1;C.push(k,H,D,D,H,G)}const z=new ee;return z.setAttribute("position",new Ht(S,3)),z.setAttribute("uv",new Ht(E,2)),z.setIndex(C),z.computeVertexNormals(),z}function Qr(n,t,{len:e,height:i,wave:r=1,instanced:s=!1,turtle:o=!1,fin:a=!1,solid:c=!1,shade:l=[1,1,1]}){const u={};return s&&(u.INSTANCED=1),o&&(u.TURTLE=1),a&&(u.FIN=1),c&&(u.SOLID=1),new ge({side:Oe,alphaToCoverage:!0,defines:u,uniforms:{...n,uMap:t,uPhase:{value:0},uAmp:{value:0},uStroke:{value:0},uLen:{value:e},uH:{value:i},uWave:{value:r},uFade:{value:1},uShade:{value:new P(...l)}},vertexShader:`
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
      ${sn}
      ${wn}
      ${Xi}
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
      }`})}function Bh(n,{want:t,L:e,dt:i,base:r,vmax:s,open:o,rest:a,unseen:c}){if(!n.on)return n.idle=(n.idle??1e9)+i,o&&n.idle>a&&c(0)&&(n.on=!0,n.s=0,n.v=r),n;const l=n.s<e?ie(r+.35*(t-n.s),r*.6,s):r;return n.v+=(l-n.v)*(1-Math.exp(-i/1.5)),n.s+=n.v*i,n.s>e&&c(n.s)&&(n.on=!1,n.idle=0),n}const Bi={W:1024,H:330,end:870,top:[[3,178],[10,165],[25,150],[50,138],[75,129],[100,122],[150,110],[200,99],[250,91],[300,85],[350,82],[400,82],[450,84],[500,88],[550,95],[600,103],[650,112],[700,122],[750,133],[800,143],[830,147],[870,150]],bot:[[3,192],[10,205],[20,215],[40,225],[60,233],[100,243],[150,251],[200,257],[250,260],[300,258],[350,255],[400,249],[450,241],[500,233],[550,231],[600,228],[650,224],[700,214],[750,205],[800,196],[830,192],[870,190]],ratio:[[0,1.5],[50,1.45],[150,1.35],[250,1.2],[350,1.1],[450,1],[550,.95],[650,.85],[750,.7],[870,.55]],fins:[{hinge:[[350,200],[466,206]],box:[326,182,550,330],out:1.2},{hinge:[[612,229],[670,221]],box:[594,212,682,256],out:.8}]},El=(n,t)=>{if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){const[i,r]=n[e-1],[s,o]=n[e];return r+(o-r)*(t-i)/(s-i)}return n[n.length-1][1]};function U2(n,t){const{W:e,H:i,end:r}=Bi,s=t/e,o=document.createElement("canvas");o.width=e,o.height=i;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,e,i);const c=a.getImageData(0,0,e,i).data,l=T=>{const I=Math.min(e-1,Math.max(0,Math.round(T)));let O=-1,z=-1;for(let F=0;F<i;F++)c[(F*e+I)*4+3]>127&&(O<0&&(O=F),z=F);return[O,z]},u=(T,I)=>I.some(([O,z])=>T>=O&&T<=z),f=T=>{const[I,O]=l(T);let z=u(T,[[505,708],[728,806],[834,880]])?Math.max(I,El(Bi.top,T)):I+.3,F=u(T,[[728,806],[834,880]])?Math.min(O,El(Bi.bot,T)):O-.3;F>z||(z=F=(z+F)/2);const U=(F-z)/2;return{x:T,c:(z+F)/2,b:U,w:El(Bi.ratio,T)*U}},d=(T,I)=>{const O=Math.sin(I),z=Math.cos(I),F=z<0?2.5:2.1;return[T.w*Math.sign(O)*Math.abs(O)**(2/F),T.b*Math.sign(z)*Math.abs(z)**(2/F)]},h=[],m=[],v=[],g=(T,I,O,z=I)=>(h.push(O*s,(i/2-I)*s,(e/2-T)*s),m.push(T/e,1-z/i),h.length/3-1),p=(T,I)=>T.c-I*Math.max(0,T.b-2.5)/Math.max(T.b,.001),y=90,x=32,_=[];for(let T=0;T<=y;T++){const I=f(3+(r-3)*(T/y)**1.5);_.push(I);for(let O=0;O<x;O++){const[z,F]=d(I,O/x*Math.PI*2);g(I.x,I.c-F,z,p(I,F))}}for(let T=0;T<y;T++)for(let I=0;I<x;I++){const O=T*x+I,z=T*x+(I+1)%x,F=O+x,U=z+x;v.push(O,z,F,z,U,F)}for(const[T,I]of[[0,1],[y,-1]]){const O=_[T],z=g(O.x,O.c,0),F=h.length/3;for(let U=0;U<x;U++){const[k,D]=d(O,U/x*Math.PI*2);g(O.x,O.c-D,k,p(O,D))}for(let U=0;U<x;U++){const k=F+U,D=F+(U+1)%x;I>0?v.push(z,D,k):v.push(z,k,D)}}const w=new ee;w.setAttribute("position",new Ht(h,3)),w.setAttribute("uv",new Ht(m,2)),w.setIndex(v),w.computeVertexNormals(),h.length=0,m.length=0,v.length=0;const S=64,E=10,C=470;for(let T=0;T<=E;T++)for(let I=0;I<=S;I++)g(C+(e-C)*(I/S),i*(T/E),0);for(let T=0;T<E;T++)for(let I=0;I<S;I++){const O=T*(S+1)+I,z=O+1,F=O+S+1,U=F+1;v.push(O,F,z,z,F,U)}const M=new ee;return M.setAttribute("position",new Ht(h,3)),M.setAttribute("uv",new Ht(m,2)),M.setIndex(v),M.computeVertexNormals(),{geo:w,sheet:M,surfaceX:(T,I)=>{const O=f(T),z=ie((O.c-I)/Math.max(O.b,.001),-1,1),F=z<0?2.5:2.1;return O.w*Math.max(0,1-Math.abs(z)**F)**(1/F)}}}function N2(n,t){const{W:e,H:i}=Bi,r=n/e,s=[],o=[],a=[],c=new P,l=new Ce,u=new P,f=new P,d=new P;for(const m of Bi.fins)for(const v of[1,-1]){const[[g,p],[y,x]]=m.hinge,[_,w,S,E]=m.box,C=22,M=16,b=s.length/3,T=t(g,p)*.96,I=t(y,x)*.96,O=(z,F,U)=>U.set(v*Lt(T,I,ie((z-g)/(y-g)))*r,(i/2-F)*r,(e/2-z)*r);O(g,p,u),O(y,x,f),d.subVectors(f,u).normalize(),l.setFromAxisAngle(d,m.out),O(S,E,c).sub(u).applyQuaternion(l),Math.sign(c.x)!==v&&l.setFromAxisAngle(d,-m.out);for(let z=0;z<=M;z++)for(let F=0;F<=C;F++){const U=_+(S-_)*(F/C),k=w+(E-w)*(z/M);O(U,k,c).sub(u).applyQuaternion(l).add(u),s.push(c.x,c.y,c.z),o.push(U/e,1-k/i)}for(let z=0;z<M;z++)for(let F=0;F<C;F++){const U=b+z*(C+1)+F,k=U+1,D=U+C+1,H=D+1;a.push(U,D,k,k,D,H)}}const h=new ee;return h.setAttribute("position",new Ht(s,3)),h.setAttribute("uv",new Ht(o,2)),h.setIndex(a),h.computeVertexNormals(),h}function F2(n){const e=Bi.W/Bi.H,i={len:8.5,height:8.5/e,wave:1.15,shade:[.72,.84,.92]},r=Qr(n,Pn("whaleshark-body"),{...i,solid:!0}),s=Qr(n,Pn("whaleshark-body"),i),o=Qr(n,Pn("whaleshark-fins"),{...i,fin:!0});for(const d of[s,o])d.uniforms.uPhase=r.uniforms.uPhase,d.uniforms.uAmp=r.uniforms.uAmp;const a=new We,c=()=>new ee,l=new re(c(),r),u=new re(c(),s),f=new re(c(),o);Pn("whaleshark-body",d=>{const h=U2(d.image,8.5);l.geometry.dispose(),l.geometry=h.geo,u.geometry.dispose(),u.geometry=h.sheet,f.geometry.dispose(),f.geometry=N2(8.5,h.surfaceX)});for(const d of[l,u,f])d.frustumCulled=!1,d.renderOrder=8.5,a.add(d);return a.material=r,a.rotation.order="YXZ",a.state={s:0,v:1.3,ph:0},a}const jn={W:1024,H:1034,cx:428,cy:509,rx:322,ry:310,len:.68,dome:.16,belly:.055,neck:[690,1003],neckBand:[425,593],flippers:[{hinge:[700,392],box:[565,0,800,440],front:!0,side:-1},{hinge:[700,626],box:[565,578,800,1034],front:!0,side:1},{hinge:[165,400],box:[15,290,230,460],front:!1,side:-1},{hinge:[165,618],box:[15,558,230,730],front:!1,side:1}]},_a=jn.len/(2*jn.rx);function z2(n){const{W:t,H:e,cx:i,cy:r,rx:s,ry:o}=jn,a=_a,c=document.createElement("canvas");c.width=t,c.height=e;const l=c.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0,t,e);const u=l.getImageData(0,0,t,e).data,f=(U,k)=>{const D=Math.round(U),H=Math.round(k);return D<0||H<0||D>=t||H>=e?0:u[(H*t+D)*4+3]},d=[],h=[],m=[],v=(U,k,D,H=U,G=k)=>(d.push((k-r)*a,D,(U-i)*a),h.push(H/t,1-G/e),d.length/3-1),g=120,p=20,y=[];for(let U=0;U<g;U++){const k=U/g*Math.PI*2,D=Math.cos(k),H=Math.sin(k);let G=1;for(let W=.7;W<=1;W+=.003)if(f(i+D*s*W,r+H*o*W)<128){G=W-.003;break}y.push(G)}const x=y.map((U,k)=>(y[(k+g-1)%g]+2*U+y[(k+1)%g])/4),_=U=>.012+(jn.dome-.012)*Math.pow(Math.max(0,1-U**2.2),.55),w=U=>-(.006+(jn.belly-.006)*(1-It(.58,.86,U))*(1-.12*U*U)),S={};for(const[U,k]of[[1,_],[-1,w]]){const D=v(i,r,k(0)),H=d.length/3;for(let W=1;W<=p;W++)for(let X=0;X<g;X++){const st=W/p,lt=X/g*Math.PI*2,V=x[X]*st,nt=i+Math.cos(lt)*s*V,ft=r+Math.sin(lt)*o*V,bt=Math.min(V,x[X]-.012);v(nt,ft,k(st),i+Math.cos(lt)*s*bt,r+Math.sin(lt)*o*bt)}const G=(W,X)=>H+(W-1)*g+X%g;S[U]=W=>G(p,W);for(let W=0;W<g;W++)U>0?m.push(D,G(1,W+1),G(1,W)):m.push(D,G(1,W),G(1,W+1));for(let W=1;W<p;W++)for(let X=0;X<g;X++){const st=G(W,X),lt=G(W,X+1),V=G(W+1,X),nt=G(W+1,X+1);U>0?m.push(st,lt,V,lt,nt,V):m.push(st,V,lt,lt,V,nt)}}for(let U=0;U<g;U++){const k=S[1](U),D=S[1](U+1),H=S[-1](U),G=S[-1](U+1);m.push(k,H,D,D,H,G)}const[E,C]=jn.neck,[M,b]=jn.neckBand,T=40,I=20,O=d.length/3,z=[];for(let U=0;U<=T;U++){const k=E+(C-E)*(1-(1-U/T)**1.4);let D=-1,H=-1;for(let V=M;V<=b;V++)f(k,V)>127&&(D<0&&(D=V),H=V);D<0&&(D=H=r);const G=Math.max(.5,(H-D)/2),W=(D+H)/2,X=ie((k-840)/80),st=G*Lt(.72,.8,X),lt=Lt(.03,.045,X);z.push({px:k,c:W,hw:G,hh:st,yc:lt});for(let V=0;V<I;V++){const nt=V/I*Math.PI*2,ft=Math.sin(nt),bt=Math.cos(nt),Ft=G*Math.sign(ft)*Math.abs(ft)**(2/2.3),xt=st*Math.sign(bt)*Math.abs(bt)**(2/2.3);v(k,W+Ft,lt+xt*a,k,W+Ft*Math.max(0,G-2.5)/G)}}for(let U=0;U<T;U++)for(let k=0;k<I;k++){const D=O+U*I+k,H=O+U*I+(k+1)%I,G=D+I,W=H+I;m.push(D,G,H,H,G,W)}{const U=z[T],k=v(U.px+1,U.c,U.yc);for(let D=0;D<I;D++)m.push(O+T*I+D,O+T*I+(D+1)%I,k)}const F=new ee;return F.setAttribute("position",new Ht(d,3)),F.setAttribute("uv",new Ht(h,2)),F.setIndex(m),F.computeVertexNormals(),F}function O2(n){const{W:t,H:e}=jn,i=_a,[r,s]=n.hinge,[o,a,c,l]=n.box,u=18,f=18,d=[],h=[],m=[];for(let g=0;g<=f;g++)for(let p=0;p<=u;p++){const y=o+(c-o)*(p/u),x=a+(l-a)*(g/f);d.push((x-s)*i,0,(y-r)*i),h.push(y/t,1-x/e)}for(let g=0;g<f;g++)for(let p=0;p<u;p++){const y=g*(u+1)+p,x=y+1,_=y+u+1,w=_+1;m.push(y,_,x,x,_,w)}const v=new ee;return v.setAttribute("position",new Ht(d,3)),v.setAttribute("uv",new Ht(h,2)),v.setIndex(m),v.computeVertexNormals(),v}function k2(n){const t={len:1,height:1,turtle:!0,shade:[.95,.98,1]},e=Qr(n,Pn("turtle-top"),{...t,solid:!0}),i=Qr(n,Pn("turtle-flippers"),t),r=new We,s=new re(new ee,e);Pn("turtle-top",h=>{s.geometry.dispose(),s.geometry=z2(h.image)}),s.frustumCulled=!1,s.renderOrder=8.4,r.add(s);const o=jn.flippers.map(h=>{const m=new re(O2(h),i);return m.position.set((h.hinge[1]-jn.cy)*_a,-.012,(h.hinge[0]-jn.cx)*_a),m.frustumCulled=!1,m.renderOrder=8.4,m.userData=h,r.add(m),m});r.material=e,r.rotation.order="YXZ",r.state={s:0,v:.6,ph:0,glide:0};const a=new Ce,c=new Ce,l=new Ce,u=new P(0,1,0),f=new P(0,0,1),d=new P(1,0,0);return r.swim=(h,m,v,g)=>{const p=It(.18,.36,.5+.32*Math.sin(m*.37+.6)+.18*Math.sin(m*1.07+2));h.ph+=v*Lt(.5,.75,ie(g/1.5))*(.15+.85*p)*Math.PI*2,h.glide+=(1-p-h.glide)*(1-Math.exp(-v/.5));const y=h.glide,x=Math.cos(h.ph),_=Math.sin(h.ph);for(const w of o){const S=w.userData,E=S.front?Lt(.72*_,-.1,y):Lt(.3*Math.sin(h.ph+.9),.05,y),C=S.front?Lt(.36*x-.12,-.9,y):Lt(.18*Math.sin(h.ph+.3)+.1*Math.sin(m*.4),0,y),M=S.front?Lt(-.6*x,.05,y):Lt(.25*x,0,y);a.setFromAxisAngle(u,-S.side*C),c.setFromAxisAngle(f,S.side*E),l.setFromAxisAngle(d,M),w.quaternion.copy(a).multiply(c).multiply(l)}h.lift=-.035*_*(1-y)},r.swim(r.state,0,0,.6),r}const Hh={fusilier:{sprite:"fusilier",len:.3,aspect:3.26,ratio:.5,wave:.95},butterfly:{sprite:"butterfly",len:.17,aspect:1.42,ratio:.26,wave:1.1},damsel:{sprite:"damsel",len:.09,aspect:1.8,ratio:.42,wave:1},trigger:{sprite:"triggerfish",len:.4,aspect:1.8893,ratio:.33,wave:1.25},trevally:{sprite:"trevally",len:.6,aspect:2.0645,ratio:.32,wave:1}};function B2(n,t,e,i=1){const r=ie(i,.55,1),s=D=>Math.max(4,Math.round(D*r)),o=e.schools,a=(D,H,G,W,X,st,lt)=>({kind:"school",sp:D,n:s(H),c:o[G].at.clone(),c0:o[G].at,c1:o[G].atN,right:o[G].right,size:W.slice(),size0:W,cruise:X,near:st,gap:lt}),c=[a("fusilier",150,"descent",[5.5,3,4.5],.55,1.2,.34),a("fusilier",120,"bottom",[5,1.6,4],.5,1.2,.34),a("fusilier",190,"reef",[5.5,1.4,2.8],.5,1.2,.34),a("trevally",46,"blue",[6.5,3,6],.6,2.6,.8),a("fusilier",100,"ascent",[4.5,3,4],.55,1.2,.34),a("trevally",28,"stop",[5,2.2,4.5],.55,2.6,.8),{kind:"pair",sp:"butterfly",n:24},{kind:"cloud",sp:"damsel",n:s(96)},{kind:"solo",sp:"trigger",n:7}],l=new We,u=[],f=Ye(733),d={},h=Ye(9001),m=()=>(h()+h()+h()+h()-2)*1.732;for(const D in Hh){const H=Hh[D],G=c.filter(lt=>lt.sp===D).reduce((lt,V)=>lt+V.n,0);if(!G)continue;const W=Qr(n,Pn(H.sprite),{len:H.len,height:H.len/H.aspect,wave:H.wave,instanced:!0}),X=new xn(S2(H.len,H.aspect,10),W,G),st=new $s(new Float32Array(G*2),2);st.setUsage(Gd),X.geometry.setAttribute("aSwim",st),Pn(H.sprite,lt=>{const V=I2(lt.image,H.len,H.aspect,H.ratio);V.setAttribute("aSwim",st),X.geometry.dispose(),X.geometry=V}),X.frustumCulled=!1,l.add(X),d[D]={mesh:X,swim:st,sp:H,next:0}}const v=e.route,g=e.side,p=e.exp,y=new P(0,1,0),x=(D,H)=>t.heightAt(D,H),_=(D,H,G,W)=>{const X=v[Math.min(v.length-1,Math.floor(D/H*v.length))].clone();return X.addScaledVector(g,G+f()*(W-G)).addScaledVector(p,(f()-.5)*8),X.y=x(X.x,X.z),X},w=(D,H,G=.8)=>{let W,X,st;do W=h()*2-1,X=h()*2-1,st=h()*2-1;while(W*W+X*X+st*st>1);return H.copy(D.c).addScaledVector(D.right,W*D.size[0]*G).addScaledVector(D.fwd,st*D.size[2]*G),H.y+=X*D.size[1]*G,H.y=Math.min(Math.max(H.y,x(H.x,H.z)+1.8),-2.5),H};for(const D of c){const H=d[D.sp],G=(W,X)=>(Object.assign(W,{m:H,i:H.next++,gr:D,sz:.85+f()*.3,tail:f()*6.28,pos:X.clone(),vel:new P,w:new P,head:new P(f()-.5,0,f()-.5).normalize()}),W.vel.copy(W.head).multiplyScalar(.1),u.push(W),W);if(D.kind==="school"){D.fwd=new P(D.right.z,0,-D.right.x).normalize(),D.goal=w(D,new P,.3),D.way=w(D,new P),D.until=0,D.members=[];const W=new P(h()-.5,0,h()-.5).normalize();for(let X=0;X<D.n;X++){const st=D.goal.clone().add(new P((f()-.5)*3,(f()-.5)*1.2,(f()-.5)*3)),lt=G({kind:"school",pace:D.cruise*(.85+.3*f())},st);lt.head.copy(W),lt.vel.copy(W).multiplyScalar(lt.pace),lt.sep=new P,lt.ali=new P,lt.coh=new P,lt.nb=0,D.members.push(lt)}}else if(D.kind==="pair")for(let W=0;W<D.n/2;W++){const X=_(W,D.n/2,3,7),st=G({kind:"roam",home:X,range:1.8,lift:[.5,1.1],pace:.18+.08*f(),pause:[1,3.5]},X.clone().setY(X.y+.8));st.to=st.pos.clone(),st.wait=f()*2,G({kind:"mate",lead:st,side:f()<.5?-1:1,pace:st.pace*1.3},st.pos.clone().add(new P(.3,.05,.3)))}else if(D.kind==="cloud"){const X=Math.floor(D.n/6);for(let st=0;st<6;st++){const lt=_(st,6,1.5,6);for(let V=0;V<X;V++){const nt=G({kind:"hover",home:lt,to:new P,wait:f()*3},lt.clone().add(new P((f()-.5)*1.4,.3+f()*.9,(f()-.5)*1.4)));nt.to.copy(nt.pos)}}}else if(D.kind==="solo")for(let W=0;W<D.n;W++){const X=_(W,D.n,2,8),st=G({kind:"roam",home:X,range:3,lift:[.35,1.3],pace:.22+.1*f(),pause:[1.5,5]},X.clone().setY(X.y+.9));st.to=st.pos.clone(),st.wait=f()*3}}for(const D in d)d[D].mesh.count=d[D].next;const S=new P,E=new P,C=new P,M=new P,b=new ne,T=new Ce,I=new P,O=new ne,z=(D,H,G,W,X=2)=>{M.subVectors(H,D.pos);const st=M.length();st>1e-4?M.multiplyScalar(G*Math.min(1,st/W)/st):M.set(0,0,0),S.addScaledVector(M.sub(D.vel),X)},F=(D,H)=>{const G=h()*6.283,W=H*Math.sqrt(h());D.to.set(D.home.x+Math.cos(G)*W,0,D.home.z+Math.sin(G)*W),D.to.y=x(D.to.x,D.to.z)+D.lift[0]+h()*(D.lift[1]-D.lift[0])};let U=-1;const k=(D,H)=>{if(D<0||Math.abs(D-U)<.02)return;U<0&&(H=!1),U=D;const G=ie(D/.9);for(const W of c)if(W.kind==="school"){if(E.copy(W.c),W.c.lerpVectors(W.c0,W.c1,G),W.size[0]=W.size0[0]*Lt(1,.45,G),!H){E.subVectors(W.c,E),W.goal.add(E);for(const X of W.members)X.pos.add(E)}w(W,W.way),W.until=0}};return l.update=(D,H=.016,G=null,W=0,X=0,st=!0)=>{k(X,st);const lt=Math.min(Math.max(H,0),.05);if(lt>0){for(const V of c){if(V.kind!=="school")continue;(V.goal.distanceTo(V.way)<1||D>V.until)&&(w(V,V.way),V.until=D+8+h()*12),M.subVectors(V.way,V.goal);const nt=M.length();nt>1e-4&&V.goal.addScaledVector(M,Math.min(1,V.cruise*.7*lt/nt));const ft=V.members,bt=ft.length,Ft=V.near*V.near;for(const xt of ft)xt.sep.set(0,0,0),xt.ali.set(0,0,0),xt.coh.set(0,0,0),xt.nb=0;for(let xt=0;xt<bt;xt++){const zt=ft[xt];for(let at=xt+1;at<bt;at++){const R=ft[at],q=zt.pos.x-R.pos.x,Z=zt.pos.y-R.pos.y,et=zt.pos.z-R.pos.z,K=q*q+Z*Z+et*et;if(K>Ft)continue;zt.ali.add(R.vel),R.ali.add(zt.vel),zt.coh.add(R.pos),R.coh.add(zt.pos),zt.nb++,R.nb++;const mt=Math.sqrt(K)+1e-4;if(mt<V.gap){const gt=(V.gap-mt)/(V.gap*mt);zt.sep.x+=q*gt,zt.sep.y+=Z*gt,zt.sep.z+=et*gt,R.sep.x-=q*gt,R.sep.y-=Z*gt,R.sep.z-=et*gt}}}}for(const V of u){if(S.set(0,0,0),V.kind==="school"){const zt=V.gr;V.nb&&(S.addScaledVector(E.copy(V.ali).multiplyScalar(1/V.nb).sub(V.vel),1.1),S.addScaledVector(E.copy(V.coh).multiplyScalar(1/V.nb).sub(V.pos),.55)),S.addScaledVector(V.sep,2.2),M.subVectors(zt.goal,V.pos);const at=M.length();at>1e-4&&S.addScaledVector(M,.22*Math.min(1,at/2.5)/at),M.subVectors(V.pos,zt.c);const R=Math.hypot(M.dot(zt.right)/zt.size[0],M.y/zt.size[1],M.dot(zt.fwd)/zt.size[2]);R>1&&S.addScaledVector(M,-.8*(R-1)/Math.max(R,.001));const q=V.vel.length();q>1e-4&&S.addScaledVector(V.vel,(V.pace-q)*.9/q)}else if(V.kind==="roam")V.wait>0?(V.wait-=lt,z(V,V.to,0,1,1.5)):(z(V,V.to,V.pace,.6),V.pos.distanceTo(V.to)<.15&&(V.wait=V.pause[0]+h()*(V.pause[1]-V.pause[0]),F(V,V.range)));else if(V.kind==="mate"){E.copy(V.lead.vel);const zt=E.length();zt>.02?E.multiplyScalar(-.35/zt):E.set(0,0,0),E.add(C.set(-V.lead.head.z,0,V.lead.head.x).multiplyScalar(.22*V.side)).add(V.lead.pos),E.y+=.08,z(V,E,V.pace,.5,2.4)}else V.kind==="hover"&&(V.wait-=lt,V.wait<=0&&(V.to.copy(V.home).add(E.set((h()-.5)*1.5,.25+h()*1,(h()-.5)*1.5)),V.wait=.8+h()*3.5,V.dash=.35),V.dash=Math.max(0,(V.dash||0)-lt),z(V,V.to,V.dash>0?.9:.25,.3,V.dash>0?6:2.5));const nt=V.kind==="school"?.35:V.kind==="hover"?.25:.12,ft=Math.sqrt(2*lt/1.6);V.w.x+=-V.w.x*(lt/1.6)+nt*ft*m(),V.w.y+=-V.w.y*(lt/1.6)+nt*.4*ft*m(),V.w.z+=-V.w.z*(lt/1.6)+nt*ft*m(),S.add(V.w);const bt=x(V.pos.x,V.pos.z)+(V.kind==="school"?1.2:.2);if(V.pos.y<bt+.5&&(S.y+=(bt+.5-V.pos.y)*4),V.pos.y>-2&&(S.y-=(V.pos.y+2)*4),G&&W>0){G.closestPointToPoint(V.pos,C);const zt=V.pos.distanceTo(C),at=1.6+1.6*W;zt<at&&(E.subVectors(V.pos,C),E.lengthSq()<1e-6&&E.set(0,1,0),S.addScaledVector(E.normalize(),W*30*(1-zt/at)**2))}V.vel.addScaledVector(S,lt);const Ft=V.kind==="school"?V.gr.cruise*2.6:1.4,xt=V.vel.length();xt>Ft&&V.vel.multiplyScalar(Ft/xt),V.pos.addScaledVector(V.vel,lt),V.pos.y<bt&&(V.pos.y=bt,V.vel.y<0&&(V.vel.y=0))}}for(const V of u){const nt=V.vel.length();nt>.02&&lt>0&&(E.copy(V.vel).multiplyScalar(1/nt),E.y*=.7,V.head.lerp(E.normalize(),1-Math.exp(-lt*5)).normalize());const ft=V.m.sp.len,bt=ie(1.3+nt/(.7*ft)*.35,1.1,9);V.tail+=lt*bt*Math.PI*2,V.m.swim.setXY(V.i,V.tail,ie(.05+nt*.12/Math.max(ft*3,.3),.045,.16)),E.copy(V.pos).add(V.head),O.lookAt(E,V.pos,y),T.setFromRotationMatrix(O),I.setScalar(V.sz),b.compose(V.pos,T,I),V.m.mesh.setMatrixAt(V.i,b)}for(const V in d)d[V].mesh.instanceMatrix.needsUpdate=!0,d[V].swim.needsUpdate=!0},l.fish=u,l.update(0,0,null,0,-1),l}function qi(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new ee;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(t){let h;if(e)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(e){let u=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let m=0;m<h.count;++m)f.push(h.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Vh(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const h=[];for(let v=0;v<o[u].length;++v)h.push(o[u][v][d]);const m=Vh(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Vh(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new se(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let d=0,h=u.count;d<h;d++)for(let m=0;m<e;m++){const v=u.getComponent(d,m);a.setComponent(d+f,m,v)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const ke={x:17143,z:-8464},Un={x:17161,z:-8526},$r={x:17026,z:-8457},zs={x:16985,z:-8466},pi={x:17401,z:-8893,ry:1.305,R:40},An={minX:14e3,minZ:-11600,size:6400},hn={minX:16550,minZ:-9400,size:1450},H2=[];for(const n of _n.mainland)for(let t=0;t<n.length-1;t++)H2.push([n[t][0],n[t][1],n[t+1][0],n[t+1][1]]);const uf=(n,t)=>21*It(17160,17035,n)*(1-.62*It(16900,16690,n))+1.5*Math.exp(-((n-zs.x)**2+(t-zs.z)**2)/12800),mn={x:17240,z:-8520,ang:-.08,step:38,street:7,R:650};function V2(n,t,e){const i=t<-8500,r=i?It(16880,16905,n)*(1-It(17168,17188,n)):It(16975,16995,n)*(1-It(17200,17222,n));return r<=0||e<=2?{w:0,h:0}:{w:r*It(2.5,7,e)*(1-It(i?47:30,i?66:48,e)),h:i?4.6+(17170-n)*.005:5}}function W2(n,t,e){const i=uf(n,t),r=It(1,4,i);if(r>0&&(e+=r*($e(n/23,t/23)-.5)*7),e<=0){const d=-e;return-Math.min(.06*d+.0025*d*d,3+d*.04)-r*Math.min(d,10)*.3}const s=.06*Math.min(e,3)+.55*It(0,14,e)+1.75*It(12,46,e)+1.1*It(50,57,e),o=It(60,1100,e)*(3+$e(n/900,t/900)*12),a=It(1800,9e3,e)*(30+$e(n/2500+3,t/2500)*120),c=It(13e3,24e3,e)*(480+$e(n/4200+7,t/3200)*420),l=r*It(0,3,e)*It(34,8,e)*($e(n/6.5,t/6.5)-.32)*3.4,u=s+o+a+c+i*It(0,18,e)+l,f=V2(n,t,e);return f.w>0?Lt(u,f.h,f.w):u}function Wh(n,t,e){const i=ie((t-n.minX)/n.step,0,n.n-1.001),r=ie((e-n.minZ)/n.step,0,n.n-1.001),s=i|0,o=r|0,a=i-s,c=r-o,l=n.n,u=n.D;return(u[o*l+s]*(1-a)+u[o*l+s+1]*a)*(1-c)+(u[(o+1)*l+s]*(1-a)+u[(o+1)*l+s+1]*a)*c}const qt={root:0,spine:1,head:2,uArmA:3,fArmA:4,handA:5,uArmB:6,fArmB:7,handB:8,thighA:9,calfA:10,footA:11,thighB:12,calfB:13,footB:14,finA:15,finB:16,finTipA:17,finTipB:18},gu=19,G2=[[-1,[0,0,0]],[0,[0,.04,0]],[1,[0,.53,0]],[1,[.2,.46,-.01]],[3,[0,-.29,0]],[4,[0,-.255,0]],[1,[-.2,.46,-.01]],[6,[0,-.29,0]],[7,[0,-.255,0]],[0,[.095,-.04,0]],[9,[0,-.44,0]],[10,[0,-.42,0]],[0,[-.095,-.04,0]],[12,[0,-.44,0]],[13,[0,-.42,0]],[11,[0,-.035,.16]],[14,[0,-.035,.16]],[15,[0,0,.26]],[16,[0,0,.26]]],$={skin:0,cloth:1,neo:2,plastic:3,metal:4,glass:5,hair:6,rubber:7,hull:8,wood:9};function Cn(n,t,e,{down:i=!1,radial:r=14,k:s=5,sx:o=1,sz:a=1}={}){let c=[];for(let u=0;u<=s;u++){const f=-Math.PI/2+u/s*(Math.PI/2);c.push([n*Math.cos(f),n*Math.sin(f)])}for(let u=0;u<=s;u++){const f=u/s*(Math.PI/2);c.push([t*Math.cos(f),e+t*Math.sin(f)])}i&&(c=c.map(([u,f])=>[u,-f]).reverse());const l=new no(c.map(([u,f])=>new Nt(Math.max(u,1e-4),f)),r);return(o!==1||a!==1)&&l.applyMatrix4(new ne().makeScale(o,1,a)),l}function Ni(n,t,e,i=18){const r=new no(n.map(([s,o])=>new Nt(Math.max(s,1e-4),o)),i);return r.applyMatrix4(new ne().makeScale(t,1,e)),r}function Wo(n,{radial:t=14,sx:e=1,sz:i=1}={}){const r=n[0][0],[s,o]=n[n.length-1],a=[];for(let l=0;l<=4;l++){const u=Math.PI/2*(1-l/4);a.push([r*Math.cos(u),r*Math.sin(u)])}for(const[l,u]of n)a.push([l,-u]);for(let l=1;l<=4;l++){const u=Math.PI/2*(l/4);a.push([s*Math.cos(u),-o-s*Math.sin(u)])}a.reverse();const c=new no(a.map(([l,u])=>new Nt(Math.max(l,1e-4),u)),t);return(e!==1||i!==1)&&c.applyMatrix4(new ne().makeScale(e,1,i)),c}function Je(n,t,e,i=16,r=12,s=Math.PI){const o=new io(1,i,r,0,Math.PI*2,0,s);return o.applyMatrix4(new ne().makeScale(n,t,e)),o}const X2=new ne,Gh=new Ce,Xh=new Ge,qh=new P,$h=new P;function Tt(n,t,e,i,r=0,s=0,o=0){return Xh.set(r,s,o),Gh.setFromEuler(Xh),$h.set(t,e,i),qh.set(1,1,1),n.applyMatrix4(X2.compose($h,Gh,qh))}function Ei(n,t,e,i){n=n.index?n.toNonIndexed():n;for(const l of Object.keys(n.attributes))l!=="position"&&l!=="normal"&&n.deleteAttribute(l);const r=n.attributes.position.count,s=n.attributes.normal,o=new Float32Array(r*3),a=new Float32Array(r).fill(t),c=new Float32Array(r).fill(i);for(let l=0;l<r;l++){const u=.82+.18*(s.getY(l)*.5+.5);o[l*3]=e[0]*u,o[l*3+1]=e[1]*u,o[l*3+2]=e[2]*u}return n.setAttribute("color",new se(o,3)),n.setAttribute("aBone",new se(a,1)),n.setAttribute("aKind",new se(c,1)),n.setAttribute("aBone2",new se(a.slice(),1)),n.setAttribute("aW",new se(new Float32Array(r),1)),n.setAttribute("aPos2",new se(n.attributes.position.array.slice(),3)),n}const q2=.26;function Yh(n,t){const e=[],i=n[0].length;for(let s=0;s<n.length-1;s++)for(let o=0;o<i;o++){const a=n[s][o],c=n[s][(o+1)%i],l=n[s+1][(o+1)%i],u=n[s+1][o];e.push(...a,...c,...l,...a,...l,...u)}for(const s of[n[0],n[n.length-1]]){const o=s.reduce((l,u)=>l+u[0],0)/i,a=s.reduce((l,u)=>l+u[1],0)/i,c=s[0][2];for(let l=0;l<i;l++)e.push(o,a,c,...s[(l+1)%i],...s[l])}const r=new ee;return r.setAttribute("position",new Ht(e,3)),r.computeVertexNormals(),r}function $2(n,t,e,i,r){const s=[];for(let u=0;u<=8;u++){const f=-.19+u/8*.25,d=Math.sin(Math.min(1,(u+.6)/8.6)*Math.PI)**.35,h=.054*d,m=.044*d,v=[];for(let g=0;g<14;g++){const p=g/14*Math.PI*2;v.push([Math.cos(p)*h,Math.sin(p)*m,f])}s.push(v)}n(Yh(s),i,0);const o=[],a=.47,c=14;for(let u=0;u<=c;u++){const f=u/c,d=0+f*a,h=.058+.052*Math.min(1,f/.5)**.8,m=l(.024,.006,f)/2,v=l(.026,.01,f),g=.013;o.push([[-h,-m-v,d],[-h+g,-m-v,d],[-h+g,-m,d],[h-g,-m,d],[h-g,-m-v,d],[h,-m-v,d],[h,m+v,d],[h-g,m+v,d],[h-g,m,d],[-h+g,m,d],[-h+g,m+v,d],[-h,m+v,d]])}n(Yh(o),r,1);function l(u,f,d){return u+(f-u)*d}}function Y2(n,t,e,i,r){n=Ei(n,t,i,$.rubber);const s=n.attributes.position,o=n.attributes.aW,a=n.attributes.aBone2,c=n.attributes.aPos2;for(let l=0;l<s.count;l++){const u=s.getZ(l),f=r?Math.min(1,Math.max(0,(u-.05)/.4))**1.4:0;o.setX(l,f),a.setX(l,e),c.setXYZ(l,s.getX(l),s.getY(l),u-q2)}return n}const ur=[[.55,.37,.27],[.47,.31,.22],[.62,.44,.33],[.41,.27,.19],[.58,.4,.3]],j2=[[.05,.045,.04],[.08,.06,.05],[.12,.09,.07]];function hf(n={}){const t=[],e=(h,m,v,g)=>t.push(Ei(h,m,v,g)),i=n,r=i.skin||ur[0],s=i.hair||j2[0],o=i.diver,a=o?o.suit:null,c=o?a:i.shirt||[.85,.85,.83],l=o?a:i.pants||[.2,.22,.3],u=i.build||1,f=o?$.neo:$.cloth;e(Ni([[.001,-.02],[.13,0],[.142,.06],[.128,.19],[.145,.33],[.155,.42],[.13,.49],[.06,.53],[.001,.535]],1.18*u,.74),qt.spine,c,f),o&&o.panel&&e(Tt(Ni([[.001,.2],[.147,.24],[.157,.36],[.158,.42],[.001,.43]],1.19*u,.75),0,0,0),qt.spine,o.panel,$.neo),o&&e(Tt(Ni([[.001,.02],[.146,.05],[.147,.17],[.001,.2]],1.2*u,.755),0,0,0),qt.spine,(o.side||o.suit).map(h=>h*1),$.neo),e(Tt(Je(.165*u,.1,.12),0,-.02,0),qt.root,l,f),e(Cn(.052,.05,.09,{radial:12}),qt.head,o?a:r,o?$.neo:$.skin),e(Tt(Je(.092,.115,.104,18,14),0,.17,.012),qt.head,r,$.skin),e(Tt(Je(.035,.03,.05,10,8),0,.105,.06),qt.head,r,$.skin),e(Tt(Je(.016,.026,.02,8,6),0,.165,.108),qt.head,r.map(h=>h*.94),$.skin);for(const h of[-1,1])e(Tt(Je(.016,.026,.014,8,6),h*.092,.165,0),qt.head,r.map(m=>m*.9),$.skin);if(e(Tt(Je(.098,.1,.108,18,10,Math.PI*.56),0,.185,-.004,-.25),qt.head,s,$.hair),i.longHair&&e(Tt(Je(.085,.13,.05,12,8),0,.12,-.075,.25),qt.head,s,$.hair),i.cap&&(e(Tt(Je(.103,.075,.112,16,8,Math.PI/2),0,.215,0),qt.head,i.cap,$.cloth),e(Tt(new he(.095,.1,.008,16,1,!1,-.9,1.8),0,.215,.07),qt.head,i.cap,$.cloth)),o){const h=o.accent||[.16,.3,.55],m=[.06,.06,.07],v=[.72,.74,.77];e(Tt(new Zt(.165,.08,.055,2,2,1),0,.185,.1),qt.head,[.04,.04,.045],$.rubber),e(Tt(new Zt(.15,.062,.014),0,.186,.127),qt.head,[.05,.08,.1],$.glass),e(Tt(new cr(.1,.009,6,20),0,.19,0,0,0,0),qt.head,[.05,.05,.05],$.rubber),e(Tt(new he(.024,.028,.055,12),0,.09,.122,Math.PI/2),qt.head,[.08,.08,.09],$.plastic),e(Tt(new he(.03,.03,.02,12),0,.09,.152,Math.PI/2),qt.head,h,$.plastic),e(Tt(Ni([[.001,.07],[.168,.09],[.182,.22],[.186,.36],[.178,.45],[.142,.51],[.001,.52]],1.2*u,.86),0,0,-.012),qt.spine,o.bcd,$.neo),e(Tt(Ni([[.18,.445],[.181,.47]],1.212*u,.872,18),0,0,-.012),qt.spine,h,$.plastic),e(Tt(Ni([[.172,.08],[.176,.17]],1.215*u,.875,18),0,0,-.01),qt.spine,m,$.rubber);for(const g of[-1,1])e(Tt(new Zt(.075,.1,.05),g*.15*u,.13,.1,0,g*.5,0),qt.spine,[.1,.1,.11],$.rubber),e(Tt(new Zt(.03,.02,.012),g*.16*u,.17,.13,0,g*.5,0),qt.spine,h,$.plastic);e(Tt(Cn(.092,.092,.6,{radial:18}),0,-.04,-.215),qt.spine,o.tank,$.metal),e(Tt(new he(.096,.096,.1,18),0,-.07,-.215),qt.spine,m,$.rubber);for(const g of[.18,.36])e(Tt(new he(.097,.097,.035,18),0,g,-.215),qt.spine,m,$.rubber);e(Tt(new he(.024,.032,.07,10),0,.68,-.215),qt.spine,v,$.metal),e(Tt(new he(.018,.018,.09,8),0,.71,-.215,0,0,Math.PI/2),qt.spine,v,$.metal),e(Tt(new Zt(.08,.05,.06),-.035,.725,-.2),qt.spine,[.12,.12,.13],$.metal),e(Tt(new cr(.17,.011,6,16,Math.PI*.75),-.11*u,.6,-.04,0,Math.PI/2,Math.PI*.95),qt.spine,m,$.rubber),e(Tt(new cr(.16,.012,6,14,Math.PI*.7),.11*u,.35,.055,0,Math.PI/2,Math.PI*.45),qt.spine,m,$.rubber),e(Tt(new he(.014,.014,.12,8),.12*u,.25,.135,.15),qt.spine,[.2,.2,.22],$.plastic),e(Tt(new he(.01,.01,.5,6),.19*u,.22,-.07,.35,0,.12),qt.spine,m,$.rubber),e(Tt(new Zt(.06,.13,.035),.2*u,-.03,.02,.2,0,.15),qt.spine,[.1,.1,.11],$.plastic),e(Tt(new he(.022,.022,.012,14),.2*u,0,.04,Math.PI/2+.2,0,.15),qt.spine,[.7,.75,.72],$.glass),e(Tt(new he(.019,.019,.12,8),-.12*u,.33,.12,.3,0,0),qt.spine,[.9,.74,.1],$.plastic),e(Tt(new he(.028,.028,.02,12),-.12*u,.27,.135,Math.PI/2,0,0),qt.spine,[.9,.74,.1],$.plastic);for(const g of[-1,1])e(Tt(new Zt(.065,.36,.022),g*.09*u,.33,.128,-.12,0,0),qt.spine,m,$.rubber);e(Tt(new Zt(.2*u,.035,.02),0,.37,.132),qt.spine,m,$.rubber),e(Tt(new Zt(.04,.03,.016),0,.37,.142),qt.spine,h,$.plastic),e(Tt(new Zt(.3*u,.05,.27),0,.03,0),qt.spine,[.06,.06,.07],$.rubber),e(Tt(new Zt(.06,.045,.03),0,.03,.14),qt.spine,[.65,.66,.68],$.metal)}if(i.lifejacket){const h=i.lifejacket;e(Tt(Ni([[.001,.14],[.152,.15],[.166,.3],[.163,.41],[.12,.47],[.001,.48]],1.2*u,.9),0,0,.006),qt.spine,h,$.cloth),e(Tt(Cn(.05,.05,.16,{radial:10}),-.08,.52,-.075,0,0,-Math.PI/2),qt.spine,h,$.cloth);for(const m of[.22,.32])e(Tt(new Zt(.33*u,.02,.24),0,m,.004),qt.spine,[.07,.07,.08],$.cloth),e(Tt(new Zt(.045,.03,.02),0,m,.135),qt.spine,[.08,.08,.09],$.plastic);e(Tt(new Zt(.012,.3,.02),0,.31,.15),qt.spine,h.map(m=>m*.55),$.plastic);for(const m of[.4,.44])e(Tt(Ni([[.155,m],[.16,m+.022]],1.215*u,.905,18),0,0,.006),qt.spine,[.78,.8,.82],$.metal)}for(const[h,m,v,g]of[[qt.uArmA,qt.fArmA,qt.handA,1],[qt.uArmB,qt.fArmB,qt.handB,-1]]){const p=o||i.sleeves==="long";e(Tt(Je(.056,.056,.056),0,0,0),h,o?a:i.sleeves==="none"?r:c,o?$.neo:i.sleeves==="none"?$.skin:$.cloth),o?e(Wo([[.064,0],[.061,.09],[.055,.2],[.048,.28]]),h,a,$.neo):e(Cn(.057,.046,.28,{down:!0}),h,p?c:r,p?f:$.skin),o&&o.accent&&e(new he(.0645,.0625,.05,16,1,!0).translate(0,-.1,0),h,o.accent,$.neo),!p&&i.sleeves!=="none"&&e(Cn(.062,.056,.1,{down:!0}),h,c,$.cloth),o?e(Wo([[.049,0],[.051,.07],[.044,.16],[.035,.24]]),m,a,$.neo):e(Cn(.045,.033,.25,{down:!0}),m,i.sleeves==="long"?c:r,i.sleeves==="long"?$.cloth:$.skin),o&&g>0&&e(Tt(new Zt(.05,.022,.05),0,-.2,0),m,[.06,.06,.07],$.plastic),e(Tt(Cn(.032,.026,.11,{down:!0,sx:.55,sz:1.15}),0,0,0),v,r,$.skin),e(Tt(Cn(.012,.011,.045,{down:!0,radial:6}),0,-.02,.028,0,0,g*.35),v,r,$.skin),i.torch&&g<0&&(e(Tt(new he(.028,.024,.2,12),0,-.1,.03,Math.PI/2),v,[.15,.15,.16],$.metal),e(Tt(new he(.036,.03,.035,12),0,-.1,.13,Math.PI/2),v,[.6,.62,.66],$.metal))}for(const[h,m,v,g,p,y]of[[qt.thighA,qt.calfA,qt.footA,qt.finA,qt.finTipA,1],[qt.thighB,qt.calfB,qt.footB,qt.finB,qt.finTipB,-1]]){o?e(Wo([[.09*u,0],[.088*u,.1],[.078*u,.24],[.062,.38],[.058,.42]]),h,l,$.neo):e(Cn(.075*u,.052,.42,{down:!0}),h,l,f);const x=!o&&i.shorts!==!1;o?e(Wo([[.058,0],[.066,.1],[.06,.2],[.046,.33],[.04,.39]]),m,l,$.neo):e(Cn(.05,.036,.4,{down:!0}),m,x?r:l,x?$.skin:f),o&&o.accent&&e(new he(.0625,.0585,.045,16,1,!0).translate(0,-.2,0),m,o.accent,$.neo),o&&e(Tt(Je(.052,.075,.026,12,8),0,-.035,.042),m,[.13,.13,.14],$.rubber);const _=o?[.04,.04,.05]:i.shoes||r;if(e(Tt(Cn(.034,.03,.17,{sx:.8,sz:1}),0,-.035,-.035,Math.PI/2),v,_,o?$.rubber:i.shoes?$.cloth:$.skin),!o&&!i.shoes&&e(Tt(new Zt(.08,.012,.25),0,-.07,.05),v,[.15,.12,.1],$.rubber),o){const w=o.fins||[.05,.05,.06];$2((S,E,C)=>t.push(Y2(S,g,p,E,C)),g,p,[.045,.045,.05],w)}}return qi(t)}const Ds=new ni(new Uint8Array([128,128,128,255]),1,1);Ds.needsUpdate=!0;const Fc={tNeo:{value:Ds},tHull:{value:Ds},tCanvas:{value:Ds},tTeak:{value:Ds},uDetailOn:{value:0}};let jh=!1;function Z2(){if(jh)return;jh=!0;const n=new Fa,t={tNeo:"neoprene",tHull:"hull",tCanvas:"canvas",tTeak:"teak"};let e=4;for(const i in t)n.load(`/textures/mat-${t[i]}.webp`,r=>{r.wrapS=r.wrapT=Bs,r.colorSpace=an,r.anisotropy=4,Fc[i].value=r,--e===0&&(Fc.uDetailOn.value=1)},void 0,()=>{})}function Kn(n,t=gu){Z2();const e={value:Array.from({length:Math.max(1,t)},()=>new ne)},i=new ge({vertexColors:!0,side:Oe,defines:{NBONES:Math.max(1,t),SKINNED:t>0?1:0},uniforms:{...n,...Fc,uBones:e,uFade:{value:1}},vertexShader:`
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
      ${sn}
      ${wn}
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
      }`});return i.bones=e.value,i}const ya=[0,0,0];function ff(n){for(const t of Object.keys(n))delete n[t];return n}function mi(n,t,e,i={}){(i===n||i===t)&&(i={});const r=new Set([...Object.keys(n),...Object.keys(t)]);ff(i);for(const s of r){const o=n[s]||(s==="root"?[0,0,0,0,0,0]:ya),a=t[s]||(s==="root"?[0,0,0,0,0,0]:ya);i[s]=o.map((c,l)=>c+(a[l]-c)*e)}return i}const K2=Object.keys(qt),Go=Array.from({length:gu},()=>new ne),Tl=new Ge(0,0,0,"YXZ"),Zh=new Ce,Al=new P,J2=new P(1,1,1);function zc(n,t){for(let e=0;e<gu;e++){const[i,r]=G2[e],s=t[K2[e]]||ya;if(e===0){const o=t.root||[0,0,0,0,0,0];Tl.set(o[3],o[4],o[5]),Al.set(o[0],o[1],o[2])}else Tl.set(s[0],s[1],s[2]),Al.set(r[0],r[1],r[2]);Zh.setFromEuler(Tl),Go[e].compose(Al,Zh,J2),i>=0&&Go[e].premultiply(Go[i]),n.bones[e].copy(Go[e])}}function Q2(n,t,e,i,r,s,o=new P){return o.set(e,i,r).applyMatrix4(n.bones[t]),s?o.applyMatrix4(s.matrixWorld):o}const qe={stand:{root:[0,.98,0,0,0,0],uArmA:[.02,0,.1],uArmB:[.02,0,-.1],fArmA:[-.2,0,0],fArmB:[-.2,0,0]},sit:{root:[0,.07,0,-.05,0,0],spine:[.05,0,0],thighA:[-1.5,0,.06],thighB:[-1.5,0,-.06],calfA:[1.45,0,0],calfB:[1.45,0,0],uArmA:[-.35,0,.1],uArmB:[-.35,0,-.1],fArmA:[-1.05,0,0],fArmB:[-1.05,0,0],head:[.05,0,0]},rollReady:{root:[0,.07,0,.12,0,0],spine:[.22,0,0],head:[.32,0,0],thighA:[-1.25,0,.1],thighB:[-1.25,0,-.1],calfA:[1.2,0,0],calfB:[1.2,0,0],uArmB:[-1.25,0,.35],fArmB:[-1.95,0,0],uArmA:[.3,0,2.1],fArmA:[0,0,2.25],footA:[.6,0,0],footB:[.6,0,0]},tuck:{spine:[.45,0,0],head:[.5,0,0],thighA:[-1.9,0,.12],thighB:[-1.9,0,-.12],calfA:[1.7,0,0],calfB:[1.7,0,0],uArmB:[-1.25,0,.35],fArmB:[-1.95,0,0],uArmA:[.3,0,2.1],fArmA:[0,0,2.25],footA:[.9,0,0],footB:[.9,0,0]},surfaceOK:{root:[0,0,0,.1,0,0],spine:[-.05,0,0],head:[-.1,0,0],uArmA:[0,0,2.55],fArmA:[0,0,2.2],uArmB:[-.3,0,-.55],fArmB:[-.5,0,0],thighA:[-.3,0,.08],thighB:[.15,0,-.08],calfA:[.5,0,0],calfB:[.35,0,0],footA:[1.2,0,0],footB:[1.2,0,0]},descend:{root:[0,0,0,.25,0,0],spine:[.08,0,0],head:[-.15,0,0],uArmA:[-1.3,0,.3],fArmA:[-.6,0,0],uArmB:[-1.35,0,.45],fArmB:[-2.05,0,0],thighA:[-.18,0,.05],thighB:[-.1,0,-.05],calfA:[.3,0,0],calfB:[.24,0,0],footA:[1.45,0,0],footB:[1.45,0,0]},swim:{root:[0,0,0,Math.PI/2-.12,0,0],spine:[.05,0,0],head:[-.72,0,0],uArmA:[-.28,0,.32],fArmA:[-2.05,0,-.62],uArmB:[-.28,0,-.32],fArmB:[-2.05,0,.62],handA:[.2,0,-.2],handB:[.2,0,.2],thighA:[-.02,0,.06],thighB:[-.02,0,-.06],calfA:[.3,0,0],calfB:[.3,0,0],footA:[1.35,0,0],footB:[1.35,0,0]},hover:{root:[0,0,0,Math.PI/2-.08,0,0],spine:[.04,0,0],head:[-.6,0,0],uArmA:[-.3,0,.36],fArmA:[-2.1,0,-.66],uArmB:[-.3,0,-.36],fArmB:[-2.1,0,.66],handA:[.2,0,-.2],handB:[.2,0,.2],thighA:[.12,0,.16],thighB:[.12,0,-.16],calfA:[1.48,0,0],calfB:[1.48,0,0],footA:[.1,.25,0],footB:[.1,-.25,0]}},Fi={hip:.17,shank:.4,foot:.46,tip:.66,lagShank:.9,lagFoot:1.6,lagTip:2.2,knee0:.3};function Kh(n,t,e,i={}){i===n&&(i={}),ff(i);for(const o of Object.keys(n))i[o]=n[o].slice();const r=(o,a,c)=>{const l=(i[o]||ya).slice();l[a]+=c,i[o]=l},s=(o,a,c,l,u)=>{const f=Fi.hip*e*Math.sin(u),d=Fi.shank*e*Math.sin(u-Fi.lagShank),h=Fi.foot*e*Math.sin(u-Fi.lagFoot),m=Fi.tip*e*Math.sin(u-Fi.lagTip);r(o,0,-f),r(a,0,Fi.knee0*Math.min(1,e*2.5)+(f-d)),r(c,0,d-h),r(l,0,h-m)};return s("thighA","calfA","footA","finTipA",t),s("thighB","calfB","footB","finTipB",t+Math.PI),i}function Xo(n,t,e,{bowRise:i=.55,sternRise:r=.18,fine:s=.6,tTo:o=1,tFrom:a=0,thFrom:c=0,thTo:l=Math.PI,NU:u=22,NV:f=8}={}){const d=[],h=[],m=y=>t*Math.pow(Math.max(0,Math.sin(Math.PI*Math.min(1,y*.92+.04))),s)*(y<.5?.92+.16*y:1),v=y=>e*Math.pow(Math.max(0,Math.sin(Math.PI*(.03+.94*y))),.35),g=y=>e+r*Math.pow(Math.max(0,1-y*4),2)+i*Math.pow(Math.max(0,(y-.72)/.28),2);for(let y=0;y<=u;y++){const x=y/u,_=(x-.5)*n,w=m(x)/2,S=v(x),E=g(x);for(let C=0;C<=f;C++){const M=c+(l-c)*(C/f),b=Math.sin(M),T=w*Math.cos(M),I=E-(E-(e-S))*Math.pow(b,.75);d.push(_,Math.max(0,I),T)}}for(let y=0;y<u;y++)for(let x=0;x<f;x++){const _=y*(f+1)+x,w=_+1,S=_+f+1,E=S+1;h.push(_,S,w,w,S,E)}const p=new ee;return p.setAttribute("position",new Ht(d,3)),p.setIndex(h),p.computeVertexNormals(),p}function t_(n,t,e,i={}){return{sides:Xo(n,t,e,{...i,thFrom:.22,thTo:Math.PI-.22}),band:[Xo(n,t*1.012,e,{...i,thFrom:0,thTo:.22,NV:2}),Xo(n,t*1.012,e,{...i,thFrom:Math.PI-.22,thTo:Math.PI,NV:2})],bottom:Xo(n*.985,t*.99,e*1.004,{...i,thFrom:Math.PI/2-.5,thTo:Math.PI/2+.5,NV:4}),floor:new rn(n*.8,t*.62).rotateX(-Math.PI/2).translate(0,e*.62,0)}}const df=new Fa,e_=n=>{const t=n*Math.PI/180;return Math.atan2(Math.sin(t),-Math.cos(t))},Oc=8,pf=20,Ls=3,_i=Oc+pf*Ls,kc=31,Ma=15.2,Sa=.68;function n_(){const n=[],t=[],e=[],i=[],r=c=>Lt(kc,kc*Sa,c/_i),s=c=>Lt(Ma,Ma*Sa,c/_i),o=(c,l,u,f)=>{const d=r(c)/2+u,h=r(l)/2+u,m=s(c)/2+u,v=s(l)/2+u,g=[[[-d,c,m],[d,c,m],[h,l,v],[-h,l,v],[0,0,1],!0],[[d,c,-m],[-d,c,-m],[-h,l,-v],[h,l,-v],[0,0,-1],!0],[[d,c,m],[d,c,-m],[h,l,-v],[h,l,v],[1,0,0],!1],[[-d,c,-m],[-d,c,m],[-h,l,v],[-h,l,-v],[-1,0,0],!1]];for(const[p,y,x,_,w,S]of g){const E=T=>S?.5+(w[2]>0?1:-1)*T[0]/(2*Math.max(d,h)):.04+.3*(.5+(w[0]>0?-1:1)*T[2]/(2*Math.max(m,v))),C=T=>ie(T[1]/_i),M=(S?m-v:d-h)/(l-c||1),b=new P(w[0],M*.5,w[2]).normalize();for(const T of[p,y,x,p,x,_])n.push(...T),t.push(b.x,b.y,b.z),e.push(E(T),C(T)),i.push(f?1:0)}if(f){const p=r(c)/2,y=s(c)/2;for(const[x,_,w,S]of[[c,-1,d,m],[l,1,h,v]]){const E=[[-w,-S],[w,-S],[w,S],[-w,S]],C=[[-p,-y],[p,-y],[p,y],[-p,y]];for(let M=0;M<4;M++){const b=E[M],T=E[(M+1)%4],I=C[(M+1)%4],O=C[M],z=_<0?[b,O,I,b,I,T]:[b,T,I,b,I,O];for(const[F,U]of z)n.push(F,x,U),t.push(0,_,0),e.push(.5,ie(x/_i)),i.push(1)}}}};o(0,Oc,0,!1);for(let c=0;c<pf;c++){const l=Oc+c*Ls;o(l,l+Ls-.45,-.25,!1),o(l+Ls-.45,l+Ls,.35,!0)}const a=new ee;return a.setAttribute("position",new Ht(n,3)),a.setAttribute("normal",new Ht(t,3)),a.setAttribute("uv",new Ht(e,2)),a.setAttribute("aLedge",new Ht(i,1)),a}function i_(n,t,e=[1,1,1]){return new ge({uniforms:{...n,uMap:{value:t},uTint:{value:new P(...e)},uReady:{value:0}},vertexShader:`
      attribute float aLedge; varying vec2 vUv; varying vec3 vW; varying vec3 vN; varying float vL;
      void main(){ vUv = uv; vL = aLedge; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${sn}
      ${wn}
      ${Xi}
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
      }`})}function r_(n,t,e){const i=[.84,.83,.8],r=[.86,.67,.27];n(Tt(new Zt(t+.8,1,e+.8),0,_i+.5,0),i,$.cloth);const s=e/2-.3;n(Tt(new he(s,s,t-1.2,20,1,!1,0,Math.PI),0,_i+1,0,0,0,Math.PI/2).rotateY(0),i,$.cloth);for(const a of[-1,1])n(Tt(new he(s+.5,s+.5,.8,20,1,!1,0,Math.PI),a*(t/2-.4),_i+1,0,0,0,Math.PI/2),[.8,.79,.76],$.cloth);const o=11;for(let a=0;a<o;a++){const c=-t/2+1.6+a/(o-1)*(t-3.2);n(Tt(Je(.55,.65,.55,10,8),c,_i+1+s+.5,0),r,$.metal),n(Tt(new os(.28,1.4,8),c,_i+1+s+1.6,0),r,$.metal)}}function s_(n,t){const e=new We,i=t(Un.x,Un.z)-.6;e.position.set(Un.x,i,Un.z),e.rotation.y=e_(71);const r=new ni(new Uint8Array([180,178,172,255]),1,1);r.needsUpdate=!0;const s=i_(n,r);df.load("/textures/gopura-face.webp",u=>{u.colorSpace=an,u.anisotropy=8,s.uniforms.uMap.value=u,s.uniforms.uReady.value=1},void 0,()=>{});const o=new re(n_(),s);o.frustumCulled=!1,e.add(o);const a=[],c=(u,f,d)=>a.push(Ei(u,0,f,d));r_(c,kc*Sa,Ma*Sa),c(Tt(new Zt(14,1.2,6),0,.2,Ma/2+3),[.7,.68,.63],$.cloth);const l=new re(qi(a),Kn(n,0));return l.frustumCulled=!1,e.add(l),e.facade=s,e}function o_(n,t,e){const i=new We,r=Math.min(t(ke.x-25,ke.z),t(ke.x+25,ke.z),t(ke.x,ke.z-40),t(ke.x,ke.z+40));i.position.set(ke.x,r,ke.z),i.rotation.y=-(9*Math.PI)/180;const s=[],o=(v,g,p)=>s.push(Ei(v,0,g,p)),a=[.84,.82,.78],c=[.62,.61,.58],l=[.88,.68,.24];for(const[v,g,p,y]of[[0,-44,60,8],[0,44,60,8],[-26,0,8,80],[26,0,8,80]]){o(Tt(new Zt(p,12,y),v,-6,g),[.62,.6,.56],$.cloth),o(Tt(new Zt(p,6,y),v,3,g),a,$.cloth),o(Tt(new Zt(p+.6,.8,y+.6),v,6.4,g),c,$.cloth);for(let x=0;x<Math.max(p,y)/6;x++){const _=(x+.5)/(Math.max(p,y)/6)-.5;o(Tt(Je(.35,.5,.35,8,6),v+(p>y?_*p:0),7.2,g+(y>p?_*y:0)),l,$.metal)}}const u=-6,f=6;let d=0,h=15;for(let v=0;v<6;v++){const g=v===0?7:2.6;o(Tt(new Zt(h,g,h),u,d+g/2,f),l.map(p=>p*(.9+v%2*.1)),$.metal),o(Tt(new Zt(h+.8,.5,h+.8),u,d+g,f),l.map(p=>p*.8),$.metal),d+=g,h*=.8}o(Tt(Je(h*.75,h*.7,h*.75,14,10,Math.PI/2),u,d,f),l,$.metal),o(Tt(new os(.5,2.6,8),u,d+h*.7+1.2,f),l,$.metal),d=0,h=8;for(let v=0;v<4;v++){const g=v===0?5:2;o(Tt(new Zt(h,g,h),22,d+g/2,-30),l.map(p=>p*.95),$.metal),d+=g,h*=.78}o(Tt(Je(h*.7,h*.6,h*.7,12,8,Math.PI/2),22,d,-30),l,$.metal);const m=new re(qi(s),Kn(n,0));return m.frustumCulled=!1,i.add(m),i}function a_(n,t){const e=new We,i=t($r.x,$r.z)-1.2,r=new ge({side:Oe,alphaToCoverage:!0,uniforms:{...n,uMap:{value:null},uReady:{value:0}},vertexShader:`varying vec2 vUv; varying vec3 vW;
      void main(){ vUv = uv;
        vec3 c = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec2 sz = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        vec3 toCam = cameraPosition - c; toCam.y = 0.0; toCam = normalize(toCam + 1e-5);
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
        vec3 w = c + right * position.x * sz.x + vec3(0.0, position.y * sz.y, 0.0);
        vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`
      ${sn}
      ${wn}
      ${Xi}
      uniform sampler2D uMap; uniform float uReady; varying vec2 vUv; varying vec3 vW;
      void main(){
        if (uReady < 0.5) discard;
        vec4 c = texture2D(uMap, vUv);
        if (c.a < 0.4) discard;
        // a photograph lit by the morning: nudge it toward the scene's light
        vec3 col = c.rgb * mix(vec3(1.0), uSunCol * 0.85 + uAmbTop * 0.3, 0.35);
        gl_FragColor = vec4(fogIt(col, vW), 1.0);
      }`}),s=new re(new rn(1,1).translate(0,.5,0),r);s.frustumCulled=!1,e.add(s),e.position.set($r.x,i,$r.z),df.load("/sprites/statue-left.webp",l=>{l.colorSpace=an,l.anisotropy=8,r.uniforms.uMap.value=l,r.uniforms.uReady.value=1;const u=l.image.width/l.image.height,f=52;s.scale.set(f*u,f,1)},void 0,()=>{});const o=[];((l,u,f)=>o.push(Ei(l,0,u,f)))(Tt(Je(21,4.5,21,18,8,Math.PI/2),0,-1.5,0),[.45,.43,.4],$.cloth);const c=new re(qi(o),Kn(n,0));return c.frustumCulled=!1,e.add(c),e}function Bc(n,t,e,i,{fg:r="#1d4f9c",bg:s="#f4f3ee",font:o='bold 150px "Instrument Sans", Arial, sans-serif'}={}){const a=document.createElement("canvas");a.width=1024,a.height=Math.round(1024*i/e);const c=a.getContext("2d");c.fillStyle=s,c.fillRect(0,0,a.width,a.height),c.fillStyle=r,c.font=o,c.textAlign="center",c.textBaseline="middle";let l=parseFloat(o.match(/(\d+)px/)[1]);for(;c.measureText(t).width>a.width*.9&&l>10;)l-=4,c.font=o.replace(/\d+px/,`${l}px`);c.fillText(t,a.width/2,a.height/2+l*.04);const u=new ma(a);u.colorSpace=an,u.anisotropy=4;const f=new ge({side:Oe,uniforms:{...n,uMap:{value:u}},vertexShader:`varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${sn}
      ${wn}
      ${Xi}
      uniform sampler2D uMap; varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){ vec3 c = texture2D(uMap, vUv).rgb; vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        vec3 col = c * (uSunCol * (0.35 + 0.65 * max(dot(n, uSunDir), 0.0)) + uAmbTop * 0.6);
        gl_FragColor = vec4(fogIt(col, vW), 1.0); }`}),d=new re(new rn(e,i),f);return d.frustumCulled=!1,d}function l_(n,t,e){const i=Ye(77),r=[],s=(x,_,w)=>r.push(Ei(x,0,_,w)),o=new We,a=[.93,.93,.91],c=[.2,.26,.31],l=[.42,.13,.1],u=[.62,.6,.56],f=(x,_,w,S,E=0)=>Tt(x,0,0,0).applyMatrix4(new ne().compose(new P(_,t(_,w)+E,w),new Ce().setFromEuler(new Ge(0,S,0)),new P(1,1,1))),d=(x,_,w,S,E=0)=>x.applyMatrix4(new ne().compose(new P(_,w,S),new Ce().setFromEuler(new Ge(0,E,0)),new P(1,1,1))),h=(x,_,w)=>new Zt(x,_,w),m=(x,_,w,S)=>{let E=_;for(let C=0;C<400&&e(x,E)>S;C++)E+=w*.5;return E},v=(x,_,w,S,E)=>{let C=1/0,M=-1/0;const b=Math.cos(E),T=Math.sin(E);for(let I=0;I<=4;I++)for(let O=0;O<=4;O++){const z=(I/4-.5)*w,F=(O/4-.5)*S,U=t(x+z*b+F*T,_-z*T+F*b);C=Math.min(C,U),M=Math.max(M,U)}return{lo:C,hi:M}},g=(x,_,w,S,E,C,{fh:M=3.3,face:b=-1,trim:T=null,tanks:I=2,base:O=null,balconies:z=!0}={})=>{const F=O??v(x,_,w+2,S+2,C).lo-.25,U=F+E*M,k=(D,H,G=$.cloth,W=0,X=0,st=0)=>{D.translate(W,X,st),s(d(D,x,0,_,C),H,G)};k(h(w,U-F+6,S),a,$.cloth,0,(U+F-6)/2,0);for(let D=0;D<E;D++){const H=F+D*M;{const G=Math.max(1,Math.floor(w/4.2)),W=(w-.6)/G;for(let X=0;X<G;X++){const st=-w/2+.3+W*(X+.5);k(h(1.25,2.25,.12),c,$.glass,st-W*.2,H+1.2,b*(S/2+.04)),k(h(1.3,1.25,.12),c,$.glass,st+W*.22,H+1.65,b*(S/2+.04))}}D>0&&z&&(k(h(w+.2,.24,1.5),a,$.cloth,0,H,b*(S/2+.7)),k(h(w+.2,1,.16),[.95,.95,.93],$.cloth,0,H+.5,b*(S/2+1.42)));for(let G=0;G<Math.floor(w/3.6);G++)k(h(1.5,1.35,.12),c,$.glass,-w/2+1.8+G*3.6,H+1.75,-b*(S/2+.05));for(const G of[-1,1])for(let W=0;W<Math.max(1,Math.floor(S/4.2));W++)k(h(.12,1.35,1.5),c,$.glass,G*(w/2+.05),H+1.75,-S/2+2.1+W*4.2)}if(z)for(let D=0;D<=Math.floor(w/4.2);D++)k(h(.28,E*M-.2,1.5),a,$.cloth,-w/2+.3+D*((w-.6)/Math.floor(w/4.2)),F+E*M/2+.1,b*(S/2+.7));k(h(w-.2,.2,S-.2),[.56,.55,.52],$.cloth,0,U+.1,0);for(const[D,H,G,W]of[[w+.3,.3,0,S/2],[w+.3,.3,0,-S/2],[.3,S+.3,w/2,0],[.3,S+.3,-w/2,0]])k(h(D,1,H),a,$.cloth,G,U+.5,W),T&&k(h(D+.04,.32,H+.04),T,$.cloth,G,U+.62,W);k(h(4,2.6,3.5),a,$.cloth,w*.25,U+1.3,0);for(let D=0;D<I;D++)k(new he(.75,.75,1.5,12),[.08,.08,.09],$.plastic,-w*.3+D*2,U+1.55,S*.15);return{g0:F,top:U}};{const{top:S}=g(16979,-8607,52,17,7,.04,{face:-1,trim:[.7,.16,.12],tanks:3}),E=16965,C=-8606,M=g(E,C,15,11,2,.04,{base:S+1,face:-1,tanks:1,trim:[.7,.16,.12],balconies:!1});for(const[b,T,I,O]of[[E,C-5.8,.04,12],[E+7.8,C,.04+Math.PI/2,9]]){const z=Bc(n,"RNS",O,O*.32,{fg:"#1f4fa8",bg:"#f5f4ef"});z.position.set(b,M.top-1.6,T),z.rotation.y=I+(I===.04?Math.PI:0),o.add(z)}g(17036,m(17036,-8540,-1,12),42,10,3,.12,{face:-1,tanks:2}),g(17083,m(17083,-8540,-1,12),30,10,4,.1,{face:-1,tanks:2})}{let x=17116,_=-8609;for(let k=0;k<40;k++){const D=e(x,_);if(Math.abs(D-1.5)<.5)break;const H=2,G=e(x+H,_)-e(x-H,_),W=e(x,_+H)-e(x,_-H),X=Math.hypot(G,W)||1;x-=G/X*(D-1.5)*.6,_-=W/X*(D-1.5)*.6}const w=Math.PI/8,S=2.6,E=(k,D,H,G=8,W=!1)=>new he(k,D,H,G,1,W);s(d(E(11.5,12.8,S+3.5).translate(0,(S-3.5)/2,0),x,0,_,w),u,$.cloth);let C=S,M=10.2;for(let k=0;k<3;k++){const D=k===2?3.1:3.7;s(d(E(M-1,M-1,D).translate(0,D/2,0),x,C,_,w),c,$.glass);for(let H=0;H<8;H++){const G=H/8*Math.PI*2;s(d(E(.32,.32,D,8).translate(Math.cos(G)*(M-.4),D/2,Math.sin(G)*(M-.4)),x,C,_,0),a,$.cloth)}s(d(E(M+.7,M+.5,.42).translate(0,D+.21,0),x,C,_,w),a,$.cloth),s(d(E(M+.55,M+.55,1,8,!0).translate(0,D+.92,0),x,C,_,w),l,$.cloth),s(d(E(M+.62,M+.62,.12).translate(0,D+1.42,0),x,C,_,w),l,$.cloth),C+=D+.42,M*=k===0?.86:.78}for(let k=0;k<8;k++){const D=k/8*Math.PI*2;s(d(E(.2,.2,2.6,6).translate(Math.cos(D)*2.4,1.3,Math.sin(D)*2.4),x,C,_,0),a,$.cloth)}s(d(E(2.9,2.9,.4).translate(0,2.8,0),x,C,_,w),a,$.cloth),s(d(Je(2.6,2.4,2.6,16,10,Math.PI/2).translate(0,3,0),x,C,_,0),[.95,.94,.9],$.cloth),s(d(E(.08,.22,1.4,8).translate(0,6,0),x,C,_,0),[.86,.68,.26],$.metal);const b=Bc(n,"NAVEEN BEACH RESTAURANT",11,1,{fg:"#b3261e",bg:"#f6f4ee"}),T=Math.atan2(17200-x,-8640-_);b.position.set(x+Math.sin(T)*8.95,S+3.7+.42+.95,_+Math.cos(T)*8.95),b.rotation.y=T,o.add(b);for(let k=0;k<26;k++){const D=i()*6.28,H=12.5+i()*4,G=1.2+i()*2.2,W=Je(G,G*.6,G*.9,9,7);s(Tt(W,x+Math.cos(D)*H,-.6+i()*.8,_+Math.sin(D)*H,0,i()*6.28,0),[.24,.22,.2],$.cloth)}const I=x+Math.sin(T)*12,O=_+Math.cos(T)*12,z=34,F=S+.6,U=h(2.6,.35,z).translate(0,0,z/2);s(d(U,I,F,O,T),u,$.cloth);for(const k of[-1,1])s(d(h(.1,1,z).translate(k*1.25,.65,z/2),I,F,O,T),l,$.cloth);for(let k=0;k<=5;k++)s(d(h(.6,F+3,.6).translate(0,-6.2/2,k/5*z),I,F,O,T),u,$.cloth)}for(const[x,_,w,S]of[[17082,3,26,.08],[17048,4,24,.08],[17014,3,22,.08]])g(x,m(x,-8460,1,13),w,12,_,S,{face:1,tanks:2});s(f(new he(.25,.25,6,6).translate(0,3,0),16955,-8574,0),[.6,.55,.45],$.metal),s(f(new he(3.2,3.2,.4,24).rotateX(Math.PI/2).translate(0,7.5,0),16955,-8574,-.3),[.92,.72,.25],$.metal);const p=[[17148,-8410],[17166,-8446],[17184,-8500]];for(let x=0;x<p.length-1;x++){const[_,w]=p[x],[S,E]=p[x+1],C=Math.hypot(S-_,E-w),M=Math.atan2(-(E-w),S-_),b=Math.max(t(_,w),t(S,E))+.5;s(Tt(new Zt(C+2,b+2,2.5).translate(0,(b+2)/2-2,0),(_+S)/2,0,(w+E)/2,0,M,0),[.5,.47,.42],$.cloth)}for(let x=0,_=0;x<170&&_<6e3;_++){const w=16660+i()*580,S=-8690+i()*330,E=e(w,S);if(E>6||E<-10||Math.hypot(w-Un.x,S-Un.z)<60&&E>-4)continue;const C=1.2+i()*3.2,M=Je(C,C*(.55+i()*.3),C*(.8+i()*.4),9,7),b=M.attributes.position;for(let I=0;I<b.count;I++){const O=.85+.3*Math.sin(b.getX(I)*3.1+x)*Math.cos(b.getZ(I)*2.7);b.setXYZ(I,b.getX(I)*O,b.getY(I)*O,b.getZ(I)*O)}M.computeVertexNormals();const T=.22+i()*.1;s(Tt(M,w,Math.max(-.8,t(w,S))-C*.25,S,0,i()*6.28,0),[T+.02,T,T-.02],$.cloth),x++}const y=new re(qi(r),Kn(n,0));return y.frustumCulled=!1,o.add(y),o}function c_(n,t,e){const i=Ye(515),r=[],s=(p,y,x)=>r.push(Ei(p,0,y,x)),o=(p,y)=>{const _=e(p+3,y)-e(p-3,y),w=e(p,y+3)-e(p,y-3),S=Math.hypot(_,w)||1;return[_/S,w/S]},a=(p,y,x)=>{for(let _=0;_<60;_++){const w=e(p,y),[S,E]=o(p,y);if(Math.abs(w-x)<.3)break;p-=S*(w-x)*.7,y-=E*(w-x)*.7}return[p,y]},c=(p,y,x,_,w,S,E,C,M)=>{const b=t_(p,y,x,_),T=new ne().compose(new P(w,S,E),new Ce().setFromEuler(new Ge(0,C,0)),new P(1,1,1));s(b.sides.applyMatrix4(T),M.side,$.plastic);for(const I of b.band)s(I.applyMatrix4(T),M.band,$.plastic);return s(b.bottom.applyMatrix4(T),M.bottom,$.plastic),s(b.floor.applyMatrix4(T),M.floor,$.wood),T},l=[[.12,.35,.62],[.1,.42,.55],[.16,.3,.7],[.08,.48,.5],[.14,.4,.32],[.1,.36,.66],[.85,.85,.82],[.7,.2,.15]],u=[[.93,.93,.9],[.95,.82,.25],[.8,.2,.15],[.93,.93,.9]],f=[[17213,-8521],[17336,-8464],[17493,-8215],[17510,-8056]],d=f.slice(1).map((p,y)=>Math.hypot(p[0]-f[y][0],p[1]-f[y][1])),h=d.reduce((p,y)=>p+y,0),m=p=>{let y=p*h;for(let x=0;x<d.length;x++){if(y<=d[x]){const _=y/d[x];return[f[x][0]+(f[x+1][0]-f[x][0])*_,f[x][1]+(f[x+1][1]-f[x][1])*_]}y-=d[x]}return f[f.length-1]};for(const[p,y]of[[0,16],[1,27]])for(let x=6+p*1.3;x<h*.55;x+=2.5+i()*1.2){if(i()<.12)continue;let[_,w]=m(x/h);[_,w]=a(_,w,y+(i()-.5)*3);const[S,E]=o(_,w),C=Math.atan2(E,-S)+(i()-.5)*.18,M=7.5+i()*3,b=1.7+i()*.35,T=.85+i()*.2,I=l[i()*l.length|0],O=c(M,b,T,{bowRise:.45+i()*.25},_,t(_,w)-.05,w,C,{side:I,band:u[i()*u.length|0],bottom:i()<.5?[.32,.12,.1]:[.12,.12,.13],floor:[.3,.25,.2]});i()<.22&&s(new Zt(M*.62,.35,b*1.05).translate(-M*.05,T+.1,0).applyMatrix4(O),[.12,.5,.55],$.cloth)}const v=[[17199,-8593],[17249,-8680],[17313,-8846],[17358,-9156]];for(let p=0;p<30;p++){const y=i()*.999*(v.length-1),x=Math.floor(y),_=y-x,[w,S]=v[x],[E,C]=v[x+1];let M=w+(E-w)*_,b=S+(C-S)*_,T=i();[M,b]=a(M,b,-(T<.35?9:5)-i()*10);const[I,O]=o(M,b),z=Math.atan2(-O,I)+(i()-.5)*.5;if(T<.35){const F=10+i()*3,U=2.6,k=1.15,D=i()<.5?[.95,.8,.22]:[.93,.93,.9],H=c(F,U,k,{bowRise:.35,fine:.5},M,-.45,b,z,{side:D,band:[.15,.35,.7],bottom:[.7,.15,.12],floor:[.85,.85,.82]});s(new Zt(F*.6,1.5,U*.86).translate(-F*.06,k+.75,0).applyMatrix4(H),[.94,.94,.92],$.plastic);for(const G of[-1,1])s(new Zt(F*.56,.7,.05).translate(-F*.06,k+.95,G*U*.435).applyMatrix4(H),[.12,.16,.2],$.glass);s(new Zt(F*.64,.14,U*.95).translate(-F*.06,k+1.57,0).applyMatrix4(H),[[.92,.42,.12],[.15,.35,.7],[.8,.15,.12]][i()*3|0],$.plastic)}else if(T<.75){const F=5.5+i()*1.5,U=2,k=.85,D=[[.95,.95,.93],[.95,.8,.2],[.9,.25,.15]][i()*3|0],H=c(F,U,k,{bowRise:.22,sternRise:0,fine:.45},M,-.3,b,z,{side:D,band:[.12,.3,.65],bottom:[.9,.9,.88],floor:[.85,.83,.78]});s(new Zt(.5,.55,U*.75).translate(F*.08,k+.3,0).applyMatrix4(H),[.15,.2,.24],$.glass)}else{const U=[[.1,.1,.12],[.95,.5,.1],[.95,.85,.2],[.2,.5,.9]][i()*4|0],k=c(3,1.1,.6,{bowRise:.1,sternRise:0,fine:.4},M,-.2,b,z,{side:U,band:[.93,.93,.9],bottom:[.9,.9,.9],floor:U});s(new Zt(1.1,.25,.45).translate(-.2,.75,0).applyMatrix4(k),[.1,.1,.1],$.rubber)}}const g=new re(qi(r),Kn(n,0));return g.frustumCulled=!1,g}function u_(n,t,e){const i=Ye(909),r=[],s=(X,st,lt)=>r.push(Ei(X,0,st,lt)),o=new We,a=[.93,.89,.8],c=[.74,.7,.62],l=[.95,.95,.93],u=[.13,.16,.19],f=[.62,.16,.12],d=[.3,.5,.2],{x:h,z:m,ry:v}=pi,g=Math.cos(v),p=Math.sin(v),y=(X,st)=>[h+X*g+-st*p,m-X*p+-st*g],x=Math.min(...[[-30,-24],[30,-24],[-30,22],[30,22],[0,0]].map(([X,st])=>{const[lt,V]=y(X,st);return t(lt,V)}))-.15,_=(X,st,lt,V,nt=0)=>{const[ft,bt]=y(st,V);return X.applyMatrix4(new ne().compose(new P(ft,x+lt,bt),new Ce().setFromEuler(new Ge(0,v+nt,0)),new P(1,1,1)))},w=(X,st,lt)=>new Zt(X,st,lt),S=44,E=12,C=3.5,M=2*C+.6;s(_(w(S,M+1.2,E).translate(0,(M-1.2)/2,0),0,0,-6),a,$.cloth);for(let X=.5;X<M-.3;X+=.42)s(_(w(S+.06,.07,E+.06).translate(0,X,0),0,0,-6),c,$.cloth);const b=(X,st,lt,V,nt,ft)=>{const bt=ft?-1:1,Ft=(q,Z)=>new he(q,q,Z,16,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),xt=w(V,nt,.1).translate(0,nt/2,bt*.1),zt=Ft(V/2,.1).translate(0,nt,bt*.1),at=w(V+.36,nt,.08).translate(0,nt/2,bt*.05),R=Ft(V/2+.18,.08).translate(0,nt,bt*.05);for(const[q,Z,et]of[[at,l,$.cloth],[R,l,$.cloth],[xt,u,$.glass],[zt,u,$.glass]])s(_(q,X,st,lt),Z,et)},T=6;for(let X=0;X<2;X++)for(let st=0;st<T;st++){const lt=-S/2+S/T*(st+.5),V=X*C+.55;b(lt,V+.35,-6+E/2,2,1.75,!0),b(lt,V+.5,-6-E/2,1.2,1.2,!1),X===1&&(s(_(w(2.8,.18,1.1).translate(0,0,-.55),lt,V-.05,-6+E/2),l,$.cloth),s(_(w(2.8,.9,.08).translate(0,.45,-1.08),lt,V-.05,-6+E/2),l,$.cloth))}s(_(w(S-.2,.2,E-.2).translate(0,M+.1,0),0,0,-6),[.58,.56,.52],$.cloth);for(const[X,st,lt,V]of[[S+.4,.3,0,E/2],[S+.4,.3,0,-E/2],[.3,E+.4,S/2,0],[.3,E+.4,-S/2,0]])s(_(w(X,.9,st).translate(lt,M+.45,-V),0,0,-6),a,$.cloth),s(_(w(X+.06,.14,st+.06).translate(lt,M+.95,-V),0,0,-6),f,$.cloth);s(_(w(9,3.2,E+.8).translate(0,M+1.6,0),0,0,-6),a,$.cloth),b(0,M+.2,-6+E/2+.4,3.2,1.5,!0);const I=-6+E/2,O=22,z=O-I;s(_(w(6.4,.5,z).translate(0,4.05,-z/2),0,0,I),l,$.cloth);for(const X of[-3,3])for(let st=0;st<=5;st++){const lt=I+st/5*z;s(_(new he(.17,.2,3.8,10).translate(0,1.9,0),X,0,lt),l,$.cloth),st<5&&s(_(w(.24,.55,z/5-.4).translate(0,3.55,-z/10),X,0,lt),l,$.cloth)}for(const[X,st]of[[-32,-4.5],[4.5,32]]){const lt=st-X;s(_(w(lt,1.5,.35).translate(0,.75,0),(X+st)/2,0,23),a,$.cloth),s(_(w(lt+.05,.12,.42).translate(0,1.56,0),(X+st)/2,0,23),f,$.cloth)}for(const X of[-4.5,4.5])s(_(w(.9,2.6,.9).translate(0,1.3,0),X,0,23),a,$.cloth);for(const[X,st,lt,V]of[[-32,0,.35,46],[32,0,.35,46],[0,-23,64,.35]])s(_(w(lt,1.5,V).translate(0,.75,0),X,0,st),a,$.cloth);for(const[X,st,lt,V]of[[-30,-4,1,21],[4,30,1,21]]){const nt=st-X,ft=V-lt;s(_(w(nt,.12,ft).translate(0,.08,0),(X+st)/2,0,(lt+V)/2),d,$.cloth);for(const[bt,Ft,xt,zt]of[[(X+st)/2,lt,nt,.2],[(X+st)/2,V,nt,.2],[X,(lt+V)/2,.2,ft],[st,(lt+V)/2,.2,ft]])s(_(w(xt,.22,zt).translate(0,.11,0),bt,0,Ft),f,$.cloth)}s(_(w(64,.06,1.2).translate(0,.03,0),0,0,0),[.62,.58,.52],$.cloth);const F=Bc(n,"NAVEEN BEACH RESORT",8.5,1,{fg:"#1c4f96",bg:"#f6f2e6"}),[U,k]=y(0,23.3);F.position.set(U,x+3.3,k),F.rotation.y=v+Math.PI,o.add(F),s(_(w(8.9,1.3,.25).translate(0,3.3,0),0,0,23.1),a,$.cloth);const D=[];for(let X=0;X<16;X++){const st=(i()-.5)*58,lt=2+i()*19;Math.abs(st)<5||D.push(y(st,lt))}for(let X=0;X<6;X++)D.push(y(-28+X*11,-20));const H=new xn(Nc(),Uc(n,Pn("palm"),{instanced:!0,light:.45}),D.length),G=new ne;D.forEach(([X,st],lt)=>{const V=9+i()*7;G.compose(new P(X,x-.2,st),new Ce,new P(V*.5322*(i()<.5?-1:1),V,1)),H.setMatrixAt(lt,G)}),H.frustumCulled=!1,o.add(H);const W=new re(qi(r),Kn(n,0));return W.frustumCulled=!1,o.add(W),o}function h_(n,t,e){const i=new We,r=s_(n,t);return i.add(r,o_(n,t),a_(n,t),l_(n,t,e),c_(n,t,e),u_(n,t)),i}const wa={x:17260,z:-9150},Jh={x:25,z:455},Qh={x:7e3,z:-2500},Os=n=>{const t=1-n;return[t*t*wa.x+2*t*n*Qh.x+n*n*Jh.x,t*t*wa.z+2*t*n*Qh.z+n*n*Jh.z]},Oi=(()=>{const t=[0];let[e,i]=Os(0);for(let r=1;r<=400;r++){const[s,o]=Os(r/400);t.push(t[r-1]+Math.hypot(s-e,o-i)),e=s,i=o}return t})(),ks=Oi[Oi.length-1];function ps(n,t={}){const e=ie(n)*ks;let i=0,r=Oi.length-1;for(;r-i>1;){const g=i+r>>1;Oi[g]<e?i=g:r=g}const s=(e-Oi[i])/(Oi[r]-Oi[i]||1),o=(i+s)/(Oi.length-1),[a,c]=Os(o),[l,u]=Os(Math.min(1,o+.002)),[f,d]=Os(Math.max(0,o-.002)),h=l-f,m=u-d,v=Math.hypot(h,m)||1;return t.x=a,t.z=c,t.hx=h/v,t.hz=m/v,t}const f_=Kr([.425,.44,.465,.515,.545,.552],[0,.004,.05,.86,.996,1]),oa=n=>n<=.425?0:n>=.552?1:f_(n);function Is(n,{gloss:t=.12,hole:e=null,side:i=ii,detail:r=0,facade:s=null}={}){return new ge({vertexColors:!0,side:i,uniforms:{...n,uHole:{value:e||new pe(0,0,-1,-1)},uGloss:{value:t},uDetail:{value:r},uFacade:{value:s?1:0},uFacadeBase:{value:s?s.base:0}},vertexShader:`
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
      ${sn}
      ${wn}
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
      }`})}function t0(n,t){return new ge({uniforms:{...n,uPart:{value:t}},vertexShader:`
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
      ${sn}
      ${wn}
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
      }`})}function e0(){const n=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.22,1,0],[.22,1,0]],t=[[0,4,5,1],[1,5,2],[2,5,4,3],[3,4,0]],e=[];for(const r of t){const s=r.length===4?[[r[0],r[1],r[2]],[r[0],r[2],r[3]]]:[r];for(const o of s)for(const a of o)e.push(...n[a])}const i=new ee;return i.setAttribute("position",new Ht(e,3)),i.computeVertexNormals(),i}function qo(n,t){const e=n.index?n.toNonIndexed():n;for(const s of Object.keys(e.attributes))s!=="position"&&s!=="normal"&&e.deleteAttribute(s);e.attributes.normal||e.computeVertexNormals();const i=e.attributes.position.count,r=new Float32Array(i*3);for(let s=0;s<i;s++)r[s*3]=t[0],r[s*3+1]=t[1],r[s*3+2]=t[2];return e.setAttribute("color",new se(r,3)),e}new ne;new P;new P;function Cl(n,t,e){const i=new ee;i.setAttribute("position",new se(n.pos,3)),i.setAttribute("normal",new se(n.nrm,3)),i.setAttribute("color",new se(n.col,3)),n.kind&&i.setAttribute("aKind",new se(n.kind,1)),i.setIndex(new se(n.idx,1));const r=new re(i,Is(t,{gloss:0,hole:e,detail:1}));return r.frustumCulled=!1,r}function d_(n,t,e){const i=new We,r=Ye(2024),s=e.fine,o=e.near,a=new pe(An.minX+30,An.minZ+30,An.minX+An.size-30,An.minZ+An.size-30),c=new pe(hn.minX,hn.minZ,hn.minX+hn.size,hn.minZ+hn.size);i.add(Cl(o,n,null),Cl(s,n,c),Cl(e.coarse,n,a));const l=(at,R)=>at>hn.minX+1&&at<hn.minX+hn.size-1&&R>hn.minZ+1&&R<hn.minZ+hn.size-1,u=(at,R)=>l(at,R)?Wh(o,at,R):Wh(s,at,R),f=(at,R)=>W2(at,R,u(at,R));{const R=new ni(e.shore,256,256,Gi,Jn);R.magFilter=R.minFilter=Nn,R.needsUpdate=!0,n.uSdf2.value=R,n.uRect2.value.set(An.minX,An.minZ,An.size,An.size)}if(e.shoreNear){const R=new Uint16Array(262144);for(let Z=0;Z<R.length;Z++)R[Z]=hp.toHalfFloat(e.shoreNear[Z]);const q=new ni(R,512,512,Gi,vr);q.magFilter=q.minFilter=Nn,q.needsUpdate=!0,n.uSdf3.value=q,n.uRect3.value.set(hn.minX,hn.minZ,hn.size,hn.size)}const d=(at,R,q)=>Math.hypot(at.x-R.x,at.z-R.z)<q;let h=0;const m=new ne,v=new oe;i.add(h_(n,f,u));const g=t>.6?1700:700,p=new Zt(1,1,1).translate(0,.5,0),y=new xn(p,t0(n,0),g),x=new xn(e0(),t0(n,1),g),_=new Float32Array(g*3);y.geometry.setAttribute("aInfo",new $s(_,3)),x.geometry.setAttribute("aInfo",new $s(new Float32Array(g*3),3));const w=qo(new he(.7,.7,1.4,10).translate(0,.7,0),[.07,.07,.08]),S=new xn(w,Is(n,{gloss:.3}),g),E=qo(new Zt(1,1,1).translate(0,.5,0),[1,1,1]),C=qo(e0(),[1,1,1]),M=new xn(E,Is(n,{gloss:.05}),260),b=new xn(C,Is(n,{gloss:.25}),260),T=[[.95,.94,.9],[.95,.9,.76],[.84,.9,.95],[.96,.84,.82],[.86,.94,.86],[.93,.93,.93],[.98,.86,.55],[.8,.88,.8]],I=[[.95,.94,.9],[.95,.88,.7],[.75,.42,.3],[.86,.9,.95],[.92,.86,.74]],O=new Set,z=7,F=(at,R)=>at*100003+R,U=(at,R,q,Z,et)=>{const K=Math.hypot(q,Z)/2+1.5,mt=Math.floor((at-K)/z),gt=Math.floor((at+K)/z),Mt=Math.floor((R-K)/z),vt=Math.floor((R+K)/z);for(let At=mt;At<=gt;At++)for(let N=Mt;N<=vt;N++)if(O.has(F(At,N)))return!1;for(let At=mt;At<=gt;At++)for(let N=Mt;N<=vt;N++)O.add(F(At,N));return!0};let k=0,D=0,H=0,G=0;const W=new Ce,X=new Ge;for(let at=0;at<4e3&&G<110;at++){const R=Un.x-80+r()*320,q=Un.z-260+r()*520,Z=u(R,q);if(Z<59||Z>78||d({x:R,z:q},ke,75)||d({x:R,z:q},Un,34)||d({x:R,z:q},zs,240)||d({x:R,z:q},pi,pi.R+8))continue;const et=3,K=u(R+et,q)-u(R-et,q),mt=u(R,q+et)-u(R,q-et),gt=Math.atan2(K,mt)+(r()-.5)*.1,Mt=2.6+r()*2.4,vt=2.4+r()*1.4,At=2.1+r()*.5;if(!U(R,q,Mt,vt))continue;const N=f(R,q)-.2;X.set(0,gt,0),W.setFromEuler(X),m.compose(new P(R,N,q),W,new P(Mt,At,vt)),M.setMatrixAt(G,m);const A=.22+r()*.16;v.setRGB(A*(.9+r()*.3),A*(.85+r()*.2),A*(.8+r()*.2)),M.setColorAt(G,v),m.compose(new P(R,N+At,q),W,new P(Mt*1.2,.3+r()*.25,vt*1.3)),b.setMatrixAt(G,m);const j=[[.12,.42,.78],[.1,.52,.6],[.15,.35,.72],[.85,.3,.15],[.95,.8,.2]][r()<.75?r()*3|0:3+(r()*2|0)];v.setRGB(...j),b.setColorAt(G,v),G++}const st=(at,R,q,Z,et,K,mt,gt)=>{const Mt=et*(K?3.2:3)+(K?.9:.4),vt=Math.min(f(at-q/2,R),f(at+q/2,R),f(at,R-Z/2),f(at,R+Z/2))-.3;X.set(0,mt,0),W.setFromEuler(X),m.compose(new P(at,vt,R),W,new P(q,Mt,Z)),y.setMatrixAt(k,m);const At=(K?T:I)[r()*(K?T.length:I.length)|0];if(v.setRGB(At[0],At[1],At[2]),y.setColorAt(k,v),_[k*3]=et,_[k*3+1]=r(),_[k*3+2]=gt?1:0,!K||r()<.12){const N=q>=Z;X.set(0,mt+(N?0:Math.PI/2),0),W.setFromEuler(X),m.compose(new P(at,vt+Mt,R),W,new P((N?q:Z)*1.16,Math.min(q,Z)*.36,(N?Z:q)*1.18)),x.setMatrixAt(D,m);const A=.82+r()*.22;v.setRGB(.72*A,.33*A,.2*A),x.setColorAt(D,v),D++}else if(r()<.75)for(let N=0,A=1+(r()*2|0);N<A&&H<g;N++)m.compose(new P(at+(r()-.5)*q*.5,vt+Mt,R+(r()-.5)*Z*.5),W,new P(1,.9+r()*.4,1)),S.setMatrixAt(H++,m);k++};{const at=mn.step,R=(at-mn.street)/2,q=Math.cos(mn.ang),Z=Math.sin(mn.ang),et=(K,mt)=>[mn.x+K*q-mt*Z,mn.z+K*Z+mt*q];for(let K=-18;K<=18&&k<g*.62;K++)for(let mt=-18;mt<=18&&k<g*.62;mt++){const gt=(K+.5)*at,Mt=(mt+.5)*at,[vt,At]=et(gt,Mt);if(Math.hypot(vt-mn.x,At-mn.z)>mn.R||u(vt,At)<80||d({x:vt,z:At},ke,90)||d({x:vt,z:At},Un,55)||d({x:vt,z:At},zs,250))continue;const N=Math.exp(-Math.hypot(vt-mn.x,At-mn.z)/380);for(let A=0;A<4;A++)for(let j=-R+2;j<R-4;){const tt=8+r()*6,yt=9+r()*4;if(j+tt>R-1)break;const ht=j+tt/2,Gt=R-1-yt/2,[Pt,Vt]=A===0?[ht,-Gt]:A===1?[Gt,ht]:A===2?[-ht,Gt]:[-Gt,-ht],[rt,Y]=et(gt+Pt,Mt+Vt);if(j+=tt+.6+r()*1.8,u(rt,Y)<66||r()<.08||d({x:rt,z:Y},pi,pi.R+10))continue;const St=r()<.55+.4*N,J=St?1+Math.floor(r()*r()*4)+(r()<N?1:0):r()<.3?2:1;U(rt,Y,Math.min(tt,yt)*.9,Math.min(tt,yt)*.9)&&st(rt,Y,A%2?yt:tt,A%2?tt:yt,J,St,mn.ang,St&&J>=2&&r()<.7)}}}for(let at=0;at<g*14&&k<g;at++){const R=ke.x-400+r()*3200,q=ke.z-2600+r()*5200,Z=u(R,q);if(Math.hypot(R-mn.x,q-mn.z)<mn.R||d({x:R,z:q},pi,pi.R+10)||Z<66||Z>2600||d({x:R,z:q},ke,80)||d({x:R,z:q},Un,45)||d({x:R,z:q},zs,230))continue;const et=Math.hypot(R-ke.x,(q-ke.z)*.7),K=Math.exp(-et/900);if(r()>K*1.6)continue;const mt=r()<.12+.5*K,gt=mt?8+r()*10:7+r()*6,Mt=mt?8+r()*8:6+r()*5,vt=mt?1+Math.floor(r()*r()*3):r()<.2?2:1,At=(r()-.5)*.5;U(R,q,gt,Mt)&&st(R,q,gt,Mt,vt,mt,At,!1)}y.count=k,x.count=D,S.count=H,M.count=b.count=G;for(const at of[y,x,S,M,b])at.frustumCulled=!1,i.add(at);{const at=t>.6?140:70,R=new xn(Nc(),Uc(n,Pn("figtree"),{instanced:!0,light:.5}),at);let q=0;for(let Z=0;Z<at*40&&q<at;Z++){const et=16680+r()*520,K=-8700+r()*380;if(u(et,K)<12||uf(et,K)<3||d({x:et,z:K},$r,40)||d({x:et,z:K},ke,60)||d({x:et,z:K},Un,40))continue;const gt=Math.abs(f(et+3,K)-f(et-3,K))+Math.abs(f(et,K+3)-f(et,K-3));if(r()>.25+gt*.18+(et<16900?.4:0))continue;const Mt=7+r()*6;m.compose(new P(et,f(et,K)-.6,K),new Ce,new P(Mt*1.4713*(r()<.5?-1:1),Mt,1)),R.setMatrixAt(q++,m)}R.count=q,R.frustumCulled=!1,i.add(R)}const lt=t>.6?1700:700,V=new xn(Nc(),Uc(n,Pn("palm"),{instanced:!0,light:.45}),lt);h=0;for(let at=0;at<lt*10&&h<lt;at++){const R=An.minX+r()*An.size,q=An.minZ+r()*An.size,Z=u(R,q);if(Z<14||Z>1800||Z>260&&r()<.7||d({x:R,z:q},ke,60)||d({x:R,z:q},Un,35)||d({x:R,z:q},$r,45)||d({x:R,z:q},pi,pi.R))continue;const et=12+r()*9,K=f(R,q)-.4;m.compose(new P(R,K,q),new Ce,new P(et*.5322*(r()<.5?-1:1),et,1)),V.setMatrixAt(h,m),h++}V.count=h,V.frustumCulled=!1,i.add(V);const nt=new Ua;nt.moveTo(-3.5,0),nt.quadraticCurveTo(-3,-.9,0,-.95),nt.quadraticCurveTo(3,-.9,3.8,0),nt.quadraticCurveTo(3,.9,0,.95),nt.quadraticCurveTo(-3,.9,-3.5,0);const ft=qo(new uu(nt,{depth:.8,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:1}).rotateX(-Math.PI/2),[1,1,1]),bt=26,Ft=new xn(ft,Is(n,{gloss:.2}),bt),xt=[[.12,.35,.62],[.1,.42,.55],[.16,.3,.7],[.08,.48,.5],[.85,.3,.2]];h=0;const zt=[];for(let at=0;at<4e3&&h<bt;at++){const R=ke.x-900+r()*2200,q=ke.z-2600+r()*5e3,Z=u(R,q),et=Z<-50&&Z>-380&&Math.hypot(R-wa.x,q-wa.z)>900;if(!et)continue;const K=r()*6.28,mt=.15;m.compose(new P(R,mt,q),new Ce().setFromEuler(new Ge(0,K,0)),new P(1.1,1,1.1)),Ft.setMatrixAt(h,m);const gt=xt[r()*xt.length|0];v.setRGB(gt[0],gt[1],gt[2]),Ft.setColorAt(h,v),et&&zt.push({k:h,x:R,z:q,rot:K,ph:r()*6.28}),h++}return Ft.count=h,Ft.frustumCulled=!1,i.add(Ft),i.update=at=>{for(const R of zt)m.compose(new P(R.x,.15+Math.sin(at*1.1+R.ph)*.2,R.z),new Ce().setFromEuler(new Ge(Math.sin(at+R.ph)*.04,R.rot,Math.sin(at*.8+R.ph)*.05)),new P(1.1,1,1.1)),Ft.setMatrixAt(R.k,m);Ft.instanceMatrix.needsUpdate=!0},i}const Gr="Murudeshwar.co.in";function p_(){const e=document.createElement("canvas");e.width=2048,e.height=148;const i=e.getContext("2d"),r=new ma(e);r.colorSpace=an,r.anisotropy=8;const s=()=>{i.clearRect(0,0,2048,148),i.fillStyle="#163f7e",i.beginPath(),i.moveTo(0,0),i.lineTo(2048,0);const o=24,a=2048/o;for(let c=o;c>0;c--)i.arc((c-.5)*a,148*.8,a/2,0,Math.PI,!1);i.lineTo(0,0),i.closePath(),i.fill(),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(0,6,2048,4),i.fillStyle="#f4f2ea",i.textAlign="center",i.textBaseline="middle",i.font='600 92px "Instrument Sans", "Helvetica Neue", Arial, sans-serif',i.fillText(Gr,2048/2,148*.42),r.needsUpdate=!0};return s(),document.fonts&&document.fonts.load&&document.fonts.load('600 92px "Instrument Sans"').then(s).catch(()=>{}),r}function m_(n,t=Le+2.15){const r=document.createElement("canvas");r.width=2048,r.height=256;const s=r.getContext("2d"),o=new ma(r);o.colorSpace=an,o.anisotropy=8,o.generateMipmaps=!0,o.minFilter=yi;const a=()=>{s.clearRect(0,0,2048,256);let z=176;const F='"Instrument Sans", "Helvetica Neue", Arial, sans-serif';s.font=`600 ${z}px ${F}`;const U=s.measureText(Gr).width;U>2048*.9&&(z*=2048*.9/U,s.font=`600 ${z}px ${F}`),s.fillStyle="#123a6b",s.textAlign="center",s.textBaseline="middle",s.fillText(Gr,2048/2,256*.44);const k=Math.min(2048*.9,s.measureText(Gr).width);s.strokeStyle="#1b4f8e",s.lineWidth=9,s.lineCap="round",s.beginPath();for(let D=(2048-k)/2;D<=(2048+k)/2;D+=6){const H=222.72+Math.sin(D/34)*6;D===(2048-k)/2?s.moveTo(D,H):s.lineTo(D,H)}s.stroke(),o.needsUpdate=!0};a(),document.fonts&&document.fonts.load&&document.fonts.load('600 176px "Instrument Sans"').then(a).catch(()=>{});const c=new ge({transparent:!0,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,uniforms:{...n,uMap:{value:o}},vertexShader:`varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      ${sn}
      ${wn}
      ${Xi}
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
      }`}),l=new We,u=.17,f=.65,d=(f-u)*2048/256,h=-1.3;for(const z of[-1,1]){const k=[],D=[],H=[],G=[];for(let st=0;st<=4;st++)for(let lt=0;lt<=48;lt++){const V=lt/48,nt=st/4,ft=h-d/2+V*d,bt=u+nt*(f-u),Ft=dn((ft+yn/2)/yn),xt=De(Ft,bt),zt=(De(Ft,bt+.01)-De(Ft,bt-.01))/.02;k.push(ft,bt,z*(xt+.006)),D.push(z>0?V:1-V,nt);const at=new P(0,-zt,z).normalize();H.push(at.x,at.y,at.z)}for(let st=0;st<4;st++)for(let lt=0;lt<48;lt++){const V=st*49+lt;G.push(V,V+1,V+48+2,V,V+48+2,V+48+1)}const W=new ee;W.setAttribute("position",new Ht(k,3)),W.setAttribute("uv",new Ht(D,2)),W.setAttribute("normal",new Ht(H,3)),W.setIndex(G);const X=new re(W,c);X.frustumCulled=!1,X.renderOrder=3.5,l.add(X)}const m=3072,v=216,g=document.createElement("canvas");g.width=m,g.height=v;const p=g.getContext("2d"),y=new ma(g);y.colorSpace=an,y.anisotropy=8;const x=()=>{p.clearRect(0,0,m,v),p.fillStyle="#123d7a",p.beginPath(),p.moveTo(0,0),p.lineTo(m,0);const z=30,F=m/z;for(let H=z;H>0;H--)p.arc((H-.5)*F,v*.86,F/2,0,Math.PI,!1);p.lineTo(0,0),p.closePath(),p.fill(),p.fillStyle="rgba(255,255,255,0.85)",p.fillRect(0,10,m,6);let U=150;const k='"Instrument Sans", "Helvetica Neue", Arial, sans-serif';p.font=`700 ${U}px ${k}`;const D=p.measureText(Gr).width;D>m*.62&&(U*=m*.62/D,p.font=`700 ${U}px ${k}`),p.fillStyle="#f6f3ea",p.textAlign="center",p.textBaseline="middle",p.fillText(Gr,m/2,v*.47),y.needsUpdate=!0};x(),document.fonts&&document.fonts.load&&document.fonts.load('700 150px "Instrument Sans"').then(x).catch(()=>{});const _=c.clone();_.uniforms={...c.uniforms,uMap:{value:y}},_.polygonOffset=!1,_.depthWrite=!0;const w=-4.1,S=2.6,E=t-.15,C=.44,M=1.755;for(const z of[-1,1]){const F=new rn(S-w,C);z<0&&F.rotateY(Math.PI),F.translate((w+S)/2,E-C/2,z*M);const U=new re(F,_);U.frustumCulled=!1,U.renderOrder=3.5,l.add(U)}l.brand=[];for(const z of[-1,1]){const F=(X,st)=>z*(De(dn((X+yn/2)/yn),st)+.006),U=h-d/2,k=h+d/2;l.brand.push({kind:"hull",corners:[new P(U,u,F(U,u)),new P(k,u,F(k,u)),new P(k,f,F(k,f)),new P(U,f,F(U,f))],normal:new P(0,0,z)});const D=(w+S)/2-(S-w)*.33,H=(w+S)/2+(S-w)*.33,G=E-C*.78,W=E-C*.12;l.brand.push({kind:"banner",corners:[new P(D,G,z*M),new P(H,G,z*M),new P(H,W,z*M),new P(D,W,z*M)],normal:new P(0,0,z)})}const b=c.clone();b.uniforms={...c.uniforms,uMap:{value:p_()}},b.polygonOffset=!1,b.depthWrite=!0;const T=t-.15,I=.25,O=3.5;for(const[z,F]of[[-4.1,-1],[2.6,1]]){const U=new rn(O,I);U.rotateY(F<0?-Math.PI/2:Math.PI/2),U.translate(z+F*.01,T-I/2,0);const k=new re(U,b);k.frustumCulled=!1,k.renderOrder=3.5,l.add(k)}return l}const yn=11,g_=3.3,v_=1.2,Le=.55,ba=Le+.45,$n=36;function dn(n){const t=-yn/2+n*yn,e=g_/2*(n<.6?1:Math.pow(Math.cos((n-.6)/.4*Math.PI/2),.7))+.015,i=v_*(.8+.3*n*n),r=-.42*(n<.7?1:1-(n-.7)/.3*.85);return{x:t,hb:e,sheer:i,keel:r}}function De(n,t){const e=ie((t-n.keel)/(n.sheer-n.keel));return n.hb*(.16+.84*Math.pow(e,.5))}function mf(n){const t=ie((n+yn/2)/yn),e=dn(t);return{y:e.sheer+.05,z:De(e,e.sheer)-.06}}function x_(n){const t=[[e=>e.sheer,e=>e.sheer-.1,[.93,.93,.9],$.hull],[e=>e.sheer-.1,e=>e.sheer-.3,[.1,.31,.58],$.hull],[e=>e.sheer-.3,()=>.1,[.94,.93,.89],$.hull],[()=>.1,()=>-.03,[.09,.12,.19],$.hull],[()=>-.03,e=>e.keel*.55,[.5,.16,.12],$.hull]];for(const e of[-1,1])for(const[i,r,s,o]of t){const a=[];for(let l=0;l<$n-1;l++){const u=dn(l/($n-1)),f=dn((l+1)/($n-1)),d=i(u),h=r(u),m=i(f),v=r(f),g=[[u.x,d,e*De(u,d)],[u.x,h,e*De(u,h)],[f.x,m,e*De(f,m)],[f.x,v,e*De(f,v)]];e>0?a.push(...g[0],...g[1],...g[2],...g[1],...g[3],...g[2]):a.push(...g[0],...g[2],...g[1],...g[1],...g[2],...g[3])}const c=new ee;c.setAttribute("position",new Ht(a,3)),c.computeVertexNormals(),n(c,s,o)}{const e=[];for(let r=0;r<$n-1;r++){const s=dn(r/($n-1)),o=dn((r+1)/($n-1)),a=s.keel*.55,c=o.keel*.55;e.push(s.x,a,-De(s,a),s.x,s.keel,0,o.x,c,-De(o,c),s.x,s.keel,0,o.x,o.keel,0,o.x,c,-De(o,c),s.x,a,De(s,a),o.x,c,De(o,c),s.x,s.keel,0,s.x,s.keel,0,o.x,c,De(o,c),o.x,o.keel,0)}const i=new ee;i.setAttribute("position",new Ht(e,3)),i.computeVertexNormals(),n(i,[.46,.15,.11],$.hull)}{const e=dn(0),i=new Ua;i.moveTo(-De(e,e.sheer),e.sheer),i.lineTo(De(e,e.sheer),e.sheer),i.lineTo(De(e,0),0),i.lineTo(0,e.keel),i.lineTo(-De(e,0),0),i.closePath();const r=new hu(i);r.rotateY(-Math.PI/2),r.translate(e.x,0,0),n(r,[.92,.92,.88],$.hull)}for(const e of[-1,1]){const i=[],r=[];for(let s=0;s<$n;s++){const o=dn(s/($n-1));i.push(new P(o.x,o.sheer+.025,e*(De(o,o.sheer)-.03))),r.push(new P(o.x,o.sheer-.06,e*(De(o,o.sheer-.06)+.025)))}n(new Js(new ga(i),60,.045,6,!1),[.86,.86,.84],$.plastic),n(new Js(new ga(r),60,.04,6,!1),[.13,.13,.14],$.rubber)}}function __(n,t){for(let i=0;i<14;i++){const r=-1.5+i/14*3,s=r+3/14,o=[];for(let l=0;l<$n-1;l++){const u=dn(l/($n-1)),f=dn((l+1)/($n-1)),d=De(u,Le)-.07,h=De(f,Le)-.07,m=ie(r,-d,d),v=ie(s,-d,d),g=ie(r,-h,h),p=ie(s,-h,h);v-m<.005&&p-g<.005||o.push(u.x,Le,m,u.x,Le,v,f.x,Le,g,f.x,Le,g,u.x,Le,v,f.x,Le,p)}if(!o.length)continue;const a=new ee;a.setAttribute("position",new Ht(o,3)),a.computeVertexNormals();const c=.93+t()*.1;n(a,[.56*c,.42*c,.3*c],$.wood)}for(const i of[-1,1]){n(Tt(new Zt(6,.42,.06),-.7,Le+.21,i*.9),[.9,.9,.87],$.hull),n(Tt(new Zt(6,.06,.46),-.7,ba-.06,i*1.12),[.55,.39,.25],$.wood);for(let r=0;r<5;r++)n(Tt(new Zt(1.08,.05,.42),-3.2+r*1.2,ba-.01,i*1.12),[.12,.27,.5],$.cloth)}}function y_(n){const t=Le+2.15,e=-4.1,i=2.6,r=3.5;{const l=new rn(i-e,r,28,8),u=l.attributes.position;for(let f=0;f<u.count;f++){const d=u.getX(f),h=u.getY(f),m=.05*Math.pow(Math.sin((d+(i-e)/2)/.95*Math.PI),2);u.setZ(f,-.16*(h/(r/2))**2-m)}l.computeVertexNormals(),l.rotateX(-Math.PI/2),l.translate((e+i)/2,t,0),n(l,[.1,.33,.62],$.cloth);for(let f=0;f<=7;f++){const d=e+f/7*(i-e);n(Tt(new Zt(.035,.02,r+.02),d,t-.012,0),[.07,.22,.44],$.cloth)}}for(const[l,u]of[[-4,-1.6],[-4,1.6],[-.7,-1.62],[-.7,1.62],[2.5,-1.45],[2.5,1.45]])n(Tt(new he(.028,.028,t-Le,8),l,(t+Le)/2-.05,u),[.8,.82,.84],$.metal);for(const l of[-4,-.7,2.5])n(Tt(new he(.025,.025,r,8),l,t-.18,0,Math.PI/2),[.8,.82,.84],$.metal);n(Tt(new he(.018,.018,1.3,6),-4,t+.55,-1.6),[.75,.76,.78],$.metal);const s=.86,o=.6,a=10,c=7;for(let l=0;l<a;l++)for(let u=0;u<c;u++){const f=(l+.5)/a,d=(u+.5)/c,h=Math.abs(d-(1-f))<.15,m=new rn(s/a,o/c);m.translate(-4-.02-f*s,t+.9+(d-.5)*o,-1.6),m.rotateY(0),n(m,h?[.96,.96,.94]:[.82,.1,.09],$.cloth)}return t}function M_(n){n(Tt(new Zt(.62,.95,.75),-4.45,Le+.47,.25),[.92,.92,.89],$.hull),n(Tt(new Zt(.05,.3,.7),-4.2,Le+1.08,.25,0,0,-.35),[.12,.16,.2],$.glass),n(Tt(new cr(.17,.02,6,18),-4.72,Le+1,.25,0,Math.PI/2,.45),[.1,.1,.11],$.rubber),n(Tt(new Zt(.08,.06,.1),-4.62,Le+1.02,.55),[.15,.15,.16],$.metal);for(const e of[-.55,.55]){const i=-yn/2-.42;n(Tt(Je(.32,.36,.25,16,12),i,1.15,e),[.17,.18,.2],$.plastic),n(Tt(new Zt(.5,.06,.4),i,.86,e),[.85,.86,.88],$.plastic),n(Tt(new Zt(.3,.55,.22),i+.05,.56,e),[.17,.18,.2],$.plastic),n(Tt(Cn(.08,.05,.5,{down:!0,radial:10,sx:.6}),i+.08,.28,e),[.17,.18,.2],$.plastic),n(Tt(new Zt(.42,.02,.24),i+.05,-.12,e),[.17,.18,.2],$.metal),n(Tt(new he(.045,.03,.14,8),i-.12,-.24,e,0,0,Math.PI/2),[.5,.52,.55],$.metal);for(let r=0;r<3;r++)n(Tt(new Zt(.02,.17,.07),i-.18,-.24,e,r*2.09,0,0),[.55,.57,.6],$.metal);n(Tt(new Zt(.28,.12,.05),i-.02,1.14,e+.23*Math.sign(e)),[.9,.9,.92],$.plastic)}const t=Ye(91);for(let e=0;e<10;e++){const i=-2.85+e%5*.62,r=e<5?-.17:.17;n(Tt(Cn(.09,.09,.56,{radial:14}),i,Le+.12,r),t()<.55?[.93,.74,.14]:[.76,.78,.82],$.metal),n(Tt(new he(.022,.028,.07,8),i,Le+.82,r),[.7,.72,.74],$.metal),t()<.4&&n(Tt(new Zt(.26,.42,.12),i,Le+.5,r+Math.sign(r)*.13),[.09,.09,.1],$.rubber)}for(const e of[.3,.62])n(Tt(new Zt(3.1,.06,.6),-1.6,Le+e,0),[.5,.36,.23],$.wood);for(let e=0;e<4;e++)n(Tt(new Zt(.62,.025,.2),2.6+e%2*.1,Le+.02+e*.03,-.2+e*.12,0,.3+e*.4,0),e%2?[.08,.12,.3]:[.05,.05,.06],$.rubber);n(Tt(new Zt(.5,.3,.38),3.2,Le+.15,.55),[.9,.55,.12],$.plastic);for(const e of[-1,1])for(const i of[-3.9,2.4]){const r=dn((i+yn/2)/yn),s=e*(De(r,.6)+.12);n(Tt(Cn(.09,.09,.32,{radial:10}),i,.32,s),[.94,.94,.92],$.plastic),n(Tt(new he(.006,.006,.45,4),i,.85,s),[.85,.82,.72],$.cloth)}{const i=dn((-4.2+yn/2)/yn),r=-(De(i,i.sheer)+.04);for(const s of[-.17,.17])n(Tt(new he(.02,.02,1.7,6),-4.2+s,.25,r-.06,.12,0,0),[.8,.82,.84],$.metal);for(let s=0;s<4;s++)n(Tt(new he(.016,.016,.34,6),-4.2,-.35+s*.32,r-.06-(.35-s*.32)*.12+.02,0,0,Math.PI/2),[.8,.82,.84],$.metal)}n(Tt(new cr(.22,.04,6,16),4.2,Le+.4,.1,Math.PI/2),[.82,.78,.66],$.cloth),n(Tt(new he(.06,.06,.18,10),yn/2-.15,dn(1).sheer+.05,0,0,0,Math.PI/2),[.7,.72,.74],$.metal)}const S_=[[.85,.2,.22],[.2,.42,.7],[.92,.92,.9],[.3,.55,.42],[.95,.78,.3],[.55,.35,.6],[.95,.55,.55]],w_=[[.2,.22,.3],[.45,.4,.32],[.15,.15,.17],[.3,.32,.4]],b_=[.95,.42,.08];function E_(n){const t=Ye(808),e=[],i=(p,y,x)=>e.push(Ei(p,0,y,x));x_(i),__(i,t);const r=y_(i);M_(i);const s=new re(qi(e),Kn(n,0));s.frustumCulled=!1;const o=new We;o.add(s);const a=m_(n,r);o.add(a),o.brand=a.brand,o.length=yn,o.roofY=r;const c=[],l=(p,y,x,_,w)=>{const S=Kn(n),E=new re(hf(p),S);E.position.set(...y),E.rotation.y=x,E.frustumCulled=!1,o.add(E);const C={m:S,mesh:E,pose:_,role:w,ph:t()*6.28};return c.push(C),zc(S,_),C},u=p=>p[t()*p.length|0];[[-2.6,1],[-1.5,1],[-.4,1],[.7,1],[1.8,1],[1.2,-1],[2.2,-1]].forEach(([p,y],x)=>{l({skin:u(ur),shirt:u(S_),pants:u(w_),lifejacket:b_,cap:x%3===0?u([[.95,.95,.93],[.15,.3,.6],[.8,.2,.2]]):null,longHair:x%4===1,build:.95+t()*.15},[p,ba,y*1.12],y>0?Math.PI:0,qe.sit,x===3?"pointer":x===1?"photo":"guest")}),l({skin:ur[3],shirt:[.92,.92,.9],pants:[.15,.15,.17],cap:[.15,.3,.6],sleeves:"short"},[-4.95,Le,.25],Math.PI/2,qe.stand,"skipper"),l({skin:ur[1],shirt:[.3,.32,.36],pants:[.2,.22,.3],sleeves:"none"},[3.75,Le,.25],Math.PI/2,qe.stand,"deckhand");const d={},h={...qe.stand,uArmA:[-.9,0,.1],uArmB:[-.9,0,-.1],fArmA:[-.6,0,0],fArmB:[-.6,0,0]},m={...qe.sit,uArmA:[-1.5,0,.25],uArmB:[-1.5,0,-.25],fArmA:[-1.2,0,-.3],fArmB:[-1.2,0,.3],head:[.05,0,0]},v={...qe.sit,uArmB:[-1.75,.2,-.25],fArmB:[-.15,0,0],head:[-.05,0,0]},g={...qe.stand,root:[0,.9,0,.55,0,0],spine:[.35,0,0],head:[-.4,0,0],uArmA:[-.9,0,.1],uArmB:[-.9,0,-.1],fArmA:[-.3,0,0],fArmB:[-.3,0,0],thighA:[-.5,0,0],thighB:[-.4,0,0],calfA:[.5,0,0],calfB:[.4,0,0]};return o.update=(p,y)=>{for(const x of c){let _=x.pose;x.role==="skipper"&&(_=h),x.role==="photo"&&(_=mi(qe.sit,m,It(.43,.445,p)*(1-It(.47,.485,p)),d)),x.role==="pointer"&&(_=mi(qe.sit,v,It(.512,.524,p)*(1-It(.55,.562,p)),d)),x.role==="deckhand"&&(_=mi(qe.stand,g,It(.549,.555,p)*(1-It(.562,.57,p)),d));const w=x.role==="photo"||x.role==="pointer"||x.role==="deckhand"?_:{..._},S=(w.head||[0,0,0]).slice();(x.role==="guest"||x.role==="deckhand")&&(S[1]+=Math.sin(y*.27+x.ph)*.55+Math.sin(y*.11+x.ph*2)*.3),S[0]+=Math.sin(y*.5+x.ph)*.04;const E=(w.spine||[0,0,0]).slice();E[2]+=Math.sin(y*.8+x.ph)*.03,zc(x.m,{...w,head:S,spine:E})}},o.crew=c,o.spray=T_(n),o.add(o.spray),o}function T_(n){const e=new Float32Array(1280),i=Ye(4242);for(let l=0;l<320*4;l++)e[l]=i();const r=new ee;r.setAttribute("position",new se(new Float32Array(320*3),3)),r.setAttribute("aSeed",new se(e,4));const s=De(dn(.74),.1),o=De(dn(.97),.1),a=new ge({transparent:!0,depthWrite:!1,uniforms:{...n,uSpray:{value:0},uBow:{value:new Nt(s,o)}},vertexShader:`
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
      }`}),c=new Ys(r,a);return c.frustumCulled=!1,c.renderOrder=9,c}const ue={stop:.552,anchor:[.553,.563],gear:[.556,.566],roll:[.572,.5805,.589],rollDur:.0065,right:.0055,ok:[.598,.607],toLine:[.601,.613],down:[.613,.646],level:[.642,.654],swap:[.655,.661],stop5:.822},Hn=ps(1,{}),gf=new P(Hn.hx,0,Hn.hz),A_=new P(Hn.hz,0,-Hn.hx),Ea=new P(0,1,0),Si=(n,t,e,i=new P)=>i.set(Hn.x+n*Hn.hx-e*Hn.hz,t,Hn.z+n*Hn.hz+e*Hn.hx),Yr=Math.atan2(-Hn.hz,Hn.hx),Hc=[-3,-2.05,-1.1];let Rl=null;function vf(n){if(!Rl){const t=Si(17.6,0,0);t.y=n.heightAt(t.x,t.z)+.25,Rl=t}return Rl}const or=Si(5.45,1.38,0);function C_(n,t,e=new P){const i=vf(t),r=Si(6.6,-.2,0);if(n<=.12){const a=n/.12;return e.copy(or).lerp(r,a).setY(Lt(or.y,r.y,a*a))}const s=(n-.12)/.88,o=s*s*(3-2*s);return e.copy(r).lerp(i,o).add(new P(0,0,0))}const $o=new P;function cs(n,t,e=new P){const i=or.distanceTo(t);$o.copy(or).add(t).multiplyScalar(.5).addScaledVector(Ea,-.1*i).addScaledVector(gf,Math.min(3,i*.12));const r=1-n;return e.set(r*r*or.x+2*r*n*$o.x+n*n*t.x,r*r*or.y+2*r*n*$o.y+n*n*t.y,r*r*or.z+2*r*n*$o.z+n*n*t.z)}function n0(n,t){let e=0,i=1;for(let r=0;r<30;r++){const s=(e+i)/2;cs(s,t,xf).y>n?e=s:i=s}return(e+i)/2}const xf=new P;let Yo=null;function ms(n){if(Yo)return Yo;const t=vf(n),e=n0(-.9,t),i=cs(.86,t),r=cs(n0(-9,t),t),s=[[ue.swap[0],i.x-1.5,i.y,i.z+1.5],[.68,2,-29.8,468],[.71,-6,-29.3,477],[.745,-11,-28.8,486],[.79,-12.5,-28.6,489],[.806,t.x+2.2,t.y+9,t.z-.8],[ue.stop5,r.x+.4,r.y,r.z+.3],[1,r.x+.4,r.y,r.z+.3]],o=s.map(d=>d[0]),a=Kr(o,s.map(d=>d[1])),c=Kr(o,s.map(d=>d[2])),l=Kr(o,s.map(d=>d[3])),u=new P(s[3][1]-s[1][1],0,s[3][3]-s[1][3]).normalize(),f=new P(-u.z,0,u.x);return f.x<0&&f.negate(),Yo={A:t,sTop:e,bottom:i,stop5:r,at:(d,h)=>h.set(a(d),c(d),l(d)),exp:u,side:f},Yo}function R_(n,t,e){const i=ms(t);if(!i.ang){const c=i.at(ue.swap[0],new P),l=i.at(.68,new P),u=i.at(.79,new P);i.ang={a0:Math.atan2(l.x-c.x,l.z-c.z),a1:Math.atan2(i.exp.x,i.exp.z),a2:Math.atan2(i.A.x-u.x,i.A.z-u.z)}}const{a0:r,a1:s,a2:o}=i.ang;let a=Vc(r,s,It(.66,.69,n));return a=Vc(a,o,It(.784,.8,n)),e.set(Math.sin(a),0,Math.cos(a))}const P_=[[1.6,.9,.5],[-1.1,-1.5,0],[-2.6,1.7,-.6]],Pl=[-.6,1.1,2.7],As=[{},{},{}],i0=[{},{},{}],D_=[{},{},{}],r0={...qe.surfaceOK,uArmA:[-.2,0,.7],fArmA:[-.4,0,0],uArmB:[-.2,0,-.7],fArmB:[-.4,0,0]};function _f(n,t,e,i=0,r={}){const s=Hc[n],o=mf(s),a=ue.roll[n],c=a+ue.rollDur,l=c+ue.right;if(r.local=!0,r.pos=r.pos||new P,r.ry=0,r.rx=0,r.rootY=.07,r.sprite=0,r.under=!1,t<a){const U=It(ue.gear[0]+n*.002,ue.gear[1]+n*.002,t);return r.pos.set(s,Lt(ba,o.y,U),Lt(-1.12,-o.z+.1,U)),r.pose=mi(qe.sit,qe.rollReady,U,As[n]),r.rx=Lt(-.05,.12,U),r}if(t<c){const U=(t-a)/(c-a);return r.pos.set(s,o.y-(o.y+.7)*Math.pow(U,1.1),-o.z+.1-1.25*Math.pow(U,.9)),r.rx=.12-(Math.PI+.45)*Math.pow(U,1.6),r.pose=mi(qe.rollReady,qe.tuck,It(0,.4,U),As[n]),r.under=U>.6,r}const u=[s+.6,-.62,-3.1-.35*n];if(t<l){const U=(t-c)/(l-c),k=U*U*(3-2*U);return r.pos.set(Lt(s,u[0],k),Lt(-.7,u[1],k)-Math.sin(U*Math.PI)*.9,Lt(-o.z+.1-1.25,u[2],k)),r.rx=Lt(.12-(Math.PI+.45),-Math.PI*2+.1,k),r.pose=mi(qe.tuck,r0,It(.2,.9,U),As[n]),r.under=U<.85,r}const f=ms(e);if(t<ue.down[0]+n*.0015){const U=It(ue.ok[0]+n*.0015,ue.ok[0]+.003+n*.0015,t)*(1-It(ue.ok[1]-.002,ue.ok[1]+.002,t)),k=It(ue.toLine[0],ue.toLine[1],t),D=cs(f.sTop,f.A,new P),H=Pl[n]+Yr,G=D.x+Math.cos(H)*.8,W=D.z+Math.sin(H)*.8,X=Si(u[0],u[1],u[2]);r.local=!1,r.pos.set(Lt(X.x,G,k),u[1]+Math.sin(i*1.3+n*2)*.06,Lt(X.z,W,k));const st=Math.atan2(D.x-r.pos.x,D.z-r.pos.z);r.ry=Lt(Yr,st,It(0,.4,k)),r.rx=.1+.25*k;const lt=mi(r0,qe.surfaceOK,U,i0[n]);return r.pose=Kh(lt,r.kickPhase==null?i*2.2+n*1.7:r.kickPhase,.18+.4*Math.sin(k*Math.PI),As[n]),r}r.local=!1,r.under=!0;const d=ue.down[0]+n*.0015,h=ue.down[1]-(2-n)*.001,m=ie((t-d)/(h-d)),v=Lt(f.sTop,.86,m*m*(3-2*m)*.85+m*.15),g=cs(v,f.A,new P),p=Pl[n]+Yr,y=.8,x=new P(g.x+Math.cos(p)*y,g.y-.35+(1-n)*.35*It(.1,.4,m),g.z+Math.sin(p)*y),_=Math.atan2(-Math.cos(p),-Math.sin(p)),w=It(ue.level[0]+n*.002,ue.level[1],t),S=R_(Math.max(t,ue.swap[0]),e,new P),E=f.at(Math.max(t,ue.swap[0]),new P),C=P_[n],M=new P(-S.z,0,S.x),b=E.addScaledVector(S,C[0]).addScaledVector(M,C[1]).addScaledVector(Ea,C[2]);b.y=Math.max(b.y,e.heightAt(b.x,b.z)+2);const T=It(.796,.81,t);if(T>0){const U=Pl[n]+Yr,k=f.at(t,new P),D=new P(k.x+Math.cos(U)*1,k.y-.5*n,k.z+Math.sin(U)*1);b.lerp(D,T)}r.pos.copy(x).lerp(b,w),r.pos.y+=.045*Math.sin((i/4.6+n*.37)*Math.PI*2)*w,r.ry=Vc(_,Math.atan2(S.x,S.z),w),r.rx=Lt(.25,Math.PI/2-.12,w)-T*.45*(1-It(ue.stop5-.004,ue.stop5+.004,t));const I=r.kickPhase==null?i*3.1+n*1.7:r.kickPhase,O=r.kickAmp==null?.7:r.kickAmp,z=mi(qe.hover,qe.swim,It(.2,.75,O),D_[n]),F=Kh(z,I,O,i0[n]);return r.pose=w<1?mi(qe.descend,F,w,As[n]):F,r.sprite=0,r}const Vc=(n,t,e)=>n+Math.atan2(Math.sin(t-n),Math.cos(t-n))*e,L_=[{},{},{}];function yf(n,t,e=new P){e.set(0,0,0);for(let i=0;i<3;i++){const r=_f(i,n,t,0,L_[i]),s=r.local?Si(r.pos.x,r.pos.y,r.pos.z,xf):r.pos;e.add(s)}return e.multiplyScalar(1/3)}let Cs=null;function vu(n,t,e,i,r={}){const s=ms(t);if(!Cs){const x=[[.568,8,-.6,1.05,0,2.6,-.35,50],[.592,7,-.4,1,0,2.4,-.3,50],[.604,5.4,-1.2,.95,0,2,.1,48],[.612,5.6,-2.6,.9,0,2.4,-.6,48],[.6175,6.4,-2.2,-3.4,0,2.4,0,50],[.632,7.6,-1.5,-15.5,0,2.6,1.5,54],[.648,7.8,-.5,-28.4,0,2.4,-.5,54],[.666,13,-2,-27,0,1,-1,52],[.72,12.5,-1,-26.6,0,.5,-1.4,52],[.745,10,-3,-29,0,2,4,56],[.79,10,-3,-29,0,2,4,56],[.806,9,0,-25.5,0,0,1,52],[.822,8,0,-9.6,0,0,0,50],[1,8,0,-9.6,0,0,0,50]],_=x.map(w=>w[0]);Cs=[1,2,3,4,5,6,7].map(w=>Kr(_,x.map(S=>S[w]))),Cs.ps=_}const o=yf(n,t,new P),a=It(.648,.666,n),c=A_.clone().lerp(s.side,a).normalize(),l=gf.clone().lerp(s.exp,a).normalize(),u=1+.85*i*Math.max(It(.64,.67,n),.75*It(.556,.57,n)),[f,d,h,m,v,g,p]=Cs.map(x=>x(Math.max(n,Cs.ps[0]))),y=v*(1-i);if(r.cx=o.x+c.x*f*u+l.x*d,r.cy=h,r.cz=o.z+c.z*f*u+l.z*d,r.tx=o.x+c.x*m+l.x*y,r.ty=o.y+g,r.tz=o.z+c.z*m+l.z*y,r.fov=p,n<.568&&e){const x=It(ue.stop,.568,n),_={...r};r.cx=Lt(e.cx,_.cx,x),r.cy=Lt(e.cy,_.cy,x),r.cz=Lt(e.cz,_.cz,x);const w=new P(e.tx-e.cx,e.ty-e.cy,e.tz-e.cz),S=new P(_.tx-_.cx,_.ty-_.cy,_.tz-_.cz),E=w.length(),C=S.length(),M=new Ce().setFromUnitVectors(w.normalize(),S.normalize()),b=w.applyQuaternion(new Ce().slerp(M,x)),T=Lt(E,C,x);r.tx=r.cx+b.x*T,r.ty=r.cy+b.y*T,r.tz=r.cz+b.z*T,r.fov=Lt(e.fov,_.fov,x)}return r}const Dl=4.6,on=4,jo=24;function I_(n,t,e){const i=new We;ms(t);const s=[{skin:ur[1],diver:{suit:[.07,.075,.09],panel:[.1,.24,.5],side:[.2,.21,.24],accent:[.12,.34,.7],tank:[.74,.76,.8],bcd:[.14,.14,.16],fins:[.07,.07,.08]},torch:!0},{skin:ur[2],diver:{suit:[.07,.07,.08],panel:[.25,.27,.3],side:[.22,.23,.26],accent:[.75,.2,.15],tank:[.92,.72,.13],bcd:[.1,.1,.11],fins:[.09,.22,.5]}},{skin:ur[4],longHair:!0,diver:{suit:[.07,.07,.08],panel:[.12,.42,.45],side:[.2,.22,.24],accent:[.15,.6,.62],tank:[.92,.72,.13],bcd:[.1,.1,.11],fins:[.8,.64,.12]}}].map((at,R)=>{const q=Kn(n),Z=new re(hf(at),q);return Z.matrixAutoUpdate=!1,Z.frustumCulled=!1,i.add(Z),{i:R,m:q,mesh:Z,st:{},head:new P,breath:(R*.37+.11)%1,last:-1,hit:-1e3,hitArmed:!1,kickPhase:R*2.3}}),o=(()=>{const at=Kn(n,0),R=[],q=(K,mt)=>{const gt=K.index?K.toNonIndexed():K,Mt=gt.attributes.position.count;gt.setAttribute("color",new se(new Float32Array(Mt*3).fill(0).map((vt,At)=>mt[At%3]),3)),gt.setAttribute("aBone",new se(new Float32Array(Mt),1)),gt.setAttribute("aKind",new se(new Float32Array(Mt).fill(4),1));for(const vt of Object.keys(gt.attributes))["position","normal","color","aBone","aKind"].includes(vt)||gt.deleteAttribute(vt);R.push(gt)},Z=[.32,.33,.35];q(new he(.035,.035,.9,8).translate(0,.45,0),Z),q(new he(.025,.025,.8,8).rotateZ(Math.PI/2),Z);for(const K of[-1,1]){const mt=new os(.16,.5,4).rotateX(Math.PI).translate(K*.14,.2,0);mt.scale(1,1,.25),q(mt,Z)}new ee;const et=R.reduce((K,mt)=>(K.push(mt),K),[]);return new re(U_(et),at)})();o.frustumCulled=!1,i.add(o);const a=60,c=6,l=new re(new Js(new j0(new P,new P(0,-1,0)),a,.035,c,!1),Kn(n,0));{const at=l.geometry.attributes.position.count;l.geometry.setAttribute("color",new se(new Float32Array(at*3).fill(.62),3)),l.geometry.setAttribute("aBone",new se(new Float32Array(at),1)),l.geometry.setAttribute("aKind",new se(new Float32Array(at).fill(1),1));const R=l.geometry.attributes.color;for(let q=0;q<at;q++)R.setXYZ(q,.78,.7,.52)}l.frustumCulled=!1,i.add(l);const u=Array.from({length:a+1},()=>new P),f=at=>{for(let mt=0;mt<=a;mt++)cs(mt/a,at,u[mt]);const R=l.geometry.attributes.position,q=l.geometry.attributes.normal,Z=new P,et=new P,K=new P;for(let mt=0;mt<=a;mt++){const gt=u[Math.max(0,mt-1)],Mt=u[Math.min(a,mt+1)];Z.subVectors(Mt,gt).normalize(),et.set(0,1,0).cross(Z),et.lengthSq()<1e-6&&et.set(1,0,0),et.normalize(),K.crossVectors(Z,et);for(let vt=0;vt<=c;vt++){const At=vt/c*Math.PI*2,N=Math.cos(At),A=Math.sin(At),j=mt*(c+1)+vt,tt=et.x*N+K.x*A,yt=et.y*N+K.y*A,ht=et.z*N+K.z*A;R.setXYZ(j,u[mt].x+tt*.035,u[mt].y+yt*.035,u[mt].z+ht*.035),q.setXYZ(j,tt,yt,ht)}}R.needsUpdate=!0,q.needsUpdate=!0},d=s.length*on*jo+240,h=new Float32Array(d),m=new Float32Array(d*3);let v=625341585;const g=()=>(v=Math.imul(v^v>>>15,2246822519)+2654435769|0,(v>>>0)%1e5/1e5),p=s.length*on+4;for(let at=0;at<d;at++)h[at]=at<s.length*on*jo?Math.floor(at/jo):s.length*on+Math.floor((at-s.length*on*jo)/60),m[at*3]=g(),m[at*3+1]=g(),m[at*3+2]=g();const y=new ee;y.setAttribute("position",new se(new Float32Array(d*3),3)),y.setAttribute("aSlot",new se(h,1)),y.setAttribute("aSeed",new se(m,3));const x=Array.from({length:p},()=>new pe(0,-100,0,-1e3)),_=new ge({transparent:!0,depthWrite:!1,uniforms:{...n,uEmit:{value:x},uVex:{value:ls}},vertexShader:`
      uniform vec4 uEmit[${p}]; uniform float uTime; uniform float uVex; uniform vec2 uRes; uniform float uSy;
      attribute float aSlot; attribute vec3 aSeed; varying float vA;
      void main(){
        vec4 e = uEmit[int(aSlot)];
        bool big = aSlot > ${s.length*on-.5};          // an entry: a whole cloud of air at once
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
      }`}),w=new Ys(y,_);w.frustumCulled=!1,i.add(w);const S=280,E=new Float32Array(S*4),C=new Float32Array(S);for(let at=0;at<S;at++){C[at]=Math.floor(at/70);for(let R=0;R<4;R++)E[at*4+R]=g()}const M=new ee;M.setAttribute("position",new se(new Float32Array(S*3),3)),M.setAttribute("aSeed",new se(E,4)),M.setAttribute("aSlot",new se(C,1));const b=n.uSplash?n.uSplash.value:Array.from({length:4},()=>new pe(0,0,0,-1e3)),T=n.uFloaters?n.uFloaters.value:[],I=new ge({transparent:!0,depthWrite:!1,uniforms:{...n,uSplash:{value:b}},vertexShader:`
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
        gl_FragColor = vec4(min(uSunCol * 0.6 + uAmbTop * 0.8, vec3(1.0)), a * vA * 0.85 * (1.0 - uUnder)); }`}),O=new Ys(M,I);O.frustumCulled=!1,O.renderOrder=9,i.add(O);const z=new ge({transparent:!0,depthWrite:!1,blending:es,side:Oe,uniforms:{...n,uOn:{value:0}},vertexShader:`varying float vAlong; varying vec3 vW; varying vec3 vN;
      void main(){ vAlong = -position.y / 7.0; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uOn; varying float vAlong; varying vec3 vW; varying vec3 vN;
      void main(){ vec3 V = normalize(cameraPosition - vW); float edge = pow(abs(dot(normalize(vN), V)), 1.5);
        float a = uOn * edge * (1.0 - smoothstep(0.1, 1.0, vAlong)) * smoothstep(0.0, 0.05, vAlong) * 0.45;
        gl_FragColor = vec4(vec3(1.0, 0.96, 0.86) * a, 1.0); }`}),F=new re(new os(1.7,6,24,1,!0).translate(0,-3,0),z);F.frustumCulled=!1,F.renderOrder=8.6,i.add(F);const U=at=>It(.703,.709,at)*(1-It(.738,.744,at)),k=new ne,D=new Ce,H=new Ge(0,0,0,"YXZ"),G=new P(1,1,1),W=new P,X=new P,st=new P,lt=new P;let V=!0,nt=null,ft=null,bt=.3;const Ft=new P,xt=new P;i.update=(at,R,q,Z=1)=>{const et=ie((at-ue.anchor[0])/(ue.anchor[1]-ue.anchor[0]));et<=0?(k.compose(X.set(5.45,1.32,0),D.setFromEuler(H.set(0,0,-1.2)),G),o.matrixAutoUpdate=!1,o.matrix.multiplyMatrices(e.matrixWorld,k),o.matrixWorldNeedsUpdate=!0,l.visible=!1):(C_(et,t,W),o.matrix.compose(X.copy(W).setY(W.y*Z),D.setFromEuler(H.set(0,Yr,Lt(-1.2,-.3,et))),G),o.matrixWorldNeedsUpdate=!0,l.visible=!0,f(W),l.scale.y=Z),zt(3,at,ue.anchor[0]+.12*(ue.anchor[1]-ue.anchor[0]),R,Si(6.6,0,0)),q.getWorldDirection(lt);const K=Math.max(.001,Math.min(.1,R-(nt??R)));yf(at,t,Ft);const mt=nt==null||Math.abs(at-ft)>.02||at<ft?0:Ft.distanceTo(xt),gt=Math.min(2,mt/K);bt+=(It(.03,.6,gt)-bt)*(1-Math.exp(-K/.8)),xt.copy(Ft),nt=R,ft=at;for(const vt of s){vt.kickPhase+=K*Lt(1.7,3.6,bt)*(.94+.06*vt.i),vt.st.kickPhase=vt.kickPhase,vt.st.kickAmp=Lt(.16,.95,bt)*(.92+.08*Math.sin(R*.37+vt.i*2.1));const At=_f(vt.i,at,t,R,vt.st);if(zc(vt.m,{...At.pose,root:[0,At.rootY,0,At.rx,0,0]}),H.set(0,At.ry,0),D.setFromEuler(H),At.local)if(k.compose(X.copy(At.pos),D,G),at<ue.roll[vt.i])vt.mesh.matrix.multiplyMatrices(e.matrixWorld,k);else{Si(At.pos.x,At.pos.y,At.pos.z,st);const ht=It(ue.roll[vt.i],ue.roll[vt.i]+ue.rollDur*.4,at);ht<1&&st.lerp(X.copy(At.pos).applyMatrix4(e.matrixWorld),1-ht),H.set(0,Yr+At.ry,0),D.setFromEuler(H),vt.mesh.matrix.compose(st,D,G)}else H.set(0,At.ry,0),D.setFromEuler(H),vt.mesh.matrix.compose(X.copy(At.pos).setY(At.pos.y*Z),D,G);if(vt.mesh.matrixWorldNeedsUpdate=!0,vt.m.uniforms.uFade.value=1,vt.mesh.visible=!0,T[vt.i]){const yt=!At.under&&At.pos&&!At.local&&at>ue.roll[vt.i]+ue.rollDur,ht=At.local?Si(At.pos.x,At.pos.y,At.pos.z,st):At.pos;T[vt.i].set(ht.x,ht.z,yt&&ht.y>-1.4?1:0,0)}Q2(vt.m,qt.head,0,.09,.14,null,vt.head).applyMatrix4(vt.mesh.matrix),Z!==1&&(vt.head.y/=Z);const N=ue.roll[vt.i]+.6*ue.rollDur,A=Si(Hc[vt.i],0,-mf(Hc[vt.i]).z-1);zt(vt.i,at,N,R,A)&&x[s.length*on+vt.i].set(A.x,-.9,A.z,R);const j=Math.floor(R/Dl-vt.breath),tt=vt.head.y<-.4;if(V||j<vt.last)for(let yt=0;yt<on;yt++){const ht=j-yt;x[vt.i*on+(ht%on+on)%on].set(vt.head.x,tt?vt.head.y:-100,vt.head.z,(ht+vt.breath)*Dl)}else j>vt.last&&x[vt.i*on+(j%on+on)%on].set(vt.head.x,tt?vt.head.y:-100,vt.head.z,(j+vt.breath)*Dl);vt.last=j}V=!1;const Mt=U(at);if(F.visible=Mt>.001,i.torch=i.torch||{pos:new P,dir:new P(0,-1,0),on:0},i.torch.on=Mt,Mt>.001){const vt=s[0].st,At=new P(Math.sin(vt.ry),0,Math.cos(vt.ry)),N=new P(vt.pos.x,vt.pos.y,vt.pos.z).addScaledVector(At,.9).add(new P(0,-.25,0)),A=new P(q.position.x-N.x,0,q.position.z-N.z).normalize(),j=N.clone().addScaledVector(At,2.2).addScaledVector(A,3);j.y=t.heightAt(j.x,j.z)+.6;const tt=j.sub(N).normalize();i.torch.pos.copy(N),i.torch.dir.copy(tt),F.position.set(N.x,N.y*Z,N.z),F.quaternion.setFromUnitVectors(new P(0,-1,0),tt),z.uniforms.uOn.value=Mt}},i.reset=()=>{V=!0},i.tap=(at,R)=>{x[s.length*on+3].set(at.x,at.y,at.z,R)},i.bubbles=w,i.splashSlots=b;function zt(at,R,q,Z,et){const K=b[at];return R<q?(K.w=-1e3,K.armed=!0,!1):K.armed&&R-q<.05?(K.set(et.x,0,et.z,Z),K.armed=!1,i.splashes=(i.splashes||0)+1,!0):(K.armed=!1,!1)}return i.divers=s,i}function U_(n){let t=0;for(const i of n)t+=i.attributes.position.count;const e=new ee;for(const i of["position","normal","color","aBone","aKind"]){const r=n[0].attributes[i].itemSize,s=new Float32Array(t*r);let o=0;for(const a of n)s.set(a.attributes[i].array,o),o+=a.attributes[i].array.length;e.setAttribute(i,new se(s,r))}return e}function N_(n){const t=ms(n),e=t.at(.77,new P);return{A:e.clone().addScaledVector(t.exp,-40).addScaledVector(t.side,-6).addScaledVector(Ea,12),B:e.clone().addScaledVector(t.exp,40).addScaledVector(t.side,-7).addScaledVector(Ea,10.5)}}function F_(n){const t=vu(.692,n,null,0,{}),e=new P(t.tx-t.cx,0,t.tz-t.cz).normalize(),i=new P(-e.z,0,e.x),r=new P(t.cx,0,t.cz).addScaledVector(e,9);return r.y=Math.max(n.heightAt(r.x,r.z)+1.6,t.cy-1.5),{A:r.clone().addScaledVector(i,-22).add(new P(0,.6,0)),B:r.clone().addScaledVector(i,22).add(new P(0,-.3,0))}}function z_(n){const t=ms(n),e=[];for(let o=0;o<=8;o++)e.push(t.at(Lt(.66,.795,o/8),new P));const i=(o,a,c=0,l=0,u=0)=>{const f=vu(o,n,null,u,{}),d=new P(f.tx-f.cx,f.ty-f.cy,f.tz-f.cz).normalize(),h=new P(-d.z,0,d.x).normalize(),m=new P(f.cx,f.cy,f.cz).addScaledVector(d,a).addScaledVector(h,c);return m.y+=l,{at:m,right:h}},r=(o,a,c,l)=>{const u=i(o,a,c,l,0),f=i(o,a,c*.25,l*.7,.9);return{at:u.at,atN:f.at,right:u.right}},s={descent:r(.627,10,1,0),bottom:r(.648,9,2,1),reef:r(.69,9.5,1.5,2.4),blue:r(.765,19,.5,1),ascent:r(.81,9.5,1.5,.5),stop:r(.822,9,2,-1)};for(const o of["bottom","reef"])for(const a of[s[o].at,s[o].atN])a.y=Math.max(a.y,n.heightAt(a.x,a.z)+2.4);return{route:e,side:t.side.clone(),exp:t.exp.clone(),schools:s}}ve.enabled=!1;const O_={notch:[120,-165],nwLobe:[-67,-370],neLobe:[287,-176],south:[3,328],east:[430,-68],islet:[-310,721]},ze={x:-10,z:470},Ta=[{a:0,rho:44,h:7,tgt:[0,0,15],fov:32},{a:Math.atan2(-7,-30),rho:30.8,h:6,tgt:[60,-17,2],fov:44},{a:0,rho:36,h:9,tgt:[0,0,3],fov:44}];function k_(n,t=0){const e=ke.x-n.x,i=ke.z-n.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r,a=-o,c=s,l=6*(1-t),u=-s*40-a*l,f=-o*40-c*l,d=Ta[0];d.a=Math.atan2(u*-n.hz+f*n.hx,u*n.hx+f*n.hz),d.rho=Math.hypot(u,f);const h=Math.min(r*.5,450),m=Lt(-.087,.08,t/.9)*h,v=s*h+a*m,g=o*h+c*m;d.tgt[0]=v*n.hx+g*n.hz,d.tgt[1]=v*-n.hz+g*n.hx,d.fov=Lt(32,50,t/.9)}function B_(n,t=0){const e=-n.x,i=-n.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r,a=-o,c=s,l=12*(1-t),u=-s*33-a*l,f=-o*33-c*l,d=Ta[2];d.a=Math.atan2(u*-n.hz+f*n.hx,u*n.hx+f*n.hz),d.rho=Math.hypot(u,f);const h=Math.min(r,700),m=Math.atan2(135-d.h,r+33),v=Math.atan2(-d.h,35),g=u+s*h,p=f+o*h;d.tgt[0]=g*n.hx+p*n.hz,d.tgt[1]=g*-n.hz+p*n.hx,d.tgt[2]=d.h+Math.tan((m+v)/2)*h}const H_=n=>Math.atan2(Math.sin(n),Math.cos(n)),s0=(n,t,e)=>n+H_(t-n)*e;function Wc(n,t,e={},i=0){k_(t,i),B_(t,i);const r=Ta[1],s=1-i;r.a=Math.atan2(-7*s,-30),r.rho=Math.hypot(7*s,30),r.tgt[1]=-17*s;const o=It(.452,.486,n),a=It(.506,.53,n),[c,l,u]=Ta,f=T=>Lt(Lt(c[T],l[T],o),u[T],a),d=s0(s0(c.a,l.a,o),u.a,a),h=f("rho"),m=f("h"),v=f("fov"),g=Lt(.22,.05,i/.9),p=T=>It(0,g,T)*(1-It(1-g,1,T)),y=Math.max(p(o),p(a))*Lt(.95,1,i/.9),x=[0,1,2].map(T=>Lt(Lt(Lt(c.tgt[T],l.tgt[T],o),u.tgt[T],a),[0,0,2.5][T],y)),_=t.hx,w=t.hz,S=-t.hz,E=t.hx,C=Math.cos(d)*h,M=Math.sin(d)*h;if(i>0){const T=Math.hypot(x[0]-C,x[1]-M)||1,I=Math.hypot(C,M)||1,O=Math.atan2(x[2]-m,T),z=Math.atan2(1-m,I);x[2]=m+Math.tan(Lt(O,z+.04,i/.9))*T}e.cx=t.x+_*C+S*M,e.cy=m,e.cz=t.z+w*C+E*M,e.tx=t.x+_*x[0]+S*x[1],e.ty=x[2],e.tz=t.z+w*x[0]+E*x[1],e.fov=v;const b=Lt(.26,.63,i/.9)*(1-It(.437,.458,n));if(b>1e-4){const T=Math.cos(b),I=Math.sin(b),O=(z,F)=>[t.x+(z-t.x)*T+(F-t.z)*I,t.z-(z-t.x)*I+(F-t.z)*T];[e.cx,e.cz]=O(e.cx,e.cz),[e.tx,e.tz]=O(e.tx,e.tz)}return e}const Mf=ps(1,{}),Te=Wc(.6,Mf),Gc=[[0,1500,22,470,-150,62,40,24,1,0,1,0,0,0,-.93,.055,-.62],[.075,1250,40,420,-120,58,30,25,1,0,1,0,0,0,-.93,.06,-.62],[.15,900,760,820,0,0,40,40,.45,0,1,0,0,0,-.7,.45,-.3],[.215,40,1750,4,40,0,0,40,0,0,1,0,0,0,-.55,.6,.45],[.3,40,1750,4,40,0,0,40,0,0,1,0,1,0,-.55,.6,.45],[.345,40,1950,4,40,0,0,40,0,0,1,0,1,0,-.55,.6,.45],[.375,40,1950,4,40,0,0,40,0,0,1,0,1,1,-.55,.6,.45],[.413,40,1950,4,40,0,0,40,0,0,1,0,1,1,-.55,.6,.45],[.42,Te.cx,Te.cy,Te.cz,Te.tx,Te.ty,Te.tz,Te.fov,.45,0,1,0,0,0,.62,.36,.7],[.5,Te.cx,Te.cy,Te.cz,Te.tx,Te.ty,Te.tz,Te.fov,.38,0,1,0,0,0,.55,.42,.7],[.548,Te.cx,Te.cy,Te.cz,Te.tx,Te.ty,Te.tz,Te.fov,.22,0,1,0,0,0,.35,.55,.7],[.578,Te.cx,Te.cy,Te.cz,Te.tx,Te.ty,Te.tz,Te.fov,.1,0,1,0,0,0,.05,.72,.6],[.612,ze.x+70,14,ze.z+60,ze.x-10,-10,ze.z-30,48,0,0,1,0,0,0,-.3,.8,.45],[.65,ze.x+30,7,ze.z+110,ze.x,-12,ze.z-10,50,0,0,1,0,0,0,-.3,.8,.45],[.69,ze.x+10,-10,ze.z+62,ze.x-6,-20,ze.z-30,55,0,0,1,0,0,0,-.3,.8,.45],[.745,ze.x+30,-24,ze.z+36,ze.x-70,-30,ze.z+48,55,0,0,1,0,0,0,-.3,.8,.45],[.785,ze.x+34,-25,ze.z+50,ze.x-66,-30,ze.z+78,54,0,0,1,0,0,0,-.3,.8,.45],[.815,25,-11,472,8,-10,462,50,0,0,1,0,0,0,-.2,.82,.48],[.85,240,-40,1150,0,-40,0,42,0,1,0,1,0,0,.5,.75,.55],[.9,1950,1420,2350,0,-60,40,33,0,1,0,1,0,0,.5,.75,.55],[1,1950,1420,2350,0,-60,40,33,0,1,0,1,0,0,.5,.75,.55]],Sf=Gc[0].length,wf=[];for(let n=1;n<Sf;n++)wf[n]=Kr(Gc.map(t=>t[0]),Gc.map(t=>t[n]));const Xc=n=>{const t=[];for(let e=1;e<Sf;e++)t[e]=wf[e](n);return t};function V_(n,t,e,i={}){const r=Xc(n);let[,s,o,a,c,l,u,f]=r;const d=ie((1.6-t)/1.14)*.9;if(i.narrow=d,i.wr=0,i.wd=0,n<ue.stop){const h=It(.41,.418,n);if(h>0){const m=Wc(n,ps(oa(n),W_),G_,d);s=Lt(s,m.cx,h),o=Lt(o,m.cy,h),a=Lt(a,m.cz,h),c=Lt(c,m.tx,h),l=Lt(l,m.ty,h),u=Lt(u,m.tz,h),f=Lt(f,m.fov,h)}i.wr=h}else{const h=vu(n,e,Wc(.6,Mf,X_,d),d,q_),m=It(.815,.85,n);s=Lt(h.cx,s,m),o=Lt(h.cy,o,m),a=Lt(h.cz,a,m),c=Lt(h.tx,c,m),l=Lt(h.ty,l,m),u=Lt(h.tz,u,m),f=Lt(h.fov,f,m),i.wd=1-m}return i.cx=s,i.cy=o,i.cz=a,i.tx=c,i.ty=l,i.tz=u,i.fov=f,i}const W_={},G_={},X_={},q_={};function $_(n,{quality:t=1,onFrameCost:e}={}){const i=new Zx({canvas:n,antialias:t>.6,powerPreference:"high-performance",alpha:!1});i.outputColorSpace=fr;const r=t>.6?1.75:1.25;let s=Math.min(window.devicePixelRatio||1,r);i.setPixelRatio(s);const o=new Sp,a=new Bn(35,1,1,6e4),c=u2(),l={uTime:{value:0},uSunDir:{value:new P(-.9,.1,-.3).normalize()},uDusk:{value:1},uSunCol:{value:new oe(1,.7,.45)},uAmbTop:{value:new oe(.3,.3,.4)},uAmbBot:{value:new oe(.15,.12,.12)},uUnder:{value:0},uFogDen:{value:3e-4},uWaterFogDen:{value:.018},uColumn:{value:1},uPaper:{value:0},uPaperColor:{value:new oe("#efe6d2")},uWaterCol:{value:new oe(.05,.3,.38)},uWaterDeep:{value:new oe(.02,.13,.22)},uShallow:{value:new oe(.12,.55,.56)},uSdf:{value:c.sdfTex},uHalf:{value:vi},uOuter:{value:1},uDiorama:{value:0},uHeart:{value:0},uRes:{value:new Nt(1,1)},uPx:{value:1},uClipR:{value:1e9},uSy:{value:1},uSdf2:{value:new ni(new Uint8Array([0]),1,1,Gi)},uRect2:{value:new pe(0,0,0,0)},uSdf3:{value:new ni(new Uint16Array([0]),1,1,Gi,vr)},uRect3:{value:new pe(0,0,0,0)},uBoat:{value:new pe(0,0,1,0)},uBoatSpeed:{value:0},uTexOn:{value:0},uAerialRect:{value:new pe(-340,-465,910,0)},uHiTex:{value:t>.6?1:0},uSplash:{value:Array.from({length:4},()=>new pe(0,0,0,-1e3))},uFloaters:{value:Array.from({length:3},()=>new pe(0,0,0,0))},uBoatInv:{value:new ne},uCanopy:{value:new pe(-4.1,2.6,1.75,.55+2.15)},uRipple:{value:new pe(0,0,-1e3,0)},uTorch:{value:new pe(0,-100,0,0)},uTorchDir:{value:new P(0,-1,0)}},u=new ni(new Uint8Array([128,128,128,255]),1,1);u.needsUpdate=!0;const f={tRock:"rock",tGrass:"grass",tForest:"canopy",tSand:"sand",tReef:"reef",tStrata:"strata",tAerial:"aerial"};for(const ot in f)l[ot]={value:u};l.tGopura={value:u};{const ot=new Fa,ct=Object.keys(f);let ut=ct.length;const Ut=Math.min(8,i.capabilities.getMaxAnisotropy());for(const Rt of ct)ot.load(`/textures/${t>.6?"":"sm/"}${f[Rt]}.webp`,Wt=>{Wt.wrapS=Wt.wrapT=Rt==="tAerial"?ki:Bs,Wt.anisotropy=Ut,Wt.colorSpace=an,l[Rt].value=Wt,--ut===0&&(tt.texReady=performance.now())},void 0,()=>console.warn("texture missing:",f[Rt]))}const d=new We;o.add(d);const h=_2(l);o.add(h);const m=new re(c.geom,h2(l));d.add(m);const v=new re(f2(c),zh(l));d.add(v);const g=new re(new ou(Rn-30,96).rotateX(Math.PI/2).translate(0,xi,0),zh(l));d.add(g);const p=p2(l);d.add(p);const y=m2(c);d.add(y);const x=new re(new rn(8e4,8e4,96,96).rotateX(-Math.PI/2),Oh(l,!0));x.renderOrder=2,o.add(x);const _=new re(new rn(Jr+16,Jr+16,8,8).rotateX(-Math.PI/2),Oh(l,!1));_.renderOrder=3,o.add(_);const w=new re(v2(c),x2(l));w.renderOrder=4,d.add(w);const S=E2(l,c,t);d.add(S);const E=T2(l);o.add(E),c.heightAt(ze.x,ze.z);const C=B2(l,c,z_(c),t);d.add(C);const M=A2(l,t>.6?1600:700);M.renderOrder=6,o.add(M);const b=C2(l);b.children.forEach(ot=>ot.renderOrder=7),o.add(b);const T=F2(l);d.add(T);const I=k2(l);d.add(I);const O=N_(c),z=F_(c),F=O.A.distanceTo(O.B),U=z.A.distanceTo(z.B),k=new P,D=R2(l);d.add(D);const H=P2(l);H.renderOrder=8,o.add(H);const G=D2(l,c,ze,t);d.add(G);const W=E_(l);o.add(W),W.rotation.order="YZX";const X=L2(l);X.renderOrder=1,o.add(X);const st=()=>Math.min(1,a.aspect/1.6),lt=I_(l,c,W);o.add(lt);let V=null,nt=null;const ft=()=>{V||!nt||(performance.now(),V=d_(l,t,nt),o.add(V),V.visible=!0,(i.compileAsync?i.compileAsync(o,a):Promise.resolve()).catch(()=>{}))};try{const ot=new Worker(new URL("/assets/landWorker-DclVU_uQ.js",import.meta.url),{type:"module"});ot.onmessage=ct=>{nt=ct.data,ot.terminate(),(window.requestIdleCallback||(ut=>setTimeout(ut,30)))(ft)},ot.postMessage({quality:t})}catch(ot){console.warn("land worker unavailable",ot)}const bt={},Ft={},xt={x:0,y:0,sx:0,sy:0,kick:0,px:0,py:0};let zt=0,at=0,R=!1,q=0,Z=0;window.addEventListener("pointermove",ot=>{ot.pointerType==="mouse"&&(xt.x=ot.clientX/innerWidth*2-1,xt.y=ot.clientY/innerHeight*2-1,xt.px=xt.x,xt.py=xt.y,xt.kick=Math.max(xt.kick,1))}),window.addEventListener("pointerdown",ot=>{xt.px=ot.clientX/innerWidth*2-1,xt.py=ot.clientY/innerHeight*2-1,xt.kick=2.4});const et=new ah,K=ot=>{R=!0,q=ot.clientX},mt=ot=>{if(!R)return;const ct=ot.clientX-q;q=ot.clientX,at=ct*.004,zt+=at},gt=()=>{R=!1},Mt=()=>{const ot=n.clientWidth||innerWidth,ct=n.clientHeight||innerHeight;i.setSize(ot,ct,!1),a.aspect=ot/ct,ot/ct<.8?a.setViewOffset(ot,ct,0,ct*.16,ot,ct):a.clearViewOffset(),a.updateProjectionMatrix(),l.uRes.value.set(ot*s,ct*s),l.uPx.value=s*(ct/900)};Mt(),window.addEventListener("resize",Mt);const vt=new P,At=new P;let N=-1;const A=new P,j=(ot,ct)=>{if(!ot)return!1;A.copy(ot).project(a);const ut=a.position.distanceTo(ot),Ut=ct/Math.max(ut,1),Rt=tt.wet>.01?Math.log(25)/Math.max(l.uWaterFogDen.value,1e-4):4e3;return A.z<1&&Math.abs(A.x)<1+Ut&&Math.abs(A.y)<1+Ut&&ut<Rt},tt={p:0,b:Xc(0),under:0,depthM:0},yt=new oe(1.05,1,.93),ht=new oe(1.25,.72,.45);function Gt(ot,ct,ut){const Ut=Xc(ot);tt.p=ot,tt.b=Ut;const[,Rt,Wt,Kt,Me,Fe,bn,Ti,je,yr,gs,En,vs,,Mr,ao,lo]=Ut;l.uTime.value=ct,tt.texReady&&(l.uTexOn.value=Math.min(1,(performance.now()-tt.texReady)/900)),xt.sx+=(xt.x-xt.sx)*Math.min(1,ut*2.5),xt.sy+=(xt.y-xt.sy)*Math.min(1,ut*2.5);const Sr=It(.86,.9,ot);R||(at*=Math.pow(.04,ut),zt+=at,Z+=ut*.035*Sr),Sr<.01&&(zt*=Math.pow(.02,ut),Z*=Math.pow(.02,ut));const co=(zt+Z)*Sr,uo=xt.sx*.04*(1-Sr*.6),xs=oa(ot);ps(xs,bt);const Ha=(oa(ot+.002)-oa(ot-.002))/.004,oi=ie(Ha/14);tt.cross=xs,tt.km=xs*ks/1e3,tt.speed=oi,W.position.set(bt.x,Math.sin(ct*.9)*.14+oi*.18,bt.z),W.rotation.set(Math.sin(ct*.8)*.03*(1-oi*.5),Math.atan2(-bt.hz,bt.hx),oi*.06+Math.sin(ct*1.3)*.015),l.uBoat.value.set(bt.x,bt.z,bt.hx,bt.hz),l.uBoatSpeed.value=oi,ot>.3&&ft(),V&&(V.visible=ot>.38&&ot<.59,V.visible&&V.update(ct)),W.update(ot,ct),W.updateMatrixWorld(),l.uBoatInv.value.copy(W.matrixWorld).invert();const L=V_(ot,a.aspect,c,Ft),Q=L.wr,dt=L.cx,pt=L.cy,it=L.cz,Dt=L.tx,Bt=L.ty,$t=L.tz,Xt=L.fov;tt.crossW=Q;const Qt=dt-Dt,te=it-$t,jt=Math.cos(co),ce=Math.sin(co);let de=Dt+Qt*jt-te*ce,we=$t+Qt*ce+te*jt,Se=Dt,_e=$t;{const Ve=Se-de,ye=_e-we,Pe=Math.hypot(Ve,ye)||1,Ee=Q>.01?Math.hypot(W.position.x-de,W.position.z-we):Math.min(Pe,120),en=Math.min(Pe,Lt(Math.min(Pe,120),Ee,Q)),Ze=de+Ve/Pe*en,$i=we+ye/Pe*en,wr=Math.cos(uo),Yi=Math.sin(uo),_u=(yu,Mu)=>[Ze+(yu-Ze)*wr-(Mu-$i)*Yi,$i+(yu-Ze)*Yi+(Mu-$i)*wr];[de,we]=_u(de,we),[Se,_e]=_u(Se,_e)}a.position.set(de,pt-xt.sy*(pt>60?10:.6)*(pt>0?1:.3),we),vt.set(Se,Bt,_e);const Jt=vt.clone().sub(a.position).normalize(),Ie=It(.85,.99,-Jt.y);At.set(0,1,0).lerp(new P(0,0,-1),Ie).normalize(),a.up.copy(At),a.fov=Xt,a.updateProjectionMatrix(),a.lookAt(vt),h.position.copy(a.position),h.scale.setScalar(3e4);const me=Math.max(Math.abs(a.position.x),Math.abs(a.position.z)),be=It(.8,-2.2,a.position.y)*(1-It(vi-150,vi+10,me)),Ai=be>.5?1:0;tt.under=Ai,tt.wet=be,tt.depthM=be>.01?Math.max(0,-a.position.y/ls):0,l.uUnder.value=be,l.uSunDir.value.set(Mr,ao,lo).normalize(),l.uDusk.value=je,l.uPaper.value=yr,l.uOuter.value=gs,l.uDiorama.value=En,l.uHeart.value=vs,l.uSunCol.value.copy(yt).lerp(ht,je),l.uAmbTop.value.setRGB(Lt(.42,.3,je),Lt(.5,.3,je),Lt(.62,.45,je)).lerp(new oe(.62,.62,.6),yr),l.uAmbBot.value.setRGB(Lt(.22,.17,je),Lt(.2,.11,je),Lt(.17,.12,je)),l.uFogDen.value=Lt(Lt(9e-5,15e-5,je),0,yr)*Lt(1,.55,Q),l.uWaterDeep.value.setRGB(Lt(.03,.03,je),Lt(.2,.11,je),Lt(.32,.2,je)),l.uShallow.value.setRGB(Lt(.12,.1,je),Lt(.58,.38,je),Lt(.58,.42,je));const pn=It(vi-520,vi-60,Math.max(Math.abs(a.position.x),Math.abs(a.position.z)));l.uWaterFogDen.value=Lt(.0135,.003,pn),l.uColumn.value=Lt(1,.2,En),w.visible=En>.01,v.visible=En>.01,g.visible=En>.01,p.visible=En>.01,y.visible=En>.2,y.setFade(It(.2,.9,En)),l.uClipR.value=En>.01?Rn:1e9,G.visible=ot>.45;const Vn=1+.8*It(.835,.9,ot);d.scale.y=Vn,l.uSy.value=Vn,tt.sy=Vn,x.visible=gs>.01,D.visible=vs>.001;const Ue=a.position.y<30;E.visible=be<.5&&ot<.38,E.visible&&E.update(ct),X.update(ct,ot<.2&&be<.5?1:0,st()),xt.kick=Math.max(0,xt.kick-ut*2.2),C.visible=ot>.45&&ot<.84,C.visible&&(xt.kick>0&&(a.updateMatrixWorld(),et.setFromCamera({x:xt.px,y:-xt.py},a)),C.update(ct,ut,xt.kick>0?et.ray:null,xt.kick,L.narrow||0,be>.5)),W.updateMatrixWorld(),Math.abs(ot-N)>.03&&lt.reset(),N=ot,lt.update(ot,ct,a,Vn),tt.splashes=lt.splashes||0,lt.torch&&(l.uTorch.value.set(lt.torch.pos.x,lt.torch.pos.y,lt.torch.pos.z,lt.torch.on),l.uTorchDir.value.copy(lt.torch.dir)),lt.bubbles.renderOrder=be>.5?8:2.5,W.spray.material.uniforms.uSpray.value=oi*Q,W.spray.visible=oi*Q>.05,M.visible=be>.01,b.visible=be>.01,b.visible&&b.update(a),H.visible=be>.01,H.material.uniforms.uOrigin.value.copy(a.position).add(new P(0,-1.6,0).applyQuaternion(a.quaternion)).add(Jt.clone().multiplyScalar(2.2));{const Ve=(Ee,en)=>{const Ze=Ee/F,$i=O.B.x-O.A.x,wr=O.B.z-O.A.z,Yi=Math.sin(Ze*Math.PI*1.6)*3;return en.set(Lt(O.A.x,O.B.x,Ze)-wr/F*Yi,Lt(O.A.y,O.B.y,Ze),Lt(O.A.z,O.B.z,Ze)+$i/F*Yi)},ye=T.state;Bh(ye,{want:F*ie((ot-.735)/.065),L:F,dt:ut,base:1.3,vmax:3.2,open:ot>.725&&ot<.86,rest:18,unseen:Ee=>be<=.01||!j(Ve(Ee,k),8)});const Pe=!!ye.on&&be>.01;if(T.visible=Pe,Pe){const Ee=ye.s/F,en=O.B.x-O.A.x,Ze=O.B.z-O.A.z,$i=-Ze/F,wr=en/F;Ve(ye.s,T.position),T.position.y+=Math.sin(ct*.21)*.6;const Yi=Math.atan2(en+$i*Math.cos(Ee*Math.PI*1.6)*3*Math.PI*1.6,Ze+wr*Math.cos(Ee*Math.PI*1.6)*3*Math.PI*1.6);T.rotation.set(Math.sin(ct*.21+1.2)*.03,Yi,-Math.cos(Ee*Math.PI*1.6)*.06),ye.ph+=ut*Math.PI*2*Lt(.16,.3,ie(ye.v/2.4)),T.material.uniforms.uPhase.value=ye.ph,T.material.uniforms.uAmp.value=Lt(.07,.1,ie(ye.v/2.4))}}{const Ve=(Ee,en)=>(en.lerpVectors(z.A,z.B,Ee/U),en.y=Math.max(en.y,c.heightAt(en.x,en.z)+1.1),en),ye=I.state;Bh(ye,{want:Lt(16,30,ie((ot-.672)/.04)),L:U,dt:ut,base:.6,vmax:2.4,open:ot>.655&&ot<.8,rest:25,unseen:Ee=>be<=.01||!j(Ve(Ee,k),3)});const Pe=!!ye.on&&be>.01;I.visible=Pe,Pe&&(I.swim(ye,ct,ut,ye.v),Ve(ye.s,I.position),I.position.y+=(ye.lift||0)+Math.sin(ct*.3)*.2,I.position.y*=Vn,I.rotation.set(-Math.cos(ye.ph)*.05,Math.atan2(z.B.x-z.A.x,z.B.z-z.A.z)+Math.sin(ct*.17)*.1,Math.sin(ct*.37)*.05))}return tt.underish=Ue,tt}let Pt=0,Vt=0,rt=0;function Y(ot){rt&&(s=rt,rt=0,i.setPixelRatio(s),Mt());const ct=performance.now();i.render(o,a);const ut=performance.now()-ct;e&&e(ut),ot>1/40?Pt++:Pt=Math.max(0,Pt-1),ot<1/58?Vt++:Vt=0,Pt>40&&s>.75&&(rt=Math.max(.75,s-.25),Pt=0),Vt>240&&s<Math.min(window.devicePixelRatio||1,r)&&(rt=Math.min(r,s+.25),Vt=0)}const St=new ah,J=new P,Ct=(ot,ct)=>{const ut=n.getBoundingClientRect();a.updateMatrixWorld(),St.setFromCamera({x:(ot-ut.left)/ut.width*2-1,y:-((ct-ut.top)/ut.height)*2+1},a);const Ut=St.ray.origin,Rt=St.ray.direction;if(tt.wet<.5){if(Rt.y>=-.01||tt.b[9]>.5||tt.b[13]>.5)return null;const Wt=-Ut.y/Rt.y;return Wt>4e3?null:(J.copy(Ut).addScaledVector(Rt,Wt),l.uRipple.value.set(J.x,J.z,l.uTime.value,1),"ripple")}return J.copy(Ut).addScaledVector(Rt,4.5),J.y/=tt.sy||1,lt.tap(J,l.uTime.value),"bubbles"},wt=new P,Ot=new P,B=new P,_t=()=>{const ot=[];if(!W.visible||!W.brand||a.position.y<.3)return ot;W.updateMatrixWorld();for(const ct of W.brand){B.set(0,0,0);for(const Fe of ct.corners)B.add(Fe);B.multiplyScalar(.25).applyMatrix4(W.matrixWorld),Ot.copy(ct.normal).transformDirection(W.matrixWorld);const ut=Ot.dot(wt.copy(a.position).sub(B).normalize());let Ut=1e9,Rt=1e9,Wt=-1e9,Kt=-1e9,Me=!1;for(const Fe of ct.corners){wt.copy(Fe).applyMatrix4(W.matrixWorld);const bn=Et(wt.x,wt.y/(tt.sy||1),wt.z);Me=Me||bn.behind,Ut=Math.min(Ut,bn.x),Rt=Math.min(Rt,bn.y),Wt=Math.max(Wt,bn.x),Kt=Math.max(Kt,bn.y)}ot.push({kind:ct.kind,x:Ut,y:Rt,w:Wt-Ut,h:Kt-Rt,facing:ut,behind:Me})}return ot},Et=(ot,ct,ut)=>{const Ut=new P(ot,ct*(tt.sy||1),ut).project(a);return{x:(Ut.x*.5+.5)*n.clientWidth,y:(-Ut.y*.5+.5)*n.clientHeight,behind:Ut.z>1}};return{debug:{terrain:m,innerOcean:_,outerOcean:x,canopy:S,reef:G,fish:C,boat:W,divers:lt,shark:T,turtle:I,eagle:X,renderer:i},update:Gt,render:Y,size:Mt,camera:a,project:Et,brandRects:_t,tap:Ct,T:c,U:l,CORE_R:Rn,startDrag:K,moveDrag:mt,endDrag:gt,state:tt,worldPerPixelTopDown:()=>2*a.position.y*Math.tan(a.fov*Math.PI/360)/n.clientHeight,SPOT:ze}}const xu=n=>n.map(([t,e])=>[t,-e]),Y_=xu(_n.island),j_=xu(_n.islet),Ll=_n.mainland.map(xu),vn=Object.fromEntries(Object.entries(_n.poi).map(([n,[t,e]])=>[n,[t,-e]])),[aa,Il]=_n.center,Ul=110574,Z_=111320*Math.cos(aa*Math.PI/180);Math.hypot(vn.temple[0],vn.temple[1])/1e3;const Zo=Array.from({length:121},(n,t)=>{const e=ps(t/120,{});return[e.x,e.z]});function K_(n){const t=n.getContext("2d");let e=0,i=0,r=1;const s=()=>{r=Math.min(window.devicePixelRatio||1,2),e=n.clientWidth,i=n.clientHeight,n.width=Math.round(e*r),n.height=Math.round(i*r)};s(),window.addEventListener("resize",s);const o=document.createElement("canvas");o.width=o.height=256;{const l=o.getContext("2d"),u=l.createImageData(256,256),f=Ye(9);for(let d=0;d<u.data.length;d+=4){const h=200+f()*55;u.data[d]=h,u.data[d+1]=h*.97,u.data[d+2]=h*.9,u.data[d+3]=22}l.putImageData(u,0,0)}function a(l,u,f,d,h){const m=y=>l.x+l.w/2+(y-f)*u,v=y=>l.y+l.h/2+(y-d)*u;t.fillStyle="#efe6d2",t.fillRect(l.x,l.y,l.w,l.h),t.fillStyle=t.createPattern(o,"repeat"),t.fillRect(l.x,l.y,l.w,l.h),t.save(),t.globalAlpha*=h.ink==null?1:h.ink,t.lineWidth=1,t.strokeStyle="rgba(70,95,110,0.22)",t.fillStyle="rgba(55,75,88,0.75)",t.font='11px "JetBrains Mono", monospace';const g=u*Ul*.005>70?.005:u*Ul*.02>50?.02:.05;for(let y=Math.ceil((aa-.3)/g)*g;y<aa+.3;y+=g){const x=v(-(y-aa)*Ul);x<l.y-10||x>l.y+l.h+10||(t.beginPath(),t.moveTo(l.x,x),t.lineTo(l.x+l.w,x),t.stroke(),h.small||t.fillText(a0(y,"N"),l.x+8,x-4))}for(let y=Math.ceil((Il-.3)/g)*g;y<Il+.5;y+=g){const x=m((y-Il)*Z_);x<l.x-10||x>l.x+l.w+10||(t.beginPath(),t.moveTo(x,l.y),t.lineTo(x,l.y+l.h),t.stroke(),h.small||t.fillText(a0(y,"E"),x+4,l.y+l.h-10))}t.fillStyle="#ddd0b2";for(const y of Ll){if(t.beginPath(),y.forEach(([_,w],S)=>S?t.lineTo(m(_),v(w)):t.moveTo(m(_),v(w))),!(y.length>2&&y[0][0]===y[y.length-1][0]&&y[0][1]===y[y.length-1][1])){const _=y[y.length-1],w=y[0];t.lineTo(m(6e4),v(_[1])),t.lineTo(m(6e4),v(w[1]))}t.closePath(),t.fill()}for(let y=3;y>=1;y--){t.strokeStyle=`rgba(46,110,128,${.1+.05*(3-y)})`,t.lineWidth=1;for(const x of Ll)t.beginPath(),x.forEach(([_,w],S)=>S?t.lineTo(m(_)-y*5,v(w)):t.moveTo(m(_)-y*5,v(w))),t.stroke()}t.strokeStyle="#2d3a3f",t.lineWidth=1.4;for(const y of Ll)t.beginPath(),y.forEach(([x,_],w)=>w?t.lineTo(m(x),v(_)):t.moveTo(m(x),v(_))),t.stroke();const p=(y,x)=>{t.beginPath();const _=o0(y);y.forEach(([w,S],E)=>{const C=w-_[0],M=S-_[1],b=Math.hypot(C,M)||1,T=m(w)+C/b*x,I=v(S)+M/b*x;E?t.lineTo(T,I):t.moveTo(T,I)}),t.closePath()};for(const y of[Y_,j_]){if(!h.small)for(let w=4;w>=1;w--)p(y,w*6),t.strokeStyle=`rgba(46,110,128,${.07+.06*(4-w)})`,t.lineWidth=1,t.stroke();p(y,0);const x=o0(y),_=t.createRadialGradient(m(x[0]),v(x[1]-120),1,m(x[0]),v(x[1]),Math.max(4,420*u));_.addColorStop(0,"#6f8f4a"),_.addColorStop(.7,"#9aa267"),_.addColorStop(1,"#c4ad7c"),t.fillStyle=_,t.fill(),t.strokeStyle="#26302f",t.lineWidth=h.small?1:1.6,t.stroke()}if(h.route>0){t.save(),t.globalAlpha*=h.route,t.setLineDash([6,6]),t.lineDashOffset=-h.t*18,t.strokeStyle="rgba(180,70,47,0.75)",t.lineWidth=h.small?1.4:2,t.beginPath(),Zo.forEach(([x,_],w)=>w?t.lineTo(m(x),v(_)):t.moveTo(m(x),v(_))),t.stroke(),t.setLineDash([]);const y=ps(h.u,{});if(h.u>.001){t.strokeStyle="#b4462f",t.lineWidth=h.small?2.2:3,t.beginPath();const x=Math.floor(h.u*120);for(let _=0;_<=x;_++){const[w,S]=Zo[_];_?t.lineTo(m(w),v(S)):t.moveTo(m(w),v(S))}t.lineTo(m(y.x),v(y.z)),t.stroke()}ty(t,m(y.x),v(y.z),Math.atan2(y.hz,y.hx),h.small?.8:1.15),t.restore()}return h.labels>0&&(t.save(),t.globalAlpha*=h.labels,Q_(t,m(vn.temple[0]),v(vn.temple[1]),h.small?.7:1),qn(t,"Murudeshwar",m(vn.temple[0])+(h.small?9:16),v(vn.temple[1])+4,`600 ${h.small?12:20}px "Fraunces Variable", serif`,"#2a2a26"),h.small||(qn(t,"temple headland · boats leave from the beach",m(vn.temple[0])+16,v(vn.temple[1])+24,"18px Caveat, cursive","#7a4a32"),J_(t,m(vn.station[0]),v(vn.station[1])),qn(t,"Murdeshwar station · Konkan Railway",m(vn.station[0])+10,v(vn.station[1])+4,'12px "Instrument Sans", sans-serif',"#3c4645")),t.restore()),t.restore(),{X:m,Y:v}}function c(l,u,f,d=0){const h=It(.345,.378,l)*(1-It(.424,.44,l)),m=It(.459,.468,l)*(1-It(.538,.552,l));if(h<=.001&&m<=.001){n.style.opacity!=="0"&&(n.style.opacity="0");return}if(n.style.opacity="1",t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,e,i),h>.001){t.globalAlpha=h;const v=It(.383,.412,l),g=It(.413,.437,l),p=Math.abs(vn.temple[0])+9e3,x=Math.min(e*.84/p,i*.8/14e3),_=1/f;let w=Math.exp(Lt(Math.log(_),Math.log(x),v)),S=Lt(40,vn.temple[0]*.5+2600,v**3),E=Lt(0,vn.temple[1]*.5-600,v**3);const C=Zo[0];w*=Math.exp(g*3.4),S=Lt(S,C[0],g**.6),E=Lt(E,C[1],g**.6);const M=1-It(.416,.428,l),{X:b,Y:T}=a({x:0,y:0,w:e,h:i},w,S,E,{route:It(.395,.41,l),labels:It(.4,.412,l),u:0,t:u,small:!1,ink:M});t.globalAlpha=h*M;const I=Lt(30,22,v),O=Lt(b(-260)-150,b(0)-40,v),z=Lt(T(-120),T(0)+46,v);if(qn(t,"Netrani",O,z,`italic 600 ${I}px "Fraunces Variable", serif`,"#1f2a2c"),qn(t,v<.5?"the heart · about 27 ha":"Pigeon Island",O,z+22,"18px Caveat, cursive","#7a4a32"),v>.6&&(t.save(),t.globalAlpha=h*M*It(.6,.9,v),qn(t,"ARABIAN  SEA",b(-2600),T(5200),'500 14px "Instrument Sans", sans-serif',"rgba(40,90,105,0.7)",6),t.restore()),v>.7){const F=Zo[62];t.save(),t.globalAlpha=h*M*It(.7,1,v),qn(t,`≈ ${(ks/1e3).toFixed(0)} km`,b(F[0])-30,T(F[1])-16,'600 22px "JetBrains Mono", monospace',"#b4462f"),qn(t,"≈ 10 nautical miles · 45–90 min by boat",b(F[0])-30,T(F[1])+6,"18px Caveat, cursive","#7a4a32"),t.restore()}ey(t,e-70,86,34),ny(t,24,i-54,w),t.globalAlpha=1}if(m>.001){const v=Math.min(310,e*.42),g=v*.66,p={x:e-v-18,y:Math.min(86,i*.12),w:v,h:g};t.save(),t.globalAlpha=m,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=24,t.shadowOffsetY=10,t.fillStyle="#efe6d2",t.beginPath(),t.roundRect(p.x,p.y,p.w,p.h,12),t.fill(),t.shadowColor="transparent",t.beginPath(),t.roundRect(p.x,p.y,p.w,p.h,12),t.clip();const y=Math.min(p.w/21e3,p.h/12500);a(p,y,8300,-3900,{route:1,labels:1,u:d,t:u,small:!0}),t.restore(),t.save(),t.globalAlpha=m;const x=d*ks/1e3;qn(t,`${x.toFixed(1)} km`,p.x+14,p.y+26,'600 18px "JetBrains Mono", monospace',"#b4462f"),qn(t,`of ≈ ${(ks/1e3).toFixed(0)} km · ${(x/1.852).toFixed(1)} nmi`,p.x+14,p.y+45,"16px Caveat, cursive","#7a4a32"),qn(t,"Netrani",p.x+12,p.y+p.h-14,'italic 600 13px "Fraunces Variable", serif',"#1f2a2c"),t.strokeStyle="rgba(29,39,41,0.25)",t.lineWidth=1,t.beginPath(),t.roundRect(p.x+.5,p.y+.5,p.w-1,p.h-1,12),t.stroke(),t.restore()}}return{draw:c,resize:s}}function o0(n){let t=0,e=0;for(const i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function a0(n,t){const e=Math.round(n*600)/10,i=Math.floor(e/60),r=e-i*60;return`${i}°${r.toFixed(1).padStart(4,"0")}′${t}`}function qn(n,t,e,i,r,s,o=0){n.font=r,n.fillStyle=s,"letterSpacing"in n&&(n.letterSpacing=`${o}px`),n.fillText(t,e,i),"letterSpacing"in n&&(n.letterSpacing="0px")}function J_(n,t,e){n.fillStyle="#2d3a3f",n.beginPath(),n.arc(t,e,3.5,0,6.283),n.fill()}function Q_(n,t,e,i=1){n.save(),n.translate(t,e),n.scale(i,i),n.fillStyle="#b4462f";for(let r=0;r<5;r++){const s=12-r*2;n.fillRect(-s/2,-r*3.2,s,3)}n.beginPath(),n.arc(0,-17,1.8,0,6.283),n.fill(),n.restore()}function ty(n,t,e,i,r){n.save(),n.translate(t,e),n.rotate(i),n.scale(r,r),n.strokeStyle="rgba(46,110,128,0.55)",n.lineWidth=1;for(let s=1;s<=3;s++)n.beginPath(),n.moveTo(-6-s*7,-3-s*2.2),n.lineTo(-6,0),n.lineTo(-6-s*7,3+s*2.2),n.stroke();n.fillStyle="#f7f1e4",n.strokeStyle="#26302f",n.lineWidth=1.3,n.beginPath(),n.moveTo(12,0),n.quadraticCurveTo(4,-6,-8,-5),n.lineTo(-8,5),n.quadraticCurveTo(4,6,12,0),n.fill(),n.stroke(),n.fillStyle="#1c5b96",n.fillRect(-5,-3.2,8,6.4),n.restore()}function ey(n,t,e,i){n.save(),n.translate(t,e),n.strokeStyle="rgba(38,48,47,0.55)",n.lineWidth=1,n.beginPath(),n.arc(0,0,i,0,6.283),n.stroke(),n.beginPath(),n.arc(0,0,i*.82,0,6.283),n.stroke();for(let r=0;r<4;r++)n.rotate(Math.PI/2),n.fillStyle=r===3?"#b4462f":"#26302f",n.beginPath(),n.moveTo(0,-i*1.05),n.lineTo(i*.14,0),n.lineTo(-i*.14,0),n.closePath(),n.fill();n.fillStyle="#26302f",n.font='600 13px "Fraunces Variable", serif',n.textAlign="center",n.fillText("N",0,-i-8),n.textAlign="start",n.restore()}function ny(n,t,e,i){const r=[100,200,500,1e3,2e3,5e3];let s=r[0];for(const a of r)a*i<180&&(s=a);const o=s*i;n.save(),n.fillStyle="#26302f",n.fillRect(t,e,o/2,5),n.strokeStyle="#26302f",n.lineWidth=1,n.strokeRect(t,e,o,5),n.font='11px "JetBrains Mono", monospace',n.fillText("0",t-3,e-6),n.fillText(s>=1e3?`${s/1e3} km`:`${s} m`,t+o-14,e-6),n.restore()}function iy(){const n=new Path2D;return n.moveTo(40,160),n.bezierCurveTo(40,110,120,92,260,96),n.bezierCurveTo(420,100,600,120,760,146),n.lineTo(860,150),n.lineTo(960,70),n.lineTo(930,160),n.lineTo(990,250),n.lineTo(860,170),n.lineTo(760,176),n.bezierCurveTo(600,204,420,222,260,224),n.bezierCurveTo(120,226,40,210,40,160),n}function ry(n,t="sea"){const e=iy(),i=t==="plate",r=n.createLinearGradient(0,90,0,230);i?(r.addColorStop(0,"#4f6f80"),r.addColorStop(.55,"#6f90a0"),r.addColorStop(1,"#d8e4e6")):(r.addColorStop(0,"#2b4a5c"),r.addColorStop(.55,"#38627a"),r.addColorStop(1,"#a9c3cc")),n.fillStyle=r,n.fill(e),n.fillStyle=i?"#557686":"#2f566b",n.beginPath(),n.moveTo(470,106),n.lineTo(560,40),n.lineTo(600,112),n.fill(),n.beginPath(),n.moveTo(300,200),n.lineTo(370,290),n.lineTo(410,210),n.fill(),n.save(),n.clip(e);const s=Ye(3);n.fillStyle=i?"rgba(255,255,255,0.9)":"rgba(232,242,240,0.85)";for(let o=0;o<260;o++){const a=80+s()*700,c=100+s()*90,l=2+s()*5;n.beginPath(),n.arc(a,c,l,0,6.28),n.fill()}n.strokeStyle=i?"rgba(255,255,255,0.6)":"rgba(232,242,240,0.5)",n.lineWidth=3;for(let o=0;o<9;o++){const a=180+o*70;n.beginPath(),n.moveTo(a,100),n.lineTo(a+10,200),n.stroke()}if(i){const o=n.createLinearGradient(0,96,0,150);o.addColorStop(0,"rgba(40,70,85,0.35)"),o.addColorStop(1,"rgba(40,70,85,0)"),n.fillStyle=o,n.fillRect(0,90,1e3,70)}n.restore(),i&&(n.strokeStyle="rgba(60,50,40,0.75)",n.lineWidth=1.6,n.stroke(e)),n.fillStyle=i?"#30434c":"#132a36",n.fillRect(48,172,70,4)}function sy(){const n=document.createElement("canvas");n.width=960,n.height=720;const t=n.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,960,720),t.save(),t.translate(60,230),t.scale(.85,.85),ry(t,"plate"),t.restore();const e=Ye(12);t.fillStyle="rgba(80,110,120,0.5)";for(let i=0;i<40;i++)t.beginPath(),t.arc(80+e()*800,120+e()*520,1+e()*1.5,0,6.28),t.fill();return n.toDataURL("image/png")}const l0={often:"Often seen",sometimes:"Sometimes",rare:"Lucky day",above:"Above water"};function oy(n){for(const c of br)!c.img&&c.art==="whaleshark"&&(c.img=sy());const t=document.getElementById("species"),e=document.getElementById("species-dialog"),i=e.querySelector(".species-dialog-body");t.innerHTML=br.map((c,l)=>`
    <button class="sp reveal" type="button" data-i="${l}" data-group="${c.group}" aria-haspopup="dialog">
      <div class="sp-art">${c.img?`<img src="${c.img}" alt="${c.alt}" loading="lazy" width="960" height="720" />`:""}</div>
      <div class="sp-meta"><h3>${c.name}</h3><span class="odds odds-${c.odds}">${l0[c.odds]}</span></div>
      <p class="sp-sci">${c.sci}</p>
      <p class="sp-hand">${c.hand}</p>
    </button>`).join("");const r=[{label:"Above the water",note:"cliffs and fig canopy",ids:["seaeagle","swiftlet","pigeon"]},{label:"Surface and open blue",note:"passing visitors",ids:["whaleshark","turtle","ray"]},{label:"Reef, about 8–15 m",note:"where most dives go",ids:["butterflyfish","triggerfish","parrotfish","wrasse","barracuda"]},{label:"Crevices and rock",note:"look into the gaps",ids:["moray","giantclam"]}],s=Object.fromEntries(br.map((c,l)=>[c.id,l]));document.getElementById("ladder").innerHTML=r.map((c,l)=>`
    <div class="zone zone-${l}"><div class="zone-label"><b>${c.label}</b><span>${c.note}</span></div>
      <div class="zone-row">${c.ids.filter(u=>u in s).map(u=>`<button type="button" class="zone-sp" data-i="${s[u]}" title="${br[s[u]].name}"><img src="${br[s[u]].img}" alt="" loading="lazy"/></button>`).join("")}</div></div>`).join(""),document.getElementById("ladder").addEventListener("click",c=>{const l=c.target.closest(".zone-sp");l&&o(+l.dataset.i)}),t.addEventListener("click",c=>{const l=c.target.closest(".sp");l&&o(+l.dataset.i)});function o(c){var u;const l=br[c];i.innerHTML=`
      <div>${l.img?`<img src="${l.img}" alt="${l.alt}" width="960" height="720" />`:""}</div>
      <div>
        <span class="odds odds-${l.odds}">${l0[l.odds]}</span>
        <h3>${l.name}</h3>
        <p class="sp-sci">${l.sci}</p>
        <p>${l.about}</p>
        <dl>
          <div><dt>Where to look</dt><dd>${l.where}</dd></div>
          <div><dt>Good manners</dt><dd>${l.manners}</dd></div>
        </dl>
        <p class="sp-hand" style="margin-top:16px">${l.hand}</p>
        ${(u=l.src)!=null&&u.length?`<p class="tl-src">Sources: ${l.src.map(f=>`<a href="${lr[f].url}" target="_blank" rel="noopener">${lr[f].short}</a>`).join(", ")}</p>`:""}
      </div>`,e.showModal(),n==null||n.blip()}e.addEventListener("click",c=>{c.target===e&&e.close()});const a=[...document.querySelectorAll(".chips button")];a.forEach(c=>c.addEventListener("click",()=>{a.forEach(u=>u.setAttribute("aria-selected",String(u===c)));const l=c.dataset.filter;t.querySelectorAll(".sp").forEach(u=>{u.hidden=!(l==="all"||u.dataset.group===l)})}))}const In=30,c0=[{name:"red",k:.4,col:"#e5412f"},{name:"orange",k:.22,col:"#f08a24"},{name:"yellow",k:.1,col:"#f2cf3a"},{name:"green",k:.07,col:"#4cb35a"},{name:"blue",k:.06,col:"#2f7fd8"}],Ke=(n,t)=>[n[0]*Math.exp(-.3*t),n[1]*Math.exp(-.075*t),n[2]*Math.exp(-.06*t)],fn=(n,t=1)=>`rgba(${n[0]|0},${n[1]|0},${n[2]|0},${t})`,ay=[118,206,212],Nl=[5,24,40],ly=n=>{const t=Ke(ay,n*.9);return[Nl[0]+t[0],Nl[1]+t[1],Nl[2]+t[2]]};function cy(){const n=document.getElementById("lab-canvas"),t=n.getContext("2d"),e=document.getElementById("lab-depth"),i=document.getElementById("lab-depth-out"),r=document.getElementById("lab-bar"),s=document.getElementById("lab-vol"),o=document.getElementById("lab-tank"),a=document.getElementById("lab-insight"),c=document.getElementById("lab-torch"),l=document.getElementById("spec-bars"),u=document.getElementById("spec-path");let f=0,d=0,h=1,m=0,v=0,g=0,p=!1,y=!1,x=!1;const _=Ye(31);let w=0,S=0,E=()=>0,C=null;const M=rt=>w+rt/In*S,b=rt=>(rt-w)/S*In,T=Array.from({length:64},()=>_());function I(){h=Math.min(devicePixelRatio||1,2),f=n.clientWidth,d=n.clientHeight,n.width=Math.round(f*h),n.height=Math.round(d*h),w=d*.085,S=d-w-d*.035,E=rt=>{const Y=rt/In,St=Math.min(63,Y*63|0);return f*(.86-.17*Math.pow(Y,.8))+(T[St]-.5)*f*.03},C=O()}function O(){const rt=document.createElement("canvas");rt.width=Math.round(f*h),rt.height=Math.round(d*h);const Y=rt.getContext("2d");Y.setTransform(h,0,0,h,0,0);const St=Y.createLinearGradient(0,0,0,w);St.addColorStop(0,"#f6e6c8"),St.addColorStop(1,"#fbeedb"),Y.fillStyle=St,Y.fillRect(0,0,f,w+2);const J=Y.createLinearGradient(0,w,0,M(In));for(let B=0;B<=In;B+=1)J.addColorStop(B/In,fn(ly(B)));Y.fillStyle=J,Y.fillRect(0,w,f,d-w);const Ct=new Path2D;Ct.moveTo(f,M(.6));for(let B=.6;B<=In;B+=.5)Ct.lineTo(E(B),M(B));Ct.lineTo(f,d),Ct.closePath();const wt=Y.createLinearGradient(0,w,0,d);for(let B=0;B<=In;B+=2)wt.addColorStop(B/In,fn(Ke([150,128,104],B+1.5)));Y.fillStyle=wt,Y.fill(Ct),Y.save(),Y.clip(Ct);for(let B=0;B<900;B++){const _t=_()*In,Et=E(_t)+_()*f*.2,ot=M(_t),ct=1+_()*3;Y.fillStyle=fn(Ke(_()<.5?[90,80,70]:[200,180,150],_t+1.5),.35),Y.beginPath(),Y.ellipse(Et,ot,ct*1.6,ct,0,0,6.28),Y.fill()}Y.restore(),Y.strokeStyle="rgba(10,20,25,0.35)",Y.lineWidth=1.2,Y.stroke(Ct);const Ot=new Path2D;Ot.moveTo(0,d),Ot.lineTo(0,M(28.6));for(let B=0;B<=40;B++){const _t=B/40*f;Ot.lineTo(_t,M(28.6+Math.sin(B*.9)*.25+B%3*.1))}Ot.lineTo(f,d),Ot.closePath(),Y.fillStyle=fn(Ke([214,196,158],30)),Y.fill(Ot),Y.font='500 10.5px "JetBrains Mono", monospace',Y.textBaseline="middle";for(let B=0;B<=In;B++){const _t=M(B),Et=B%5===0;Y.strokeStyle=`rgba(235,250,248,${Et?.7:.3})`,Y.lineWidth=1,Y.beginPath(),Y.moveTo(14,_t),Y.lineTo(Et?30:22,_t),Y.stroke(),Et&&(Y.fillStyle="rgba(240,252,250,0.85)",Y.fillText(`${B} m`,36,_t),Y.fillStyle="rgba(240,252,250,0.5)",Y.fillText(`${(1+B/10).toFixed(1)} bar`,36,_t+13))}return rt}const z=[];(function rt(Y,St,J,Ct,wt,Ot){const B=Y+Math.cos(J)*Ct,_t=St+Math.sin(J)*Ct;if(z.push([Y,St,B,_t,wt]),!(Ot>5))for(let Et=0;Et<2;Et++)rt(B,_t,J+(Et?.42:-.42)+(_()-.5)*.4,Ct*.76,wt*.7,Ot+1)})(0,0,-Math.PI/2-.35,.26,.05,0);const F=[2.2,9,17,25.5],U=[[5.5,[242,205,70]],[13,[242,205,70]],[21.5,[242,205,70]]],k=[[11,[160,92,196]],[19.5,[160,92,196]],[27.5,[160,92,196]]],D=Array.from({length:14},()=>({ox:_()*2-1,oy:_()*2-1,ph:_()*6.28,sp:.6+_()*.5})),H=[];let G=1.2;function W(rt,Y){const St=E(rt)+4,J=M(rt),Ct=Math.min(f,d)*.085,wt=Y?Ke([214,60,44],1.5):Ke([214,60,44],rt+1.5);t.save(),t.translate(St,J),t.scale(-1,1),t.rotate(.15),t.lineCap="round",t.strokeStyle=fn(wt);const Ot=Math.sin(g*.9+rt)*.03;for(const[B,_t,Et,ot,ct]of z)t.lineWidth=Math.max(.8,ct*Ct),t.beginPath(),t.moveTo(B*Ct+_t*Ct*Ot,_t*Ct),t.lineTo(Et*Ct+ot*Ct*Ot,ot*Ct),t.stroke();t.restore()}function X(rt,Y,St){const J=E(rt)-2,Ct=M(rt),wt=Math.min(f,d)*.018,Ot=St?Ke(Y,1.5):Ke(Y,rt+1.5);for(let B=0;B<4;B++)t.fillStyle=fn(Ot),t.beginPath(),t.roundRect(J-B*wt*1.3-wt,Ct-wt*(2.4+B%2),wt*1.05,wt*(2.4+B%2),wt*.5),t.fill(),t.fillStyle="rgba(0,0,0,0.35)",t.beginPath(),t.ellipse(J-B*wt*1.3-wt*.47,Ct-wt*(2.4+B%2)+2,wt*.3,wt*.18,0,0,6.28),t.fill()}function st(rt,Y,St){const J=E(rt)+2,Ct=M(rt),wt=Math.min(f,d)*.05,Ot=St?Ke(Y,1.5):Ke(Y,rt+1.5);t.save(),t.translate(J,Ct),t.strokeStyle=fn(Ot),t.lineCap="round";for(let B=0;B<9;B++){const _t=-Math.PI/2-.9+B*.22+Math.sin(g+B)*.05;t.lineWidth=3,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(Math.cos(_t)*wt*.4,Math.sin(_t)*wt*.6,Math.cos(_t)*wt,Math.sin(_t)*wt),t.stroke()}t.restore()}function lt(rt){F.forEach(Y=>W(Y,rt)),U.forEach(([Y,St])=>X(Y,St,rt)),k.forEach(([Y,St])=>st(Y,St,rt))}function V(rt,Y,St,J){const Ct=St+1,wt=fn(Ke([28,40,58],Ct)),Ot=fn(Ke([214,58,44],Ct)),B=fn(Ke([214,58,44],Ct)),_t=fn(Ke([242,196,40],Ct)),Et=fn(Ke([176,120,92],Ct)),ot=fn(Ke([20,26,32],Ct));t.save(),t.translate(rt,Y),t.rotate(-.08),t.lineCap="round",t.lineJoin="round";for(const[ct,ut]of[[1,0],[-1,Math.PI]]){const Ut=Math.sin(g*3.2+ut)*.22;t.save(),t.translate(-.12*J,.03*J*ct),t.rotate(Ut*.6),t.strokeStyle=wt,t.lineWidth=.09*J,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(-.2*J,.03*J,-.36*J,.01*J),t.stroke(),t.translate(-.36*J,.01*J),t.rotate(Ut),t.fillStyle=B,t.beginPath(),t.moveTo(0,-.03*J),t.lineTo(-.26*J,-.07*J),t.lineTo(-.28*J,.06*J),t.lineTo(0,.04*J),t.closePath(),t.fill(),t.restore()}return t.fillStyle=wt,t.beginPath(),t.ellipse(.06*J,0,.21*J,.075*J,0,0,6.28),t.fill(),t.fillStyle=Ot,t.fillRect(-.08*J,.025*J,.26*J,.018*J),t.fillStyle=ot,t.beginPath(),t.roundRect(-.02*J,-.1*J,.24*J,.07*J,.03*J),t.fill(),t.fillStyle=_t,t.beginPath(),t.roundRect(-.06*J,-.16*J,.32*J,.075*J,.035*J),t.fill(),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(-.03*J,-.152*J,.26*J,.012*J),t.strokeStyle=wt,t.lineWidth=.06*J,t.beginPath(),t.moveTo(.18*J,.01*J),t.quadraticCurveTo(.3*J,.06*J,.4*J,.05*J),t.stroke(),t.fillStyle=fn(Ke([60,64,70],Ct)),t.beginPath(),t.roundRect(.39*J,.03*J,.1*J,.035*J,.01*J),t.fill(),t.fillStyle=wt,t.beginPath(),t.arc(.32*J,-.045*J,.065*J,0,6.28),t.fill(),t.fillStyle=Et,t.beginPath(),t.arc(.35*J,-.03*J,.035*J,0,6.28),t.fill(),t.fillStyle=fn(Ke([150,210,230],Ct),.9),t.strokeStyle=ot,t.lineWidth=.012*J,t.beginPath(),t.roundRect(.33*J,-.08*J,.07*J,.045*J,.012*J),t.fill(),t.stroke(),t.fillStyle="rgba(255,255,255,0.7)",t.fillRect(.345*J,-.073*J,.018*J,.01*J),t.fillStyle=ot,t.beginPath(),t.arc(.39*J,0,.022*J,0,6.28),t.fill(),t.strokeStyle=ot,t.lineWidth=.014*J,t.beginPath(),t.moveTo(.38*J,.01*J),t.quadraticCurveTo(.3*J,-.17*J,.22*J,-.13*J),t.stroke(),t.restore(),{mouthX:rt+.39*J,mouthY:Y-.03*J,torchX:rt+.49*J,torchY:Y+.02*J,handX:rt+.4*J,handY:Y+.05*J}}const nt=(rt,Y)=>{v=ie(rt,0,In),Y||(e.value=String(Math.round(v*2)/2))};e.addEventListener("input",()=>nt(parseFloat(e.value),!0));const ft=rt=>{const Y=n.getBoundingClientRect();nt(b(rt.clientY-Y.top),!1)};n.addEventListener("pointerdown",rt=>{y=!0,n.setPointerCapture(rt.pointerId),ft(rt),n.classList.add("is-grab")}),n.addEventListener("pointermove",rt=>y&&ft(rt));const bt=()=>{y=!1,n.classList.remove("is-grab")};n.addEventListener("pointerup",bt),n.addEventListener("pointercancel",bt),c.addEventListener("click",()=>{x=!x,c.setAttribute("aria-pressed",String(x))}),new IntersectionObserver(([rt])=>p=rt.isIntersecting).observe(n),addEventListener("resize",I),I();const Ft="http://www.w3.org/2000/svg",xt=(rt,Y,St)=>{const J=document.createElementNS(Ft,rt);for(const Ct in Y)J.setAttribute(Ct,Y[Ct]);return St.append(J),J},zt=document.getElementById("inst-gauge"),at=-210*Math.PI/180,R=30*Math.PI/180,q=rt=>at+(rt-1)/3*(R-at),Z=(rt,Y)=>[60+Math.cos(rt)*Y,64+Math.sin(rt)*Y];xt("path",{d:`M${Z(at,46).join(" ")} A46 46 0 1 1 ${Z(R,46).join(" ")}`,fill:"none",stroke:"rgba(217,236,234,0.25)","stroke-width":7,"stroke-linecap":"round"},zt);const et=xt("path",{fill:"none",stroke:"#f2a65a","stroke-width":7,"stroke-linecap":"round"},zt);for(let rt=1;rt<=4.001;rt+=.5){const Y=q(rt),[St,J]=Z(Y,36),[Ct,wt]=Z(Y,rt%1===0?29:32);if(xt("line",{x1:St,y1:J,x2:Ct,y2:wt,stroke:"rgba(217,236,234,0.7)","stroke-width":1.4},zt),rt%1===0){const[Ot,B]=Z(Y,21),_t=xt("text",{x:Ot,y:B+3.5,"text-anchor":"middle",fill:"rgba(217,236,234,0.75)","font-size":9,"font-family":"JetBrains Mono, monospace"},zt);_t.textContent=rt}}const K=xt("line",{x1:60,y1:64,x2:60,y2:24,stroke:"#fff6ea","stroke-width":2.2,"stroke-linecap":"round"},zt);xt("circle",{cx:60,cy:64,r:4.5,fill:"#fff6ea"},zt);const mt=document.getElementById("inst-breath");xt("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"rgba(217,236,234,0.5)","stroke-dasharray":"3 5"},mt);const gt=xt("circle",{cx:60,cy:60,r:44,fill:"rgba(160,225,235,0.35)",stroke:"#bfeff2","stroke-width":1.5},mt),Mt=xt("circle",{cx:46,cy:46,r:8,fill:"rgba(255,255,255,0.6)"},mt),vt=document.getElementById("inst-tank");xt("rect",{x:40,y:22,width:40,height:86,rx:18,fill:"none",stroke:"rgba(217,236,234,0.6)","stroke-width":1.6},vt),xt("rect",{x:54,y:10,width:12,height:13,rx:2,fill:"rgba(217,236,234,0.6)"},vt);const At="tankclip",N=xt("defs",{},vt),A=xt("clipPath",{id:At},N);xt("rect",{x:41,y:23,width:38,height:84,rx:17},A);const j=xt("rect",{x:41,y:23,width:38,height:84,fill:"#f2c228","clip-path":`url(#${At})`},vt);l.innerHTML=c0.map(rt=>`<div class="spec"><i style="--c:${rt.col}"></i><b>100%</b><span>${rt.name}</span></div>`).join("");const tt=[...l.querySelectorAll(".spec")];function yt(rt){const Y=1+rt/10,St=Math.round(100/Y),J=[];return rt<.5?J.push("At the surface the whole atmosphere already presses on you: <em>1 bar</em>."):rt<=10?J.push(`Just ${rt.toFixed(0)} m of seawater adds ${(rt/10).toFixed(1)} bar. Air from the surface now fills only <em>${St}%</em> of its space, so most of the squeeze happens near the top. That is why you equalise your ears early and often.`):rt<=20?J.push(`From 10 m to ${rt.toFixed(0)} m your air only shrinks from 50% to <em>${St}%</em>. The squeeze feels gentler deeper down, even though the pressure keeps rising.`):J.push(`Every breath now holds <em>${Y.toFixed(1)}×</em> as much air as at the surface, so a tank that would last an hour up top lasts about ${Math.round(60/Y)} minutes here.`),rt>=2.5&&rt<9?J.push("Look at the red sea fans: the deeper ones have already turned brown."):rt>=9&&rt<18?J.push("Red has gone and orange is fading, but yellow still shows."):rt>=18&&J.push("Only greens and blues are left. <em>Switch on the torch</em> and the reds come back: the colour was there all along."),rt>2&&J.push("Watch the bubbles grow on their way up."),J.join(" ")}let ht="";function Gt(rt){const Y=1+rt/10,St=1/Y;i.textContent=`${rt.toFixed(rt<10?1:0)} m`,r.textContent=`${Y.toFixed(1)} bar`,s.textContent=`${Math.round(St*100)}%`,o.textContent=`${Math.round(60/Y)} min`;const J=q(Y),[Ct,wt]=Z(J,40);K.setAttribute("x2",Ct.toFixed(1)),K.setAttribute("y2",wt.toFixed(1)),et.setAttribute("d",Y>1.01?`M${Z(at,46).join(" ")} A46 46 0 ${J-at>Math.PI?1:0} 1 ${Z(J,46).map(ot=>ot.toFixed(1)).join(" ")}`:"");const Ot=44*Math.cbrt(St);gt.setAttribute("r",Ot.toFixed(1)),Mt.setAttribute("cx",(60-Ot*.32).toFixed(1)),Mt.setAttribute("cy",(60-Ot*.32).toFixed(1)),Mt.setAttribute("r",(Ot*.18).toFixed(1));const B=84*St;j.setAttribute("y",(107-B).toFixed(1)),j.setAttribute("height",B.toFixed(1));const _t=rt+2;u.textContent=`${_t.toFixed(rt<10?1:0)} m`,c0.forEach((ot,ct)=>{const ut=Math.exp(-ot.k*_t);tt[ct].style.setProperty("--v",ut.toFixed(3)),tt[ct].querySelector("b").textContent=`${ut<.01?"<1":Math.round(ut*100)}%`});const Et=yt(Math.round(rt));Et!==ht&&(a.innerHTML=Et,ht=Et)}function Pt(rt){m+=(v-m)*Math.min(1,rt*5);const Y=m,St=1+Y/10;Gt(Y),t.setTransform(h,0,0,h,0,0),t.drawImage(C,0,0,f,d),t.fillStyle="rgba(255,214,150,0.9)",t.beginPath(),t.arc(f*.82,w*.55,w*.32,0,6.28),t.fill(),t.save(),t.globalCompositeOperation="lighter";for(let Rt=0;Rt<7;Rt++){const Wt=f*(.08+Rt*.12)+Math.sin(g*.25+Rt*1.7)*18,Kt=.07*(.6+.4*Math.sin(g*.6+Rt*2.1)),Me=t.createLinearGradient(0,w,0,M(16));Me.addColorStop(0,`rgba(210,255,248,${Kt})`),Me.addColorStop(1,"rgba(210,255,248,0)"),t.fillStyle=Me,t.beginPath(),t.moveTo(Wt-10,w),t.lineTo(Wt+12,w),t.lineTo(Wt+70,M(16)),t.lineTo(Wt-22,M(16)),t.fill()}t.restore(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=2,t.beginPath();for(let Rt=0;Rt<=60;Rt++){const Wt=Rt/60*f,Kt=w+Math.sin(Rt*.7+g*1.6)*2.2+Math.sin(Rt*.23-g)*1.4;Rt?t.lineTo(Wt,Kt):t.moveTo(Wt,Kt)}t.stroke();const J=f*.2;t.fillStyle="rgba(14,30,38,0.75)",t.beginPath(),t.moveTo(J-60,w-2),t.lineTo(J+58,w-2),t.quadraticCurveTo(J+40,w+12,J-46,w+11),t.closePath(),t.fill(),t.strokeStyle="rgba(220,240,240,0.35)",t.lineWidth=1,t.setLineDash([3,4]),t.beginPath(),t.moveTo(J+40,w+6),t.quadraticCurveTo(J+30,M(15),J+70,M(28.6)),t.stroke(),t.setLineDash([]),lt(!1);const Ct=f*.45,wt=M(Y);for(const Rt of D){const Wt=Ct+f*.1+Math.cos(g*Rt.sp+Rt.ph)*f*.12+Rt.ox*20,Kt=wt-50+Math.sin(g*Rt.sp*1.3+Rt.ph)*26+Rt.oy*18,Me=ie(b(Kt),0,In),Fe=Ke([240,200,50],Me+1.5),bn=Math.cos(g*Rt.sp+Rt.ph+Math.PI/2)>0?-1:1;t.save(),t.translate(Wt,Kt),t.scale(bn,1),t.fillStyle=fn(Fe),t.beginPath(),t.ellipse(0,0,7,3.4,0,0,6.28),t.fill(),t.beginPath(),t.moveTo(-6,0),t.lineTo(-11,-3.5),t.lineTo(-11,3.5),t.fill(),t.restore()}const Ot=Math.min(f,d)*.29,B=V(Ct,wt+Math.sin(g*1.1)*3,Y,Ot);if(x){const Rt=B.torchX,Wt=B.torchY,Kt=E(Y)-Rt+40,Me=new Path2D;Me.moveTo(Rt,Wt),Me.lineTo(Rt+Kt,Wt-Kt*.32),Me.lineTo(Rt+Kt,Wt+Kt*.32),Me.closePath(),t.save(),t.clip(Me);const Fe=t.createRadialGradient(Rt,Wt,2,Rt,Wt,Kt);Fe.addColorStop(0,"rgba(255,244,214,0.55)"),Fe.addColorStop(1,"rgba(255,244,214,0.06)"),t.fillStyle=Fe,t.fillRect(Rt,Wt-Kt,Kt+60,Kt*2),lt(!0),t.restore()}const _t=Math.min(f,d)*.07,Et=_t*Math.cbrt(1/St),ot=B.handX-Ot*.05,ct=wt-Ot*.42;t.strokeStyle="rgba(230,248,248,0.5)",t.lineWidth=1,t.beginPath(),t.moveTo(B.handX,B.handY),t.quadraticCurveTo(ot+10,ct+Et+20,ot,ct+Et),t.stroke(),t.setLineDash([3,4]),t.strokeStyle="rgba(230,248,248,0.55)",t.beginPath(),t.arc(ot,ct,_t,0,6.28),t.stroke(),t.setLineDash([]);const ut=t.createRadialGradient(ot-Et*.35,ct-Et*.4,Et*.1,ot,ct,Et);if(ut.addColorStop(0,"rgba(255,255,255,0.85)"),ut.addColorStop(.5,"rgba(190,240,245,0.35)"),ut.addColorStop(1,"rgba(160,225,235,0.55)"),t.fillStyle=ut,t.beginPath(),t.arc(ot,ct,Et,0,6.28),t.fill(),t.fillStyle="#fff",t.font=`600 ${Math.max(11,Et*.42)}px "JetBrains Mono", monospace`,t.textAlign="center",t.textBaseline="middle",t.fillText(`${Math.round(100/St)}%`,ot,ct),t.font="19px Caveat, cursive",t.fillStyle="rgba(255,246,230,0.92)",t.fillText("one surface breath",ot,ct-_t-12),t.textAlign="start",G-=rt,G<=0&&Y>.6){G=3.4;for(let Rt=0;Rt<9;Rt++)H.push({d0:Y,d:Y,x:B.mouthX+(_()-.5)*6,r0:2+_()*3.5,ph:_()*6.28,delay:Rt*.07})}for(let Rt=H.length-1;Rt>=0;Rt--){const Wt=H[Rt];if(Wt.delay>0){Wt.delay-=rt;continue}if(Wt.d-=rt*(1.6+Wt.r0*.25),Wt.d<=0){H.splice(Rt,1);continue}const Kt=Math.cbrt((1+Wt.d0/10)/(1+Wt.d/10)),Me=Wt.r0*Kt,Fe=Wt.x+Math.sin(g*3+Wt.ph)*3+(Wt.d0-Wt.d)*1.2,bn=M(Wt.d);t.strokeStyle="rgba(225,250,252,0.85)",t.lineWidth=1.2,t.beginPath(),t.arc(Fe,bn,Me,0,6.28),t.stroke(),t.fillStyle="rgba(255,255,255,0.55)",t.beginPath(),t.arc(Fe-Me*.35,bn-Me*.35,Me*.28,0,6.28),t.fill()}const Ut=M(Y);t.setLineDash([2,5]),t.strokeStyle="rgba(242,166,90,0.75)",t.lineWidth=1,t.beginPath(),t.moveTo(130,Ut),t.lineTo(Ct-Ot*.7,Ut),t.stroke(),t.setLineDash([]),t.fillStyle="#f2a65a",t.beginPath(),t.roundRect(8,Ut-13,120,26,13),t.fill(),t.fillStyle="#2a1a0c",t.font='600 12px "JetBrains Mono", monospace',t.textBaseline="middle",t.fillText(`${Y.toFixed(1)} m · ${St.toFixed(2)} bar`,18,Ut),t.font="20px Caveat, cursive",t.fillStyle="rgba(255,246,230,0.9)",t.textAlign="right",t.fillText("the same red sea fan,",E(2.2)-30,M(3.6)),t.fillText("at four depths",E(2.2)-30,M(4.6)),t.textAlign="start"}let Vt=performance.now();(function rt(Y){const St=Math.min(.1,(Y-Vt)/1e3);Vt=Y,g+=St,p&&Pt(St),requestAnimationFrame(rt)})(Vt),Pt(.016),addEventListener("keydown",rt=>{p&&(rt.key==="t"||rt.key==="T")&&!rt.target.closest("input, textarea")&&c.click()})}const uy={legend:"Murudeshwar lies about 19 km to the east-north-east; the Atmalinga story belongs to the mainland temple.",caves:"Sea caves along the cliffs: the 1908 account of pigeons, and swiftlets that nest in a cave.",reef:"The reef surveyed around the island: most dives were made at 8 to 15 m.",eagles:"White-bellied sea eagles nest in the fig trees on top of the island: 25 nests counted in 2008.",navy:"The Navy says its target is a rock about 1 km from the island. The exact spot is not published, so it is shown as a ring.",fishing:"The water around Netrani is also a fishing ground for boats from the coast.",divers:"Dive boats anchor off the reef; nobody needs to land.",today:"Visits are by boat from Murudeshwar, and the district closes the sea to water sports every monsoon."};function hy(){const n=document.getElementById("timeline");n.innerHTML=zf.map((i,r)=>{var s;return`
    <li class="tl${i.kind==="legend"?" legend":""}" data-i="${r}" data-map="${i.map||""}">
      <div class="tl-when">${i.when}</div>
      <div>
        <span class="tl-tag">${i.kind==="legend"?"Mainland legend":i.kind==="now"?"Now":"Documented"}</span>
        <h3>${i.title}</h3>
        <p>${i.body}</p>
        ${(s=i.src)!=null&&s.length?`<p class="tl-src">Source: ${i.src.map(o=>`<a href="${lr[o].url}" target="_blank" rel="noopener">${lr[o].short}</a>`).join(", ")}</p>`:""}
      </div>
    </li>`}).join(""),document.getElementById("sources").innerHTML=Object.values(lr).map(i=>`<li><a href="${i.url}" target="_blank" rel="noopener">${i.title}</a></li>`).join(""),fy();const t=[...n.querySelectorAll(".tl")],e=new IntersectionObserver(i=>{for(const r of i)r.isIntersecting&&u0(r.target.dataset.map,r.target)},{rootMargin:"-45% 0px -45% 0px"});t.forEach(i=>e.observe(i)),u0("legend",t[0])}let Aa;function u0(n,t){Aa&&(Aa.querySelectorAll("[data-layer]").forEach(e=>e.classList.toggle("is-on",e.dataset.layer===n)),document.getElementById("chron-cap").textContent=uy[n]||"",document.querySelectorAll(".tl.is-current").forEach(e=>e.classList.remove("is-current")),t==null||t.classList.add("is-current"))}function fy(){Aa=document.getElementById("chron-svg");const n=u=>"M"+u.map(([f,d])=>`${f.toFixed(0)} ${(-d).toFixed(0)}`).join(" L")+"Z",t=(u,f)=>{let d=0,h=0;for(const[m,v]of u)d+=m,h+=v;return d/=u.length,h/=u.length,u.map(([m,v])=>{const g=m-d,p=v-h,y=Math.hypot(g,p)||1;return[m+g/y*f,v+p/y*f]})},e=n(_n.island),i=n(_n.islet),r=Math.atan2(-8490,_n.poi.temple[0]),s=Math.cos(r)*1250,o=Math.sin(r)*1250,a=[40,90,150,220].map((u,f)=>`<path d="${n(t(_n.island,u))}" fill="none" stroke="rgba(46,110,128,${.28-f*.05})" stroke-width="5"/>`).join(""),c=[[-700,300],[650,520],[-420,-760],[880,-300]].map(([u,f],d)=>`<g transform="translate(${u} ${f}) rotate(${d*70})"><path d="M-40 0 Q-10 -16 40 0 Q-10 16 -40 0Z" fill="#c4512f"/></g>`).join(""),l=[[-120,520],[420,300],[-380,-40],[260,-560]].map(([u,f])=>`<g transform="translate(${u} ${f})"><rect x="0" y="-60" width="8" height="70" fill="#1d2729"/><rect x="8" y="-60" width="60" height="40" fill="#c4512f"/><path d="M8 -60 L68 -20" stroke="#fff" stroke-width="9"/></g>`).join("");Aa.innerHTML=`
    <defs>
      <radialGradient id="cm-sea" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#d7e6e2"/><stop offset="1" stop-color="#efe6d2"/></radialGradient>
      <pattern id="cm-hatch" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="40" stroke="#2e6e80" stroke-width="7" opacity="0.45"/></pattern>
      <radialGradient id="cm-canopy" cx="45%" cy="40%" r="60%"><stop offset="0" stop-color="#3f6b2f"/><stop offset="1" stop-color="#7d9a4f"/></radialGradient>
    </defs>
    <circle r="1380" fill="url(#cm-sea)"/>
    ${a}
    <g data-layer="reef"><path d="${n(t(_n.island,220))}" fill="url(#cm-hatch)"/><path d="${n(t(_n.island,40))}" fill="#d7e6e2"/></g>
    <g data-layer="divers">${l}</g>
    <g data-layer="fishing">${c}</g>
    <g data-layer="navy"><circle r="1000" fill="none" stroke="#c4512f" stroke-width="10" stroke-dasharray="40 30"/><text x="0" y="-1040" text-anchor="middle" class="cm-t">≈ 1 km</text></g>
    <path d="${e}" fill="#a7b07a" stroke="#1d2729" stroke-width="9"/>
    <path d="${i}" fill="#b9a982" stroke="#1d2729" stroke-width="7"/>
    <g data-layer="eagles"><path d="${n(t(_n.island,-70))}" fill="url(#cm-canopy)" opacity="0.9"/><path d="M-60 -60 q60 -50 120 0 q-60 -20 -120 0z" fill="#f4efe4" stroke="#1d2729" stroke-width="5"/></g>
    <g data-layer="caves"><path d="${e}" fill="none" stroke="#c4512f" stroke-width="18" stroke-dasharray="6 26" stroke-linecap="round"/></g>
    <g data-layer="legend"><path d="M${(s*.35).toFixed(0)} ${(o*.35).toFixed(0)} L${s.toFixed(0)} ${o.toFixed(0)}" stroke="#1d2729" stroke-width="10" stroke-dasharray="30 20" marker-end="url(#cm-arrow)"/><text x="${(s*.62).toFixed(0)}" y="${(o*.62-40).toFixed(0)}" class="cm-t">Murudeshwar 19 km</text></g>
    <g data-layer="today"><path d="M${s.toFixed(0)} ${o.toFixed(0)} Q 700 300 120 520" fill="none" stroke="#c4512f" stroke-width="12" stroke-dasharray="34 22"/><path d="M80 500 q30 -14 70 0 q-30 14 -70 0z" fill="#1d2729"/></g>
    <g class="cm-static"><path d="M1180 -1180 l0 -120 m0 0 l-30 60 m30 -60 l30 60" stroke="#1d2729" stroke-width="10" fill="none"/><text x="1180" y="-1080" text-anchor="middle" class="cm-t">N</text>
      <path d="M-1250 1220 h500" stroke="#1d2729" stroke-width="12"/><text x="-1000" y="1180" text-anchor="middle" class="cm-t">500 m</text></g>
    <marker id="cm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#1d2729"/></marker>`}const Ko={good:{cls:"st-good",label:"Dive season",col:"#5f8a4a"},edge:{cls:"st-edge",label:"Shoulder month",col:"#d39b45"},closed:{cls:"st-closed",label:"Monsoon: boats stay ashore",col:"#c4512f"}};function dy(){const n=document.getElementById("wheel"),t=document.getElementById("season-detail"),e="http://www.w3.org/2000/svg",i=(p,y,x)=>{const _=document.createElementNS(e,p);for(const w in y)_.setAttribute(w,y[w]);return x==null||x.append(_),_},r=(p,y,x,_)=>{const w=(E,C)=>`${(Math.cos(C)*E).toFixed(2)} ${(Math.sin(C)*E).toFixed(2)}`,S=_-x>Math.PI?1:0;return`M${w(y,x)} A${y} ${y} 0 ${S} 1 ${w(y,_)} L${w(p,_)} A${p} ${p} 0 ${S} 0 ${w(p,x)}Z`};i("circle",{r:196,fill:"none",stroke:"rgba(29,39,41,0.18)","stroke-dasharray":"2 6"},n);const s=ho.map((p,y)=>{const x=-Math.PI/2+y/12*Math.PI*2+.012,_=-Math.PI/2+(y+1)/12*Math.PI*2-.012,w=i("g",{class:"m",tabindex:"0",role:"button","aria-label":`${p.name}: ${Ko[p.status].label}`},n);i("path",{d:r(78,186,x,_),fill:Ko[p.status].col,opacity:p.status==="closed"?.5:.88},w);const S=(x+_)/2,E=i("text",{x:(Math.cos(S)*140).toFixed(1),y:(Math.sin(S)*140+4).toFixed(1),"text-anchor":"middle",fill:"#fff"},w);return E.textContent=p.short.toUpperCase(),w.addEventListener("click",()=>f(y)),w.addEventListener("keydown",C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),f(y)),(C.key==="ArrowRight"||C.key==="ArrowDown")&&(C.preventDefault(),f((y+1)%12,!0)),(C.key==="ArrowLeft"||C.key==="ArrowUp")&&(C.preventDefault(),f((y+11)%12,!0))}),w}),o=i("line",{x1:0,y1:0,x2:0,y2:-52,stroke:"#1d2729","stroke-width":2,"stroke-linecap":"round",style:"transition: transform 0.5s cubic-bezier(.2,.8,.2,1)"},n);i("circle",{r:70,fill:"#f6f0e3",stroke:"rgba(29,39,41,0.15)"},n),n.append(o),i("circle",{r:5,fill:"#1d2729"},n);const a=i("g",{},n);[["in season","#5f8a4a"],["shoulder","#d39b45"],["monsoon ban","#c4512f"]].forEach(([p,y],x)=>{i("rect",{x:-38,y:12+x*13,width:8,height:8,rx:2,fill:y},a);const _=i("text",{x:-26,y:19.5+x*13,fill:"#3c4645",style:"font-size:9px"},a);_.textContent=p});let c=!1;const l=p=>{const y=n.getBoundingClientRect(),x=p.clientX-(y.left+y.width/2),_=p.clientY-(y.top+y.height/2);let w=Math.atan2(_,x)+Math.PI/2;w<0&&(w+=Math.PI*2),f(Math.floor(w/(Math.PI*2)*12)%12)};n.addEventListener("pointerdown",p=>{c=!0,n.setPointerCapture(p.pointerId),l(p)}),n.addEventListener("pointermove",p=>c&&l(p)),n.addEventListener("pointerup",()=>c=!1);let u=-1;function f(p,y){if(p===u)return;u=p;const x=ho[p],_=Ko[x.status];s.forEach((w,S)=>w.classList.toggle("is-on",S===p)),y&&s[p].focus(),o.style.transform=`rotate(${(p+.5)*30}deg)`,t.innerHTML=`
      <h3>${x.name}</h3>
      <span class="season-status ${_.cls}">${_.label}</span>
      <p>${x.note}</p>
      <dl class="season-facts">${Of.map(w=>`<div><dt>${w.k}</dt><dd><b>${w.v}</b> ${w.d} <a href="${lr[w.src].url}" target="_blank" rel="noopener" class="cite">${lr[w.src].short}</a></dd></div>`).join("")}</dl>`}const d=new Date().getMonth();f(ho[d].status==="closed"?10:d);const h=ho[d],m=Ko[h.status],v=py(new Date);document.getElementById("now-card").innerHTML=`
    <p class="now-k">Right now</p>
    <p class="now-m">${h.name}</p>
    <span class="season-status ${m.cls}">${m.label}</span>
    <p class="now-t">${h.note}</p>
    <dl class="now-sun"><div><dt>Sunrise</dt><dd>${h0(v.rise)}</dd></div><div><dt>Sunset</dt><dd>${h0(v.set)}</dd></div></dl>
    <p class="now-f">Sun times today at Murudeshwar, in Indian time, worked out from the sun's position. Dates and sea conditions change every year. The dive team confirms each trip.</p>`;const g=document.getElementById("day-line");g.style.setProperty("--n",Su.length),g.innerHTML=Su.map(p=>`<li><time>${p.time}</time><h4>${p.title}</h4><p>${p.text}</p></li>`).join(""),document.getElementById("getting").innerHTML=`<h3>Getting to Murudeshwar</h3><div class="ways">${kf.map(p=>`<div class="way"><span>${p.mode}</span><h4>${p.title}</h4><p>${p.text}</p></div>`).join("")}</div>`}function py(n,t=14.094,e=74.485){const i=new Date(n.getTime()+198e5),r=i.getUTCFullYear(),s=Math.floor((Date.UTC(r,i.getUTCMonth(),i.getUTCDate())-Date.UTC(r,0,0))/864e5),o=2*Math.PI/365*(s-1),a=229.18*(75e-6+.001868*Math.cos(o)-.032077*Math.sin(o)-.014615*Math.cos(2*o)-.040849*Math.sin(2*o)),c=.006918-.399912*Math.cos(o)+.070257*Math.sin(o)-.006758*Math.cos(2*o)+907e-6*Math.sin(2*o)-.002697*Math.cos(3*o)+.00148*Math.sin(3*o),l=Math.PI/180,u=Math.acos(Math.cos(90.833*l)/(Math.cos(t*l)*Math.cos(c))-Math.tan(t*l)*Math.tan(c))/l;return{rise:720-4*(e+u)-a+330,set:720-4*(e-u)-a+330}}function h0(n){const t=Math.round(n),e=Math.floor(t/60),i=t-e*60;return`${e%12||12}:${String(i).padStart(2,"0")} ${e<12?"am":"pm"}`}const my={try:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 27c4-5 8-5 12 0s8 5 12 0" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="23" cy="15" r="3" fill="currentColor"/><circle cx="30" cy="11" r="1.6" fill="none" stroke="currentColor"/><circle cx="33" cy="6" r="1.1" fill="none" stroke="currentColor"/>',fun:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 25c6-6 12 6 18 0 3-3 6-3 8 0" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 18l4-3 4 3-4 3z" fill="currentColor"/><path d="M27 31l3-2 3 2-3 2z" fill="currentColor"/>',course:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 19l11-5 11 5-11 5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 22v6c4 3 10 3 14 0v-6" fill="none" stroke="currentColor" stroke-width="1.6"/>',snorkel:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="12" y="19" width="16" height="8" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M31 30V12" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M8 31c5-3 10 3 15 0s10 3 15 0" fill="none" stroke="currentColor" stroke-width="1.2"/>',boat:'<circle cx="23" cy="23" r="21" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M11 26h24l-4 6H15z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M23 26V12l8 10h-8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 35c4-2 8 2 12 0s8 2 12 0 6 1 7 0" fill="none" stroke="currentColor" stroke-width="1.2"/>'};function gy(){const n=document.getElementById("experiences");let t=0;n.innerHTML=Va.map((h,m)=>`
    <button class="xp" type="button" role="radio" aria-checked="${m===0}" tabindex="${m===0?0:-1}" data-i="${m}">
      <svg class="xp-icon" viewBox="0 0 46 46" aria-hidden="true">${my[h.icon]}</svg>
      <h3>${h.title}</h3>
      <p>${h.text}</p>
      <span class="xp-meta">${h.meta}</span>
    </button>`).join("");const e=[...n.querySelectorAll(".xp")],i=(h,m)=>{t=h,e.forEach((v,g)=>{v.setAttribute("aria-checked",String(g===h)),v.tabIndex=g===h?0:-1}),m&&e[h].focus(),u()};e.forEach((h,m)=>{h.addEventListener("click",()=>i(m)),h.addEventListener("keydown",v=>{["ArrowRight","ArrowDown"].includes(v.key)&&(v.preventDefault(),i((m+1)%e.length,!0)),["ArrowLeft","ArrowUp"].includes(v.key)&&(v.preventDefault(),i((m+e.length-1)%e.length,!0))})});const r=document.getElementById("enquiry"),s=document.getElementById("preview"),o=document.getElementById("form-error"),a=r.elements.people;r.querySelectorAll("[data-step]").forEach(h=>h.addEventListener("click",()=>{a.value=String(Math.min(30,Math.max(1,(+a.value||1)+ +h.dataset.step))),u()}));const c=new Date;c.setMinutes(c.getMinutes()-c.getTimezoneOffset()),r.elements.date.min=c.toISOString().slice(0,10);function l(){const h=r.elements,m=Va[t],v=h.date.value?new Date(h.date.value+"T00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"flexible, please suggest";return["Hello! I found you through the Netrani Island guide.","",`I'd like to ask about: ${m.title}`,`Name: ${h.name.value.trim()||"—"}`,`Phone: ${h.phone.value.trim()||"—"}`,`Preferred date: ${v}`,`People: ${h.people.value||1}`,h.notes.value.trim()?`Notes: ${h.notes.value.trim()}`:null,"","Could you share availability, what is included, eligibility and the price? Thank you!"].filter(g=>g!==null).join(`
`)}function u(){s.textContent=l()}r.addEventListener("input",u),u();const f=()=>{const h=r.elements,m=[];h.name.setAttribute("aria-invalid",String(!h.name.value.trim())),h.name.value.trim()||m.push("your name");const v=h.phone.value.replace(/\D/g,""),g=/^[+\d\s()-]+$/.test(h.phone.value.trim())&&v.length>=8&&v.length<=15;return h.phone.setAttribute("aria-invalid",String(!g)),g||m.push("a phone number we can call back"),o.hidden=!m.length,o.textContent=m.length?`Please add ${m.join(" and ")}.`:"",!m.length};r.addEventListener("submit",h=>{if(h.preventDefault(),!f())return;const m=encodeURIComponent(l());Bf("whatsapp","booking_form",Va[t].title),window.open(`https://wa.me/${Hf.whatsapp}?text=${m}`,"_blank","noopener")});const d=document.getElementById("copy");d.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l()),d.textContent="Copied ✓"}catch{d.textContent="Select the text above to copy"}setTimeout(()=>d.textContent="Copy message",2200)})}const vy={hands:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M18 34c0-6 2-12 4-14m4 14V16m4 18V18m4 16V22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>',fins:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M14 22c8 0 14 4 16 10l8 6-12 1-6-6c-4-3-6-7-6-11z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 40c4-2 8 2 12 0s8 2 12 0" fill="none" stroke="currentColor" stroke-width="1.2"/>',feed:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M16 28c4-6 14-6 18 0-4 6-14 6-18 0z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M34 28l6-4v8z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>',take:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M17 36c2-8 6-14 10-18 2 4 6 6 10 6-2 6-8 12-20 12z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>',sun:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="27" cy="27" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M27 12v5m0 20v5M12 27h5m20 0h5M16 16l3 3m16 16l3 3M16 38l3-3m16-16l3-3" stroke="currentColor" stroke-width="1.4"/>',land:'<circle cx="27" cy="27" r="25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M14 34c2-8 8-14 13-14s11 6 13 14z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 38c5-2 9 2 14 0s9 2 14 0 6 1 6 0" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M12 42L42 12" stroke="#c4512f" stroke-width="2"/>'};function xy(){document.getElementById("rules").innerHTML=Vf.map(n=>`<li class="reveal"><svg viewBox="0 0 54 54" aria-hidden="true">${vy[n.icon]}</svg><div><b>${n.title}</b><p>${n.text}</p></div></li>`).join(""),document.getElementById("faq-list").innerHTML=Wf.map(n=>`<details><summary>${n.q}</summary><p>${n.a}</p></details>`).join("")}function _y(){let n=null,t=!1,e,i,r,s,o=1,a=0,c=0,l=0,u=[],f,d;function h(S){const E=n.sampleRate*4,C=n.createBuffer(1,E,n.sampleRate),M=C.getChannelData(0);let b=0;for(let T=0;T<E;T++){const I=Math.random()*2-1;S==="brown"?(b=(b+.02*I)/1.02,M[T]=b*3.5):M[T]=I}return C}function m(S){const E=n.createBufferSource();return E.buffer=S,E.loop=!0,E.start(),E}function v(S,E,C){const M=n.createOscillator(),b=n.createGain();return M.frequency.value=S,b.gain.value=E,M.connect(b).connect(C),M.start(),M}function g(){n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain(),e.gain.value=0;const S=n.createDynamicsCompressor();S.threshold.value=-18,S.ratio.value=3,e.connect(S).connect(n.destination);const E=h("brown"),C=h("white");f=E,d=C,i=n.createGain(),i.gain.value=1,i.connect(e);const M=n.createBiquadFilter();M.type="lowpass",M.frequency.value=520,M.Q.value=.4;const b=n.createGain();b.gain.value=.55,m(E).connect(M).connect(b).connect(i),v(.11,.3,b.gain),v(.067,.18,b.gain),v(.09,260,M.frequency);const T=n.createBiquadFilter();T.type="bandpass",T.frequency.value=2600,T.Q.value=.6;const I=n.createGain();I.gain.value=.03,m(C).connect(T).connect(I).connect(i),v(.11,.028,I.gain),r=n.createGain(),r.gain.value=0,r.connect(e);const O=n.createBiquadFilter();O.type="lowpass",O.frequency.value=240,O.Q.value=.7;const z=n.createGain();z.gain.value=.9,m(E).connect(O).connect(z).connect(r),v(.05,60,O.frequency),r.muff=O;const F=n.createGain();F.gain.value=.05,F.connect(r),[55,82.4,110.3].forEach((G,W)=>{const X=n.createOscillator();X.type="sine",X.frequency.value=G,X.detune.value=W*4,X.connect(F),X.start()}),v(.03,.03,F.gain),s=n.createGain(),s.gain.value=0,s.connect(e);const U=n.createBiquadFilter();U.type="lowpass",U.frequency.value=420,U.Q.value=.8;const k=n.createGain();k.gain.value=.6,U.connect(k).connect(s),[[78,0],[117,7]].forEach(([G,W])=>{const X=n.createOscillator();X.type="sawtooth",X.frequency.value=G,X.detune.value=W;const st=n.createGain();st.gain.value=.05,X.connect(st).connect(U),X.start()}),v(9,.35,k.gain);const D=n.createBiquadFilter();D.type="bandpass",D.frequency.value=900,D.Q.value=.7;const H=n.createGain();H.gain.value=.06,m(C).connect(D).connect(H).connect(s),v(.7,.05,H.gain),u.push(setInterval(()=>{t&&a<.5&&o>.6&&Math.random()<.45&&_()},7e3))}function p(){const S=n.currentTime,E=n.createBufferSource(),C=n.createBiquadFilter(),M=n.createGain();E.buffer=d,C.type="bandpass",C.frequency.setValueAtTime(1500,S),C.frequency.linearRampToValueAtTime(2100,S+1.4),C.Q.value=1.1,M.gain.setValueAtTime(1e-4,S),M.gain.exponentialRampToValueAtTime(.05,S+.25),M.gain.setValueAtTime(.05,S+1.2),M.gain.exponentialRampToValueAtTime(1e-4,S+1.6),E.connect(C).connect(M).connect(r),E.start(S,Math.random()*2),E.stop(S+1.7)}function y(){const S=n.currentTime,E=n.createBufferSource(),C=n.createBiquadFilter(),M=n.createGain();E.buffer=f,C.type="lowpass",C.frequency.value=380,M.gain.setValueAtTime(1e-4,S),M.gain.exponentialRampToValueAtTime(.5,S+.12),M.gain.exponentialRampToValueAtTime(1e-4,S+1.3),E.connect(C).connect(M).connect(r),E.start(S,Math.random()*2),E.stop(S+1.4),x()}function x(){const S=n.currentTime,E=9+Math.floor(Math.random()*8);for(let C=0;C<E;C++){const M=S+C*(.035+Math.random()*.06),b=n.createOscillator(),T=n.createGain(),I=260+Math.random()*520;b.frequency.setValueAtTime(I,M),b.frequency.exponentialRampToValueAtTime(I*1.9,M+.07),T.gain.setValueAtTime(1e-4,M),T.gain.exponentialRampToValueAtTime(.05,M+.008),T.gain.exponentialRampToValueAtTime(1e-4,M+.09),b.connect(T).connect(r),b.start(M),b.stop(M+.1)}}function _(){const S=n.currentTime+.05,E=(C,M,b,T,I)=>{const O=n.createOscillator(),z=n.createGain(),F=n.createOscillator(),U=n.createGain(),k=n.createBiquadFilter();k.type="bandpass",k.frequency.value=520,k.Q.value=1.4,O.type="triangle",O.frequency.setValueAtTime(M,C),O.frequency.linearRampToValueAtTime(b,C+T),F.frequency.value=7,U.gain.value=9,F.connect(U).connect(O.frequency),z.gain.setValueAtTime(1e-4,C),z.gain.exponentialRampToValueAtTime(I,C+.06),z.gain.exponentialRampToValueAtTime(1e-4,C+T),O.connect(k).connect(z).connect(i),O.start(C),F.start(C),O.stop(C+T+.05),F.stop(C+T+.05)};E(S,360,400,.28,.025),E(S+.34,420,330,.55,.03)}function w(){if(!n)return;const S=n.currentTime;e.gain.setTargetAtTime(t?.55*(.3+.7*o):0,S,.4),i.gain.setTargetAtTime(1-a,S,.25),r.gain.setTargetAtTime(a,S,.25),r.muff.frequency.setTargetAtTime(260-Math.min(c,20)*6,S,.5),s.gain.setTargetAtTime(l*.9,S,.3)}return{async toggle(){return n||g(),t=!t,t&&n.state==="suspended"&&await n.resume(),w(),t},setUnder(S,E){(S!==a||Math.abs(E-c)>.5)&&(a=S,c=E,w())},setPresence(S){Math.abs(S-o)>.05&&(o=S,w())},setEngine(S){Math.abs(S-l)>.04&&(l=S,w())},splash(){if(!n||!t)return;const S=n.currentTime,E=n.createBufferSource(),C=n.createBiquadFilter(),M=n.createGain();E.buffer=d,C.type="lowpass",C.frequency.setValueAtTime(5200,S),C.frequency.exponentialRampToValueAtTime(380,S+.7),M.gain.setValueAtTime(1e-4,S),M.gain.exponentialRampToValueAtTime(.32,S+.03),M.gain.exponentialRampToValueAtTime(1e-4,S+.9),E.connect(C).connect(M).connect(i),E.start(S,Math.random()*2),E.stop(S+1),a>.5&&x()},plip(){if(!n||!t)return;const S=n.currentTime,E=n.createOscillator(),C=n.createGain();E.type="sine",E.frequency.setValueAtTime(1350,S),E.frequency.exponentialRampToValueAtTime(380,S+.11),C.gain.setValueAtTime(1e-4,S),C.gain.exponentialRampToValueAtTime(.09,S+.008),C.gain.exponentialRampToValueAtTime(1e-4,S+.22),E.connect(C).connect(e),E.start(S),E.stop(S+.25)},breathIn(){n&&t&&a>.5&&p()},breathOut(){n&&t&&a>.5&&y()},blip(){if(!n||!t)return;const S=n.currentTime,E=n.createOscillator(),C=n.createGain();E.frequency.setValueAtTime(880,S),E.frequency.exponentialRampToValueAtTime(620,S+.12),C.gain.setValueAtTime(1e-4,S),C.gain.exponentialRampToValueAtTime(.06,S+.01),C.gain.exponentialRampToValueAtTime(1e-4,S+.18),E.connect(C).connect(e),E.start(S),E.stop(S+.2)}}}const Re=(n,t=document)=>t.querySelector(n),si=(n,t=document)=>[...t.querySelectorAll(n)];let bf="";{const n=Fs.map(c=>c[0]),t=Fs.map(c=>c[1]),e=Math.min(...n),i=Math.max(...n),r=Math.min(...t),s=Math.max(...t),o=32/Math.max(i-e,s-r),a=Fs.map(([c,l],u)=>`${u?"L":"M"}${(4+(c-e)*o+(32-(i-e)*o)/2).toFixed(1)} ${(4+(l-r)*o).toFixed(1)}`).join(" ")+"Z";si(".brand-heart").forEach(c=>c.setAttribute("d",a)),bf=a}const f0=Re("#story"),mr=Re("#stage"),d0=Re("#topbar"),Ca=i2(),yy=matchMedia("(pointer: coarse)").matches,My=yy||innerWidth<760?.5:1;let Ne=null,qc=null;try{if(!document.createElement("canvas").getContext("webgl2"))throw new Error("no webgl2");Ne=$_(Re("#gl"),{quality:My}),qc=K_(Re("#chart"))}catch(n){console.warn("3D stage unavailable:",n),Re("#nogl").hidden=!1,mr.classList.add("is-paper")}const Ra=()=>{const n=f0.offsetTop,t=f0.offsetHeight-innerHeight;return{top:n,h:t}},Ef=[0,.425,.53,.66,.835,1],Fl=[0,574,994,1594,2394,2619],Tf=Fl.map(n=>n/Fl[Fl.length-1]),Af=(n,t,e)=>{for(let i=1;i<n.length;i++)if(e<=n[i])return t[i-1]+(t[i]-t[i-1])*(e-n[i-1])/(n[i]-n[i-1]);return t[t.length-1]},Cf=n=>Af(Tf,Ef,ie(n)),ts=n=>Af(Ef,Tf,ie(n)),Pa=()=>{const{top:n,h:t}=Ra();return Cf(ie((scrollY-n)/t))},Qs=1,Rf=.085,zi={v:0,t:0},Sy=n=>{const t=n.event;if(!t||!t.type.startsWith("touch"))return!0;if(t.type==="touchstart")return zi.v=0,zi.t=t.timeStamp,!0;if(t.type==="touchmove"){const e=Math.max(4,t.timeStamp-zi.t)/1e3;return zi.v=zi.v*.4+n.deltaY/e*.6,zi.t=t.timeStamp,!0}if(t.type==="touchend"||t.type==="touchcancel"){xe&&(xe.isTouching=!1);const e=t.timeStamp-zi.t>110?0:zi.v,i=Math.sign(e)*Math.min(Math.abs(e)*.32,1.2*innerHeight);if(xe&&Math.abs(i)>2&&!xe.isStopped){const r=xe.animatedScroll,s=Math.max(.35,2*Math.abs(i)/(Qs*innerHeight));xe.scrollTo(Math.max(0,Math.min(xe.limit,r+i)),{duration:s,easing:o=>1-(1-o)*(1-o)})}return!1}return!0},xe=Ca?null:new ed({lerp:Rf,wheelMultiplier:.85,smoothWheel:!0,syncTouch:!0,syncTouchLerp:.075,allowNestedScroll:!0,autoRaf:!1,virtualScroll:Sy,prevent:n=>{var t;return((t=n.matches)==null?void 0:t.call(n,"#lab-canvas, .wheel"))||!1}});let wi=null,$c=!1;if(xe){const n=xe.scrollTo.bind(xe);xe.scrollTo=(t,e={})=>($c=e.programmatic===!1,$c||(wi=null),n(t,e))}xe&&xe.on("virtual-scroll",()=>{wi=null});addEventListener("keydown",n=>{var e,i;if(!xe||n.defaultPrevented||n.ctrlKey||n.metaKey||n.altKey||document.querySelector("dialog[open]")||(i=(e=n.target).closest)!=null&&i.call(e,'input, textarea, select, button, [contenteditable], [role="slider"], [role="tab"]'))return;const t={ArrowDown:.15,ArrowUp:-.15,PageDown:.85,PageUp:-.85," ":n.shiftKey?-.85:.85}[n.key];t!==void 0&&(n.preventDefault(),wi=Math.max(0,Math.min(xe.limit,(wi??xe.targetScroll)+t*innerHeight)))});const wy=n=>n<.5?2*n*n:1-(-2*n+2)**2/2;new MutationObserver(()=>{xe&&(document.querySelector("dialog[open]")?xe.stop():xe.start())}).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["open"]});const gr=document.createElement("div");gr.className="curtain";gr.setAttribute("aria-hidden","true");{const n="http://www.w3.org/2000/svg",t=document.createElementNS(n,"svg"),e=document.createElementNS(n,"path");t.setAttribute("viewBox","0 0 40 40"),e.setAttribute("d",bf),t.append(e),gr.append(t)}document.body.append(gr);const He={phase:0,at:0,quiet:0,y:null},Pf=n=>{if(wi=null,Ca){scrollTo(0,n);return}const t=Math.abs(n-scrollY);t>innerHeight*3?(He.phase=1,He.at=performance.now(),He.y=n,gr.classList.add("is-on")):xe?xe.scrollTo(n,{duration:Math.max(.9,1.6*t/(Qs*innerHeight)),easing:wy}):scrollTo({top:n,behavior:"smooth"})},by=n=>{const{top:t,h:e}=Ra();Pf(t+ts(n)*e+2)};si('a[href^="#"]:not([data-jump])').forEach(n=>n.addEventListener("click",t=>{const e=n.getAttribute("href").slice(1),i=e&&document.getElementById(e);i&&(t.preventDefault(),Ba(),Pf(Math.max(0,i.getBoundingClientRect().top+scrollY-64)))}));for(const n of si(".beat")){const t=parseFloat(n.style.getPropertyValue("--p"))||0;n.dataset.p=t,n.style.setProperty("--p",ts(t).toFixed(4))}const Df=new URLSearchParams(location.search).has("probe"),Hi={on:!1,left:0,dt:.1};Df&&(window.__netrani={stage:Ne,unwarp:ts,PACE:Qs,setTime:n=>{Xr=n},get lenis(){return xe},hold:n=>{Hi.on=n,Hi.left=0},step:(n,t=.1)=>{Hi.left=n,Hi.dt=t}});si("[data-jump]").forEach(n=>n.addEventListener("click",t=>{t.preventDefault(),by(parseFloat(n.dataset.jump)),Ba()}));const Oa=Re("#labels"),Ey=Gf.map(n=>{const t=document.createElement("div");return t.className="tag",t.innerHTML=`<span class="tag-text">${n.text}</span><span class="tag-stem"></span>`,Oa.append(t),{...n,el:t,pos:O_[n.at]}}),ar=Re("#fieldnote");let to=null;const Lf="http://www.w3.org/2000/svg",ro=document.createElementNS(Lf,"svg");ro.setAttribute("class","ink");ro.setAttribute("aria-hidden","true");Oa.append(ro);const Da=Ne?y0.map((n,t)=>{const e=document.createElement("button");e.type="button",e.className="anno",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label",`${t+1}. ${n.title}: open field note`),e.innerHTML=`<span class="anno-in"><span class="anno-num">${t+1}</span><span class="anno-title">${n.title}</span></span>`,e.addEventListener("click",()=>Ay(t)),Oa.append(e);const i=(c,l,u)=>{const f=document.createElementNS(Lf,c);return f.setAttribute("class",l),u&&f.setAttribute("r",u),ro.append(f),f},r=i("path","anno-line"),s=i("circle","anno-ring",10),o=i("circle","anno-dot",3.6);e.addEventListener("pointerenter",()=>r.classList.add("is-hot")),e.addEventListener("pointerleave",()=>r.classList.remove("is-hot"));const a=n.y!=null?n.y:Ne.T.heightAt(n.x,n.z)+(n.lift||6);return{...n,el:e,y:a,path:r,ring:s,dot:o}}):[],so=document.createElement("div");so.className="dial-n";so.innerHTML='<svg viewBox="-30 -30 60 60" aria-hidden="true"><circle r="27" fill="none" stroke="currentColor" stroke-opacity="0.35"/><circle r="21" fill="none" stroke="currentColor" stroke-opacity="0.2"/><g class="dial-needle"><path d="M0 -24 L5 0 L0 4 L-5 0 Z" fill="#c4512f"/><path d="M0 24 L5 0 L0 -4 L-5 0 Z" fill="currentColor" fill-opacity="0.55"/><text y="-30" text-anchor="middle">N</text></g></svg>';mr.append(so);const Ty=so.querySelector(".dial-needle"),ka=document.createElement("div");ka.className="drag-hint";ka.innerHTML='<svg viewBox="0 0 40 16" aria-hidden="true"><path d="M4 8h32M4 8l5-4M4 8l5 4M36 8l-5-4M36 8l-5 4"/></svg><span>drag to turn the specimen · tap a number for its field note</span><small>coastline from OpenStreetMap; relief and seabed modelled, heights stretched so the layers read</small>';mr.append(ka);function Ay(n){const t=y0[n];if(to===n)return eo();Da.forEach((e,i)=>e.el.setAttribute("aria-expanded",String(i===n))),to=n,Re(".fieldnote-kicker",ar).textContent=t.kicker,Re("h3",ar).textContent=t.title,Re(".fieldnote-body",ar).textContent=t.body,Re(".fieldnote-hand",ar).textContent=t.hand||"",ar.hidden=!1,kn.blip()}function eo(){ar.hidden=!0,to=null,Da.forEach(n=>n.el.setAttribute("aria-expanded","false"))}Re(".fieldnote-close",ar).addEventListener("click",eo);addEventListener("keydown",n=>{n.key==="Escape"&&(eo(),Ba())});const Jo=40;function Cy(n){if(ro.classList.toggle("is-on",n),so.classList.toggle("is-on",n),ka.classList.toggle("is-on",n),!n){for(const u of Da)u.el.classList.remove("is-on");return}const t=mr.clientWidth,e=mr.clientHeight,i=Ne.CORE_R,r=Ne.project(0,-40,0);let s=0;for(let u=0;u<24;u++){const f=u/24*Math.PI*2,d=Ne.project(Math.cos(f)*i,0,Math.sin(f)*i);s=Math.max(s,Math.abs(d.x-r.x))}const o=t<700,a=Da.map(u=>{const f=Ne.project(u.x,u.y,u.z);let d=f.x-r.x,h=f.y-r.y,m=Math.hypot(d,h);m<1&&(d=1,h=0,m=1),d/=m,h/=m;const v=d>=0?1:-1,g=o?f.x+d*46:r.x+v*(s+36)+d*10,p=o?f.y+h*46:f.y+h*40;return{p:u,A:f,dx:d,dy:h,side:v,lx:g,ly:p}});if(!o)for(const u of[1,-1]){const f=a.filter(h=>h.side===u).sort((h,m)=>h.ly-m.ly);for(let h=1;h<f.length;h++)f[h].ly-f[h-1].ly<Jo&&(f[h].ly=f[h-1].ly+Jo);const d=e-80;for(let h=f.length-1;h>=0;h--)f[h].ly=Math.min(f[h].ly,d-(f.length-1-h)*Jo);for(let h=0;h<f.length;h++)f[h].ly=Math.max(f[h].ly,96+h*Jo)}for(const u of a){const{p:f,A:d,side:h}=u;f.w||(f.w=f.el.firstChild.offsetWidth);const m=(f.w||160)+(h<0&&!o?64:18),v=h>0?Math.min(u.lx,t-m):Math.max(u.lx,m),g=u.ly;f.el.classList.add("is-on"),f.el.classList.toggle("left",h<0),f.el.style.transform=`translate(${v.toFixed(1)}px, ${g.toFixed(1)}px)`;const p=d.x+u.dx*36,y=d.y+u.dy*36,x=v-h*42;f.path.setAttribute("d",`M${d.x.toFixed(1)} ${d.y.toFixed(1)} C${p.toFixed(1)} ${y.toFixed(1)} ${x.toFixed(1)} ${g.toFixed(1)} ${v.toFixed(1)} ${g.toFixed(1)}`);for(const _ of[f.dot,f.ring])_.setAttribute("cx",d.x.toFixed(1)),_.setAttribute("cy",d.y.toFixed(1))}const c=Ne.project(0,-150,0),l=Ne.project(0,-150,-600);Ty.setAttribute("transform",`rotate(${(Math.atan2(l.x-c.x,-(l.y-c.y))*180/Math.PI).toFixed(1)})`)}Ne&&Re("#gl").addEventListener("click",n=>{if(n.button!==0||Pa()>.86)return;const t=Ne.tap(n.clientX,n.clientY);t==="ripple"?kn.plip():t==="bubbles"&&kn.blip()});const oo=document.createElement("div");oo.className="idle-hint";oo.setAttribute("aria-hidden","true");oo.innerHTML='<span>Scroll to keep going</span><svg viewBox="0 0 20 12"><path d="M2 2l8 8 8-8"/></svg>';mr.append(oo);let p0=performance.now(),m0=scrollY;if(Ne){const n=Re("#gl");n.addEventListener("pointerdown",t=>{Pa()>.88&&(Ne.startDrag(t),n.setPointerCapture(t.pointerId))}),n.addEventListener("pointermove",t=>Ne.moveDrag(t)),n.addEventListener("pointerup",()=>Ne.endDrag()),n.addEventListener("pointercancel",()=>Ne.endDrag())}const Ry=["hull","banner"].map(n=>{const t=document.createElement("a");return t.className="brand-link",t.dataset.kind=n,t.href="https://murudeshwar.co.in/",t.target="_blank",t.rel="noopener",t.setAttribute("aria-label","Murudeshwar.co.in (opens in a new tab)"),t.innerHTML='<span class="brand-link-tip">Visit Murudeshwar.co.in <span aria-hidden="true">↗</span></span>',t.tabIndex=-1,Oa.append(t),t}),la=[];function g0(n){const t=n&&Ne?Ne.brandRects():[];for(const e of Ry){let i=null;for(const o of t)o.kind===e.dataset.kind&&!o.behind&&(!i||o.facing>i.facing)&&(i=o);const r=6;let s=!!i&&i.facing>.3&&i.w>70&&i.h>10&&i.x>8&&i.y>60&&i.x+i.w<innerWidth-8&&i.y+i.h<innerHeight-8;if(s){for(const o of la)if(i.x<o.right&&i.x+i.w>o.left&&i.y<o.bottom&&i.y+i.h>o.top){s=!1;break}}e.classList.toggle("is-on",s),e.tabIndex=s?0:-1,s&&(e.style.transform=`translate(${(i.x-r).toFixed(1)}px, ${(i.y-r).toFixed(1)}px)`,e.style.width=`${(i.w+r*2).toFixed(1)}px`,e.style.height=`${(i.h+r*2).toFixed(1)}px`)}}const Py=Re("#hud"),v0=Re("#gauge-scale"),Dy=Re("#gauge-mark"),Ly=Re("#depth-read"),ca=20;for(let n=0;n<=ca;n+=1){const t=document.createElement("i");if(n%5===0){t.className="major";const e=document.createElement("b");e.textContent=`${n}`,e.style.top=`${n/ca*100}%`,v0.append(e)}t.style.top=`${n/ca*100}%`,v0.append(t)}const Iy=si("#swatches i"),Uy=[[226,59,46,.35],[240,138,36,.2],[244,208,63,.07],[76,175,80,.05],[47,127,216,.02]],zl=[10,58,74],er=[.613,.646,.66,.69,.72,.775,.79,.806,.818,.835],Ol=[0,3,6,13,21,33,38,43,45,48],Ny=n=>n<=er[0]?0:n>=er[er.length-1]?48:(()=>{let t=1;for(;n>er[t];)t++;const e=(n-er[t-1])/(er[t]-er[t-1]);return Ol[t-1]+(Ol[t]-Ol[t-1])*e})(),Fy=Re("#hud-time"),zy=Re("#hud-tank");function Oy(n,t,e=0){if(Py.classList.toggle("is-on",t),!t)return;const i=Ny(e);Fy.textContent=`${Math.floor(i)} min`,zy.textContent=`${Math.round(200-i*2.75)} bar`,Dy.style.top=`${ie(n/ca)*100}%`,Ly.textContent=n.toFixed(1);const r=1+n/10;Re("#hud-bar").textContent=`${r.toFixed(1)} bar`,Re("#hud-vol").textContent=`${Math.round(100/r)}%`;const s=n+2;Iy.forEach((o,a)=>{const[c,l,u,f]=Uy[a],d=Math.exp(-f*s);o.style.background=`rgb(${Math.round(c*d+zl[0]*(1-d))},${Math.round(l*d+zl[1]*(1-d))},${Math.round(u*d+zl[2]*(1-d))})`})}const kl=si("#rail button"),ky=n=>n<.18?0:n<.36?1:n<.56?2:n<.82?3:4,kn=_y(),Bl=Re("#sound");Bl.addEventListener("click",async()=>{const n=await kn.toggle();Bl.setAttribute("aria-pressed",String(n)),Bl.setAttribute("aria-label",n?"Turn off the sound":"Turn on the sound of the sea")});const Yc=Re("#menu"),jc=Re("#nav");function Ba(){jc.classList.remove("is-open"),Yc.setAttribute("aria-expanded","false")}Yc.addEventListener("click",()=>{const n=!jc.classList.contains("is-open");jc.classList.toggle("is-open",n),Yc.setAttribute("aria-expanded",String(n))});si("#nav a:not([data-jump])").forEach(n=>n.addEventListener("click",Ba));let x0=performance.now(),Xr=0,Wr=-1;const Qo={in:-1,out:-1};let _0=0;const By=Re("#dock");Xf();qf();const ua=si(".beat");let Zc=!1;const If=()=>{const n=innerWidth/innerHeight<.8;if(n!==Zc&&(Zc=n,document.documentElement.classList.toggle("is-docked",n),!n))for(const t of ua)t.classList.remove("is-on")};If();addEventListener("resize",If);function Uf(n){requestAnimationFrame(Uf);let t=Math.min(.1,Math.max(0,(n-x0)/1e3));if(x0=n,Hi.on){if(Hi.left<=0)return;Hi.left--,t=Hi.dt}if(Xr+=Ca?t*.35:t,xe){const l=xe.animate;if(wi!==null&&(xe.isScrolling==="native"||Math.abs(wi-xe.animatedScroll)<1?wi=null:xe.scrollTo(wi,{programmatic:!1,lerp:Rf})),$c&&l.isRunning&&l.lerp){const u=Math.max(.004166666666666667,Math.min(.25,(n-(xe.time||n))/1e3)),f=Qs*innerHeight*u/(1-Math.exp(-60*l.lerp*u)),d=Math.max(l.value-f,Math.min(l.value+f,l.to));d!==l.to&&(l.to=d,xe.targetScroll=d)}xe.raf(n)}He.phase===1&&n-He.at>230&&(He.y!=null&&(xe?xe.scrollTo(He.y,{immediate:!0,force:!0}):scrollTo(0,He.y),He.y=null),Wr=Pa(),He.phase=2,He.at=n,gr.classList.remove("is-on"),He.quiet=n+700),He.phase===2&&n>He.quiet&&(He.phase=0);const e=Pa();{const{h:l}=Ra(),u=ts(Wr),f=ts(e),d=(f-u)*l/innerHeight;if(Ca||Wr<0||Math.abs(d)<1e-4)Wr=e;else if(Math.abs(d)>2.5&&He.phase!==1&&n>He.quiet)He.phase=1,He.at=n,He.y=null,gr.classList.add("is-on");else if(He.phase!==1){const h=1.35*Qs*innerHeight*t/Math.max(l,1);Wr=Cf(u+Math.max(-h,Math.min(h,(f-u)*(1-Math.exp(-t*(xe?12:7))))))}}const i=Wr,{top:r,h:s}=Ra(),o=scrollY<r+s+innerHeight,a=i>.845||i>.36&&i<.432;mr.classList.toggle("is-paper",a||!Ne),d0.classList.toggle("is-paper",a&&o),d0.classList.toggle("is-solid",!o||scrollY>r+s-40),By.classList.toggle("is-on",scrollY>r+s*.95&&!Hy("#dive"));const c=ky(i);kl.forEach((l,u)=>l.classList.toggle("is-on",u===c));{const l=[0,.18,.36,.56,.82,1];kl[c]&&kl[c].style.setProperty("--prog",ie((i-l[c])/(l[c+1]-l[c])).toFixed(3))}if(Math.abs(scrollY-m0)>2&&(p0=n,m0=scrollY),oo.classList.toggle("is-on",o&&i>.03&&i<.84&&n-p0>6500&&He.phase===0),Ne&&o){const l=Ne.update(i,Xr,t);qc&&qc.draw(i,Xr,Ne.worldPerPixelTopDown(),l.cross),Ne.render(t),Oy(l.depthM,l.under===1&&i>.61&&i<.83,i),kn.setUnder(l.under,l.depthM),kn.setPresence(1-It(.83,.9,i)),kn.setEngine(l.speed*l.crossW),l.splashes>_0&&kn.splash(),_0=l.splashes;const u=Math.floor((Xr-1.6)/5),f=Math.floor((Xr-3.8)/5);u>Qo.in&&kn.breathIn(),f>Qo.out&&kn.breathOut(),Qo.in=u,Qo.out=f;for(const h of Ey){const m=i>h.from&&i<h.to;if(h.el.classList.toggle("is-on",m),m){const v=Ne.project(h.pos[0],40,h.pos[1]);h.el.style.transform=`translate(${v.x}px, ${v.y}px) translate(-50%, -100%)`}}const d=i>.9;if(Cy(d),(!d||scrollY>r+s+160)&&to!==null&&eo(),la.length=0,Zc){let h=null,m=.55*innerHeight;for(const v of ua){if(v.classList.contains("beat-hero")){const p=v.getBoundingClientRect(),y=ie((p.bottom-70)/150)*ie((innerHeight-p.top)/150);v.style.opacity=y.toFixed(3);continue}const g=Math.abs(scrollY-(r+ts(+v.dataset.p)*s));g<m&&(m=g,h=v)}for(const v of ua)v.classList.contains("beat-hero")||(v.style.opacity="",v.classList.toggle("is-on",v===h));h&&la.push(h.getBoundingClientRect()),document.documentElement.style.setProperty("--dock-h",h?`${Math.round(innerHeight-h.getBoundingClientRect().top+10)}px`:"0px")}else for(const h of ua){const m=h.getBoundingClientRect();if(m.bottom<-50||m.top>innerHeight+50)continue;const v=ie((m.bottom-70)/150)*ie((innerHeight-m.top)/150);h.style.opacity=v.toFixed(3),v>.15&&la.push(m)}g0(i>.425&&i<.61&&l.under===0)}else g0(!1),kn.setPresence(0),to!==null&&eo();Df&&(window.__frames=(window.__frames||0)+1)}function Hy(n){const t=Re(n).getBoundingClientRect();return t.top<innerHeight&&t.bottom>0}requestAnimationFrame(Uf);oy(kn);cy();hy();dy();gy();xy();const Vy=si("#nav a:not([data-jump])"),Wy=new IntersectionObserver(n=>{for(const t of n)t.isIntersecting&&Vy.forEach(e=>e.classList.toggle("is-active",e.getAttribute("href")===`#${t.target.id}`))},{rootMargin:"-45% 0px -50% 0px"});["field-guide","dive-lab","chronicle","plan"].forEach(n=>Wy.observe(document.getElementById(n)));const Gy=new IntersectionObserver(n=>n.forEach(t=>t.isIntersecting&&t.target.classList.add("is-in")),{rootMargin:"0px 0px -10% 0px"});si(".section-head, .tl, .reveal").forEach(n=>Gy.observe(n));
