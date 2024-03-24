import { styled } from "styled-components";

export const BookSettingsContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
`;

export const UpdateBookImage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 124px 44px 124px;
  background-color: rgba(243, 243, 243, 0.93);
`;

export const Img = styled.img`
  width: 300px;
  margin-bottom: 14px;
`;

export const BookName = styled.h1`
  color: #000;
  font-size: 24px;
  margin-bottom: 17px;
`;

export const ImageUpdateBtn = styled.button`
  width: 328px;
  height: 46px;
  padding: 5px 20px;
  border: none;
  border-radius: 99px;
  color: #fff;
  background-color: #152540;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const AddBookSettingsForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 49px 138px 98px 108px;
`;

export const SectionHeading = styled.h1`
  font-size: 36px;
  color: #000;
  margin-bottom: 22px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  margin-bottom: 17px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  outline: none;
  font-weight: 500;
  padding: 15px 29px 11px 29px;
  &::placeholder {
    color: #aaaaaa;
  }
`;

export const CreateBtn = styled.button`
  width: 328px;
  height: 46px;
  padding: 5px 20px;
  border: none;
  border-radius: 99px;
  color: #fff;
  background-color: #152540;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;
