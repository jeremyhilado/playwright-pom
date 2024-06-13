
import { test } from '@playwright/test'
import { ProfilePage } from '../../../pages/demoqa/profile-page'

let profilePage: ProfilePage

test.use({ storageState: { cookies: [], origins: [] } })
test.describe.configure({mode: 'serial'})

test.beforeEach(async ({ page }) => {
    test('successful login', async () => {
        await demoQALoginPage.login(username, password)
        await profilePage.assertLoggedIn()
    })
})