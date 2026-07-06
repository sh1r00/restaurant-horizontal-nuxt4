import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'
import ADarkModeToggle from '~/components/atoms/ADarkModeToggle.vue'

// Mock AIcon since it uses material-icons which doesn't exist in test
const AIconStub = {
  template: '<span class="mock-icon">{{ name }}</span>',
  props: ['name', 'size', 'decorative'],
}

describe('ADarkModeToggle', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    // Set up localStorage mock
    const store: Record<string, string> = {}
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn((key: string) => store[key] ?? null),
        setItem: vi.fn((key: string, value: string) => { store[key] = value }),
        removeItem: vi.fn(),
        clear: vi.fn(() => { for (const k of Object.keys(store)) delete store[k] }),
      },
      writable: true,
    })

    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn(() => ({
        matches: false,
        media: '',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
      writable: true,
    })
  })

  it('renders a button', () => {
    const wrapper = mount(ADarkModeToggle, {
      global: {
        stubs: { AIcon: AIconStub },
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('shows dark_mode icon when isDark is false', () => {
    const store = useDarkModeStore()
    store.isDark = false

    const wrapper = mount(ADarkModeToggle, {
      global: {
        stubs: { AIcon: AIconStub },
      },
    })

    expect(wrapper.find('.mock-icon').text()).toBe('dark_mode')
  })

  it('shows light_mode icon when isDark is true', () => {
    const store = useDarkModeStore()
    store.isDark = true

    const wrapper = mount(ADarkModeToggle, {
      global: {
        stubs: { AIcon: AIconStub },
      },
    })

    expect(wrapper.find('.mock-icon').text()).toBe('light_mode')
  })

  it('has correct aria-label for dark mode', () => {
    const store = useDarkModeStore()
    store.isDark = true

    const wrapper = mount(ADarkModeToggle, {
      global: {
        stubs: { AIcon: AIconStub },
      },
    })

    expect(wrapper.find('button').attributes('aria-label')).toBe('a11y.toggleLight')
  })

  it('has aria-pressed reflecting dark mode state', () => {
    const store = useDarkModeStore()
    store.isDark = true

    const wrapper = mount(ADarkModeToggle, {
      global: {
        stubs: { AIcon: AIconStub },
      },
    })

    expect(wrapper.find('button').attributes('aria-pressed')).toBe('true')
  })

  it('calls toggle when clicked', async () => {
    const store = useDarkModeStore()
    store.isDark = false

    const wrapper = mount(ADarkModeToggle, {
      global: {
        stubs: { AIcon: AIconStub },
      },
    })

    await wrapper.find('button').trigger('click')

    expect(store.isDark).toBe(true)
  })
})
