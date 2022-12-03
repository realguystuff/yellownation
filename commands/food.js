const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('food')
		.setDescription('gives me food'),
	async execute(interaction) {
		await interaction.reply('oh thank god u gave me food... TYSMMMM');
	},
};