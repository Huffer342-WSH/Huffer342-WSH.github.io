import{Bt as e,Ht as t,Q as n,U as r,W as i,er as a,qn as o,qt as s,yn as c}from"./framework.CSzCw9LZ.js";import{n as l}from"./theme.CenFutRc.js";import"./chunks/vue-i18n.DPiClx16.js";import{a as u,i as d}from"./chunks/vue-router.4BejMmlS.js";var f={__name:`mcu_ldscript`,setup(f,{expose:p}){let m=o(JSON.parse(`{"title":"求职笔记 . MCU. 链接脚本","description":"","frontmatter":{"layout":"post","title":"求职笔记 . MCU. 链接脚本","date":"2025-03-28 15:21:32","categories":["求职笔记"],"excerpt":null,"hide":false},"headers":[],"relativePath":"pages/posts/myNotes/path2offer/mcu_ldscript.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{layout:`post`,title:`求职笔记 . MCU. 链接脚本`,date:`2025-03-28 15:21:32`,categories:[`求职笔记`],excerpt:null,hide:!1}}),(t,o)=>{let u=l;return e(),i(u,{frontmatter:a(_)},{"main-content-md":c(()=>[...o[0]||=[r(`h2`,{id:`链接脚本的作用`,tabindex:`-1`},[n(`链接脚本的作用 `),r(`a`,{class:`header-anchor`,href:`#链接脚本的作用`,"aria-label":`Permalink to "链接脚本的作用"`},`​`)],-1),r(`p`,null,[n(`链接脚本（Linker Script）的作用解析 链接脚本是编译链接阶段的核心配置文件，用于指导链接器（如 GNU `),r(`code`,null,`ld`),n(`）如何组织目标文件（`),r(`code`,null,`.o`),n(`）的代码和数据，生成最终的可执行文件或固件映像。其核心作用可分为以下五大方面：`)],-1),r(`hr`,null,null,-1),r(`ol`,null,[r(`li`,null,`定义内存布局（Memory Regions） 链接脚本通过划分物理存储区域，明确代码和数据的存放位置，例如：`)],-1),r(`ul`,null,[r(`li`,null,[n(`嵌入式系统： `),r(`ul`,null,[r(`li`,null,[r(`code`,null,`FLASH`),n(` 存储代码（`),r(`code`,null,`.text`),n(`）和只读数据（`),r(`code`,null,`.rodata`),n(`）。`)]),r(`li`,null,[r(`code`,null,`RAM`),n(` 存储变量（`),r(`code`,null,`.data`),n(`、`),r(`code`,null,`.bss`),n(`）和运行时堆栈。`)])])]),r(`li`,null,[n(`示例代码：`),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`MEMORY {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    FLASH (rx) : ORIGIN = 0x08000000, LENGTH = 256K`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    RAM (rwx)  : ORIGIN = 0x20000000, LENGTH = 64K`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})])])],-1),r(`hr`,null,null,-1),r(`ol`,{start:`2`},[r(`li`,null,`控制段（Sections）的合并与分配`)],-1),r(`ul`,null,[r(`li`,null,[n(`段合并：将多个目标文件的同名段（如 `),r(`code`,null,`.text`),n(`、`),r(`code`,null,`.data`),n(`）合并为单一连续块。`)]),r(`li`,null,[n(`段分配：指定段所属的内存区域，例如：`),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`SECTIONS {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    .text : { *(.text*) } > FLASH   /* 代码段存入 FLASH */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    .data : { *(.data*) } > RAM AT> FLASH  /* 初始值在 FLASH，运行时在 RAM */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})])])],-1),r(`hr`,null,null,-1),r(`ol`,{start:`3`},[r(`li`,null,`符号地址与入口点定义`)],-1),r(`ul`,null,[r(`li`,null,[r(`p`,null,[n(`符号定义：生成全局符号供程序使用，例如代码起始地址 `),r(`code`,null,`_etext`),n(`：`)]),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`_etext = .;   /* 定义 .text 段的结束地址 */`)])])]),r(`button`,{class:`code-block-unfold-btn`})]),r(`p`,null,[n(`在 C 代码中可通过 `),r(`code`,null,`extern char _etext;`),n(` 访问。`)])]),r(`li`,null,[r(`p`,null,[n(`入口点设置：指定程序启动地址（如复位向量 `),r(`code`,null,`Reset_Handler`),n(`）：`)]),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`ENTRY(Reset_Handler)`)])])]),r(`button`,{class:`code-block-unfold-btn`})])])],-1),r(`hr`,null,null,-1),r(`ol`,{start:`4`},[r(`li`,null,`优化存储布局与性能`)],-1),r(`ul`,null,[r(`li`,null,[n(`对齐优化：通过 `),r(`code`,null,`ALIGN`),n(` 指令对齐段地址，提升内存访问效率。`),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.bss : {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);  /* 4 字节对齐 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.bss*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} > RAM`)])])]),r(`button`,{class:`code-block-unfold-btn`})])]),r(`li`,null,[n(`填充与压缩：通过 `),r(`code`,null,`FILL`),n(` 或 `),r(`code`,null,`OVERLAY`),n(` 减少存储空间浪费。`)])],-1),r(`hr`,null,null,-1),r(`ol`,{start:`5`},[r(`li`,null,`支持硬件特性与启动流程`)],-1),r(`ul`,null,[r(`li`,null,[n(`中断向量表定位：确保向量表位于设备要求的固定地址（如 Cortex-M 的 `),r(`code`,null,`0x00000000`),n(`）。`),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.isr_vector : {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP(*(.isr_vector))  /* 强制保留向量表 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} > FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})])]),r(`li`,null,[n(`启动代码配置：初始化数据段（`),r(`code`,null,`.data`),n(`）和清零 BSS 段（`),r(`code`,null,`.bss`),n(`），需与启动文件（`),r(`code`,null,`startup_*.s`),n(`）配合。`)])],-1),r(`h2`,{id:`实例分析`,tabindex:`-1`},[n(`实例分析 `),r(`a`,{class:`header-anchor`,href:`#实例分析`,"aria-label":`Permalink to "实例分析"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/* Entry Point */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`ENTRY(Reset_Handler)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/* Highest address of the user mode stack */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`_estack = ORIGIN(RAM) + LENGTH(RAM); /* end of "RAM" Ram type memory */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`_Min_Heap_Size = 0x0; /* required amount of heap */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`_Min_Stack_Size = 256; /* required amount of stack */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/* Memories definition */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`MEMORY`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  RAM    (xrw)    : ORIGIN = 0x20000000,   LENGTH = 16K`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  FLASH    (rx)    : ORIGIN = 0x8000000,   LENGTH = 128K`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`/* Define output sections */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`SECTIONS`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* The startup code goes first into FLASH */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .isr_vector (READONLY):`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP(*(.isr_vector)) /* Startup code */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* The program code and other data goes into FLASH */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .text (READONLY):`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.text)           /* .text sections (code) */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.text*)          /* .text* sections (code) */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.glue_7)         /* glue arm to thumb code */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.glue_7t)        /* glue thumb to arm code */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.eh_frame)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(.init))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(.fini))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    _etext = .;        /* define a global symbols at end of code */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* Constant data goes into FLASH */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .rodata (READONLY):`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.rodata)         /* .rodata sections (constants, strings, etc.) */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.rodata*)        /* .rodata* sections (constants, strings, etc.) */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .ARM.extab   (READONLY): { *(.ARM.extab* .gnu.linkonce.armextab.*) } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .ARM (READONLY): {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    __exidx_start = .;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.ARM.exidx*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    __exidx_end = .;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .preinit_array    (READONLY)  :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE_HIDDEN (__preinit_array_start = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(.preinit_array*))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE_HIDDEN (__preinit_array_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .init_array(READONLY)  :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE_HIDDEN (__init_array_start = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(SORT(.init_array.*)))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(.init_array*))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE_HIDDEN (__init_array_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .fini_array (READONLY) :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE_HIDDEN (__fini_array_start = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(SORT(.fini_array.*)))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    KEEP (*(.fini_array*))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE_HIDDEN (__fini_array_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* used by the startup to initialize data */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  _sidata = LOADADDR(.data);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* Initialized data sections goes into RAM, load LMA copy after code */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .data :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    _sdata = .;        /* create a global symbol at data start */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.data)           /* .data sections */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.data*)          /* .data* sections */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    _edata = .;        /* define a global symbol at data end */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >RAM AT> FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* Uninitialized data section */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .bss :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    /* This is used by the startup in order to initialize the .bss secion */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    _sbss = .;         /* define a global symbol at bss start */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    __bss_start__ = _sbss;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.bss)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(.bss*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    *(COMMON)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    _ebss = .;         /* define a global symbol at bss end */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    __bss_end__ = _ebss;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >RAM`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* User_heap_stack section, used to check that there is enough RAM left */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  ._user_heap_stack :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(8);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE ( end = . );`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    PROVIDE ( _end = . );`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = . + _Min_Heap_Size;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = . + _Min_Stack_Size;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    . = ALIGN(8);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } >RAM`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /* Remove information from the standard libraries */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /DISCARD/ :`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    libc.a ( * )`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    libm.a ( * )`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    libgcc.a ( * )`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  .ARM.attributes 0 : { *(.ARM.attributes) }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,[n(`以下是针对 `),r(`code`,null,`gd32f350.ld`),n(` 链接脚本的逐段分析，按代码顺序解释其作用：`)],-1),r(`hr`,null,null,-1),r(`h3`,{id:`_1-入口点定义`,tabindex:`-1`},[r(`strong`,null,`1. 入口点定义`),n(),r(`a`,{class:`header-anchor`,href:`#_1-入口点定义`,"aria-label":`Permalink to "**1. 入口点定义**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`ENTRY(Reset_Handler)`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：指定程序的入口点为 `),r(`code`,null,`Reset_Handler`),n(`，这是芯片复位后执行的第一条指令（通常位于启动文件 `),r(`code`,null,`startup_*.s`),n(` 中）。`)])],-1),r(`hr`,null,null,-1),r(`h3`,{id:`_2-栈顶地址定义`,tabindex:`-1`},[r(`strong`,null,`2. 栈顶地址定义`),n(),r(`a`,{class:`header-anchor`,href:`#_2-栈顶地址定义`,"aria-label":`Permalink to "**2. 栈顶地址定义**"`},`​`)],-1),r(`div`,{class:`language- max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`_estack = ORIGIN(RAM) + LENGTH(RAM); /* end of "RAM" */`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：定义用户模式栈的初始栈顶地址为 RAM 的末尾（最高地址）。栈从高地址向低地址增长。`)])],-1),r(`hr`,null,null,-1),r(`h3`,{id:`_3-堆栈最小大小`,tabindex:`-1`},[r(`strong`,null,`3. 堆栈最小大小`),n(),r(`a`,{class:`header-anchor`,href:`#_3-堆栈最小大小`,"aria-label":`Permalink to "**3. 堆栈最小大小**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`_Min_Heap_Size = 0x0;   /* 堆的最小大小（未启用堆） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`_Min_Stack_Size = 256;   /* 栈的最小大小（256字节） */`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`说明`),n(`：堆未启用（`),r(`code`,null,`0x0`),n(`），栈保留 256 字节空间，供中断和函数调用使用。`)])],-1),r(`hr`,null,null,-1),r(`h3`,{id:`_4-存储器区域定义`,tabindex:`-1`},[r(`strong`,null,`4. 存储器区域定义`),n(),r(`a`,{class:`header-anchor`,href:`#_4-存储器区域定义`,"aria-label":`Permalink to "**4. 存储器区域定义**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`MEMORY {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  RAM    (xrw) : ORIGIN = 0x20000000, LENGTH = 16K`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  FLASH  (rx)  : ORIGIN = 0x8000000,  LENGTH = 128K`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`RAM`),n(`：起始地址 `),r(`code`,null,`0x20000000`),n(`，长度 16KB，可执行（`),r(`code`,null,`x`),n(`）、可读（`),r(`code`,null,`r`),n(`）、可写（`),r(`code`,null,`w`),n(`）。`)]),r(`li`,null,[r(`strong`,null,`FLASH`),n(`：起始地址 `),r(`code`,null,`0x08000000`),n(`（注意 `),r(`code`,null,`0x8000000`),n(` 可能为笔误，通常 Cortex-M 的 FLASH 基址为 `),r(`code`,null,`0x08000000`),n(`），长度 128KB，可读（`),r(`code`,null,`r`),n(`）、可执行（`),r(`code`,null,`x`),n(`）。`)])],-1),r(`hr`,null,null,-1),r(`h3`,{id:`_5-段-sections-分配`,tabindex:`-1`},[r(`strong`,null,`5. 段（SECTIONS）分配`),n(),r(`a`,{class:`header-anchor`,href:`#_5-段-sections-分配`,"aria-label":`Permalink to "**5. 段（SECTIONS）分配**"`},`​`)],-1),r(`h4`,{id:`_5-1-中断向量表`,tabindex:`-1`},[r(`strong`,null,`5.1 中断向量表`),n(),r(`a`,{class:`header-anchor`,href:`#_5-1-中断向量表`,"aria-label":`Permalink to "**5.1 中断向量表**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.isr_vector (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(.isr_vector)) /* 中断向量表 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：将 `),r(`code`,null,`.isr_vector`),n(` 段（中断向量表）放置在 FLASH 的起始位置，强制 4 字节对齐。`)]),r(`li`,null,[r(`code`,null,`KEEP`),n(`：确保该段不被链接器优化删除。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-2-程序代码段`,tabindex:`-1`},[r(`strong`,null,`5.2 程序代码段`),n(),r(`a`,{class:`header-anchor`,href:`#_5-2-程序代码段`,"aria-label":`Permalink to "**5.2 程序代码段**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.text (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.text)        /* 代码段 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.text*)       /* 其他代码段（如内联函数） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.glue_7)      /* ARM/Thumb 代码粘合 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.glue_7t)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.eh_frame)    /* 异常处理框架（C++） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(.init))  /* 初始化代码 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(.fini))  /* 终止代码 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  _etext = .;     /* 代码段结束地址 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：存放所有代码（`),r(`code`,null,`.text`),n(`）、ARM/Thumb 粘合代码、C++ 异常处理框架等。`)]),r(`li`,null,[r(`code`,null,`_etext`),n(`：符号标记代码段结束，用于后续数据初始化。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-3-只读数据段`,tabindex:`-1`},[r(`strong`,null,`5.3 只读数据段`),n(),r(`a`,{class:`header-anchor`,href:`#_5-3-只读数据段`,"aria-label":`Permalink to "**5.3 只读数据段**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.rodata (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.rodata)      /* 只读数据（如常量字符串） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.rodata*)     /* 其他只读数据 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：存放只读常量数据，如全局常量、字符串等。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-4-arm-异常处理段`,tabindex:`-1`},[r(`strong`,null,`5.4 ARM 异常处理段`),n(),r(`a`,{class:`header-anchor`,href:`#_5-4-arm-异常处理段`,"aria-label":`Permalink to "**5.4 ARM 异常处理段**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.ARM.extab (READONLY) { *(.ARM.extab* .gnu.linkonce.armextab.*) } >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`.ARM (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  __exidx_start = .;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.ARM.exidx*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  __exidx_end = .;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`： `),r(`ul`,null,[r(`li`,null,[r(`code`,null,`.ARM.extab`),n(`：存放异常展开信息（用于 C++ 异常）。`)]),r(`li`,null,[r(`code`,null,`.ARM.exidx`),n(`：存放异常索引表，`),r(`code`,null,`__exidx_start`),n(` 和 `),r(`code`,null,`__exidx_end`),n(` 标记其范围。`)])])])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-5-初始化-终止函数数组`,tabindex:`-1`},[r(`strong`,null,`5.5 初始化/终止函数数组`),n(),r(`a`,{class:`header-anchor`,href:`#_5-5-初始化-终止函数数组`,"aria-label":`Permalink to "**5.5 初始化/终止函数数组**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.preinit_array (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE_HIDDEN(__preinit_array_start = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(.preinit_array*))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE_HIDDEN(__preinit_array_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`.init_array (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE_HIDDEN(__init_array_start = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(SORT(.init_array.*)))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(.init_array*))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE_HIDDEN(__init_array_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`.fini_array (READONLY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE_HIDDEN(__fini_array_start = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(SORT(.fini_array.*)))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  KEEP(*(.fini_array*))`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE_HIDDEN(__fini_array_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：存放全局构造函数（`),r(`code`,null,`.init_array`),n(`）和析构函数（`),r(`code`,null,`.fini_array`),n(`）的指针数组。`)]),r(`li`,null,[r(`code`,null,`PROVIDE_HIDDEN`),n(`：生成隐藏符号，避免与其他同名符号冲突。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-6-初始化数据段`,tabindex:`-1`},[r(`strong`,null,`5.6 初始化数据段`),n(),r(`a`,{class:`header-anchor`,href:`#_5-6-初始化数据段`,"aria-label":`Permalink to "**5.6 初始化数据段**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`_sidata = LOADADDR(.data); /* .data 的加载地址（FLASH） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`.data {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  _sdata = .;        /* 数据段起始地址（RAM） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.data)           /* 已初始化全局变量 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.data*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  _edata = .;        /* 数据段结束地址（RAM） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >RAM AT> FLASH`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：已初始化的全局变量存储在 RAM 中，但其初始值保存在 FLASH 中。`)]),r(`li`,null,[r(`code`,null,`>RAM AT> FLASH`),n(`：运行时地址（VMA）在 RAM，加载地址（LMA）在 FLASH。`)]),r(`li`,null,[n(`启动代码需将 `),r(`code`,null,`_sidata`),n(`（FLASH 中的初始值）复制到 `),r(`code`,null,`_sdata`),n(`（RAM 中的目标地址）。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-7-未初始化数据段-bss`,tabindex:`-1`},[r(`strong`,null,`5.7 未初始化数据段（BSS）`),n(),r(`a`,{class:`header-anchor`,href:`#_5-7-未初始化数据段-bss`,"aria-label":`Permalink to "**5.7 未初始化数据段（BSS）**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.bss {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  _sbss = .;         /* BSS 段起始地址 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  __bss_start__ = _sbss;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.bss)            /* 未初始化全局变量 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(.bss*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  *(COMMON)          /* 未初始化的全局变量（C 语言） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(4);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  _ebss = .;         /* BSS 段结束地址 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  __bss_end__ = _ebss;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >RAM`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：未初始化的全局变量和静态变量在此段分配，启动代码需将 `),r(`code`,null,`_sbss`),n(` 到 `),r(`code`,null,`_ebss`),n(` 的内存清零。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-8-用户堆栈区域`,tabindex:`-1`},[r(`strong`,null,`5.8 用户堆栈区域`),n(),r(`a`,{class:`header-anchor`,href:`#_5-8-用户堆栈区域`,"aria-label":`Permalink to "**5.8 用户堆栈区域**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`._user_heap_stack {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(8);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE(end = .);      /* 堆起始地址 */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  PROVIDE(_end = .);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . += _Min_Heap_Size;   /* 保留堆空间（此处为 0） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . += _Min_Stack_Size;  /* 保留栈空间（256字节） */`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  . = ALIGN(8);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`} >RAM`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：在 RAM 末尾保留堆和栈空间。由于 `),r(`code`,null,`_Min_Heap_Size = 0`),n(`，此处仅保留 256 字节栈空间。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-9-丢弃标准库段`,tabindex:`-1`},[r(`strong`,null,`5.9 丢弃标准库段`),n(),r(`a`,{class:`header-anchor`,href:`#_5-9-丢弃标准库段`,"aria-label":`Permalink to "**5.9 丢弃标准库段**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`/DISCARD/ {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  libc.a (*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  libm.a (*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  libgcc.a (*)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：禁止链接标准库（`),r(`code`,null,`libc`),n(`、`),r(`code`,null,`libm`),n(`、`),r(`code`,null,`libgcc`),n(`），通常用于减少代码体积或自定义库实现。`)])],-1),r(`hr`,null,null,-1),r(`h4`,{id:`_5-10-arm-属性段`,tabindex:`-1`},[r(`strong`,null,`5.10 ARM 属性段`),n(),r(`a`,{class:`header-anchor`,href:`#_5-10-arm-属性段`,"aria-label":`Permalink to "**5.10 ARM 属性段**"`},`​`)],-1),r(`div`,{class:`language-ld max-h-500px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`},`ld`),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`.ARM.attributes 0 : { *(.ARM.attributes) }`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`作用`),n(`：存放 ARM 架构相关属性信息（非运行必需，通常用于调试）。`)])],-1),r(`hr`,null,null,-1),r(`h3`,{id:`总结`,tabindex:`-1`},[r(`strong`,null,`总结`),n(),r(`a`,{class:`header-anchor`,href:`#总结`,"aria-label":`Permalink to "**总结**"`},`​`)],-1),r(`p`,null,`此链接脚本为 GD32F350 微控制器定制，主要功能包括：`,-1),r(`ol`,null,[r(`li`,null,`将中断向量表和代码段放置在 FLASH 起始位置。`),r(`li`,null,[n(`已初始化数据（`),r(`code`,null,`.data`),n(`）从 FLASH 加载到 RAM。`)]),r(`li`,null,[n(`未初始化数据（`),r(`code`,null,`.bss`),n(`）在 RAM 中分配并清零。`)]),r(`li`,null,`在 RAM 末尾保留栈空间。`),r(`li`,null,`禁用标准库以减少体积。`)],-1),r(`p`,null,`启动代码需完成以下任务：`,-1),r(`ul`,null,[r(`li`,null,[n(`复制 `),r(`code`,null,`.data`),n(` 段从 FLASH 到 RAM。`)]),r(`li`,null,[n(`清零 `),r(`code`,null,`.bss`),n(` 段。`)]),r(`li`,null,[n(`初始化堆栈指针为 `),r(`code`,null,`_estack`),n(`。`)])],-1)]]),"main-header":c(()=>[s(t.$slots,`main-header`)]),"main-header-after":c(()=>[s(t.$slots,`main-header-after`)]),"main-nav":c(()=>[s(t.$slots,`main-nav`)]),"main-content-before":c(()=>[s(t.$slots,`main-content-before`)]),"main-content":c(()=>[s(t.$slots,`main-content`)]),"main-content-after":c(()=>[s(t.$slots,`main-content-after`)]),"main-nav-before":c(()=>[s(t.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[s(t.$slots,`main-nav-after`)]),comment:c(()=>[s(t.$slots,`comment`)]),footer:c(()=>[s(t.$slots,`footer`)]),aside:c(()=>[s(t.$slots,`aside`)]),"aside-custom":c(()=>[s(t.$slots,`aside-custom`)]),default:c(()=>[s(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};