import classes from './userDialog.module.scss';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Paper from "@material-ui/core/Paper";
import InboxIcon from "@material-ui/icons/Inbox";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import { FC } from "react";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const UserDialog: FC<any> = ({ open, el, handleClose, ...props }) => {
    return (
        <Popper open={open} anchorEl={el}>
            <ClickAwayListener onClickAway={handleClose}>
                <Paper>
                    <List className={`${classes.list_wrapper}`} component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                    </List>
                </Paper>
            </ClickAwayListener>
        </Popper>
    )
}

export default UserDialog;