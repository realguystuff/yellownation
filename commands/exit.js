const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('exit')
        .setDescription('ONLY FOR NINA ONLY! THIS RESTARTS BOT')
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.user.id === '821682594830614578') {
            await interaction.reply('`process.exit();`')
            process.exit();
        } else {
            await interaction.reply('sorry this is only for nina as this restarts bot');
        }
    }
}