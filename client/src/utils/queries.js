import { gql } from "apollo-server-express";

export const STORYBOOKS_QUERY = gql`
  query Storybooks {
    storybooks {
      _id
      name
      pages {
        _id
        name
        text {
          _id
          content
        }
        images {
          _id
          url
        }
      }
    }
  }
`;

export const PAGE_QUERY = gql`
  query Page($pageId: String!) {
    page(pageId: $pageId) {
      _id
      name
      text {
        _id
        content
      }
      images {
        _id
        url
      }
    }
  }
`;