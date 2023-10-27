export default function Navbarlinks () {
    return(
        <div>

        <main>
            
            <div className='logo'>
                <h2><span className='fa'><FaGoogleWallet/></span>HEYWALLET</h2>

           </div>


           <nav class="navbar">
               <ul>
                   <li><a href='#'>Home</a></li>
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
       
   </main> 

        </div>
    )
}