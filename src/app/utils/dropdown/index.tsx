import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import Wrapper from "../wrapper";
import { IDropdown } from "./dropdown";
import style from './dropdown.module.css';

const Dropdown: FC<any | null> = ({ el, closeDialog, align, offsetY, offsetX, ...props }) => {
    const dialog = useRef(null);
    const [dialogLeft, setDialogLeft] = useState<any>('auto');
    const [dialogTop, setDialogTop] = useState<any>('auto');
    const closeDialogOnOutsideClick = (event: any) => {
        if (!!dialog.current) {
            if (!(dialog as any)?.current.contains(event.target)) closeDialog()
        }
    }
    const getTopPos = (currentTop:number)=>{
        if(offsetY){
            return currentTop - offsetY
        }else{
            return currentTop
        }
    }
    const getLeftPos = (currentLeft:number)=>{
        if(offsetX){
            return currentLeft - offsetX
        }else{
            return currentLeft
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', closeDialogOnOutsideClick);
        if (el) {
            let position = el.getBoundingClientRect();
            setDialogTop(getTopPos(position.top - 10))
            setDialogLeft(getLeftPos(position.left - ((dialog as any).current.offsetWidth - 5)));
        }
        return () => document.removeEventListener('mousedown', closeDialogOnOutsideClick)
    })
    if (!el) {
        return null
    } else {
        return (
            <div className={style.wrapper} style={{ ...{left: dialogLeft, top: dialogTop},...props.style }} ref={dialog}>
                <Wrapper style={{ backgroundColor: "white" }}>
                    {props.children}
                </Wrapper>
            </div>
        )
    }
}

export default Dropdown;