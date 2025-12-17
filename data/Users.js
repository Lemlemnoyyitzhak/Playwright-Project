// Valid login
export const STANDARD_USER = 'standard_user'
export const VALID_PASSWORD = 'secret_sauce'

// Valid users list
export const VALID_USERS = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
]

// Invalid users list
export const INVALID_USERS = [
  {
    scenario: 'Locked out user + currect password',
    username: 'locked_out_user',
    password: VALID_PASSWORD,
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    scenario: 'Wrong username + wrong password',
    username: 'wrong_user',
    password: 'wrong_password',
    expectedError:
      'Epic sadface: Username and password do not match any user in this service',
  },
  {
    scenario: 'Missing username + correct password',
    username: '',
    password: VALID_PASSWORD,
    expectedError: 'Epic sadface: Username is required',
  },
  {
    scenario: 'Correct username + missing password',
    username: 'standard_user',
    password: '',
    expectedError: 'Epic sadface: Password is required',
  },
  {
    scenario: 'Missing username + missing password',
    username: '',
    password: '',
    expectedError: 'Epic sadface: Username is required',
  },
]