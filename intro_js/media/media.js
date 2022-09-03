function calcularMedia() {
    // criar referência aos elementos da página
    let inNome = document.getElementById("inNome")
    let inNota1 = document.getElementById("inNota1")
    let inNota2 = document.getElementById("inNota2")
    let outNome = document.getElementById("outNome")
    let outMedia = document.getElementById("outMedia")
    let outSituacao = document.getElementById("outSituacao")
    
    // obtem os valores dos campos de edicao da pagina
    let nome = inNome.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)

    // calcular a media das notas
    let media = (nota1 + nota2) / 2

    // apresenta os dados na tela
    outNome.textContent = "Olá, " + nome
    outMedia.textContent = "Sua média é: " + media.toFixed(2)
    if (media >= 7) {
        outSituacao.style.color = "green"
        outSituacao.textContent = "Parabéns! Você está aprovado!"
    } else if (media >= 4) {
        outSituacao.style.color = "orange"
        outSituacao.textContent = "Você está de recuperação."
    } else {
        outSituacao.style.color = "red"
        outSituacao.textContent = "Você está reprovado."
    }
}

// criar referência ao elemento btnCalcular
let btResultado = document.getElementById("btnCalcular")

// registrar um evento de click a funcao calcularMedia
btResultado.addEventListener("click", calcularMedia)
