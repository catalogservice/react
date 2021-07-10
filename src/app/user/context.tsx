import { createContext, FC } from "react"
import { IUser } from "./user";
export interface IUserContext {
    user: IUser | null
}
export const UserContext = createContext<IUserContext | null>(null);
import useUser from "./useUser";
const UserProvider: FC = () => {
    let user = useUser();
    const contextData: IUserContext = { user }
    return (
        <>
            <UserContext.Provider value={contextData}>

            </UserContext.Provider>
        </>
    )
}

export default UserProvider