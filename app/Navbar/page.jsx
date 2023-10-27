'use client'
import {FaGoogleWallet} from 'react-icons/fa6'
import Link from 'next/link';
 import { useState } from 'react'

export default function Navbar() {
    const  [color, setColor] = useState(false)
     const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true)
       }else{
            setColor(false)
        }

     }
    window.addEventListener('scroll', changeColor)


    

    return(
        <header className={color ? 'header' : 'header'}>
            
             <div className='logo'>
                 <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>

            </div>


            <nav class="navbar">
                <ul>
                    <Link href='#'><li>Home</li>
                    </Link>
                   
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>WhyUs</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>Testimonial</a></li>
                                                            
                    <Link href="/form">
                        <button className='btn'>Login</button>
                    </Link>
                    
                </ul>

            </nav>
        
    </header> 
    
    )
}