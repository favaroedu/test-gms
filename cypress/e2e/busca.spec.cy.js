/// <reference types="cypress"/>

describe('US-001 Busca de filme', () => {
  it('Verificar se o campo busca está encontrando filmes', () => {
    cy.visit('https://golden-movie-studio.vercel.app/')
    cy.get('#search-input').type('Carros')
    cy.get('#search-button').click()
    cy.contains('Carpinteiros de Carros').should('be.visible')
  })

  it.only('Verificar se o campo limpar busca está funcionando', () => {
    cy.visit('https://golden-movie-studio.vercel.app/')
    cy.get('#search-input').type('Carros')
    cy.get('#clear-button').click()
    cy.get('#search-input').should('have.value', '')
  })  
})  