const botao = document.getElementById("btn-tema");

botao.addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    botao.textContent = "☀️ Modo claro";
  } else {
    botao.textContent = "🌙 Modo escuro";
  }
});
