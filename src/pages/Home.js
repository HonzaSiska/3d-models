import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { useCollection } from '../hooks/useCollection'
import { db } from '../firebase/config'
import { collection , doc,  where, query, getDocs} from 'firebase/firestore'
// import { useAuthContext } from './useAuthContext'
import SearchResults from '../components/search/SearchResults'
import Modal from '../components/modal/Modal'
import { useFirestore } from '../hooks/useFirestore'

const Home = () => {
  const [ product, setProduct ]  = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const { documents, error } = useCollection('products', ['productName', 'asc'])
  const {addDocument, deleteDocument, response} = useFirestore('products')
  const [ isOpen, setIsOpen ] = useState(false)
  const [ newProduct, setNewProduct ] = useState({
    productName: '',
    category: '',
    description: '',
    image: '',
    path: ''
  })

  console.log(documents)

  const handleAdd = (prod)=> {
    addDocument(prod)
    setIsOpen(false)
  }
  
  const handleChange = async (product)=> {
    setProduct(product)
    const productUpperCased  = product.charAt(0).toUpperCase() + product.slice(1);

    //to make sure the results disappear when search field cleared
    if(product==='')setSearchResults([])

    if(product !== ''){  //to make sure query doesnt return all product if data in search field is deleted
      let ref = collection(db, 'products')
      
      ref = query(ref, where('productName', '>=', productUpperCased))
      ref = query(ref, where('productName', '<=', productUpperCased + '\uf8ff'))
    
      const docSnap = await getDocs(ref)
      // docSnap.docs.forEach((item)=> console.log(item.data()))
    
      if (docSnap.docs.length > 0) {
        const data = docSnap.docs.map((item)=> item.data())
        
         setSearchResults(data)
        
      } else {
        console.log("No such document!");
        // setSearchResults([])
        setProduct('')
        
      }
    }
    
  }


  
  
  return (
    <div>
        <h1>Models</h1>
        <div >
          <div>
            <button className='open-modal-btn' onClick={()=>setIsOpen(true)}>New Product</button>
          </div>
          <div className='search'>
            <input 
              placeholder='Search Model' 
              type='text'
              onChange={(e)=> handleChange(e.target.value)}
              value={product}           
            />
            <div>
            {searchResults.length > 0 && <span>{searchResults.length} found</span>}
              
            </div>
            <div className='search-results'>
              {searchResults.length > 0  && <SearchResults data={searchResults}/>}
            </div>
          </div> 
          
        </div>
        <div className='product-list'>
          { documents && 
          
            documents.map(doc => (
              <div className='product-list-item' key={doc.id}>
                <Link to={`/product/${doc.path}`}>{doc.productName}</Link>
              </div> 
            ))
          }
        </div>
        {
          isOpen && 
            <Modal>
                <h1 style={{textAlign:'center', color:'white'}}>New Product</h1>
                <div className='modal-btn-wrapper'>
                  <div>
                    <input 
                      type='text'
                      required
                      placeholder='product name'
                      onChange={e=>setNewProduct({...newProduct, productName: e.target.value})}
                      value={newProduct.productName}
                    />
                  </div>
                  <div>
                    <input 
                      type='text'
                      required
                      placeholder='category'
                      onChange={e=>setNewProduct({...newProduct, category: e.target.value})}
                      value={newProduct.category}
                    />
                  </div>
                  <div>
                    <input 
                      type='text'
                      required
                      placeholder='path(one word/ important)'
                      onChange={e=>setNewProduct({...newProduct, path: e.target.value})}
                      value={newProduct.path}
                    />
                  </div>
                  <div>
                    <textarea 
                      style={{width:'100%'}}
                      type='textarea'
                      required
                      placeholder='description'
                      onChange={e=>setNewProduct({...newProduct, description: e.target.value})}
                      
                    >
                    {newProduct.description}
                    </textarea>
                  </div>
                  <div className='modal-buttons-wrapper' style={{display: 'flex', justifyContent:'space-around',marginTop:'20px'}}>
                    <button style={{padding: '10px 15px', border:'1px solid white',fontWeight:'bold', background:'rgb(46, 46, 127)',color:'white',borderRadius:'5px'}} className='modal-delete-btn' onClick={()=>handleAdd(newProduct)}>Create</button>
                    <button style={{padding: '10px 15px',border:'1px solid white', fontWeight:'bold',background:'rgb(46, 46, 127)',color:'white',borderRadius:'5px'}} className='modal-cancel-btn' onClick={()=>setIsOpen(false)}>Cancel</button>
                  </div> 
                </div>
            </Modal>
        }
            
        
        {/* <iframe src ="https://jansiska.herokuapp.com/" width="80%" height="1000px" >
        </iframe> */}
    </div>
  )
}

export default Home

