
import { useRef, useState } from "react"
import Products from  "../products.js"
export default function ProductsWithPagination(params) {
     const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 8
    const allItems =  Products() || []
    const totalItems = allItems.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1)  * itemsPerPage 
    const endIndex = startIndex + itemsPerPage
    const currentItems = allItems.slice(startIndex,endIndex)
    const handlePageChange = (newPage)=>{
        if(newPage >= 1 &&  newPage <= totalPages){
            setCurrentPage(newPage)

        }
    }
    console.log(currentPage,'current page')
    return(
        <>  
            <div className="kits-grid">
                {currentItems.map(product=> <div className="kit-card" key={product.id}>
                        <div className="kit-image">
                            <i className="fas fa-wine-bottle"></i>
                            <span className="kit-badge">
                                {product.tags[0]}
                            </span>
                        </div>
                        <div className="kit-content">
                            <h3> {product.title} </h3>
                            <p> {product.description} </p>
                            <div className="kit-meta">
                                <div className="kit-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span style={{color: '#888', marginLeft: '0.25rem'}}>({product.reviews})</span>
                                </div>
                                <span> {product.rating} </span>
                                
                            </div>
                            <div className="kit-price">${product.price} <span className="price-old">${(product.price + 12).toFixed(2)}</span></div>
                            <a href="#" className="btn">Add to Cart</a>
                        </div>
                                'pages from '{startIndex} + ' to ' + {endIndex}

                    </div>)}
                
                </div>
                <div className="container">
                <div className="pagination">
                    <button className="page-btn" disabled>
                        <i className="fas fa-chevron-left"></i>
                    </button>

                   
                    {Array.from({ length: totalPages }, (_, i) => (
         <button onClick={()=>handlePageChange(i+1)} key={i} className="page-btn"> {i+1} </button>
      ))}
                    
                    <button className="page-btn">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
};
