import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from '../page_objects/searchPage'

Given('saya berada di halaman utama Zero Bank', () => {
  SearchPage.visit()
})

When('saya mengetik kata kunci {string} pada kolom pencarian', (keyword) => {
  SearchPage.search(keyword)
})

Then('sistem menampilkan hasil pencarian yang sesuai', () => {
  SearchPage.searchResult.should('be.visible')
})