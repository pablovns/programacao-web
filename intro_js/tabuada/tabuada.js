function calcularTabuada() {
    // criar referência aos elementos da página
    let inNum = document.getElementById("inNum")
    let outTabuada = document.getElementById("outTabuada")
    
    // obtem os valores dos campos de edicao da pagina
    let num = Number(inNum.value)

    // calcular a tabuada
    var output = ""

    for (let i = 1; i < 11; i++) {
        output += `${num} * ${i} = ${num * i}\n`
    }

    // apresenta os dados na tela
    outTabuada.textContent = output
}

let btResultado = document.getElementById("btnCalcular")
btResultado.addEventListener("click", calcularTabuada)
