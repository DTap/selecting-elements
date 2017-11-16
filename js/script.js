//document.querySelector will return a single
//element matching the criteria within the ()
// document.querySelector('#header').textContent = "Hello Word" ;
//
// document.queryAll('.p-styles'.textContent = "Bahuh?" ;

//document.querySelectorAll will return an array like data structure which
//contains all elements that match the criteria passed with the ()
var header = document.querySelector('#header');
header.textContent = "Hello World";
var pStyles = document.querySelectorAll('.p-styles');

for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm p-styles" + (x + 1);
}

var lis = document.querySelectorAll('li');
//querySelector brings back one querySelectorAll brings bak all
for (var x = 0; x <lis.length; x++){
  lis[x].textContent = x + 1;
}
pStyles[0].textContent = "yo I'm first"

//another way to select an element by it's ID is document.getElementById
document.getElementById('second-header').textContent ="something";

var awesomes = document.getElementsByClassName('awesome');
console.log(awesomes);
awesomes.textContent = "I'm lost";

for(var x = 0; x < awesomes.length; x++){
  awesomes[x].textContent = x + 1;
}

var h3s = document.getElementsByTagName('h3');

for (var x = 0; x < h3s.length; x++) {
  h3s[x].textContent = "whatevers";

}
