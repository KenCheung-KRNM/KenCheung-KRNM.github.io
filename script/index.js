$(document).ready(function(){
  // $('#header').load('./component/head-bar.html');
  $('#btn-about').on('click', () => {
    $('#btn-work').removeClass('active');
    $('#about-section').animate({
      top: '',
    }, 500);
  });
  $('#btn-work').on('click', () => {
    $('#btn-work').addClass('active');
    $('#about-section').animate({
      top: '-=1000px',
    }, 500);
  });
  $('#btn-skills').on('click', () => {
    $('#btn-skills').addClass('closed-btn');
    $('#btn-back').addClass('opend-btn');
    $('#photo-container').addClass('disable');
    $('#skills').removeClass('disable');
    $('#fake-line').addClass('active');
  }); 
  $('#btn-back').on('click', () => {
    $('#btn-skills').removeClass('closed-btn');
    $('#btn-back').removeClass('opend-btn');
    $('#photo-container').removeClass('disable');
    $('#skills').addClass('disable');
    $('#fake-line').removeClass('active');
  }); 
});