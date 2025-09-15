const botoes = document.querySelectorAll("button[data-link]");


botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const link = botao.getAttribute("data-link"); 
    window.location.href = link; 
  });
});
