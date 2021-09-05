import Snackbar from "@material-ui/core/Snackbar";
import React from "react"

export const SnackbarContext = React.createContext<any>({})

const SnackbarProvider: React.FC = (props) => {
    const [snackBarError, setSnackBarError] = React.useState<string | null>(null);
    const setError = (error: string) => {
        setSnackBarError(error)
        setTimeout(() => setSnackBarError(null), 3000)
    }
    return (
        <SnackbarContext.Provider value={{ setError }}>
            {props.children}
            <Snackbar open={!!snackBarError} message={snackBarError} />
        </SnackbarContext.Provider>
    )
}
export default SnackbarProvider