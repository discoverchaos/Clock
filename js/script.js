const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hNum = document.querySelector('.hours'),
    mNum = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30
    sec.style = `transform: rotate(${second}deg); transition: 1s infinity linear;`
    min.style = `transform: rotate(${minutes}deg); transition: 1s infinity linear;`
    hour.style = `transform: rotate(${hours}deg); transition: 1s infinity linear;`
    hNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    mNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(() => clock(), 1000);
}

clock()


const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        tab(this, tabs[i])
    })
}
function tab(el, arr) {
    el.classList.add('active')
    arr.classList.add('active')
}

const watchBtn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minutesWatch = document.querySelector('.stopwatch__minutes'),
    hoursWatch = document.querySelector('.stopwatch__hours'),
    watchInfo = document.querySelector('.tabsLink__span');
    info = document.querySelector('.info')
watchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop'
        watchInfo.classList.add('active')
        let i = 0
        setTimeout(() => stopWatch(this, i), 0);
    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear'
        watchInfo.classList.remove('active')
        watchInfo.classList.add('active_clear')
        info.style = `font-size: 30px;`
        info.innerHTML = `${hoursWatch.innerHTML} : ${minutesWatch.innerHTML} : ${secondWatch.innerHTML}`
    } else {
        watchInfo.classList.remove('active_clear')
        this.innerHTML = 'start'
        secondWatch.innerHTML = 0
        minutesWatch.innerHTML = 0
        hoursWatch.innerHTML = 0
        info.innerHTML = ''
    }
})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            secondWatch.innerHTML = i
            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML == 0
                hoursWatch.innerHTML++
            } else {
                minutesWatch.innerHTML++
            }
        } else {
            i++
            secondWatch.innerHTML = i
        }
        setTimeout(() => stopWatch(el, i), 1000);
    }
}