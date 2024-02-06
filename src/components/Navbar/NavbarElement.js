import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import HeroBg from "../Assets/search.svg";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  z-index: 1;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavLogoWrapper = styled.div`
  display: block;
  margin-right: auto;
`;

export const NavLogo = styled(LinkR)`
  color: rgb(201, 172, 140);
  cursor: pointer;
  font-size: 25px;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  &:not(:last-child) {
    margin-right: 23.5px;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  &:not(:last-child) {
    padding-right: 0;
  }
  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-left: 170px;
`;

export const NavImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavVector = styled.div`
  margin-left: 11px;
  color: rgb(255, 255, 255, 0.5);
`;

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 1300px;
  z-index: 1;
  padding: 0 20px;
  margin-top: 55px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeroHeader = styled.div`
  background: url(HeroBg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align: center;
  padding: 40px 86px 36px 144px;
  box-shadow: 0 4px 77px 0 rgba(0, 0, 0, 25%);
  border-radius: 15px;
`;

export const HeroHeading = styled.h1`
  color: #c9ac8c;
  font-size: 31px;
  margin-bottom: 13px;
`;

export const HeroForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroInputWrapper = styled.div`
  width: 710px;
  padding: 5px 15px 5px 15px;
  background-color: #404040;
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;
  margin-right: 15px;
`;

export const HeroInput = styled.input`
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

export const HeroFormBtn = styled.button`
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

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const BtnText = styled.p`
  color: #3c2710;
  font-size: 16px;
  margin-left: 7px;
`;

export const HeroMain = styled.div`
  margin-top: 29px;
`;

export const MainText = styled.h1`
  color: #c9ac8c;
  font-size: 31px;
  margin-top: 0;
  margin-bottom: 21px;
`;

export const Categories = styled.ul`
  display: flex;
  align-items: center;
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

export const PersonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 42px;
  margin-bottom: 200px;
`;

export const PersonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: #1e1e1e;
  border-radius: 15px;
`;

export const PersonImage = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const PersonName = styled.h1`
  color: #c9ac8c;
  font-size: 20px;
  margin-top: 12px;
`;

export const PersonYear = styled.p`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export const BoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BookCount = styled.p`
  color: #fff;
  font-size: 16px;
  margin-right: 32px;
`;

export const AudioBook = styled.p`
  color: #fff;
  font-size: 16px;
`;
