// Abordagem do professor

function limparForm() {
    document.getElementById("endereco").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

function preencherForm(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

async function pesquisarCep() {
    limparForm();
    const cep = document.getElementById("cep").value.replace("-", "");
    console.log(cep);
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    console.log(endereco);
    preencherForm(endereco);
}

document.getElementById("cep").addEventListener("focusout", pesquisarCep);