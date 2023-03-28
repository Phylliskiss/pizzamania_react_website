import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  mynav-bar">

            <a className="navbar-brand mynav"  href="#">PIZZAMANIA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="nav-l">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/">About Pizza</a>
                <a className="nav-link" href="/">Pizza Types</a>
            </div>
          </nav>
  )
}

export default Navbar;
