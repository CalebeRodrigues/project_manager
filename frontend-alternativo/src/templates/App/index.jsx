import { useEffect } from 'react';
import { useProject } from '../../context/Project/useProject';
import './styles.css';

export const App = () => {
  const projNav = useProject();

  useEffect(() => {
    projNav.reset();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};
