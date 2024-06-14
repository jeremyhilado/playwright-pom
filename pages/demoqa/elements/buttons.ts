import { type Page, type Locator, expect } from '@playwright/test'

export class ButtonsPage {
    readonly page: Page
    readonly doubleClickButton: Locator
    readonly rightClickButton: Locator
    readonly dynamicClickButton: Locator
    readonly doubleClickMsg: Locator
    readonly rightClickMsg: Locator
    readonly dynamicClickMsg: Locator

    constructor(page: Page) {
        this.page = page
        this.doubleClickButton = page.getByRole('button', { name: 'Double Click Me' })
        this.rightClickButton = page.getByRole('button', { name: 'Right Click Me' })
        this.dynamicClickButton = page.getByRole('button', { name: 'Click Me', exact: true })
        this.doubleClickMsg = page.getByText('You have done a double click')
        this.rightClickMsg = page.getByText('You have done a right click')
        this.dynamicClickMsg = page.getByText('You have done a dynamic click')
    }

    async doubleClick() {
        await this.doubleClickButton.dblclick()
    }

    async rightClick() {
        await this.rightClickButton.click({ button: 'right' })
    }

    async singleClick() {
        await this.dynamicClickButton.click()
    }

    async assertDblClick() {
        await expect(this.doubleClickMsg).toBeVisible()
    }

    async assertRightClick() {
        await expect(this.rightClickMsg).toBeVisible()
    }

    async assertDynamicClick() {
        await expect(this.dynamicClickMsg).toBeVisible()
    }
}