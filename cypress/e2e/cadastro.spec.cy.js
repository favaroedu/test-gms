/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')   
  });
  it('Registro com todos os campos obrigatórios', () => {
    var email = `eduardo${Date.now()}@teste.com` 
    cy.preencherCadastro('Eduardo', 'Favaro', email, '418908080', 'Teste@123')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Validação do formato de e-mail inválido', () => {
    
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-lastname').type('Favaro')
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type('41789465')
    cy.get('#signup-password').type('Favaro@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  })

  it('Validação de cadastro sem preencher campos obrigatórios', () => {
    
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Nome não pode estar vazio')
  })

  it('Validar que não é possível cadastrar preenchendo apenas alguns campos obrigatórios', () => {
    
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-email').type('eduardo222@teste.com')
    cy.get('#signup-phone').type('41789465')
    cy.get('#signup-password').type('Favaro@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Sobrenome não pode estar vazio')
  })

  it('Registro com todos os campos preenchidos(incluindo não obrigatórios)', () => {
    
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-lastname').type('Favaro')
    cy.get('#signup-email').type('eduardo2212@teste.com')
    cy.get('#signup-phone').type('41789465')
    cy.get('#signup-password').type('Favaro@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Validação de bloqueio de senha fraca', () => {
    
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-lastname').type('Favaro')
    cy.get('#signup-email').type('du2212@teste.com')
    cy.get('#signup-phone').type('41789465')
    cy.get('#signup-password').type('favaro123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })

  it('Validar cadastro de e-mail duplicado', () => {
    
    cy.get('#signup-firstname').type('Eduardo')
    cy.get('#signup-lastname').type('Favaro')
    cy.get('#signup-email').type('eduardo2212@teste.com')
    cy.get('#signup-phone').type('41789465')
    cy.get('#signup-password').type('Favaro@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Este email já está cadastrado.')
  })

  it('Validar link da política de privacidade', () => {
    
    cy.contains('Política de Privacidade').click().wait(5000)
    cy.contains('Introdução').should('be.visible')
  })
})  