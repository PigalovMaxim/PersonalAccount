import { useState } from "react";
import { loginRequest, registrationRequest } from "../../other/server";
import { login } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { InputComponent } from "../InputComponent/InputComponent";
import { BUTTON_TYPES } from '../../other/types';
import s from "./AuthComponent.module.scss";

export function AuthComponent() {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isLoginForm, setLoginForm] = useState<boolean>(false);
  const dispatch = useDispatch();
  async function loginClickHandler() {
    const result = await loginRequest(loginValue, passwordValue);
    if(result) {
      localStorage.setItem('isLogin', 'true');
      dispatch(login()); 
    }
  }
  async function registrationClickHandler() {
    const result = await registrationRequest(loginValue, passwordValue);
    if(result) {
      localStorage.setItem('isLogin', 'true');
      setLoginForm(true); 
    }
  }
  return (
    <section className={s.wrapper}>
      <div className={s.form}>
        <h1 className={s.title}>{isLoginForm ? "Авторизация" : "Регистрация"}</h1>
        <InputComponent
          changeEvent={setLoginValue}
          text="Логин"
          value={loginValue}
        />
        <InputComponent
          changeEvent={setPasswordValue}
          text="Пароль"
          value={passwordValue}
        />
        <ButtonComponent
          clickEvent={isLoginForm ? loginClickHandler : registrationClickHandler}
          type={BUTTON_TYPES.standart}
          text={isLoginForm ? "Авторизоваться" : "Зарегистрироваться"}
        />
        <ButtonComponent
          clickEvent={() => setLoginForm(!isLoginForm)}
          type={BUTTON_TYPES.withoutBorders}
          text={isLoginForm ? "Регистрация" : "Авторизация"}
        />
      </div>
    </section>
  );
}
