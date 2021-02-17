"use strict";

fetchData();

function fetchData() {
  fetch("https://restcountries.eu/rest/v2/all").then(function (res) {
    return res.json();
  }).then(function (data) {
    window.data = data;
    localStorage.setItem("data", JSON.stringify(data));
    window.load = 1;
    window.onePage = 24;
    infiniteScroll(load);
  });
}

document.addEventListener('scroll', function (e) {
  if (window.innerHeight + window.scrollY == document.body.offsetHeight) {
    load++;

    if (Math.floor(data.length / onePage) + 1 > load) {
      document.getElementById("scroll").innerHTML = "loading..";
      setInterval(2000);
      infiniteScroll(load);
    } else {
      document.getElementById("scroll").innerHTML = "no more data to load";
      setInterval(6000);
      document.getElementById("scroll").classList.add("invisible");
    }
  }
});

function infiniteScroll(next) {
  var numPages = data.lenghth / onePage;
  end = next * onePage;
  start = end - onePage + 1;

  if (end > data.length) {
    end = data.length;
  }

  while (start <= end) {
    countryName = data[start]['name'];
    icon(start, "allResult");
    start++;
  }
}

function icon(number, place) {
  countryName = data[number]['name'];
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
      icon(number, "searchResult");
    }
  }
});