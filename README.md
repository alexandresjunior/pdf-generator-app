# PDF Generator App

## Apresentação

Em aplicações empresariais é muito comum a necessidade de criar documentos em PDF, seja para exibir dados de um relatório ou mesmo para exportar informações exibidas em tela. Nesta aplicação de exemplo, documentos PDF são criados utilizando as bibliotecas [React](https://reactjs.org/) e [PdfMake](http://pdfmake.org/#/), através de uma tela inicial simples, apenas com um botão para gerar o relatório.

## Detalhes da Implementação

* Como fontes de dados, utilizou-se um arquivo `data.js` com dados mockados.
* O PdfMake utiliza a sintaxe de *object literals* para construir o layout dos documentos, e sua estrutura é dividida em 4 partes, sendo elas `header`, `content`, `footer` e `styles`. 
* Além disso possui um conjunto de elementos como **tabelas**, **parágrafos** e **listas**, sendo que é possível estilizá-los passando as propriedades `inline` ou definindo-as dentro da propriedade `styles`.
* O arquivo `LayoutPDF.js` é o responsável pela geração do documento.
* A função `criaCorpoDocumento` é responsável por iterar pelos dados do arquivo `data.js` e por devolver o conteúdo da seção `content` do documento.
* Na primeira linha da função `gerarDocumento` é definido o tamanho da página na propriedade `pageSaze`. Em seguida são definidas as configurações de **margem** do documento. A propriedade `pageMargins` é muito importante, pois é ela que determina o tamanho disponível para o `header` e o `footer`, já que a altura do `header` vai de 0 até a quantidade de margem do topo e com o `footer` é a mesma coisa.
* A propriedade `content` contém uma tabela e seu conteúdo são os dados gerados pela função `criaCorpoDocumento`. 
* Na propriedade `footer` é declarada uma função que recebe a página atual e a quantidade de páginas. A função do `footer` retorna uma tabela em que a primeira linha contém um `text` com vários `_` para criar uma linha bem sutil, e na segunda linha foram utilizados os parâmetros recebidos pela função para exibir um contador de páginas.

## Resultado Final

<div align="center">
  <img width="940" alt="image" src="https://user-images.githubusercontent.com/83607914/210589552-fe582d20-ac79-4f05-b967-dec63f4762f5.png">
</div>
