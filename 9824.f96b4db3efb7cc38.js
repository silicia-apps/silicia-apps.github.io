"use strict";(self.webpackChunksio_demo=self.webpackChunksio_demo||[]).push([[9824],{677:(T,_,i)=>{i.r(_),i.d(_,{SioAuth403PageModule:()=>m});var s=i(5323),l=i(973),o=i(3834),d=i(7921),n=i(8274),h=i(7379),P=i(487),a=i(2078);const C=[{path:"",component:(()=>{class c{constructor(r){this.store=r}ngOnInit(){console.log("[Auth/Pages/Login] Init Page")}goLogin(){this.store.dispatch(new d.Fg(["/auth/login"]))}}return c.\u0275fac=function(r){return new(r||c)(n.Y36(o.yh))},c.\u0275cmp=n.Xpm({type:c,selectors:[["sio-auth-403-page"]],decls:23,vars:1,consts:[["title","Accesso Negato"],[3,"fullscreen"],["collapse","condense"],[1,"ion-text-center"],["slot","start","color","danger","name","lock-closed"],["size","large"],["color","danger","name","lock-closed"],["expand","block",3,"click"]],template:function(r,O){1&r&&(n._UZ(0,"sio-page",0),n.TgZ(1,"ion-content",1)(2,"ion-header",2)(3,"div",3),n._UZ(4,"sio-icon",4),n.qZA(),n.TgZ(5,"div")(6,"ion-toolbar")(7,"ion-title",5),n._uU(8,"Account Richiesto"),n.qZA()()()(),n.TgZ(9,"ion-grid")(10,"ion-row")(11,"ion-col",3),n._UZ(12,"sio-icon",6),n.qZA()(),n.TgZ(13,"ion-row")(14,"ion-col",3)(15,"p"),n._uU(16," Per Accedere a tutte le funzionalit\xe0 dell'applicazione devi autenticarti, fallo adesso l'account \xe8 "),n.TgZ(17,"strong"),n._uU(18,"Gratuito"),n.qZA()()()(),n.TgZ(19,"ion-row")(20,"ion-col")(21,"ion-button",7),n.NdJ("click",function(){return O.goLogin()}),n._uU(22,"Accedi Adesso"),n.qZA()()()()()),2&r&&(n.xp6(1),n.Q6J("fullscreen",!0))},dependencies:[h.B,P.X,a.YG,a.wI,a.W2,a.jY,a.Gu,a.Nd,a.wd,a.sr],styles:["[_nghost-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:128px;width:128px}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),c})()}];let m=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[s.e,l.Bz.forChild(C)]}),c})()},487:(T,_,i)=>{i.d(_,{X:()=>E});var s=i(655),l=i(2024),o=i(8274),d=i(596),n=i(7276),h=i(8402),P=i(6895),a=i(2078),A=i(2419);function C(t,g){1&t&&o._UZ(0,"ion-menu-button")}function m(t,g){1&t&&o._UZ(0,"ion-back-button")}function c(t,g){if(1&t&&(o.TgZ(0,"ion-header",5)(1,"ion-toolbar")(2,"ion-buttons",6),o.ynx(3),o.YNc(4,C,1,0,"ion-menu-button",4),o.YNc(5,m,1,0,"ion-back-button",4),o.BQk(),o.qZA(),o.TgZ(6,"ion-title"),o._uU(7),o.ALo(8,"transloco"),o.qZA(),o.TgZ(9,"ion-buttons",7),o.Hsn(10,1),o.qZA()()()),2&t){const e=o.oxw();o.Q6J("translucent",!0),o.xp6(4),o.Q6J("ngIf",e.menu),o.xp6(1),o.Q6J("ngIf",e.back),o.xp6(2),o.Oqu(o.lcZ(8,4,e.title))}}function p(t,g){if(1&t&&(o.TgZ(0,"ion-header",8)(1,"ion-toolbar")(2,"ion-title",9),o._uU(3),o.ALo(4,"transloco"),o.qZA()()()),2&t){const e=o.oxw();o.xp6(3),o.Oqu(o.lcZ(4,1,e.title))}}function r(t,g){1&t&&(o.ynx(0),o.TgZ(1,"div",10)(2,"h1"),o._uU(3),o.ALo(4,"transloco"),o.qZA(),o.TgZ(5,"strong"),o._uU(6),o.ALo(7,"transloco"),o.qZA(),o.TgZ(8,"p"),o._uU(9),o.TgZ(10,"a",11),o._uU(11,"SIO Framework"),o.qZA()()(),o.BQk()),2&t&&(o.xp6(3),o.Oqu(o.lcZ(4,3,"PAGE_COMPONENT_DEFAULT_1")),o.xp6(3),o.Oqu(o.lcZ(7,5,"PAGE_COMPONENT_DEFAULT_2")),o.xp6(3),o.hij(" ","PAGE_COMPONENT_LINK"," "))}const O=["*",[["","slot","end"]]],M=["*","[slot='end']"];let E=(()=>{class t{set toolbar(e){this.sioCorePageComponentState.setToolbar(e)}set menu(e){this.sioCorePageComponentState.setMenu(e)}set back(e){this.sioCorePageComponentState.setBack(e)}set search(e){this.sioCorePageComponentState.setSearch(e)}set fullmode(e){this.sioCoreAppComponentState.SetFullmode(e)}constructor(e,u,f){this.sioLoggerService=e,this.sioCoreAppComponentState=u,this.sioCorePageComponentState=f,this.toolbar=!0,this.title="PAGE_TITLE",this.menu=!1,this.back=!1,this.search=!1}ngOnInit(){this.sioLoggerService.debug("[sioCorePageComponentState][ngOnInit]")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(d.G),o.Y36(n.c),o.Y36(h.r))},t.\u0275cmp=o.Xpm({type:t,selectors:[["sio-page"]],inputs:{title:"title",color:"color",toolbar:"toolbar",menu:"menu",back:"back",search:"search",fullmode:"fullmode"},ngContentSelectors:M,decls:7,vars:5,consts:[["collapse","fade","class","ion-no-border",3,"translucent",4,"ngIf"],[1,"ion-padding",3,"color","fullscreen"],["collapse","condense",4,"ngIf"],["container",""],[4,"ngIf"],["collapse","fade",1,"ion-no-border",3,"translucent"],["slot","start"],["slot","end"],["collapse","condense"],["size","large"],["id","container"],["target","_blank","rel","noopener noreferrer","href","https://github.com/silicia-apps/sio/wiki"]],template:function(e,u){if(1&e&&(o.F$t(O),o.YNc(0,c,11,6,"ion-header",0),o.TgZ(1,"ion-content",1),o.YNc(2,p,5,3,"ion-header",2),o.TgZ(3,"div",null,3),o.Hsn(5),o.qZA(),o.YNc(6,r,12,7,"ng-container",4),o.qZA()),2&e){const f=o.MAs(4);o.Q6J("ngIf",u.toolbar&&!u.fullmode),o.xp6(1),o.Q6J("color",u.color)("fullscreen",!0),o.xp6(1),o.Q6J("ngIf",u.toolbar&&!u.fullmode),o.xp6(4),o.Q6J("ngIf",!f.hasChildNodes())}},dependencies:[P.O5,a.oU,a.Sm,a.W2,a.Gu,a.fG,a.wd,a.sr,a.cs,A.Ot],styles:["[_nghost-%COMP%]   #container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),(0,s.gn)([(0,l.r)(),(0,s.w6)("design:type",Object),(0,s.w6)("design:paramtypes",[Object])],t.prototype,"toolbar",null),(0,s.gn)([(0,l.r)(),(0,s.w6)("design:type",Object),(0,s.w6)("design:paramtypes",[Object])],t.prototype,"menu",null),(0,s.gn)([(0,l.r)(),(0,s.w6)("design:type",Object),(0,s.w6)("design:paramtypes",[Object])],t.prototype,"back",null),(0,s.gn)([(0,l.r)(),(0,s.w6)("design:type",Object),(0,s.w6)("design:paramtypes",[Object])],t.prototype,"search",null),(0,s.gn)([(0,l.r)(),(0,s.w6)("design:type",Object),(0,s.w6)("design:paramtypes",[Object])],t.prototype,"fullmode",null),t})()}}]);