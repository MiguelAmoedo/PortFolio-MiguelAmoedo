import React from 'react';
import Logo from '../assets/logo3.png';


const Header = () => {
  return (
<header className='py-8'>
    
    <div className='container mx-auto'>
  
  <div className='flex justify-between items-center'>
<a href='#'>
  <img  src={Logo}alt=''/>
</a>

<button className='btn btn-sm'>Vamos trabalhar juntos?</button>
  </div>

    </div>
    </header>

  ) 
  
  
};

export default Header;
