// import * as Styles from './style';

export const DivMessage = () => {
  return (
    <>
      <div className="card mb-4" style={{ width: '92%', marginLeft: '8%' }}>
        <div className="card-header" style={{ textAlign: 'right' }}>
          Quote
        </div>
        <div className="card-body" style={{ textAlign: 'right' }}>
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="card mb-4" style={{ width: '95%' }}>
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};
