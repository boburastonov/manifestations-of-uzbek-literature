import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
    IntroContainer,
  IntroHeader,
  IntroHeading,
  IntroForm,
  IntroInputWrapper,
  IntroInput,
  IntroFormBtn,
  BtnText,
  MainText,
  Categories,
  CategoriesItem,
} from "./IntroElements";

function IntroElements() {
  return (
    <>
      <IntroContainer>
        <IntroHeader>
          <IntroHeading>Qidirish</IntroHeading>
          <IntroForm>
            <IntroInputWrapper>
              <IntroInput placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
            </IntroInputWrapper>
            <IntroFormBtn>
              <BiSearchAlt style={{ width: "24px", height: "24px" }} />
              <BtnText>Izlash</BtnText>
            </IntroFormBtn>
          </IntroForm>
        </IntroHeader>

        <MainText>Asosiy kategoriyalar</MainText>
        <Categories>
          <CategoriesItem>Temuriylar davri</CategoriesItem>
          <CategoriesItem>Jadid adabiyoti </CategoriesItem>
          <CategoriesItem>Sovet davri</CategoriesItem>
          <CategoriesItem>Mustaqillik davri</CategoriesItem>
        </Categories>
      </IntroContainer>
    </>
  );
}

export default IntroElements;
