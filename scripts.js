let priority = 'low';


const priorityButton = document.querySelector('.priorityButton');

priorityButton.addEventListener('click', () => { //changes button text on click and updates variable
    if(priorityButton.textContent.length < 3) {
        priorityButton.textContent += '!';
        priority = priorityButton.textContent === '!!' ? 'medium' : 'high';
    } else { 
        priorityButton.textContent = '!';
        priority = 'low';
     }
});

const inputBox = document.querySelector('.inputBox');
const userMessage = document.querySelector('.userMessage');

function submitTask(task, priority) {
    let list = document.querySelectorAll('.' + priority + 'Priority li'); //grabs Node list by priority to be iterated
    userMessage.style.visibility = 'hidden'; //hides text incase there was error displayed before

    let isRunning = true;
    
    list.forEach(element => {
        if (element.textContent === task) {
            userMessage.textContent = '*Already in list*';
            userMessage.style.visibility = 'visible';
            return isRunning = false;
        }
    });
    if (isRunning === false) { return; } // stops function here if value is already in list

    const newTask = document.createElement('li'); //creates new list element
    newTask.textContent = task;
    list = document.querySelector('.' + priority + 'Priority'); //changes list to ul element to append to

    list.appendChild(newTask); //adds task to list
    
}

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', () => submitTask(inputBox.value, priority));