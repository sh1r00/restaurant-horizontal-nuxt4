import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AIcon from '~/components/atoms/AIcon.vue'

describe('AIcon', () => {
  it('renders with default size (md)', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'home' },
    })

    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.find('span').classes()).toContain('text-2xl')
  })

  it('renders sm size class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'home', size: 'sm' },
    })

    expect(wrapper.find('span').classes()).toContain('text-lg')
  })

  it('renders lg size class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'home', size: 'lg' },
    })

    expect(wrapper.find('span').classes()).toContain('text-4xl')
  })

  it('shows the icon name as text content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'menu' },
    })

    expect(wrapper.text()).toBe('menu')
  })

  it('has material-icons class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'close' },
    })

    expect(wrapper.find('span').classes()).toContain('material-icons')
  })

  it('sets role to img when not decorative', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'settings' },
    })

    expect(wrapper.find('span').attributes('role')).toBe('img')
  })

  it('sets aria-label when not decorative', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'settings' },
    })

    expect(wrapper.find('span').attributes('aria-label')).toBe('settings')
  })

  it('sets role to presentation when decorative', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'star', decorative: true },
    })

    expect(wrapper.find('span').attributes('role')).toBe('presentation')
  })

  it('sets aria-hidden to true when decorative', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'star', decorative: true },
    })

    expect(wrapper.find('span').attributes('aria-hidden')).toBe('true')
  })

  it('does not set aria-label when decorative', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'star', decorative: true },
    })

    expect(wrapper.find('span').attributes('aria-label')).toBeUndefined()
  })
})
