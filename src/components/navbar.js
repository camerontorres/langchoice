import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
//import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {

const [click, setClick] = useState(false)
const [button ,setButton] = useState(true);
const handleClick =() =>  setClick(!click)
const closeMobileMenu =() =>  setClick(false)

const showButton = () =>{
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true)
    }
};

window.addEventListener('resize', showButton)

  return (
    <div className='navbar'>
        <div className=' nav navbar-container'>
        
            <Link to='/' className='navbar-logo navbar-brand'>LangChoice<FontAwesomeIcon icon="fa-solid fa-check-double" style={{color: "#ff6251",}} /></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ?  'fa fa-times' :  'fa fa-bars'}></i>

            </div>
            <ul className={click ?  ' nav-menu active' :  ' nav-menu'}>
                <li className='nav-item nav-link'>
                    <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                        home
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/Languages' className='nav-link' onClick={closeMobileMenu}>
                        languages
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/Pricing' className='nav-link' onClick={closeMobileMenu}>
                        Pricing
                    </Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/About' className='nav-link' onClick={closeMobileMenu}>
                        about
                    </Link>
                </li>
                
                

            </ul>
            {/*button && <Button buttonStyle='btn--outline'>SIGN UP</Button>*/}

        
        </div>
        
      
    </div>
  )
}
