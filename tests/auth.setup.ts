import { test as setup, expect} from '@playwright/test'

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ page }) => {
    const username = process.env.DEMOQA_USER!
    const password = process.env.DEMOQA_PASSWORD!
    await page.goto('https://demoqa.com/login')
    await page.getByPlaceholder('UserName').fill(username)
    await page.getByPlaceholder('Password').fill(password)
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page).toHaveURL('https://demoqa.com/profile')

    await page.context().storageState({ path: authFile })
})