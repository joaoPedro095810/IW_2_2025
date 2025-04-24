function saudacao() {
    alert("Olá, bem-vindo à aula!");
}

document.addEventListener("DOMContentLoaded", function()  {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
})