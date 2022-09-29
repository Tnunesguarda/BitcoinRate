// API link:
// https://api.coindesk.com/v1/bpi/currentprice.json
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

//Variável que vai guardar os dados que vêm da API
let dados =""


 fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(response => response.json())
  .then(json =>
    {
    //let dados = json.bpi.EUR.rate;
    //dados = json.bpi.EUR.rate;
    dados = json;
    //console.log(json.bpi.EUR.rate)
    console.log("Dados recebidos da API: ")
    console.log(JSON.stringify(dados))

    //Adiciona na página html
    //document.querySelector('body').innerHTML += `<p>Bitcoin Rate: ${JSON.stringify(dados.bpi.EUR.rate)} </p>`
    document.querySelector('body').innerHTML += `<p>Date/Time: ${dados.time.updated}</p>`
    
    document.querySelector('body').innerHTML += `<p>Bitcoin Rate: ${dados.bpi.EUR.rate}€</p>`

    document.querySelector('body').innerHTML += `<p>Bitcoin Rate: ${dados.bpi.USD.rate}$</p>`
    
    //document.querySelector('body').innerHTML += `<p>dados: ${JSON.stringify(dados)} </p>`
    })

//console.log(json.bpi.EUR.rate)

//console.log(' **** Chamou o script.js');

//document.querySelector('body').innerHTML += `<p> Teste adiconar html</p>`

//document.querySelector('body').innerHTML += `<p>dados: ${JSON.stringify(dados.bpi.EUR.rate)} </p>`

//document.querySelector('body').innerHTML += `<p>dados: ${JSON.stringify(dados)} </p>`