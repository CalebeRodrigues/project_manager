import P from 'prop-types';

export const CardMessage = ({ dados }) => {
  const { autor, conteudo } = dados;
  const dataAtual = dataAtualFormatada();

  return (
    <div className="card mt-3">
      <div className="card-header">{autor}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{conteudo}</p>
          <footer className="blockquote-footer mt-1">
            <cite title="Source Title">Enviado em {dataAtual}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

CardMessage.propTypes = {
  dados: P.shape({
    autor: P.string.isRequired,
    conteudo: P.string.isRequired,
    dataEnvio: P.string,
  }),
};

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? '0' + mes : mes,
    anoF = data.getFullYear();
  return diaF + '/' + mesF + '/' + anoF;
}
