import * as THREE from "three";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  // Create a shader material for the gradient background
  const gradientShader = {
    uniforms: {
      topColor: { value: new THREE.Color("#FFFF66") }, // Light yellow
      bottomColor: { value: new THREE.Color("#FFD700") }, // Gold
    },
    vertexShader: `
      varying vec3 vWorldPosition;

      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying vec3 vWorldPosition;

      void main() {
        float h = normalize(vWorldPosition).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, h), 1.0);
      }
    `,
  };

  const skyboxMaterial = new THREE.ShaderMaterial({
    uniforms: gradientShader.uniforms,
    vertexShader: gradientShader.vertexShader,
    fragmentShader: gradientShader.fragmentShader,
    side: THREE.BackSide, // Render the material on the inside of the cube
  });

  const skyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000); // Large enough to cover the scene

  return (
    <>
      <ambientLight intensity={2} />
      <mesh>
        <primitive object={skyboxGeometry} />
        <primitive object={skyboxMaterial} />
      </mesh>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
