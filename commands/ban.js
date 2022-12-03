const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('ban hammer!!!!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('i need his name pls')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('u lazy??'))
		    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		    .setDMPermission(false),
  async execute(interaction) {
    if (interaction.guild.members.me.permissions.has([PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers])) {
	    const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'mod too lazy to give reason';

		await interaction.reply(`Banning ${target.username} for reason: "${reason}"`);
		await interaction.guild.members.ban(target);
    } else {
      interaction.reply(`You cannot ban ${target.username}!

Tip: You need **BOTH** Kick Members permission and the Ban Members permission to ban members, in case you were wondering why you can't ban when you have the Ban Members permission.`);
    }
	},
};