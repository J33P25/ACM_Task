import './loginstyle.css'
import loginvid from '../assets/login.mp4'
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState();  
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login',{username,password})
        .then(res => {
            console.log(res)
            if(res.data === "Success!"){
                localStorage.setItem('username', username);
                navigate('/home')
            }else{
                setErrorMessage("Invalid username or password!!")
            }
        })
        .catch(err => console.log(err))
    }

    return(
        
            <div className="login">
            <div className="container">
                <div className="video">
                    <video src={loginvid} autoPlay loop muted></video>
                

                <div className="text">
                    <h2>Welcome to Eden Trek!</h2>
                    <p>Your Journey Begins Here.</p>
                </div>

                <div  className="tosignup">
                    <span className="sign">Don't have an account?</span>
                    <Link to = {'/register'}>
                        <button className="btn">Sign Up</button>
                    </Link>
                </div>
                </div>


                <div className="formdiv">
                    <div className="header">
                        <h3>Welcome Back!</h3>
                    </div>

                    <form className='form grid' onSubmit={handleSubmit}>


                        <div className='inputdiv'>
                            <label htmlFor="username">Username</label>
                            <i class="fa-solid fa-circle-user"></i>
                            <input type="text" id='username' placeholder='Enter your username' required 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='inputdiv'>
                            <label htmlFor="password">Password</label>
                            <i class="fa-solid fa-shield"></i>
                            <input type="password" id='password' placeholder='Enter password' required 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {errorMessage && (
                            <div className="error-message" style = {{color: 'red'}}>
                                <i className="fa-solid fa-triangle-exclamation"></i> {errorMessage}
                            </div>
                        )}

                        <button className='logbtn' type='submit'>
                            <span>Log In </span>
                        </button>

                        <span className='forgotpassword'>
                            Forgot your password? <a href = "">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    
    );
}

export default Login;