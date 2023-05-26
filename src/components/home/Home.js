import React, { useState, useEffect } from 'react';
import Header from "../header/Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAddtoCartMutation } from '../../redux/store';
import { Link } from 'react-router-dom';

function Home() {
    const [AddtoCart] = useAddtoCartMutation();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getProduct = async ()=>{
            const response = await axios.get("https://dummyjson.com/products");
            setProducts(response.data.products);
        };
       

        getProduct();
    }, []);
      
    
    const handleOpenProduct =(ID)=>{
        navigate(`/Show/${ID}`);
    };
    //  console.log(products , "products");

    const handleCart = async(key)=>{
        const response = await AddtoCart(key);
        console.log(response , "Ans");
    }

    const handleOpenCheckout = (id)=>{
        navigate(`/CheckOut/${id}`)
    }

    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                            <div className="card product_item " style={{ width: "100%", height: "90%" }}>
                                <div className="body">
                                    <div className="cp_img" >
                                        <img  onClick={()=>handleOpenProduct(product.id)} src={product.images[0]} alt={product.id} className="img-fluid" style={{ width: "250px", height: "160px" }} />

                                        <div className="hover">

                                            <div style={{ float: "left" }}><button className="btn btn-outline-dark btn-sm waves-effect" onClick={()=>handleCart(product)}><i className="zmdi zmdi-plus"><b> Add cart</b></i></button></div>
                                            <div style={{ float: "right" }}><Link to ="/CheckOut"><button className="btn btn-outline-dark btn-sm waves-effect" onClick={()=>handleOpenCheckout(product.id)}><i className="zmdi zmdi-shopping-cart"><b>Buy Now</b></i></button></Link></div>
                                        </div>

                                    </div>
                                    <div className="product_details">

                                        <ul className="product_price list-unstyled">
                                            <li className="old_price">${product.price}</li>
                                            <li className="new_price"><del>${product.discountPercentage}</del></li>
                                        </ul>
                                        <ul>
                                            <li ><center><p style={{ fontFamily: "revert", fontSize: "12px", width: "150px" }}><b>{product.title} </b></p></center></li>
                                            {/* <li ><p style={{ fontFamily: "revert", fontSize: "12px", width: "150px" }}><strong> <br></br></strong>{product.description} </p></li> */}

                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>);
}

export default Home;