//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let sorteio = [] 

function adicionarAmigo(){
    
    amigos = document.querySelector('input').value;
    sorteio.push(amigos);
    console.log(sorteio);
    document.getElementById("listaAmigos").innerText = sorteio ;
    
}




function sortearAmigo(){
amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)]
console.log(`O amigo secreto é ${amigoSecreto}!`)
document.getElementById("resultado").innerText = `O amigo secreto é ${amigoSecreto}!` ;

}


