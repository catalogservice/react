import moreIcons from './more.svg';
const OptionButton = ({onClick,...props})=>{
    return (
        <div onClick={onClick}>
            <img src={moreIcons} alt="more"/>
        </div>
    )
}

export default OptionButton;