import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { register, verification } = useContext(UserContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;



        if (password !== confirm) {
            alert("Password Not matched")
            return
        }

        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('Password at least two character uppercase!!!')
        //     return
        // }
        // else if (!/(?=.*[!@#$&*])/.test(password)) {
        //     setError('Password at least one character is special!!!')
        //     return
        // }
        // else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        //     setError('Password at least two numbers!!!')
        //     return
        // }
        // else if (password.length < 8) {
        //     setError('Password Must 8 Character')
        //     return
        // }

        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                // if (!loggedUser.verification) {
                //     alert("Do not move forward before verification")
                //     return
                // }
                console.log(loggedUser)
                form.reset()
                handleName(result.user, name)
                handleVerification(result.user)
                setSuccess('successfully registered')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }
    const handleVerification = (user) => {
        verification(user)
            .then(result => {
                alert('Please Verified Your email')
            })
    }

    const handleName = (user, name) => {
        updateProfile(user, {
            displayName: name,
        })
            .then(result => {
                // const loggedUser=result.user;
                console.log('user update')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered mb-3" required />
                            <input type='password' name='confirm' placeholder="Confirm Password" className="input input-bordered mb-3" required />
                            {
                                showPassword ?
                                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs">Hide password</button>
                                    :
                                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs">Show password</button>
                            }
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already Have an Account? Please Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p><small>{name}</small></p>
                    <p>{success}</p>
                    <p className='text-red-600'><small>{error}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;