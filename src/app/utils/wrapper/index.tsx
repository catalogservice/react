import { space } from "../../../models/space.d";
import { FC } from "react";
import '../../../css/box_shadow.css';
import style from './wrapper.module.css';
export interface IWrapper {
    elevation?: space
}
const Wrapper: FC<IWrapper> = (props) => {
    let shadow = getShadow(props?.elevation);
    return (
        <div className={`${style.wrapper} ${shadow}`}>
            <h1>Wrapper</h1>
        </div>
    )
}

const getShadow = (elevation?: space): string => {
    switch (elevation) {
        case space.xxs:
            return `shadow-${elevation}`
        case space.xs:
            return `shadow-${elevation}`
        case space.sm:
            return `shadow-${elevation}`
        case space.md:
            return `shadow-${elevation}`
        case space.lg:
            return `shadow-${elevation}`
        case space.xl:
            return `shadow-${elevation}`
        case space.xxl:
            return `shadow-${elevation}`
        default:
            return `shadow-sm`
    }
}

export default Wrapper