const fs = require('fs');
let tareas = fs.readFileSync('tareas.json','utf-8');
console.log(tareas);
let arrayTareas = JSON.parse(tareas);
console.log(arrayTareas);
console.log('------------------------------');
console.log('------------------------------');
for(let i = 0; i < arrayTareas.length; i++){
    console.log(arrayTareas[i].titulo + ' - ' + arrayTareas[i].estado);
}
console.log('------------------------------');
