import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Input from "app/utils/Input";
import Button from "app/utils/Button";
import Wrapper from "app/utils/wrapper";
import style from './register.module.css';
import login_primary from '../../../img/logo_primary.svg';
import Textarea from "app/utils/textarea";
export enum REGISTER_STEP {
    "first" = 1,
    "second"
}
const CreateUserCompany: FC<any> = () => {
    const [step, setStep] = useState<REGISTER_STEP>(1);
    const [username, setUsername] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    const handleUsernameChange = (e: any) => { setUsername(e.currentTarget.value) }
    const handlePasswordChange = (e: any) => { setPassword(e.currentTarget.value) }
    const handleLoginClick = () => { }
    const getStep = (step: number) => {
        switch (step) {
            case 1:
                return step1
            case 2:
                return step2
            default:
                return step1
        }
    }
    const handleUserRegistrationState = ()=>setStep(2);

    const step1 = <Wrapper className={`px-lg`}>
        <h5 className="my-0 text-left">REGISTER</h5>
        <div className={style.row}>
            <div className={`${style.input_wrapper} mt-lg mb-md`}>
                <small>first name</small>
                <Input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div className={`${style.input_wrapper} mt-lg mb-md`}>
                <small>middle name</small>
                <Input type="text" value={password} onChange={handlePasswordChange} />
            </div>
            <div className={`${style.input_wrapper} mt-lg mb-md`}>
                <small>last name</small>
                <Input type="text" value={password} onChange={handlePasswordChange} />
            </div>
        </div>
        <p>Credentials</p>
        <div className={style.row}>
            <div className={`${style.input_wrapper} mb-lg`}>
                <small>username</small>
                <Input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div className={`${style.input_wrapper} mb-lg`}>
                <small>password</small>
                <Input type="text" value={password} onChange={handlePasswordChange} />
            </div>
            <div className={`${style.input_wrapper} mb-lg`}>
                <small>confirm password</small>
                <Input type="text" value={password} onChange={handlePasswordChange} />
            </div>
        </div>
        <div className={style.action_wrapper}>
            <Button type="primary" onClick={handleUserRegistrationState} >next</Button>
            <small className="mt-2 text-center">
                already registered?  <Link className=" mb-4" to="/login"><small className="mt-1">login</small></Link>
            </small>
        </div>
    </Wrapper>
    const step2 = <Wrapper className={`px-lg`}>
        <h5 className="my-0 text-left">REGISTER</h5>
        <div className={style.row}>
            <div className={`${style.input_wrapper} mt-lg mb-md`}>
                <small>email</small>
                <Input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div className={`${style.input_wrapper} mt-lg mb-md`}>
                <small>primary number</small>
                <Input type="text" value={password} onChange={handlePasswordChange} />
            </div>
            <div className={`${style.input_wrapper} mt-lg mb-md`}>
                <small>secondary number</small>
                <Input type="text" value={password} onChange={handlePasswordChange} />
            </div>
        </div>
        <div className={style.row}>
            <div>
                <div className={`${style.input_wrapper} mb-lg`}>
                    <small>address</small>
                    <Textarea rows="6" type="text" value={username} onChange={handleUsernameChange} />
                </div>
            </div>
            <div>
                <div className={`${style.input_wrapper} mb-md`}>
                    <small>city</small>
                    <Input type="text" value={password} onChange={handlePasswordChange} />
                </div>
                <div className={`${style.input_wrapper} mb-lg`}>
                    <small>state</small>
                    <Input type="text" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
            <div>
                <div className={`${style.input_wrapper} mb-lg`}>
                    <small>country</small>
                    <Input type="text" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
        </div>
        <div className={style.action_wrapper}>
            <Button type="primary" onClick={handleLoginClick} >login</Button>
            <small className="mt-2 text-center">
                already registered?  <Link className=" mb-4" to="/login"><small className="mt-1">login</small></Link>
            </small>
        </div>
    </Wrapper>
    return (
        <article id="login-wrapper" className={style.wrapper}>
            <div className={style.brand_wrapper}>
                <img className={`${style.logo} mr-sm`} src={login_primary} alt="" />
                <h3 className={`${style.brand_name}`}>Catalog</h3>
            </div>
            {getStep(step)}
        </article>
    )

}

export default CreateUserCompany;