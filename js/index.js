    const kitchenScene = document.getElementById('kitchen');
    const livingRoomScene = document.getElementById('livingroom');
    const toiletScene = document.getElementById('toilet');
    const bedroomScene = document.getElementById('bedroom');

    const pet = document.querySelector('.pet');

    const stats = document.querySelectorAll('.stat div');
  
    const mStat = document.querySelector('.m-stat .stat')
    const hStat = document.querySelector('.h-stat .stat')
    const moodStat = document.getElementById('mood_stat');
    const hungerStat = document.getElementById('hunger_stat');
    const sleepStat = document.getElementById('sleep_stat');

    const apple = document.getElementById('apple')
    const milk = document.getElementById('milk')
    const meat = document.getElementById('meat')


    //Functions
let food = {
apple:15,
milk:25,
meat:50
}

let width = 200;


if(width>=0){
 setInterval(()=>{
width--;
hStat.style.width = width + 'px'
console.log('-1')
 },750)
}

function hungerUpApple(){
if(width<200){
width = width + food.apple
hStat.style.width = width + 'px';
}    
}
function hungerUpMilk(){
if(width<200){
width = width + food.milk
hStat.style.width = width + 'px';
}    
}
function hungerUpMeat(){
if(width<200){
width = width + food.meat
hStat.style.width = width + 'px';
}    
}



































apple.addEventListener('click',hungerUpApple)
milk.addEventListener('click',hungerUpMilk)
meat.addEventListener('click',hungerUpMeat)

    function setGame(){  //Настройка игры
        stats.forEach(value => {
            let bgColor = value.getAttribute('data-color');
            value.style.backgroundColor = bgColor;
        });


    }

    setGame();