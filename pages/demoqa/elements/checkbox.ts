import { type Page, type Locator, expect } from '@playwright/test'

export class CheckBoxPage {
    readonly page: Page
    readonly expandAllButton: Locator
    readonly collapseAllButton: Locator
    readonly homeFolder: Locator
    readonly excelFileDoc: Locator

    constructor(page: Page) {
        this.page = page
        this.expandAllButton = page.getByTitle('Expand all')
        this.collapseAllButton = page.getByTitle('Collapse all')
        this.homeFolder = page.getByText('Home', { exact: true })
        this.excelFileDoc = page.getByText('Excel File.doc')
    }

    async clickHomeFolder() {
        await this.homeFolder.click()
    }

    async clickExpandAllButton() {
        await this.expandAllButton.click()
    }

    async clickCollapseAllButton() {
        await this.collapseAllButton.click()
    }

    async assertExpandAll() {
        await expect(this.excelFileDoc).toBeVisible()
    }

    async assertCollapsed() {
        await expect(this.excelFileDoc).not.toBeVisible()
    }
}