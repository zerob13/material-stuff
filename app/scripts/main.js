$(function() {
  var state = 1;
  $('.md-button').on('click', function() {
    if (state === 0) {
      $('.md-button').addClass('left-arrow');
      state = 1;
    } else if(state===1){
      state = 2;
      $('.md-button').removeClass('left-arrow');
      $('.md-button').addClass('hook');
    }else{
      state=0; 
      $('.md-button').removeClass('hook');
    }
  });
})
