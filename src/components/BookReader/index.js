import React from "react";
import "./Styles.css";
import UserImg from "../Assets/userAvatar.png";
import { FaStar } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import bookImage from "../Assets/bookImage.png";
import { IoMdRefresh } from "react-icons/io";
import mdImage from "../Assets/md.png";
import lgImage from "../Assets/lg.png";
import trackLine from "../Assets/trackLine.png";
import audioLine from "../Assets/audioLine.png";
import { IoMdMenu } from "react-icons/io";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoMdPlay } from "react-icons/io";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoMdVolumeHigh } from "react-icons/io";
import playingTrack from "../Assets/playingTrack.png";
import times from "./Times";
import { data } from "./Times";

import {
  BookReaderContainer,
  BookReaderHeader,
  Left,
  UserAvatarWrapper,
  UserAvatar,
  IconWrapper,
  Nomination,
  ReadedBooks,
  Right,
  UserName,
  UserInfoList,
  UserInfoItem,
  UserData,
  BookReaderHero,
  BookCondition,
  ReadingDiagram,
  ReadingDiagramHeader,
  ReadingTitle,
  MenuIcon,
  ReadingDiagramList,
  ReadingDiagramItem,
  ImgWrapper,
  Img,
  ReadingProccess,
  ProgressBar,
  BarTitle,
  BarWrapper,
  BarItem,
  ReadingPercent,
  PercentTitle,
  UpdateBtn,
  RefreshIconWrapper,
  ViewBtn,
  AudioBook,
  AudioBookTitle,
  BookImages,
  AudioBookImage,
  BookTracks,
  TrackNum,
  BookAuthorName,
  TrackLine,
  AudioLine,
  MusicPlayer,
  MenuWrapper,
  PlayerController,
  PrevWrapper,
  PlayWrapper,
  NextWrapper,
  SoundWrapper,
  TrackList,
  PlayingTrack,
  PlayingTrackImgWrapper,
  PlayingTrackImg,
  TrackInfo,
  TrackName,
  TrackAuthor,
  TrackTime,
  RecommendationBooks,
  RecommendationBooksMenu,
  RecommendationBooksItem,
  NavbarLink,
  BookWrapper,
  BookBox,
  BookImage,
  BookName,
  BookAuthor,
  BoxFooter,
  BookRate,
} from "./BookReader";
import { NavLink } from "react-router-dom";

