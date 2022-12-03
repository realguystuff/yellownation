const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stabcarl')
		.setDescription('oh no'),
	async execute(interaction) {
		await interaction.reply('im a BOT and **I CANNOT STAB PEOPLE**!!!');
	},
};