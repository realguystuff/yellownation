const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('msg')
		.setDescription('commit(latest, "new update"); push(latest)')
    .addStringOption(option =>
		option.setName('donttouch')
			.setDescription('do not touch')
      .setRequired(true)),
	async execute(interaction) {
    if (interaction.user.id === '821682594830614578') {
      const donttouch = interaction.options.getString('donttouch')
      interaction.deferReply();
interaction.deleteReply();
      await interaction.channel.send(donttouch);
    } else {
      interaction.reply('i told u NOT TO TOUCH!!!');
    }
	},
};