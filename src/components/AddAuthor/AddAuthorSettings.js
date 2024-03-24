import { styled } from "styled-components";

export const UpdateBookImage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 126px 100px 169px 100px;
  background-color: rgba(243, 243, 243, 0.93);
`;

export const Img = styled.img`
  width: 350px;
  margin-bottom: 23px;
`;

export const AuthorName = styled.h1`
  color: #000;
  font-size: 24px;
  margin-bottom: 36px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 82px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  outline: none;
  margin-bottom: 45px;
  padding: 10px;
  &::placeholder {
    color: #aaaaaa;
  }
`;
