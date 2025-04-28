/// <reference types="cypress"/>

describe('US-015 Recomendações', () => {
  it('Verificar se está aparecendo as recomendações', () => {
    cy.visit('https://golden-movie-studio.vercel.app/')
    cy.get('#recommendations-section').should('be.visible')    
  })
})  