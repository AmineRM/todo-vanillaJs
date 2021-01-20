const writingBar = document.forms["writingBar"]
const searchBar = document.forms["searchBar"]
const tasksDiv = document.querySelector("#tasks")


// Add Task
const taskTemplate = (text) => { return (
    `   <section class="task">
            <input type="checkbox" class="checkbox">
            <p class="text">${text}</p>
        </section>`
        )
    }
const addTask = () => {
    let value = writingBar.querySelector("#writingInput").value;
    if ( value != '' ) {
        tasksDiv.innerHTML += taskTemplate(value)
        writingBar.querySelector("#writingInput").value = '';
    }
}
writingBar.querySelector("label").addEventListener( 'click', addTask)
writingBar.addEventListener( 'submit', e => {
    e.preventDefault();
    addTask() 
})


// Check Checkbox
const check = e => (e.checked) ? e.checked = false : e.checked = true;
document.addEventListener( 'click', e => {
    if ( e.target.className == 'task') {
       check(e.target.querySelector("input"))
    }
})


// search
searchBar.querySelector("#searchInput").addEventListener( 'keyup', e => {
    let userValue = e.target.value.toLowerCase();
    const tasksList = document.querySelectorAll("#tasks .task");
    tasksList.forEach( task => {
        if (task.textContent.indexOf(userValue) == -1 ) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex'
        }
    })
})