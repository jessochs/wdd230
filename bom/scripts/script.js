
const button = document.querySelector("button");

const list = document.querySelector("#list");
button.addEventListener("click", addScripture);
    
//do I need to put the button inside the funtion?);

function addScripture()
{

    
    let scripture = document.createElement('li');
    let chapter = document.querySelector("#favchap").value;
    //scripture.textContent = 
    let del = document.createElement("button");
    del.textContent = 'X';
    
    if (chapter != "") {

        //scripture.appendChild(document.createTextNode(chapter));
        scripture.textContent = chapter;

        scripture.appendChild(del);

        list.appendChild(scripture);

    }
    else {
        alert("A chapter needs to be added")
    }
    
    del.addEventListener("click", ()=> {
        list.removeChild(scripture)
    })

}

//scripture.append(deleteButton);


// function setFocus()
// {
//     document.querySelector("input").focus();
// }
//how do you send focus to an input element?
//what does change the input value to nothing or the empty string to clean up the interface for the user mean?
