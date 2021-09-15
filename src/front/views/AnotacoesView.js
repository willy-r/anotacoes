class AnotacoesView {
  constructor(modelAnotacoes) {
    this._verificaTipo(modelAnotacoes);

    this.model = modelAnotacoes;
  }

  /**
   * Verifica se o dado é uma instância de Anotacoes,
   * se não for, um erro de tipo é mostrado.
   * 
   * @param {Anotacoes} modelAnotacoes 
   */
  _verificaTipo(modelAnotacoes) {
    if (!modelAnotacoes || !modelAnotacoes instanceof Anotacoes)
      throw new TypeError('É necessário ser um modelo de Anotacoes');
  }

  /**
   * Cria um card com a representação da Anotação.
   * 
   * @returns {HTMLDivElement} A div representando um card.
   */
  cartao() {
    const card = document.createElement('div');
    
    card.className = 'card text-white bg-dark card-w';
    card.innerHTML = `
      <main class="card-body">
        <h3 class="card-title h4">${this.model.titulo}</h3>
        <p class="card-text fs-1">${this.model.notas}</p>
      </main>
      <footer class="card-footer border-light">
        <small class="text-muted">${this.model.dataDeCriacaoFormatada()}</small>
      </footer>
    `;

    return card;
  }
}
