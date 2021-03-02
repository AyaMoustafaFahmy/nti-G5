const taskWrapper = document.querySelector('#taskWrapper')
const createNewElement=(parent, elemet, txt, classes)=>{
    myNewEle = document.createElement(elemet)
    parent.appendChild(myNewEle)
    if(txt!='') myNewEle.innerText = txt
    if(classes!='') myNewEle.classList = classes
    return myNewEle
}
const createDesign = (tasks)=>{
    tasks.forEach(task=>{
        const div = createNewElement(taskWrapper, 'div', '', 'col-4 my-3')
        const div2 = createNewElement(div, 'div', '','m-2 border border-danger boder-5 rounded')
        createNewElement(div2, 'h4', `title: ${task.title}`,'')
        let status = (task.completed)?'completed':'running'
        createNewElement(div2, 'h5', `status: ${status}`, 'text-danger')
      })
}
const getApiData = async() =>{
    try{
        //readable stream
        let data = await fetch('https://jsonplaceholder.typicode.com/todos')
        //json
        let tasks =await data.json()
        createDesign(tasks)
    }
    catch(e){
        createNewElement(taskWrapper, 'div', e.message, 'col-12 alert alert-danger')
    }
}

getApiData()
