import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button className='logOut' onClick={logOut}>Log Out</button>
                    :
                    <>
                        <Link to="/login">Log In</Link>
                        <Link to="/signUp">Sign Up</Link>
                    </>
                    }
                <span className='text-color'>Welcome: {user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;