    const kitchenScene = document.getElementById('kitchen');
    const livingRoomScene = document.getElementById('livingroom');
    const toiletScene = document.getElementById('toilet');
    const bedroomScene = document.getElementById('bedroom');

    const pet = document.querySelector('.pet');

    const stats = document.querySelectorAll('.stat div');
    const moodStat = document.getElementById('mood_stat');
    const hungerStat = document.getElementById('hunger_stat');
    const sleepStat = document.getElementById('sleep_stat');

    //Functions

    function setGame(){  //Настройка игры
        stats.forEach(value => {
            let bgColor = value.getAttribute('data-color');
            value.style.backgroundColor = bgColor;
        });


    }

    setGame();