import express from 'express';
import {obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoControllers, obtenerSuperheroesMayoresDe30Controllers} from './controllers/superheroesControllers.mjs';



const app= express();
const PORT= 3005;

//Rutas

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoControllers);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controllers);

//Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

