import React from 'react'

function Alert(props) {
    
    return (
        
        props.settype && <div className={`alert alert-${props.settype} alert-dismissible fade show`} role="alert">
        <strong>Success!</strong> {props.setmsg}
        
      </div>
      
    )
}

export default Alert
