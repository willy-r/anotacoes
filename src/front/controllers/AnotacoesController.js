class AnotacoesController {
  static _notasArr = [];
  
  /** Adiciona uma nova anotação ao array de notas. */
  static addAnotacao(titulo, notas) {
    const anotacao = new Anotacoes(titulo, notas);
    
    this._notasArr.push(anotacao);
  }

  /**
   * Faz a lógica para mostrar a anotação adicionada.
   * 
   * @param {HTMLDivElement} cardsDiv A div que guarda as anotações.
  */
  static mostraAnotacao(cardsDiv) {
    const ultimaAnotacao = this._notasArr[this._notasArr.length - 1],
          view = new AnotacoesView(ultimaAnotacao),
          card = view.cartao();

    view.insereCartao(card, cardsDiv);
  }

  get notasArr() {
    return this._notasArr;
  }

  set notasArr(novaListaDeNotas) {
    if (!novaListaDeNotas instanceof Array)
      throw new TypeError('Precisa ser um Array');
    
    this._notasArr = novaListaDeNotas;
  }
}
