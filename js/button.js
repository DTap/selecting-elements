var changeBg = document.querySelector('#change-bg');
var colors = ['pink', 'green', 'blue', 'purple', 'red'];
var click = 0;
changeBg.addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = colors[click];
  click++;
  if (click === colors.length){
    click = 0;
  }
});
