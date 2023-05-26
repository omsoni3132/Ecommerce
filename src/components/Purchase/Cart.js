import "./Cart.css";
import { useFatchCartQuery, useDeleteCartMutation } from "../../redux/store";
import { Link } from "react-router-dom";



function Cart() {
     const { data, error, isFetching } = useFatchCartQuery();
     const [DeleteCart] = useDeleteCartMutation();
     

    const handleDelete = async(id) => {
        console.log(id,"id");
       const res = await DeleteCart(id);
       if(res === "ok"){
        console.log("deleted Sucess");
       }else{
        console.log(res.error);
       }
    };
    


    let Data = [];
    let content;

    if (isFetching) {
        content = <div className="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    } else if (error) {
        console.log("error");
    } else {
        Data = data?.map((item) => ({
            id: item.id,
            category: item.category,
            description: item.description,
            image: item.images,
            price: item.price,
            ID: item.ID,
            title: item.title


        }));
        let totalSum = 0;
        Data.forEach((item) => {
          totalSum += item.price;
        });
    
        

        const discountPercentage = 10; // Assuming a 10% discount
        const discountAmount = (totalSum * discountPercentage) / 100;
        const discountedTotal = totalSum - discountAmount;
    
    
      
      
return (<>
    <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="product-details mr-2">
                    <div className="d-flex flex-row align-items-center"><Link to="/Product"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></Link></div>
                    <hr />
                    <h2 className="mb-0"><center>Shopping cart</center></h2>
                    <div className="d-flex justify-content-between"><span>You have items in your cart</span>
                    </div>


                    {Data?.map((item) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div className="d-flex flex-row">
                                    <img alt="img" className="rounded" src={item.image[0]} width="40" />
                                    <div className="ml-2"><span className="font-weight-bold d-block">{item.title}</span></div>
                                </div>
                                <div className="d-flex flex-row align-items-center"><span className="d-block">1</span><span className="d-block ml-5 font-weight-bold">{item.price}</span><i className="fa fa-trash-o ml-3 text-black-50" onClick={() => handleDelete(item.ID)}> </i></div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="col-md-4">
                <div className="payment-info">
                    <div className="d-flex justify-content-between align-items-center"><span>Order Summary</span></div>

                                       <hr className="line" />
                    <div className="d-flex justify-content-between information"><span>Subtotal</span><span>${totalSum.toFixed(2)}</span></div>
                    <div className="d-flex justify-content-between information"><span>Discount 10%</span><span>-${discountAmount.toFixed(2)}</span> </div>
                   

                    <div className="d-flex justify-content-between information"><span>Shipping</span><span>Free</span></div>
                    <div className="d-flex justify-content-between information"><span>Total amount</span><span>${discountedTotal.toFixed(2)}</span></div><Link to ="/CheckOut"><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>Go To Checkout</span></button></Link></div>
            </div>
        </div>
    </div>
</>
);
                }
}
export default Cart;