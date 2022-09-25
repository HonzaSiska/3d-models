// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/Soborg.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Søborg_3050_Backrest.geometry} material={materials.Søborg_Chair_wood} rotation={[Math.PI / 2, 0, 0]} />
//       <mesh geometry={nodes.Søborg_3050_Leg.geometry} material={materials.Søborg_Chair_wood} rotation={[Math.PI / 2, 0, 0]} />
//       <mesh geometry={nodes.Søborg_3050_Rung.geometry} material={materials.Søborg_Chair_wood} rotation={[Math.PI / 2, 0, 0]} />
//       <mesh geometry={nodes.Søborg_3050_Rung001_Søborg_3050_Rung.geometry} material={materials.Søborg_Chair_wood} rotation={[Math.PI / 2, 0, 0]} />
//       <group rotation={[Math.PI / 2, 0, 0]}>
//         <mesh geometry={nodes.Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
//         <mesh geometry={nodes.Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
//       </group>
//       <group rotation={[Math.PI / 2, 0, 0]}>
//         <mesh geometry={nodes.Søborg_3050_Screw001_Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
//         <mesh geometry={nodes.Søborg_3050_Screw001_Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
//       </group>
//       <group rotation={[Math.PI / 2, 0, 0]}>
//         <mesh geometry={nodes.Søborg_3050_Screw002_Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
//         <mesh geometry={nodes.Søborg_3050_Screw002_Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
//       </group>
//       <group rotation={[Math.PI / 2, 0, 0]}>
//         <mesh geometry={nodes.Søborg_3050_Screw003_Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
//         <mesh geometry={nodes.Søborg_3050_Screw003_Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
//       </group>
//       <mesh geometry={nodes.Søborg_3050_Seat.geometry} material={materials.Søborg_Chair_wood} rotation={[Math.PI / 2, 0, 0]} />
//     </group>
//   )
// }

// useGLTF.preload('/Soborg.glb')


import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader  } from '@react-three/fiber'
import {OrbitControls, ContactShadows, Stage, useGLTF, useTexture } from '@react-three/drei'

import Image from './Soborg.glb'
import { ProductState } from '../../../context/ProductProvider.js'



function Soborg(props) {
  
 
 
  const { woodState, setWoodState, hasSwatches, setHasSwatches } = ProductState()
 

  function Model(props) {

    const { nodes, materials } = useGLTF(Image)
    const group = useRef()
    const [colorMapTexture] = useTexture([woodState])

    useEffect(()=> {
      setHasSwatches(true)
    })

    return (
      <group ref={group} {...props} dispose={null}>
      
        <mesh map={colorMapTexture}  geometry={nodes.Søborg_3050_Backrest.geometry}  rotation={[Math.PI / 2, 0, 0]} >
          <meshStandardMaterial
            attach="material"
            map={colorMapTexture}
            roughness={0.5}
          />
        </mesh>
        
        
        <mesh geometry={nodes.Søborg_3050_Leg.geometry}  rotation={[Math.PI / 2, 0, 0]} >
          <meshStandardMaterial
              attach="material"
              map={colorMapTexture}
              roughness={0.5}
          />
        </mesh>
        
        <mesh geometry={nodes.Søborg_3050_Rung.geometry} rotation={[Math.PI / 2, 0, 0]} >
            <meshStandardMaterial
              attach="material"
              map={colorMapTexture}
              roughness={0.5}
            />
        </mesh>
        <mesh geometry={nodes.Søborg_3050_Rung001_Søborg_3050_Rung.geometry}  rotation={[Math.PI / 2, 0, 0]} >
          <meshStandardMaterial
              attach="material"
              map={colorMapTexture}
              roughness={0.5}
          />
        </mesh>
        <group ref={group} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
          <mesh geometry={nodes.Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
        </group>
        <group ref={group} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Søborg_3050_Screw001_Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
          <mesh geometry={nodes.Søborg_3050_Screw001_Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
        </group>
        <group ref={group} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Søborg_3050_Screw002_Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
          <mesh geometry={nodes.Søborg_3050_Screw002_Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
        </group>
        <group ref={group} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Søborg_3050_Screw003_Søborg_3050_Screw_1.geometry} material={materials.Søborg_Chair_screw_metal} />
          <mesh geometry={nodes.Søborg_3050_Screw003_Søborg_3050_Screw_2.geometry} material={materials.Søborg_Chair_screw_hole} />
        </group>
        <mesh geometry={nodes.Søborg_3050_Seat.geometry}  rotation={[Math.PI / 2, 0, 0]} >
        <meshStandardMaterial
            attach="material"
            map={colorMapTexture}
            roughness={0.5}
          />
        </mesh>
      </group>
    )
  }

  useGLTF.preload(Image)


  return (
    <div >
      <p style={{ textAlign: 'center' }}>use mouse to rotate the model, mouse wheel to resize</p>
      <h3 style={{ textAlign: 'center' }}>Author: Jan Siska</h3>
      <div >
      {/* <img src={sample1}/> */}
        <div style={{ height: '80vh', textAlign: 'center' }}>
          <h1 >Soborg</h1>
          {/* <Picker /> */}
          <Canvas id='canvas' shadows dpr={[1, 2]} camera={{ position: [0, 100, 150], fov: 80 }}>
            <ambientLight intensity={0.1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <directionalLight color="black" position={[0, 0, 5]} />
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <Model scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
                {/* <meshBasicMaterial map={sample1} /> */}
              </Stage>
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>
        </div>
      </div>

    </div>


  )
}
export default Soborg
