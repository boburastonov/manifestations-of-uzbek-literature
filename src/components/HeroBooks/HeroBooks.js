import { styled } from "styled-components";
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const BookWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 39px;
`;

export const BookBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  width: 165px;
  padding: 0;
  background-color: transparent;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 35px;
  &:not(:last-child) {
    margin-right: 22px;
  }
  &:nth-child(6) {
    margin-right: 0;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: 252px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
`;

export const BookName = styled.h1`
  color: #c9ac8c;
  font-size: 20px;
  margin-top: 17px;
`;

export const BookAuthor = styled.p`
  font-size: 12px;
  margin-bottom: 14px;
  color: rgba(255, 255, 255, 0.6);
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
