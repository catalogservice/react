import Loading from "app/utils/loading";
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
                <div style={{ height: "100vh" }}>
                    {user ? props.children : <Loading />}

                </div>
            </UserContext.Provider>
        </>
    )
}

export default UserProvider