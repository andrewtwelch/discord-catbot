const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription(`Get a link to the bot's GitHub repo!`),
    async execute(interaction) {
        const gitHubLink = "https://github.com/andrewtwelch/discord-catbot";
        const gitHubEmbed = new EmbedBuilder()
            .setTitle("GitHub - andrewtwelch/discord-catbot")
            .setURL(gitHubLink);
        await interaction.reply({ embeds: [gitHubEmbed] });
    },
};