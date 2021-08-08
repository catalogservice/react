import { FC, SyntheticEvent, useContext, useRef, useState } from "react";
import { UserContext } from "app/user/context";
import Dropdown from "app/utils/dropdown";
import List from "app/utils/list";
import Profile from "app/utils/profile";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import style from './header.module.css';
import UserDialog from "./userDialog";
const MainHeader: FC<any> = (props) => {
    const userContext = useContext(UserContext);
    const userProfileRef = useRef(null);
    const [isUserDialogOpen, setIsUserDialogOpen] = useState<boolean>(false);
    const handleUserDialogClose = () => setIsUserDialogOpen(false);
    const openUserDialog = () => setIsUserDialogOpen(true);
    const [selectedRowElement, setSelectedRowElement] = useState<any | null>(null);
    const handleProfileClick = (e: SyntheticEvent) => setSelectedRowElement(e.currentTarget);
    return (
        <>
            <AppBar id="header" position="static" className={`${style.appBar} px-md`}>
                <Box display="flex" alignItems="center">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={style.brand_name} variant="h6">Catalog</Typography>
                    <div ref={userProfileRef} className={`${style.profile_wrapper}`} onClick={handleProfileClick}>
                        {/* <div className={`${style.profile_name_wrapper}`}>
                    <p className={`${style.profile_first_name}`}>Anthony</p>
                    <p  className={`${style.profile_last_name}`}>Finix</p>
                </div> */}
                        <Profile onClick={openUserDialog} size="sm" image={userContext?.user?.user_profile} />
                    </div>
                </Box>
            </AppBar>
            <UserDialog open={isUserDialogOpen} el={userProfileRef.current} handleClose={handleUserDialogClose} />
        </>
    )
}

export default MainHeader