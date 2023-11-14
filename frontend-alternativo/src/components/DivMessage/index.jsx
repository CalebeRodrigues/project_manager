// import * as Styles from './style';
import P from 'prop-types';
import { useAuth } from '../../context/Auth/useAuth';

export const DivMessage = ({ options }) => {
  const { idAutor, autor, conteudo, data } = options;

  const auth = useAuth();

  return (
    <>
      {auth.token === idAutor ? (
        <div className="card mb-4" style={{ width: '90%', marginLeft: '10%' }}>
          <div className="card-header" style={{ textAlign: 'right' }}>
            {autor}
          </div>
          <div className="card-body" style={{ textAlign: 'right' }}>
            <blockquote className="blockquote mb-0">
              <p>{conteudo}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{data}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      ) : (
        <div className="card mb-4" style={{ width: '90%' }}>
          <div className="card-header">{autor}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{conteudo}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{data}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      )}
    </>
  );
};

DivMessage.propTypes = {
  options: P.shape({
    autor: P.string,
    conteudo: P.string,
    data: P.string,
    idAutor: P.number,
  }),
};
