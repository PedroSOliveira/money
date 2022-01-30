# Finances Money

![Money - Google Chrome 30_01_2022 17_39_34](https://user-images.githubusercontent.com/37816505/151717103-0f5e047f-6310-41a2-81f6-b095c4925506.png)


<!-- 
1. Descrição do projeto
2. Tecnologias utilizadas
3. Organização do projeto
4. Build e deploy
5. Desenvolvimento 
-->


## 1. Descrição do projeto
## 1.1. Tecnologias

Principais tecnologias utilizadas neste projeto são apresentadas na tabela abaixo.

| Tecnologia                               | Descrição                                                                     |
| :--------------------------------------- | :---------------------------------------------------------------------------- |          
| [React JS](https://pt-br.reactjs.org/)    | Biblioteca JavaScript para criar interfaces de usuário.                       |
| [Ant Design](https://ant.design/)        | Biblioteca para auxiliar nas criação de componentes de interface.             |
| [Toastify](https://fkhadra.github.io/react-toastify/introduction)| Recurso para auxiliar na demonstração de mensagens para o usuário             |
| [Netlify](https://www.netlify.com/)       | Tecnologia para realizar o deploy da aplicação.                              |
| [Sass](https://sass-lang.com/)  | Pré-processador CSS.                                                                   |


## 1.2. Organização do projeto

A organização do projeto é apresentada abaixo.

    ├── src
        ├── assets
        ├── components
           ├── Button
           ├── FormModal
           ├── Header
           ├── Logo
           ├── Sidebar
        ├── pages
           ├── Home
        ├── services
        └── README.md

| Pasta                     | Descrição                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| assets                    | Contém os elementos visuais da aplicação, como imagens, etc...                                                                  |
| components                | Contém componentes reutilizáveis ao decorrer da aplicação                                                                       |
| pages                     | Contém as páginas da aplicação                                                                                                  |
| services                  | Contém a comunicação da aplicação com a Api                                                                                     |

------------------------------------------------------------------------------------------------------------------------------------------------------------

| Arquivo                   | Descrição                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Button                    | Botão utilizado na aplicação                                                        |
| FormModal                 | Contém o modal utilizado para cadastrar e atualizar informçaões do indexador        |
| Header                    | Contém o cabeçalho da aplicação com o logo e informações estáticas de perfil        |
| Logo                      | Estilização do logo da aplicação                                                    |
| Sidebar                   | Contém o menu lateral da aplicação                                                  |
| Home                      | Página inicial onde é listado os indexadores e as opções mencionadas abaixo         |

                                                

## 1.3. Específicações sobre as funcionalidades
É possível fazer algumas operações sobre os indexadores, tais como, criar, editar,
excluir, atualizar e filtrar. A seguir veja com mais detalhes cada uma delas.

|Operação     | Descrição
|------------ | -----------------------
| Criar       | É possível criar indexadores enviando símbolo e seu respectivo nome(funcionalidade presente no FormModal)
| Editar      | É possível editar indexadores enviando símbolo e seu respectivo nome(funcionalidade presente no FormModal)
| Excluir     | Os indexadores também podem ser apagados de forma permanente.
| Filtrar     | Os indexadores podem ser filtrados.
| Paginar     | Paginação dos dados.

  
## 2.  Como executar
Clone o projeto e acesse a pasta onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
# Iniciar o projeto
$ yarn start
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
# Iniciar o projeto
$ npm start
```
Para acessá-lo, basta acessar pelo seu browser pelo endereço http://localhost:3000.

## 3. Aplicação - pode ser acessada pelo link: https://financesmoney.netlify.app/


![Money - Google Chrome 30_01_2022 17_39_34](https://user-images.githubusercontent.com/37816505/151717103-0f5e047f-6310-41a2-81f6-b095c4925506.png)

