describe('buttons', function(){
    it('interage com botoes', function(){
        //entrando na pagina 
        cy.visit('https://wejump-automation-test.github.io/qa-test/', { timeout: 100000})
       
        //clicando em botoes
        cy.get('.panel-body button[id="btn_one"]').click()
        cy.get('.panel-body button[id="btn_two"]').click()
        cy.get('.panel-body button[id="btn_link"]').click()
        
        //validando ausencia de botoes
        cy.get('.panel-body button[id="btn_one"]').should('not.be.visible')
        cy.get('.panel-body button[id="btn_two"]').should('not.be.visible')
        cy.get('.panel-body button[id="btn_link"]').should('not.be.visible')
    })
})