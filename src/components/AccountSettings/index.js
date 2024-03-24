import React from "react";
import {
  AccountContainer,
  AccountWrapper,
  AccountList,
  AccountHeaderPieces,
  NumWrapper,
  PiecesMainText,
  HeroWrapper,
  AccountSettingsForm,
  SettingsHeading,
  AccountSettingsFormFooter,
  InputWrapper,
  Label,
  Input,
  FormText,
  SubmitBtn,
} from "./AccountSettings";

function AccountSettings() {
  return (
    <>
      <AccountContainer>
        <AccountWrapper>
          <AccountList>
            <AccountHeaderPieces>
              <NumWrapper>1</NumWrapper>
              <PiecesMainText>My account</PiecesMainText>
            </AccountHeaderPieces>
            <AccountHeaderPieces>
              <NumWrapper>2</NumWrapper>
              <PiecesMainText>Security</PiecesMainText>
            </AccountHeaderPieces>
            <AccountHeaderPieces>
              <NumWrapper>3</NumWrapper>
              <PiecesMainText>Settings</PiecesMainText>
            </AccountHeaderPieces>
          </AccountList>
          <HeroWrapper>
            <AccountSettingsForm>
              <SettingsHeading>
                Change Or Recover Your Password:
              </SettingsHeading>
              <InputWrapper>
                <Label>Email</Label>
                <Input type="email" placeholder="admin@mail.ru" required />
                <FormText>Please enter your email address.</FormText>
              </InputWrapper>
              <InputWrapper>
                <Label>Current password</Label>
                <Input type="password" placeholder="*********" required />
                <FormText>Please enter your password.</FormText>
              </InputWrapper>
              <AccountSettingsFormFooter>
                <InputWrapper>
                  <Label>New Password</Label>
                  <Input type="password" required />
                  <FormText>Please enter your new password.</FormText>
                </InputWrapper>
                <InputWrapper>
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="********" required />
                  <FormText>Please confirm your new password</FormText>
                </InputWrapper>
              </AccountSettingsFormFooter>
              <SubmitBtn type="submit">Save Changes</SubmitBtn>
            </AccountSettingsForm>
          </HeroWrapper>
        </AccountWrapper>
      </AccountContainer>
    </>
  );
}

export default AccountSettings;
