var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quote = document.querySelector("#quote");

const xhrButton = document.querySelector("#xhr");
const fetchButton = document.querySelector("#fetch");
const jqueryButton = document.querySelector("#jquery");
const axiosButton = document.querySelector("#axios");

xhrButton.addEventListener("click", function(){
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.onreadystatechange = function(){
    var text = JSON.parse(req.responseText)
    quote.innerText = text
  };
  req.send();
})

fetchButton.addEventListener("click", function(){
  fetch(url)
    .then(function(res) {
        return res.json();
     })
    .then(function(obj){
        quote.innerText = obj[0]
        return obj
    })
    .catch(function(err) {
    console.log(err);
  })
  
})

jqueryButton.addEventListener("click", function(){
  $.get(url, dataType="json")
  .done(function(res){
    quote.innerText = res
  })
  .fail(function(err){
    console.log(err)
  })
})

axiosButton.addEventListener("click", function(){
  axios.get(url)
  .then(function(res){
    quote.innerText = res.data[0]
  })
  .catch(function(err){
    console.log(err)
  })
})
