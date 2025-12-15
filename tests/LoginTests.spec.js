// test login of first user
import {expect, test} from '@playwright/test'
import {TITLES} from '../data/Titles.js'
import {
  INVALID_USERS,
  STANDARD_USER,
  VALID_PASSWORD,
  VALID_USERS,
} from '../data/Users.js'
import {loginInvalid, loginValid} from '../helpers/LoginHelper.js'
import {InventoryPage} from '../pages/InventoryPage.js' 
import {LoginPage} from '../pages/LoginPage.js'


test.describe('Login Suite', () => {
  test('Login with a valid user', async ({page}) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    await loginPage.open()
    await loginPage.login(STANDARD_USER, VALID_PASSWORD)
    await expect(page.locator(inventoryPage.title)).toHaveText(TITLES.INVENTORY)
  })
})


// test login of valid users
test.describe('Login Suite - Valid Users', () => {
VALID_USERS.forEach((user) => {
    test(`Login of valid users: ${user}`, async ({page}) => {
      const loginPage = new LoginPage(page)
      const inventoryPage = new InventoryPage(page)
      await loginValid(loginPage, user, VALID_PASSWORD)
      await expect(page.locator(inventoryPage.title)).toHaveText(
        TITLES.INVENTORY,
      )
    })
  })
})


// test login of invalid users
test.describe('Login Suite - Invalid logins', () => {
INVALID_USERS.forEach(({scenario, username, password, expectedError}) => {
    test(`Login of invalid users: ${scenario}`, async ({page}) => {
      const loginPage = new LoginPage(page)
      await loginInvalid(loginPage, username, password, expectedError)
    })
  })
})