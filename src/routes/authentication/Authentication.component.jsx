import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";
import {
  createUserDocumentFromAuth,
  auth,
} from "../../utils/filebase.util";

import "./authentication.style.scss";

import SignUpForm from "../../components/signUp/SignUpForm.component";
import SignInForm from "../../components/signIn/SignInForm.component";

const Authentication = () => {
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

 
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
