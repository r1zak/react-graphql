const Messages = ({ messages }) => {
  return (
    <div className="messages">
      <ul className="messages-list">
        {messages.map((message) => (
          <li className="messages__list-item" key={message.id}>
            <div className="messages__list-item--header">
              <h3>{message.title}</h3>
              <span>#{message.id}</span>
            </div>
            <div className="messages__list-item--footer">
              <div className="reaction">
                <div className="like">
                  👍<span></span>
                </div>
                <div className="dislike">
                  👎<span></span>
                </div>
              </div>
              <button>reply</button>
            </div>
            <ul className="replies-list">
              {message.replies.map((reply) => (
                <li className="replies__list-item" key={reply.id}>
                  <p>#{message.id}</p>
                  <span> | </span>
                  <p>{reply.text}</p>
                  <span> | </span>
                  <span>#{reply.id}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
