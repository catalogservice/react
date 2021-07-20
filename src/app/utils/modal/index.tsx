import { FC, useEffect, useRef } from "react";
import Button from "../Button";
import Wrapper from "../wrapper";
import style from './modal.module.css';
const Modal: FC<any> = ({closeModal,show,...props}) => {
    const modal = useRef<HTMLDivElement | null>(null);
    const isClickOutside = (modal: any, event: any): boolean => !modal.current.contains(event.target)
    const closeModalIfOutside = (event: Event) => { if (modal.current && isClickOutside(modal, event)) closeModal() }
    const addDocClickEvent = () => document.addEventListener('mousedown', closeModalIfOutside)
    const removeDocClickEvent = () => document.removeEventListener('mousedown', closeModalIfOutside)
    const wrapperStyles = {
        backgroundColor: "white"
    }
    useEffect(() => {
        addDocClickEvent()
        return ()=>removeDocClickEvent()
    })
    if(!show) return null
    return (
        <>
            <div className={`${style.overlay}`}>
                <div className={`${style.wrapper}`} ref={modal}>
                    <Wrapper style={wrapperStyles}>
                        {props.children}
                    </Wrapper>
                </div>
            </div>
        </>
    )
}

export default Modal;