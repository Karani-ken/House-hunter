import axios from 'axios'

const API_URL = '/api/agents/createAccount'
const APILOGIN = '/api/agents/login'

//create user account
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
//login user
const login = async (userData) => {
    const response = await axios.post(APILOGIN, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
//logout user
const logout = () => {
    localStorage.removeItem('user')
}
//send code for password reset via email
const sendCode = async (email) => {
    const response = await axios.post(`/api/agents/reset-password`, email)
    return response.data
}

const authService = {
    register,
    login,
    logout,
    sendCode
}

export default authService
