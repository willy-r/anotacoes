const form = document.getElementById('form');
const cards = document.getElementById('notas');

const tituloInput = document.getElementById('titulo');
const notasInput = document.getElementById('descricaoTarefa');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  AnotacoesController.addAnotacao(tituloInput.value, notasInput.value);
  AnotacoesController.mostraAnotacao(cards);
  // Mostra a div com os cards.
  cards.classList.remove('hide');

  form.reset();
});
