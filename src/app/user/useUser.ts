import React from "react";
import getUser from "./api/getUser";
import { IUser } from './user';
const useUser = () => {
    let [user, setUser] = React.useState<IUser | null>({
        username: "anthonyfinix",
        password: "letmein"
    })
    const fetchUser = () => { }
    React.useEffect(() => {
    }, [])
    return user;
}

export default useUser;