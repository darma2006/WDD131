
if (input.value.trim() !== '') {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('_____');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent ='✖️';
    li.append(deleteButton);
    list.append(li);
    button.addEventListener('click', function(){
    });}
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
    input.value = '';
    input.focus();