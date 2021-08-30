// 6.1 Skriv en arrow function som gör samma sak som följande funktion:
// function vanlig(parameter) { return parameter; }
const vanlig = (parameter) => parameter

// 6.2 Skriv en arrow function som tar ett tal som parameter och returnerar dubbla talet. Om man till exempel anropar funktionen med 5 som parameter ska den returnera 10.
const multiplyByTwo = x => x * 2


// 6.3 Skriv en arrow function som tar två tal som parametrar och returnerar deras medelvärde.
const mean = (a, b) => (a + b) / 2

// För att avrunda till heltal: Math.ceil, Math.floor, Math.round

// 6.4 Skriv en arrow function som inte tar några parametrar och alltid returnerar talet 42.
const answer = () => 42

// 6.5 Skriv en arrow function som tar en sträng som parameter och skriver ut den på konsolen.
const greetings = text => { console.log(text) }

// 6.6 Skriv en arrow function som tar en parameter och returnerar true om den är större än noll.
// Tre alternativ - det sista är smidigast
// const isGreaterThanZero = x => { if( x > 0 ) return true; else return false; }
// const isGreaterThanZero = x => (x > 0 ? true : false)
const isGreaterThanZero = x => x > 0

// 6.7 Skriv en arrow function som tar ett tal som parameter och returnerar true om talet är 10 eller 12.
const is10Or12 = x => (x === 10) || (x === 12)
// Operatorer för booleans: || && !

// 6.8 Skriv en arrow function som tar en parameter och returnerar true om den är en sträng som innehåller "och".
const containsOch = string => string.toLowerCase().includes('och')

// 10 För den här uppgiften ska du utgå från följande listor:
const listA = [2, 4, 8, 16, 32, 64, 128, 256];
const listB = [10, 'b', -32, 'FF', 3.14, [], (x => x + 1), ' end'];
// Använd forEach för att skriva ut alla element i listA på konsolen.
listA.forEach(a => {
	console.log(a);
})

// Använd forEach för att skriva ut alla element i listB som är strängar.
listB.forEach(b => {
	if( (typeof b) === 'string' ) {
		console.log(b);
	}
})

// Använd map för att skapa en kopia av listA, där alla element har minskats med ett: 1, 3, 7, osv.
const aDecrease = listA.map(a => a - 1)
console.log('aDecrease:', aDecrease);

// Använd map för att skapa en kopia av listB där varje element har konverterats till en sträng.
const bConverted = listB.map(b => b + '')
// const bConverted = listB.map(b => String(b)  )
console.log('bConverted:', bConverted);

// Använd filter för att skapa en lista som innehåller alla element i listB som har datatypen String eller Number.
const stringsAndNumbers = listB.filter(
	b => (typeof b) === 'string' || (typeof b) === 'number')
console.log('Strings and numbers:', stringsAndNumbers);

/*

Använd find för att hitta första elementet i listA som är större än 20.

Använd reduce för att räkna ut summan av alla element i listA.

Använd filter och reduce för att konkatenera alla strängar i listB.
*/
