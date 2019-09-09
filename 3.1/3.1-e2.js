// Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación `const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];` y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar `map` para que nos echase una mano?

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
const addWelcomeMessage = name => "Bienvenida " + name;
const welcomeMessageWithNames = names.map(addWelcomeMessage);

console.log(welcomeMessageWithNames);

//La consola nos devuelve:

// (5) ["Bienvenida María", "Bienvenida Lucía", "Bienvenida Susana", "Bienvenida Rocío", "Bienvenida Inmaculada"]
// 0: "Bienvenida María"
// 1: "Bienvenida Lucía"
// 2: "Bienvenida Susana"
// 3: "Bienvenida Rocío"
// 4: "Bienvenida Inmaculada"
// length: 5
// __proto__: Array(0)
