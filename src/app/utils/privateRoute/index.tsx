import React from 'react';
import {  UserContext } from '../../user/context';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ component: Component, render, ...rest }: any) => {
    const userContext = React.useContext(UserContext);
    if (!!userContext?.user) {
        if (Component) return <Route {...rest} component={Component} />
        if (render) return <Route {...rest} render={render} />

    }
    return <Redirect to="/login" />
}

export default PrivateRoute;