import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const{providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
 
  

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error));
    }
    return (
        <div className="hero ">
  <div className="hero-content flex-col ">
      
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
      <form onSubmit={handleLogin} className="card-body">
          <h1 className='text-center font-bold'>Please Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
             <p>New in our site?<Link to='/signup' className="label-text-alt link link-hover">Create Account</Link></p>
          </label>
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google SignIn</button>
        </div>

        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login"/>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;