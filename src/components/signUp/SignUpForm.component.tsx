import "./signUpForm.style.scss";

import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInput.component";
import Button from "../button/Button.component";
import { signUpStart } from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPasswrod: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPasswrod } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPasswrod) {
      alert("password do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      setFormFields(defaultFormFields);
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("email had been used");
      } else {
        console.log("createAuthUserWithEmailAndPassword", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have a count?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          type="text"
          name="displayName"
          id="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="ConfirmPasswrod"
          type="password"
          name="confirmPasswrod"
          onChange={handleChange}
          value={confirmPasswrod}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
