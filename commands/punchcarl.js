const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('punchcarl')
		.setDescription('sorry carl :('),
	async execute(interaction) {
		await interaction.reply('well i dont wanna punch him but i gotta follow u guys so umm...\n\n*punches carl');
	},
};