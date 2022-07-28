const version = () => "1.1.0";

const messages = async (_parent, _args, context, _info) => {
  const messagesList = await context.prisma.message.findMany({
    include: {
      replies: true,
    },
  });

  return messagesList;
};

module.exports = {
  version,
  messages,
};
