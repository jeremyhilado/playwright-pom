import { type Locator, type Page, expect } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly secureAreaTitle: Locator
    
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.secureAreaTitle = page.getByRole('heading', { name: 'Secure Area', exact: true })
    }

    async gotoLoginPage(url: string) {
        await this.page.goto(url)
    }

    async enterUsername(username: string) {   
        await this.usernameInput.fill(username)
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password)
    }

    async clickLogin() {
        await this.loginButton.click()
    }   

    async assertLogin() {
        await expect(this.secureAreaTitle).toBeVisible()
    }
}