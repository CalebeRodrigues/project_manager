import * as Styles from './style';

import perfil from '../../assets/icons/perfil.png';
import { ModalComentarios } from '../ModalComentarios';

import P from 'prop-types';

export const CardActivity = ({ data }) => {
  // eslint-disable-next-line
  const { id, titulo, descricao, prazo, kanban, responsavel,  } = data;


  return (
    <>
      <Styles.Container className="mb-3" data-bs-toggle="modal" data-bs-target={`#comentarios-modal-${id}`}>
        <div className="card-img-top" alt="..."></div>
        <div className="card-body">
          <h5 className="card-title mb-2">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <Styles.Atribuido>
            <Styles.Image className="img-fluid" src={perfil} alt="" />
            {responsavel}
          </Styles.Atribuido>
        </div>
      </Styles.Container>
      <ModalComentarios id={id} title={titulo} kanban={kanban} aprovacao={kanban === 'doing2'} />
    </>
  );
};

CardActivity.propTypes = {
  data: P.shape({
    id: P.number,
    titulo: P.string,
    descricao: P.string,
    prazo: P.string,
    kanban: P.string,
    responsavel: P.string,
  }),
};
