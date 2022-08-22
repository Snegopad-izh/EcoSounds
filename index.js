// получили в константу коллекцию из кнопок в хедере
const headerBtns = document.querySelectorAll('button.header__button'); 

// получаем доступ к месту включения обоев
const currentStyleBg = document.querySelectorAll('.main__wrapper')[0];

// получаем доступ к месту со стилем кнопки проигрывания звука
const playPauseBtn = document.querySelectorAll('button.play-button-isPlay')[0];

// создаём объект класса выигрыватель аудио
const audio = new Audio();

// показывает, включена ли музыка
let isPlay = false;

// источник звука по умолчанию
audio.src = 'assets/audio/forest.mp3';
// подсвечиваем кнопку с источником по умолчанию
headerBtns[0].classList.toggle('header__button-isActive');

//Вешаем обработчик на кнопку включения звука
playPauseBtn.addEventListener('click', playBtnIsPressed);
function playBtnIsPressed() {
    //В обработчик входим по каждому нажатию кнопки
    //А тут делаем триггер на включение
    if (isPlay) {
        pauseAudio();
        return;
    }
    
    if (!isPlay) {
        playAudio();
    }
}

// Включаем проигрывание и показываем картинку паузы
function playAudio() {
    isPlay = true;
    audio.play();
    console.log('В твоём доме будет играть музыка, но ты её не услышишь...(с)')
    playPauseBtn.classList.add('play-button-isPause');
}

// Выключаем проигрывание и показываем картинку проигрывания
function pauseAudio() {
    isPlay = false;
    audio.pause();
    playPauseBtn.classList.remove('play-button-isPause');
}


// Делаем обработчики всех кнопок хэдэра
headerBtns[0].addEventListener('click', toggleBtn_0);
function toggleBtn_0() {
    //Отключаем подсветку активности всех кнопок и сброс фона
    clrAllBtns();   
    // Включаем подсветку указанной кнопки
    headerBtns[0].classList.toggle('header__button-isActive');
    // Ставим обои в тему
    currentStyleBg.classList.add('main__wrapper');
    // Указываем источник музыки в тему
    audio.src = 'assets/audio/forest.mp3';
    // Включаем шарманку
    playAudio();
}

headerBtns[1].addEventListener('click', toggleBtn_1);
function toggleBtn_1() {
    clrAllBtns();
    headerBtns[1].classList.toggle('header__button-isActive');
    currentStyleBg.classList.add('main__wrapper-isDrozd');
    audio.src = 'assets/audio/drozd.mp3';
    playAudio();
}

headerBtns[2].addEventListener('click', toggleBtn_2);
function toggleBtn_2() {
    clrAllBtns();
    headerBtns[2].classList.toggle('header__button-isActive');
    currentStyleBg.classList.add('main__wrapper-isJavoronok');
    audio.src = 'assets/audio/javoronok.mp3';
    playAudio();
}

headerBtns[3].addEventListener('click', toggleBtn_3);
function toggleBtn_3() {
    clrAllBtns();
    headerBtns[3].classList.toggle('header__button-isActive');
    currentStyleBg.classList.add('main__wrapper-isSlavka');
    audio.src = 'assets/audio/slavka.mp3';
    playAudio();
}

headerBtns[4].addEventListener('click', toggleBtn_4);
function toggleBtn_4() {
    clrAllBtns();
    headerBtns[4].classList.toggle('header__button-isActive');
    currentStyleBg.classList.add('main__wrapper-isSolovey');
    audio.src = 'assets/audio/solovey.mp3';
    playAudio();
}

headerBtns[5].addEventListener('click', toggleBtn_5);
function toggleBtn_5() {
    clrAllBtns();
    headerBtns[5].classList.toggle('header__button-isActive');
    currentStyleBg.classList.add('main__wrapper-isZarynka');
    audio.src = 'assets/audio/zarynka.mp3';
    playAudio();
}

// тут отключается подсветка всех кнопок и ставятся обои по умолчанию
function clrAllBtns() {
    for (let i = 0; i < headerBtns.length; i++) {
        headerBtns[i].classList.remove('header__button-isActive');
    }
    currentStyleBg.className = "main__wrapper";
}

const message = '1. 10\n2. 10\n3. 10\n4. 10\n5. 20\n6. ?'
console.log(message);