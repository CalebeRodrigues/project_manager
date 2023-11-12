import * as Styles from './style';

import perfil from '../../assets/icons/perfil.png';
import { ModalComentarios } from '../ModalComentarios';

export const CardActivity = () => {
  return (
    <>
      <Styles.Container className="mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div className="card-img-top" alt="..."></div>
        <div className="card-body">
          <h5 className="card-title mb-2">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </p>
          <Styles.Atribuido>
            <Styles.Image className="img-fluid" src={perfil} alt="" />
            Calebe Rodrigues
          </Styles.Atribuido>
        </div>
      </Styles.Container>
      <ModalComentarios />
    </>
  );
};
