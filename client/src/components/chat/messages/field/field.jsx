import { CREATE_MESSAGE, GET_MESSAGES } from "../../../../queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const Field = () => {
  const [message, setMessage] = useState("");

  const [createMessage, { loading, error }] = useMutation(CREATE_MESSAGE, {
    refetchQueries: [{ query: GET_MESSAGES }],
    onCompleted: () => console.log("message send"),
  });

  const handleMessage = (e) => {
    e.preventDefault();
    createMessage({
      variables: {
        message: { title: message, username: "iii" },
      },
    });
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <form className="field" onSubmit={handleMessage}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Enter your message here..."
      />
      <button type="submit">send</button>
    </form>
  );
};

export default Field;
