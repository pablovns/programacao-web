let num = Math.floor(Math.random() * 100);
console.log(num);
let erros = [];

const frm = document.querySelector("form");
let outDica = document.getElementById("outDica");
let outErros = document.getElementById("outErros");
let outChances = document.getElementById("outChances");
let inNumero = document.getElementById("inNumero");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let tentativa = Number(frm.inNumero.value);

  if (tentativa != num) {
    if (erros.length > 5) {
      outErros.textContent = `${erros.length}: ${erros}`;
      outChances.textContent = 6 - erros.length;
      outDica.textContent = `Game Over! O número correto era: ${num}`;
      frm.btNovo.setAttribute("class", "exibe");
      return;
    }
    erros.push(tentativa);
    outErros.textContent = `${erros.length}: ${erros}`;
    outChances.textContent = 6 - erros.length;
    inNumero.value = inNumero.defaultValue;
    
    if (tentativa > num) {
      inNumero.setAttribute("max", tentativa - 1);
    } else {
      inNumero.setAttribute("min", tentativa + 1);
    }
    outDica.textContent = `Dica: é um número entre ${inNumero.getAttribute("min")} e ${inNumero.getAttribute("max")}`;

  } else if (erros.length < 6) {
    outDica.textContent = `Você descubriu o número: ${num}`;
    frm.btSubmit.disabled = true;
    frm.btNovo.setAttribute("class", "exibe");
    return;
  }

});

frm.btNovo.addEventListener("click", () => {
  console.log("Botão jogar novamente clicado");
  erros = [];
  outDica.textContent = outDica.defaultValue;
  outErros.textContent = 0;
  outChances.textContent = 6;
  inNumero.setAttribute("max", 100);
  inNumero.setAttribute("min", 0);
  inNumero.value = inNumero.defaultValue;
  num = Math.floor(Math.random() * 100); // reseta o número
  console.log(num);
  frm.btNovo.setAttribute("class", "oculta");
});
