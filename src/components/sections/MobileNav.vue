<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

interface NavChild { label: string; to: string }
interface NavItem { label: string; to?: string; children?: NavChild[] }

const props = defineProps<{
  open: boolean
  navItems: NavItem[]
}>()

const emit = defineEmits<{
  close: []
}>()

const router = useRouter()

/* Which accordion groups are open */
const expandedGroups = ref<Set<string>>(new Set())

function toggleGroup(label: string) {
  if (expandedGroups.value.has(label)) {
    expandedGroups.value.delete(label)
  } else {
    expandedGroups.value.add(label)
  }
}

/* Close on route change */
router.afterEach(() => emit('close'))

/* Close on Escape key */
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (val) => {
    if (val) {
      document.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    }
  },
)

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- Backdrop -->
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-150 bg-black/50 backdrop-blur-sm lg:hidden"
      aria-hidden="true"
      @click="emit('close')"
    />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide">
    <nav
      v-if="open"
      class="fixed inset-y-0 right-0 z-200 flex w-[min(85vw,320px)] flex-col bg-surface shadow-2xl lg:hidden"
      aria-label="Navigasi mobile"
      role="dialog"
      aria-modal="true"
    >
      <!-- Drawer header -->
      <div class="flex h-[70px] items-center justify-between border-b border-neutral-border px-5">
        <span class="text-brand-primary text-lg font-bold">Menu</span>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-md text-text-primary transition-colors hover:bg-surface-alt"
          aria-label="Tutup menu"
          @click="emit('close')"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Nav items -->
      <div class="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
        <ul class="space-y-1">
          <li v-for="item in navItems" :key="item.label">
            <!-- Simple link -->
            <RouterLink
              v-if="item.to && !item.children"
              :to="item.to"
              class="flex items-center rounded-lg px-4 py-3 text-sm font-bold text-text-primary transition-colors hover:bg-surface-alt hover:text-brand-primary"
            >
              {{ item.label }}
            </RouterLink>

            <!-- Accordion group -->
            <template v-else>
              <button
                class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-text-primary transition-colors hover:bg-surface-alt hover:text-brand-primary"
                :aria-expanded="expandedGroups.has(item.label)"
                @click="toggleGroup(item.label)"
              >
                {{ item.label }}
                <svg
                  class="h-4 w-4 transition-transform duration-[var(--duration-fast)]"
                  :class="{ 'rotate-180': expandedGroups.has(item.label) }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Children (accordion content) -->
              <Transition name="accordion">
                <ul
                  v-show="expandedGroups.has(item.label)"
                  class="ml-4 space-y-0.5 overflow-hidden border-l-2 border-brand-primary/20 pl-2"
                >
                  <li v-for="child in item.children" :key="child.to">
                    <RouterLink
                      :to="child.to"
                      class="block rounded-md px-3 py-2.5 text-sm text-text-primary transition-colors hover:bg-surface-alt hover:text-brand-primary"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </li>
                </ul>
              </Transition>
            </template>
          </li>
        </ul>
      </div>

      <!-- Drawer footer -->
      <div class="border-t border-neutral-border px-5 py-4">
        <a
          href="#"
          class="block w-full rounded-lg bg-brand-primary px-4 py-3 text-center text-sm font-bold text-text-on-primary transition-colors hover:bg-brand-primary/90"
        >
          PPDB Online
        </a>
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
/* Backdrop fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--duration-normal) var(--ease-out);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Drawer slide */
.slide-enter-active {
  transition: transform var(--duration-normal) var(--ease-out);
}
.slide-leave-active {
  transition: transform var(--duration-fast) var(--ease-in);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Accordion */
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height var(--duration-fast) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out);
  max-height: 500px;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
