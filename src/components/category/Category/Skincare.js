import React, { useState, useEffect } from 'react';
import Header from "../../header/Header";
import './Jewellary.css';
import { useAddtoCartMutation } from '../../../redux/store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Skincare() {
    const [jewellary, setProducts] = useState([]);
    const [AddtoCart] = useAddtoCartMutation();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async ()=>{
            const response = await axios.get("https://dummyjson.com/products/category/skincare");
            setProducts(response.data.products);
        };
       

        getProduct();
    }, []);

    const handleCart = async(key)=>{
       const response = await AddtoCart(key)        
       console.log(response, "Ans");
    }
    
    const handleOpenProduct =(ID)=>{
        navigate(`/Show/${ID}`);
    };

    return (
        <>
        <Header/>
         
        <div className="container">
                <div className="row">
                    {jewellary.map(jewellary => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={jewellary.id}>
                            <div className="card product_item "style={{ width: "100%", height: "90%" }}>
                                <div className="body">
                                    <div className="cp_img" >
                                        <img onClick={()=>handleOpenProduct(jewellary.id)} src={jewellary.images[0]} alt={jewellary.title} className="img-fluid" style={{ width: "250px", height: "160px" }} />
                                        
                                        <div className="hover">
                                        
                                        <div style={{float:"left"}}><button className="btn btn-outline-dark btn-sm waves-effect" onClick={()=> handleCart(jewellary)}><b>Add cart</b></button></div>
                                        <div style={{float:"right"}}> <button className="btn btn-outline-dark btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart"><b>Buy Now</b></i></button></div>  
                                        </div>
                                        
                                    </div>
                                    <div className="product_details">

                                        <ul className="product_price list-unstyled">
                                            <li className="old_price">Price - ${jewellary.price}</li>
                                            <li className="new_price"><del>${jewellary.discountPercentage}</del></li>
                                        </ul>
                                        <ul >
                                            <li ><center><p style={{fontFamily:"revert", fontSize:"12px",width: "150px"}}>{jewellary.title} </p></center></li>
                                            {/* <li ><p style={{ fontFamily: "revert", fontSize: "12px", width: "150px" }}><strong> <br></br></strong>{jewellary.description} </p></li> */}

                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
        </>
);
}
export default Skincare;