import React,{useEffect} from 'react'
import PropTypes from 'prop-types'


export default function Nav(props) {
  useEffect(() => {
    
  //  alert("Hello Mr."+props.user);
   
  });
   
  
    return (
     
     
     
     <>
     <div>
       
       
          
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">Link</a>
            </li>
            
            
          </ul>
                <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
        </div>
      </div>
      </nav>
      
      </div>

              
       
      </>  
      
      
     
    
    )
}

Nav.prototype={
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}
Nav.defaultProps = {
    title: 'NavBar',
    user:'User'
  };