describe('Logar na tela', () => {
  it('Nome do usuário', () => {
    cy.visit('https://demo.applitools.com/')

    cy.get('#username').type("eliene.falcao")
    cy.get('#password').type(123456)
    cy.get('#log-in').click()
    cy.get('.btn-primary > span').click()
    cy.get('.btn-success').click()

   
  })

  } )





