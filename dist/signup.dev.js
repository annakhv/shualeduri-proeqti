"use strict";

var email = document.getElementById("email");
var password = document.getElementById("password");
var errors = [];
document.querySelector("#signup").addEventListener("submit", function (event) {
  event.preventDefault();

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
  fetchApi("register", email_, password_);
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
  }).then(function (data) {
    if (data.hasOwnProperty('token')) {
      console.log(data['token']);
      window.userToken = data['token'];
      localStorage.setItem("token", data['token']);
      window.location.href = "index.html";
    } else {
      console.log(data['error']);
      window.location.href = "regist.html";
    }
  });
}