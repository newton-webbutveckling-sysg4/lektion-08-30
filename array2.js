const names = ['mikael', 'sixten', 'emma', 'luisa']

console.log('Originalnamnen: ', names);

const capitalLetters = names.map( name => {
	return name.toUpperCase()
} )
console.log('Med stora bokstäver: ', capitalLetters);

const capitalInitialLetter = names.map( name => {
	let first = name.charAt(0).toUpperCase()
	let last = name.substring(1)
	return first + last
	// console.log('First letter: ', first);
	// console.log('Last: ', last);
})
console.log('Korrigerat: ', capitalInitialLetter);

// Vi tänker oss att vi får användaruppgifter från en databas
const users = [
	{
		firstName: 'Anna',
		surName: 'Andersson',
		email: 'anna@gmail.com'
	},
	{
		firstName: 'Beata',
		surName: 'Bengtsson',
		email: 'beata_b@hotmail.com'
	},
	{
		firstName: 'Caesar',
		surName: 'Caspersson',
		email: 'caesar.c@live.com'
	}
]

const onlineUsers = users.map(user => user.firstName)
console.log('Online users: ', onlineUsers);

// Map och filter i samma andetag!
const hotmailAddresses = users.map(user => user.email).filter(email => email.endsWith('hotmail.com'))



//
