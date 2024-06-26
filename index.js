
let container = document.getElementById('listcontainer')
let text = document.getElementById('text');

function addElement(){
    element = document.createElement('button');
    elementHolder = document.createElement('div');

    elementHolder.classList.add('listHolder');
    element.classList.add('list');

    button = document.createElement('input');
    button.type = "checkbox";
    button.classList.add('check');

    

    elementHolder.appendChild(element);
    elementHolder.appendChild(button);
    container.appendChild(elementHolder);
    

   //adding text to the list and displaying it 

    let content = document.createTextNode(text.value);
    element.appendChild(content);
    text.value = "";
}

container.addEventListener("click",function(e){
    if (e.target.classList.contains('list')){
        e.target.classList.toggle('strike');
    }
    else if(e.target.classList.contains('check')){
        e.target.parentNode.remove();
    }
}, false);



