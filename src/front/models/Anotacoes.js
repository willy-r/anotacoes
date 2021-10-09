class Anotacoes {
  /**
   * @param {string} titulo 
   * @param {string} notas 
   */
  constructor(titulo, notas) {
    // Verifica os dados de entrada antes de declarar eles.
    this._verificaDados(titulo, notas);

    this.titulo = titulo;
    this.notas = notas;
    // A data de criação é criada assim que uma instância é referenciada.
    this.dataDeCriacao = new Date();
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

  /**
   * Formata a data de criação no formato 'dd/mm/yyyy hh:mm'.
   * 
   * @returns {string} A data de criação formatada.
   */
  dataDeCriacaoFormatada() {
    const dataFormatada = this.dataDeCriacao.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return dataFormatada;
  }
}
