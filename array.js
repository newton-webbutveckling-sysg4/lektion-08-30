console.log('Array demo');

const lista = ['yellow', 'white', 'lime', 'hotpink', 'black']

let tenthColor = lista[9]
console.log('The 10th color is: ', tenthColor);

const xs = [1, 3, 5, 7]
const ys = [2, 4, 6, 8]
let zs = []

for( let i=0; i<xs.length; i++ ) {
	let x = xs[i]
	let y = ys[i]
	let z = x + y
	zs.push(z)
	console.log(` ${x} + ${y} === ${z} `);
	// === är striktare, måste vara samma datatyp också
}

zs[15] = 11


console.log('zs är: ', zs);
console.log('Längden är: ', zs.length);
console.log('Finns inte: ', zs[10]);

// Higher order functions
let sumX = 0
xs.forEach( item => {
	console.log('For each: ', item);
	sumX += item
} )
console.log('Summa av xs: ', sumX);







//
