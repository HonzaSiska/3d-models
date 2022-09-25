import { createContext, useContext, useEffect, useState } from "react";
import sample1 from '../swatches/sample-1.jpg'
import sample2 from '../swatches/sample-2.jpg'
import sample3 from '../swatches/sample-3.jpg'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    

    const [woodState, setWoodState] = useState(sample1)
    const [hasSwatches ,setHasSwatches] = useState(false)

    return (
        <ProductContext.Provider value={{ woodState, setWoodState, hasSwatches, setHasSwatches }}>
            {children}
        </ProductContext.Provider>
    )
}

export const ProductState = () => {
    return useContext(ProductContext)
}



export default ProductProvider