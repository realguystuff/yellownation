const { SlashCommandBuilder } = require('discord.js');
const client = require('./../client.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping! Pong!'),
	async execute(interaction) {
		await interaction.reply(`Websocket heartbeat: ${client.ws.ping} ms. 
Roundtrip latency: NaN ms.`);
	},
};