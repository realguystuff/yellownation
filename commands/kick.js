const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('kick em in the ass')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('who am i gonna kick')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('why do u want to kick em? (optional)'))
		    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers)
		    .setDMPermission(false),
  async execute(interaction) {
    if (interaction.guild.members.me.permissions.has([PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers])) {
	    const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'mod too lazy to give reason';

		await interaction.reply(`kicking ${target.username} for reason: "${reason}"`);
		await interaction.guild.members.kick(target);
    } else {
      interaction.reply(`You cannot kick ${target.username}!

Tip: You need **BOTH** Kick Members permission and the Ban Members permission to kick members, in case you were wondering why you can't kick when you have the Kick Members permission.`);
    }
	},
};