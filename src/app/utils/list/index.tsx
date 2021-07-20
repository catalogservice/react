import { FC, SyntheticEvent } from "react";
import { IList, TData } from "./list";
import style from './list.module.css';
import Li from './item/index';

const List: FC<IList> = (props) => {
    const handleListClick = (e: SyntheticEvent, item: TData) => {
        if (item?.onClick) item.onClick(e, item?.data)
    }
    return (
        <ul className={style.wrapper}>
            {props.items.map((item,i) => <Li key={i} onClick={(e: SyntheticEvent) => handleListClick(e, item)}>{item.title}</Li>)}
        </ul>
    )
}

export default List