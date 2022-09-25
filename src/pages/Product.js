
import React, { lazy, Suspense, useRef, useState } from 'react'

//  import Lampara  from '../components/product-components/Lampara/Lampara'
import { Canvas, useFrame } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { useSnapshot} from 'valtio'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ProductState } from '../context/ProductProvider'
import sample1 from '../swatches/sample-1.jpg'
import sample2 from '../swatches/sample-2.jpg'
import sample3 from '../swatches/sample-3.jpg'
import './Product.css'

export function Product() {

// const wood = {sample1, sample2, sample3}
const { woodState, setWoodState } = ProductState()
const { hasSwatches } = ProductState()
const { id } = useParams()


const upperCase = id[0].toUpperCase() + id.substring(1)

const Component = lazy(()=> import(`../components/product-components/${upperCase}/${upperCase}`))

return (
    <div >
      <div >
      { hasSwatches && (
        <div className='wood-swatches'>
            <div onClick={()=>setWoodState(sample1)} className='swatch'>
                <img src={sample1} alt={sample1}/>
            </div>
            <div onClick={()=>setWoodState(sample2)} className='swatch'>
                <img src={sample2} alt={sample2}/>
            </div>
            <div onClick={()=>setWoodState(sample3)}  className='swatch'>
                <img src={sample3} alt={sample3}/>
            </div>
        </div>

      )}
        
        <div style={{height: '60vh', textAlign: 'center'}}>
            <Suspense fallback={<div>Loading</div>}>
                <Component />
            </Suspense>
          
        </div>
      </div>
      
    </div>
  )
}

export default Product