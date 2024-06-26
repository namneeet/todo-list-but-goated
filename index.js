
let container = document.getElementById('listcontainer')
let text = document.getElementById('text');

function addElement(){
    element = document.createElement('div');
    elementHolder = document.createElement('div');

    elementHolder.classList.add('listHolder');
    element.classList.add('list');

    button = document.createElement('input');
    button.type = "checkbox";
    button.classList.add('check');

    elementHolder.appendChild(button);
    elementHolder.appendChild(element);
    container.appendChild(elementHolder);
    

   //adding text to the list and displaying it 

    let content = document.createTextNode(text.value);
    element.appendChild(content);
    text.value = "";
}