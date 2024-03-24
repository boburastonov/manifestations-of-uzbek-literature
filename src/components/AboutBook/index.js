import React from "react";
import Data from "./Data";
import BookImg from "../Assets/book-image.png";
import { FaStar } from "react-icons/fa6";
import { IoArrowDown } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

import {
  AboutBookContainer,
  Top,
  TopText,
  FooterTop,
  BottomFooter,
  BookQuotesItem,
  ItemIcons,
  BookQuotes,
  Bottom,
  BottomHeader,
  BottomHeaderList,
  BottomHeaderItem,
  BottomHeaderLink,
  ImgWrapper,
  Img,
  BookInfo,
  BookNm,
  AuthorAndRate,
  BookAuthor,
  BookRt,
  Counts,
  CountsItem,
  Count,
  MiddleLine,
  Line,
  AboutBookTextWrapper,
  AboutBookText,
  Formats,
  FormatText,
  FormatsFooter,
  FormatsList,
  FormatsItem,
  BookType,
  BookPrice,
  AddToCardBtn,
  BookWrapper,
  BookBox,
  BookImage,
  BookName,
  BoxFooter,
  BookRate,
} from "./AboutBook";

function AboutBook() {
  return (
    <>
      <AboutBookContainer>
        <Top>
          <ImgWrapper>
            <Img src={BookImg} />
          </ImgWrapper>
          <BookInfo>
            <BookNm>Qo’rqma</BookNm>
            <AuthorAndRate>
              <BookAuthor>Javlon Jovliyev</BookAuthor>
              <BookRt>
                |{" "}
                <FaStar
                  style={{
                    color: "#fff",
                    marginRight: "3px",
                    marginLeft: "10px",
                  }}
                />{" "}
                4.1
              </BookRt>
            </AuthorAndRate>
            <Counts>
              <CountsItem>
                Sahifalar soni: <Count>376</Count>
              </CountsItem>
              <CountsItem>
                Chop etilgan: <Count>2021</Count>
              </CountsItem>
              <CountsItem>
                Janri: <Count>Tarixiy</Count>
              </CountsItem>
              <CountsItem>
                Nashriyot: <Count>Nihol nashr</Count>
              </CountsItem>
            </Counts>
            <MiddleLine>
              To’liq ma’lumot{" "}
              <IoArrowDown style={{ color: "#fff", marginLeft: "19px" }} />
              <Line />
            </MiddleLine>
            <AboutBookTextWrapper>
              <AboutBookText>
                Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган
                ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган
                миллат йигит-қизларининг хотирасига бағишланади.
              </AboutBookText>
              <AboutBookText>
                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди.
                Барчаси шу қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода,
                ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф
                муҳаббат, кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг
                бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар,
                руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир
                қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради. Ўтган аср
                бошида Германияда ўқиган талабалар, улар маслаги ва фожиали
                қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
              </AboutBookText>
            </AboutBookTextWrapper>
            <Formats>
              <FormatText>Mavjud formatlar</FormatText>
              <FormatsFooter>
                <FormatsList>
                  <FormatsItem>
                    <FiBook
                      style={{ color: "#fff", width: "24px", height: "24px" }}
                    />
                    <BookType>Qog’oz kitob</BookType>
                    <BookPrice>27 000 so’m</BookPrice>
                  </FormatsItem>
                  <FormatsItem>
                    <BiHeadphone
                      style={{ color: "#fff", width: "24px", height: "24px" }}
                    />
                    <BookType>Audio kitob</BookType>
                    <BookPrice>6:23 soat</BookPrice>
                  </FormatsItem>
                  <FormatsItem>
                    <IoMdPhonePortrait
                      style={{ color: "#fff", width: "24px", height: "24px" }}
                    />
                    <BookType>Elektron</BookType>
                    <BookPrice>pdf, epub</BookPrice>
                  </FormatsItem>
                </FormatsList>
                <AddToCardBtn>Javonga qo’shish </AddToCardBtn>
              </FormatsFooter>
            </Formats>
          </BookInfo>
        </Top>
        <Bottom>
          <BottomHeader>
            <BottomHeaderList>
              <BottomHeaderItem>
                <BottomHeaderLink>Muallif haqida</BottomHeaderLink>
              </BottomHeaderItem>
              <BottomHeaderItem>
                <BottomHeaderLink>Kitobdan iqtiboslar</BottomHeaderLink>
              </BottomHeaderItem>
              <BottomHeaderItem>
                <BottomHeaderLink>Kitobxonlar taqrizi</BottomHeaderLink>
              </BottomHeaderItem>
            </BottomHeaderList>
            <BookQuotes>
              <BookQuotesItem>
                Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami
                bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam
                tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot
                to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi
                suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib
                keladi.
                <ItemIcons>
                  <FaHeart style={{marginRight: '10px'}} />
                  <FaShareAlt />
                </ItemIcons>
              </BookQuotesItem>
              <BookQuotesItem>
                Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq
                tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib
                ketgan.
              </BookQuotesItem>
            </BookQuotes>
          </BottomHeader>
          <BottomFooter>
            <FooterTop>
              <TopText>Sizga yoqishi mumkin</TopText>
              <TopText>Barchasini ko’rish</TopText>
            </FooterTop>
            <BookWrapper>
              {Data.map((item, index) => (
                <BookBox key={index}>
                  <BookImage src={item.image} />
                  <BookName>{item.name}</BookName>
                  <BoxFooter>
                    <FaStar style={{ color: "#fff", marginRight: "8px" }} />
                    <BookRate>
                      {item.rate} * {item.comments} ta fikrlar
                    </BookRate>
                  </BoxFooter>
                </BookBox>
              ))}
            </BookWrapper>
          </BottomFooter>
        </Bottom>
      </AboutBookContainer>
    </>
  );
}

export default AboutBook;
