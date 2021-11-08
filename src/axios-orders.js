import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-3c5af-default-rtdb.firebaseio.com/'
})

export default instance
