'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

function ProductSection() {
  
  // 
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getLatestProducts_();
  })



  const getLatestProducts_ = ()=>{
    ProductApis.getLatestProducts().then(res=>{
      // console.log(res.data.data)
      setProductList(res.data.data)
    })
  }
  return (
    <div>
        <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection



// 1.Define a React functional component named ProductSection

// 2.Use the useEffect hook to handle side effects. In this case, it's used for calling the API
  // when the component mounts. useEffect here is used without a second argument (dependency array),
  // which means it will behave like componentDidMount and componentDidUpdate combined (in class components).
  // This will invoke getLatestProducts_ every time the component re-renders.



// 3. Define getLatestProducts_ function inside the component.
  // This function makes an API call to fetch the latest products using the ProductApis.getLatestProducts method.
  // Upon receiving the response, it logs the response data to the console.
  // Since this function is defined inside the component, it has access to all props and state (not shown here).



// 4. Render method of the component which returns JSX.
  // The ProductList component is included here but without passing any props.
  // This means ProductList will not display any data it might expect unless it fetches it internally.