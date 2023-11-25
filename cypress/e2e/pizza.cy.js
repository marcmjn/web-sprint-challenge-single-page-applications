describe('Pizza Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza'); 
  });

  it('should add text to the name input', () => {
    const name = 'Snoop Dogg';
    cy.get('#name-input').type(name);
    cy.get('#name-input').should('have.value', name);
  });

  it('should select multiple toppings', () => {
    cy.get('input[name="topping1"]').check();
    cy.get('input[name="topping2"]').check();
    cy.get('input[name="topping1"]').should('be.checked');
    cy.get('input[name="topping2"]').should('be.checked');
  });

  it('should submit the form', () => {
    cy.get('#name-input').type('Snoop Dog');
    cy.get('#size-dropdown').select('medium');
    cy.get('input[name="topping1"]').check();
    cy.get('textarea#special-text').type('Extra cheese, please!');
    cy.get('#order-button').click();

   
  });
});