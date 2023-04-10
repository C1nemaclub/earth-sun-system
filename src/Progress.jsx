import { useProgress } from '@react-three/drei';
import React from 'react';

export default function Progress() {
  const { progress } = useProgress();
  return (
    <>
      <h1 className={progress < 100 ? 'progress' : 'progress over'}>
        <span>Creating the Universe</span>
        <span>{progress.toFixed(0) + '%'}</span>
      </h1>
    </>
  );
}
