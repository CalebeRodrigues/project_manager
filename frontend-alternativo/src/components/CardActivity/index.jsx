import * as Styles from './style';

export const CardActivity = () => {
  return (
    <Styles.Container className="card mb-3" style={{ width: '20rem' }}>
      <div className="card-img-top" alt="..."></div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </p>
        <p>Calebe Rodrigues</p>
      </div>
    </Styles.Container>
  );
};
