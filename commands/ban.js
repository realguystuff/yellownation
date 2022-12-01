const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		    .setDMPermission(false),
  async execute(interaction) {
    if (interaction.guild.members.me.permissions.has([PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers])) {
	    const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		await interaction.reply(`Banning ${target.username} for reason: "${reason}"`);
		await interaction.guild.members.ban(target);
    } else {
      interaction.reply(`You cannot ban ${target.username}!

Tip: You need **BOTH** Kick Members permission and the Ban Members permission to ban members, in case you were wondering why you can't ban when you have the Ban Members permission.`);
    }
	},
};