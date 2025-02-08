// import tippy from 'tippy.js';

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = []

// let tooltip = document.getElementById("tooltip")

saveBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value=""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        // listItems += "<li>"+myLeads[i] + "</li> "
        // listItems += "<li><a href ='"+ myLeads[i]+"' target = '_blank'>"+myLeads[i]+"</a></li>"
        listItems += `
        <li>
            <a target = '_blank' href= ${myLeads[i]}>
            ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}



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

