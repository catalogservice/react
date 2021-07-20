import { FC } from "react";
import { Route, Switch, useLocation } from "react-router";
import Product from "./product";

const AppRoute: FC<any> = (props) => {
    const location = useLocation();
    console.log()
    return (
        <Switch>
            <Route path="/app/product" render={() => <Product/>} />
            <Route path="/app/user" render={() => <h1>user</h1>} />
        </Switch>
    )
}
export default AppRoute;