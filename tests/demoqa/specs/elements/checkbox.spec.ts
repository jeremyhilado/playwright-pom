import { test, expect } from '@playwright/test'
import { CheckBoxPage } from '../../../../pages/demoqa/elements/checkbox'

const URL = 'https://demoqa.com/checkbox'
let checkBoxPage: CheckBoxPage

test('Expand and Collapse Directory', async ({ page }) => {
    await test.step('User can expand whole directory', async () => {
        await page.goto(URL)
        checkBoxPage = new CheckBoxPage(page)
        await checkBoxPage.clickExpandAllButton()
        await checkBoxPage.assertExpandAll()
    })

    await test.step('User can collapse directory', async () => {
        await checkBoxPage.clickCollapseAllButton()
        await checkBoxPage.assertCollapsed()
    })
})