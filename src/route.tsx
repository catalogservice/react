import { FC } from "react";
import App from './app/index';
import { Route, Switch } from "react-router-dom";

const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/" render={()=><App/>}></Route>
            <Route exact path="/login" ></Route>
            <Route exact path="/register"></Route>
        </Switch>
    )
}