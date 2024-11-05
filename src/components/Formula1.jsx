// Formula1.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Formula1(props) {  // Cambiado a "Formula1"
  const { nodes, materials } = useGLTF('/models/Formula1.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.319, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.bottom_details_mat} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.wheels_mat} />
        <group position={[0, 0.319, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.wheels_mat} />
          <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.bottom_details_mat} />
        </group>
        <group position={[0, 0.319, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.body_mat} />
          <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.body_mat} />
          <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.wheels_mat} />
          <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.bottom_details_mat} />
          <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.glass_details_mat} />
          <group position={[0, 0.734, 0.908]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.interior_mat} />
            <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.glass_details_mat} />
            <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.interior_mat} position={[0, -0.734, -0.901]} />
            <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.interior_mat} position={[0, 0.097, -0.065]} rotation={[-1.253, 0, 0]} />
          </group>
        </group>
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.wheels_mat} position={[0, 0.829, -2.749]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_25.geometry} material={materials.wheels_mat} position={[0, 0.319, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_27.geometry} material={materials.wheels_mat} position={[0, 0.789, 2.056]} />
      </group>
    </group>
  );
}

useGLTF.preload('/Formula1.glb');
