//priemiro devemos importar o express aqui para utiliza-lo
import express from "express"; 

const app = express();

const livros = [
    {id: 1,"titulo":"Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"}
] 

app.get('/',(req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros',(req,res) =>{
    res.status(200).sjon(livros)
})

export  default app