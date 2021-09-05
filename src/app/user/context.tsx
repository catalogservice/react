import Loading from "app/utils/loading";
import { createContext, FC, useEffect } from "react"
import useUser from "./useUser";
export const UserContext = createContext<any | null>(null);
const UserProvider: FC = (props) => {
    let { user, isLoading,setUser } = useUser();
    return (
        <>
            <UserContext.Provider value={{ user,setUser }}>
                <div style={{ height: "100vh" }}>
                    {!isLoading ? props.children : <Loading />}
                </div>
            </UserContext.Provider>
        </>
    )
}

export default UserProvider