/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos obrigatórios', () => {
    cy.visit('https://golden-movie-studio.vercel.app/')
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-lastname').type('Favaro')
    cy.get('#signup-email').type('fadsfas@teste.com')
    cy.get('#signup-phone').type('41789465')
    cy.get('#signup-password').type('Favaro@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})