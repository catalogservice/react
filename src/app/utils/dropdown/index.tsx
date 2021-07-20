import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import Wrapper from "../wrapper";
import { IDropdown } from "./dropdown";
import style from './dropdown.module.css';

const Dropdown: FC<IDropdown | null> = ({ el, closeDialog, align, ...props }) => {
    const dialog = useRef(null);
    const [dialogLeft, setDialogLeft] = useState<any>('auto');
    const [dialogTop, setDialogTop] = useState<any>('auto');
    const closeDialogOnOutsideClick = (event: any) => {
        if (!!dialog.current) {
            if (!(dialog as any)?.current.contains(event.target)) closeDialog()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', closeDialogOnOutsideClick);
        if (el) {
            let position = el.getBoundingClientRect();
            setDialogTop(position.top - 10)
            setDialogLeft(position.left - ((dialog as any).current.offsetWidth - 5));
        }
        return () => document.removeEventListener('mousedown', closeDialogOnOutsideClick)
    })
    if (!el) {
        return null
    } else {
        return (
            <div className={style.wrapper} style={{ left: dialogLeft,top:dialogTop }} ref={dialog}>
                <Wrapper style={{ backgroundColor: "white" }}>
                    {props.children}
                </Wrapper>
            </div>
        )
    }
}

export default Dropdown;