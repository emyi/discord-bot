const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	let healers = msg.split( '-' )[1];
	let tanks = msg.split( '-' )[2];
	let dps = msg.split( '-' )[3];
	let purpose = msg.split( '-' )[4];
	//Check if command begins with createGroup
	if( msg.content.split( '-' )[0] == 'createGroup' ) {
		//Checks if number inputs are numbers
		if( !isNaN( healers ) && !isNaN( tanks ) && !isNaN( dps ) ) {
			let gr = new Group( user, healers, tanks, dps, purpose );
			msg.reply( gr.say() );
		}
	}
});

client.login( process.env.TOKEN );