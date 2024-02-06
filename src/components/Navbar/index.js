import React, { Fragment } from "react";
import Data from "./Data";
import {
  Nav,
  NavContainer,
  NavLogoWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavAuthor,
  NavImg,
  NavVector,
  HeroContainer,
  HeroHeader,
  HeroHeading,
  HeroForm,
  HeroInputWrapper,
  HeroInput,
  HeroFormBtn,
  SearchIcon,
  BtnText,
  HeroMain,
  MainText,
  Categories,
  CategoriesItem,
  PersonWrapper,
  PersonBox,
  PersonImage,
  PersonName,
  PersonYear,
  BoxFooter,
  BookCount,
  AudioBook,
} from "./NavbarElement";
import AvatarImg from "../Assets/avatar.png";
import DownArrow from "../Assets/downArrow.svg";

function Navbar({ placeholder }) {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogoWrapper>
            <NavLogo to="/">Badiiyat</NavLogo>
          </NavLogoWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Bosh sahifa</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="nasr">Nasr</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="nazm">Nazm</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="maqolalar">Maqolalar</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="forum">Forum</NavLinks>
            </NavItem>
          </NavMenu>
          <NavAuthor>
            <NavImg src={AvatarImg} />
            <NavVector src={DownArrow} />
          </NavAuthor>
        </NavContainer>
      </Nav>
      <HeroContainer>
        <HeroHeader>
          <HeroHeading>Qidirish</HeroHeading>
          <HeroForm>
            <HeroInputWrapper>
              <HeroInput placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
            </HeroInputWrapper>
            <HeroFormBtn>
              <SearchIcon />
              <BtnText>Izlash</BtnText>
            </HeroFormBtn>
          </HeroForm>
        </HeroHeader>
        <HeroMain>
          <MainText>Asosiy kategoriyalar</MainText>
          <Categories>
            <CategoriesItem>Temuriylar davri</CategoriesItem>
            <CategoriesItem>Jadid adabiyoti </CategoriesItem>
            <CategoriesItem>Sovet davri</CategoriesItem>
            <CategoriesItem>Mustaqillik davri</CategoriesItem>
          </Categories>
          <PersonWrapper>
            {Data.map((item, index) => (
              <PersonBox  key={index}>
                  <PersonImage src={item.image} />
                  <PersonName>{item.name}</PersonName>
                  <PersonYear>1878-1934</PersonYear>
                  <BoxFooter>
                    <BookCount>34</BookCount>
                    <AudioBook>13</AudioBook>
                  </BoxFooter>
              </PersonBox>
            ))}
          </PersonWrapper>
        </HeroMain>
      </HeroContainer>
    </>
  );
}

export default Navbar;
