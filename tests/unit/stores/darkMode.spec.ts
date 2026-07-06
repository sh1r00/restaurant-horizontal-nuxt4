import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'

describe('darkMode store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('starts with dark mode disabled', () => {
    const store = useDarkModeStore()
    expect(store.isDark).toBe(false)
  })

  it('toggle flips isDark', () => {
    const store = useDarkModeStore()
    store.toggle()
    expect(store.isDark).toBe(true)
    store.toggle()
    expect(store.isDark).toBe(false)
  })

  it('toggle persists to localStorage', () => {
    const store = useDarkModeStore()
    store.toggle()
    expect(localStorage.getItem('dark-mode')).toBe('true')
  })

  it('initialize reads from localStorage', () => {
    localStorage.setItem('dark-mode', 'true')
    const store = useDarkModeStore()
    store.initialize()
    expect(store.isDark).toBe(true)
  })

  it('multiple toggles cycle correctly', () => {
    const store = useDarkModeStore()
    store.toggle()
    store.toggle()
    store.toggle()
    expect(store.isDark).toBe(true)
  })
})
