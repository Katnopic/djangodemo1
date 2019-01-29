function ValidateForm(){
    // validate question is not empty
    var question = document.forms["question_form"]["question"].value;
    if(question == ""){
        alert("Question must be filled out")
        return false;
    }

    // validate atleast 2 choices were inserted
    var choices_list_count = document.getElementById("choices_list").getElementsByTagName("li").length;
    if(choices_list_count < 2){
        alert("Atleast 2 choices must be added!")
        return false;
    }
    return true;

}