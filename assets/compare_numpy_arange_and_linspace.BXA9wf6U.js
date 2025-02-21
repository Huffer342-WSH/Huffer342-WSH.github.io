import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang.45YYFxBa.js";import{f as E,a as y}from"./chunks/vue-router.aOcOW5FA.js";import{A as d,M as c,a3 as l,u as m,N as F,U as t,S as i,W as s}from"./framework.CrQDr1gD.js";import"./app.BysTI9HO.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.KUtIpHG9.js";import"./chunks/pinia.HY29yXn_.js";import"./chunks/@vueuse/motion.CRM0IDQD.js";import"./chunks/nprogress.Cino7761.js";import"./YunComment.vue_vue_type_style_index_0_lang.BF_gtew7.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BK-sBKTS.js";import"./post.B3t-mDxK.js";const C=E("/posts/myNotes/some-details/compare_numpy_arange_and_linspace",async e=>JSON.parse('{"title":"对比numpy.arange 和 numpy.linspace","description":"","frontmatter":{"layout":"post","title":"对比numpy.arange 和 numpy.linspace","date":"2024-9-12 15:40:00","categories":["细枝末节"],"excerpt":"numpy.arange会因为浮点数的精度问题导致数组的长度和预想的不一样"},"headers":[{"level":2,"title":"精度和浮点数问题","slug":"精度和浮点数问题","link":"#精度和浮点数问题","children":[]},{"level":2,"title":"是否包含终点","slug":"是否包含终点","link":"#是否包含终点","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"pages/posts/myNotes/some-details/compare_numpy_arange_and_linspace.md","lastUpdated":null}'),{lazy:(e,h)=>e.name===h.name}),M={__name:"compare_numpy_arange_and_linspace",setup(e,{expose:h}){var r;const{data:p}=C(),k=y(),n=Object.assign(k.meta.frontmatter||{},((r=p.value)==null?void 0:r.frontmatter)||{});return k.meta.frontmatter=n,d("pageData",p.value),d("valaxy:frontmatter",n),globalThis.$frontmatter=n,h({frontmatter:{layout:"post",title:"对比numpy.arange 和 numpy.linspace",date:"2024-9-12 15:40:00",categories:["细枝末节"],excerpt:"numpy.arange会因为浮点数的精度问题导致数组的长度和预想的不一样"}}),(a,o)=>{const g=u;return F(),c(g,{frontmatter:m(n)},{"main-content-md":l(()=>o[0]||(o[0]=[i("p",null,"我写的一个用来生成雷达仿真信号的函数中偶然出现了数组运算时大小不匹配的问题，最后排查到是np.arange的问题。np.arange在步长是浮点数，且终点时步长的整数倍时，有时会因为浮点数的精度问题导致生成的数组居然包含了终点，预想的长一点。",-1),i("p",null,[s("解决方案是使用会指定数组长度的 "),i("code",null,"np.linspace"),s("；不知道matlab会不会犯一样的毛病。")],-1),i("h2",{id:"精度和浮点数问题",tabindex:"-1"},[s("精度和浮点数问题 "),i("a",{class:"header-anchor",href:"#精度和浮点数问题","aria-label":'Permalink to "精度和浮点数问题"'},"​")],-1),i("ul",null,[i("li",null,[i("p",null,[i("strong",null,[i("code",null,"np.arange")])]),i("ul",null,[i("li",null,[i("p",null,[s("当 "),i("code",null,"step"),s(" 是浮点数时，浮点精度问题可能导致最后一个元素接近但不等于 "),i("code",null,"stop"),s("，从而影响数组长度或数值。")])]),i("li",null,[i("p",null,"例如："),i("div",{style:{"max-height":"500px"},class:"language-python vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"python"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"step "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 118e-6")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"x "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," np.arange("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"step,step)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"y "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," np.arange("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"11"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"step,step)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"print"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"f"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"x.shape:'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"x.shape"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},", x:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"x"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"print"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"f"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"y.shape:'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"y.shape"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},", y:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"x"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])]),i("button",{class:"collapse"})]),i("p",null,"会输出"),i("div",{style:{"max-height":"500px"},class:"language- vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"}),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",null,"x.shape:11,, x:[0.       0.000118 0.000236 0.000354 0.000472 0.00059  0.000708 0.000826 0.000944 0.001062 0.00118 ]")]),s(`
`),i("span",{class:"line"},[i("span")]),s(`
`),i("span",{class:"line"},[i("span",null,"y.shape:11,, y:[0.       0.000118 0.000236 0.000354 0.000472 0.00059  0.000708 0.000826 0.000944 0.001062 0.00118 ]")])])]),i("button",{class:"collapse"})]),i("p",null,"x的长度并不是我们预想的10,而是11。")])])]),i("li",null,[i("p",null,[i("strong",null,[i("code",null,"np.linspace")])]),i("ul",null,[i("li",null,[i("code",null,"linspace"),s(" 不存在这种浮点数精度问题，因为它根据元素数量计算出精确的步长，因此能够确保精确生成的数值。")]),i("li",null,[s("默认情况下，"),i("code",null,"stop"),s(),i("strong",null,"包含在内"),s("。不过可以通过设置 "),i("code",null,"endpoint=False"),s(" 来排除终点。")])]),i("p",null,"示例："),i("div",{style:{"max-height":"500px"},class:"language-python vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"python"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"arr "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," np.linspace("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"endpoint"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"False"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"print"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(arr)  "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Output: [0.  0.2 0.4 0.6 0.8]")])])]),i("button",{class:"collapse"})])])],-1),i("h2",{id:"是否包含终点",tabindex:"-1"},[i("strong",null,"是否包含终点"),s(),i("a",{class:"header-anchor",href:"#是否包含终点","aria-label":'Permalink to "**是否包含终点**"'},"​")],-1),i("ul",null,[i("li",null,[i("p",null,[i("strong",null,[i("code",null,"np.arange")])]),i("ul",null,[i("li",null,[i("strong",null,"终点不包含"),s("，即生成的数组不会包含 "),i("code",null,"stop"),s(" 值。")])])]),i("li",null,[i("p",null,[i("strong",null,[i("code",null,"np.linspace")])]),i("ul",null,[i("li",null,[s("默认情况下，"),i("code",null,"stop"),s(),i("strong",null,"包含在内"),s("。不过可以通过设置 "),i("code",null,"endpoint=False"),s(" 来排除终点。")])]),i("p",null,"示例："),i("div",{style:{"max-height":"500px"},class:"language-python vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"python"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"arr "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," np.linspace("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"endpoint"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"False"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"print"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(arr)  "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Output: [0.  0.2 0.4 0.6 0.8]")])])]),i("button",{class:"collapse"})])])],-1),i("h2",{id:"总结",tabindex:"-1"},[s("总结 "),i("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),i("ul",null,[i("li",null,[i("p",null,[s("使用 "),i("code",null,"np.arange"),s("：")]),i("ul",null,[i("li",null,"适合生成整数的等差数列，加入需要浮点数可以先生成整数再做除法")])]),i("li",null,[i("p",null,[s("使用 "),i("code",null,"np.linspace"),s("：")]),i("ul",null,[i("li",null,[s("常常因为输入参数时要做一些额外的运算而被嫌弃，确实比 "),i("code",null,"np.arange"),s(" 稳健一点。")]),i("li",null,[s("需要整数的话还是建议使用 "),i("code",null,"np.arange"),s("。")])])])],-1)])),"main-header":l(()=>[t(a.$slots,"main-header")]),"main-header-after":l(()=>[t(a.$slots,"main-header-after")]),"main-nav":l(()=>[t(a.$slots,"main-nav")]),"main-content-before":l(()=>[t(a.$slots,"main-content-before")]),"main-content":l(()=>[t(a.$slots,"main-content")]),"main-content-after":l(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(a.$slots,"main-nav-after")]),comment:l(()=>[t(a.$slots,"comment")]),footer:l(()=>[t(a.$slots,"footer")]),aside:l(()=>[t(a.$slots,"aside")]),"aside-custom":l(()=>[t(a.$slots,"aside-custom")]),default:l(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{M as default,C as usePageData};
