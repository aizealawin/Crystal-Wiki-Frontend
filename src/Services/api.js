import Axios from 'axios'

export const BASE_URL = 'https://tasty-day-production.up.railway.app/api'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
