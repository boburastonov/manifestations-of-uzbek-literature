import React from "react";
import UlugbekXazinasi from "../Assets/ulugbek xazinasi.png";

import {
  BookSettingsContainer,
  UpdateBookImage,
  Img,
  BookName,
  ImageUpdateBtn,
  AddBookSettingsForm,
  SectionHeading,
  Input,
  TextArea,
  CreateBtn,
} from "./BookSettings";

function BookSettings() {
  return (
    <>
      <BookSettingsContainer>
        <UpdateBookImage>
          <Img src={UlugbekXazinasi} />
          <BookName>Ulugbek xazinasi</BookName>
          <ImageUpdateBtn>Upload cover</ImageUpdateBtn>
        </UpdateBookImage>
        <AddBookSettingsForm>
          <SectionHeading>Add book</SectionHeading>
          <Input placeholder="Title" type="text" required />
          <Input placeholder="Pages" type="number" required />
          <Input placeholder="Year" type="date" required />
          <Input placeholder="Price in $" type="number" required />
          <Input placeholder="Country" type="text" required />
          <Input placeholder="Author" type="text" required />
          <TextArea placeholder="Description"></TextArea>
          <CreateBtn>Create</CreateBtn>
        </AddBookSettingsForm>
      </BookSettingsContainer>
    </>
  );
}

export default BookSettings;
