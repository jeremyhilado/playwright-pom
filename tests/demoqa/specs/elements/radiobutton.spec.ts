import { test } from '@playwright/test'
import { RadioButtonPage } from '../../../../pages/demoqa/elements/radiobutton'

const URL = 'https://demoqa.com/radio-button'
let radioButtonPage: RadioButtonPage

test.beforeEach(async ({ page }) => {
    await page.goto(URL)
    radioButtonPage = new RadioButtonPage(page)
})

test('User can click the Yes radio button', async () => {
    await radioButtonPage.checkYesButton()
    await radioButtonPage.assertYesChecked()
})

test('User can click the Impresive radio button', async () => {
    await radioButtonPage.checkImpressiveButton()
    await radioButtonPage.assertImpressiveChecked()
})

test('There is a No radio button', async () => {
    await radioButtonPage.assertNoButtonVisible()
})

test('The No radio button is disabled', async () => {
    await radioButtonPage.assertNoButtonDisabled()
})

