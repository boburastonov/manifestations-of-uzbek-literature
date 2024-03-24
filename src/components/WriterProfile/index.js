import React from "react";
import { FiCamera } from "react-icons/fi";
import Avatar from "../Assets/avatar.png";
import {
  WriterProfileContainer,
  WriterProfileWrapper,
  WriterProfileList,
  WriterProfileHeaderPieces,
  NumWrapper,
  SectionText,
  PiecesMainText,
  PiecesAddtnText,
  WriterProfileHero,
  AvatarWrapper,
  Img,
  IconWrapper,
  ProfileSettingsForm,
  SettingsHeading,
  ProfileSettingsFormFooter,
  InputWrapper,
  Label,
  Input,
  FormText,
  SubmitBtn,
} from "./WriterProfileElements";

function WriterProfile() {
  return (
    <>
      <WriterProfileContainer>
        <WriterProfileWrapper>
          <WriterProfileList>
            <WriterProfileHeaderPieces>
              <NumWrapper>1</NumWrapper>
              <PiecesMainText>My account</PiecesMainText>
            </WriterProfileHeaderPieces>
            <WriterProfileHeaderPieces>
              <NumWrapper>2</NumWrapper>
              <PiecesMainText>Security</PiecesMainText>
            </WriterProfileHeaderPieces>
            <WriterProfileHeaderPieces>
              <NumWrapper>3</NumWrapper>
              <SectionText>
                <PiecesMainText>Make Payment</PiecesMainText>
                <PiecesAddtnText>Add Payment Options</PiecesAddtnText>
              </SectionText>
            </WriterProfileHeaderPieces>
          </WriterProfileList>
          <WriterProfileHero>
            <AvatarWrapper>
              <Img src={Avatar} />
              <IconWrapper>
                <FiCamera style={{ color: "#464E5F" }} />
              </IconWrapper>
            </AvatarWrapper>
            <ProfileSettingsForm>
              <SettingsHeading>My profile</SettingsHeading>
              <InputWrapper>
                <Label>First Name</Label>
                <Input
                  type="text"
                  placeholder="John"
                  required
                />
                <FormText>
                  Please enter your first name.
                </FormText>
              </InputWrapper>
              <InputWrapper>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  placeholder="Wick"
                  required
                />
                <FormText>
                  Please enter your last name.
                </FormText>
              </InputWrapper>
              <ProfileSettingsFormFooter>
                <InputWrapper>
                  <Label class>Phone</Label>
                  <Input
                    type="tel"
                    placeholder="+61412345678"
                    required
                  />
                  <FormText>
                    Please enter your phone number.
                  </FormText>
                </InputWrapper>
                <InputWrapper>
                  <Label class>Email</Label>
                  <Input
                    type="email"
                    placeholder="john.wick@reeves.com"
                    required
                  />
                  <FormText>
                    Please enter your email address.
                  </FormText>
                </InputWrapper>
              </ProfileSettingsFormFooter>
              <SubmitBtn type="submit">Save Changes</SubmitBtn>
            </ProfileSettingsForm>
          </WriterProfileHero>
        </WriterProfileWrapper>
      </WriterProfileContainer>
    </>
  );
}

export default WriterProfile;
