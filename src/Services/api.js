import axios from 'axios'

const apiURL = axios.create({
  baseURL: 'https://api.github.com',
})

export default apiURL
