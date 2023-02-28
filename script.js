async function delay(t){
    return new Promise(res => setTimeout(res, t));
}

moves = {
    rock,
    paper,
    scissors,
}
async function RegisterClick(move){
    if(move == null) return;
}

$('#rock').click(()=>{
    RegisterClick(moves.rock);
})
$('#paper').click(()=>{
    RegisterClick(moves.paper);
})
$('#scissors').click(()=>{
    RegisterClick(moves.scissors);
})