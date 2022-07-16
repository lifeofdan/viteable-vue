# Viteable

This is my personal beloved setup for quickly getting into writting an application. The list of items are as follows:

- [Vite](https://vitejs.dev/) For fast build times in development. More about Vite below.
- [Vitest](https://vitest.dev/) For unit tests.
- [Playwright](https://playwright.dev/) for E2E and UI Integration testing.
- [Vue](https://vuejs.org/) A "batteries included" kind of JavaScript framework.
- [Vue-router](https://router.vuejs.org/) The official router for vue.
- [VueUse](https://vueuse.org/) For handy pre-written composables.
- [Tailwindcss](https://tailwindcss.com/) A utility-first CSS framework.
- [Merakiui](https://merakiui.com/) For a "headstart" on styling components. This uses tailwind classes and no JavaScript so there is nothing to install, just copy paste beautiful html and css components.
- [HYPERCOLOR](https://hypercolor.dev/) For gradients
- [Hero Icons](https://heroicons.com/) for icons.
- Linting how I like it.

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
