async function delay(t){
    return new Promise(res => setTimeout(res, t));
}
let canClick = true;
moves = {
    rock : "rock",
    paper : "paper",
    scissors : "scissors",
}
divs = {
    rock : "#rock",
    paper : "#paper",
    scissors : "#scissors", 
}
async function Hands(move){
    $('img').toggleClass('anim');
}

async function RegisterClick(move){
    if(move == null || !canClick) return;
    canClick = false;
    for(let i = 0; i < Object.values(divs).length; i++){
        $(Object.values(divs)[i]).css('background-color', 'var(--disabled-color)');
    }
    $(divs[move]).css('background-color', 'var(--select-color)');

    await Hands(move);

    for(let i = 0; i < Object.values(divs).length; i++){
        $(Object.values(divs)[i]).css('background-color', 'var(--default-color)');
    }
    canClick = true;
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