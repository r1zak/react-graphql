const replies = (parent, _args, context, _info) =>
  context.prisma.message.findUnique({ where: { id: parent.id } }).replies();

module.exports = {
  replies,
};
