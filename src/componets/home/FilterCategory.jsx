import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk } from "../../pages/slices/products.slice"
import { useDispatch } from "react-redux"
import './styles/FilterCategory.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FilterCategory = () => {


    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [category, getAllCategory] = useFetch(baseUrl)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getAllCategory('/categories')
    }, [])

    const dispatch = useDispatch()

    const handleFilterCategory = (id) => {
        if (id) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
            dispatch(getAllProductsThunk(url))
        } else {
            dispatch(getAllProductsThunk())
        }
    }

    const toggleCategories = () => {
        setIsOpen(!isOpen);
    };



    return (
        <article className="article_category">
            <div className=" article_header">
                <h3>Category</h3>
                <div className="category-toggle" onClick={toggleCategories}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            <div className="category-wrapper">
                {isOpen && (
                    <ul className="category-list">
                        <li onClick={() => handleFilterCategory()}>All Categories</li>
                        {category?.map((category) => (
                            <li
                                onClick={() => handleFilterCategory(category.id)}
                                key={category.id}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    )
}

export default FilterCategory