import { FC } from 'react';
import classes from './loading.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
const Loading: FC<any> = () => {
    return (
        <div className={`${classes.wrapper}`}>
            <CircularProgress />
        </div>
    )
}

export default Loading