import * as Styles from './style';
import { verificarPrazo } from '../../util/date';

import P from 'prop-types';
import { Modal } from '../Modal';

export const CardActivity = ({ values }) => {
  const { id, title, responsavel, prazo } = values;

  const textResponsavel = responsavel ? `Atribuído para: ${responsavel}` : 'Ainda não foi atribuida';

  const statusDiv = verificarPrazo(prazo);

  const handleClick = () => {
    console.log(`Clique no botão do #modal-${id}`);
  };

  return (
    <Styles.Container key={id} data-bs-toggle="modal" data-bs-target={`#modal-${id}`} onClick={handleClick}>
      {statusDiv === 0 ? (
        <Styles.DivYellow></Styles.DivYellow>
      ) : statusDiv === 1 ? (
        <Styles.DivGreen></Styles.DivGreen>
      ) : (
        <Styles.DivRed></Styles.DivRed>
      )}
      <Styles.Title>
        {id} {title}
      </Styles.Title>
      <div>
        <Styles.Text>{prazo}</Styles.Text>
        <Styles.Text>{textResponsavel}</Styles.Text>
      </div>
      <Modal options={values} />
    </Styles.Container>
  );
};

CardActivity.propTypes = {
  values: P.shape({
    id: P.number.isRequired,
    title: P.string.isRequired,
    responsavel: P.string,
    prazo: P.string.isRequired,
  }),
};
