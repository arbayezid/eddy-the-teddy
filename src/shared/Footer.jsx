import React from 'react';
import logo from '../assets/tadyLogo.png'
import { FaBeer, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content px-20">
            <div>
                <img style={{ height: '70px', width: '70px' }} src={logo} alt="" />

                <p>Eddy the Teddy.<br />Mirpur-1, Dhaka, Bangladesh</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a><FaFacebook /></a>
                    <a><FaTwitter /></a>
                    <a><FaYoutube /></a>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Eddy The Teddy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;