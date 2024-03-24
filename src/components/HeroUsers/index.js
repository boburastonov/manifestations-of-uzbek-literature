import React from "react";
import { FiBook } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";

import Data from "./Data";
import {
  HeroContainer,
  PersonWrapper,
  PersonBox,
  PersonImage,
  PersonName,
  PersonYear,
  BoxFooter,
  BookCount,
  AudioBook,
} from "./HeroUsers";

function HeroUsers() {
  return (
    <>
      <HeroContainer>
          <PersonWrapper>
            {Data.map((item, index) => (
              <PersonBox key={index}>
                <PersonImage src={item.image} />
                <PersonName>{item.name}</PersonName>
                <PersonYear>1878-1934</PersonYear>
                <BoxFooter>
                  <FiBook style={{ color: "#fff", marginRight: "8px" }} />
                  <BookCount>34</BookCount>
                  <BiHeadphone style={{ color: "#fff", marginRight: "8px" }} />
                  <AudioBook>13</AudioBook>
                </BoxFooter>
              </PersonBox>
            ))}
          </PersonWrapper>
      </HeroContainer>
    </>
  );
}

export default HeroUsers;
