import React from "react";
import AuthorImg from "../Assets/hoshimov.png";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import Data from "./Data";
import {
  UserInfoContainer,
  UserAvatar,
  UserImg,
  UserData,
  BornInfo,
  BornTitle,
  BornDate,
  BornPlace,
  DiedInfo,
  DiedTitle,
  DiedDate,
  DiedPlace,
  UserInfoData,
  UserName,
  LifeAndWork,
  Work,
  WorkHeader,
  WorkTitle,
  WorkText,
  LifeAndWorkFooter,
  FooterHeader,
  FooterWork,
  FooterText,
  BookWrapper,
  BookBox,
  BookImage,
  BookName,
  BookAuthor,
  BoxFooter,
  BookRate,
} from "./UserInfo";

function UserInfo() {
  return (
    <>
      <UserInfoContainer>
        <UserAvatar>
          <UserImg src={AuthorImg} />
          <UserData>
            <BornInfo>
              <BornTitle>Tavallud sanasi</BornTitle>
              <BornDate>5-Avg 1941</BornDate>
              <BornPlace>Toshkent, Uzbekistan</BornPlace>
            </BornInfo>
            <FaMinus style={{ color: "rgb(201, 172, 140)" }} />
            <DiedInfo>
              <DiedTitle>Vafot etgan sanasi</DiedTitle>
              <DiedDate>24-May 2013</DiedDate>
              <DiedPlace>Toshkent, Uzbekistan</DiedPlace>
            </DiedInfo>
          </UserData>
        </UserAvatar>
        <UserInfoData>
          <UserName>O’tkir Hoshimov</UserName>
          <LifeAndWork>
            Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
            Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
            mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
            (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika
            kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959
            yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”,
            “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih,
            tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy
            xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri
            (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida
            bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda
            “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005
            yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va
            axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“
            jurnalida bosh muharrir boʻlib ishladi.
          </LifeAndWork>
          <Work>
            <WorkHeader>
              <FaBookmark style={{ color: "rgb(201, 172, 140)" }} />
              <WorkTitle>Ijodi</WorkTitle>
            </WorkHeader>
            <WorkText>
              Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
              ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
              muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
              qaytmaydi“ qissasi boʻldi.
            </WorkText>
          </Work>
          <LifeAndWorkFooter>
            <FooterHeader>
              <FooterWork>Asarlari</FooterWork>
              <FooterText>Barchasini ko’rish</FooterText>
            </FooterHeader>
            <BookWrapper>
              {Data.map((item, index) => (
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
          </LifeAndWorkFooter>
        </UserInfoData>
      </UserInfoContainer>
    </>
  );
}

export default UserInfo;
