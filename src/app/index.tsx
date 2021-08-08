import { FC } from "react";
import style from './app.module.css';
import MainHeader from "./header";
import Sidebar from "./sidebar";
import AppRoute from "./route";
import MaterialProvider from "./theme/material";
const App: FC<any> = () => {
    return (
        <MaterialProvider>
            <div id="app" className={style.wrapper}>
                <MainHeader />
                <div className={style.content_wrapper}>
                    <Sidebar />
                    <AppRoute />
                </div>
            </div>
        </MaterialProvider>
    )
}

export default App;