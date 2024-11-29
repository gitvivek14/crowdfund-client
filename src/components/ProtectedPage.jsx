import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const ProtectedPage = ({children}) => {
    const navigate = useNavigate();
    const {isSignedIn} = useUser();
    if(!isSignedIn){
        return <Navigate to='/sign-in' />
    }else{
        return children
    }
}

export default ProtectedPage