let input = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');
let button = document.querySelector('button');

// Присваиюваю обработчик события на инпут
input.addEventListener('keyup', input_key=> {  
  duplicateField.textContent = input_key.target.value
});


// отменяю отправку формы,вывожу текст в консоль, 
//обнуляю текстовое поле и input
button.addEventListener('click',remove_p=>{
    remove_p.preventDefault()
    console.log(duplicateField.textContent)
    input.value = '';
    duplicateField.textContent = '';
});



