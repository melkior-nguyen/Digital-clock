//get time
function getTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = document.querySelector('.hour')
    var minute = document.querySelector('.minute')
    var second = document.querySelector('.second')
    var session = document.querySelector('.session')

    hour >= 12 ? hour.innerHTML=hours - 12: hour.innerHTML='0' +hours 
    hours < 10 ? hour.innerHTML='0'+ hours: hour.innerHTML=hours
    hours < 12 ? session.innerHTML = 'am' :session.innerHTML = 'pm'
    minutes < 10 ? minute.innerHTML='0'+ minutes: minute.innerHTML=minutes
    seconds < 10 ? second.innerHTML='0'+ seconds: second.innerHTML=seconds

}
setInterval(getTime, 10);
// change background
var btn = document.querySelector('.btn')
var background = document.querySelector('.background')
var mina = document.querySelector('.background.mina')
var sana = document.querySelector('.background.sana')
var momo = document.querySelector('.background.momo')
console.log(background===sana)
btn.addEventListener('click',handleBtn
)
function handleBtn(){
    if (background.className.match('mina')) {
        background.classList.remove('mina')
        background.classList.add('sana')
    } else if (background.className.match('sana')) {
        background.classList.remove('sana')
        background.classList.add('momo')
    } else {
        background.classList.remove('momo')
        background.classList.add('mina')
    }
}
//
// Set current time.
// setInterval(() => {

//     //getting hours, mins, seconds
//     let date=new Date(),
//     h= date.getHours(),
//     m= date.getMinutes(),
//     s= date.getSeconds()
//     ampm = 'AM'

//     //set session time
//     if (h>=12)
//         h=h-12
//         ampm ='PM'

//     //if hours value is 0, set it to 12
//     h=h==0 ? h=12:h
    
//     //if value less than 10, add 0 before 
//     h=h<10 ? '0'+h : h
//     m=m<10 ? '0'+m : m
//     s=s<10 ? '0'+s : s
    
//     // add to current time
//     currentTime.innerHTML = `${h}:${m}:${s}`
// }, 1000);