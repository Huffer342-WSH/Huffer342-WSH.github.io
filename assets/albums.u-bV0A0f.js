import{_ as Y,u as L,a as C,b as k,d as x,c as A,e as P,f as V}from"./app.BysTI9HO.js";import{o as B}from"./index.C3J7z9rb.js";import{f as m,M as i,N as a,a3 as r,S as c,u as o,V as f,P as u,F as b,$ as F,c as w,y as n,O as N,a7 as S}from"./framework.CrQDr1gD.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.BK-sBKTS.js";import"./chunks/dayjs.Byk5cVHE.js";import{u as E}from"./chunks/vue-i18n.KUtIpHG9.js";import"./chunks/vue-router.aOcOW5FA.js";import"./chunks/pinia.HY29yXn_.js";import"./chunks/@vueuse/motion.CRM0IDQD.js";import"./chunks/nprogress.Cino7761.js";import"./animation.BmKSPrMr.js";const I=["title"],O=["src","alt","on-error"],R={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex-center"},T=m({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const s=Y;return a(),i(s,{class:"yun-album-list-item",to:t.album.url},{default:r(()=>[c("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":o(B)},null,40,O),c("figcaption",R,f(t.album.caption),1)],8,I)]),_:1},8,["to"])}}}),W={class:"yun-album-list mb-4"},z=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const s=T;return a(),u("div",W,[(a(!0),u(b,null,F(t.albums,l=>(a(),i(s,{key:l.url,album:l},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},ot=m({__name:"albums",setup(_){const{t}=E(),e=L(),s=C(e);k([x({"@type":"CollectionPage"})]);const l=w(()=>e.value.albums||[]);return(M,j)=>{const d=A,g=D,y=z,p=N("RouterView"),h=P,$=V;return a(),u(b,null,[n(h,null,{default:r(()=>[n(d),n(p,null,{default:r(({Component:v})=>[(a(),i(S(v),null,{"main-header":r(()=>[n(g,{title:o(s)||o(t)("title.album"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color,"page-title-class":o(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":r(()=>[c("div",H,f(o(t)("counter.albums",l.value.length)),1),n(y,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n($)],64)}}});export{ot as default};
