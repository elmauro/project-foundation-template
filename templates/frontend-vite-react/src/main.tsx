import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <main>
      <h1>__PROJECT_NAME__</h1>
      <p>Frontend starter for __BUSINESS_DOMAIN__.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
