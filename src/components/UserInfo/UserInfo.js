import { styled } from "styled-components";
export const UserInfoContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const UserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 88px;
`;
export const UserImg = styled.img`
  width: 582px;
  margin: 0;
  margin-top: -2px;
  margin-left: -127px;
  margin-bottom: 40px;
  object-fit: cover;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 47px;
  margin-left: -75px;
`;

export const BornInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 31px;
`;

export const BornTitle = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
`;

export const BornDate = styled.h1`
  font-size: 39px;
  color: rgb(201, 172, 140);
`;

export const BornPlace = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
`;

export const DiedInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 31px;
`;

export const DiedTitle = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
`;

export const DiedDate = styled.h1`
  font-size: 39px;
  color: rgb(201, 172, 140);
`;

export const DiedPlace = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
`;

export const UserInfoData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
`;

export const UserName = styled.h1`
  font-size: 48px;
  color: rgb(201, 172, 140);
  padding: 10px;
`;

export const LifeAndWork = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  margin-bottom: 21px;
`;

export const Work = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const WorkHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const WorkTitle = styled.p`
  font-size: 20px;
  color: rgb(201, 172, 140);
  margin-left: 3px;
`;

export const WorkText = styled.p`
  font-size: 12px;
  color: #fff;
  margin-left: 19px;
  width: 327px;
`;

export const LifeAndWorkFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterWork = styled.h1`
  font-size: 31px;
  color: rgb(201, 172, 140);
  margin-right: 460px;
`;

export const FooterText = styled.p`
  font-size: 16px;
  color: rgb(255, 255, 255);
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
