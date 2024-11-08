
let carrinho = [];


function adicionarAoCarrinho(nome, preco, imagem) {

    const item = { nome, preco, imagem };


    carrinho.push(item);


    console.log('Produto adicionado ao carrinho:', item);


    alert(`${nome} foi adicionado ao carrinho!`);
}


function injectCarrinho(event) {
    event.preventDefault(); 

  
    iframeModal.style.display = 'flex';  
    iframeContainer.style.display = 'block';


    iframeContainer.innerHTML = '';  


    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '400';


    iframeContainer.appendChild(iframe);

 
    const iframeDocument = iframe.contentWindow.document;

  
    iframeDocument.open();
    iframeDocument.write(`
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                    }
                    h2 {
                        text-align: center;
                        color: #333;
                    }
                    .item-carrinho {
                        display: flex;
                        justify-content: space-between;
                        padding: 10px;
                        border-bottom: 1px solid #ddd;
                    }
                    .item-carrinho img {
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;
                    }
                    .item-carrinho h4 {
                        margin: 0;
                    }
                    .item-carrinho .preco {
                        color: #4CAF50;
                    }
                    .limpar-carrinho {
                        text-align: center;
                        margin-top: 20px;
                        color: red;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <h2>Seu Carrinho de Compras</h2>
                <div id="itens-carrinho"></div>
                <div class="limpar-carrinho" onclick="limparCarrinho()">Limpar Carrinho</div>
            </body>
        </html>
    `);
    iframeDocument.close();


    const itensContainer = iframeDocument.getElementById('itens-carrinho');
    carrinho.forEach(item => {
        const divItem = iframeDocument.createElement('div');
        divItem.classList.add('item-carrinho');

        divItem.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div>
                <h4>${item.nome}</h4>
                <p class="preco">R$ ${item.preco}</p>
            </div>
        `;
        itensContainer.appendChild(divItem);
    });
}


function limparCarrinho() {
    carrinho = [];
    alert('Carrinho limpo!');
    injectCarrinho(); 
}

const liInject = document.getElementById('injetaiframe');
const iframeModal = document.getElementById('iframe-modal');
const iframeContainer = document.getElementById('iframe-container');

liInject.addEventListener('click', injectCarrinho);


iframeModal.addEventListener('click', function (event) {
  
    if (event.target === iframeModal) {
        iframeModal.style.display = 'none';  
        iframeContainer.style.display = 'none';  
        iframeContainer.innerHTML = '';  
    }
});
