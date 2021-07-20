import { space } from "../../../models/space.d";
import { FC, HTMLAttributes } from "react";
import '../../../css/box_shadow.css';
import style from './wrapper.module.css';
export interface IWrapper extends HTMLAttributes<HTMLDivElement> {
    elevation?: space
}
const Wrapper: FC<IWrapper> = ({ elevation, children, ...props }) => {
    let shadow = getShadow(elevation);
    let classes = props.className ? props.className : '';
    delete props.className;
    let styles = props.style ? { ...props.style } : {}
    delete props.style;
    return (
        <div {...props} style={{...styles}} className={`${style.wrapper} ${shadow} ${classes}`}>
            {children}
        </div>
    )
}

const getShadow = (elevation?: space): string => {
    switch (elevation) {
        case "xxs":
            return `shadow-${elevation}`
        case "xs":
            return `shadow-${elevation}`
        case "sm":
            return `shadow-${elevation}`
        case "md":
            return `shadow-${elevation}`
        case "lg":
            return `shadow-${elevation}`
        case "xl":
            return `shadow-${elevation}`
        case "xxl":
            return `shadow-${elevation}`
        default:
            return `shadow-sm`
    }
}

export default Wrapper