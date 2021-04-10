import axios from 'axios'

let baseURL = 'http://localhost:8080/'

const instance = axios.create({
  baseURL: baseURL
});

instance.interceptors.request.use (
    (config) => {
        if (sessionStorage.getItem ('jwtToken')) {                                       
            config.headers['authorization'] = "Bearer " + sessionStorage.getItem ('jwtToken')                 
        }
        return config
    }
)

export default instance