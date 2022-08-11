import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  signINWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/filebase.util";

import SignUp from "../../components/signUp/SignUpForm.component";
import Button from "../../components/button/Button.component";

const SignIn = () => {
  useEffect(() => {
    async function fetchRedirectRes() {
      const response = await getRedirectResult(auth);
      if (response) {
        console.log(response, "response");
        createUserDocumentFromAuth(response.user);
      }
    }

    fetchRedirectRes();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonText="Sign in with Google Popup" buttonType="google" onClick={logGoogleUser}/>
      <button onClick={signINWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
