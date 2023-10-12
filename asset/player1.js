let _slide1 = document.querySelectorAll('main >section > div > div:nth-of-type(1) > div > div')
let _slide = document.querySelectorAll('.swiper > div > div')
let datamusic = ' '
let datah2 = ''
let datah3 = ''
let dataimg = ''
let datanumber = ''
let _player = document.getElementsByClassName('body')[0]
let _before = document.getElementById('before')
let _next = document.getElementById('next')
let turn = 0
let index2 = 0
let flag11 = 0
let turn1 = 0
let _background = document.querySelectorAll('.main>img')
// ****************************** start close ******************************  
document.getElementById('close').addEventListener('click', () => {
    document.getElementsByClassName('body')[0].style.display = 'none'
    audio[turn].pause();
    document.getElementById('start').style.display = 'flex'
    document.getElementById('pause').style.display = 'none'
    document.getElementsByClassName('cd')[0].classList.remove('animetion')
})
// ****************************** end close ******************************  

_slide.forEach((i, index) => {
    i.addEventListener('click', () => {
        datah2 = i.getAttribute('data-h2')
        datah3 = i.getAttribute('data-h3')
        dataimg = i.getAttribute('data-img')
        datamusic = i.getAttribute('data-music')
        datanumber = i.getAttribute('data-number')
        turn = index
        time = audio[turn].duration
        t = time
        m = parseInt(t / 60)
        s = parseInt(t % 60)
        document.getElementsByClassName('minn')[0].innerHTML = '0' + m
        document.getElementsByClassName('secc')[0].innerHTML = s
        index2 = index
        _get()
        console.log(dataimg);
    })
})
// **************** start before key ****************
_before.addEventListener('click', () => {
    if (flag11 == 0) {
        console.log('flag11 = 0');
        turn1 = index2 - 1
        datah2 = _slide[turn1].getAttribute('data-h2')
        datah3 = _slide[turn1].getAttribute('data-h3')
        dataimg = _slide[turn1].getAttribute('data-img')
        datamusic = _slide[turn1].getAttribute('data-music')
        datanumber = _slide[turn1].getAttribute('data-number')
        audio[turn].pause();
        turn = turn1
        document.getElementById('start').style.display = 'flex'
        document.getElementById('pause').style.display = 'none'
        document.getElementsByClassName('cd')[0].classList.remove('animetion')
        time = audio[turn1].duration
        t = time
        m = parseInt(t / 60)
        s = parseInt(t % 60)
        document.getElementsByClassName('minn')[0].innerHTML = '0' + m
        document.getElementsByClassName('secc')[0].innerHTML = s
        _get()
        flag11++
    } else {
        console.log('turn1 :' + turn1);
        console.log('flag11 :' + flag11);
        if ((turn1 - 1) >= 0) {
            turn1 = turn1 - 1
            datah2 = _slide[turn1].getAttribute('data-h2')
            datah3 = _slide[turn1].getAttribute('data-h3')
            dataimg = _slide[turn1].getAttribute('data-img')
            datamusic = _slide[turn1].getAttribute('data-music')
            datanumber = _slide[turn1].getAttribute('data-number')
            audio[turn].pause();
            turn = turn1
            document.getElementById('start').style.display = 'flex'
            document.getElementById('pause').style.display = 'none'
            document.getElementsByClassName('cd')[0].classList.remove('animetion')
            time = audio[turn1].duration
            t = time
            m = parseInt(t / 60)
            s = parseInt(t % 60)
            document.getElementsByClassName('minn')[0].innerHTML = '0' + m
            document.getElementsByClassName('secc')[0].innerHTML = s
            _get()
            flag11++
        }
    }
    flagg++

})
// **************** end before key ****************

// **************** start next key ****************
_next.addEventListener('click', () => {
    if (flag11 == 0) {
        console.log('flag11 = 0');
        turn1 = index2 + 1
        datah2 = _slide[turn1].getAttribute('data-h2')
        datah3 = _slide[turn1].getAttribute('data-h3')
        dataimg = _slide[turn1].getAttribute('data-img')
        datamusic = _slide[turn1].getAttribute('data-music')
        datanumber = _slide[turn1].getAttribute('data-number')
        audio[turn].pause();
        turn = turn1
        document.getElementById('start').style.display = 'flex'
        document.getElementById('pause').style.display = 'none'
        document.getElementsByClassName('cd')[0].classList.remove('animetion')
        time = audio[turn1].duration
        t = time
        m = parseInt(t / 60)
        s = parseInt(t % 60)
        document.getElementsByClassName('minn')[0].innerHTML = '0' + m
        document.getElementsByClassName('secc')[0].innerHTML = s
        _get()
        flag11++
    } else {
        console.log('turn1 :' + turn1);
        console.log('flag11 :' + flag11);
        if ((turn1 + 1) >= 0) {
            turn1 = turn1 + 1
            datah2 = _slide[turn1].getAttribute('data-h2')
            datah3 = _slide[turn1].getAttribute('data-h3')
            dataimg = _slide[turn1].getAttribute('data-img')
            datamusic = _slide[turn1].getAttribute('data-music')
            datanumber = _slide[turn1].getAttribute('data-number')
            audio[turn].pause();
            turn = turn1
            document.getElementById('start').style.display = 'flex'
            document.getElementById('pause').style.display = 'none'
            document.getElementsByClassName('cd')[0].classList.remove('animetion')
            time = audio[turn1].duration
            t = time
            m = parseInt(t / 60)
            s = parseInt(t % 60)
            document.getElementsByClassName('minn')[0].innerHTML = '0' + m
            document.getElementsByClassName('secc')[0].innerHTML = s
            _get()
            flag11++
        }
    }
    flagg++

})
// **************** end next key ****************

// ******************************** search list
let _searchli = document.querySelectorAll('#searchdiv > ul > li')

_asearch.forEach((i) => {
    i.addEventListener('click', (event) => {
        event.preventDefault()
    })
})


_liearch.forEach((i) => {
    i.addEventListener('click', () => {
        datah2 = i.getAttribute('data-h2')
        datah3 = i.getAttribute('data-h3')
        dataimg = i.getAttribute('data-img')
        datanumber = i.getAttribute('data-number')
        _get()
        console.log('ahhhhhhhh');
    })
})




function _get() {
    _player.style.display = 'flex'
    _background.forEach((val)=>{
        val.style.display = 'none'
    })
    _background[turn].style.display = 'flex'
    document.getElementById('h2').innerText = datah2
    document.getElementById('h3').innerText = datah3
    document.getElementById('myimg').setAttribute('src', dataimg)
    document.getElementById('mycd').setAttribute('src', dataimg)
    // document.getElementById('mymusic1').setAttribute('src', datamusic)
    // document.getElementById('mymusic2').setAttribute('src', datamusic)
}