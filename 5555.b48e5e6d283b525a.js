"use strict";(self.webpackChunksio_demo=self.webpackChunksio_demo||[]).push([[5555],{5555:(T,m,e)=>{e.r(m),e.d(m,{SioAuthProfilePageModule:()=>A});var i=e(6895),g=e(973),o=e(5323),C=e(5861),a=e(8274),d=e(596),h=e(2758),l=e(3405),_=e(4111),f=e(487),P=e(2078);const O=[{path:"",component:(()=>{class s{constructor(r,t){this.sioCoreLoggerService=r,this.sioAuthState=t}logout(){var r=this;return(0,C.Z)(function*(){r.sioCoreLoggerService.info("[SioAuthProfilePageComponent][logout] Dispatch logout action"),yield r.sioAuthState.logout()})()}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(d.G),a.Y36(h.u))},s.\u0275cmp=a.Xpm({type:s,selectors:[["sio-auth-profile-page"]],decls:6,vars:0,consts:[["title","auth.PAGE_TITLE_PROFILE"],["id","logged"],["icon","exit","caption","auth.M_EXIT",3,"eClick"]],template:function(r,t){1&r&&(a._UZ(0,"sio-page",0),a.TgZ(1,"ion-content")(2,"ion-card"),a._UZ(3,"sio-menu",1),a.qZA(),a.TgZ(4,"ion-card")(5,"sio-menu-item",2),a.NdJ("eClick",function(){return t.logout()}),a.qZA()()())},dependencies:[l.s,_.S,f.X,P.PM,P.W2]}),s})()}];let A=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[i.ez,o.e,g.Bz.forChild(O)]}),s})()},487:(T,m,e)=>{e.d(m,{X:()=>r});var i=e(655),g=e(2024),o=e(8274),C=e(596),a=e(7276),d=e(8402),h=e(6895),l=e(2078),_=e(2419);function f(t,c){1&t&&o._UZ(0,"ion-menu-button")}function P(t,c){1&t&&o._UZ(0,"ion-back-button")}function S(t,c){if(1&t&&(o.TgZ(0,"ion-header",5)(1,"ion-toolbar")(2,"ion-buttons",6),o.ynx(3),o.YNc(4,f,1,0,"ion-menu-button",4),o.YNc(5,P,1,0,"ion-back-button",4),o.BQk(),o.qZA(),o.TgZ(6,"ion-title"),o._uU(7),o.ALo(8,"transloco"),o.qZA(),o.TgZ(9,"ion-buttons",7),o.Hsn(10,1),o.qZA()()()),2&t){const n=o.oxw();o.Q6J("translucent",!0),o.xp6(4),o.Q6J("ngIf",n.menu),o.xp6(1),o.Q6J("ngIf",n.back),o.xp6(2),o.Oqu(o.lcZ(8,4,n.title))}}function O(t,c){if(1&t&&(o.TgZ(0,"ion-header",8)(1,"ion-toolbar")(2,"ion-title",9),o._uU(3),o.ALo(4,"transloco"),o.qZA()()()),2&t){const n=o.oxw();o.xp6(3),o.Oqu(o.lcZ(4,1,n.title))}}function A(t,c){1&t&&(o.ynx(0),o.TgZ(1,"div",10)(2,"h1"),o._uU(3),o.ALo(4,"transloco"),o.qZA(),o.TgZ(5,"strong"),o._uU(6),o.ALo(7,"transloco"),o.qZA(),o.TgZ(8,"p"),o._uU(9),o.TgZ(10,"a",11),o._uU(11,"SIO Framework"),o.qZA()()(),o.BQk()),2&t&&(o.xp6(3),o.Oqu(o.lcZ(4,3,"PAGE_COMPONENT_DEFAULT_1")),o.xp6(3),o.Oqu(o.lcZ(7,5,"PAGE_COMPONENT_DEFAULT_2")),o.xp6(3),o.hij(" ","PAGE_COMPONENT_LINK"," "))}const s=["*",[["","slot","end"]]],p=["*","[slot='end']"];let r=(()=>{class t{set toolbar(n){this.sioCorePageComponentState.setToolbar(n)}set menu(n){this.sioCorePageComponentState.setMenu(n)}set back(n){this.sioCorePageComponentState.setBack(n)}set search(n){this.sioCorePageComponentState.setSearch(n)}set fullmode(n){this.sioCoreAppComponentState.SetFullmode(n)}constructor(n,u,E){this.sioLoggerService=n,this.sioCoreAppComponentState=u,this.sioCorePageComponentState=E,this.toolbar=!0,this.title="PAGE_TITLE",this.menu=!1,this.back=!1,this.search=!1}ngOnInit(){this.sioLoggerService.debug("[sioCorePageComponentState][ngOnInit]")}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(C.G),o.Y36(a.c),o.Y36(d.r))},t.\u0275cmp=o.Xpm({type:t,selectors:[["sio-page"]],inputs:{title:"title",color:"color",toolbar:"toolbar",menu:"menu",back:"back",search:"search",fullmode:"fullmode"},ngContentSelectors:p,decls:7,vars:5,consts:[["collapse","fade","class","ion-no-border",3,"translucent",4,"ngIf"],[1,"ion-padding",3,"color","fullscreen"],["collapse","condense",4,"ngIf"],["container",""],[4,"ngIf"],["collapse","fade",1,"ion-no-border",3,"translucent"],["slot","start"],["slot","end"],["collapse","condense"],["size","large"],["id","container"],["target","_blank","rel","noopener noreferrer","href","https://github.com/silicia-apps/sio/wiki"]],template:function(n,u){if(1&n&&(o.F$t(s),o.YNc(0,S,11,6,"ion-header",0),o.TgZ(1,"ion-content",1),o.YNc(2,O,5,3,"ion-header",2),o.TgZ(3,"div",null,3),o.Hsn(5),o.qZA(),o.YNc(6,A,12,7,"ng-container",4),o.qZA()),2&n){const E=o.MAs(4);o.Q6J("ngIf",u.toolbar&&!u.fullmode),o.xp6(1),o.Q6J("color",u.color)("fullscreen",!0),o.xp6(1),o.Q6J("ngIf",u.toolbar&&!u.fullmode),o.xp6(4),o.Q6J("ngIf",!E.hasChildNodes())}},dependencies:[h.O5,l.oU,l.Sm,l.W2,l.Gu,l.fG,l.wd,l.sr,l.cs,_.Ot],styles:["[_nghost-%COMP%]   #container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),(0,i.gn)([(0,g.r)(),(0,i.w6)("design:type",Object),(0,i.w6)("design:paramtypes",[Object])],t.prototype,"toolbar",null),(0,i.gn)([(0,g.r)(),(0,i.w6)("design:type",Object),(0,i.w6)("design:paramtypes",[Object])],t.prototype,"menu",null),(0,i.gn)([(0,g.r)(),(0,i.w6)("design:type",Object),(0,i.w6)("design:paramtypes",[Object])],t.prototype,"back",null),(0,i.gn)([(0,g.r)(),(0,i.w6)("design:type",Object),(0,i.w6)("design:paramtypes",[Object])],t.prototype,"search",null),(0,i.gn)([(0,g.r)(),(0,i.w6)("design:type",Object),(0,i.w6)("design:paramtypes",[Object])],t.prototype,"fullmode",null),t})()}}]);