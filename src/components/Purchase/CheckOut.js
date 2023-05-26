import { useAddCheckOutMutation ,useFatchCartQuery } from "../../redux/store";
import { useState } from "react";
import { Link } from "react-router-dom";

function CheckOut() {
  const { data } = useFatchCartQuery();

  const [ AddCheckOut ] = useAddCheckOutMutation();
  const [ CheckOut, setCheckOut ] = useState ([]);

  const handleChange = (e)=>{
     setCheckOut({...CheckOut , [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e)=>{
       e.preventDefault();
      //  await CheckOut(CheckOut);
       console.log(CheckOut,"CheckOut");
       const res = await AddCheckOut(CheckOut);
       if(res === "ok"){
        console.log("deleted Sucess");
       }else{
        console.log(res.error);
       }
      };

      let totalSum = 0;
        if (data) {
        data.forEach((item) => {
        totalSum += item.price;
    });
  }

      const discountPercentage = 10; // Assuming a 10% discount
      const discountAmount = (totalSum * discountPercentage) / 100;
      const subtotal = totalSum;
      const totalAmount = totalSum - discountAmount;
    return (
    <>
           
             
               <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
              <div className="d-flex flex-row align-items-center"><Link to="/Product"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></Link></div>
                
             
                <div className="card-header py-3">
                <h2 className="mb-0"><center>Billing address</center></h2>
                <div className="payment-info" style={{width:"250px", float:"right"}}>
                    <div className="d-flex justify-content-between align-items-center"><span>Order Summary</span></div>

                                       <hr className="line" />
                    <div className="d-flex justify-content-between information"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                    <div className="d-flex justify-content-between information"><span>Discount 10%</span><span>${discountAmount.toFixed(2)}</span></div>
                    <div className="d-flex justify-content-between information"><span>Shipping</span><span>Free</span></div>
                    <div className="d-flex justify-content-between information"><span>Total amount</span><span>${totalAmount.toFixed(2)}</span></div>
            
                </div>
              

                 
                </div>
                <div className="card-body">
                  <form className="needs-validation"  onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="First Name"
                          required
                          name="FirstName"
                          value={CheckOut.FirstName}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Last Name"
                          required
                          name="Lastname"
                          value={CheckOut.LastName}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                          name="email"
                          value={CheckOut.email}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                          name="Address"
                          value={CheckOut.address}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                    
                      <div className="col-md-3 my-1">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" id="country" required name="Country" onChange={handleChange} >
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          State
                        </label>
                        <br />
                        <select className="form-select" id="state" required name="state" onChange={handleChange}>
                          <option value="">Choose...</option>
                          <option>Gujrat</option>
                          <option>Punjab</option>
                          <option>Rajasthan</option>
                          <option>Maharashtra</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="City" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="City"
                          placeholder=""
                          required
                          name="City"
                          value={CheckOut.City}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          City name is required.
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                          name="zip"
                          value={CheckOut.Zip}
                          onChange={handleChange}
                          
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    
                    <hr className="my-4" />

                    <h2 className="mb-3">Payment</h2>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                          name="NameofCart"
                          value={CheckOut.NameofCart}
                          onChange={handleChange}
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                          name="CreditCarNo"
                          value={CheckOut.CreditCarNo}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                          name="Expiration"
                          value={CheckOut.Expiration}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                          name="CVV"
                          value={CheckOut.CVV}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <input
                      className="w-100 btn btn-primary "
                      type="submit" value=" Continue to checkout" />
                  </form>
                </div>
              </div>
            </div>
          
            
             
           
    </> );
}

export default CheckOut;