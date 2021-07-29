import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-ayudantes.herokuapp.com/api/assistant'
})



export default api
