// interaction.reply : Método fornecido pelo discord.js para interagir com o Discord e enviar respostas a interaçõoes do usuário

const { SlashCommandBuilder } = require('discord.js');

// exportação das configurações do comando
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Response with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!')
  }
}

