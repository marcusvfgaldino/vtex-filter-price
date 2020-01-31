Módulo para adicionar campos de filtro de preço customizável na loja
==============

Este módulo insere inputs de filtro de faixa de preço em lojas Vtex, tornando possível a filtragem de preço customizada pelo cliente.

### Instalação

1. Faça o upload do arquivo dist/filter-price-min.js no cms da loja.
2. Insira o arquivo na página que deseja exibir o filtro com a chamada: ``` <script src='/arquivos/filter-price-min.js'></script> ```
3. Crie um filtro de faixa de preço para a sua loja. Para saber como criar esse tipo de filtro, acesse: https://help.vtex.com/tutorial/setting-up-the-price-range-filter--tutorials_240
4. Inicie o filtro na página com a função ``` showFilter() ``` no js da loja.

### Exemplo de Uso

- Para exibir o filtro de maneira padrão, basta fazer a chamada da função ``` showFilter() ``` no js da loja. O filtro será exibido por padrão logo abaixo do título do filtro de faixa de preço no menu lateral.

- Para exibir os campos no final do filtro de faixa de preço, basta chamar a função showFilter, passando como parâmetro top = false. Exemplo: ``` showFilter(top = false); ```

- Para exibir os campos em outro local da página que não seja o filtro de faixa de preço, basta chamar a função showFilter passando como parâmetro o id ou classe do elemento deverá ser exibido. Exemplo: ``` showFilter(show = '.classe_do_elemento') ```. <b>Obs: Exibindo o os campos do filtro fora do filtro de faixa de preço, não será necessário ativar a função de filtro de preço na loja.</b>

- Para definir um valor máximo que poderá ser filtrado, basta chamar a função showFilter, passsando como parâmetro max = valor. Exemplo: ``` showFilter(max = 2000). ```



