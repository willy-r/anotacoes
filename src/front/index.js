const form = document.getElementById('form');
const cards = document.getElementById('notas');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  AnotacoesController.addAnotacao();
  AnotacoesController.mostraAnotacao(cards);

  form.reset();
});
