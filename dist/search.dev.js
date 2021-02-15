"use strict";

var data = JSON.parse(localStorage.getItem("data"));
var val = localStorage.getItem("val");
console.log(val);
result(val);
document.querySelector('#submit').addEventListener('click', function (event) {
  event.preventDefault();
  valu = document.querySelector("#search").value;
  result(valu);
});

function result(value) {
  result = [];

  for (number in data) {
    country = data[number]['name'];

    if (country.includes(val)) {
      result.push(number);
      icon(data[number]['name']);
    }
  }
}

function icon(countryName) {
  var li = document.createElement('li');
  li.setAttribute("id", number);
  var a = document.createElement('a');
  var button = document.createElement('button');
  a.href = number;
  li.innerHTML = countryName;
  a.appendChild(li);
  button.appendChild(a);
  document.querySelector("#searchResult").append(button);
}