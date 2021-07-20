import UserProvider from "./app/user/context";
import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from "./route";
function Root() {
  return (
    <>
      <Router>
        <UserProvider>
          <MainRoutes/>
        </UserProvider>
      </Router>
    </>
  );
}

export default Root;
