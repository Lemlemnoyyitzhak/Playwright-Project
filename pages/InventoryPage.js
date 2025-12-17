import {expect} from '@playwright/test'
import {TITLES} from '../data/titles.js'
import {URLS} from '../data/urls.js'

export class InventoryPage {
  // Locators
  title = '[data-test="title"]'
  addBackpackButton = '[data-test="add-to-cart-sauce-labs-backpack"]'
  addBikeLightButton = '[data-test="add-to-cart-sauce-labs-bike-light"]'
  cartLink = '.shopping_cart_link'
  cartBadge = '.shopping_cart_badge'
  checkoutButton = '[data-test="checkout"]'
  firstNameField = '[data-test="firstName"]'
  lastNameField = '[data-test="lastName"]'
  postalCodeField = '[data-test="postalCode"]'
  continueButton = '[data-test="continue"]'
  finishButton = '[data-test="finish"]'
  completeHeader = '[data-test="complete-header"]'

  constructor(page) {
    this.page = page
  }

  // Actions & Methods
  async assertInventoryPage() {
    await expect(this.page).toHaveURL(URLS.INVENTORY)
    await expect(this.page.locator(this.title)).toHaveText(TITLES.INVENTORY)
  }

  async addTwoProducts() {
    await this.page.locator(this.addBackpackButton).click()
    await this.page.locator(this.addBikeLightButton).click()
    await expect(this.page.locator(this.cartBadge)).toHaveText('2')
  }

  async goToCart() {
    await this.page.locator(this.cartLink).click()
    await expect(this.page).toHaveURL(URLS.CART)
    await expect(this.page.locator(this.title)).toHaveText(TITLES.CART)
    await expect(this.page.locator(this.cartBadge)).toHaveText('2')
  }

  async checkoutStepOne() {
    await this.page.locator(this.checkoutButton).click()
    await expect(this.page).toHaveURL(URLS.CHECKOUT_1)
    await expect(this.page.locator(this.title)).toHaveText(TITLES.CHECKOUT_1)
    await this.page.locator(this.firstNameField).fill('Lemlem Noy')
    await this.page.locator(this.lastNameField).fill('Yitzhak')
    await this.page.locator(this.postalCodeField).fill('12345')
    await this.page.locator(this.continueButton).click()
  }

  async checkoutStepTwo() {
    await expect(this.page).toHaveURL(URLS.CHECKOUT_2)
    await expect(this.page.locator(this.title)).toHaveText(TITLES.CHECKOUT_2)
    await this.page.locator(this.finishButton).click()
  }

  async assertCheckoutComplete() {
    await expect(this.page).toHaveURL(URLS.COMPLETE)
    await expect(this.page.locator(this.title)).toHaveText(TITLES.COMPLETE)
    await expect(this.page.locator(this.completeHeader)).toHaveText(
      'Thank you for your order!',
    )
  }
}