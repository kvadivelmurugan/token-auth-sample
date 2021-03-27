import axios from 'axios'

let baseURL = 'http://localhost:8080/'

const instance = axios.create({
  baseURL: baseURL
});

instance.interceptors.request.use (
    (config) => {
        if (sessionStorage.getItem ('authHeader')) {                                       
            config.headers['authorization'] = sessionStorage.getItem ('authHeader')                 
        }
        return config
    }
)

export default instance