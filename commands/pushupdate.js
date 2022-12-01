const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pushupdate')
		.setDescription('commit(latest, "new update"); push(latest)'),
	async execute(interaction) {
    if (interaction.user.id === '821682594830614578') {
      await interaction.reply(`
<@&1047836222069952556>, a new update for you!

Update 1.2.0 adds:
- Updates
- Confessions
- Banning
- Remixed Pinging
- Fixed sometimes erroring!


What might happen in 1.3.0:

- A command to show a plan from the developer
- Help command
- A command that gives suggestions regarding to this team
- secret :)`);
    } else {
      interaction.reply('An error occurred!');
    }
	},
};