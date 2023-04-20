import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProviders';

const Header = () => {
    const { logOut, user } = useContext(UserContext)

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='relative text-gray-200 hero h-72' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")` }}>
            <div className='hero-overlay bg-opacity-50'></div>
            <div className='absolute top-10 flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/book'>Book</Link>
                {
                    user && <img className='w-6 rounded-full' src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'></img>
                }
                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-xs">log Out</button>
                        :
                        <Link to='/login' className="btn btn-xs">log in</Link>
                }
            </div>
            <h2 className='text-5xl'>Al Arabia Luxury!!!</h2>
        </div>
    );
};

export default Header;