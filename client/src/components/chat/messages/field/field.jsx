import { useRef } from "react";

const Field = ({ onAddMessage }) => {
  const message = useRef(null);

  const handleMessage = (e) => {
    e.preventDefault();
    onAddMessage(message.current.value);
    message.current.value = "";
  };

  return (
    <form className="field" onSubmit={handleMessage}>
      <input
        ref={message}
        type="text"
        placeholder="Enter your message here..."
      />
      <button type="submit">send</button>
    </form>
  );
};

export default Field;
