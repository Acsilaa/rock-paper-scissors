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
async function GetSetEHand() {
    let i = Math.floor(Math.random() * 3);
    let eMove = Object.values(moves)[i];
    $("#e").attr('src', './' + eMove + '_hand.png');
    return eMove;
}
async function GetResult(m1, m2){
    
}
async function Hands(move){
    for(let i = 0; i < 3; i++){
        $('img').addClass('anim');
        await delay($(':root').css('--anim-dur').replace("s", "") * 1000 - 100);
        $('img').removeClass('anim');
        if(i == 2) break;
        await delay(100);
        $('img').addClass('anim');
    }
    $('#p').attr('src', './' + move + '_hand.png');

    let eMove = await GetSetEHand();
    await GetResult(move, eMove);
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