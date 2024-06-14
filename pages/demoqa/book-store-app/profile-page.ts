import { type Page, type Locator, expect } from '@playwright/test'

export class ProfilePage {
    readonly page: Page
    readonly notLoggedInMsg: Locator

    constructor(page: Page) {
        this.page = page
        this.notLoggedInMsg = page.getByText('Currently you are not logged')
    }

    async assertLoggedIn() {
        await expect(this.notLoggedInMsg).not.toBeVisible()
    }
}