/// <reference types="cypress" />

describe('NAVBAR TEST', function() {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
    });
  
    it("SHOULD DISPLAY CONTENT", () => {
      cy.log('ONLINE BANKING')
      cy.contains('Online Banking').click()
      cy.url().should('include','online-banking.html')
      cy.get('h1').should('be.visible')
      cy.log('+++++++++++++++++++++++++++++++++++++++')
      cy.log('FEEDBACK')
      cy.contains('Feedback').click()
      cy.url().should('include','feedback.html')
      cy.log('+++++++++++++++++++++++++++++++++++++++')
      cy.log('HOMEPAGE')
      cy.contains('Zero Bank').click()
      cy.url().should('include','index.html')
      cy.log('+++++++++++++++++++++++++++++++++++++++')
      cy.log('MY MONEY MAP')
      cy.contains('My Money Map').click()
      cy.url().should('include','login.html')
    });
  
  });