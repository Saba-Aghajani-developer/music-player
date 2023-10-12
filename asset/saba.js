let flag10 = 0
let test2 = 0
let y
let x
let width1
let time
let test = 0
let audio = document.getElementsByClassName('audio')
let line = document.getElementsByClassName('line')[0]

// start and pause 
document.getElementById('play').addEventListener('click', () => {
    if (flag10 % 2 == 0) {
        audio[turn].play();
        document.getElementById('start').style.display = 'none'
        document.getElementById('pause').style.display = 'flex'
        document.getElementsByClassName('cd')[0].classList.add('animetion')

        time = audio[turn].duration
    } else {
        document.getElementById('start').style.display = 'flex'
        document.getElementById('pause').style.display = 'none'
        document.getElementsByClassName('cd')[0].classList.remove('animetion')
        audio[turn].pause();
    }
    flag10++
    test2++
})

// change time 
line.addEventListener('mousedown', (e) => {
    if (test2 > 0) {
        width1 = e.offsetX
        let ab
        if (time < 120) {
            ab = 200
            console.log('s');
        } else if ((time < 150) && (time >= 120)) {
            ab = 165
            console.log('m');
        }
        else if ((time < 180) && (time >= 150)) {
            ab = 135
            console.log('m');
        } else {
            ab = 110
            console.log('l');
        }
        test = ((width1 * 100) / ab)
        document.getElementById('timeLineChild').style.width = test + "%"
        audio[turn].currentTime = test
        document.getElementById('start').style.display = 'flex'
        document.getElementById('pause').style.display = 'none'
        audio[turn].pause();
    }
})
line.addEventListener('mouseup', () => {
    if (test2 > 0) {
        document.getElementById('start').style.display = 'none'
        document.getElementById('pause').style.display = 'flex'
        audio[turn].play();
    }
})

// time 
let set1 = setInterval(() => {
    y = audio[turn].currentTime
    x = ((y * 100) / time)
    if (y < time) {
        document.getElementById('timeLineChild').style.width = x + 1 + '%';
    } else {
        document.getElementById('timeLineChild').style.width = 1 + '%'
        document.getElementById('start').style.display = 'flex'
        document.getElementById('pause').style.display = 'none'
        document.getElementsByClassName('cd')[0].classList.remove('animetion')
    }
}, 1);