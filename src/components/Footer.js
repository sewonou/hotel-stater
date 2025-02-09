import React from 'react';
import LogoWhite from '../assets/img/logo-white.svg';


const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className="container mx-auto flex justify-between text-white">
      <a href="/">
        <img src={LogoWhite} alt="logo hotel starter"/>
      </a>

      Copyright &copy; 2025. All rights reserved
    </div>

  </footer>;
};

export default Footer;
