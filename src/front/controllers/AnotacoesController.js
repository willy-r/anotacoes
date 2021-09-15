class AnotacoesController {
  static _notasArr = [];
  
  /** Adiciona uma nova anotação ao array de notas. */
  static addAnotacao() {
    const titulo = document.getElementById('titulo').value;
    const notas = document.getElementById('descricaoTarefa').value;
    
    const anotacao = new Anotacoes(titulo, notas)
    
    this._notasArr.push(anotacao);
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
