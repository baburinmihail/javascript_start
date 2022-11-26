const links = document.querySelector('#task_4')
let text = document.querySelector('#task_4').textContent

links.addEventListener('click', (event) => {
    // отменяю действие по умолчанию и переименовываю ссылку
    event.preventDefault()
    const name = prompt(text);
    if (name){
        document.querySelector('#task_4').textContent = name ;
    }
    else {
        document.querySelector('#task_4').textContent = ('ссылка');
    }

})