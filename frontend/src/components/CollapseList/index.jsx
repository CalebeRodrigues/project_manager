import P from 'prop-types';

export const CollapseList = ({ data }) => {
  const { id, nome } = data;

  return (
    <>
      <button
        className={`mt-2 card card-body w-100 ${id}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse-etapa-${id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {nome}
      </button>

      {/* <div className="collapse" id={`#collapse-etapa-${id}`}>
        <div className="card card-body">{children}</div>
      </div> */}
    </>
  );
};

CollapseList.propTypes = {
  data: P.shape({
    id: P.number,
    nome: P.string,
  }),
};
