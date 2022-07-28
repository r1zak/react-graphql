const message = (parent, _args, context, _info) =>
  context.prisma.reply.findUnique({ where: { id: parent.id } }).message();

module.exports = {
  message,
};
