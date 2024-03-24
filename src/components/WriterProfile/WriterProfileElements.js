import styled from "styled-components";

export const WriterProfileContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const WriterProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterProfileList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const WriterProfileHeaderPieces = styled.li`
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

export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PiecesMainText = styled.p`
  color: rgb(70, 78, 95);
  font-size: 14px;
`;

export const PiecesAddtnText = styled.p`
  color: #464e5f;
  font-size: 13px;
`;

export const WriterProfileHero = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;

export const AvatarWrapper = styled.div`
  width: 175px;
  height: 175px;
  align-self: flex-start;
  margin: 43px 100px 10px 92px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f6f9;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  bottom: -14px;
  right: 6px;
  cursor: pointer;
`;

export const ProfileSettingsForm = styled.form`
  width: 712px;
  display: flex;
  flex-direction: column;
  margin-top: 86px;
`;

export const SettingsHeading = styled.p`
  font-size: 18px;
  color: rgb(33, 33, 33);
  margin-bottom: 32px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 22px;
`;

export const ProfileSettingsFormFooter = styled.div`
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
  margin-bottom: 142px;
`;
