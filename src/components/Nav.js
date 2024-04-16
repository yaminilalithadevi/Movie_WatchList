import React from 'react'
import { BsSearch } from 'react-icons/bs';

function Nav() {
  return (
    <div>
      
    <div className='bg-light  row justify-content-center border-bottom'>
   
   <div  className="box m-1" id="nav">

   

	<input type="text"  name="" placeholder="www.your-website.com"
        aria-label="Search"
        aria-describedby="searchIcon"/> 

   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </div>

</div>
   
   
   
    </div>
  )
}

export default Nav
