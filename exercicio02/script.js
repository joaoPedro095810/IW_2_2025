function atualizarTexto() {
    document.getElementById("texto").innerText = "texto atualizado com JavaScript";
  }

document.addEventListener("DOMContentLoaded", function()  {
    document.getElementById("botãoAtualização").addEventListener("click", atualizarTexto);
})