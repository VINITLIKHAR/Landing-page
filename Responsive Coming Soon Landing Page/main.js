// Set your target launch date here (month day, year hh:mm:ss)
const countDate = new Date('nov 31, 2026 00:00:00').getTime();

const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

function pad(num) {
    return String(num).padStart(2, '0');
}

function countDown() {
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap <= 0) {
        dayEl.innerText = '00';
        hourEl.innerText = '00';
        minuteEl.innerText = '00';
        secondEl.innerText = '00';
        clearInterval(timer);
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = pad(d);
    hourEl.innerText = pad(h);
    minuteEl.innerText = pad(m);
    secondEl.innerText = pad(s);
}

countDown();
const timer = setInterval(countDown, 1000);