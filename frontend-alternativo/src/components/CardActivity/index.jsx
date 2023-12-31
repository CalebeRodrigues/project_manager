import * as Styles from './style';

import perfil from '../../assets/icons/perfil.png';
import { ModalComentarios } from '../ModalComentarios';

import P from 'prop-types';
import { useEffect, useState } from 'react';
import { useProject } from '../../context/Project/useProject';

export const CardActivity = ({ data, block = false }) => {
  // eslint-disable-next-line
  const { id, titulo, descricao, prazo, kanban, responsavel, setReloadAtividade } = data;
  const project = useProject();

  const [modalComentarios, setModalComentarios] = useState(false);

  const [clickModal, setClickModal] = useState(false);

  useEffect(() => {
    if (clickModal && !modalComentarios) {
      console.log('Reload', setReloadAtividade);
      setClickModal(false);
      setReloadAtividade(true);
    }
  }, [clickModal, modalComentarios]);

  const updateKanban = (boolean) => {
    setClickModal(true);
    setModalComentarios(boolean);
  };

  return (
    <>
      <Styles.Container
        className="mb-3"
        data-bs-toggle="modal"
        data-bs-target={`#comentarios-modal-${id}`}
        onClick={() => setClickModal(true)}
      >
        <div className="card-img-top" alt="..."></div>
        <div className="card-body">
          <h5 className="card-title mb-2">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <Styles.Atribuido>
            <Styles.Image className="img-fluid" src={perfil} alt="" />
            {responsavel.nome}
          </Styles.Atribuido>
        </div>
      </Styles.Container>
      <ModalComentarios
        id={id}
        title={titulo}
        kanban={kanban}
        idResp={responsavel.id}
        aprovacao={project.acesso ? kanban === 'doing2' && project.acesso.includes('VALIDAR_ATIVIDADE') : false}
        show={modalComentarios}
        setShow={updateKanban}
        block={block}
      />
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
    responsavel: P.object,
    state: P.array,
  }),
  block: P.bool,
};
