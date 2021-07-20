import { FC } from "react";
import App from './app/index';
import { Route, Switch } from "react-router-dom";
import Login from './app/user/login';
import Register from "./app/user/register";
;
const MainRoutes: FC = () => {
    return (
        <Switch>
            <Route exact path="/login" render={() => <Login />} ></Route>
            <Route exact path="/register" render={() => <Register />} ></Route>
            <Route path="/" render={() => <App />}></Route>
        </Switch>
    )
}

export default MainRoutes;