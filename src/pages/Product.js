
import React, { lazy, Suspense, useRef, useState } from 'react'

//  import Lampara  from '../components/product-components/Lampara/Lampara'
import { Canvas, useFrame } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ProductState } from '../context/ProductProvider'
import { useAuthContext } from '../hooks/useAuthContext';
import sample1 from '../swatches/sample-1.jpg'
import sample2 from '../swatches/sample-2.jpg'
import sample3 from '../swatches/sample-3.jpg'
import './Product.css'
import Remove from '../assets/remove.png'
import Check from '../assets/check.png'

export function Product() {

  // const wood = {sample1, sample2, sample3}
  const { woodState, setWoodState } = ProductState()
  const { hasSwatches } = ProductState()
  const [isEmbedable, setIsEmbedable] = useState(true)
  const [width, setWidth] = useState('80%')
  const [height, setHeight] = useState('1000px')
  const [ isScrollable, setIsScrollable ] = useState(false)
  const { user } = useAuthContext()
  const { id } = useParams()
  const navigate = useNavigate()

  const upperCase = id[0].toUpperCase() + id.substring(1)

  const Component = lazy(() => import(`../components/product-components/${upperCase}/${upperCase}`))

  const url = window.location.href


  return (
    <div >
      <div >
        {hasSwatches && (
          <div className='wood-swatches'>
            <div onClick={() => setWoodState(sample1)} className='swatch'>
              <img src={sample1} alt={sample1} />
            </div>
            <div onClick={() => setWoodState(sample2)} className='swatch'>
              <img src={sample2} alt={sample2} />
            </div>
            <div onClick={() => setWoodState(sample3)} className='swatch'>
              <img src={sample3} alt={sample3} />
            </div>

          </div>


        )}
        <div className='code-snippet'>
          {
            (isEmbedable && user) && (
              <button onClick={() => setIsEmbedable(!isEmbedable)}>Embed {`</>`}</button>
            )
          }
          {
            (!isEmbedable && user) && (
              <div className='code-snippet-content'>
                <div className='closeSnippet'>
                  <span onClick={() => setIsEmbedable(!isEmbedable)}>x</span>
                </div>
                <div className='embed-dims'>
                  <label>
                    <p>Width</p>
                    <input
                      type='text'
                      placeholder='width'
                      onChange={(e) => { setWidth(e.target.value) }}
                      value={width}
                    />
                  </label>
                  <label>
                    <p> Scrollbar Allowed</p>
                    <div>
                      <img swtyle={{width:'15px'}} src={isScrollable ? Check : Remove}/>
                    </div>
                    <input
                      type='checkbox'
                      onChange={(e) => {!isScrollable ? setIsScrollable(true): setIsScrollable(false) }}
                      checked={isScrollable}
                    />
                  </label>
                  <label>
                    <p>Height</p>
                    <input
                      type='text'
                      placeholder='height'
                      onChange={(e) => { setHeight(e.target.value) }}
                      value={height}
                    />
                  </label>
                  
                </div>
                <h4 style={{color:'white'}}>copy snippet of code to embed in your web site</h4>
                <span className='tag'>{`<iframe`}</span>
                <span className='source'>{` src=`}</span>
                <span className='link'>'{`${url}`}'</span>
                <span className='source'>{`  width='${width}`}'</span>
                <span className='source'>{`  height='${height}`}'</span>
                <span className='source'>{`  frameBorder='0'`}</span>
           
                { !isScrollable && <span className='source'>{`  scrolling='no`}'</span>}
                <span className='tag'>{`></iframe>`}</span>
              </div>
            )
          }

        </div>
        <div style={{ height: '60vh', textAlign: 'center' }}>
          <Suspense fallback={<div>Loading</div>}>
            {Component && <Component />}
          </Suspense>

        </div>
      </div>

    </div>
  )
}

export default Product