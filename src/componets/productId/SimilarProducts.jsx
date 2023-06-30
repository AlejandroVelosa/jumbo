import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CartProducts from '../home/CartProducts'
import './styles/SimilarProducts.css'
const SimilarProducts = ({ product }) => {
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [productsByCategory, getProductsByCategory] = useFetch(baseUrl)

    useEffect(() => {
        if (product) {
            getProductsByCategory(`/products?categoryId=${product.category.id}`)
        }
    }, [product])


    return (
        <div className='similar_products'>
            <h2 className='similar_products-title'>Similar Products</h2>
            <div className='home_Product-container'>
                {
                    productsByCategory?.map(prod => {
                        if (product.id !== prod.id) {
                            return (< CartProducts
                                key={prod.id}
                                prod={prod}
                            />)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SimilarProducts