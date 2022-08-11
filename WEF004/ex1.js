const boxes = document.querySelectorAll('.box')
let turn=1;

for(let box of boxes){
    
    box.addEventListener('click',function(event){

        const boxText = event.target.querySelector('.box-text');

        if(boxText.textContent==""){
            if(turn%2==0){
                console.log(boxText.textContent);
                boxText.classList.add('bi','bi-circle');
            }else{
                boxText.classList.add('bi','bi-x-lg');
            }
            turn+=1;
            xoTurn = (turn % 2 == 0 ? '<img src="circle.png"><div>Turn</div>' : '<img src="cross.png"><div>Turn</div>');
            document.querySelector(".current").innerHTML=xoTurn;
        }
        console.log(turn);
        console.log(boxText.classList); 
    });
    
}
console.log(turn);

/*
box.addEventListener('click', function (event) {
    xoImg = (i % 2 == 0 ? '<img src="circle.png">' : '<img src="cross.png">');
    xoHTML = `<div id="box-${i}">${xoImg}</div>`;
    // 1. Get the element itself by event.target or event.currentTarget
    box = event.target;
    // 2. Check if the box is occupied
    if (box.textContent == "") {
    // 3, Put the X in if the box is not occupied.
        event.target.innerHTML = xoHTML
    }
     // 4, change Turn
xoTurn = (i % 2 == 0 ? '<img src="circle.png"><div>Turn</div>' : '<img src="cross.png"><div>Turn</div>');
document.querySelector(".current").innerHTML=xoTurn;
})*/