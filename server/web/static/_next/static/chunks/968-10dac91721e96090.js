"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{2623:function(e,r,t){t.d(r,{X:function(){return v}});var n=t(7294),o=t(4761),l=t(8427),i=(0,t(6817).k)((e,{radius:r,shadow:t,withBorder:n})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(r),boxShadow:e.shadows[t]||t||"none",border:n?`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`:void 0}})),a=t(4523),c=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))d.call(r,t)&&f(e,t,r[t]);return e},m=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>r.indexOf(n)&&d.call(e,n)&&(t[n]=e[n]);return t};let h={},b=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Paper",h,e),{className:l,children:c,radius:s,withBorder:u,shadow:d,unstyled:f}=t,b=m(t,["className","children","radius","withBorder","shadow","unstyled"]),{classes:v,cx:w}=i({radius:s,shadow:d,withBorder:u},{name:"Paper",unstyled:f});return n.createElement(a.x,p({className:w(v.root,l),ref:r},b),c)});b.displayName="@mantine/core/Paper";let v=(0,l.F)(b)},3723:function(e,r,t){t.d(r,{x:function(){return em}});var n=t(7294),o=t(7462),l=t(3935);function i(...e){return r=>e.forEach(e=>{var t;"function"==typeof(t=e)?t(r):null!=t&&(t.current=r)})}function a(...e){return(0,n.useCallback)(i(...e),e)}let c=(0,n.forwardRef)((e,r)=>{let{children:t,...l}=e,i=n.Children.toArray(t),a=i.find(d);if(a){let c=a.props.children,u=i.map(e=>e!==a?e:n.Children.count(c)>1?n.Children.only(null):(0,n.isValidElement)(c)?c.props.children:null);return(0,n.createElement)(s,(0,o.Z)({},l,{ref:r}),(0,n.isValidElement)(c)?(0,n.cloneElement)(c,void 0,u):null)}return(0,n.createElement)(s,(0,o.Z)({},l,{ref:r}),t)});c.displayName="Slot";let s=(0,n.forwardRef)((e,r)=>{let{children:t,...o}=e;return(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n],i=/^on[A-Z]/.test(n);i?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:i(r,t.ref)}):n.Children.count(t)>1?n.Children.only(null):null});s.displayName="SlotClone";let u=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function d(e){return(0,n.isValidElement)(e)&&e.type===u}let f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,n.forwardRef)((e,t)=>{let{asChild:l,...i}=e,a=l?c:r;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(a,(0,o.Z)({},i,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),p=Boolean(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{},m=e=>{let{present:r,children:t}=e,o=function(e){var r;let[t,o]=(0,n.useState)(),i=(0,n.useRef)({}),a=(0,n.useRef)(e),c=(0,n.useRef)("none"),[s,u]=(r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,n.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},e?"mounted":"unmounted"));return(0,n.useEffect)(()=>{let e=h(i.current);c.current="mounted"===s?e:"none"},[s]),p(()=>{let r=i.current,t=a.current;if(t!==e){let n=c.current,o=h(r);e?u("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?u("UNMOUNT"):t&&n!==o?u("ANIMATION_OUT"):u("UNMOUNT"),a.current=e}},[e,u]),p(()=>{if(t){let e=e=>{let r=h(i.current),n=r.includes(e.animationName);e.target===t&&n&&(0,l.flushSync)(()=>u("ANIMATION_END"))},r=e=>{e.target===t&&(c.current=h(i.current))};return t.addEventListener("animationstart",r),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",r),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,n.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(r),i="function"==typeof t?t({present:o.isPresent}):n.Children.only(t),c=a(o.ref,i.ref);return"function"==typeof t||o.isPresent?(0,n.cloneElement)(i,{ref:c}):null};function h(e){return(null==e?void 0:e.animationName)||"none"}function b(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}m.displayName="Presence";let v=(0,n.createContext)(void 0);function w(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(null==e||e(n),!1===t||!n.defaultPrevented)return null==r?void 0:r(n)}}let g="ScrollArea",[y,E]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>(0,n.createContext)(e));return function(t){let o=(null==t?void 0:t[e])||r;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let l=(0,n.createContext)(o),i=t.length;function a(r){let{scope:t,children:o,...a}=r,c=(null==t?void 0:t[e][i])||l,s=(0,n.useMemo)(()=>a,Object.values(a));return(0,n.createElement)(c.Provider,{value:s},o)}return t=[...t,o],a.displayName=r+"Provider",[a,function(t,a){let c=(null==a?void 0:a[e][i])||l,s=(0,n.useContext)(c);if(s)return s;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e),l=o[`__scope${n}`];return{...r,...l}},{});return(0,n.useMemo)(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(g),[S,C]=y(g),N=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:i,scrollHideDelay:c=600,...s}=e,[u,d]=(0,n.useState)(null),[p,m]=(0,n.useState)(null),[h,b]=(0,n.useState)(null),[w,g]=(0,n.useState)(null),[y,E]=(0,n.useState)(null),[C,N]=(0,n.useState)(0),[T,P]=(0,n.useState)(0),[R,O]=(0,n.useState)(!1),[x,_]=(0,n.useState)(!1),A=a(r,e=>d(e)),z=function(e){let r=(0,n.useContext)(v);return e||r||"ltr"}(i);return(0,n.createElement)(S,{scope:t,type:l,dir:z,scrollHideDelay:c,scrollArea:u,viewport:p,onViewportChange:m,content:h,onContentChange:b,scrollbarX:w,onScrollbarXChange:g,scrollbarXEnabled:R,onScrollbarXEnabledChange:O,scrollbarY:y,onScrollbarYChange:E,scrollbarYEnabled:x,onScrollbarYEnabledChange:_,onCornerWidthChange:N,onCornerHeightChange:P},(0,n.createElement)(f.div,(0,o.Z)({dir:z},s,{ref:A,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})))}),T=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:l,...i}=e,c=C("ScrollAreaViewport",t),s=(0,n.useRef)(null),u=a(r,s,c.onViewportChange);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(f.div,(0,o.Z)({"data-radix-scroll-area-viewport":""},i,{ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,n.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),P="ScrollAreaScrollbar",R=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=C(P,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:c}=i,s="horizontal"===e.orientation;return(0,n.useEffect)(()=>(s?a(!0):c(!0),()=>{s?a(!1):c(!1)}),[s,a,c]),"hover"===i.type?(0,n.createElement)(O,(0,o.Z)({},l,{ref:r,forceMount:t})):"scroll"===i.type?(0,n.createElement)(x,(0,o.Z)({},l,{ref:r,forceMount:t})):"auto"===i.type?(0,n.createElement)(_,(0,o.Z)({},l,{ref:r,forceMount:t})):"always"===i.type?(0,n.createElement)(A,(0,o.Z)({},l,{ref:r})):null}),O=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=C(P,e.__scopeScrollArea),[a,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=i.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),c(!0)},n=()=>{r=window.setTimeout(()=>c(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,n.createElement)(m,{present:t||a},(0,n.createElement)(_,(0,o.Z)({"data-state":a?"visible":"hidden"},l,{ref:r})))}),x=(0,n.forwardRef)((e,r)=>{var t;let{forceMount:l,...i}=e,a=C(P,e.__scopeScrollArea),c="horizontal"===e.orientation,s=q(()=>d("SCROLL_END"),100),[u,d]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,n.useReducer)((e,r)=>{let n=t[e][r];return null!=n?n:e},"hidden"));return(0,n.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,a.scrollHideDelay,d]),(0,n.useEffect)(()=>{let e=a.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r],o=t!==n;o&&(d("SCROLL"),s()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[a.viewport,c,d,s]),(0,n.createElement)(m,{present:l||"hidden"!==u},(0,n.createElement)(A,(0,o.Z)({"data-state":"hidden"===u?"hidden":"visible"},i,{ref:r,onPointerEnter:w(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:w(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),_=(0,n.forwardRef)((e,r)=>{let t=C(P,e.__scopeScrollArea),{forceMount:l,...i}=e,[a,c]=(0,n.useState)(!1),s="horizontal"===e.orientation,u=q(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;c(s?e:r)}},10);return G(t.viewport,u),G(t.content,u),(0,n.createElement)(m,{present:l||a},(0,n.createElement)(A,(0,o.Z)({"data-state":a?"visible":"hidden"},i,{ref:r})))}),A=(0,n.forwardRef)((e,r)=>{let{orientation:t="vertical",...l}=e,i=C(P,e.__scopeScrollArea),a=(0,n.useRef)(null),c=(0,n.useRef)(0),[s,u]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Y(s.viewport,s.content),f={...l,sizes:s,onSizesChange:u,hasThumb:Boolean(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function p(e,r){return function(e,r,t,n="ltr"){let o=$(t),l=r||o/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),c=t.content-t.viewport,s=B([i,a],"ltr"===n?[0,c]:[-1*c,0]);return s(e)}(e,c.current,s,r)}return"horizontal"===t?(0,n.createElement)(z,(0,o.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollLeft,r=F(e,s,i.dir);a.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}})):"vertical"===t?(0,n.createElement)(L,(0,o.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollTop,r=F(e,s);a.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}})):null}),z=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...i}=e,c=C(P,e.__scopeScrollArea),[s,u]=(0,n.useState)(),d=(0,n.useRef)(null),f=a(r,d,c.onScrollbarXChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(M,(0,o.Z)({"data-orientation":"horizontal"},i,{ref:f,sizes:t,style:{bottom:0,left:"rtl"===c.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===c.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(c.viewport){let n=c.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:X(s.paddingLeft),paddingEnd:X(s.paddingRight)}})}}))}),L=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...i}=e,c=C(P,e.__scopeScrollArea),[s,u]=(0,n.useState)(),d=(0,n.useRef)(null),f=a(r,d,c.onScrollbarYChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(M,(0,o.Z)({"data-orientation":"vertical"},i,{ref:f,sizes:t,style:{top:0,right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(c.viewport){let n=c.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:X(s.paddingTop),paddingEnd:X(s.paddingBottom)}})}}))}),[D,k]=y(P),M=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:i,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:u,onThumbPositionChange:d,onDragScroll:p,onWheelScroll:m,onResize:h,...v}=e,g=C(P,t),[y,E]=(0,n.useState)(null),S=a(r,e=>E(e)),N=(0,n.useRef)(null),T=(0,n.useRef)(""),R=g.viewport,O=l.content-l.viewport,x=b(m),_=b(d),A=q(h,10);function z(e){if(N.current){let r=e.clientX-N.current.left,t=e.clientY-N.current.top;p({x:r,y:t})}}return(0,n.useEffect)(()=>{let e=e=>{let r=e.target,t=null==y?void 0:y.contains(r);t&&x(e,O)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[R,y,O,x]),(0,n.useEffect)(_,[l,_]),G(y,A),G(g.content,A),(0,n.createElement)(D,{scope:t,scrollbar:y,hasThumb:i,onThumbChange:b(c),onThumbPointerUp:b(s),onThumbPositionChange:_,onThumbPointerDown:b(u)},(0,n.createElement)(f.div,(0,o.Z)({},v,{ref:S,style:{position:"absolute",...v.style},onPointerDown:w(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),N.current=y.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",z(e)}}),onPointerMove:w(e.onPointerMove,z),onPointerUp:w(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,N.current=null})})))}),H="ScrollAreaThumb",I=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=k(H,e.__scopeScrollArea);return(0,n.createElement)(m,{present:t||i.hasThumb},(0,n.createElement)(Z,(0,o.Z)({ref:r},l)))}),Z=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:l,...i}=e,c=C(H,t),s=k(H,t),{onThumbPositionChange:u}=s,d=a(r,e=>s.onThumbChange(e)),p=(0,n.useRef)(),m=q(()=>{p.current&&(p.current(),p.current=void 0)},100);return(0,n.useEffect)(()=>{let e=c.viewport;if(e){let r=()=>{if(m(),!p.current){let r=V(e,u);p.current=r,u()}};return u(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[c.viewport,m,u]),(0,n.createElement)(f.div,(0,o.Z)({"data-state":s.hasThumb?"visible":"hidden"},i,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:w(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;s.onThumbPointerDown({x:n,y:o})}),onPointerUp:w(e.onPointerUp,s.onThumbPointerUp)}))}),j="ScrollAreaCorner",U=(0,n.forwardRef)((e,r)=>{let t=C(j,e.__scopeScrollArea),l=Boolean(t.scrollbarX&&t.scrollbarY),i="scroll"!==t.type&&l;return i?(0,n.createElement)(W,(0,o.Z)({},e,{ref:r})):null}),W=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...l}=e,i=C(j,t),[a,c]=(0,n.useState)(0),[s,u]=(0,n.useState)(0),d=Boolean(a&&s);return G(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),u(r)}),G(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),c(r)}),d?(0,n.createElement)(f.div,(0,o.Z)({},l,{ref:r,style:{width:a,height:s,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}})):null});function X(e){return e?parseInt(e,10):0}function Y(e,r){let t=e/r;return isNaN(t)?0:t}function $(e){let r=Y(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-t)*r;return Math.max(n,18)}function F(e,r,t="ltr"){let n=$(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,i=r.content-r.viewport,a=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,i]:[-1*i,0]),c=B([0,i],[0,l-n]);return c(a)}function B(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}let V=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function q(e,r){let t=b(e),o=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function G(e,r){let t=b(r);p(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var J=t(4761),K=t(7818),Q=(0,t(6817).k)((e,{scrollbarSize:r,offsetScrollbars:t,scrollbarHovered:n,hidden:o},l)=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:t?r:void 0,paddingBottom:t?r:void 0},scrollbar:{display:o?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:r/5,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],[`& .${l("thumb")}`]:{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:r},'&[data-orientation="horizontal"]':{flexDirection:"column",height:r},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:l("thumb"),flex:1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:r,position:"relative",transition:"background-color 150ms ease",display:o?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:44,minHeight:44}},corner:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:n?1:0,display:o?"none":void 0}})),ee=t(4523),er=Object.defineProperty,et=Object.defineProperties,en=Object.getOwnPropertyDescriptors,eo=Object.getOwnPropertySymbols,el=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,ea=(e,r,t)=>r in e?er(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ec=(e,r)=>{for(var t in r||(r={}))el.call(r,t)&&ea(e,t,r[t]);if(eo)for(var t of eo(r))ei.call(r,t)&&ea(e,t,r[t]);return e},es=(e,r)=>et(e,en(r)),eu=(e,r)=>{var t={};for(var n in e)el.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&eo)for(var n of eo(e))0>r.indexOf(n)&&ei.call(e,n)&&(t[n]=e[n]);return t};let ed={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},ef=(0,n.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollArea",ed,e),{children:o,className:l,classNames:i,styles:a,scrollbarSize:c,scrollHideDelay:s,type:u,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:m,unstyled:h,viewportProps:b}=t,v=eu(t,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","viewportProps"]),[w,g]=(0,n.useState)(!1),y=(0,J.rZ)(),{classes:E,cx:S}=Q({scrollbarSize:c,offsetScrollbars:f,scrollbarHovered:w,hidden:"never"===u},{name:"ScrollArea",classNames:i,styles:a,unstyled:h});return n.createElement(N,{type:"never"===u?"always":u,scrollHideDelay:s,dir:d||y.dir,ref:r,asChild:!0},n.createElement(ee.x,ec({className:S(E.root,l)},v),n.createElement(T,es(ec({},b),{className:E.viewport,ref:p,onScroll:"function"==typeof m?({currentTarget:e})=>m({x:e.scrollLeft,y:e.scrollTop}):void 0}),o),n.createElement(R,{orientation:"horizontal",className:E.scrollbar,forceMount:!0,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1)},n.createElement(I,{className:E.thumb})),n.createElement(R,{orientation:"vertical",className:E.scrollbar,forceMount:!0,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1)},n.createElement(I,{className:E.thumb})),n.createElement(U,{className:E.corner})))}),ep=(0,n.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollAreaAutosize",ed,e),{maxHeight:o,children:l,classNames:i,styles:a,scrollbarSize:c,scrollHideDelay:s,type:u,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:m,unstyled:h,sx:b}=t,v=eu(t,["maxHeight","children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx"]);return n.createElement(ee.x,es(ec({},v),{ref:r,sx:[{display:"flex",maxHeight:o},...(0,K.R)(b)]}),n.createElement(ee.x,{sx:{display:"flex",flexDirection:"column",flex:1}},n.createElement(ef,{classNames:i,styles:a,scrollHideDelay:s,scrollbarSize:c,type:u,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:m,unstyled:h},l)))});ep.displayName="@mantine/core/ScrollAreaAutosize",ef.displayName="@mantine/core/ScrollArea",ef.Autosize=ep;let em=ef},9236:function(e,r,t){t.d(r,{D:function(){return T}});var n=t(7294),o=t(4761),l=t(6817),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))d.call(r,t)&&f(e,t,r[t]);return e},m=(e,r)=>a(e,c(r)),h=(0,l.k)((e,{element:r,weight:t,size:n,inline:o})=>({root:m(p({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:t||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:void 0!==n?n in e.headings.sizes?e.headings.sizes[n].fontSize:n:e.headings.sizes[r].fontSize,lineHeight:o?1:void 0!==n&&n in e.headings.sizes?e.headings.sizes[n].lineHeight:e.headings.sizes[r].lineHeight,margin:0})})),b=t(5117),v=Object.defineProperty,w=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&E(e,t,r[t]);if(w)for(var t of w(r))y.call(r,t)&&E(e,t,r[t]);return e},C=(e,r)=>{var t={};for(var n in e)g.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&w)for(var n of w(e))0>r.indexOf(n)&&y.call(e,n)&&(t[n]=e[n]);return t};let N={order:1},T=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Title",N,e),{className:l,order:i,children:a,unstyled:c,size:s,weight:u,inline:d}=t,f=C(t,["className","order","children","unstyled","size","weight","inline"]),{classes:p,cx:m}=h({element:`h${i}`,weight:u,size:s,inline:d},{name:"Title",unstyled:c});return[1,2,3,4,5,6].includes(i)?n.createElement(b.x,S({component:`h${i}`,ref:r,className:m(p.root,l)},f),a):null});T.displayName="@mantine/core/Title"}}]);