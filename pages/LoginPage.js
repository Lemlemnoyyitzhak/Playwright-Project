import {expect} from '@playwright/test'
import {BASE_URL} from '../data/URLs.js'

export class LoginPage {
  // Locators
  userNameField = '[data-test="username"]'
  userPasswordField = '[data-test="password"]'
  loginButton = '[data-test="login-button"]'
  errorMessage = '[data-test="error"]'
  loginLogo = '[class="login_logo"]'

  constructor(page) {
    this.page = page
  }

  // Actions & Methods
  async open() {
    await this.page.goto(BASE_URL)
    await expect(this.page.locator(this.loginLogo)).toHaveText('Swag Labs')
  }

  async login(username, password) {
    await this.page.locator(this.userNameField).fill(username)
    await this.page.locator(this.userPasswordField).fill(password)
    await this.page.locator(this.loginButton).click()
  }

  async expectError(message) {
    await expect(this.page.locator(this.errorMessage)).toHaveText(message)
  }
}
