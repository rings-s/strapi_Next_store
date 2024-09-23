const { default: axiosClient } = require("./axiosClient");

// this is what we gonna use in product section
const getLatestProducts = ()=>axiosClient.get('/products')


export default  {
    getLatestProducts
}


