import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.45YYFxBa.js";import{f,a as S}from"./chunks/vue-router.aOcOW5FA.js";import{A as d,M as g,a3 as l,u as T,N as k,U as s,S as e,W as n}from"./framework.CrQDr1gD.js";import"./app.BysTI9HO.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.KUtIpHG9.js";import"./chunks/pinia.HY29yXn_.js";import"./chunks/@vueuse/motion.CRM0IDQD.js";import"./chunks/nprogress.Cino7761.js";import"./YunComment.vue_vue_type_style_index_0_lang.BF_gtew7.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BK-sBKTS.js";import"./post.B3t-mDxK.js";const b=f("/posts/myNotes/mcu/Port-freertos-to-gd32",async r=>JSON.parse('{"title":"GD32移植FreeRTOS","description":"","frontmatter":{"layout":"post","title":"GD32移植FreeRTOS","date":"2024-05-28 19:38:03","excerpt":"GD32移植FreeRTOS","categories":["单片机"]},"headers":[{"level":2,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":2,"title":"下载源码","slug":"下载源码","link":"#下载源码","children":[]},{"level":2,"title":"复制文件","slug":"复制文件","link":"#复制文件","children":[]},{"level":2,"title":"编写FreeRTOSConfig.h","slug":"编写freertosconfig-h","link":"#编写freertosconfig-h","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"关于系统时钟","slug":"关于系统时钟","link":"#关于系统时钟","children":[]}]}],"relativePath":"pages/posts/myNotes/mcu/Port-freertos-to-gd32.md","lastUpdated":null}'),{lazy:(r,i)=>r.name===i.name}),w={__name:"Port-freertos-to-gd32",setup(r,{expose:i}){var c;const{data:o}=b(),p=S(),t=Object.assign(p.meta.frontmatter||{},((c=o.value)==null?void 0:c.frontmatter)||{});return p.meta.frontmatter=t,d("pageData",o.value),d("valaxy:frontmatter",t),globalThis.$frontmatter=t,i({frontmatter:{layout:"post",title:"GD32移植FreeRTOS",date:"2024-05-28 19:38:03",excerpt:"GD32移植FreeRTOS",categories:["单片机"]}}),(a,u)=>{const m=h;return k(),g(m,{frontmatter:T(t)},{"main-content-md":l(()=>u[0]||(u[0]=[e("h2",{id:"模板",tabindex:"-1"},[n("模板 "),e("a",{class:"header-anchor",href:"#模板","aria-label":'Permalink to "模板"'},"​")],-1),e("p",null,[e("a",{href:"https://github.com/Huffer342-WSH/GD32_FreeRTOS_templete",target:"_blank",rel:"noreferrer"},"GD32_FreeRTOS_templete")],-1),e("h2",{id:"下载源码",tabindex:"-1"},[n("下载源码 "),e("a",{class:"header-anchor",href:"#下载源码","aria-label":'Permalink to "下载源码"'},"​")],-1),e("p",null,[n("FreeRTOS源码："),e("a",{href:"https://github.com/FreeRTOS/FreeRTOS-LTS/releases/download/202210.01-LTS/FreeRTOSv202210.01-LTS.zip",target:"_blank",rel:"noreferrer"},"FreeRTOS v202210.01-LTS")],-1),e("h2",{id:"复制文件",tabindex:"-1"},[n("复制文件 "),e("a",{class:"header-anchor",href:"#复制文件","aria-label":'Permalink to "复制文件"'},"​")],-1),e("p",null,[n("官方教程:"),e("a",{href:"https://www.freertos.org/zh-cn-cmn-s/Creating-a-new-FreeRTOS-project.html",target:"_blank",rel:"noreferrer"},"创建一个新的 FreeRTOS 项目")],-1),e("p",null,"一般需要复制的文件如下：",-1),e("div",{style:{"max-height":"500px"},class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",null,"FreeRTOS")]),n(`
`),e("span",{class:"line"},[e("span",null,"  │  CMakeLists.txt")]),n(`
`),e("span",{class:"line"},[e("span",null,"  │")]),n(`
`),e("span",{class:"line"},[e("span",null,"  └─Source")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  CMakeLists.txt")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  croutine.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  event_groups.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  GitHub-FreeRTOS-Kernel-Home.url")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  History.txt")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  LICENSE.md")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  list.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  manifest.yml")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  queue.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  Quick_Start_Guide.url")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  README.md")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  sbom.spdx")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  stream_buffer.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  tasks.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │  timers.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │")]),n(`
`),e("span",{class:"line"},[e("span",null,"      ├─include")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      atomic.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      croutine.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      deprecated_definitions.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      event_groups.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      FreeRTOS.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      list.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      message_buffer.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      mpu_prototypes.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      mpu_wrappers.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      portable.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      projdefs.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      queue.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      semphr.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      StackMacros.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      stack_macros.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      stdint.readme")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      stream_buffer.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      task.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │      timers.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"      │")]),n(`
`),e("span",{class:"line"},[e("span",null,"      └─portable")]),n(`
`),e("span",{class:"line"},[e("span",null,"          │  CMakeLists.txt")]),n(`
`),e("span",{class:"line"},[e("span",null,"          │")]),n(`
`),e("span",{class:"line"},[e("span",null,"          ├─[compiler] // 编译器类型")]),n(`
`),e("span",{class:"line"},[e("span",null,"          │  └─[architecture] // 处理器架构")]),n(`
`),e("span",{class:"line"},[e("span",null,"          │          port.c")]),n(`
`),e("span",{class:"line"},[e("span",null,"          │          portmacro.h")]),n(`
`),e("span",{class:"line"},[e("span",null,"          │")]),n(`
`),e("span",{class:"line"},[e("span",null,"          └─MemMang")]),n(`
`),e("span",{class:"line"},[e("span",null,"                 heap_4.c")])])]),e("button",{class:"collapse"})],-1),e("h2",{id:"编写freertosconfig-h",tabindex:"-1"},[n("编写FreeRTOSConfig.h "),e("a",{class:"header-anchor",href:"#编写freertosconfig-h","aria-label":'Permalink to "编写FreeRTOSConfig.h"'},"​")],-1),e("p",null,"FreeRTOS有三个关键的中断函数",-1),e("ul",null,[e("li",null,"SysTick_Handler： 时钟驱动，用于节拍计数，定时任务调度，延迟等"),e("li",null,"SVC_Handler： 用于初始化FreeRTOS并启动第一个任务。"),e("li",null,"PendSV_Handler： 用于在任务调度过程中执行任务上下文切换，确保正确的任务在正确的时间运行。")],-1),e("p",null,[n("三个函数在"),e("code",null,"port.c"),n("中分别以"),e("code",null,"xPortSysTickHandler"),n("、"),e("code",null,"vPortSVCHandler"),n("、"),e("code",null,"xPortPendSVHandler"),n("命名。 也就是说这三个函数默认是要手动调用的，但是可以在"),e("code",null,"FreeRTOSConfig.h"),n("中用宏重命名三个函数，直接用中断向量表中的名字命名，就不需要手动调用了（当然你也可以去改中断向量表）。官方的原文如下 "),e("a",{href:"https://www.freertos.org/zh-cn-cmn-s/FAQHelp.html",target:"_blank",rel:"noreferrer"},"FreeRTOS常见问题：我的应用程序没有运行，可能出了什么问题？")],-1),e("blockquote",null,[e("p",null,"针对 ARM Cortex-M 用户的特别提示： ARM Cortex-M3、ARM Cortex-M4 和 ARM Cortex-M4F 端口要求 FreeRTOS 处理程序 安装在 SysTick、 PendSV 和 SVCCall 中断向量上。 可以 将 FreeRTOS 定义的 xPortSysTickHandler()， xPortPendSVHandler() 和 vPortSVCHandler() 函数直接填入向量表的对应位置，或者如果 中断向量表与 CMSIS 相容，可以将以下三行 添加到 FreeRTOSConfig.h，用于将 FreeRTOS 函数名称映射到 其对应的 CMSIS 名称。"),e("p",null,"#define vPortSVCHandler SVC_Handler #define xPortPendSVHandler PendSV_Handler #define xPortSysTickHandler SysTick_Handler"),e("p",null,"以这种方式使用 #defines 的前提是， 您的开发工具提供的默认处理程序 被定义为弱符号。 如果默认处理程序没有被定义为弱符号， 则需要将其注释掉或删除。")],-1),e("h2",{id:"其他",tabindex:"-1"},[n("其他 "),e("a",{class:"header-anchor",href:"#其他","aria-label":'Permalink to "其他"'},"​")],-1),e("h3",{id:"关于系统时钟",tabindex:"-1"},[n("关于系统时钟 "),e("a",{class:"header-anchor",href:"#关于系统时钟","aria-label":'Permalink to "关于系统时钟"'},"​")],-1),e("p",null,"起初我以为要自己配置Systick，但是后来发现FreeRTOS会自动配置Systick。",-1),e("p",null,"在vTaskStartScheduler() -> xPortStartScheduler() -> vPortSetupTimerInterrupt() 中会按照FreeRTOSConfig中配置时钟配置systick。",-1),e("p",null,[n("不过如果不想用systick作为系统时钟源，则需要重写"),e("code",null,"void vPortSetupTimerInterrupt( void )"),n(",并且在定时器中断中调用"),e("code",null,"xPortSysTickHandler()")],-1)])),"main-header":l(()=>[s(a.$slots,"main-header")]),"main-header-after":l(()=>[s(a.$slots,"main-header-after")]),"main-nav":l(()=>[s(a.$slots,"main-nav")]),"main-content-before":l(()=>[s(a.$slots,"main-content-before")]),"main-content":l(()=>[s(a.$slots,"main-content")]),"main-content-after":l(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[s(a.$slots,"main-nav-after")]),comment:l(()=>[s(a.$slots,"comment")]),footer:l(()=>[s(a.$slots,"footer")]),aside:l(()=>[s(a.$slots,"aside")]),"aside-custom":l(()=>[s(a.$slots,"aside-custom")]),default:l(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{w as default,b as usePageData};
