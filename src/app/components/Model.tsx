"use client";
import { useRef,useState } from 'react';
import { useFrame,useLoader } from '@react-three/fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps{
  loader: string
}

const Model:React.FC<ModelProps>=({loader}) =>{
    const meshRef:any= useRef()
    const gltf:GLTF= useLoader(GLTFLoader, loader)
    useFrame(() => {meshRef.current.rotation.y += 0.006;meshRef.current.rotation.x -= 0.005;meshRef.current.rotation.z -= 0.008})
    return (
      <primitive
      ref={meshRef}
      object={gltf.scene}
      position={[0, 0.2, 0]}
      rotation={[-0.8,0,0]}
      children-0-castShadow
    />
    )
  }

export default Model