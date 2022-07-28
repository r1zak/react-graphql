import { gql } from "@apollo/client";

export const typeDefs = gql`
  input MessagetInput {
    title: String!
    username: String!
  }
  input ReplyInput {
    text: String!
    messageId: String!
  }
`;
