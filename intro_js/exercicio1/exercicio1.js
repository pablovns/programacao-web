function calcularTabuada() {
    // criar referência aos elementos da página
    let inWord = document.getElementById("inWord")
    let outResultado = document.getElementById("outResultado")
    
    // obtem os valores dos campos de edicao da pagina
    let palavra = inWord.value

    // transforma pra minúsculo pra facilitar a checagem
    palavra = palavra.toLowerCase()

    // tamanho do input
    let vogais, vogaisCount, consoantes, consoantesCount
    vogais = "aeiou"
    vogaisCount = 0

    consoantes = "bcdfghjklmnpqrstvwxyz"
    consoantesCount = 0

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i]

        if (vogais.includes(letra)) {
            vogaisCount++
        } else if (consoantes.includes(letra)) {
            consoantesCount++
        }
    }

    // apresenta os dados na tela
    let output = `A Palavra possui ${palavra.length} caracteres e tem ${vogaisCount} vogais e ${consoantesCount} consoantes.`
    outResultado.textContent = output
}

let btResultado = document.getElementById("btnResultado")
btResultado.addEventListener("click", calcularTabuada)
