class Anotacoes {
  /**
   * @param {string} titulo 
   * @param {string} notas 
   */
  constructor(titulo, notas) {
    // Verifica os dados antes de declarar eles.
    this._verificaDados(titulo, notas);

    this.titulo = titulo;
    this.notas = notas;
  }

  /**
   * Verifica se os dados passados no construtor são válidos.
   * 
   * @param {string} titulo 
   * @param {string} notas 
   */
  _verificaDados(titulo, notas) {
    if (!titulo)
      throw new Error('O título da anotação precisa ser definido');

    if (typeof titulo !== 'string' || typeof notas !== 'string')
      throw new TypeError('Criação de notas - dados inválidos');
  }
}
