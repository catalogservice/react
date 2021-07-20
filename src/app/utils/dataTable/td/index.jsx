import style from "./td.module.css";
const Td = ({...props }) => {
    return (
        <td className={`${style.td} ${style.cell}`}>{props.children}</td>
    )
}

export default Td;