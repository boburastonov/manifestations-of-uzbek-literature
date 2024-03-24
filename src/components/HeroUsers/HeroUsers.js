import { styled } from "styled-components";
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const PersonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 38px;
  margin-bottom: 200px;
`;

export const PersonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  text-align: center;
  width: 174px;
  padding: 0;
  background-color: #1e1e1e;
  border-radius: 15px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &:nth-child(6) {
    margin-right: 0;
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
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
