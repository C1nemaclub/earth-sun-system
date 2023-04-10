import React, { Suspense } from 'react';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <>
      <Suspense fallback={''}>
        <Experience />
      </Suspense>
    </>
  );
}

export default App;
