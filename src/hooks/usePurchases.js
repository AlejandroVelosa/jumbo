import axios from "axios"
import getConfigAuth from "../componets/utils/getConfigAuth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCartG } from "../pages/slices/cart.slice"

const usePurchases = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

    const [purchases, setPurchases] = useState()
    const dispatch = useDispatch()

    const getAllPurchases = () => {
        
        axios.get(url, getConfigAuth())
            .then(res => setPurchases(res.data))
        .catch(err => console.log(err));
    }

    const makeAPuschases = () => { 
        axios.post(url, {}, getConfigAuth())
            .then(res => {
                console.log(res)
                dispatch(setCartG([]))
            })
        .catch(err => console.log(err));
    }

    return{purchases , getAllPurchases , makeAPuschases}

}

export default usePurchases