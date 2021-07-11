import UserProvider from "./app/user/context";
import { BrowserRouter as Router } from 'react-router-dom'
import App from "app";
function Root() {
  return (
    <>
      <Router>
        <UserProvider>
          <App/>
        </UserProvider>
      </Router>
    </>
  );
}

export default Root;
