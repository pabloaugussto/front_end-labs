const display = document.querySelector("input[type=tel]");
const teclas = document.querySelectorAll("input[type=button]");
const limpar = document.querySelector(".icon");

//Criar uma condição para travar mais de 14 digitos

limpar.onclick = () => {
  const opcao = confirm("Deseja mesmo limpar?");
  if (opcao) {
    display.value = "";
  }
};
function valorTeclaToDisplay(i) {
  display.value += teclas[i].value;
}
for (let i = 0; i < teclas.length; i++) {
  console.log(teclas[i].value);
}
teclas.forEach((tecla, i) => {
  tecla.onclick = () => valorTeclaToDisplay(i);
});
