import React from "react";
import http from "util/axios";
import getUser from "./api/getUser";
import { IUser } from './user';
import config from '../../config'
const useUser = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<any | null>(null);
    const fetchUser = () => {
        let accessToken = localStorage.getItem(config.localStorage_access_key);
        if (accessToken) {
            return http.get('/user/login', { headers: { Authorization: `Bearer ${accessToken}` } }).then(response => console.log(response.data))
        }
    };
    React.useEffect(() => {
        fetchUser()
    }, [])
    return { user, isLoading, setUser };
}

export default useUser;