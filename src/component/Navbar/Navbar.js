import React from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <div className="container">
                <a className="navbar-brand text-white">Petuk Mama</a>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-light" type="submit">Search</button>
                </form>
                </div>
            </nav>
             <h3 className='text-primary mt-4'>Get your food. What's you want!</h3>
        </div>
    );
};

export default Navbar;