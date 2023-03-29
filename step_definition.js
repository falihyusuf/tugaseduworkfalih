const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('Saya berada di halaman utama Zero Bank', () => {
  cy.visit('/');
  cy.get('#signin_button').click();
  cy.get('#user_login').type('username');
  cy.get('#user_password').type('password');
  cy.get('#user_remember_me').click();
  cy.get('.btn-primary').click();
});

When('Saya mengklik kotak pencarian', () => {
  cy.get('#searchTerm').click();
});

And('Saya memasukkan kata kunci yang valid {string}', (keyword) => {
  cy.get('#searchTerm').type(keyword);
});

And('Saya memasukkan kata kunci yang tidak valid {string}', (keyword) => {
  cy.get('#searchTerm').type(keyword);
});

And('Saya mengklik tombol pencarian', () => {
  cy.get('#searchMenu > .btn').click();
});

Then('Saya akan diarahkan ke halaman hasil pencarian', () => {
  cy.get('.search-results').should('be.visible');
});

And('Halaman hasil pencarian akan menampilkan hasil yang relevan', () => {
  cy.get('.search-results > li').should('have.length.gt', 0);
});

Then('Saya akan melihat pesan yang menunjukkan bahwa tidak ada hasil yang ditemukan', () => {
  cy.get('.search-results').should('not.exist');
  cy.get('.span7').should('contain.text', 'No results were found for the query');
});

And('Saya akan diarahkan kembali ke halaman utama', () => {
  cy.get('.brand').should('contain.text', 'Zero Bank');
});
