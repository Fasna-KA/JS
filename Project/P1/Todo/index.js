
//Pop uping the Add New List
function Add_item(){
    document.querySelector(".list").style.display="block"
    document.querySelector("div.container").style.filter="blur(10px)"
    }

//to hide - add new list,.p1 on click  
$(".b1,.b2").click(function () {
    $(".list,.p1").hide()
})

$(".b2").click(function () {
    document.querySelector("div.container").style.filter="blur(0px)"
})//to remove blurness in bg on close



//Cards

// function createObj(title) {
//     // document.getElementById("empty-list").style.display = "none";
//     var card = {
//         title: title,
//         id: Date.now(),
//         subtask
    
//     };
//     array.add(card);
//     createCard(card.id);

// }



const AddCard = document.querySelector(".b1")//.b1-Add button
const DivContainer = document.getElementById("div-container")

AddCard.addEventListener("click",AddNew)//AddNew-Ftn name


//to print inserted data in div child
const listText = document.getElementById('text');
const flex = document.getElementById('div-container');

// function togglelist() {
//     AddNew()
// }
function AddNew(){
    const listText = document.getElementById('text');
    const flex = document.getElementById('div-container'); 
    let card = document.createElement('div');
    card.classList.add('card');
    flex.appendChild(card);

    let Maincard = document.createElement('div');
    Maincard.classList.add('main');
    card.appendChild(Maincard);

    let ListTitle = document.createElement('h2');
    ListTitle.classList.add('title');
    ListTitle.style.color = 'tomato';
    ListTitle.innerHTML = `${listText.value} `;
    Maincard.appendChild(ListTitle);

    let line = document.createElement('hr');
    line.classList.add('line');
    card.appendChild(line);

    

    let Addplus = document.createElement("div")
    Addplus.id="task"
    Addplus.innerHTML=`<i  class="fa-solid fa-circle-plus addplus"></i>
    <i  class="fa-solid fa-trash-can trash"></i>`
    card.appendChild(Addplus);
    
    document.querySelector("div.container").style.filter="blur(0px)"

    ListTitle.addEventListener('click', myFunc)
    function myFunc() {
        document.querySelector("div.card").style.display="block"
   
    }
    
    
        
    // on click to newListTitle, make only that list active and all others inactive 
    // ListTitle.addEventListener('click', myFunc)
    // function myFunc(e) {
    //     e.target.parentElement.parentElement.classList.toggle('active');
    //     // document.querySelector(".card").style.display="block"
    //     let activeList = document.querySelectorAll('.card');
    //     for (let i = 0; i < activeList.length; i++) {
    //         if (activeList[i] !== e.target.parentElement.parentElement) {
    //             activeList[i].classList.add('inactive');
    //             container.classList.add('inactive');
    //             page2Contains.classList.add('active');

    //             let page2Title = document.createElement('h2');
    //             page2Title.innerHTML = `<span style="color:tomato;">${ListTitle.innerHTML}</span>`;
    //             page2BackBtn.after(page2Title);

    //             page2BackBtn.addEventListener('click', () => {
    //                 container.classList.remove('inactive');
    //                 activeList[i].classList.remove('inactive');
    //                 page2Contains.classList.remove('active');
    //                 page2Title.remove();

    //             });
    //             page2AddBtn.addEventListener('click', () => {
    //                 AddNew();
    //                 container.classList.remove('inactive');
    //                 activeList[i].classList.remove('inactive');
    //                 page2Contains.classList.remove('active');
    //                 page2Title.remove();
    //             });
    //             // page2Title.remove();
    //             // listText.value = '';
    //         }
    //     }
    //     console.log("i");
    //     // e.target.removeclass('title');
    //     $(e.target).removeClass('title');
    //     console.log("g");
    // }


};
console.log("ji");

//scratch completed tasks

flex.addEventListener('click', scratchTodo);

function scratchTodo(e) {
    let item = e.target;
    if (item.classList.contains('tick')) {

        // let id = item.id;
        // let newid = document.getElementById(id);
        item.parentElement.classList.toggle('me');

    }
}


// remove tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
        e.target.parentElement.parentElement.remove();
    }
});

// adding tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addplus')) {
        document.querySelector(".pop1").style.display="block"
        parentNode = e.target.parentNode.parentNode;
    }
});

const text1 = document.getElementById('text1');

newkid.addEventListener('click', () => {


    // let newTask = document.createElement('p');
    // newTask.classList.add('taskText');
    // parentNode.appendChild(newTask);

    let pTask = document.createElement('div');
    pTask.classList.add('pTask');

    pTask.innerHTML = `
        <span class="material-icons tick ">indeterminate_check_box</span>
        <p class="scratch" id="">${text1.value}</p>
        `;
    parentNode.appendChild(pTask);
    text1.value = '';
});





