import style from './li.module.css';
import { FC } from 'react';

const Li: FC<any> = ({...props}) => {
    return (
        <li {...props} className={`${style.item} ${props.className ? props.className : ""}`}>
            {props.children}
        </li>
    )
}

export default Li;