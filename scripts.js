$(function(){

  for(var j=0; j<100; j++){
    $("#container").append('<div></div>');
    for(var i=0; i<100; i++){
      $("#container").append('<div class="little-box"></div>')
    }
  }


  //add some mousedown functionality
  var isDown = false;
  $(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });

  //on hover change color
  $('.little-box').on('mouseover', function() {
    if(isDown){
      $(this).addClass('white');
    }
  });

  $('#button').on('click', function(){
    $('.little-box').removeClass('white')
  })



});
