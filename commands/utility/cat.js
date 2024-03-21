const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { catApiKey } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Replies with cat!'),
    async execute(interaction) {
        const catApiUrl = `https://api.thecatapi.com/v1/images/search?api_key=${catApiKey}`;
        const catUrl = await fetch(catApiUrl)
        .then(response => response.json())
        .then(data => {return data[0].url})
        .catch(error => console.error('Error:', error));
        const catEmbed = new EmbedBuilder().setImage(catUrl);
        await interaction.reply({ embeds: [catEmbed] });
    },
};