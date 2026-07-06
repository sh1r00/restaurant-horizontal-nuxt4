import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'
import OHeader from '~/components/organisms/OHeader.vue'

// Stub ADarkModeToggle
const ADarkModeToggleStub = {
  template: '<button class="dark-mode-toggle-stub">Toggle</button>',
}

describe('OHeader', () => {
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

  it('renders header element', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('renders restaurant name "Terra&Flame"', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    const text = wrapper.text()
    expect(text).toContain('Terra')
    expect(text).toContain('Flame')
  })

  it('renders NuxtLink for navigation items', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    const links = wrapper.findAll('a[href]')
    // Home link + 4 nav items = 5 links in desktop nav
    expect(links.length).toBeGreaterThanOrEqual(5)
  })

  it('renders language select dropdown', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    const selects = wrapper.findAll('select')
    expect(selects.length).toBeGreaterThanOrEqual(1)
  })

  it('renders ADarkModeToggle', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    expect(wrapper.find('.dark-mode-toggle-stub').exists()).toBe(true)
  })

  it('opens mobile menu when hamburger button is clicked', async () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    // Mobile menu should not be visible initially
    const mobileNav = wrapper.find('[aria-label="Mobile navigation"]')
    expect(mobileNav.exists()).toBe(false)

    // Find the hamburger button (the md:hidden button)
    const hamburgerBtn = wrapper.find('button.md\\:hidden')
    expect(hamburgerBtn.exists()).toBe(true)

    await hamburgerBtn.trigger('click')

    // Mobile navigation should now be visible
    const mobileNavAfter = wrapper.find('[aria-label="Mobile navigation"]')
    expect(mobileNavAfter.exists()).toBe(true)
  })

  it('has sticky class on header', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    expect(wrapper.find('header').classes()).toContain('sticky')
  })

  it('shows menu icon when menu is closed', () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    // The hamburger button should show 'menu' icon initially
    const icon = wrapper.find('.mock-icon')
    expect(icon.text()).toBe('menu')
  })

  it('shows close icon when menu is open', async () => {
    const wrapper = mount(OHeader, {
      global: {
        stubs: {
          ADarkModeToggle: ADarkModeToggleStub,
          AIcon: { template: '<span class="mock-icon">{{ name }}</span>', props: ['name', 'size', 'decorative'] },
        },
      },
    })

    const hamburgerBtn = wrapper.find('button.md\\:hidden')
    await hamburgerBtn.trigger('click')

    // After click, the icon should change to 'close'
    const icons = wrapper.findAll('.mock-icon')
    // The first occurrence of close icon (could be in mobile menu AIcon) -- just verify it exists
    const closeIcon = icons.find(el => el.text() === 'close')
    expect(closeIcon).toBeTruthy()
  })
})
