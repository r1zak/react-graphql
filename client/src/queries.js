import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      id
      title
      username
      replies {
        id
        text
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage($message: MessageInput!) {
    createMessage(message: $message) {
      id
      title
    }
  }
`;

export const CREATE_REPLY = gql`
  mutation createReply($reply: ReplyInput!) {
    createReply(reply: $reply) {
      id
      text
    }
  }
`;

export const NEW_MESSAGE = gql`
  subscription newMessage {
    newMessage {
      id
      title
      username
    }
  }
`;
