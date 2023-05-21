import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <p className='w-4/12 mx-auto'>
            <progress className="progress progress-secondary  w-full"></progress>
        </p>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRouts;