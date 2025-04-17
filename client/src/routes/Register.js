import './registerstyle.css'
import signupvid from '../assets/signup.mp4'
import { Link } from 'react-router-dom'; 
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState("");
    const navigate = useNavigate()

    const validatePassword = (pwd) => {
        const hasMinimumLength = pwd.length >= 6;
        const hasNumberOrSpecial = /[\d!@#$%^&*(),.?":{}|<>]/.test(pwd);
        return hasMinimumLength && hasNumberOrSpecial;
    };


    const handlePasswordChange = (e) => {
        const pwd = e.target.value;
        setPassword(pwd);
        
        if (validatePassword(pwd)) {
            setPasswordValid(true);
            setPasswordMessage("Password is strong!");
        } else {
            setPasswordValid(false);
            setPasswordMessage("Password must be at least 6 characters long and include a number or special character.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if (!passwordValid) {
            return; 
        }

        axios.post('http://localhost:3001/register',{username,email,password})
        .then(res => {console.log(res)
            navigate('/Login')
            alert("Registration Successful!!")
        })
        .catch(err => console.log(err))
    }
    

    return(

            <div className="register">
            <div className="signup-container">
                <div className="video">
                    <video src={signupvid} autoPlay loop muted></video>
                

                <div className="text">
                    <h2>Join Us Today!</h2>
                    <p>Create your account and start your journey.</p>
                </div>

                <div  className="tologin">
                    <span className="log">Already have an account?</span>
                    <Link to = {'/Login'}>
                        <button className="btn">Log In</button>
                    </Link>
                </div>
                </div>


                <div className="formdiv">
                    <div className="header">
                        <h3>Sign Up to Get Started!</h3>
                    </div>

                    <form onSubmit={handleSubmit} className='form grid'>

                        <div className='inputdiv'>
                            <label htmlFor="username">Username</label>
                            <i class="fa-solid fa-circle-user"></i>
                            <input type="text" id='username' placeholder='Enter your username' required 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='inputdiv'>
                            <label htmlFor="email">Email</label>
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" id='email' placeholder='Enter password' required 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='inputdiv'>
                            <label htmlFor="password">Password</label>
                            <i class="fa-solid fa-shield"></i>
                            <input
                                type="password"
                                id='password'
                                placeholder='Enter password'
                                required
                                onChange={handlePasswordChange}
                                style={{
                                    borderColor: passwordValid ? 'green' : 'red',
                                    backgroundColor: passwordValid ? '#d4edda' : '#f8d7da',
                                }}
                            />
                            <span
                                style={{
                                    color: passwordValid ? 'green' : 'red',
                                    fontSize: '14px',
                                    marginTop: '5px',
                                    display: 'block',
                                }}
                            >
                                {passwordMessage}
                            </span>
                        </div>

                        

                        <button className='sign-btn' type='submit'>
                            <span>Sign Up </span>
                        </button>

                        <div className="or-line" style={{color: 'black'}}>
                            <span>or</span>
                        </div>

                        <div className="social-signup">
                            <button className="social-btn google-btn">
                                <img src={google} alt="Google" /> Sign Up with Google
                            </button>
                            <button className="social-btn apple-btn">
                                <img src={apple} alt="Apple" /> Sign Up with Apple
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Register;