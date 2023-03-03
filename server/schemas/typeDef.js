import { gql } from "apollo-server-express";

export const CREATE_STORYBOOK = gql`
  type Storybook {
    _id: ID!
    name: String!
    pages: [Page]
  }

  type Page {
    _id: ID!
    name: String!
    text: [Text]
    images: [Image]
  }

  type Text {
    _id: ID!
    content: String!
  }

  // type Image {
  //   _id: ID!
  //   url: String!
  // }

  type Query {
    storybooks: [Storybook]
    page(pageId: String!): Page
  }

  type Mutation {
    createStorybook(name: String!): Storybook
    addPageToStorybook(storybookId: String!, pageName: String!): Page
    addTextToPage(pageId: String!, text: String!): Page
    addImageToPage(pageId: String!, imageUrl: String!): Page
    deleteStorybook(storybookId: String!): Storybook
    deletePageFromStorybook(pageId: String!): Storybook
    deleteTextFromPage(pageId: String!, textId: String!): Page
    deleteImageFromPage(pageId: String!, imageId: String!): Page
  }
`;

export default typeDefs;
