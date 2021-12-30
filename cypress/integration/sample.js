const siteData = {
  siteurl: 'http://localhost:19006/',
  
  // Login Screen
  usernameField: '[role="button"][aria-label="getstarted"]',
  passwordField: '[role="button"][aria-label="getstarted"]',
};

const welcomeScreenData = {
  urlPath: '/welcome',
  getstartedButton: '[role="button"][aria-label="getstarted"]',
};

const loginScreenData = {
  urlPath: '/login',
  usernameField: 'input[aria-label="username"]',
  passwordField: 'input[aria-label="password"]',
  loginButton: '[role="button"][aria-label="login"]',
  signupButton: '[role="button"][aria-label="signup"]',

  username: 'Top',
  password: 'Bear@123'
};

const signupScreenData = {
  urlPath: '/register',
  usernameField: 'input[aria-label="username"]',
  passwordField: 'input[aria-label="password"]',
  emailField: 'input[aria-label="email"]',
  privacyCheckbox: '[aria-label="privacy-policy"]',
  signupButton: '[role="button"][aria-label="signup"]',

  username: 'Top',
  password: 'Bear@123',
  email: 'beauty.pig0223@gmail.com'
};

const verificationScreenData = {
  urlPath: '/otp-verification',
};

const homeScreenData = {
  urlPath: '/',
  logoutButton: '[aria-label="logout"]'
};

describe('Login Flow Test', () => {
  it('Welcome Screen', () => {
    cy.visit(siteData.siteurl);
    cy.get(welcomeScreenData.getstartedButton).as('getstarted-button');

    cy.get('@getstarted-button').click();

    expect(cy.url().should('include', loginScreenData.urlPath));
  })

  it('Login Screen', () => {
    cy.get(loginScreenData.usernameField).as('username');
    cy.get(loginScreenData.passwordField).as('password');
    cy.get(loginScreenData.loginButton).as('login-button');

    cy.get('@username').type(loginScreenData.username);
    cy.get('@password').type(loginScreenData.password);

    cy.get('@login-button').click();

    cy.wait(8000);

    expect(cy.url().should('include', homeScreenData.urlPath));
  })

  // it('Logout', () => {
  //   cy.get(homeScreenData.logoutButton).as('logout-button');

  //   cy.get('@logout-button').click();

  //   cy.wait(8000);

  //   expect(cy.url().should('include', welcomeScreenData.urlPath));
  // })
})

describe('Signup Flow Test', () => {
  it('Welcome Screen', () => {
    cy.visit(siteData.siteurl);
    cy.get(welcomeScreenData.getstartedButton).as('getstarted-button');

    cy.get('@getstarted-button').click();

    expect(cy.url().should('include', loginScreenData.urlPath));
  })

  it('Login Screen', () => {
    cy.get(loginScreenData.signupButton).as('signup-button');

    cy.get('@signup-button').click();

    expect(cy.url().should('include', signupScreenData.urlPath));
  })

  it('Signup Screen', () => {
    cy.get(signupScreenData.usernameField).as('username');
    cy.get(signupScreenData.passwordField).as('password');
    cy.get(signupScreenData.emailField).as('email');
    cy.get(signupScreenData.privacyCheckbox).as('privacy');

    cy.get(signupScreenData.signupButton).as('signup-button');

    cy.get('@username').eq(1).type(signupScreenData.username);
    cy.get('@email').first().type(signupScreenData.email);
    cy.get('@password').eq(1).type(signupScreenData.password);
    cy.get('@privacy').first().click();

    cy.get('@signup-button').eq(1).click();

    // expect(cy.url().should('include', verificationScreenData.urlPath));
  })
})