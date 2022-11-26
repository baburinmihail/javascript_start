const consoleLog = document.querySelector('#consoleLog');
const alert_mesage = document.querySelector('#alert_mesage');
const prompt_mesage = document.querySelector('#prompt_mesage')

//1-й скрипт
consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода инфформации в консоль');
    alert('Служит для вывода инфформации в консоль(сделал как в примере)')
})
//2-й скрипт
alert_mesage.addEventListener('click',()=>{
        alert('собственно сам alert')
})
//3-й скрипт, сделал if для красоты, работает и без него
prompt_mesage.addEventListener('click',()=>{
    const name = prompt('Введите свое имя');
    if (name) {
        document.querySelector('#prompt_mesage').innerHTML = `<b>${name}</b>, добро пожаловать на сайт!`;
    } else {
        document.querySelector('#prompt_mesage').innerHTML = '<b>Гость</b>, добро пожаловать на сайт!';
    }
})


