import { test } from '@playwright/test'
import { ButtonsPage } from '../../../../pages/demoqa/elements/buttons'

const URL = 'https://demoqa.com/buttons'
let buttonsPage: ButtonsPage

test.beforeEach(async ({ page }) => {
    await page.goto(URL)
    buttonsPage = new ButtonsPage(page)
})

test('Double click test', async () => {
    await buttonsPage.doubleClick()
    await buttonsPage.assertDblClick()
})

test('Right click test', async () => {
    await buttonsPage.rightClick()
    await buttonsPage.assertRightClick()
})

test('Dynamic click test', async () => {
    await buttonsPage.singleClick()
    await buttonsPage.assertDynamicClick()
})