const {default:axios} = require('axios')

// writng axios client with apikey for only one request for the global usage
const apikey=process.env.NEXT_PUBLIC_REST_API_KEY;
const apiurl='http://localhost:1337/api'

const axiosClient = axios.create({
    baseURL: apiurl,
    headers: {
        'Authorization': `Bearer ${apikey}`
    }
});



export default axiosClient