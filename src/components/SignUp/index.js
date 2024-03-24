import React from "react";
import FormImg from "../Assets/signUp.png";
import {
  SignUpContainer,
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
} from "./SignUpElements";

function SignUp() {
  return (
    <>
      <SignUpContainer>
        <LeftSection>
          <Img src={FormImg} />
        </LeftSection>
        <FormElements>
          <FormHeader>
            <FormTitle>Sign up</FormTitle>
            <FormAccount>
              Already have an account?{" "}
              <NavbarLink to="/sign-in">Sign in</NavbarLink>
            </FormAccount>
          </FormHeader>
          <InputWrapper>
            <Textfield type="text" placeholder="First name" required />
            <Textfield type="text" placeholder="Last name" required />
            <Textfield type="tel" placeholder="Phone" required />
            <Textfield type="email" placeholder="Email" required />
            <Textfield type="password" placeholder="Password" required />
          </InputWrapper>
          <SubmitBtn>Next step</SubmitBtn>
        </FormElements>
      </SignUpContainer>
    </>
  );
}

export default SignUp;
