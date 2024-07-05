import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let user = false;
  return (
   user? children : <Navigate to='/login' />
  )
}

export default PrivateRoute