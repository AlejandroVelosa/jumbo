import axios from "axios"


const useAuth = () => {

    const CreateUser = (url ,data) => { 
            // post
        axios.post(url, data)
        .then(res => console.log(res.data ))
        .catch(err=> console.log(err))
    
    }

    const loginUser = (url, data) => {
        axios.post(url, data)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem('user',JSON.stringify(res.data.user) )
        })
        .catch(err=> console.log(err))
    }
    return {CreateUser , loginUser}
}

export default useAuth