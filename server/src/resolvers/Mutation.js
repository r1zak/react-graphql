// const createMessage = async (_parent, args, context) => context.prisma.message.create({ data: args.message });

const createMessage = async (_parent, args, context) => {
  const createdMessage = await context.prisma.message.create({
    data: args.message,
  });
  context.pubsub.publish("NEW_MESSAGE", createdMessage);

  return createdMessage;
};

const createReply = async (_parent, args, context) => {
  const {
    reply: { text, messageId },
  } = args;

  const isMessageExists = await context.prisma.message
    .findFirst({
      where: {
        id: messageId,
      },
      select: { id: true },
    })
    .then(Boolean);

  if (!isMessageExists) {
    throw new Error(`Product with id ${messageId} does not exist`);
  }

  return context.prisma.reply.create({
    data: {
      text,
      message: {
        connect: { id: messageId },
      },
    },
  });
};

module.exports = {
  createMessage,
  createReply,
};
