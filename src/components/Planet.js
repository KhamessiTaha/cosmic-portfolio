import React from 'react';
import { useFrame } from '@react-three/fiber';

const Planet = ({ color, position, onClick }) => {
  const planetRef = React.useRef();

  // Animation to rotate the planet slowly
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={planetRef} position={position} onClick={onClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Planet;
