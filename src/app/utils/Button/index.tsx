import { FC } from 'react';
import style from './button.module.css';

const Button: FC<any> = ({ type, onClick: clickHandler, data, className, ...rest }) => {
    if (!clickHandler) clickHandler = () => { console.log('not implemented') }
    if (!data) data = null;
    return <button className={`${style.button} ${style[type]} ${className}`} onClick={clickHandler}>{rest.children}</button>
}
export default Button