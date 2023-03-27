//Sempre que vamos trabalhar com um projeto em Node.js do zero, uma das primeiras coisas que fazemos é criar um arquivo de configuração utilizando o comando npm init ou yarn init, assim como para todas as instalações de libs externas utilizamos o comando npm install <nome do pacote> ou yarn add <nome do pacote>.

// fazer também a ainstalação do Express : npm install express@4.17.3 (4.17.3 é a utimas versao no momento)

import app from './src/app.js'

//const http = require("http") // requerir o metodo htttp
const port = process.env.PORT || 3000; /// definir uma porta para o servidor escutar no servidor local

/*const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/outores': 'Listagem de autores',
    '/editora': 'Pagina editora',
    '/sobre' : 'Informacao sobre o Projeto.'
} 
const server = http.createServer((req,res) => {
res.writeHead(200,{'Content-Type': 'text/plain'})//devolve o staatus 200"OK" com o tipo de conteudo que estou mandando.
res.end(rotas[req.url]);
})//criando o servidor usando o modulo http para aplicar o metodo creatServer
// rep => requisição / res => resposta // usando uma funçãoa callback //Toda vez que o servidor http receber um requisição, a função callback será executada.*/

app.listen(port,() => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

// USAR O COMANDO: npm instal nodemon@2.0.15 -D
// para instalar uma biblioteca para rodar o sevidor sempre que salvarmos o arquivo no VSCode e nao precisar ficar rodandao manualmente no terminal.
// usadmo os -D no final para indicar que é uma dependência de desenvolvimento e nao vai para produção

//depois vai no package.json  e coloca na parte script : "dev": "nodemon server.js"
//por fim, executa no terminal : npm run dev

// colar o "type": "module", no arquivo packjson.json para informar que está trabalhando com importação e exportação de modulos