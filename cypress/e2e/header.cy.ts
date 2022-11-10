/// <reference types="cypress" />

describe('header', () => {
    const ADD_BUTTON_SELECTOR = 'html > body > div > div > header > div > div > a';

    before(() => {
        cy.visit('/');
    });

    it('contains the header', () => {
        cy.get('header').should('exist');
    });

    it('contains add button', () => {
        cy.get(ADD_BUTTON_SELECTOR).should('exist');
    });

    it('redirects to add page', () => {
        cy.get(ADD_BUTTON_SELECTOR).click();
        cy.url().should('include', '/create');
    });
});
