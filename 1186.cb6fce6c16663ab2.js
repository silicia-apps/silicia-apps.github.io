"use strict";(self.webpackChunksio_demo=self.webpackChunksio_demo||[]).push([[1186],{4147:(M,u,i)=>{i.d(u,{a:()=>f,b:()=>l,p:()=>g});const g=(d,...h)=>console.warn(`[Ionic Warning]: ${d}`,...h),l=(d,...h)=>console.error(`[Ionic Error]: ${d}`,...h),f=(d,...h)=>console.error(`<${d.tagName.toLowerCase()}> must be used inside ${h.join(" or ")}.`)},3583:(M,u,i)=>{i.r(u),i.d(u,{ion_reorder:()=>b,ion_reorder_group:()=>I});var g=i(5861),l=i(1308),f=i(109),d=i(5179),h=i(8416),y=i(5730),p=i(7864);const b=class{constructor(e){(0,l.r)(this,e)}onClick(e){const t=this.el.closest("ion-reorder-group");e.preventDefault(),(!t||!t.disabled)&&e.stopImmediatePropagation()}render(){const e=(0,d.b)(this);return(0,l.h)(l.H,{class:e},(0,l.h)("slot",null,(0,l.h)("ion-icon",{icon:"ios"===e?f.j:f.k,lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return(0,l.i)(this)}};b.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const I=class{constructor(e){(0,l.r)(this,e),this.ionItemReorder=(0,l.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var e=this;return(0,g.Z)(function*(){const t=(0,h.f)(e.el);t&&(e.scrollEl=yield(0,h.g)(t)),e.gesture=(yield Promise.resolve().then(i.bind(i,1898))).createGesture({el:e.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:s=>e.canStart(s),onStart:s=>e.onStart(s),onMove:s=>e.onMove(s),onEnd:()=>e.onEnd()}),e.disabledChanged()})()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(e){return Promise.resolve(this.completeReorder(e))}canStart(e){if(this.selectedItemEl||0!==this.state)return!1;const s=e.event.target.closest("ion-reorder");if(!s)return!1;const r=B(s,this.el);return!!r&&(e.data=r,!0)}onStart(e){e.event.preventDefault();const t=this.selectedItemEl=e.data,s=this.cachedHeights;s.length=0;const r=this.el,o=r.children;if(!o||0===o.length)return;let c=0;for(let a=0;a<o.length;a++){const m=o[a];c+=m.offsetHeight,s.push(c),m.$ionIndex=a}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+_,this.scrollElBottom=a.bottom-_}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=E(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(T),(0,p.a)()}onMove(e){const t=this.selectedItemEl;if(!t)return;const s=this.autoscroll(e.currentY),r=this.containerTop-s,c=Math.max(r,Math.min(e.currentY,this.containerBottom-s)),n=s+c-e.startY,m=this.itemIndexForTop(c-r);if(m!==this.lastToIndex){const D=E(t);this.lastToIndex=m,(0,p.b)(),this.reorderMove(D,m)}t.style.transform=`translateY(${n}px)`}onEnd(){const e=this.selectedItemEl;if(this.state=2,!e)return void(this.state=0);const t=this.lastToIndex,s=E(e);t===s?this.completeReorder():this.ionItemReorder.emit({from:s,to:t,complete:this.completeReorder.bind(this)}),(0,p.h)()}completeReorder(e){const t=this.selectedItemEl;if(t&&2===this.state){const s=this.el.children,r=s.length,o=this.lastToIndex,c=E(t);(0,y.r)(()=>{o===c||void 0!==e&&!0!==e||this.el.insertBefore(t,c<o?s[o+1]:s[o]);for(let n=0;n<r;n++)s[n].style.transform=""}),Array.isArray(e)&&(e=P(e,c,o)),t.style.transition="",t.classList.remove(T),this.selectedItemEl=void 0,this.state=0}return e}itemIndexForTop(e){const t=this.cachedHeights;for(let s=0;s<t.length;s++)if(t[s]>e)return s;return t.length-1}reorderMove(e,t){const s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let n="";o>e&&o<=t?n=`translateY(${-s}px)`:o<e&&o>=t&&(n=`translateY(${s}px)`),r[o].style.transform=n}}autoscroll(e){if(!this.scrollEl)return 0;let t=0;return e<this.scrollElTop?t=-x:e>this.scrollElBottom&&(t=x),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}render(){const e=(0,d.b)(this);return(0,l.h)(l.H,{class:{[e]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,l.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},E=e=>e.$ionIndex,B=(e,t)=>{let s;for(;e;){if(s=e.parentElement,s===t)return e;e=s}},_=60,x=10,T="reorder-selected",P=(e,t,s)=>{const r=e[t];return e.splice(t,1),e.splice(s,0,r),e.slice()};I.style=".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);