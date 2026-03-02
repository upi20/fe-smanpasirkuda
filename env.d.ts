/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* Custom directive types for v-reveal */
import 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    vReveal: typeof import('./src/directives/reveal')['vReveal']
  }
}
