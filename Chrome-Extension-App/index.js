// import tippy from 'tippy.js';
let myLeads = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const dltBtn = document.getElementById("delete-btn")

let localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))

if(localStorageLeads){
    myLeads = localStorageLeads
    renderLeads(myLeads)
}

function renderLeads(leads){
    let listItems = ""
    for(let i=0;i<leads.length;i++){
        // listItems += "<li>"+myLeads[i] + "</li> "
        // listItems += "<li><a href ='"+ myLeads[i]+"' target = '_blank'>"+myLeads[i]+"</a></li>"
        listItems += `
        <li>
            <a target = '_blank' href= ${leads[i]}>
            ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

// let tooltip = document.getElementById("tooltip")

saveBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
})

dltBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads) 
})




// This is the code for showing a tooltip over the Save Input Button

// button.addEventListener("mouseover", () => {
//     tooltip.style.display = "block";
//     tooltip.style.left = button.offsetLeft + "px";
//     tooltip.style.top = button.offsetTop + button.offsetHeight + 5 + "px";
// })
// button.addEventListener("mouseout", () => {
//     tooltip.style.display = "none";
//   });

// tippy('#save-btn', {
//   content: 'This is the tooltip',
// });

