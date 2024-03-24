import React from "react";
import FormImg from "../Assets/signIn.png";
import {
  SignInContainer,
  LeftSection,
  Img,
  FormElements,
  FormHeader,
  FormTitle,
  FormAccount,
  NavbarLink,
  InputWrapper,
  Textfield,
  SubmitBtn,
} from "./SignInElements";

function SignIn() {
  return (
    <>
      <SignInContainer>
        <LeftSection>
          <Img src={FormImg} />
        </LeftSection>
        <FormElements>
          <FormHeader>
            <FormTitle>Sign in</FormTitle>
            <FormAccount>
              Do not you have an account?{" "}
              <NavbarLink to="/sign-in">Sign up</NavbarLink>
            </FormAccount>
          </FormHeader>
          <InputWrapper>
            <Textfield type="email" placeholder="Email" required />
            <Textfield type="password" placeholder="Password" required />
          </InputWrapper>
          <SubmitBtn>Next step</SubmitBtn>
        </FormElements>
      </SignInContainer>
    </>
  );
}

export default SignIn;
