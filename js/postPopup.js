$(document).ready(function() {
    //Pop-up на відведення мишкі.
    postPopup();

});


function postPopup() {
    var flag = true;

    $(window).mouseout(function(event) {
      if(event.pageY - $(window).scrollTop() < 1 && flag == true){
        flag = false;
        $('.screenLock').fadeIn(100, function() {
            $('.message').fadeIn(300).animate({"top": "150px"}, 300);
        });
      }
    });

	$('.screenLockClose').click(function() {
        $('.screenLock').fadeOut(300);
    });
}