import React from 'react';
import { UserContext } from "app/user/context";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
    const { user } = React.useContext(UserContext);

    if (user.name) {
        return <Route {...props} render={(props) => <Component {...props} />} />;
    } else {
        return <Route {...props} render={(props) => <Redirect to="/login" />} />;
    }
}

export default PrivateRoute