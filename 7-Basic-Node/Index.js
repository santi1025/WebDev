console.log("Hello World");

const fs = require("fs");
fs.readFile("input.txt","utf-8",(err, fd)=>{
	if(err){
		console.log("There was an error: " + err);
	} else {
		console.log("The file says: \n" + fd);
	}
});

const sw = require("star-wars-quotes");
console.log(sw());

const superheroes = require('superheroes');
const supervillains = require('supervillains');
supervillains.random();

console.log("nunca olvides que el miedo. no es más que el precursor del valor. que luchar y triunfar. frente al miedo es lo que significa ser un héroe.-" + superheroes.random() + "  \n VS \n  En este mundo no existe ni el bien ni el mal, solo hay poder y solo  aquellos lo suficientemente fuertes para usarlo. .-" + supervillains.random());