let priority = '!'


const priorityButton = document.querySelector(".priorityButton");

priorityButton.addEventListener('click', function() { //updates priority button text 
    let value = priorityButton.textContent;
    if (value === '!') {
        priorityButton.textContent = '!!';
        priority = '!!';
    } else if(value === '!!') {
        priorityButton.textContent = '!!!';
        priority = '!!!';
    } else if(value === '!!!') {
        priorityButton.textContent = '!';
        priority = '!';
    }

});

function getListInfo(priority) { //gets lists as arrays and
    let list = [];
    if(priority === '!') { //grabs array by priority
        list = Array.from(document.querySelector('.lowPriorityList ul')).querySelectorAll('li');
    } else if (priority === '!!') {
        list = Array.from(document.querySelector('.mediumPriorityList ul')).querySelectorAll('li');
    } else if (priority === '!!!') {
        list = Array.from(document.querySelector('.highPriorityList ul')).querySelectorAll('li');
    }
    
    
    // for(let i = 0; i < list.length; i++) { //iterates through array to check for duplicates
    //     for(let j = 0; j < list.length ; j++) {
    //         if(list[i] === list[j]) {

    //         }
    //     }
    // }
}


function submit(input, priority) {
    
    
}