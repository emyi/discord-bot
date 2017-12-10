//Constants
const dotenv = require( 'dotenv' );
dotenv.load();
const Discord = require( 'discord.io' );
const bot = new Discord.Client({
	autorun: true,
	token: process.env.TOKEN
});
const commands = [
	'commands',
	'createGroup-<number of healers>-<number of tanks>-<number of dps>-<purpose of group>'
];
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
//////////////////////////////////////////////////////////////////
//Testing stuff here
let x = 'createGroup-3-3-3-party';
let healers = x.split( '-' )[1];
let tanks = x.split( '-' )[2];
let dps = x.split( '-' )[3];
if( x.split( '-' )[0] == 'createGroup' ) {
	if( !isNaN( healers ) && !isNaN( tanks ) && !isNaN( dps ) ) {
		let a = 'Eric';
		let b = x.split( '-' )[1];
		let c = x.split( '-' )[2];
		let d = x.split( '-' )[3];
		let e = x.split( '-' )[4];
		let f = new Group( a, healers, tanks, dps, e );
		f.say();
	}
}
//////////////////////////////////////////////////////////////////
//Bot ready!
bot.on( 'ready', ( event ) => {
	console.log( 'Logged in as %s - %s\n', bot.username, bot.id );
});
//Bot takes input message
bot.on( 'message', ( user, userID, channelID, message, event ) => {
	let healers = message.split( '-' )[1];
	let tanks = message.split( '-' )[2];
	let dps = message.split( '-' )[3];
	let purpose = message.split( '-' )[4];
	//Check if command begins with createGroup
	if( message.split( '-' )[0] == 'createGroup' ) {
		//Checks if number inputs are numbers
		if( !isNaN( healers ) && !isNaN( tanks ) && !isNaN( dps ) ) {
			let gr = new Group( user, healers, tanks, dps, purpose );
			bot.sendMessage({
				to: channelID,
				message: gr.say()
			});
		}
	}
});