import { useState, useEffect } from 'react'
import Product from "../components/Product"
import getProducts from '../requests/getProducts';



const Home: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //first get cattegories (product types)
        getProducts()
        .then(response => {
            setProducts(response.results);
        }).catch( error => {
            console.log(error.message)
        })
    }, []);

    return  (
    <main className="main-content home-content">
        <Product id={1} sku={'test'} name={'test'} price={0.99} parameters={'test'} />
    </main>
    )
}
export default Home