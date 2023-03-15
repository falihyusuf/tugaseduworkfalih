/// <reference types="cypress" />

describe("AUTOMATION PAY BILLS TEST", () => {

    it('AUTOMATION LOGIN', () => {
      cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
  
      /*cy.fixture("user").then(user => { 
        const username = user.username 
        const password = user.password*/
  
      //ISI DARI CUSTOM COMMAND YANG ADA DI FOLDER SUPPORT FILE COMMANDS
      cy.get('#user_login').clear() 
      cy.get('#user_login').type('username') 
  
      cy.get('input[name="user_password"]').clear() 
      cy.get('input[name="user_password"]').type('password') 
  
      cy.get('input[name="submit"]').click()
  
      /*cy.login(username.password) //custom command*/
      });
  
      cy.get('#sp_payee').select('bofa')
      cy.get('#sp_account').select('Credit Card')
      cy.get('#sp_amount').type('99999')
      cy.get('#sp_description').type('CREDIT CARD PAYMENT')
      cy.get('#sp_date').type('1945-08-17')
  
      cy.get('input[type="submit"]').click()
      
    });
  
});