import React from "react";
import Data from "./Data";
import { FaStar } from "react-icons/fa6";
import {
  HeroContainer,
  BookWrapper,
  BookBox,
  BookImage,
  BookName,
  BookAuthor,
  BoxFooter,
  BookRate,
} from "./HeroBooks";

function HeroBooks() {
  return (
    <>
      <HeroContainer>
        <BookWrapper>
          {Data.map((item, index) => (
            <BookBox key={index}>
              <BookImage src={item.image} />
              <BookName>{item.name}</BookName>
              <BookAuthor>{item.author}</BookAuthor>
              <BoxFooter>
                <FaStar style={{ color: "#fff", marginRight: "8px" }} />
                <BookRate>{item.rate} * {item.comments} ta fikrlar</BookRate>
              </BoxFooter>
            </BookBox>
          ))}
        </BookWrapper>
      </HeroContainer>
    </>
  );
}

export default HeroBooks;
