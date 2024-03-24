import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;

export const LeftSection = styled.div`
  width: 50%;
  background-color: rgba(201, 172, 140, 0.93);
  padding: 100px 38px;
  height: 700px;
`;

export const Img = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

export const FormElements = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px 134px 136px 112px;
  background-color: #fff;
  height: 700px;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;

export const FormTitle = styled.h1`
  font-size: 36px;
  color: #000;
  margin-bottom: 10px;
`;

export const FormAccount = styled.p`
  font-size: 13px;
  color: #000;
`;

export const NavbarLink = styled(Link)`
  color: rgb(84, 159, 249);
`;

export const InputWrapper = styled.div`
  margin-bottom: 34px;
`;

export const Textfield = styled.input`
  display: block;
  width: 330px;
  padding: 16px 29px 10px;
  font-size: 1rem;
  font-weight: 400;
  color: #202020;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &::placeholder {
    color: rgb(170, 170, 170);
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #152540;
  border: none;
  border-radius: 99px;
  padding: 5px 20px;
  font-size: 18px;
  cursor: pointer;
`;
