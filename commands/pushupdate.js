const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pushupdate')
		.setDescription('commit(latest, "new update"); push(latest)'),
	async execute(interaction) {
    if (interaction.user.id === '821682594830614578') {
      const update = new EmbedBuilder()
	      .setColor('#00f7ff')
	      .setTitle('1.3.0!')
	      .setDescription(`1.3.0 adds:`)
        .addFields(
		      { name: '**- Added kick**', value: 'kick them out' },
          { name: '**- report confessions!**', value: 'dont dm nina anymore' },
          { name: '**refreshed ping**', value: 'im faster now' },
	      )
	      .setFooter({ text: 'pwease give me food now?? pretty pwease? :(' });
      await interaction.reply({ 
content: "<@&1047836222069952556>, a new update for you!", embeds: [update] });
    } else {
      interaction.reply('An error occurred!');
    }
	},
};