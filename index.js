console.clear();
require('./server.js')

const fs = require('node:fs');
const path = require('node:path');
const { Events, Collection, ActivityType } = require('discord.js');

const client = require('./client.js');
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'myModal') {
		await interaction.reply({ content: 'Your submission was received successfully!' });
    const good = interaction.fields.getTextInputValue('good');
	const bot = interaction.fields.getTextInputValue('bot');
    client.users.send('821682594830614578', `good: "${good}"
bot: "${bot}" from ${interaction.user.username}`);
	}
});
client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isChatInputCommand()) return;const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		command.execute(interaction);
	} catch (error) {
		console.error(error);
		interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
client.once(Events.ClientReady, c => {
  client.user.setActivity('you or i have no food', { type: ActivityType.Watching });
	console.log(`Logged in as ${c.user.tag}`);
});
client.login(process.env.token);
