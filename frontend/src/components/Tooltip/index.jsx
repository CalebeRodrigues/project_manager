import P from 'prop-types';
import { useEffect } from 'react';

export const Tooltip = ({ data }) => {
  const { title, description, active, setActive } = data;

  useEffect(() => {
    if (active) {
      console.log('Entrei');
    }
  }, [active]);

  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className={`toast fade ${active ? 'show' : 'hide'}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            {/* <img src="..." className="rounded me-2" alt="..." /> */}
            <strong className="me-auto">{title}</strong>
            {/* <small>11 mins ago</small> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setActive(false)}
            ></button>
          </div>
          <div className="toast-body">{description}</div>
        </div>
      </div>
    </>
  );
};

Tooltip.propTypes = {
  data: P.shape({
    title: P.string,
    description: P.string,
    active: P.bool,
    setActive: P.func,
  }),
};
