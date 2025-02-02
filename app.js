
let sorteio = [] 

function adicionarAmigo(){
    
    amigos = document.querySelector('input').value;
    sorteio.push(amigos);
    console.log(sorteio);
    document.getElementById("listaAmigos").innerText = sorteio ;
    
}




function sortearAmigo(){
amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)]
document.getElementById("resultado").innerText = `O amigo secreto é ${amigoSecreto}!` ;

}


