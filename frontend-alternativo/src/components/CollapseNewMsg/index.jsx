export const CollapseNewMsg = () => {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-new-mensage1`}
          aria-expanded="false"
          aria-controls={`#collapse-new-mensage1`}
        >
          Nova mensagem
        </button>
      </p>
      <div className="collapse" id={`collapse-new-mensage1`}>
        <div className="card card-body">
          <div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Digite sua mensagem:
              </label>
              <textarea
                className="form-control"
                id="message-text"
                // value={newMsg}
                // onChange={(e) => setNewMsg(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn btn-primary w-100"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-new-mensage1`}
              aria-expanded="false"
              aria-controls={`#collapse-new-mensage1`}
              // onClick={handleClickNewMsg}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
