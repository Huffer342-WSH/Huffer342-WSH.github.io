/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/404': RouteRecordInfo<'/404', '/404', Record<never, never>, Record<never, never>>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/about/site': RouteRecordInfo<'/about/site', '/about/site', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/': RouteRecordInfo<'/posts/', '/posts', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/Customize_the_format_of_the_Linux_terminal_prompt': RouteRecordInfo<'/posts/myNotes/guide/Customize_the_format_of_the_Linux_terminal_prompt', '/posts/myNotes/guide/Customize_the_format_of_the_Linux_terminal_prompt', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/Install_Cuda_and_pytorch_in_WSL': RouteRecordInfo<'/posts/myNotes/guide/Install_Cuda_and_pytorch_in_WSL', '/posts/myNotes/guide/Install_Cuda_and_pytorch_in_WSL', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/install_vivado_in_wsl': RouteRecordInfo<'/posts/myNotes/guide/install_vivado_in_wsl', '/posts/myNotes/guide/install_vivado_in_wsl', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/Manually_booting_the_Linux_kernel_from_GRUB': RouteRecordInfo<'/posts/myNotes/guide/Manually_booting_the_Linux_kernel_from_GRUB', '/posts/myNotes/guide/Manually_booting_the_Linux_kernel_from_GRUB', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/nfs': RouteRecordInfo<'/posts/myNotes/guide/nfs', '/posts/myNotes/guide/nfs', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/Optimizing_PowerShell': RouteRecordInfo<'/posts/myNotes/guide/Optimizing_PowerShell', '/posts/myNotes/guide/Optimizing_PowerShell', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/repair-linux-grub': RouteRecordInfo<'/posts/myNotes/guide/repair-linux-grub', '/posts/myNotes/guide/repair-linux-grub', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/Solve_the_problem_of_CMake_printing_a_lot_of_included_information_when_building_with_MSVC': RouteRecordInfo<'/posts/myNotes/guide/Solve_the_problem_of_CMake_printing_a_lot_of_included_information_when_building_with_MSVC', '/posts/myNotes/guide/Solve_the_problem_of_CMake_printing_a_lot_of_included_information_when_building_with_MSVC', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/guide/use-git-in-vscode': RouteRecordInfo<'/posts/myNotes/guide/use-git-in-vscode', '/posts/myNotes/guide/use-git-in-vscode', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/mcu/Port-freertos-to-gd32': RouteRecordInfo<'/posts/myNotes/mcu/Port-freertos-to-gd32', '/posts/myNotes/mcu/Port-freertos-to-gd32', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/arrival-vector': RouteRecordInfo<'/posts/myNotes/radar/arrival-vector', '/posts/myNotes/radar/arrival-vector', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/Capon-algorithm': RouteRecordInfo<'/posts/myNotes/radar/Capon-algorithm', '/posts/myNotes/radar/Capon-algorithm', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/Compare_Capon_and_PhaseDiff_algorithm_in_1T2R_Radar': RouteRecordInfo<'/posts/myNotes/radar/Compare_Capon_and_PhaseDiff_algorithm_in_1T2R_Radar', '/posts/myNotes/radar/Compare_Capon_and_PhaseDiff_algorithm_in_1T2R_Radar', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/Data_Association-Global_Nearest_Neighbor': RouteRecordInfo<'/posts/myNotes/radar/Data_Association-Global_Nearest_Neighbor', '/posts/myNotes/radar/Data_Association-Global_Nearest_Neighbor', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/LFMCW-radar-principle': RouteRecordInfo<'/posts/myNotes/radar/LFMCW-radar-principle', '/posts/myNotes/radar/LFMCW-radar-principle', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/MUSIC-algorithm': RouteRecordInfo<'/posts/myNotes/radar/MUSIC-algorithm', '/posts/myNotes/radar/MUSIC-algorithm', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/Paper-Reading_FMCW_Radar_Heartbeat_detection': RouteRecordInfo<'/posts/myNotes/radar/Paper-Reading_FMCW_Radar_Heartbeat_detection', '/posts/myNotes/radar/Paper-Reading_FMCW_Radar_Heartbeat_detection', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/radar/project/doc/1_LFMCW-radar-receiving-signal-simulation': RouteRecordInfo<'/posts/myNotes/radar/project/doc/1_LFMCW-radar-receiving-signal-simulation', '/posts/myNotes/radar/project/doc/1_LFMCW-radar-receiving-signal-simulation', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/README': RouteRecordInfo<'/posts/myNotes/README', '/posts/myNotes/README', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/some-details/compare_numpy_arange_and_linspace': RouteRecordInfo<'/posts/myNotes/some-details/compare_numpy_arange_and_linspace', '/posts/myNotes/some-details/compare_numpy_arange_and_linspace', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/some-details/list_find_in_vscode': RouteRecordInfo<'/posts/myNotes/some-details/list_find_in_vscode', '/posts/myNotes/some-details/list_find_in_vscode', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/some-details/the-format-of-the-Passtags-of-the-ZMQ-module-in-GNURadio': RouteRecordInfo<'/posts/myNotes/some-details/the-format-of-the-Passtags-of-the-ZMQ-module-in-GNURadio', '/posts/myNotes/some-details/the-format-of-the-Passtags-of-the-ZMQ-module-in-GNURadio', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/some-details/transpose-in-matlab': RouteRecordInfo<'/posts/myNotes/some-details/transpose-in-matlab', '/posts/myNotes/some-details/transpose-in-matlab', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/tools/Convert_images_in_markdown_files_to_webp': RouteRecordInfo<'/posts/myNotes/tools/Convert_images_in_markdown_files_to_webp', '/posts/myNotes/tools/Convert_images_in_markdown_files_to_webp', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/tools/Python_scripts_modify_the_encoding_format_of_text_files_in_batches': RouteRecordInfo<'/posts/myNotes/tools/Python_scripts_modify_the_encoding_format_of_text_files_in_batches', '/posts/myNotes/tools/Python_scripts_modify_the_encoding_format_of_text_files_in_batches', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/zynq/add_lrzsz_in_rootfs': RouteRecordInfo<'/posts/myNotes/zynq/add_lrzsz_in_rootfs', '/posts/myNotes/zynq/add_lrzsz_in_rootfs', Record<never, never>, Record<never, never>>,
    '/posts/myNotes/zynq/Petalinux_design_process': RouteRecordInfo<'/posts/myNotes/zynq/Petalinux_design_process', '/posts/myNotes/zynq/Petalinux_design_process', Record<never, never>, Record<never, never>>,
    '/posts/resource': RouteRecordInfo<'/posts/resource', '/posts/resource', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
  }
}
