const express = require('express')
const server = express()
const koders = [

    {
        name:'Omar',
        generacion:33
    },
    {
        name:'Hugo',
        generacion:33
    },
    {
        name:'Fer',
        generacion:33
    }
]
/*

Habilita nuestro server para poder recibir peticiones en formato JSON

server.use(express.json());

*/
server.use(express.json());

server.get('/', (req, res) => {
    console.log('GET root')

    res.writeHead(200,{
        'Content-Type': 'text/plain',
        'yo-soy':'Jugol'
    })

    res.end('hola mundo')
})

//los request se van a poder leer gracias a server.use y los transforma a JSON
server.post('/koders',(req,res)=>{

    console.log('body',req.body)

    const newKoderName = req.body.name

    const newKoderGen = req.body.generacion

    const newKoder = {
        name:newKoderName,
        generacion:newKoderGen
    }

    koders.push(newKoder)
    
    res.json(koders)

})

//Responder la lista de joders que existan
server.get('/koders',(req,res)=>{
    // res.writeHead(200,{
    //     'Content-Type':'application/json'
    // })
    // res.end(JSON.stringify(koders))

    //Sirve para definir primero el status del server 
    res.status(500)
    // Me pone el Content-Type y tambien me aplica el JSON.stringify
    res.json(koders)


})

server.listen(8080, () => {
  console.log(`server ready at port 8080`)
})