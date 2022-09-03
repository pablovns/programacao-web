// Pablo Vinicius e Matheus Sigolin
const cepInput = document.getElementById("cep");

function httpGet(URL) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false ); // false for synchronous request.
    xmlHttp.send( null );
    return xmlHttp.responseText;
};

function preencherForm(obj) {
    document.getElementById("endereco").value = obj.logradouro;
    document.getElementById("bairro").value = obj.bairro;
    document.getElementById("cidade").value = obj.localidade;
    document.getElementById("estado").value = obj.uf;
};

cepInput.addEventListener("focusout", (e) => {
    let cepObj = httpGet(`https://viacep.com.br/ws/${cepInput.value}/json/`);
    preencherForm(JSON.parse(JSON.parse(JSON.stringify(cepObj))));
});
