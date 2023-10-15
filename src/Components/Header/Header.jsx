import React from 'react';
// import "../bootstrap.min.css"
import "./Header.css"
import profile from "../../assets/profile.png"
const Header = () => {
    return (
        <nav className='container'>
           <div className='p-5'>
           <div className='header'>
           <div>
            <h2>Knowledge Cafe</h2>
            </div>
            <div>
                <img className='profile' src={profile} alt="" />
            </div>
           </div>
           <hr />
           </div>
        </nav>
    );
};

export default Header;