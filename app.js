//const
const express = require ('express');
const fs = require('fs');
const app = express();

//Servidor
app.listen(3030, () => console.log('Servidor funcionando'));


//Rutas
const rutasMain = require ('./routes/main');
const rutasHeroes = require ('./routes/heroes'); 

//Home
app.get('/', rutasMain)
app.use('/heroes', rutasHeroes)
app.get('/creditos', rutasMain)
app.get('/*', (req,res) => {
    res.status(404).send('404 not fund. <br> ¡Houston, tenemos problemas!')
});

