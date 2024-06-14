import { type Page, type Locator, expect } from '@playwright/test'

export class RadioButtonPage {
    readonly page: Page
    readonly yesButton: Locator
    readonly impressiveButton: Locator
    readonly noButton: Locator

    constructor(page: Page) {
        this.page = page
        this.yesButton = page.locator('#yesRadio')
        this.impressiveButton = page.locator('#impressiveRadio')
        this.noButton = page.locator('#noRadio')
    }

    async checkYesButton() {
        await this.yesButton.setChecked(true)
    }

    async checkImpressiveButton() {
        await this.impressiveButton.setChecked(true)
    }

    async assertYesChecked() {
        await expect(this.yesButton).toBeChecked()
    }

    async assertImpressiveChecked() {
        await expect(this.impressiveButton).toBeChecked()
    }

    async assertNoButtonVisible() {
        await expect(this.noButton).toBeVisible()
    }

    async assertNoButtonDisabled() {
        await expect(this.noButton).toBeDisabled()
    }
}