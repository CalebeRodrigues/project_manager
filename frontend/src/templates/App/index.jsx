import ProjectList from '../../components/ProjectList';
import './styles.css';

export const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Planner
          </a>
        </div>
      </nav>
      <ProjectList />
    </div>
  );
};
