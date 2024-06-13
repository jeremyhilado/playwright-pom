import { test } from '@playwright/test'
import { LoginPage } from '../pages/login'

const username = process.env.HEROKU_USER!
const password = process.env.HEROKU_PASSWORD!

test('User should be able to login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage('https://the-internet.herokuapp.com/login')
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.clickLogin()
    await loginPage.assertLogin()
});