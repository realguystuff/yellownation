const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pushupdate')
		.setDescription('commit(latest, "new update"); push(latest)'),
	async execute(interaction) {
    if (interaction.user.id === '821682594830614578') {
      const update = new EmbedBuilder()
	      .setColor('#00f7ff')
	      .setTitle('1.2.2!')
	      .setDescription(`1.2.2 adds:`)
        .addFields(
		      { name: '**- Fixed Ping**', value: 'No more NaN' },
          { name: '**- More embeds!!**', value: 'including me...?' },
          { name: '**- reportable anonymous confessions**', value: 'because i will give nina the names of people who gave them! muahahaha!' },
	      )
	      .setFooter({ text: 'pwease give me food now?? pretty pwease? :(' });
      await interaction.reply({ 
content: "<@&1047836222069952556>, a new update for you!", embeds: [update] });
    } else {
      interaction.reply('An error occurred!');
    }
	},
};