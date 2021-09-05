import React from 'react';
import { Redirect } from 'react-router';
const LoginGuard = ({ children }) => {
    const { user } = React.useContext()
    if (!user) return <Redirect to="/login" />
    return <>{children}</>
}

export default LoginGuard;