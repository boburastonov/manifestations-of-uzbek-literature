import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
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
  position: relative;
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
  cursor: pointer;
`;

export const NavImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavVector = styled.div`
  margin-left: 11px;
  color: rgb(255, 255, 255, 0.5);
`;
