import { PiCodeSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const BookReaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const BookReaderHeader = styled.div`
  display: flex;
  margin-top: 22px;
  margin-bottom: 17px;
  background: radial-gradient(rgba(255, 255, 255, 10%), rgba(47, 47, 47, 100%));
  padding: 50px 77px 44px 77px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 18px;
`;

export const UserAvatarWrapper = styled.div`
  margin-bottom: 12px;
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 46px;
  height: 46px;
  position: absolute;
  top: 124px;
  left: 120px;
  background-color: #1a1a1a;
  border-radius: 50%;
  border: 2px solid rgb(201, 172, 140);
`;

export const Nomination = styled.p`
  margin-bottom: 7px;
  color: #c9ac8c;
  font-size: 22px;
`;

export const ReadedBooks = styled.p`
  color: #fff;
  font-size: 22px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 32px;
  color: rgb(201, 172, 140);
  margin-bottom: 10px;
`;

export const UserInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const UserInfoItem = styled.li`
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 22px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const UserData = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

export const BookReaderHero = styled.div`
  display: flex;
  align-items: center;
`;

export const BookCondition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin-right: 37px;
`;

export const ReadingDiagram = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  padding: 16px 22px 23px 28px;
  border-radius: 14px;
  background-color: #202020;
`;

export const ReadingDiagramHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;

export const ReadingTitle = styled.p`
  font-size: 22px;
  color: rgb(201, 172, 140);
  margin-right: 67px;
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReadingDiagramList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-bottom: 25px;
  margin: 0;
  list-style: none;
`;

export const ReadingDiagramItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 19px;
  }
`;

export const ImgWrapper = styled.div`
  width: 31px;
  margin-right: 14px;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ReadingProccess = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-self: flex-start;
`;

export const BarTitle = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
`;

export const BarWrapper = styled.div`
  width: 148px;
  height: 20px;
  background-color: #fdfdfd;
  position: relative;
  border-radius: 5px;
`;

export const BarItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 76%;
  height: 100%;
  background-color: #a87f52;
  border-radius: 5px;
`;

export const ReadingPercent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
`;

export const PercentTitle = styled.p`
  font-size: 12px;
  margin-bottom: 9px;
  color: rgba(255, 255, 255, 0.6);
`;

export const UpdateBtn = styled.div`
  width: 92px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: rgb(60, 39, 16);
  background-color: #c9ac8c;
  border-radius: 3px;
`;

export const RefreshIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3px 2.3px;
`;

export const ViewBtn = styled.button`
  width: 284px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64513d;
  background-color: #c9ac8c;
  border-radius: 5px;
  font-size: 22px;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const AudioBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 66px;
  background-color: #202020;
  border-radius: 14px;
  padding: 16px 42px 15px 31px;
`;

export const AudioBookTitle = styled.p`
  color: #c9ac8c;
  font-size: 22px;
  margin-bottom: 13px;
  margin-right: auto;
`;

export const BookImages = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

export const AudioBookImage = styled.img`
  width: 46px;
  object-fit: cover;
  &:not(:last-child) {
    margin-right: 19px;
  }
  &:nth-child(2) {
    width: 69px;
  }
`;

export const BookTracks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TrackNum = styled.p`
  font-size: 12px;
  color: rgb(201, 172, 140);
  margin-bottom: 5px;
`;

export const BookAuthorName = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 8px;
`;

export const TrackLine = styled.img`
  width: 274px;
  margin-bottom: 19px;
`;

export const AudioLine = styled.img`
  width: 274px;
`;

export const MusicPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 11px;
`;

export const MenuWrapper = styled.div`
  width: 24px;
  height: 24px;
  padding: 6px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayerController = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

export const PrevWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 5px;
  margin-right: 15px;
`;

export const PlayWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 5px;
  margin-right: 15px;
  background-color: #c9ac8c;
  border: none;
  border-radius: 4px;
`;

export const NextWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 5px;
`;

export const SoundWrapper = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrackList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const PlayingTrack = styled.li`
  width: 263px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 8px 5px 8px 13px;
  background-color: rgba(255, 255, 255, 5%);
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const PlayingTrackImgWrapper = styled.div`
  width: 26px;
  margin-right: 12px;
`;

export const PlayingTrackImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 9px;
`;

export const TrackName = styled.p`
  font-size: 12px;
  color: rgb(201, 172, 140);
`;

export const TrackAuthor = styled.p`
  font-size: 8px;
  color: rgba(255, 255, 255, 0.6);
`;

export const TrackTime = styled.p`
  font-size: 8px;
  color: rgba(255, 255, 255, 0.6);
`;

export const RecommendationBooks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
`;

export const RecommendationBooksMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const RecommendationBooksItem = styled.li`
  padding: 10px;
  &:not(:last-child) {
    margin-right: 49px;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
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
  &:nth-child(5) {
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
