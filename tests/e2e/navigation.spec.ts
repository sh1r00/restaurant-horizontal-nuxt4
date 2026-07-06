import { test, expect } from '@playwright/test'

const NAV_PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const

test.describe('Navigation (Terra & Flame — horizontal)', () => {
  test('skip-to-content link is visible and functional', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeVisible()
    await skipLink.click()
    await expect(page.locator('#main-content')).toBeVisible()
  })

  test('header is visible on all pages', async ({ page }) => {
    for (const { path } of NAV_PAGES) {
      await page.goto(path)
      await expect(page.locator('header')).toBeVisible()
    }
  })

  test('desktop nav has links to all pages', async ({ page, browserName }) => {
    // Set viewport to desktop width
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')

    const desktopNav = page.locator('nav[aria-label="Main navigation"]')
    await expect(desktopNav).toBeVisible()

    // Verify all nav links exist in desktop nav
    for (const { name } of NAV_PAGES) {
      await expect(desktopNav.getByRole('link', { name })).toBeVisible()
    }
  })

  test('nav links navigate to correct pages', async ({ page }) => {
    await page.goto('/')

    // Click Menu link and verify we land on /menu
    await page.getByRole('link', { name: 'Menu' }).first().click()
    await expect(page).toHaveURL(/\/menu/)

    // Click About link and verify
    await page.getByRole('link', { name: 'About' }).first().click()
    await expect(page).toHaveURL(/\/about/)

    // Click Contact link and verify
    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL(/\/contact/)

    // Brand logo / home link should go back to /
    await page.getByRole('link', { name: /Terra.*Flame home/ }).click()
    await expect(page).toHaveURL('/')
  })

  test('mobile menu toggles open and closed', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    await page.goto('/')

    const mobileToggle = page.getByRole('button', { name: /menu|open/i })
    await expect(mobileToggle).toBeVisible()

    // Open mobile menu
    await mobileToggle.click()
    const mobileNav = page.locator('nav[aria-label="Mobile navigation"]')
    await expect(mobileNav).toBeVisible()

    // Close it
    const closeButton = page.getByRole('button', { name: /close/i })
    await closeButton.click()
    await expect(mobileNav).not.toBeVisible()
  })

  test('footer is visible on all pages', async ({ page }) => {
    for (const { path } of NAV_PAGES) {
      await page.goto(path)
      await expect(page.locator('footer')).toBeVisible()
    }
  })
})
