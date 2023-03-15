/// <reference types="cypress" />

describe("AUTOMATION SEARCH KEYWORD ONLINE", () => {

    it('AUTOMATION LOGIN', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      
      cy.get('#user_login').clear() 
      cy.get('#user_login').type('username') 
    
      cy.get('input[name="user_password"]').clear() 
      cy.get('input[name="user_password"]').type('password') 
    
      cy.get('input[name="submit"]').click()
  
      cy.get('#searchTerm').type('ONLINE{enter}') 
      cy.url().should('include','search.html')
      
    });
  
  });