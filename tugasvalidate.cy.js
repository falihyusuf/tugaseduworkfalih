it.only('Validate Limber', () => {
    cy.request('https://pokeapi.co/api/v2/ability/7/').then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq('limber')
    });
});
