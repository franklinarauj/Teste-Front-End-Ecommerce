# Avaliação Front-End Ecommerce | VX Case

## Desafio
Com base nos wireframes disponíveis [neste link do Figma](https://www.figma.com/file/tsPdxceXT130mXoHXl5k7u/Teste-front-end-VX-Case), desenvolva e estilize uma página de produto e um formulário de contato. <small>Os wireframes também estão disponíveis como PDF na raiz do projeto.</small><br>
Os wireframes disponibilizados devem ser utilizados como base para o conteúdo, sendo assim, você deve estilizar e organizar da sua forma. Desenvolver layouts no Figma para as páginas não é obrigtório, mas é sempre bem vindo.

É permitido utilizar outros ecommerces como referência para desenvolver as páginas, porém não é válido copiar layouts e identidades (nem da VX Case). Informar quais referências de layout você utilizou é relevante para a avaliação, mas também não é obrigatório.

Você deve utilizar **HTML**, **CSS** *(ou SASS)* e **JS** para desenvolver o proposto, podendo também adicionar plugins, bibliotecas e componentes, como **JQuery** e **SweetAlert**, caso seja necessário.<br>
Caso tenha familiaridade com Webpack, você também pode utilizar loaders e plugins como **Pug**, **Handlebars**, **Coffee** e **MiniCssExtractPlugin**, ou configurar o projeto como um **SPA**.

## Stack do projeto
- Node.js 16 (com NPM)
- Webpack 5 ([Docs](https://webpack.js.org/guides/))
- HTML
- JavaScript
- SASS ([Docs](https://sass-lang.com/documentation/syntax))

## Como executar o projeto
Faça um fork do repositório para a sua conta do GitHub, após isso clone o projeto  na sua máquina e siga os passos a seguir:
1. Na raiz do projeto execute o comando `npm install` para instalar as dependências
2. Inicie o webpack-dev-server com `npm start`
    - O projeto deve compilar e abrir automaticamente no seu navegador

## Observações
Todos os arquivos e pastas dentro da pasta */src/* são exemplos, você pode e deve modificá-los para resolver o desafio.

Caso tenha familiaridade com Webpack, você pode modificar a estrutura do projeto como desejar, porém, caso ainda não conheça o Webpack, recomendamos que siga a estrutura, os loaders e plugins padrão, pois a má configuração da biblioteca pode atrasar a entrega do desafio ou causar bugs inesperados.

Este projeto está configurado para o desenvolvimento de websites estáticos com webpack, utilizando HTML como template, JS para comportamentos, e SCSS para estilos. Não há por padrão o uso de rotas, componentes e outros recursos, embora não sejam obrigatórios, implementá-los é um diferencial.

Lembre-se de documentar as mudanças estruturais que realizar na estrutura do projeto, para facilitar a sua avaliação. Isso também vale para mudanças na estrutura da pasta */src/*, como componentização.

## Dicas
### Como criar novas páginas
1. Em */src/pages/* crie um novo arquivo HTML
2. No arquivo */webpack.config.js* copie a declaração do plugin **HtmlWebpackPlugin**, dentro da array *plugins*
    - Por padrão existem 2 páginas de exemplo, index.html e home.html
3. Na propriedade *template* insira o caminho para o novo arquivo HTML
4. Na propriedade *filename* insira o caminho de saída do HTML. Este será o link acessível pelo navegador.
5. Reinicie o webpack-dev-server para que a modificação entre em vigor.

### Adicionando um arquivo SCSS
1. Em */src/scss/* crie um novo arquivo SCSS
    - Você pode criar subpastas e dividir como desejar
2. No arquivo */src/scss/index.scss* importe o arquivo criado

### Adicionando uma fonte local
1. Em */src/fonts/* insira o arquivo da fonte
    - Formatos: **.ttf .otf .eot .woff .woff2**
2. Em um arquivo SCSS inclua a fonte utilizando a at-rule *@font-face* utilizando o caminho relativo até a mesma
    - Por padrão existe o arquivo */src/scss/base/_fonts.scss* para a importação de fontes
    - **Atenção!** Arquivos dentro de subpastas utilizam como base o caminho do arquivo que os importa.
    - Ex.: Em */src/scss/base/_fonts.scss* o caminho deve ser relativo a */src/scss/* pois é onde se localiza o *index.scss*, que importa o *_fonts.scss*

### Adicionando uma imagem local
1. Em */src/images/* insira a imagem
    - Formatos: **.png .svg .jpg .jpeg .gif**
2. Em um arquivo HTML, SCSS ou JS, inclua a imagem utilizando o caminho relativo até a mesma
    - **Atenção!** Arquivos dentro de subpastas utilizam como base o caminho do arquivo que os importa.
    - Ex.: Em */src/scss/base/_titles.scss* o caminho deve ser relativo a */src/scss/* pois é onde se localiza o *index.scss*, que importa o *_titles.scss*

### Adicionando um arquivo JavaScript
1. Em */src/js/* crie um novo arquivo JS
    - Você pode criar subpastas e dividir como desejar
2. No arquivo */src/js/index.js* importe o arquivo criado

### Dedicando um arquivo JavaScript a uma página
1. Em */src/js/* crie um novo arquivo JS
2. No arquivo */webpack.config.js* adicione um novo registro no objeto *entry*
    - A chave do registro será utilizada para vincular o JS a uma página
    - O valor do registro deve ser o caminho até o JS desejado
3. Dentro da array *plugins*, na declaração da página desejada, insira a chave do registro criado na array *chunks*
    - É possível adicionar mais de 1 JS à página, basta inserir os registros desejados na array, como ocorre por padrão na página index
4. Reinicie o webpack-dev-server para que a modificação entre em vigor.
5. Certifique-se de que os JS adicionados à página carregam CSS
    - Por padrão o index.js carrega o index.scss, caso deixe de usar o index.js em alguma página, lembre-se de adicionar o arquivo CSS desejado no JS que estiver utilizando
