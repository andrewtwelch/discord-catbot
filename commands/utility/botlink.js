const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { clientId } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botlink')
        .setDescription(`Get a link to add the bot to your server!`),
    async execute(interaction) {
        const botLink = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=applications.commands%20bot&permissions=18432`;
        const botLinkEmbed = new EmbedBuilder()
        .setTitle("Add CatBot to your server!")
        .setURL(botLink);
        await interaction.reply({ embeds: [botLinkEmbed] });
    },
};