import style from "./th.module.css";
const Th = ({ ...props }) => {
    return <th {...props} className={`${style.th} ${style.cell}`}>{props.children}</th>
}
export default Th;