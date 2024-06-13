import { chromium, FullConfig } from '@playwright/test'
import { DemoQALoginPage } from '../pages/demoqa/login-page'
import uiPages from '../utils/uiPages'

async function globalSetup(config: FullConfig) {
    const user = process.env.USER!
    const password = process.env.PASSWORD!
    const { baseURL, storageState } = config.projects[0].use
    const browser = await chromium.launch({ headless: true, timeout: 10000 })
    const page = await browser.newPage()
    const demoQALoginPage = new DemoQALoginPage(page)

    await page.goto(baseURL+uiPages.login)
    await demoQALoginPage.login(user, password)
    await page.context().storageState({ path: storageState as string})
    await browser.close()
}

export default globalSetup