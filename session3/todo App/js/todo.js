const readTasks=()=>{
    // let tasks = localStorage.getItem('tasks')
    // if (tasks==null) tasks = []
    // else tasks = JSON.parse(tasks)
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    return tasks
}

const writeTasks = (tasks) =>{
    // tasks = JSON.stringify(tasks)
    // localStorage.setItem('tasks', tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const createNewElement=(parent, elemet, txt, classes)=>{
    myNewEle = document.createElement(elemet)
    parent.appendChild(myNewEle)
    if(txt!='') myNewEle.innerText = txt
    if(classes!='') myNewEle.classList = classes
    return myNewEle
}
let tasks = document.querySelector('#tasks')

const createDesign=(MyTasks)=>{
    tasks.innerText=''
    if(MyTasks.length==0){
        createNewElement(tasks,'div','no tasks found', 'my-3 alert alert-danger')
    }
    else{
        MyTasks.forEach((element, i) => {
            element.status? c="bg-primary":c="bg-danger"
            div = createNewElement(tasks, 'div', '',
            `col-4 border border-success border-3 ${c}`)
            createNewElement(div, 'h5', element.title,'')
            createNewElement(div, 'p',element.content,'')
            createNewElement(div, 'h6', element.type,'')
            btn =  createNewElement(div, 'button', 'change status', 'btn btn-primary' )
            btn.addEventListener('click', function(e){changeMyStatus(i)})
        });
    }
}
function changeMyStatus(i){
    // if(MyTasks[i].status == false) MyTasks[i].status= true
    // else MyTasks[i].status=false
    MyTasks[i].status=!MyTasks[i].status
    writeTasks(MyTasks)
    createDesign(MyTasks)
}
document.querySelector('#addTask').addEventListener('submit', function(e){
    e.preventDefault()
    let task = {
        title: this.elements.taskTitle.value,
        content: this.elements.taskContent.value,
        type: this.elements.taskType.value,
        status: false
    }
    MyTasks.push(task)
    writeTasks(MyTasks)
    createDesign(MyTasks)
})

let MyTasks = readTasks()
createDesign(MyTasks)


