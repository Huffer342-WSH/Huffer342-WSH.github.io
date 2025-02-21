import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang.45YYFxBa.js";import{f as z,a as h}from"./chunks/vue-router.aOcOW5FA.js";import{A as f,M as g,a3 as e,u as y,N as k,U as s,S as t,W as r}from"./framework.CrQDr1gD.js";import"./app.BysTI9HO.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.KUtIpHG9.js";import"./chunks/pinia.HY29yXn_.js";import"./chunks/@vueuse/motion.CRM0IDQD.js";import"./chunks/nprogress.Cino7761.js";import"./YunComment.vue_vue_type_style_index_0_lang.BF_gtew7.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BK-sBKTS.js";import"./post.B3t-mDxK.js";const v="/assets/add-lrzsz.DTHdPFPg.png",$=z("/posts/myNotes/zynq/add_lrzsz_in_rootfs",async n=>JSON.parse('{"title":"petalinux在配置rootfs时添加lrzsz","description":"","frontmatter":{"layout":"post","title":"petalinux在配置rootfs时添加lrzsz","date":"2024-10-08 15:24:52","categories":["ZYNQ笔记"],"excerpt":null,"hide":false},"headers":[],"relativePath":"pages/posts/myNotes/zynq/add_lrzsz_in_rootfs.md","lastUpdated":null}'),{lazy:(n,l)=>n.name===l.name}),M={__name:"add_lrzsz_in_rootfs",setup(n,{expose:l}){var p;const{data:i}=$(),m=h(),o=Object.assign(m.meta.frontmatter||{},((p=i.value)==null?void 0:p.frontmatter)||{});return m.meta.frontmatter=o,f("pageData",i.value),f("valaxy:frontmatter",o),globalThis.$frontmatter=o,l({frontmatter:{layout:"post",title:"petalinux在配置rootfs时添加lrzsz",date:"2024-10-08 15:24:52",categories:["ZYNQ笔记"],excerpt:null,hide:!1}}),(a,d)=>{const u=c;return k(),g(u,{frontmatter:y(o)},{"main-content-md":e(()=>d[0]||(d[0]=[t("p",null,"开发板在没有网的情况下就只能用串口传文件了，因为串口是用来与终端通信了，所以可以用lrzsz来传文件。",-1),t("p",null,"petalinux在制作rootfs时可以添加很多软件，做出来的镜像启动后就能直接用这些程序。lrzsz也是可选项，添加lrzsz的步骤如下：",-1),t("ol",null,[t("li",null,[t("p",null,"打开配置菜单"),t("div",{style:{"max-height":"500px"},class:"language-shell vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"shell"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[t("code",{"v-pre":""},[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"petalinux-config"),t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -c"),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," rootfs")])])]),t("button",{class:"collapse"})])]),t("li",null,[t("p",null,[r("进入目录"),t("code",null,"Filesystem Packages → console → network → lrzsz"),r("，把"),t("code",null,"lrzsz"),r("勾上。")])])],-1),t("figure",null,[t("img",{src:v,alt:"petalinux-config添加lrzsz菜单",loading:"lazy",decoding:"async"})],-1)])),"main-header":e(()=>[s(a.$slots,"main-header")]),"main-header-after":e(()=>[s(a.$slots,"main-header-after")]),"main-nav":e(()=>[s(a.$slots,"main-nav")]),"main-content-before":e(()=>[s(a.$slots,"main-content-before")]),"main-content":e(()=>[s(a.$slots,"main-content")]),"main-content-after":e(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(a.$slots,"main-nav-after")]),comment:e(()=>[s(a.$slots,"comment")]),footer:e(()=>[s(a.$slots,"footer")]),aside:e(()=>[s(a.$slots,"aside")]),"aside-custom":e(()=>[s(a.$slots,"aside-custom")]),default:e(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{M as default,$ as usePageData};
