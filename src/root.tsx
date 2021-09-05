import UserProvider from "./app/user/context";
import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from "./route";
import SnackbarProvider from "util/components/errorSnackbar";
function Root() {
  return (
    <>
      <Router>
        <SnackbarProvider>
          <UserProvider>
            <MainRoutes />
          </UserProvider>
        </SnackbarProvider>
      </Router>
    </>
  );
}

export default Root;
