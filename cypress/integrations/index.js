describe('Home Page Tests', () => {

  before(() => {
    cy.visit('/')
  })

  it('shows home page', () => {
    cy.percySnapshot()
  })
})
