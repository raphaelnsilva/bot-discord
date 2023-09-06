const { 
    SlashCommandBuilder, 
    ActionRowBuilder, 
    StringSelectMenuBuilder 
} = require("discord.js");

const actionRow = new ActionRowBuilder()
    .addComponents(
        ne
    )


module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),
    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=3d82bfbc22fa4602")
        await interaction.reply("https://open.spotify.com/playlist/7ngeDvP8gp3ZtCGfq68jUV?si=e33a83d58691462d")
    }
}