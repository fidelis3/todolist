//IEFE
(()=>{
    //state variables
let toDoListArray=[];
//ul variables
const form=document.querySelector(".form");
const input=form.querySelector("form_input");
const ul=document.querySelector(".toDoList");
//eventlisteners
form.addEventtListener("submit",(e)=>{
    //prevent default behaviour
    e.preventDefaultt()
    //give item a unique id
    let itemId=String(Date.now());
    //aasign input value
    let toDoItem=input.value;
    //pass id and items into functions
    addItemToDOM(itemId,toDoItem);
    addItemToArray(itemId,toDoItem);
    //clear the input box.(this is default behaviour  but we got rid of that)
    input.value="";
 })
    ul.addEventListener("click",(e)=>{
        let id=e.target.getAttribute("data.id");
        if(!id) return;//user clicked in something else
        // pass id through to functions
        removeItemFromDOM(id);
        removeIItemFromArray(id);

    })
    //functions
    function addItemToDOM(itemId,toDoItem){
        //create li
        const li=document.createElement("li");
        li.setAttribute("data-id",itemId);
        //add todoitem text to li
        li.innerText=toDoItem;
        //add li to the DOM
        ul.appendChild(li);
        }
    function addItemToArray(itemId,toDoItem){
        //add item to array as an object with an id so we can find and delete it later
        toDoListArray.push({itemId,toDoItem});
        console.log(toDoListArray);
    }
    function removeIItemFromDOM(Id){
        //get the list item by data id
        var li=document.querySelector('[data-id="'+id+'"]');
        //remove list item
        ul.removeChild(li);
    }
    function removeItemFromArray(id){
        //create a new todolistarray withh all the li's that don't match with the id
        toDoListArray=toDoListArray.filter((item)=>item.itemId !==id);
        console.log(toDoListArray);
    }    

})
