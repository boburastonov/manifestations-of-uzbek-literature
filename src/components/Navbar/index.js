
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
} from "./NavbarElement";

import AvatarImg from "../Assets/avatar.png";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogoWrapper>
            <NavLogo to="/">Badiiyat</NavLogo>
          </NavLogoWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Bosh sahifa</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/nasr">Nasr</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/nazm">Nazm</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/maqolalar">Maqolalar</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/forum">Forum</NavLinks>
            </NavItem>
          </NavMenu>
          <NavAuthor>
            <NavImg src={AvatarImg} />
            <IoIosArrowDown
              style={{
                color: "rgba(255, 255, 255, .5)",
                width: "15px",
                marginLeft: "12px",
              }}
            />
          </NavAuthor>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;
