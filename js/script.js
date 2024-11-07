function preencherFormularioVendedores() {
    const vendedorSelecionado = document.getElementById("vendedor");
    const valorVendedorSelecionado = vendedorSelecionado.value;

    const fEmpresa = document.getElementById("empresa");
    const fCnpj = document.getElementById("cnpj");
    const fEndereco = document.getElementById("endereco");
    const fCidade = document.getElementById("cidade");
    const fUf = document.getElementById("uf");
    const fTelefone = document.getElementById("telefone");
    const fEmail = document.getElementById("email");

    // Dados dos vendedores
    const dadosVendedores = {
        vendedor1: { empresa: "ESCTEC", cnpj: "12.345.678/0001-91", endereco: "Av. D, 101", uf: "BA", cidade: "Xique-Xique", telefone: "444-444-4444", email: "ana.oliveira@esctec.com" },
        vendedor2: { empresa: "ESCTEC", cnpj: "12.345.678/0001-91", endereco: "Rua A, 123", uf: "SP", cidade: "Ubatuba", telefone: "111-111-1111", email: "carlos.almeida@esctec.com" },
        vendedor3: { empresa: "ESCTEC", cnpj: "12.345.678/0001-91", endereco: "Rua C, 789", uf: "MG", cidade: "Paracatu", telefone: "333-333-3333", email: "jose.santos@esctec.com" },
        vendedor4: { empresa: "ESCTEC", cnpj: "12.345.678/0001-91", endereco: "Av. B, 456", uf: "RJ", cidade: "Belford Roxo",telefone: "222-222-2222", email: "mariana.silva@esctec.com" },
        vendedor5: { empresa: "ESCTEC", cnpj: "12.345.678/0001-91", endereco: "Rua E, 202", uf: "RS", cidade: "Canoas",telefone: "555-555-5555", email: "pedro.costa@esctec.com" }
    };

    // Preencher campos com base no vendedor selecionado
    if (dadosVendedores[valorVendedorSelecionado]) {
        fEmpresa.value = dadosVendedores[valorVendedorSelecionado].empresa;
        fCnpj.value = dadosVendedores[valorVendedorSelecionado].cnpj;
        fEndereco.value = dadosVendedores[valorVendedorSelecionado].endereco;
        fCidade.value = dadosVendedores[valorVendedorSelecionado].cidade;
        fUf.value = dadosVendedores[valorVendedorSelecionado].uf;
        fTelefone.value = dadosVendedores[valorVendedorSelecionado].telefone;
        fEmail.value = dadosVendedores[valorVendedorSelecionado].email;
    } else {
        // Limpa os campos se nenhum vendedor estiver selecionado
        fEmpresa.value = "";
        fCnpj.value = "";
        fEndereco.value = "";
        fCidade.value = "";
        fUf.value = "";
        fTelefone.value = "";
        fEmail.value = "";
    }
}

//!---------------------------------------

function preencherFormularioProd(selectElement) {
    // Encontrar o contêiner pai (.produto-item) que contém o select atual
    const produtoItem = selectElement.closest('.produto-item');

    const valorProdutoSelecionado = selectElement.value;

    // Encontrar os campos dentro do mesmo contêiner
    const fValor = produtoItem.querySelector('.valor');

    // Dados dos produtos
    const cadeiras = {
        cd_01: { valorUnit: 250.00 },
        cd_02: { valorUnit: 370.00 },
        cd_03: { valorUnit: 692.00 },
        cd_04: { valorUnit: 810.00 },
        cd_05: { valorUnit: 1591.00 },
        cd_06: { valorUnit: 3180.00 }
    };

    const mesas = {
        ms_01: { valorUnit: 663.00 },
        ms_02: { valorUnit: 239.99 },
        ms_03: { valorUnit: 1381.00 },
        ms_04: { valorUnit: 1241.00 },
        ms_05: { valorUnit: 3715.00 },
        ms_06: { valorUnit: 251.00 }
    };
    
    const diversos = {
        dv_01: { valorUnit: 181.83 },
        dv_02: { valorUnit: 679.00 },
        dv_03: { valorUnit: 802.00 },
        dv_04: { valorUnit: 599.00 },
        dv_05: { valorUnit: 829.00 },
        dv_06: { valorUnit: 699.99 },
        dv_07: { valorUnit: 10.56 },
        dv_08: { valorUnit: 164.00 }
    };    

    // Verifica se o produto selecionado está nas cadeiras, mesas ou diversos
    if (cadeiras[valorProdutoSelecionado]) {
        fValor.value = cadeiras[valorProdutoSelecionado].valorUnit.toFixed(2);
    } else if (mesas[valorProdutoSelecionado]) {
        fValor.value = mesas[valorProdutoSelecionado].valorUnit.toFixed(2);
    } else if (diversos[valorProdutoSelecionado]) {
        fValor.value = diversos[valorProdutoSelecionado].valorUnit.toFixed(2);
    } else {
        fValor.value = ""; // Limpa o campo caso nenhum produto seja encontrado
    }
}

