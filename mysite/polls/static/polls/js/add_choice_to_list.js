function AddChoiceToList(){
    // get text from choice text field
    var text = document.getElementById("txt_choice").value;

    // validate text is not empty
    if(text=="")
    {
        alert("Choice cannot be empty!")
    }
    else
    {
        // construct a list element
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(text));

        // use appendChild and add it to the list of choices
        document.getElementById("choices_list").appendChild(li);

        // clear the choice text box
        document.getElementById("txt_choice").value = "";
    }
}