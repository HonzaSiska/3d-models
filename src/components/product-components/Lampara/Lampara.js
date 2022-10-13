import { Suspense, useRef, useState,useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { BakeShadows, Html, OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { proxy, useSnapshot} from 'valtio'
import { HexColorPicker } from 'react-colorful'
import Image from './Lampara.glb'
import { ProductState } from '../../../context/ProductProvider.js'



 function Lampara() {
  const state = proxy({
    current: null,
    items: {
      diffuse_191_63_63_255: '#ff0000',
      Custom: '#ff999f'
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
          
          {/* <mesh  material-color={snap.items.partOne} position={[1, 2, 3]} geometry={nodes.Lampara_18_1.geometry} material={materials.diffuse_191_63_63_255} />
          <mesh material-color={snap.items.partOne} geometry={nodes.Lampara_18_2.geometry} material={materials.Custom} /> */}
          <mesh  material-color={snap.items.diffuse_191_63_63_255} position={[1, 2, 3]} geometry={nodes.Lampara_18_1.geometry} material={materials.diffuse_191_63_63_255}  />
          <mesh material-color={snap.items.Custom} geometry={nodes.Lampara_18_2.geometry} material={materials.Custom} />
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
      <div >
        <div style={{height: '80vh', textAlign: 'center'}}>
          <h1 >Lampara</h1>
          <Picker />
          <Canvas id='canvas' shadows dpr={[1, 2]} camera={{ position: [0, 100, 150], fov: 50 }}>
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
 export default Lampara