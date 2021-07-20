import { FC } from "react";
import style from './app.module.css';
import Header from "./header";
import Sidebar from "./sidebar";
import AppRoute from "./route";
import Button from "./utils/Button";
const App: FC<any> = () => {
    return (
        <div id="app" className={style.wrapper}>
            <Header/>
            <div className={style.content_wrapper}>
                <Sidebar/>
                <AppRoute/>
            </div>
        </div>
    )
}

export default App;