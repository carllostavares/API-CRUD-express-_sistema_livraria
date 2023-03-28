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

app.get('/livros/:id',(req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})


app.post('/livros',(req, res) =>{
    livros.push(req.body);//aqui ele pega o que tem no corpo da requisição e coloca no array com o push
    res.status(201).send('O livro foi cadastrado consucesso !'); //aqui ele enviar uma resposta de confirmação com a codigo 201 junto com o texto da msg
})

//o ':id' significa quer vai chegar um oparamentro indicando qual o livro sera atualizado.//com o 'req.params.id' ele vai no parametro da  requisição e pega o id// com o ' req.body.titulo' pega o que vem no corpo, body, e colocar na conteudo do id index

app.put('/livros/:id',(req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id',(req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} foi excluido com sucesso !`);

})


//function para pegar o a posição do elemento no array 
function buscaLivro (id){
    return livros.findIndex(livro => livro.id == id);
}

export  default app