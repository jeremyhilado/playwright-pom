import { type Page, type Locator } from '@playwright/test'

export class DemoQALoginPage {
    readonly page: Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly invalidCredentialMsg: Locator

    constructor(page: Page) {
        this.page = page
        this.userNameInput = page.getByPlaceholder('UserName')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.invalidCredentialMsg = page.locator('#name')
    }

    async login(username: string, password: string) {
        await this.page.goto('https://demoqa.com/login')
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}