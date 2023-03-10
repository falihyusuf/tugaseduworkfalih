/// <reference types="cypress" />

describe("POSITIVE LOGIN TEST", () => {

    context('AUTOMATION OPEN PAGE LOGIN', () => {
        beforeEach(() => {
        cy.clearLocalStorage
        cy.visit('https://practicetestautomation.com/practice-test-login/',{ retries: 5 })
        cy.url().should('include','test-login')
        });
        it('AUTOMATION LOGIN', () => {
        cy.get('#username').clear()
        cy.get('#username').type('student')

        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Password123')
        cy.get('.btn').click()
        });
    });

    context('AUTOMATION AFTER LOGIN', () => {
        beforeEach(() => {
            cy.visit('https://practicetestautomation.com/logged-in-successfully/',{ retries: 5 })
        });
        it("AUTOMATION CHECKING AFTER LOGIN", () => {
            cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/')
            cy.get('h1').contains('Logged In Successfully')
            cy.get('a').contains('Log out').should('be.visible');
        });
    });
});