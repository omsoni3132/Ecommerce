// import React, { useState, useEffect } from 'react';
// import Header from "../header/Header";
// import './Product.css';
// import { useAddtoCartMutation } from '../../redux/store';



// function  Product() {
//     const [AddtoCart] = useAddtoCartMutation();
   
//     const [product, setProducts] = useState([]);
//     console.log(product,"product")

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error(error));
//     }, []);

//     const handleCart = async(key)=>{
//         const response = await AddtoCart(key);
//         console.log(response , "Ans");
//     }
//     return (

//         <>
//             <Header />
            
           
//             <div className="container">
//                 <div className="row">
//                     {product.map(product => (
//                         <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
//                             <div className="card product_item "style={{ width: "100%", height: "90%" }}>
//                                 <div className="body">
//                                     <div className="cp_img" >
//                                         <img src={product.image} alt={product.title} className="img-fluid" style={{ width: "250px", height: "160px" }} />
                                        
//                                         <div className="hover">
                                        
//                                         <div style={{float:"left"}}><button className="btn btn-outline-dark btn-sm waves-effect" onClick={()=>handleCart(product)}><b>Add cart</b></button></div>
//                                         <div style={{float:"right"}}><button className="btn btn-outline-dark btn-sm waves-effect"><b>Buy Now</b></button></div>  
//                                         </div>
                                        
//                                     </div>
//                                     <div className="product_details">

//                                         <ul className="product_price list-unstyled">
//                                             <li className="old_price">${(product.price * 1.2).toFixed(2)}</li>
//                                             <li className="new_price">${product.price.toFixed(2)}</li>
//                                         </ul>
//                                         <ul >
//                                             <li ><p style={{fontFamily:"revert", fontSize:"12px",width: "150px"}}><strong><b> TITLE :</b><br></br></strong>{product.title} </p></li>
//                                         </ul>
//                                     </div>
                                    
//                                 </div>
                                
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     );
// }


// export default Product ;
