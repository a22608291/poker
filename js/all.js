
$(document).ready(function () {
  $(".cover").slideDown(1000).fadeOut(2000);;
  $(".main").delay(3000).fadeIn();
  $(".card").draggable({
    drag: function (event, ui) { }
  });
});





