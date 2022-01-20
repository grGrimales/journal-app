import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/UseForm";
import validator from "validator";
import { removeError, setError } from "../actions/ui";
import { startRegisterWithEmailPasswordName } from "../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "grediana",
    email: "grediana@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (IsformValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const IsformValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is requered"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email no es valido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Contraseñas no coinciden"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input mt-1"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className="auth__input mt-1"
        />

        <input
          type="password"
          placeholder="Password"
          name="password2"
          className="auth__input mt-1"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
