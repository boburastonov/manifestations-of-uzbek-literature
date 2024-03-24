import { Link } from "react-router-dom";
import { styled } from "styled-components";
import QuoteBg from "../Assets/quoteBg.svg";

export const AboutBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
`;

export const ImgWrapper = styled.div`
  margin-top: 10px;
  margin-right: 46px;
`;

export const Img = styled.img`
  width: 520px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookNm = styled.h1`
  font-size: 48px;
  color: rgb(201, 172, 140);
  margin-bottom: 13px;
`;

export const AuthorAndRate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const BookAuthor = styled.p`
  font-size: 16px;
  color: rgb(201, 172, 140);
  margin-right: 10px;
`;

export const BookRt = styled.p`
  color: rgba(255, 255, 255, 0.6);
`;

export const Counts = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 28px;
  list-style: none;
`;

export const CountsItem = styled.li`
  font-size: 20px;
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  padding: 10px;
`;

export const Count = styled.span`
  color: #fff;
  margin-left: 20px;
  &:first-child {
    margin-left: 10px;
  }
`;

export const MiddleLine = styled.div`
  display: flex;
  align-items: center;
  color: rgb(201, 172, 140);
  padding: 10px;
  margin-bottom: 28px;
  white-space: nowrap;
`;

export const Line = styled.div`
  width: 564px;
  height: 1px;
  background-color: rgba(201, 172, 140, 0.6);
  margin-left: 19px;
`;

export const AboutBookTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const AboutBookText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-bottom: 37px;
  &:not(:last-child) {
    margin-bottom: 37px;
  }
`;

export const Formats = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormatText = styled.p`
  color: rgb(201, 172, 140);
  font-size: 16px;
  margin-bottom: 28px;
`;

export const FormatsFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-right: 184px;
  list-style: none;
`;

export const FormatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:not(:last-child) {
    margin-right: 26px;
  }
`;

export const BookType = styled.p`
  font-size: 16px;
  margin: 8px 0;
  color: rgb(255, 255, 255);
`;

export const BookPrice = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;

export const AddToCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  color: rgb(60, 39, 16);
  background-color: rgb(201, 172, 140);
  padding: 18px 32px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const Bottom = styled.div`
  margin-top: 55px;
  margin-bottom: 146px;
`;

export const BottomHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 77px;
`;

export const BottomHeaderList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const BottomHeaderItem = styled.li`
  padding: 10px;
  &:not(:last-child) {
    margin-right: 49px;
  }
`;

export const BottomHeaderLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
`;

export const BookQuotes = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 29px;
  padding-top: 12px;
  list-style: none;
`;

export const BookQuotesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 708px;
  height: 213px;
  color: #fff;
  padding: 47px 17px 50px 41px;
  background-color: #1D1D1D;
  /* background-image: url(${QuoteBg});
  background-repeat: no-repeat;
  background-position: 26px 0px; */
  position: relative;
  z-index: 111;
  &:not(:last-child) {
    margin-right: 31px;
  }
`;

export const ItemIcons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 17px;
  bottom: 20px;
  margin-top: 7px;
  align-self: flex-end;
`;

export const BottomFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 69px;
`;

export const TopText = styled.p`
  font-size: 25px;
  color: #fff;
  &:not(:last-child) {
    margin-right: 792px;
    color: rgb(201, 172, 140);
  }
`;

export const BookWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
`;

export const BookBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  width: 165px;
  padding: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 23px;
  &:not(:last-child) {
    margin-right: 41px;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: 246px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
`;

export const BookName = styled.h1`
  color: #c9ac8c;
  font-size: 20px;
  margin-top: 17px;
`;

export const BoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;

export const BookRate = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`;
