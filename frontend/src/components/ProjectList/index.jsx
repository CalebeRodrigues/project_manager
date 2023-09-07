import React, { useEffect, useState } from 'react';
import { CardProject, CardsProjectLoading } from '../CardProject';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading((v) => !v);
    }, 1000);
  }, []);

  return (
    <div className="container mt-2">
      <h1>Lista de Projetos</h1>
      <div className="row">
        {loading ? (
          <CardsProjectLoading />
        ) : (
          projects.map((project) => <CardProject key={project.id} option={project} />)
        )}
      </div>
    </div>
  );
};

export default ProjectList;
