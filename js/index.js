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

    const toy = document.getElementById('toy-livroom')
//объект с едой
let food = {
apple:15,
milk:25,
meat:50
}
//переменные с статой
let hunger = 200;
let happines = 200;

//механика убавления счастья и голода
if(hunger>=0){
 setInterval(()=>{
hunger--;
hStat.style.width = hunger + 'px'
console.log('-1')
 },500)
}
if(happines>=0){
 setInterval(()=>{
happines--;
mStat.style.width = happines + 'px'
console.log('-1')
 },750)
}



 //кнопки с пополнением голода
function hungerUpApple(){
if(hunger<200){
apple.style.display = 'none' 
hunger = hunger + food.apple
hStat.style.width = hunger + 'px';
setTimeout(() => {
apple.style.display = 'flex'
},8700);
}    
}
function hungerUpMilk(){
if(hunger<200){
milk.style.display = 'none' 
hunger = hunger + food.milk
hStat.style.width = hunger + 'px';
setTimeout(() => {
milk.style.display = 'flex'
},12000);
}    
}
function hungerUpMeat(){
if(hunger<200){
meat.style.display = 'none'  
hunger = hunger + food.meat
hStat.style.width = hunger + 'px';
setTimeout(() => {
meat.style.display = 'flex'
},20000);
}    
}
//функция пополнения счастья
function happinesUp(){
if(happines<200){
toy.style.display = 'none'
happines = happines + 10 
mStat.style.width = happines + 'px';
setTimeout(() => {
toy.style.display = 'flex'
},8000);
}  
}    
if (happines>200) {
    happines = 200;
    mStat.style.width = happines + 'px'
}  
    



































apple.addEventListener('click',hungerUpApple)
milk.addEventListener('click',hungerUpMilk)
meat.addEventListener('click',hungerUpMeat)
toy.addEventListener('click',happinesUp)

    function setGame(){  //Настройка игры
        stats.forEach(value => {
            let bgColor = value.getAttribute('data-color');
            value.style.backgroundColor = bgColor;
        });


    }

    setGame();