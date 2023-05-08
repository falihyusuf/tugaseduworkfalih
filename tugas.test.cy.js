describe('Testing Login Functionality', () => {
    beforeEach(() => {
      cy.clearCookies()
    })
  
    it('should login user via API', () => {
      cy.loginViaAPI('user@example.com', 'password123')
  
      cy.url().should('include', '/main')
  
      cy.getCookie('sessionId').should('exist')
      cy.getCookie('userId').should('exist')
      cy.getCookie('userName').should('exist')
    })
  })