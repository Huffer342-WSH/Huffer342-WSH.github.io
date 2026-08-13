import{Bt as e,Ht as t,Q as n,U as r,W as i,er as a,qn as o,qt as s,yn as c}from"./framework.CSzCw9LZ.js";import{n as l}from"./theme.CenFutRc.js";import"./chunks/vue-i18n.DPiClx16.js";import{a as u,i as d}from"./chunks/vue-router.4BejMmlS.js";var f={__name:`Port-freertos-to-gd32`,setup(f,{expose:p}){let m=o(JSON.parse(`{"title":"GD32移植FreeRTOS","description":"","frontmatter":{"layout":"post","title":"GD32移植FreeRTOS","date":"2024-05-28 19:38:03","excerpt":"GD32移植FreeRTOS","categories":["单片机"]},"headers":[],"relativePath":"pages/posts/myNotes/mcu/Port-freertos-to-gd32.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{layout:`post`,title:`GD32移植FreeRTOS`,date:`2024-05-28 19:38:03`,excerpt:`GD32移植FreeRTOS`,categories:[`单片机`]}}),(t,o)=>{let u=l;return e(),i(u,{frontmatter:a(_)},{"main-content-md":c(()=>[...o[0]||=[r(`h2`,{id:`模板`,tabindex:`-1`},[n(`模板 `),r(`a`,{class:`header-anchor`,href:`#模板`,"aria-label":`Permalink to "模板"`},`​`)],-1),r(`p`,null,[r(`a`,{href:`https://github.com/Huffer342-WSH/GD32_FreeRTOS_templete`,target:`_blank`,rel:`noreferrer`},`GD32_FreeRTOS_templete`)],-1),r(`h2`,{id:`下载源码`,tabindex:`-1`},[n(`下载源码 `),r(`a`,{class:`header-anchor`,href:`#下载源码`,"aria-label":`Permalink to "下载源码"`},`​`)],-1),r(`p`,null,[n(`FreeRTOS源码：`),r(`a`,{href:`https://github.com/FreeRTOS/FreeRTOS-LTS/releases/download/202210.01-LTS/FreeRTOSv202210.01-LTS.zip`,target:`_blank`,rel:`noreferrer`},`FreeRTOS v202210.01-LTS`)],-1),r(`h2`,{id:`复制文件`,tabindex:`-1`},[n(`复制文件 `),r(`a`,{class:`header-anchor`,href:`#复制文件`,"aria-label":`Permalink to "复制文件"`},`​`)],-1),r(`p`,null,[n(`官方教程:`),r(`a`,{href:`https://www.freertos.org/zh-cn-cmn-s/Creating-a-new-FreeRTOS-project.html`,target:`_blank`,rel:`noreferrer`},`创建一个新的 FreeRTOS 项目`)],-1),r(`p`,null,`一般需要复制的文件如下：`,-1),r(`div`,{class:`language- max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`FreeRTOS`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  │  CMakeLists.txt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  │`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  └─Source`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  CMakeLists.txt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  croutine.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  event_groups.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  GitHub-FreeRTOS-Kernel-Home.url`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  History.txt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  LICENSE.md`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  list.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  manifest.yml`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  queue.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  Quick_Start_Guide.url`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  README.md`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  sbom.spdx`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  stream_buffer.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  tasks.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │  timers.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      ├─include`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      atomic.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      croutine.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      deprecated_definitions.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      event_groups.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      FreeRTOS.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      list.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      message_buffer.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      mpu_prototypes.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      mpu_wrappers.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      portable.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      projdefs.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      queue.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      semphr.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      StackMacros.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      stack_macros.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      stdint.readme`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      stream_buffer.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      task.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │      timers.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      │`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      └─portable`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          │  CMakeLists.txt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          │`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          ├─[compiler] // 编译器类型`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          │  └─[architecture] // 处理器架构`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          │          port.c`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          │          portmacro.h`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          │`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          └─MemMang`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`                 heap_4.c`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h2`,{id:`编写freertosconfig-h`,tabindex:`-1`},[n(`编写FreeRTOSConfig.h `),r(`a`,{class:`header-anchor`,href:`#编写freertosconfig-h`,"aria-label":`Permalink to "编写FreeRTOSConfig.h"`},`​`)],-1),r(`p`,null,`FreeRTOS有三个关键的中断函数`,-1),r(`ul`,null,[r(`li`,null,`SysTick_Handler： 时钟驱动，用于节拍计数，定时任务调度，延迟等`),r(`li`,null,`SVC_Handler： 用于初始化FreeRTOS并启动第一个任务。`),r(`li`,null,`PendSV_Handler： 用于在任务调度过程中执行任务上下文切换，确保正确的任务在正确的时间运行。`)],-1),r(`p`,null,[n(`三个函数在`),r(`code`,null,`port.c`),n(`中分别以`),r(`code`,null,`xPortSysTickHandler`),n(`、`),r(`code`,null,`vPortSVCHandler`),n(`、`),r(`code`,null,`xPortPendSVHandler`),n(`命名。 也就是说这三个函数默认是要手动调用的，但是可以在`),r(`code`,null,`FreeRTOSConfig.h`),n(`中用宏重命名三个函数，直接用中断向量表中的名字命名，就不需要手动调用了（当然你也可以去改中断向量表）。官方的原文如下 `),r(`a`,{href:`https://www.freertos.org/zh-cn-cmn-s/FAQHelp.html`,target:`_blank`,rel:`noreferrer`},`FreeRTOS常见问题：我的应用程序没有运行，可能出了什么问题？`)],-1),r(`blockquote`,null,[r(`p`,null,`针对 ARM Cortex-M 用户的特别提示： ARM Cortex-M3、ARM Cortex-M4 和 ARM Cortex-M4F 端口要求 FreeRTOS 处理程序 安装在 SysTick、 PendSV 和 SVCCall 中断向量上。 可以 将 FreeRTOS 定义的 xPortSysTickHandler()， xPortPendSVHandler() 和 vPortSVCHandler() 函数直接填入向量表的对应位置，或者如果 中断向量表与 CMSIS 相容，可以将以下三行 添加到 FreeRTOSConfig.h，用于将 FreeRTOS 函数名称映射到 其对应的 CMSIS 名称。`),r(`p`,null,`#define vPortSVCHandler SVC_Handler #define xPortPendSVHandler PendSV_Handler #define xPortSysTickHandler SysTick_Handler`),r(`p`,null,`以这种方式使用 #defines 的前提是， 您的开发工具提供的默认处理程序 被定义为弱符号。 如果默认处理程序没有被定义为弱符号， 则需要将其注释掉或删除。`)],-1),r(`h2`,{id:`其他`,tabindex:`-1`},[n(`其他 `),r(`a`,{class:`header-anchor`,href:`#其他`,"aria-label":`Permalink to "其他"`},`​`)],-1),r(`h3`,{id:`关于系统时钟`,tabindex:`-1`},[n(`关于系统时钟 `),r(`a`,{class:`header-anchor`,href:`#关于系统时钟`,"aria-label":`Permalink to "关于系统时钟"`},`​`)],-1),r(`p`,null,`起初我以为要自己配置Systick，但是后来发现FreeRTOS会自动配置Systick。`,-1),r(`p`,null,`在vTaskStartScheduler() -> xPortStartScheduler() -> vPortSetupTimerInterrupt() 中会按照FreeRTOSConfig中配置时钟配置systick。`,-1),r(`p`,null,[n(`不过如果不想用systick作为系统时钟源，则需要重写`),r(`code`,null,`void vPortSetupTimerInterrupt( void )`),n(`,并且在定时器中断中调用`),r(`code`,null,`xPortSysTickHandler()`)],-1)]]),"main-header":c(()=>[s(t.$slots,`main-header`)]),"main-header-after":c(()=>[s(t.$slots,`main-header-after`)]),"main-nav":c(()=>[s(t.$slots,`main-nav`)]),"main-content-before":c(()=>[s(t.$slots,`main-content-before`)]),"main-content":c(()=>[s(t.$slots,`main-content`)]),"main-content-after":c(()=>[s(t.$slots,`main-content-after`)]),"main-nav-before":c(()=>[s(t.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[s(t.$slots,`main-nav-after`)]),comment:c(()=>[s(t.$slots,`comment`)]),footer:c(()=>[s(t.$slots,`footer`)]),aside:c(()=>[s(t.$slots,`aside`)]),"aside-custom":c(()=>[s(t.$slots,`aside-custom`)]),default:c(()=>[s(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};