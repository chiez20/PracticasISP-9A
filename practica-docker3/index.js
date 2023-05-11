require('dotenv').config();
const express = require('express')
const cors  =require('cors')


const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))

let canchas = [];

app.get('/canchas', async (req, res) => {
    console.log('TRYING TO FETCH Canchas');
      res.status(200).send(canchas);
      console.log('FETCHED canchas');    
});



app.post('/canchas', async (req, res) => {
  console.log('TRYING TO STORE cancha');
  const {body} = req 
  canchas.push(body);
  //canchaDescripcion = req.body.descripcion;

    res
      .status(201)
      .send({ message: 'cancha saved', body });
    console.log('STORED NEW cancha');

    
});



app.delete('/canchas/:id', async (req, res) => {
  console.log('TRYING TO DELETE cancha');
    const {id} = req.params;
    canchas = canchas.filter(p  => p.id !== id);
    res.status(200).json({ message: 'DELETED cancha' });
    console.log('DELETED cancha');
});


module.exports = {app, canchas};