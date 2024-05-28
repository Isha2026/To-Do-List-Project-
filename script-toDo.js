let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort  = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')


function addItem() {
    let listItem = $('<li>' , {
        'class' :  'list-group-item' ,
        text : inpNewTask.val()
    })

    listItem.click(() => {
        $(listItem).toggleClass('done')
    })

    ulTasks.append(listItem)
    inpNewTask.val('')
}


function clearDone() {
    $('#ulTasks .done').remove()
}


function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
}


function  toggleInputBtn(valIsEmpty) {
    if(valIsEmpty) btnReset.prop('disabled' , false) 
    else  btnReset.prop('disabled' , true)
}



inpNewTask.keypress((e) => {
    //  write the task and for saving the task in the list , in stead of pressing ADD button just clicked enter that saves the task automatically

    //  which is having the code for everything -> so for enter the code is 13
    if(e.which == 13) addItem()
})

inpNewTask.on('input' , () => {
    toggleInputBtn(inpNewTask.val() != '') 
    // if it is != then function call as enabled 
    // if it is == then fucntion call as disabled
})


btnAdd.click(addItem)
//  clear the element / tasks added
btnReset.click(() => inpNewTask.val(' ')) 
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
