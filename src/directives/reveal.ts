import type { Directive, DirectiveBinding } from 'vue'

/**
 * v-reveal — scroll-triggered reveal animation directive
 *
 * Usage:
 *   v-reveal                          → fade-up, no delay
 *   v-reveal.left                     → slide from left
 *   v-reveal.right                    → slide from right
 *   v-reveal.scale                    → scale up
 *   v-reveal.fade                     → fade only (no translate)
 *   v-reveal="{ delay: 100 }"        → 100ms delay
 *   v-reveal="{ delay: 200, duration: 800 }"
 *
 * Respects prefers-reduced-motion.
 */

interface RevealOptions {
  delay?: number
  duration?: number
  threshold?: number
}

const observerMap = new WeakMap<Element, IntersectionObserver>()

function getModifier(binding: DirectiveBinding): string {
  if (binding.modifiers.left) return 'left'
  if (binding.modifiers.right) return 'right'
  if (binding.modifiers.scale) return 'scale'
  if (binding.modifiers.fade) return 'fade'
  return 'up' // default
}

function applyHidden(el: HTMLElement, direction: string) {
  el.style.opacity = '0'
  el.style.willChange = 'opacity, transform'

  switch (direction) {
    case 'up':
      el.style.transform = 'translateY(32px)'
      break
    case 'left':
      el.style.transform = 'translateX(-32px)'
      break
    case 'right':
      el.style.transform = 'translateX(32px)'
      break
    case 'scale':
      el.style.transform = 'scale(0.92)'
      break
    case 'fade':
      el.style.transform = 'none'
      break
  }
}

function applyVisible(el: HTMLElement, options: RevealOptions) {
  const duration = options.duration ?? 600
  const delay = options.delay ?? 0
  el.style.transition = `opacity ${duration}ms cubic-bezier(0.2, 0, 0, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0, 0, 1) ${delay}ms`
  el.style.opacity = '1'
  el.style.transform = 'translateY(0) translateX(0) scale(1)'
}

export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const direction = getModifier(binding)
    const options: RevealOptions = binding.value ?? {}

    applyHidden(el, direction)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyVisible(el, options)
            observer.unobserve(el)
            observerMap.delete(el)

            // Clean up will-change after animation
            const totalTime = (options.duration ?? 600) + (options.delay ?? 0) + 50
            setTimeout(() => {
              el.style.willChange = 'auto'
            }, totalTime)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
    observerMap.set(el, observer)
  },

  unmounted(el) {
    const observer = observerMap.get(el)
    if (observer) {
      observer.unobserve(el)
      observerMap.delete(el)
    }
  },
}
