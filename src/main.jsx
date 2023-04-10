import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import Progress from './Progress';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas camera={{ position: [0, 200, 200], fov: 60, near: 0.01, far: 500 }}>
      <App />
    </Canvas>
    <Progress />
    <Leva />
  </React.StrictMode>
);
