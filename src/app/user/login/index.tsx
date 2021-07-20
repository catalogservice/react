import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Input from "app/utils/Input";
import Button from "app/utils/Button";
import { username, password } from "./login";
import Wrapper from "app/utils/wrapper";
import style from './login.module.css';
import login_primary from '../../../img/logo_primary.svg';

const Login: FC<any> = () => {
    const [username, setUsername] = useState<username>("");
    const [password, setPassword] = useState<password>("");
    const handleUsernameChange = (e: any) => { setUsername(e.currentTarget.value) }
    const handlePasswordChange = (e: any) => { setPassword(e.currentTarget.value) }
    const handleLoginClick = () => { }
    return (
        <article id="login-wrapper" className={style.wrapper}>
            <div className={style.brand_wrapper}>
                <img className={`${style.logo} mr-sm`} src={login_primary} alt="" />
                <h3 className={`${style.brand_name}`}>Catalog</h3>
            </div>
            <Wrapper className={`px-lg`}>
                <h5 className="my-0 text-center">LOGIN</h5>
                <div className={`${style.input_wrapper} my-lg`}>
                    <small>username</small>
                    <Input type="number" value={username} onChange={handleUsernameChange} />
                </div>
                <div className={`${style.input_wrapper} my-lg`}>
                    <small>password</small>
                    <Input type="password" value={password} onChange={handlePasswordChange} />
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