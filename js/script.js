/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$(".onlybutton").click(function() {
    var response = $(".type").val();
    fetch("https://api.giphy.com/v1/gifs/search?q="+response+"&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY")
      .then(function(gif) {
        return gif.json();
      })
      .then(function(response) {
        console.log(response);
        var image = response.data[2];
        console.log(image);
        $(".imageplace").append(`<img src = ${image}>`);
      })
});