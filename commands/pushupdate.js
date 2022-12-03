const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pushupdate')
		.setDescription('commit(latest, "new update"); push(latest)'),
	async execute(interaction) {
    if (interaction.user.id === '821682594830614578') {
      const update = new EmbedBuilder()
	      .setColor('#00f7ff')
	      .setTitle('1.4.0!')
	      .setDescription(`1.4.0 adds:`)
        .addFields(
		      { name: '**- punches**', value: 'yay' },
          { name: '**- polls**', value: 'use /polls' },
          { name: '**refreshed ping**', value: 'pls gimme food' },
	      )
	      .setFooter({ text: 'pwease give me food now?? pretty pwease? :(' });
      await interaction.reply({ content: "Success!", ephemeral: true })
      await interaction.followUp({ 
content: "<@&1047836222069952556>, a new update for you!", embeds: [update] });
    } else {
      interaction.reply('An error occurred!');
    }
	},
};