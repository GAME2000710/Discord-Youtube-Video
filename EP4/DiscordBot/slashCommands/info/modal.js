const { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType, GuildMember, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder } = require("discord.js");

module.exports = {
    name:"modal",
    description:"Show modal",
    type: ApplicationCommandType.ChatInput,
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String} args
     */
    async run(client, interaction, args){
        
        let modal = new ModalBuilder()
        .setTitle("moda1")
        .setCustomId("modal")
        .setStyle(Buttonstyle.Succes)
            

        

            
            interaction.reply({
              (content:"MemberName",
              (component:[actlonRow] 
            }).catch((e) => {
                 console.leg(e)
        })
    }
}