import React from "react";
import Author from "../Assets/avloniySet.png";

import {
  BookSettingsContainer,
  ImageUpdateBtn,
  AddBookSettingsForm,
  SectionHeading,
  Input,
  CreateBtn,
} from "../AddBook/BookSettings";


  import { UpdateBookImage, Img, AuthorName,TextArea, } from "./AddAuthorSettings";

function BookSettings() {
  return (
    <>
      <BookSettingsContainer>
        <UpdateBookImage>
          <Img src={Author} />
          <AuthorName>Nusrat Rahmat</AuthorName>
          <ImageUpdateBtn>Upload cover</ImageUpdateBtn>
        </UpdateBookImage>
        <AddBookSettingsForm>
          <SectionHeading>Add author</SectionHeading>
          <Input placeholder="First name" type="text" required />
          <Input placeholder="Last name" type="text" required />
          <Input placeholder="Date of birth" type="date" required />
          <Input placeholder="Date of death" type="date" required />
          <Input placeholder="Country" type="text" required />
          <TextArea placeholder="Bio"></TextArea>
          <CreateBtn>Create</CreateBtn>
        </AddBookSettingsForm>
      </BookSettingsContainer>
    </>
  );
}

export default BookSettings;
