import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const AccountHeaderPieces = styled.li`
  display: flex;
  align-items: center;
  width: 297px;
  padding: 23px;
  background-color: #f3f6f9;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const NumWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
  color: #3699ff;
  background-color: #e5eaee;
`;

export const PiecesMainText = styled.p`
  color: rgb(70, 78, 95);
  font-size: 14px;
`;

export const HeroWrapper = styled.div`
  background-color: #fff;
  padding-bottom: 142px;
`;

export const AccountSettingsForm = styled.form`
  width: 712px;
  display: flex;
  flex-direction: column;
  padding-top: 86px;
  margin-left: auto;
  margin-right: auto;
`;

export const SettingsHeading = styled.p`
  font-size: 18px;
  color: rgb(33, 33, 33);
  margin-bottom: 32px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 22px;
`;

export const AccountSettingsFormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 89px;
  border-bottom: 1px solid rgb(236, 240, 243);
  ${InputWrapper} {
    width: 48%;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  color: #464e5f;
  margin-bottom: 7px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #464e5f;
  background-color: #f3f6f9;
  border-radius: 4px;
  border: 0;
  outline: none;
  margin-bottom: 3px;
`;

export const FormText = styled.p`
  font-size: 12px;
  color: #b5b5c3;
`;

export const SubmitBtn = styled.button`
  width: 142px;
  margin-left: auto;
  padding: 11px 23px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  background-color: #152540;
`;
