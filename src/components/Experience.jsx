import { Sun } from './Sun';
import { Planet } from './Planet';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Bounds, OrbitControls, Stars, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function Experience() {
  const [isMobile] = useState(() => (window.innerWidth < 460 ? true : false));
  const [daymap, cloudMap, bump] = useTexture([
    'textures/daymap.jpg',
    'textures/cloudmap.jpg',
    'textures/elevation.jpg',
  ]);
  const cloudRef = useRef();
  const earthRef = useRef();
  useFrame((state) => {
    cloudRef.current.rotation.y = -state.clock.getElapsedTime() * 0.01;
    earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.07;
  });

  return (
    <>
      {!isMobile ? (
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />
        </EffectComposer>
      ) : null}
      <Bounds fit clip observe damping={1} margin={1.2}>
        <Planet
          earthRef={earthRef}
          metalness={0.3}
          roughness={0.7}
          bump={bump}
          daymap={daymap}
          cloudRef={cloudRef}
          cloudMap={cloudMap}
        />
      </Bounds>
      <Stars
        radius={100}
        depth={200}
        count={5000}
        factor={6}
        saturation={0}
        color='green'
        fade
        speed={1}
      />
      <Sun position={[-200, 45, 0]} />
      <ambientLight intensity={0.1} />
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.3}
        target={earthRef.current}
      />
      <color args={['black']} attach='background' />
    </>
  );
}

export default Experience;
