import { useControls } from 'leva';
import React from 'react';
export function Sun({ position }) {
  const { color } = useControls('Sun Color', {
    color: '#e5b04d ',
  });
  return (
    <group>
      <mesh position={position}>
        <sphereGeometry args={[10, 16, 16]} />
        <meshStandardMaterial
          color={[100, 100, 0]}
          emissiveIntensity={100}
          emissive={color}
          toneMapped={false}
        />
      </mesh>
      <pointLight position={position} color={color} intensity={6} />
    </group>
  );
}
