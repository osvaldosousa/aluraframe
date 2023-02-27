class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  };

  limparComFocus() {
    this._inputData.value = "";
    this._inputData.focus()
    this._inputQuantidade.value = 1;
    this._inputValor.value = "0.0";
  };

  adiciona(event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      DataHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )
    this.limparComFocus()
  };
}