import{E as he,F as L,H as M,J as O,K as A,M as F,R as H,c as k,k as ce,n as de,o as D,r as g,t as pe,u as me}from"./chunk-7AIUYUHY.js";import{$ as N,Aa as U,Ba as q,C as b,Ca as J,D as f,H as z,I as S,Kb as le,La as W,Na as X,Oa as Y,Q as r,R as _,Sa as $,W as R,Za as ee,aa as c,ab as te,bb as u,cb as ie,fa as h,ga as o,gb as ne,hb as ae,jb as se,ka as G,kb as oe,lb as re,ma as d,na as p,oa as P,pa as I,pb as T,qa as w,r as V,ra as y,sa as E,u as j,ua as x,v as m,va as l,w as C,wa as Q,x as Z,xa as B,ya as K}from"./chunk-HRVMPTIP.js";var be=["*"],fe=(t,n,e,i,a,s)=>({"p-sidebar":!0,"p-sidebar-active":t,"p-sidebar-left":n,"p-sidebar-right":e,"p-sidebar-top":i,"p-sidebar-bottom":a,"p-sidebar-full":s}),_e=(t,n)=>({transform:t,transition:n}),ge=t=>({value:"visible",params:t});function ve(t,n){t&1&&y(0)}function ye(t,n){if(t&1&&(I(0),c(1,ve,1,0,"ng-container",5),w()),t&2){let e=l(2);r(),o("ngTemplateOutlet",e.headlessTemplate)}}function xe(t,n){t&1&&y(0)}function ke(t,n){t&1&&P(0,"TimesIcon",13),t&2&&(o("styleClass","p-sidebar-close-icon"),h("data-pc-section","closeicon"))}function Ce(t,n){}function Se(t,n){t&1&&c(0,Ce,0,0,"ng-template")}function Te(t,n){if(t&1&&(d(0,"span",14),c(1,Se,1,0,null,5),p()),t&2){let e=l(4);h("data-pc-section","closeicon"),r(),o("ngTemplateOutlet",e.closeIconTemplate)}}function Ie(t,n){if(t&1){let e=E();d(0,"button",10),x("click",function(a){b(e);let s=l(3);return f(s.close(a))})("keydown.enter",function(a){b(e);let s=l(3);return f(s.close(a))}),c(1,ke,1,2,"TimesIcon",11)(2,Te,2,2,"span",12),p()}if(t&2){let e=l(3);h("aria-label",e.ariaCloseLabel)("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),r(),o("ngIf",!e.closeIconTemplate),r(),o("ngIf",e.closeIconTemplate)}}function we(t,n){t&1&&y(0)}function Ee(t,n){t&1&&y(0)}function De(t,n){if(t&1&&(I(0),d(1,"div",15),c(2,Ee,1,0,"ng-container",5),p(),w()),t&2){let e=l(3);r(),h("data-pc-section","footer"),r(),o("ngTemplateOutlet",e.footerTemplate)}}function Le(t,n){if(t&1&&(d(0,"div",6),c(1,xe,1,0,"ng-container",5)(2,Ie,3,5,"button",7),p(),d(3,"div",8),B(4),c(5,we,1,0,"ng-container",5),p(),c(6,De,3,2,"ng-container",9)),t&2){let e=l(2);h("data-pc-section","header"),r(),o("ngTemplateOutlet",e.headerTemplate),r(),o("ngIf",e.showCloseIcon),r(),h("data-pc-section","content"),r(2),o("ngTemplateOutlet",e.contentTemplate),r(),o("ngIf",e.footerTemplate)}}function Me(t,n){if(t&1){let e=E();d(0,"div",3,0),x("@panelState.start",function(a){b(e);let s=l();return f(s.onAnimationStart(a))})("@panelState.done",function(a){b(e);let s=l();return f(s.onAnimationEnd(a))})("keydown",function(a){b(e);let s=l();return f(s.onKeyDown(a))}),c(2,ye,2,1,"ng-container",4)(3,Le,7,6,"ng-template",null,1,ee),p()}if(t&2){let e=J(4),i=l();G(i.styleClass),o("ngClass",$(9,fe,i.visible,i.position==="left"&&!i.fullScreen,i.position==="right"&&!i.fullScreen,i.position==="top"&&!i.fullScreen,i.position==="bottom"&&!i.fullScreen,i.fullScreen))("@panelState",X(19,ge,Y(16,_e,i.transformOptions,i.transitionOptions)))("ngStyle",i.style),h("data-pc-name","sidebar")("data-pc-section","root"),r(2),o("ngIf",i.headlessTemplate)("ngIfElse",e)}}var Oe=A([M({transform:"{{transform}}",opacity:0}),L("{{transition}}")]),Ae=A([L("{{transition}}",M({transform:"{{transform}}",opacity:0}))]),$e=(()=>{class t{document;el;renderer;cd;config;appendTo;blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){switch(this._position=e,e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}templates;onShow=new S;onHide=new S;visibleChange=new S;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;contentTemplate;headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;constructor(e,i,a,s,v){this.document=e,this.el=i,this.renderer=a,this.cd=s,this.config=v}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"headless":this.headlessTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&k.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",String(parseInt(this.container.style.zIndex)-1)),g.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",e=>{this.dismissible&&this.close(e)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&g.blockBodyScroll())}disableModality(){this.mask&&(g.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&g.unblockBodyScroll(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),k.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):g.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===k.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&k.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=function(i){return new(i||t)(_(ne),_(z),_(R),_(te),_(ce))};static \u0275cmp=C({type:t,selectors:[["p-sidebar"]],contentQueries:function(i,a,s){if(i&1&&K(s,de,4),i&2){let v;U(v=q())&&(a.templates=v)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:[m.HasDecoratorInputTransform,"blockScroll","blockScroll",u],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[m.HasDecoratorInputTransform,"autoZIndex","autoZIndex",u],baseZIndex:[m.HasDecoratorInputTransform,"baseZIndex","baseZIndex",ie],modal:[m.HasDecoratorInputTransform,"modal","modal",u],dismissible:[m.HasDecoratorInputTransform,"dismissible","dismissible",u],showCloseIcon:[m.HasDecoratorInputTransform,"showCloseIcon","showCloseIcon",u],closeOnEscape:[m.HasDecoratorInputTransform,"closeOnEscape","closeOnEscape",u],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[N],ngContentSelectors:be,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["role","complementary",3,"ngClass","ngStyle","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-sidebar-header"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[4,"ngIf"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-sidebar-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-sidebar-close-icon"],[1,"p-sidebar-footer"]],template:function(i,a){i&1&&(Q(),c(0,Me,5,21,"div",2)),i&2&&o("ngIf",a.visible)},dependencies:()=>[ae,se,re,oe,pe,H],styles:[`@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}
`],encapsulation:2,data:{animation:[he("panelState",[O("void => visible",[F(Oe)]),O("visible => void",[F(Ae)])])]},changeDetection:0})}return t})(),et=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=V({imports:[T,me,D,H,D]})}return t})();var rt=(()=>{let n=class n{constructor(){this.themeService=j(le),this.modeLight="lara-light-blue",this.modeDark="lara-dark-blue"}get signalModeDark(){return this.themeService.signalModeDark}tooglePalette(){this.signalModeDark.set(!this.signalModeDark());let i=this.signalModeDark()?this.modeDark:this.modeLight;this.themeService.switchTheme(i)}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=C({type:n,selectors:[["app-darkmode"]],standalone:!0,features:[W],decls:1,vars:0,consts:[[1,"pi","pi-palette",2,"font-size","2rem","cursor","pointer",3,"click"]],template:function(a,s){a&1&&(d(0,"i",0),x("click",function(){return s.tooglePalette()}),p())},dependencies:[T],changeDetection:0});let t=n;return t})();export{$e as a,et as b,rt as c};
