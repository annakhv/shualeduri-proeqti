"use strict";

fetchData();

function fetchData() {
  fetch("https://restcountries.eu/rest/v2/all").then(function (res) {
    return res.json();
  }).then(function (data) {
    for (number in data) {
      window.data = data;
      localStorage.setItem("data", JSON.stringify(data));
      countryName = data[number]['name'];
      icon(countryName, "allResult");
    }
  });
}

function icon(countryName, place) {
  var li = document.createElement('li');
  li.setAttribute("id", number);
  var a = document.createElement('a');
  var button = document.createElement('button');
  a.href = number;
  li.innerHTML = countryName;
  a.appendChild(li);
  button.appendChild(a);
  document.querySelector("#".concat(place)).append(button);
}

document.querySelector('#allResult').addEventListener('click', function (event) {
  event.preventDefault();
  var element = event.target;
  var datanum = element.getAttribute("id");
  localStorage.setItem('clickedCountry', datanum);
  window.location.href = "details.html";
});
document.querySelector('#searchResult').addEventListener('click', function (event) {
  event.preventDefault();
  var element = event.target;
  var datanum = element.getAttribute("id");
  localStorage.setItem('clickedCountry', datanum);
  window.location.href = "details.html";
});
result = [];
document.querySelector('#submit').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector("#allResult").classList.add('invisible');
  val = document.querySelector("#search").value;
  value = val.toLowerCase();
  console.log("print");

  for (number in data) {
    c = data[number]['name'];
    country = c.toLowerCase();

    if (country.includes(value)) {
      result.push(number);
      icon(data[number]['name'], "searchResult");
    }
  }
});