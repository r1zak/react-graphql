const newMessageSubscribe = (_parent, _args, context) =>
  context.pubsub.subscribe("NEW_MESSAGE");

const newMessage = {
  subscribe: newMessageSubscribe,
  resolve: (payload) => payload,
};

module.exports = {
  newMessage,
};
