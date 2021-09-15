const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  AnotacoesController.addAnotacao();

  form.reset();
});
