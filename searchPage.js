// file searchPage.js

class SearchPage {
    visit() {
      cy.visit('http://zero.webappsecurity.com/index.html')
    }
  
    get searchInput() {
      return cy.get('#searchTerm')
    }
  
    get searchButton() {
      return cy.get('#searchTerm')
    }
  
    search(keyword) {
      this.searchInput.type(keyword)
      this.searchButton.click()
    }
  
    get searchResult() {
      return cy.get('#searchTable')
    }
  }
  
  export default new SearchPage()
  