import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ABaseButton from '~/components/atoms/ABaseButton.vue'

describe('ABaseButton', () => {
  it('renders a button with default type', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Click me' },
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').attributes('type')).toBe('button')
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies btn-primary class by default (filled variant)', () => {
    const wrapper = mount(ABaseButton, {
      props: { variant: 'filled' },
      slots: { default: 'Test' },
    })

    expect(wrapper.find('button').classes()).toContain('btn-primary')
  })

  it('applies btn-outline class for outlined variant', () => {
    const wrapper = mount(ABaseButton, {
      props: { variant: 'outlined' },
      slots: { default: 'Outline' },
    })

    expect(wrapper.find('button').classes()).toContain('btn-outline')
  })

  it('sets the type attribute from props', () => {
    const wrapper = mount(ABaseButton, {
      props: { type: 'submit' },
      slots: { default: 'Submit' },
    })

    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })

  it('disables the button when disabled prop is true', () => {
    const wrapper = mount(ABaseButton, {
      props: { disabled: true },
      slots: { default: 'Disabled' },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('disables the button when loading prop is true', () => {
    const wrapper = mount(ABaseButton, {
      props: { loading: true },
      slots: { default: 'Loading' },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').attributes('aria-busy')).toBe('true')
  })

  it('shows spinner when loading', () => {
    const wrapper = mount(ABaseButton, {
      props: { loading: true },
      slots: { default: 'Save' },
    })

    expect(wrapper.find('[role="status"]').exists()).toBe(true)
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('does not show spinner when not loading', () => {
    const wrapper = mount(ABaseButton, {
      props: { loading: false },
      slots: { default: 'Save' },
    })

    expect(wrapper.find('[role="status"]').exists()).toBe(false)
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Click' },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(ABaseButton, {
      props: { disabled: true },
      slots: { default: 'Nope' },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(ABaseButton, {
      props: { loading: true },
      slots: { default: 'Nope' },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
