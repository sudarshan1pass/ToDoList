const txtinp = document.getElementById("txtinp")
const btn = document.getElementById("btn")
const taskList = document.getElementById("taskList")
const taskArr = []
// CREATE
btn.addEventListener("click", function () {
    taskArr.push(txtinp.value)
    displayArr(taskArr)
})

// READ
function displayArr(arr) {
    taskList.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        taskList.innerHTML += `<li>${arr[i]}</li>`
    }
}