import React, { useState, useEffect } from 'react';
import { CardProject, CardsProjectLoading } from '../CardProject';

import { Api } from '../../services/api';

const ProjectList = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const request = await Api.get('/proj');
      setProjects(request.data);
      setLoading(false);
    } catch (e) {
      setProjects(null);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="container mt-2">
      <h1>Lista de Projetos</h1>
      <div className="row" style={{ justifyContent: 'center' }}>
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
