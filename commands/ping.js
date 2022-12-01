const { SlashCommandBuilder, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping! Pong!'),
	async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		await interaction.editReply(`Websocket heartbeat: ${client.ws.ping} ms. 
Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp} ms.

We unfortunately could not fix the NaN ms.`);
	},
};