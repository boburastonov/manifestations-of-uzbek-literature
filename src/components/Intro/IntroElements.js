import { styled } from "styled-components";
import HeroBg from "../Assets/heroBg.png";

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: url(${HeroBg});
  background-repeat: no-repeat;
  background-position: 20px 55px;
  background-size: 1260px;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  padding-top: 350px;
  margin-right: auto;
  margin-left: auto;
  z-index: 999;
`;

export const IntroHeader = styled.div`
  padding: 40px 86px 36px 144px;
  box-shadow: 0 4px 77px 0 rgba(0, 0, 0, 25%);
  border-radius: 15px;
  z-index: 999;
`;

export const IntroHeading = styled.h1`
  color: #c9ac8c;
  font-size: 31px;
  margin-bottom: 13px;
`;

export const IntroForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroInputWrapper = styled.div`
  width: 710px;
  padding: 5px 15px 5px 15px;
  background-color: #404040;
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;
  margin-right: 15px;
`;

export const IntroInput = styled.input`
  width: 300px;
  color: #fff;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: 0;
  font-size: 16px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const IntroFormBtn = styled.button`
  display: flex;
  align-items: center;
  width: 160px;
  padding: 12px 37px;
  border-radius: 15px;
  background-color: #c9ac8c;
  border: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const BtnText = styled.p`
  color: #3c2710;
  font-size: 16px;
  margin-left: 7px;
`;

export const MainText = styled.h1`
  color: #c9ac8c;
  font-size: 31px;
  margin-top: 29px;
  margin-bottom: 21px;
`;

export const Categories = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CategoriesItem = styled.li`
  padding: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 49px;
  }
`;
