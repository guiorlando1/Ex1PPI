// desenvolvimento de um aplicativo web de tabuada
import express from 'express'; //cria a aplicação de forma rápida

const host = '0.0.0.0'; //representa as placas de rede do computador que está executando a aplicação
const porta = 3000; // identifica o programa dentre os programas que estão em execução no computador

const app = express();

function retornaPaginaInicial(requisicao,resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>')
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial da calculadora de tabuadas!</h1>');
    resposta.write('<h2>Informe o valor que deseja calcular na url, <br> por exemplo: http://localhost:3000/tabuada?valor=1&sequencia=10</h2>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

function calcularTabuada(requisicao,resposta){
    let sequencia = requisicao.query.sequencia;
    sequencia = parseInt(sequencia);
    let valor = requisicao.query.valor;
    if(!sequencia){
        sequencia = 10;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>')
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if (valor){
        if(valor>0){
            for(let i=1 ; i<sequencia+1 ; i++){
                const resultado = valor*i;
                resposta.write('<h3>' + valor + ' x ' + i + ' = ' + resultado + '</h3>');
            }
        }
        else{
            resposta.write('<h2>Informe um valor inteiro e positivo</h2>');
        }   
    }
    else{
        resposta.write('<h2>Informe o valor que deseja calcular na url, <br> por exemplo:http://localhost:3000/tabuada?valor=1&sequencia=10</h2>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}

app.get("/",retornaPaginaInicial);//a função página inicial é passada como parâmetro
app.get("/tabuada",calcularTabuada);//calculadora de tabuadas que criei

// ( ) => {} - função anônima, também conhecida como arrow function
app.listen(porta, host, ( ) => {
    console.log("O servidor está executando em http://" + host + ":" + porta);
});
