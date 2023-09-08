export const CardMessage = () => {
  return (
    <div className="card mt-3">
      <div className="card-header">Pessoa</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>Mensagem de texto que a pessoa pode deixar anexada na atividade que lhe foi atribuida.</p>
          <footer className="blockquote-footer mt-1">
            <cite title="Source Title">Enviado em dd/MM/yyyy</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};
