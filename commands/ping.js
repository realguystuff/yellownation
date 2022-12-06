const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping! Pong!'),
	async execute(interaction) {
		await interaction.reply(`Roundtrip latency: ${Math.round(Math.random * 100)} ms.`);
	},
};