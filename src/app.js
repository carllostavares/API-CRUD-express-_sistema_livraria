//priemiro devemos importar o express aqui para utiliza-lo
import express from "express"; 

const app = express();

app.use(express.json()); //isso faz interpretar, pegando o que chega via Get ou Post e tranforma em objeto javascript

const livros = [
    {id: 1,
    "titulo":"Senhor dos Aneis"},
    {id: 2,
    "titulo": "O Hobiit"}
] 

app.get('/',(req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros',(req,res) =>{
    res.status(200).json(livros)
})
app.post('/livros',(req, res) =>{
    livros.push(req.body);//aqui ele pega o que tem no corpo da requisição e coloca no array com o push
    res.status(201).send('O livro foi cadastrado consucesso !'); //aqui ele enviar uma resposta de confirmação com a codigo 201 junto com o texto da msg
})
export  default app