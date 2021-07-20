import { FC } from "react";
import style from './search.module.css';
const SearchInput: FC<any> = (props) => {
    let styles = { width: 250 }
    styles = { ...styles,...props.style };
    delete props.style;
    return (
        <div style={{ ...styles }} className={`${style.wrapper} px-xs shadow-sm`}>
            <span className="mdi md-18">search</span>
            <input className={`${style.input}`} type="text" />
        </div>
    )
}

export default SearchInput;