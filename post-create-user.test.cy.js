it('Add a new user', () => {
    var user = {
        "name": 'Falih',
        "job": 'QA Engineer'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).equal('Falih')
        expect(response.body.job).equal('QA Engineer')
    })
})
