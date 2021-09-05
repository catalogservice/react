import { FC, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "app/utils/Input";
import Button from "app/utils/Button";
import { username, password } from "./login";
import Paper from "@material-ui/core/Paper";
import style from './login.module.css';
import login_primary from '../../../img/logo_primary.svg';
import TextField from "@material-ui/core/TextField";
import login from '../api/login';
import Wrapper from "app/utils/wrapper";
import { SnackbarContext } from "util/components/errorSnackbar";
import { UserContext } from "../context";

const Login: FC<any> = () => {
    const history = useHistory()
    const { setError } = useContext(SnackbarContext);
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleUsernameChange = (e: any) => setUsername(e.target.value)
    const handlePasswordChange = (e: any) => setPassword(e.target.value)
    const handleLoginClick = async () => {
        login(username, password).then(response => {
            if ((typeof response.data) === 'string') return setError(response.data)
            setUser(response.data);
            history.push('/')
        })
    }
    return (
        <article id="login-wrapper" className={`${style.wrapper}`}>
            <div className={style.brand_wrapper}>
                <img className={`${style.logo} mr-sm`} src={login_primary} alt="" />
                <h3 className={`${style.brand_name}`}>Catalog</h3>
            </div>
            <Wrapper className={`px-lg py-md`}>
                <h5 className="my-0 text-center">LOGIN</h5>
                <div className={`${style.input_wrapper} my-lg`}>
                    <TextField value={username} onChange={handleUsernameChange} fullWidth label="username" variant="outlined" size="small" />
                </div>
                <div className={`${style.input_wrapper} my-lg`}>
                    <TextField value={password} onChange={handlePasswordChange} fullWidth label="password" variant="outlined" size="small" type="password" />
                </div>
                <div className={style.action_wrapper}>
                    <Button type="primary" onClick={handleLoginClick} >Login</Button>
                    <small className="mt-2 text-center">
                        does not have user credentials?  <Link className=" mb-4" to="/register"><small className="mt-1">Register now</small></Link>
                    </small>
                </div>
            </Wrapper>
        </article>
    )
}

export default Login;