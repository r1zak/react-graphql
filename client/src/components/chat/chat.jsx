import Messages from "./messages/messages";
import Field from "./messages/field/field";
import { useState, useEffect } from "react";
import { GET_MESSAGES, NEW_MESSAGE } from "../../queries";
import { useQuery } from "@apollo/client";

const Chat = () => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_MESSAGES);

  useEffect(() => {
    subscribeToMore({
      document: NEW_MESSAGE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const { newMessage } = subscriptionData.data;

        return {
          ...prev,
          messages: {
            ...prev.messages,
            messagesList: [
              { ...newMessage, replies: [] },
              ...prev.messages.messagesList,
            ],
          },
        };
      },
    });
  }, [subscribeToMore]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="chat">
      <Messages messages={data.messages} />
      <Field />
    </div>
  );
};

export default Chat;
