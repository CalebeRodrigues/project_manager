import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import { AuthProvider } from './context/Auth/AuthProvider';
import { ProjectProvider } from './context/Project/ProjectPovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <Router />
      </ProjectProvider>
    </AuthProvider>
  </React.StrictMode>,
);
