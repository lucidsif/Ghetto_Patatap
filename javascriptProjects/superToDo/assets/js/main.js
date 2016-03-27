console.log("connected");
var taskTable;

determineState();

//determine state and initialize
function determineState(){
    taskTable = localStorage.getItem("taskTable");
    taskTable = JSON.parse(taskTable);
    if(taskTable != null || taskTable != ""){
    $("tbody").append(taskTable);
    startTodo();
    }
    else{
        startTodo()
    }
}

function startTodo(){
    addNewTask();
    markToggle();
    deleteTask();
    hideInput();
}

 //add new task
function addNewTask(){
$("#insideTableContainer").on("keypress", function(e){
        if(e.which === 13){
        var taskHolder = $("#newTaskInput").val();
            $("#newTaskInput").val("");
            $("tbody").append("<tr><td>" + taskHolder + "</td></tr>");
            $("td").last().addClass("addedTask");
            $("td").last().append("<img src=\"assets/css/trash.png\">");
            $("img").last().addClass("hiddenTrash");
            updateWebTable();
                            }
                                }
                                    )
                                        } 
// mark or unmark as done
function markToggle(){
$("#insideTableContainer").on("click", function(e){
        if(e.target.className === "addedTask" || e.target.className === "addedTask donetd"){
           $(e.target).toggleClass("donetd");
           $(e.target).parent().toggleClass("donetr");
            updateWebTable();
           }
        }
    )
}

// delete task
function deleteTask(){
$("#insideTableContainer").on("click", function(e){
        if(e.target.className === "hiddenTrash"){
           $(e.target).fadeOut("fast", function(){
              $(e.target).parent().parent().remove();
               updateWebTable();
                    }   
                ) 
            }
        }
    )
}

//update webTable
function updateWebTable(){
taskTable = $("tbody").html();
localStorage.setItem("taskTable", JSON.stringify(taskTable));
}

//hide new task input
function hideInput(){
    $("#insideTableContainer").on("click", "#icon", function(){
        if($("#newTaskInput").attr("id") === "newTaskInput"){
        $("#newTaskInput").toggleClass("hideInput");
        }
            }
)
}