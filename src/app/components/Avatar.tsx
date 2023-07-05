"use client";
import { useRef,useState } from 'react';
import { useFrame,useLoader } from '@react-three/fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps{
  loader: string
}

const Avatar:React.FC<ModelProps>=({loader}) =>{
    const meshRef:any= useRef()
    const gltf:GLTF= useLoader(GLTFLoader, loader)
    useFrame(() => {meshRef.current.rotation.y += 0.01})
    return (
      <primitive
      ref={meshRef}
      object={gltf.scene}
      position={[0, -0.8, 0]}
      rotation={[0.1,0.5,0]}
      children-0-castShadow
    />
    )
  }

export default Avatar