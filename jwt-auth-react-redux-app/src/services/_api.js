import axios from 'axios'

let baseURL = 'http://localhost:8080/'

const instance = axios.create({
  baseURL: baseURL
});

instance.interceptors.request.use (
    (config) => {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

        if (loggedInUser && loggedInUser.jwtToken) {        
            config.headers['authorization'] = "Bearer " + loggedInUser.jwtToken                
        }
        return config
    }
)

export default instance