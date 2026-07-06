import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OFooter from '~/components/organisms/OFooter.vue'

describe('OFooter', () => {
  it('renders footer with contentinfo role', () => {
    const wrapper = mount(OFooter)

    const footer = wrapper.find('footer')
    expect(footer.exists()).toBe(true)
    expect(footer.attributes('role')).toBe('contentinfo')
  })

  it('renders restaurant name "Terra&Flame"', () => {
    const wrapper = mount(OFooter)

    const text = wrapper.text()
    expect(text).toContain('Terra')
    expect(text).toContain('Flame')
  })

  it('renders tagline from i18n', () => {
    const wrapper = mount(OFooter)

    expect(wrapper.text()).toContain('footer.tagline')
  })

  it('renders navigation links', () => {
    const wrapper = mount(OFooter)

    // NuxtLink stubs render as <a> elements with href
    const links = wrapper.findAll('a[href]')
    expect(links.length).toBe(3)
  })

  it('renders "Hours" heading', () => {
    const wrapper = mount(OFooter)

    expect(wrapper.text()).toContain('footer.hours')
  })

  it('renders hours of operation', () => {
    const wrapper = mount(OFooter)

    const text = wrapper.text()
    expect(text).toContain('Tue-Sat: 5:00 PM – 10:00 PM')
    expect(text).toContain('Sun: 11:00 AM – 3:00 PM')
    expect(text).toContain('Mon: Closed')
  })

  it('renders copyright with current year', () => {
    const wrapper = mount(OFooter)

    expect(wrapper.text()).toContain('footer.copyright')
  })

  it('renders "Made with ❤️ by SH1R00" line', () => {
    const wrapper = mount(OFooter)

    const html = wrapper.html()
    expect(html).toContain('SH1R00')
  })

  it('has footer navigation with aria-label', () => {
    const wrapper = mount(OFooter)

    const nav = wrapper.find('nav[aria-label="Footer"]')
    expect(nav.exists()).toBe(true)
  })
})
