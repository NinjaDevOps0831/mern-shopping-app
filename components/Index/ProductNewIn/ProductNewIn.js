import './ProductNewIn.scss'

const ProductNewIn = ({products}) => {
    const newProducts = products.slice(0, 5)
    console.log(newProducts);
    return(
        <div className='product-new-in'>
            <h2 className='preview-title'>NEW IN</h2>
            <div className='preview-container'>
                {newProducts.map((product, index) => {
                    return(
                        <div 
                            className={`product-preview preview-item-${index}`}
                        >
                            <img className='preview-img' src={product.mediaUrl} />
                            {/* <h3 className='preview-name'>{product.name}</h3> */}
                            <a className='preview-btn' href={`/product?_id=${product._id}`} >View Detail</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductNewIn
