import { FC } from "react";
import style from './textarea.module.css';
const Textarea: FC<any> = ({ref,onChange,value,type,name,...rest}) => {
    return (
        <div className={style.wrapper}>
            <textarea
                ref={ref}
                className={style.textarea}
                name={name}
                onChange={onChange}
                value={value}
                type={type}
                {...rest} />
        </div>
    )
}

export default Textarea;