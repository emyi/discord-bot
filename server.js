const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.js");

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
//Create Group Class
class Group {
 	constructor( groupCreator, healers, tanks, dps, groupPurpose ) {
 		this.groupCreator = groupCreator;
 		this.healers = healers;
 		this.tanks = tanks;
 		this.dps = dps;
 		this.groupPurpose = groupPurpose;
 	}
 	say() {
 		console.log( this.groupCreator + " is looking for " + this.healers + " healers, " + this.tanks + " tanks, " + this.dps + " dps for " + this.groupPurpose );
 	}
 }
client.on('message', msg => {
	let healers = msg.content.split( '-' )[1];
	let tanks = msg.content.split( '-' )[2];
	let dps = msg.content.split( '-' )[3];
	let purpose = msg.content.split( '-' )[4];
	//Check if command begins with createGroup
	if( msg.content.split( '-' )[0] == 'createGroup' ) {
		//Checks if number inputs are numbers
		if( !isNaN( healers ) && !isNaN( tanks ) && !isNaN( dps ) ) {
			let gr = new Group( 'Eric', healers, tanks, dps, purpose );
			msg.reply( gr.say() );
		}
	}
});

client.login( process.env.TOKEN || config.TOKEN );