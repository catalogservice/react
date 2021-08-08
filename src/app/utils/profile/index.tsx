import classes from './profile.module.css';
import defaultThumbnail from '../../../img/default_profile.jpeg';
import { FC } from 'react';

const getProfileUrl = (image: string) => image ? image : defaultThumbnail;
const getSize = (size: string) => {
    switch (size) {
        case 'sm':
            return { width: 32, height: 32 }
        default:
            return { width: 40, height: 40 }
    }
}
const Profile: FC<any> = ({ style, image: imageURL, ...props }) => {
    let image = getProfileUrl(imageURL);
    let { width, height } = getSize(props.size);
    let styles = { backgroundImage: `url(${image})`, width, height }
    return (
        <div {...props} style={{ ...styles }} className={`${classes.wrapper}`}></div>
    )
}
export default Profile;

