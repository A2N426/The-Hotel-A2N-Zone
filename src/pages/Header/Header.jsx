import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='relative text-gray-200 hero h-72' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")` }}>
            <div className='hero-overlay bg-opacity-50'></div>
            <div className='absolute top-10 flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/book'>Book</Link>
            </div>
            <h2 className='text-5xl'>Al Arabia Luxury!!!</h2>
        </div>
    );
};

export default Header;