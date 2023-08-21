import React from 'react';

const projects = [
  { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2' },
  { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3' },
  { id: 4, title: 'Projeto 4', description: 'Descrição do Projeto 4' },
  { id: 5, title: 'Projeto 5', description: 'Descrição do Projeto 5' },
  { id: 6, title: 'Projeto 6', description: 'Descrição do Projeto 6' },
  { id: 7, title: 'Projeto 7', description: 'Descrição do Projeto 7' },
  // Adicione mais projetos conforme necessário
];

const ProjectList = () => {
  return (
    <div className="container mt-4">
      <h1>Lista de Projetos</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary">
                  Detalhes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
