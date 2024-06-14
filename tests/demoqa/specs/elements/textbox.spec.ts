import { test, expect } from '@playwright/test'
import { TextBoxPage } from '../../../../pages/demoqa/elements/textbox'

const URL = 'https://demoqa.com/text-box'
let textBoxPage: TextBoxPage

test('Fill in text boxes and submit', async ({ page }) => {
    await page.goto(URL)
    textBoxPage = new TextBoxPage(page)
    await textBoxPage.fillTextBoxesAndSubmit('Test Test', 'test@test.com', 'Current', 'Permanent')
    await expect(page.getByText('Name:Test Test')).toBeVisible()
    await expect(page.getByText('Email:test@test.com')).toBeVisible()
    await expect(page.getByText('Current Address :Current')).toBeVisible()
    await expect(page.getByText('Permananet Address :Permanent')).toBeVisible()
})