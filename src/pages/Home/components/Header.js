import React from 'react';


function Header() {
    return (
        <header className='header'> 
          <div className='toolbar'>
            <div>
              <a href='/'>Inicio</a>
            </div>
            <div>
              <button>New post</button>
              <span>Img1</span>
              <span>Img2</span>
            </div>
          </div>  
        </header>
    )
}

export default Header;