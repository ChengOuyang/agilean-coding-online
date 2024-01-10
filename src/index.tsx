import React from 'react';
import ReactDOM from 'react-dom/client';
import { Tree } from './tree/Tree';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Tree />
  </React.StrictMode>
);

