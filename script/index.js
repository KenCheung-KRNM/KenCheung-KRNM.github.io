$(document).ready(function(){
  // $('#header').load('./component/head-bar.html');
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 3: 
      $('#photo-js').append('<img src="./pic/photo_2022-05-09_16-22-34.jpg">');
      break;
    case 2:
      $('#photo-js').append('<img src="./pic/photo_2022-05-15_01-28-33.jpg">');
      break;
    case 1:
      $('#photo-js').append('<img src="./pic/photo_2022-05-15_01-28-35.jpg">');
      break;
    default: break;
}
  $('#btn-about').on('click', () => {
    $('#btn-work').removeClass('active');
    $('#about-section').removeClass('inactive-section');
    $('#work-section').addClass('inactive-section');
    // $('#about-section').animate({
    //   top: '',
    // }, 500);
  });
  $('#btn-work').on('click', () => {
    $('#btn-work').addClass('active');
    $('#about-section').addClass('inactive-section');
    $('#work-section').removeClass('inactive-section');
    // $('#about-section').animate({
    //   top: '-=1000px',
    // }, 500);
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