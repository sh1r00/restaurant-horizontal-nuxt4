import { test, expect } from '@playwright/test'

test.describe('Dark Mode (Terra & Flame — horizontal)', () => {
  test('dark mode toggle exists on homepage', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('[aria-label*="mode"]')
    await expect(toggle).toBeVisible()
  })

  test('dark mode toggle cycles between light and dark', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('[aria-label*="mode"]')

    // Initial state — read the aria-label to determine state
    const initialLabel = await toggle.getAttribute('aria-label') || ''

    // Click the toggle
    await toggle.click()
    await page.waitForTimeout(300) // allow transition

    // Label should have changed
    const newLabel = await toggle.getAttribute('aria-label') || ''
    expect(newLabel).not.toBe(initialLabel)

    // Click again to go back
    await toggle.click()
    await page.waitForTimeout(300)
    const revertedLabel = await toggle.getAttribute('aria-label') || ''
    expect(revertedLabel).toBe(initialLabel)
  })

  test('dark mode persists across navigation', async ({ page }) => {
    await page.goto('/')

    // Toggle to the opposite state
    const toggle = page.locator('[aria-label*="mode"]')
    const beforeLabel = await toggle.getAttribute('aria-label') || ''
    await toggle.click()
    await page.waitForTimeout(300)

    // Navigate to /menu
    await page.goto('/menu')
    await page.waitForTimeout(300)

    // Toggle should reflect the current state (not reverted)
    const afterNavToggle = page.locator('[aria-label*="mode"]')
    const afterNavLabel = await afterNavToggle.getAttribute('aria-label') || ''
    expect(afterNavLabel).not.toBe(beforeLabel)
  })

  test('dark mode toggle is accessible', async ({ page }) => {
    await page.goto('/')

    const toggle = page.locator('[aria-label*="mode"]')
    await expect(toggle).toHaveAttribute('aria-label')
    await expect(toggle).toHaveAttribute('aria-pressed')

    // Should be focusable
    await toggle.focus()
    await expect(toggle).toBeFocused()
  })

  test('page does not crash after toggling dark mode multiple times', async ({ page }) => {
    await page.goto('/')

    const toggle = page.locator('[aria-label*="mode"]')

    for (let i = 0; i < 5; i++) {
      await toggle.click()
      await page.waitForTimeout(200)
      // Header should always remain visible after each toggle
      await expect(page.locator('header')).toBeVisible()
    }
  })

  test('dark mode toggle present on all pages', async ({ page }) => {
    const pages = ['/', '/menu', '/about', '/contact']

    for (const path of pages) {
      await page.goto(path)
      const toggle = page.locator('[aria-label*="mode"]')
      await expect(toggle).toBeVisible()
    }
  })
})
