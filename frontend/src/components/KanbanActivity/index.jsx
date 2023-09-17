export const KanbanActivity = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li
          className="nav-item"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <a className="nav-link active" aria-current="page">
            Em andamento
          </a>
        </li>
        <li
          className="nav-item"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <a className="nav-link">Concluido</a>
        </li>
        <li
          className="nav-item"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <a className="nav-link">Atrasado</a>
        </li>
      </ul>
    </>
  );
};
