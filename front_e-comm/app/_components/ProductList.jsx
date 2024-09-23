import React from 'react'

// recieve product list as a props
function ProductList({productList}) {
  return (
    <div>

      {productList.map(item=>(

      <div>
        {item?.attributes?.title}

      </div>
    ))}

    </div>
  )
}

export default ProductList;