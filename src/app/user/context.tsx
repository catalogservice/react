import { createContext, FC } from "react"
import { IUser } from "./user";
import useUser from "./useUser";
export interface IUserContext {
    user: IUser | null
}
export const UserContext = createContext<IUserContext | null>(null);
const UserProvider: FC = (props) => {
    let user = useUser();
    const contextData: IUserContext = { user }
    return (
        <>
            <UserContext.Provider value={contextData}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider