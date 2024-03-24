import React from "react";
import {
  SettingsContainer,
  SettingsHeading,
  CustomSelect,
  CustomSelectHeading,
  SwitchHeading,
  SwitchLabel,
  Switch,
  SwitchInput,
  Slider,
  Select,
  Option,
  FooterText,
} from "./Settings";
import {
  AccountHeaderPieces,
  AccountList,
  AccountWrapper,
  HeroWrapper,
  NumWrapper,
  PiecesMainText,
} from "../AccountSettings/AccountSettings";

function Settings() {
  return (
    <>
      <SettingsContainer>
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
          <HeroWrapper
            style={{
              paddingTop: "86px",
              paddingLeft: "247px",
              paddingRight: "244px",
            }}
          >
            <SettingsHeading>Settings </SettingsHeading>
            <CustomSelect>
              <CustomSelectHeading>Language</CustomSelectHeading>
              <Select>
                <Option value="0">English</Option>
                <Option value="1">Uzb</Option>
                <Option value="2">Rus</Option>
                <Option value="3">Turk</Option>
              </Select>
              <FooterText>Please enter your first name.</FooterText>
            </CustomSelect>
            <Switch>
              <SwitchHeading>Theme</SwitchHeading>
              <SwitchLabel>
                <SwitchInput type="checkbox" />
                <Slider />
              </SwitchLabel>
            </Switch>
          </HeroWrapper>
        </AccountWrapper>
      </SettingsContainer>
    </>
  );
}

export default Settings;
