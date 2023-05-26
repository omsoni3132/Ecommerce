
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Header from "../header/Header";
import { Link } from "react-router-dom";
import "./Show.css";
import { useAddtoCartMutation } from '../../redux/store';


function Show() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [AddtoCart] = useAddtoCartMutation();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProducts([response.data]);
    };


    getProduct();
  }, [id]);

  console.log(products, "pro");

  const handleCart = async(key)=>{
    const response = await AddtoCart(key);
    console.log(response , "Ans");
}
 
  return (
    <>
    {/* <Header/> */}
    <center>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <div className="container" >
      
        <div className="col-xs-12 col-md-6 bootstrap snippets bootdeys">
          {products.map((product) => (


            <div className="product-content product-wrap clearfix" style={{ width: "500", height: "500" }}>
            
              <div className="row">
              
                <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="d-flex flex-row align-items-center"><Link to="/Product"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></Link></div>
                <hr/>
                  <div className="product-image">
                    <img src={product.images[0]} alt="194x228" className="img-responsive" style={{height : "300px" , width : "300px"}}/>

                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="product-deatil">
                    <h5 className="name">
                      <span >
                      {product.title}
                      </span>
                    </h5>
                    <p className="price-container">
                      <span>${product.price}</span>
                    </p>
                    <span className="tag1"></span>
                  </div>
                  <div className="description">
                    <p>{product.description} </p>
                  </div>
                  <div className="product-info smart-form">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                      <Link to ="/Cart">
                        <span className="btn btn-success" onClick={()=>handleCart(product)}>Add to cart</span>
                      </Link>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           ))}
        </div>


      </div>
    </center>
    </>
  );
}

export default Show;