import P from 'prop-types';

export const CreateActivity = ({ data }) => {
  const { idEtapa } = data;

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#criarAtividadeModal">
        Criar atividade {idEtapa}
      </button>

      <div
        className="modal fade"
        id="criarAtividadeModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Adicionar nova tarefa
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Titulo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Insira seu titulo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="textAreaDescricao" className="form-label">
                  Descrição:
                </label>
                <textarea className="form-control" id="textAreaDescricao" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Prazo de entrega
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Insira o prazo de entrega"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
              <button type="button" className="btn btn-primary">
                Criar atividade
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CreateActivity.propTypes = {
  data: P.shape({
    idEtapa: P.number,
  }),
};
