"use strict";

var token = localStorage.getItem('token');

if (token) {
  console.log(token);
  window.location.href = "main.html";
} else {
  window.location.href = "index.html";
}

document.querySelector("#signin").addEventListener("submit", function (event) {
  event.preventDefault();
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var remember = document.getElementById("remember");
  var errors = [];

  if (email.value === "") {
    errors.push("email is missing");
  }

  if (password.value === "") {
    errors.push("password is missing");
  }

  if (errors.length > 0) {
    console.error(errors);
    window.location.href = "index.html";
  }

  email_ = email.value;
  password_ = password.value;
  fetchApi("login", email_, password_);
  console.log(email_);
  console.log(password_);
});

function fetchApi(endpoint, email, password) {
  console.log(email);
  console.log(password);
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  };
  fetch("https://reqres.in/api/".concat(endpoint), options).then(function (responce) {
    return responce.json();
  }).then(function (token) {
    if (token) {
      window.userToken = token;
      localStorage.setItem("token", token);
      window.location.href = "main.html";
    } else {
      window.location.href = "index.html";
    }
  });
}

document.querySelector("#register").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "regist.html";
});