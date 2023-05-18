import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import stylesBtn from "../Forms/Button.module.css";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Login</Button>
        )}
        <Error error={error && "Incorrect data."} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Did you lose your password?
      </Link>
      <div className={styles.signIn}>
        <h2 className={styles.subtitle}>Sign in</h2>
        <p>Haven't done your account yet? Click here to make an account.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Sign in
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
