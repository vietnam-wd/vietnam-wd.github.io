$(document).ready(function () {
  
  var $clickMe = $('.click-icon'),
    $card = $('.card');
  var $musicFrame = $('#musicFrame');
  $musicFrame.hide();
  const greeting = document.getElementById('greeting');
  $card.on('click', function () {
    greeting.style.display = 'block';
    $(this).toggleClass('is-opened');
    $clickMe.toggleClass('is-hidden');
    if ($musicFrame.is(":hidden")) {
      $musicFrame.show();
    } else {
      $musicFrame.hide();
    }
  });

  function initparticles() {
    hearts();
 }
 


 function hearts() {
    $.each($(".particletext.hearts"), function(){
       var heartcount = ($(this).width()/50)*5;
       for(var i = 0; i <= heartcount; i++) {
          var size = ($.rnd(60,120)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 
 jQuery.rnd = function(m,n) {
       m = parseInt(m);
       n = parseInt(n);
       return Math.floor( Math.random() * (n - m + 1) ) + m;
 }
 
 initparticles();
});
