/// <reference types="cypress" />

describe('AUTOMATION TESTING', () => {
    it('LOGIN/LOGOUT TEST',() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.log('MENGUNJUNGI WEBSITE ZERO WEB APP SECURITY')

        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.log('MENAMPILKAN HALAMAN LOGIN')
        
        cy.get('#user_login').clear()
        cy.get('#user_login').type('FALIH')

        cy.get('#user_password').clear()
        cy.get('#user_password').type('FALIH')

        cy.get('input[name="submit"]').click()

        cy.get('.alert-error').should('be.visible').and('contain.text','Login and/or password are wrong.')
        cy.log('MENCOBA LOGIN DENGAN INVALID DATA')

        cy.fixture("user").then(user => { 
            const username = user.username 
            const password = user.password
        cy.login(username.password)

        cy.get('h2').should('contain.text','Accounts')
        });
        cy.log('MENCOBA LOGIN DENGAN VALID DATA')

        cy.contains('username').click()
        cy.get('#logout_link').click()

        cy.get('h4').should('contain.text','Online Banking')
        cy.log('MENCOBA LOG OUT')
    });
});