let tentativas = 0;
let numeroRandomico=Math.floor(Math.random()*100)+1;

function checarTentativa(){
    tentativas++;

    if(tentativas == 5){
        alert("Game Over");
        perdeu();
        return;

    }
    alert(tentativas)

}
function perdeu(){
    
    window.location.reload();
}