describe('iframe buttons', function(){
    it('iframe buttons', function(){
      //visitando o site
        cy.visit('https://wejump-automation-test.github.io/qa-test/', { timeout: 100000})

        //clicando em botoes dentro do iframe
        cy.iframe('iframe[src*="buttons"]').find('button[id="btn_one"]').click()
        cy.iframe('iframe[src*="buttons"]').find('button[id="btn_two"]').click()
        cy.iframe('iframe[src*="buttons"]').find('button[id="btn_link"]').click()
    
        //validando ausencia de botoes dentro do iframe
        cy.iframe('iframe[src*="buttons"]').find('button[id="btn_one"]').should('not.be.visible')
        cy.iframe('iframe[src*="buttons"]').find('button[id="btn_two"]').should('not.be.visible')
        cy.iframe('iframe[src*="buttons"]').find('button[id="btn_link"]').should('not.be.visible')
    })
})