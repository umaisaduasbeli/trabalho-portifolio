// Seleciona o elemento que tem o atributo data-anima="rolar"
const scrollAnima = document.querySelector('[data-anima="rolar"]');

// Calcula um valor que representa "3.5 vezes a altura da janela" para usar como referência no scroll
const meioTela = window.innerHeight * 3.5;

// Função que controla a animação ao descer a página
function animarScroll() {
  // Pega a distância do topo do elemento em relação à janela
  const topoItem = scrollAnima.getBoundingClientRect().top;

  // Verifica se o elemento já passou do ponto definido (meioTela)
  const botaoAparece = topoItem - meioTela < 0;
  // Se sim, o botão deve aparecer
  if (botaoAparece) {
    // Adiciona classe que vai ao CSS que mostra o botão
    scrollAnima.classList.add("show-button");
  } else {
    //Remove classe que vai ao CSS que mostra o botão
    scrollAnima.classList.remove("show-button");
  }
}

// Adiciona um evento para executar a função toda vez que o usuário der descer a página
window.addEventListener("scroll", animarScroll);