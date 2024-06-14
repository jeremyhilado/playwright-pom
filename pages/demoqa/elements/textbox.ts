import { type Page, type Locator } from '@playwright/test'

export class TextBoxPage {
    readonly page: Page
    readonly fullNameInput: Locator
    readonly emailInput: Locator
    readonly currentAddressInput: Locator
    readonly permanentAddressInput: Locator
    readonly submitButton: Locator
    
    constructor(page: Page) {
        this.page = page
        this.fullNameInput = page.getByPlaceholder('Full Name')
        this.emailInput = page.getByPlaceholder('name@example.com')
        this.currentAddressInput = page.getByPlaceholder('Current Address')
        this.permanentAddressInput = page.locator('#permanentAddress')
        this.submitButton = page.getByRole('button', { name: 'Submit' })
    }

    async fillTextBoxesAndSubmit(fullname: string, email: string, currentAddress: string, permanentAddress:string) {
        await this.fullNameInput.fill(fullname)
        await this.emailInput.fill(email)
        await this.currentAddressInput.fill(currentAddress)
        await this.permanentAddressInput.fill(permanentAddress)
        await this.submitButton.click()
    }
}