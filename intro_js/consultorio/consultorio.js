// criar referência aos elementos do html
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

// vetor global
const pacientes = [];

function showNames() {
    // string dos pacientes
    let lista = "";

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    respLista.innerText = lista; // exibe a lista de pacientes
    frm.inPaciente.value = ""; // limpa o conteúdo do campo
    frm.inPaciente.focus(); // posiciona o cursor no campo
}

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // formulário não envia dados em branco
    pacientes.push(frm.inPaciente.value); // adiciona paciente no final do array
    showNames();
});

frm.btnUrgencia.addEventListener("click", () => {
    pacientes.unshift(frm.inPaciente.value);
    showNames();
})

frm.btnAtender.addEventListener("click", () => {
    pacientes.shift();
    showNames();
})