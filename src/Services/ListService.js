import axios from 'axios'

const http = axios.create({
  baseURL: 'http://sugarcounter-production.up.railway.app'
})

export default {
  searchForItems(search) {
    return http.get(`/food/search?name=${search}`)
  }
}
