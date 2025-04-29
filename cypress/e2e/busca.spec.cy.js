/// <reference types="cypress"/>

describe('US-001 Busca de filme', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('Verificar se o campo busca está encontrando filmes', () => {
    cy.get('#search-input').type('Resident Evil')
    cy.get('#search-button').click()
    cy.contains('Resident Evil').should('be.visible')
  })

  it('Verificar se o campo limpar busca está funcionando', () => {
    cy.get('#search-input').type('Resident Evil')
    cy.get('#clear-button').click()
    cy.get('#search-input').should('have.value', '')
  })

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) =>{
      cy.get('#search-input').type(filmes[0].titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain' , filmes[0].titulo)      
    })
  })
  
  it.only('Deve buscar filmes com sucesso da lista inteira', () => {
    cy.fixture('filmes').each((filmes) =>{
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain' , filmes.titulo)      
    })
  }) 
})  