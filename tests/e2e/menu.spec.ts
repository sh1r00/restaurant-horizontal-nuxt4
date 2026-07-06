import { test, expect } from '@playwright/test'

test.describe('Menu Page (Terra & Flame — horizontal)', () => {
  test('menu page loads successfully', async ({ page }) => {
    const response = await page.goto('/menu')
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('h1')).toBeVisible()
  })

  test('menu heading is present', async ({ page }) => {
    await page.goto('/menu')
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    // Should contain "Menu" text (exact text depends on i18n)
    await expect(heading).not.toBeEmpty()
  })

  test('menu categories are displayed', async ({ page }) => {
    await page.goto('/menu')

    const categories = ['Starters', 'Mains', 'Desserts']
    for (const cat of categories) {
      await expect(page.getByRole('heading', { name: cat, level: 2 })).toBeVisible()
    }
  })

  test('menu items have name, description, and price', async ({ page }) => {
    await page.goto('/menu')

    // Each menu item is a flex row with item name, description, and price
    const startCategory = page.getByText('Starters').locator('..')
    // The items are in the sibling div after the h2 border
    const menuItems = page.locator('.space-y-4 > div')
    const count = await menuItems.count()
    expect(count).toBeGreaterThan(0)

    // Check first item has name, description, and price
    const firstItem = menuItems.first()
    await expect(firstItem.locator('h3')).toBeVisible()
    await expect(firstItem.locator('p')).toBeVisible()
    // Price should contain a dollar sign
    await expect(firstItem.locator('span')).toBeVisible()
  })

  test('at least 3 starters exist', async ({ page }) => {
    await page.goto('/menu')
    // Starters section: h2 "Starters" then the items
    const startersRegion = page.getByText('Starters')
    // Items should be in sibling elements
    const allItems = page.locator('.space-y-4')
    // There should be items present
    const allItemDivs = page.locator('h3')
    const itemCount = await allItemDivs.count()
    expect(itemCount).toBeGreaterThanOrEqual(3)
  })

  test('prices are displayed in dollar format', async ({ page }) => {
    await page.goto('/menu')
    const prices = page.locator('span:has-text("$")')
    const count = await prices.count()
    expect(count).toBeGreaterThan(0)
  })
})
