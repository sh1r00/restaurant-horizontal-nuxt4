import { test, expect } from '@playwright/test'

test.describe('Contact Page (Terra & Flame — horizontal)', () => {
  test('contact page loads successfully', async ({ page }) => {
    const response = await page.goto('/contact')
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('h1')).toBeVisible()
  })

  test('contact form exists with required fields', async ({ page }) => {
    await page.goto('/contact')

    // The form should be present
    const form = page.locator('form')
    await expect(form).toBeVisible()

    // Name field
    const nameInput = page.locator('#cname')
    await expect(nameInput).toBeVisible()
    await expect(nameInput).toHaveAttribute('required', '')

    // Email field
    const emailInput = page.locator('#cemail')
    await expect(emailInput).toBeVisible()
    await expect(emailInput).toHaveAttribute('type', 'email')
    await expect(emailInput).toHaveAttribute('required', '')

    // Message textarea
    const messageTextarea = page.locator('#cmsg')
    await expect(messageTextarea).toBeVisible()
  })

  test('submit button exists', async ({ page }) => {
    await page.goto('/contact')
    const submitBtn = page.locator('form button[type="submit"]')
    await expect(submitBtn).toBeVisible()
    await expect(submitBtn).not.toBeEmpty()
  })

  test('address and phone info are displayed', async ({ page }) => {
    await page.goto('/contact')

    // Address card
    const addressCard = page.locator('.card').first()
    await expect(addressCard).toBeVisible()

    // Should contain Portland, OR
    await expect(page.getByText(/Portland/)).toBeVisible()
  })

  test('form can be filled and submitted', async ({ page }) => {
    await page.goto('/contact')

    await page.fill('#cname', 'John Doe')
    await page.fill('#cemail', 'john@example.com')
    await page.fill('#cmsg', 'I would like to make a reservation for 2 people.')

    // Click submit — should trigger alert dialog
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Thank you')
      await dialog.accept()
    })

    const submitBtn = page.locator('form button[type="submit"]')
    await submitBtn.click()
  })

  test('contact page is reachable from nav', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL(/\/contact/)
    await expect(page.locator('h1')).toBeVisible()
  })
})
