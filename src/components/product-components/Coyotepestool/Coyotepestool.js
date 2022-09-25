/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/Coyotepestool.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[Math.PI / 2, 0, 0]}>
//         <mesh geometry={nodes.Coyotepe_Stool_2022_1.geometry} material={materials.Olive} />
//         <mesh geometry={nodes.Coyotepe_Stool_2022_2.geometry} material={materials.Limba} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/Coyotepestool.glb')


import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { BakeShadows, Html, OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { proxy, useSnapshot} from 'valtio'
import { HexColorPicker } from 'react-colorful'
import Image from './Coyotepestool.glb'
import { ProductState } from '../../../context/ProductProvider.js'



 function Coyotepestool() {
  const state = proxy({
    current: null,
    items: {
      Olive: '#ff0000',
      Limba: '#ff999f'
    }
  })
  
  const { hasSwatches, setHasSwatches } = ProductState(false)
  useEffect(()=> {
    setHasSwatches(false)
  })

  function Model(props) {
    const { nodes, materials } = useGLTF(Image)
    const snap = useSnapshot(state)
    const [ hovered, set ] = useState(null)
    return (
      <group {...props} dispose={null}
          onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
          onPointerOut={(e) => e.intersections.length === 0 && set(null)}
          onPointerMissed={() => (state.current = null)}
          onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh material-color={snap.items.Olive} geometry={nodes.Coyotepe_Stool_2022_1.geometry} material={materials.Olive} />
          <mesh material-color={snap.items.Limba} geometry={nodes.Coyotepe_Stool_2022_2.geometry} material={materials.Limba} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload(Image)

  function Picker(){
    const snap = useSnapshot(state)
    return (
      <div>
      <HexColorPicker style={{width: '100px', height:'100px', margin: 'auto'}} className='picker'
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current]=color)}
      />
        <h3>{snap.current}</h3>
      </div>
    )
  }

  return (
    <div >
      <p style={{textAlign: 'center'}}>use mouse to rotate the model, mouse wheel to resize</p>
      <h3 style={{textAlign: 'center'}}>Author: Jan Siska</h3>
      <div >
        <div style={{height: '80vh', textAlign: 'center'}}>
          <h1 >Coyotepe Stool</h1>
          <Picker />
          <Canvas id='canvas' shadows dpr={[1, 2]} camera={{ position: [0, 100, 150], fov: 80 }}>
            <ambientLight intensity={0.1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <directionalLight color="black" position={[0, 0, 5]} />
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <Model scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]}/>
              </Stage>
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>  
        </div>
      </div>
      
    </div>

    
  )
}
 export default Coyotepestool