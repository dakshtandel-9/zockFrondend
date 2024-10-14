import React, { useState } from 'react';
import './Navbar.css';
import { Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {isMobile ? (
                <div>
                    <div className='menu-mobile' onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon className='icon-transition' /> : <MenuIcon className='icon-transition' />}
                    </div>
                    <div className={`menu-list ${menuOpen ? 'show' : ''}`}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/work">Our Work</a></li>
                            <li><Button variant="contained">Contact</Button></li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="navbar ps-5 pe-5">
                    <div className="logo">
                        <img src="https://test.sknd.in/wp-content/uploads/2024/10/OCK.png" alt="Logo" />
                    </div>
                    <div className="nav-link">
                        <a href="/" className='ms-3 me-3'>Home</a>
                        <a href="/services" className='ms-3 me-3'>Services</a>
                        <a href="/about" className='ms-3 me-3'>About</a>
                        <a href="/work" className='ms-3 me-3'>Our Work</a>
                    </div>
                    <div className="contact-button">
                        <Button variant="outlined">Contact</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
