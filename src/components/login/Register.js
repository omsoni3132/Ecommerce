import React  , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../../context/UserAuthContext";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signUp(email, password);
      navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };


    return (
        <>
            
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            
                            <div className="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/Login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Register