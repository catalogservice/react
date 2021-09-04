import React from "react";
import http from "util/axios";
import getUser from "./api/getUser";
import { IUser } from './user';
const useUser = () => {
    let [user, setUser] = React.useState<IUser | null>({
        role: "admin",
        first_name: "anthony",
        last_name: "finix",
        username: "anthonyfinix",
        user_profile: "https://lh3.googleusercontent.com/ogw/ADea4I7q7EI2GY_zB3l8pKLNMyK5rn-DYKd3PxQHujiuPws=s32-c-mo",
        primary_number: '9818031042',
        secondary_number: '9818031043',
        address: "2190/7a",
        state: "haryana",
        city: "faridabad",
        country: "india",
        email: "anthonyfinix@gmail.com"
    })
    const fetchUser = () => http.get('/login').then(response => console.log(response.data));
    React.useEffect(() => {
        fetchUser()
    }, [])
    return user;
}

export default useUser;