function BookReader() {
  return (
    <>
      <BookReaderContainer>
        <BookReaderHeader>
          <Left>
            <UserAvatarWrapper>
              <UserAvatar src={UserImg} />
              <IconWrapper>
                <FaStar style={{ color: "#c9ac8c" }} />
              </IconWrapper>
            </UserAvatarWrapper>
            <Nomination>Oltin kitobxon</Nomination>
            <ReadedBooks>186 ta kitob o’qigan</ReadedBooks>
          </Left>
          <Right>
            <UserName>Farruxbek Abdullayev</UserName>
            <UserInfoList>
              <UserInfoItem>
                Tavallud: <UserData>&nbsp; February 08, 1999</UserData>
              </UserInfoItem>
              <UserInfoItem>
                Manzili: <UserData>&nbsp;Jizzax</UserData>
              </UserInfoItem>
              <UserInfoItem>
                Bio: <UserData>&nbsp;Graphic designer and Developer</UserData>
              </UserInfoItem>
            </UserInfoList>
          </Right>
        </BookReaderHeader>
        <BookReaderHero>
          <BookCondition>
            <ReadingDiagram>
              <ReadingDiagramHeader>
                <ReadingTitle>Hozir o’qilmoqda...</ReadingTitle>
                <MenuIcon>
                  <PiSquaresFourFill
                    style={{
                      color: "rgba(255, 255, 255, 0.3)",
                      width: "18px",
                      height: "18px",
                    }}
                  />
                </MenuIcon>
              </ReadingDiagramHeader>
              <ReadingDiagramList>
                <ReadingDiagramItem>
                  <ImgWrapper>
                    <Img src={bookImage} />
                  </ImgWrapper>
                  <ReadingProccess>
                    <ProgressBar>
                      <BarTitle>Ikki eshik orasi</BarTitle>
                      <BarWrapper>
                        <BarItem />
                      </BarWrapper>
                    </ProgressBar>
                    <ReadingPercent>
                      <PercentTitle>76%</PercentTitle>
                      <UpdateBtn>
                        Yangilash{" "}
                        <RefreshIconWrapper>
                          <IoMdRefresh style={{ color: "rgb(69, 47, 24)" }} />
                        </RefreshIconWrapper>
                      </UpdateBtn>
                    </ReadingPercent>
                  </ReadingProccess>
                </ReadingDiagramItem>
                <ReadingDiagramItem>
                  <ImgWrapper>
                    <Img src={bookImage} />
                  </ImgWrapper>
                  <ReadingProccess>
                    <ProgressBar>
                      <BarTitle>Ikki eshik orasi</BarTitle>
                      <BarWrapper>
                        <BarItem />
                      </BarWrapper>
                    </ProgressBar>
                    <ReadingPercent>
                      <PercentTitle>76%</PercentTitle>
                      <UpdateBtn>
                        Yangilash{" "}
                        <RefreshIconWrapper>
                          <IoMdRefresh style={{ color: "rgb(69, 47, 24)" }} />
                        </RefreshIconWrapper>
                      </UpdateBtn>
                    </ReadingPercent>
                  </ReadingProccess>
                </ReadingDiagramItem>
                <ReadingDiagramItem>
                  <ImgWrapper>
                    <Img src={bookImage} />
                  </ImgWrapper>
                  <ReadingProccess>
                    <ProgressBar>
                      <BarTitle>Ikki eshik orasi</BarTitle>
                      <BarWrapper>
                        <BarItem />
                      </BarWrapper>
                    </ProgressBar>
                    <ReadingPercent>
                      <PercentTitle>76%</PercentTitle>
                      <UpdateBtn>
                        Yangilash{" "}
                        <RefreshIconWrapper>
                          <IoMdRefresh style={{ color: "rgb(69, 47, 24)" }} />
                        </RefreshIconWrapper>
                      </UpdateBtn>
                    </ReadingPercent>
                  </ReadingProccess>
                </ReadingDiagramItem>
                <ReadingDiagramItem>
                  <ImgWrapper>
                    <Img src={bookImage} />
                  </ImgWrapper>
                  <ReadingProccess>
                    <ProgressBar>
                      <BarTitle>Ikki eshik orasi</BarTitle>
                      <BarWrapper>
                        <BarItem />
                      </BarWrapper>
                    </ProgressBar>
                    <ReadingPercent>
                      <PercentTitle>76%</PercentTitle>
                      <UpdateBtn>
                        Yangilash{" "}
                        <RefreshIconWrapper>
                          <IoMdRefresh style={{ color: "rgb(69, 47, 24)" }} />
                        </RefreshIconWrapper>
                      </UpdateBtn>
                    </ReadingPercent>
                  </ReadingProccess>
                </ReadingDiagramItem>
              </ReadingDiagramList>
              <ViewBtn>Barchasini ko’rish</ViewBtn>
            </ReadingDiagram>
            <AudioBook>
              <AudioBookTitle>Audio kitob</AudioBookTitle>
              <BookImages>
                <AudioBookImage src={mdImage} />
                <AudioBookImage src={lgImage} />
                <AudioBookImage src={mdImage} />
              </BookImages>
              <BookTracks>
                <TrackNum>Dunyoning ishlari 5-track</TrackNum>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
                <TrackLine src={trackLine} />
                <AudioLine src={audioLine} />
                <MusicPlayer>
                  <MenuWrapper>
                    <IoMdMenu style={{ color: "#C9AC8C" }} />
                  </MenuWrapper>
                  <PlayerController>
                    <PrevWrapper>
                      <TbPlayerTrackPrevFilled style={{ color: "#C9AC8C" }} />
                    </PrevWrapper>
                    <PlayWrapper>
                      <IoMdPlay style={{ color: "#202020" }} />
                    </PlayWrapper>
                    <NextWrapper>
                      <TbPlayerTrackNextFilled style={{ color: "#C9AC8C" }} />
                    </NextWrapper>
                  </PlayerController>
                  <SoundWrapper>
                    <IoMdVolumeHigh style={{ color: "#C9AC8C" }} />
                  </SoundWrapper>
                </MusicPlayer>
                <TrackList>
                  {times.map((item) => (
                    <>
                      <PlayingTrack>
                        <PlayingTrackImgWrapper>
                          <PlayingTrackImg src={playingTrack} />
                        </PlayingTrackImgWrapper>
                        <TrackInfo>
                          <TrackName>
                            Dunyoning ishlari {item.trackNum}-track
                          </TrackName>
                          <TrackAuthor>O’tkir Hoshimov</TrackAuthor>
                        </TrackInfo>
                        <TrackTime>{item.trackTime}</TrackTime>
                      </PlayingTrack>
                    </>
                  ))}
                </TrackList>
              </BookTracks>
            </AudioBook>
          </BookCondition>
          <RecommendationBooks>
            <RecommendationBooksMenu>
              <RecommendationBooksItem>
                <NavbarLink to="/readed-books">O’qilganlar</NavbarLink>
              </RecommendationBooksItem>
              <RecommendationBooksItem>
                <NavbarLink to="/want-to-read">O’qishni xohlayman</NavbarLink>
              </RecommendationBooksItem>
              <RecommendationBooksItem>
                <NavbarLink to="/reading-books">O’qilmoqda</NavbarLink>
              </RecommendationBooksItem>
              <RecommendationBooksItem>
                <NavbarLink to="/writers">Adiblar</NavbarLink>
              </RecommendationBooksItem>
            </RecommendationBooksMenu>
            <BookWrapper>
              {data.map((item, index) => (
                <BookBox key={index}>
                  <BookImage src={item.image} />
                  <BookName>{item.name}</BookName>
                  <BookAuthor>{item.author}</BookAuthor>
                  <BoxFooter>
                    <FaStar style={{ color: "#fff", marginRight: "8px" }} />
                    <BookRate>
                      {item.rate} * {item.comments} ta fikrlar
                    </BookRate>
                  </BoxFooter>
                </BookBox>
              ))}
            </BookWrapper>
          </RecommendationBooks>
        </BookReaderHero>
      </BookReaderContainer>
    </>
  );
}

export default BookReader;
