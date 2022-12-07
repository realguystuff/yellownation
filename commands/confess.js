const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const client = require('./../client.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('confess')
		.setDescription('Confess anonymously, or say something anonymously. Whatever works for you.')
    .addStringOption(option =>
		option.setName('message')
			.setDescription('The confession')
      .setRequired(true))
	.addBooleanOption(option =>
		option.setName('anonymous')
			.setDescription('True if you want to make it anonymous.')
      .setRequired(true)),
	async execute(interaction) {
    const message = interaction.options.getString('message');
    const anonymous = interaction.options.getBoolean('anonymous')
    if (anonymous) {
      const anonymous = new EmbedBuilder()
	      .setColor(0x0099FF)
	      .setTitle('Anonymous Confession!')
	      .setDescription(`"${message}"`)
	      .setTimestamp()
	      .setFooter({ text: 'if you wanna report this, use /reportconfess and copy the confession text and give reason' });
		  await interaction.reply({ content: 'Sucess!', ephemeral: true });
      await interaction.followUp({ embeds: [anonymous] });
      client.users.send('821682594830614578', `Anonymous Confession: "${message}" by:` + '\n```json\n'+interaction.user.username+'\n```');
    } else {
       const anonymous = new EmbedBuilder()
	      .setColor(0x0099FF)
	      .setTitle('Confession!')
	      .setDescription(`"${message}" -${interaction.user.username}`)
	      .setTimestamp()
        .setAuthor({name: interaction.user.username})
	      .setFooter({ text: 'This is not an anonymous confession.' });
		  await interaction.reply({ embeds: [anonymous] });
    }
	},
};