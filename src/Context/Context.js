import { createContext, useState } from 'react';
export const ProductDataContext = createContext();

const Context = ({children}) => {
    const [products, setProductData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [language, setlanguage] = useState('en');
   
    return (
        <ProductDataContext.Provider value={{ products, setProductData, pageNumber, setPageNumber,language, setlanguage }}>
            {children}
        </ProductDataContext.Provider>
    )
}
export default Context;

