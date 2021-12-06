import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div className='headerNavber'>
            <Link to="/" className='link'>Home </Link>
            <Link to="/Employeelist" className='link'>Employee List </Link>
            <Link to="/contact" className='link'>Contact List </Link>
        </div>
    );
};

export default Header;