var important = true;

function toggleImportant() {
  console.log("Clicked!");

  if(important){
    $("#iconImportant").removeClass("far").addClass("fas");
    important = false;
    } else{
        $("#iconImportant").removeClass("fas").addClass("far");
        important = true;
    }
}
// function save(){
    
//     let title = $("#txtTitle").val();
//     let dueDate = $("#selDate").val();
//     let location = $("#txtLocation").val();
//     let priority = $("#selPriortiy").val();
//     let color = $("#selColor").val();
//     let contact = $("#txtContact").val();
//     let description = $("#txtDescription").val();
//     console.log("Saving Task");

// // hw finish for all fields
// // creat a new Task object
let task = new Task (title, important, dueDate, location, priority, color, contact, description);
// // console log the object
// }

function init() {
  console.log("Calendar System");
  

  // load data

  // hook events
  $("#iconImportant").click(toggleImportant);
  $("#btnSave").click(function() {
      save();
  });
  console.log();

  
}

window.onlaod = init();
