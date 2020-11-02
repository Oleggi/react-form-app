import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import s from "./LoginForm.module.css";
import { logInUser } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Input } from "../common/formControllers/FormControls";
import { required, maxLength, minLength } from "../../Utils/formValidators";
import { Redirect } from "react-router-dom";

const maxLength20 = maxLength(20);
const minLength6 = minLength(8);

const LoginContainer = (props) => {
  const onSubmit = (loginData, dispatch) => {
    let { email, password } = loginData;
    props.logInUser(email, password);
    dispatch(reset("login"));
  };
  if (props.isAuth) {
    return <Redirect to={`/users/${props.currentPage}`} />;
  }

  return (
    <div className={s.container} class="text-center">
      <LoginReduxForm onSubmit={onSubmit} props={props} />
    </div>
  );
};

const LoginForm = ({logInUser, onSubmit, handleSubmit, error = null}) => {
  return (
        <form onSubmit={handleSubmit} className={s.formSignin}>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="email" class="sr-only">Email address</label>
        <Field
          className={s.formControl}
          name="email"
          component={Input}
          validate={[required, maxLength20, minLength6]}
          type="email"
          placeholder="login"
        />
        <label for="password" class="sr-only">Password</label>
        <Field
          className={s.formControl}
          name="password"
          component={Input}
          validate={[required, maxLength20, minLength6]}
          type="password"
          placeholder="password"
        />
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>

      
      {error && <div className={s.commonError}>{error}</div>}
    </form>
  );
};


const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  currentPage: state.usersPage.page
});

export default connect(mapStateToProps, { logInUser })(LoginContainer);
