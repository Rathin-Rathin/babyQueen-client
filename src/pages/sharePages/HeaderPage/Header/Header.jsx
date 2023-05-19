import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
const Header = () => {
    const { user, logOut,loader } = useContext(AuthContext);
    if (loader) {
        return <progress className="progress progress-secondary  w-full"></progress>
    }
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('logout success');
            })
            .catch()
        
    }
    const ul = <>
        <Link to='/'>Home</Link>
        <Link to='/allToys'>AllToys</Link>
        {user && <Link>MyToys</Link> }
        {user && <Link to='/addToys'>AddToys</Link>}
        <Link>Blogs</Link>
        {user && <img className='logo rounded-full'src={user?.photoURL}  alt="" /> }
        {user ?<Link onClick={handleSignOut} to='/login'>Logout</Link>:<Link to='/login'>Login</Link>}
    </>

    return (
        <div className="navbar bg-pink-300 border-b-2 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-200 w-52 font-bold text-purple-900 flex justify-start items-start">
                        {ul}

                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <span className='font-bold font-mono text-3xl text-purple-900'>baby's</span>
                    <img className='logo' src={logo} alt="" />
                    <span className='font-bold font-mono text-3xl text-purple-900'>Toys</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 flex gap-4  font-bold text-purple-900  justify-center items-center">
                    {ul}
                </ul>
            </div>

        </div>
    );
};

export default Header;