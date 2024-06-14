import { test } from '@playwright/test'
import { ProfilePage } from '../../../../pages/demoqa/book-store-app/profile-page'
import uiPages from '../../../../utils/uiPages'

let profilePage: ProfilePage

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com' + `${uiPages.profile}`)
    profilePage = new ProfilePage(page)
})

test('Check logged in', async () => {
    await profilePage.assertLoggedIn()
})