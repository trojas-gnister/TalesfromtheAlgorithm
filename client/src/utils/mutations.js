import { gql } from "apollo-server-express";

export const CREATE_STORYBOOK_MUTATION = gql`
  mutation CreateStorybook($name: String!) {
    createStorybook(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_PAGE_TO_STORYBOOK_MUTATION = gql`
  mutation AddPageToStorybook($storybookId: String!, $pageName: String!) {
    addPageToStorybook(storybookId: $storybookId, pageName: $pageName) {
      _id
      name
    }
  }
`;

export const ADD_TEXT_TO_PAGE_MUTATION = gql`
  mutation AddTextToPage($pageId: String!, $text: String!) {
    addTextToPage(pageId: $pageId, text: $text) {
      _id
      content
    }
  }
`;

export const ADD_IMAGE_TO_PAGE_MUTATION = gql`
  mutation AddImageToPage($pageId: String!, $imageUrl: String!) {
    addImageToPage(pageId: $pageId, imageUrl: $imageUrl) {
      _id
      url
    }
  }
`;

export const DELETE_STORYBOOK_MUTATION = gql`
  mutation DeleteStorybook($storybookId: String!) {
    deleteStorybook(storybookId: $storybookId) {
      _id
      name
    }
  }
`;

export const DELETE_PAGE_FROM_STORYBOOK_MUTATION = gql`
  mutation DeletePageFromStorybook($pageId: String!) {
    deletePageFromStorybook(pageId: $pageId) {
      _id
      name
    }
  }
`;

export const DELETE_TEXT_FROM_PAGE_MUTATION = gql`
  mutation DeleteTextFromPage($pageId: String!, $textId: String!) {
    deleteTextFromPage(pageId: $pageId, textId: $textId) {
      _id
      content
    }
  }
`;

export const DELETE_IMAGE_FROM_PAGE_MUTATION = gql`
  mutation DeleteImageFromPage($pageId: String!, $imageId: String!) {
    deleteImageFromPage(pageId: $pageId, imageId: $imageId) {
      _id
      url
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      username
      password
    }
  }
`;

