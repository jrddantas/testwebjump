<h1>
    <div align='center'>Teste de Automação - QA - WebJump</div>
</h1>
<div align='center'>
    <img src="http://img.shields.io/static/v1?label=STATUS%20&message=CONCLUIDO&color=-green"/>
</div>
</br>
Esse repositório foi criado para subir os arquivos necessários rodar o script de testes do desafio.

### Índice :scroll: 
- Ferramentas
- Executando os Testes
- Projeto feito em

### Ferramentas

Foram necessarias algumas ferramentas para o desenvolvimento deste software aqui vai um guia rápido para a instalação dessas ferramentas:



- Linux Mint Cinamon 20.1 
- [Cypress.io](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Cypress/iframe](https://npm.io/package/cypress-iframe)
- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Visual Studio Code](https://code.visualstudio.com/download)

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obs: Ao clicar você será redirecionado para a página de download.

### Para Executar os Testes

- Depois de ter instalado todas as ferramentas, siga para o Visual Studio Code
 <div align='center'>
     <img src='/imagensReadme/vscode.jpeg' width=40% height=40%>
   
   No terminal, insira os comando como na documentação para iniciar o projeto node e instalar e rodar o cypress.

  ```bash  
  npm install
  ```
- Em Seguida:
  
  ```bash    
  npm init 
  ```
    
-  OBS: como o projeto já foi iniciado só é necessário dar ENTER nas sugestões
    
  ```bash  
  npm i cypress --save-dev
  ```
  ```bash  
  - npm i cypress-iframe --save-dev
  ```
    
  -  Alguns desses comando são somente para ter certeza de que está tudo correto,
                depois de rodar deve ser criados dois arquivos. O packge-lock.json e o node_modules.


  Abra a pasta INTEGRATION
    
<img src='/imagensReadme/estrutura-pastas.jpeg' width=40% height=40%>

  - Nessa pasta está os arquivos do teste.
  - Para o rodar o cypres e abrir a interface para rodar os scripts é necessário dar o comando:
    
 ```bash   
    npm run test
 ```
    
  - Após isso é só selecionar na interface qual caso de teste deseja rodar.

 ##### Em seguida abra o Projeto:
    
<img src='/imagensReadme/testes.jpeg' width=40% height=40%>
     
      
 PROJETO FEITO EM CYPRESS
    
<p align="center">
  <a href="https://www.cypress.io"><img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/></a>
</p>
 