function calcValorTotalProduto(element) {
    // Encontrar o contêiner pai (.produto-item) do campo de quantidade alterado
    const produtoItem = element.closest('.produto-item');

    // Selecionar os campos dentro do mesmo produto-item
    const qtdSelecionada = produtoItem.querySelector('.qtd').value;
    const valorProd = produtoItem.querySelector('.valor').value;
    const fTotal = produtoItem.querySelector('.total');

    // Calcular o valor total
    const valorTotal = qtdSelecionada * valorProd;

    // Exibir o valor total no campo correspondente
    fTotal.value = valorTotal ? valorTotal.toFixed(2) : ''; // Exibir vazio se não houver valor
}

let contadorProdutos = 2;

function adicionarProduto() {
    // Container de produtos
    const containerProdutos = document.getElementById('produtos');

    // Criar um novo elemento de produto-item
    const novoProduto = document.createElement('div');
    novoProduto.classList.add('produto-item');

    // Inserir HTML do novo produto
    novoProduto.innerHTML = `
        <label>Produto ${contadorProdutos}</label><br>
        <select class="produto" onchange="preencherFormularioProd(this)" required>
                <option value="">Selecione um produto</option>
                
                <!-- Cadeiras -->
                <option value="">---- CADEIRAS --------------</option>
                <option value="cd_01">Cadeira Dot - All Black</option>
                <option value="cd_02">Cadeira Uni - All Black</option>
                <option value="cd_03">Cadeira Uni Pro - All Black</option>
                <option value="cd_04">Cadeira My Chair - grafite e azul</option>
                <option value="cd_05">Cadeira Tecton - night blue</option>
                <option value="cd_06">Cadeira Flexform Alpha 2 Pro - preta</option>
                
                <!-- Mesas -->
                <option value="">---- MESAS -----------------</option>
                <option value="ms_01">Mesa Dalla Costa em L c/ Gaveteiro</option>
                <option value="ms_02">Escrivaninha 135cm c/ Gaveteiro Suspenso</option>
                <option value="ms_03">Mesa Nogal 270cm c/ Caixas de Tomadas</option>
                <option value="ms_05">Mesa Nogal 380cm c/ Caixas de Tomadas</option>
                <option value="ms_04">Mesa Industrial Redonda 110cm</option>
                <option value="ms_06">Mesa L 120x120cm - Tampo 2,5cm</option>
                
                <!-- Diversos -->
                <option value="">---- DIVERSOS -------------</option>
                <option value="dv_01">Kit de acessórios My Desk</option>
                <option value="dv_02">Mesa Jump Baixa</option>
                <option value="dv_03">Banco Benni</option>
                <option value="dv_04">Roma Espera</option>
                <option value="dv_05">Poltrona Vitto</option>
                <option value="dv_06">Mesa de centro Mince - preta</option>
                <option value="dv_07">Organizador de Gaveta 17x25,5cm - preto</option>
                <option value="dv_08">Suporte Multiarticulado de Mesa - grafite</option>
            </select>
            
        
            <input type="number" class="qtd" placeholder="Quantidade" min="1" onchange="calcValorTotalProduto(this)" required>
            <input type="text" class="valor" placeholder="Valor Unitário" required>
        
            <label>Total: 
            <input type="text" class="total" placeholder="Valor Total" readonly>
    `;

    contadorProdutos++;

    // Adicionar o novo produto ao containerProdutos
    containerProdutos.appendChild(novoProduto);
}