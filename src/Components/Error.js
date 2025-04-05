import React from 'react'
import { Link} from 'react-router-dom'

const Error = () => {
   
    
  return (
    <div>
        <h1>
            404 Not Found 
        </h1>
        <p>
            OOps looks like something went wrong!
        </p>
        <h2><Link to="/"> Go back </Link></h2>
    </div>
  )
}

export default Error