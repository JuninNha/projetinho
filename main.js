function criaCartao (categoria, pergunta, resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className = 'cartao';
cartao.innerHTML =  ` 
<div class="conteudo-cartao">
    <h3>categoria</h3>
    <div class="pergunta-cartao"></div>
    <p>pergunta</p>
    <div class="resposta-cartao"></div>
    <p>resposta</p>
</div>
`
container.appendChild(cartao);
}