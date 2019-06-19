
$(document).ready( function() {
    let now = new Date();
    let today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    $('#datePicker').val(today);
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


   function previewFile(){
       let preview = document.querySelector('img'); //selects the query named img
       let file    = document.querySelector('input[type=file]').files[0]; //sames as here
       let reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()
