const Messages = ({ messages }) => {
  let count = 1;

  return (
    <div className="messages">
      <ul className="messages-list">
        {messages.map(({ id, text, likes, dislikes }) => (
          <li className="messages__list-item" key={id}>
            <div className="messages__list-item--header">
              <h3>{text}</h3>
              <span>#{count++}</span>
            </div>
            <div className="messages__list-item--footer">
              <div className="reaction">
                <div className="like">
                  👍<span>{likes}</span>
                </div>
                <div className="dislike">
                  👎<span>{dislikes}</span>
                </div>
              </div>
              <button>reply</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
