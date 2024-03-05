import { FormEvent, useState } from "react";
import Field from "./Field";

import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { login, logout } from "../../store/reducers/user";


function LoginForm() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.logged);
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const [formValues, setFormValues] = useState({
    email: "bob@mail.io",
    password: "bobo",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formValues));
  };

  const handleChangeField = (name: "email" | "password") => (value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className='login-form'>
      {isLogged && (
        <div className='login-form-logged'>
          <p className='login-form-message'>{`Bienvenue ${pseudo}`}</p>
          <button
            type='button'
            className='login-form-button'
            onClick={() => dispatch(logout())}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form
          autoComplete='off'
          className='login-form-element'
          onSubmit={handleSubmit}
        >
          <Field
            placeholder='Adresse Email'
            onChange={handleChangeField("email")}
            value={formValues.email}
          />
          <Field
            type='password'
            placeholder='Mot de passe'
            onChange={handleChangeField("password")}
            value={formValues.password}
          />
          <button type='submit' className='login-form-button'>
            OK
          </button>
        </form>
      )}
    </div>
  );
}



export default LoginForm;
