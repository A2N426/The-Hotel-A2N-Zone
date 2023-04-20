import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProviders';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const LogIn = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const emailRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/';
    console.log(from)
    const { registerWithGoogle, logIn, resetPassword, logOut } = useContext(UserContext)
    const signInWithGoogle = () => {
        setError('')
        setSuccess('')
        registerWithGoogle()
            .then(result => {
                const loggedUser = result.use
                setSuccess("successfully log in")
                r;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)

            })
    }
    const registerWithGit = () => {
        registerWithGit()
        setError('')
        setSuccess('')
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess("successfully log in")
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)

            })
    }
    const handleLogIn = (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                setSuccess("successfully log in")
                form.reset()
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value
        console.log(email)
        if (!email) {
            alert('Please Provide a Email')
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please reset your password")
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" ref={emailRef} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mt-3">Login</button>
                            </div>
                            <Link to="/register" className="label-text-alt link text-center link-hover">Are New? Please Register</Link>
                            <button onClick={signInWithGoogle} className="btn btn-primary">Google</button>
                            <button onClick={signInWithGoogle} className="btn btn-primary">Git Hub</button>
                        </form>
                        <p><small className='text-red-600 text-center'>{error}</small></p>
                        <p className='text-success text-center'><small>{success}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;