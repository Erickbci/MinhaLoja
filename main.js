const items = [{
        id: 0,
        nome: 'Camiseta Modelo Classic "White and Black Masc" ',
        img: 'camisa.jpg',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'Camiseta Modelo Classic "White and Black Fem" ',
        img: 'camisa2.jpg',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'Camiseta Modelo Classic "Black and White Fem"',
        img: 'camisa3.jpg',
        quantidade: 0,
    },
    {
        id: 3,
        nome: 'Camiseta Modelo Classic "Rose and Black Fem"',
        img: 'camisa4.webp',
        quantidade: 0,
    },
    {
        id: 4,
        nome: 'Camiseta Modelo Striped "Black and White Fem"',
        img: 'camisa5.webp',
        quantidade: 0,
    },
    {
        id: 5,
        nome: 'Camiseta Modelo Classic "White and Green Fem"',
        img: 'camisa6.jpg',
        quantidade: 0,
    },
]
inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos')
    items.map((val) => {
        containerProdutos.innerHTML +=
            `
        <div class="produto-single">
        <img src="` +
            val.img +
            `" />
        <p>` +
            val.nome +
            `</p>
        <a key="` +
            val.id +
            `" href= "#">Adicionar ao carrinho<a/>
        </div>
        `
    })
}
inicializarLoja()

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = ''
    items.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML +=
                `
          <div class="info-single-checkout">
        <p style="float:left;">Produto: ` +
                val.nome +
                `  </p>
                <p style="float:right;">| Quantidade: ` +
                val.quantidade +
                ` </p>
                <div style="clear:both"></div>
        
          </div>

      `
        }
    })
}

var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        console.log(e)
        e.preventDefault()
        let key = this.getAttribute('key')
        items[key].quantidade++
            atualizarCarrinho()
        return false
    })
}