import axios from 'axios'

export const get = url => axios.get(url)
export const post = (url, data) => axios.post(url, {data})
export const deleteItem = (url, id) => axios.delete(`${url}/${id}`)
