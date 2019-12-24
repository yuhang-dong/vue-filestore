import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';

/**
 * 得到目录下的文件列表
 * @param params
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getFiles = params => {
    return axios.post('/path', params)
}

export const login = function(user) {
    return axios.post('/login', {username:user.username,password:user.password})
}
