var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "Errou! O número secreto é maior que o seu chute";
  } else if (numeroSecreto < chute) {
    elementoResultado.innerHTML =
      "Errou! O número secreto é menor que o seu chute";
  } else {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  }
}
