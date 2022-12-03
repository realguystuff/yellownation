const { SlashCommandBuilder, ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const talkedRecently = new Set();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('hmm'),
	async execute(interaction) {
    if (!talkedRecently.has(interaction.user.id)) {
      const modal = new ModalBuilder()
			  .setCustomId('myModal')
			  .setTitle('info');
      
      const good = new TextInputBuilder()
			.setCustomId('good')
			.setLabel("How is the server going along?")
			.setStyle(TextInputStyle.Short)
      .setRequired(true)
      .setMinLength(10)
      .setMaxLength(30);

	  	const bot = new TextInputBuilder()
			  .setCustomId('bot')
			  .setLabel("What can you can about the bot?")
			  .setStyle(TextInputStyle.Paragraph)
        .setRequired(true)
        .setMinLength(10)
        .setMaxLength(100);
      
		const first = new ActionRowBuilder().addComponents(good);
		const second = new ActionRowBuilder().addComponents(bot);
      modal.addComponents(first, second);
      await interaction.showModal(modal);
      talkedRecently.add(interaction.user.id);
        setTimeout(() => {
          talkedRecently.delete(interaction.user.id);
        }, 3600000);
    } else {
      interaction.reply('stop spamming pls theres 1 hr cooldown');
    }
	},
};