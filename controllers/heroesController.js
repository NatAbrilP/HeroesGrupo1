const fs = require('fs');
const heroes =JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'))


module.exports = {
    listaHeroes : (req, res) => {
        return res.send(heroes)
    },

    detalle : (req, res) => {
    let heroe = heroes.find(heroe => heroe.id == req.params.id);
        if(heroe == undefined){
          res.send(`No se encontró héroe`)
        }else{
             res.send(`Mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
    } 
},

     detalleYBio : (req, res) => {
   
        let heroe = heroes.filter(heroe =>{
            return heroe.id == req.params.id
        });
        if(heroe[0] == undefined){
            res.send('No encontramos un heroe para mostrarte su biografía');
        }else if(req.params.ok){
                res.send(`Heroe: ${heroe[0].nombre} || Reseña: ${heroe[0].resenia}`)
            }else{
                res.send(`${heroe[0].nombre} dijo: lamento que no quieras saber más de mí`)
            }
        }
    }
