import * as Styles from './style';

import P from 'prop-types';

export const CardActivity = ({ values }) => {
  const { id, title, responsavel, prazo } = values;

  const textResponsavel = responsavel ? `Atribuído para: ${responsavel}` : 'Ainda não foi atribuida';

  return (
    <Styles.Container>
      {id % 2 === 0 ? <Styles.DivYellow></Styles.DivYellow> : <Styles.DivGreen></Styles.DivGreen>}
      <Styles.Title>
        {id} {title}
      </Styles.Title>
      <div>
        <Styles.Text>{prazo}</Styles.Text>
        <Styles.Text>{textResponsavel}</Styles.Text>
      </div>
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
