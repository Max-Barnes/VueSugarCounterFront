import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  searchForItems(search) {
    return http.get(`/food/search?name=${search}`)
  }
}
