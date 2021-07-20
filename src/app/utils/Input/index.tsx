import { FC, HTMLAttributes } from "react";
import style from './input.module.css';
export interface IInput extends HTMLAttributes<HTMLInputElement> {
    ref?: any
    type?: any
    value?: string
}
const Input: FC<IInput> = ({ ref, ...rest }) => {
    let classes = rest.className;
    delete rest.className;
    return (
        <div className={style.wrapper}>
            <input
                ref={ref}
                className={`${style.input} ${classes}`}
                {...rest}
            />
        </div>
    )
}

export default Input;