import React from 'react';
export function Planet({
  earthRef,
  metalness,
  roughness,
  bump,
  daymap,
  cloudRef,
  cloudMap,
}) {
  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[8, 64, 64]} />
        <meshStandardMaterial
          metalness={metalness}
          roughness={roughness}
          bumpMap={bump}
          bumpScale={0.7}
          map={daymap}
          displacementMap={bump}
          heightMap={bump}
          displacementScale={0.6}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[8.5, 32, 32]} />
        <meshStandardMaterial transparent opacity={0.22} map={cloudMap} />
      </mesh>
    </group>
  );
}
