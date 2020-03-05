/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
$(".onlybutton").click(function() {
    $(".imageplace").empty();
    var response = $(".type").val();
    fetch(`https://api.giphy.com/v1/gifs/search?q=`+response+`&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`)
      .then(function(gif) {
        return gif.json();
      })
      .then(function(data) {
        var first = data.data[(Math.floor((Math.random() * data.data.length)))].images.downsized_large.url
        var gifme =`<img src="`+first+`">`;
        $(".imageplace").append(gifme);
        $(".mail").click(function() {
  var topic = $(".gif10").val();
  var user = $(".picture").val();
  var response = $(".type").val();
  window.open("mailto:"+topic+"?Subject="+user+"&body="+first);
})
      })
});