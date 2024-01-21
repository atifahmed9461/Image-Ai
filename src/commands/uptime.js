module.exports = {
  data: {
    name: 'uptime',
    description: 'Chack bot online time!',
  },

  run: ({ interaction, client }) => {
    interaction.reply(`Uptime: <t:${Math.floor(Date.now() / 1000 - client.uptime / 1000)}:R>`);
  },
};
