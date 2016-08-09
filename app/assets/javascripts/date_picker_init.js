var date_picker_init;
date_picker_init = function() {
  $('.datepicker').each(function(){
    $(this).datepicker();
  })
};

$(document).ready(date_picker_init);

