const { type } = require("cypress/types/jquery")

describe('fill fields',function(){
    it('fill fields', function(){
        //visitando o site
        cy.visit('https://wejump-automation-test.github.io/qa-test/')

   
        //preencher o campo "Seu Primeiro Nome"
        cy.get('input[placeholder="YourFirstName"]').type('junior')
        //clicando no botao one
        cy.get('.panel-body button[id="btn_one"]').click()
        //checando a opção três
        cy.get('#opt_three').check()
        //selecionando exemplo dois
        cy.get('select[id="select_box"]').select('ExampleTwo').should('option_two')
        //validando imagem 
        cy.get('img[alt="selenium"]').should('be.visible')
    })
})