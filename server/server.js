require('./config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/usuario',function(req,res){
	res.send({User:'Er Levi',lastName:'Medina Rodríguez'})
})
app.post('/usuario',function(req,res){
	let body = req.body
	if(body.nombre === undefined)
		res.status(400).json({
			status:false,
			message:'not found name.'
		})
	else{
	res.status(201).json({body})
	}
})
app.put('/usuario/:id',function(req,res){
	res.send({id:req.params.id,nombre:'Er Leví'})
})
app.delete('/usuario',function(req,res){
	res.send('Hello word post')
})
app.listen(process.env.PORT,()=>{
	console.log('Escuchando en 3000');
})