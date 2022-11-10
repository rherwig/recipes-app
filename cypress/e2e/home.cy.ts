/// <reference types="cypress" />

describe('homepage', () => {
    before(() => {
        cy.visit('/');
    });

    it('contains my recipes', () => {
        cy.get('h1').contains('Recipes');
    });
});
