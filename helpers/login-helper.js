export async function loginValid(loginPage, username, password) {
  await loginPage.open()
  await loginPage.login(username, password)
}
export async function loginInvalid(
  loginPage,
  username,
  password,
  expectedError,
) {
  await loginPage.open()
  await loginPage.login(username, password)
  await loginPage.expectError(expectedError)
}
