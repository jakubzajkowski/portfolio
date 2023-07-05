"use client";
import { useRef,useState } from 'react';
import { useFrame,useLoader } from '@react-three/fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps{
  loader: string
}

const Iphone:React.FC<ModelProps>=({loader}) =>{
    const meshRef:any= useRef()
    const gltf:GLTF= useLoader(GLTFLoader, loader)
    useFrame(() => {meshRef.current.rotation.y += 0.01})
    return (
      <primitive
      ref={meshRef}
      object={gltf.scene}
      position={[0, 0, 0]}
      rotation={[0,0,0]}
      children-0-castShadow
    />
    )
  }

export default Iphone