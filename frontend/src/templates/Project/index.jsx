import { useParams } from 'react-router-dom';

export const Project = () => {
  const params = useParams();

  return (
    <div style={{ marginTop: '70px' }}>
      <h1>Projeto page {params.id}</h1>
    </div>
  );
};
