import style from "./tr.module.css";
const Tr = ({ ...props }) => {
    return (
        <tr {...props} className={`${style.tr}`} >{props.children}</tr>
    )
}

export default Tr;