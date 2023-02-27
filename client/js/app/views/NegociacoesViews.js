class NegociacoesView {
  constructor(tabela) {
    this._tabela = tabela
  }

  _teamPlate(modelo) {
    return `
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
      ${modelo.negociacoes.map(negociacao => `

          <tr>
              <td>${DataHelper.dataParaTexto(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
          </tr>

        `).join('')}
      </tbody>

      <tfoot>
        <td colspan="3"></td>
        <td>
          ${
            modelo.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)
          }
        </td>
      </tfoot>
    `;
  }

  _upDate(modelo) {
    this._tabela.innerHTML = "";
    this._tabela.insertAdjacentHTML('beforeend', this._teamPlate(modelo))
  }
}