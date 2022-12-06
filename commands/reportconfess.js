const { SlashCommandBuilder } = require('discord.js');
const client = require('./../client.js');
const talkedRecently = new Set();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('reportconfess')
		.setDescription('did u find a bad confession?')
    .addStringOption(option =>
		option.setName('confession')
			.setDescription('make sure its EXACTLY what it said')
      .setRequired(true))
	.addStringOption(option =>
		option.setName('why')
			.setDescription('needed')
      .setRequired(true)),
	async execute(interaction) {
    if (talkedRecently.has(interaction.user.id)) {
            interaction.reply("woah u type too fast mah boi!! theres a 1 min cooldown... also ask boogle to give me food pwease i cant sprint");
    } else {
      const message = interaction.options.getString('confession');
      const reason = interaction.options.getString('why')
      interaction.reply({ content: "i sent <@821682594830614578> a dm, dont worry i pinged her", ephemeral: true })
      client.users.send('821682594830614578', `Reported confession from ${interaction.user.username}: "${message}" because '${reason}'`);

      talkedRecently.add(interaction.user.id);
        setTimeout(() => {
          talkedRecently.delete(interaction.user.id);
        }, 60000);
    }
	},
};
