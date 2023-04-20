import React, { useContext } from 'react';
import { UserContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(UserContext)
    const location = useLocation()

    if(loading){
        return <p>Loading...</p>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;