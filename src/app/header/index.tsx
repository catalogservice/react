import { FC } from "react";
import style from './header.module.css';
const Header: FC<any> = (props) => {
    return (
        <div id="header" className={`${style.wrapper} px-md`}>
            <div className={style.brand_wrapper}>
                <i className={`mdi md-light mr-xs`}>menu</i>
                <h3 className={`${style.brand_name} my-0`}>Catalog</h3>
            </div>
        </div>
    )
}

export default Header