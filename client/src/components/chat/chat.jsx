import Messages from "./messages/messages";
import Field from "./messages/field/field";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (text) => {
    const message = {
      id: Date.now(),
      text,
      likes: 0,
      dislikes: 0,
    };

    const newMessages = [...messages, message];

    setMessages(newMessages);
  };

  return (
    <div className="chat">
      <Messages messages={messages} />
      <Field onAddMessage={handleAddMessage} />
    </div>
  );
};

export default Chat;
