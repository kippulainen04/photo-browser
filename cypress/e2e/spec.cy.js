describe('Home Page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Photo Browser')
    cy.contains('Home')
    cy.get('#thumbnail').find('img').should('have.attr', 'src', 'https://via.placeholder.com/150/92c952')
  })

  it('first image can be clicked', function (){
    cy.get('#image').click();
    cy.url().should('include', 'http://localhost:3000/image/1');
    cy.visit('http://localhost:3000/image/1')
    cy.contains('accusamus beatae ad facilis cum similique qui sunt');
    cy.get('#next')
    .should('contain', 'Next')
    .and('have.css', 'color', 'rgb(69, 12, 44)')
    .and('have.css', 'font-weight', '700')
    cy.get('html').should('contain', 'Photo Browser')
  })

  // it('navigate to another page', function () {
  //   cy.contains('3').click()
  // })
})
