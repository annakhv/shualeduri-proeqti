"use strict";

var dataNum = localStorage.getItem("clickedCountry");
var data = JSON.parse(localStorage.getItem("data"));
writeCountryDetails(dataNum);

function writeCountryDetails(datanum) {
  document.querySelector("#country").innerHTML = data[datanum]['name'];
  document.querySelector("#title0").innerHTML = "general information";
  flag = document.createElement('img');
  flag.setAttribute('src', data[datanum]['flag']);
  flag.setAttribute("height", "300px");
  document.querySelector("#flag").append(flag);
  addCountryData("capital city:", data[datanum]['capital'], "det");
  addCountryData("population number:", data[datanum]['population'], "det");
  addCountryData("area:", data[datanum]['area'], "det");
  addCountryData("region: ", data[datanum]['region'], "det");
  addCountryData("gini: ", data[datanum]['gini'], "det");
  addCountryData("numeric code: ", data[datanum]['numericCode'], "det");
  var borders = data[datanum]['borders'];
  addCountryDataList("country borders", borders, "det1", "title");
  var translations = data[datanum]['translations'];
  addCountryDataList("translations", translations, "det0", "title1");
  currencyList = data[datanum]["currencies"];

  for (currency in currencyList) {
    addCountryDataList("currencies", currencyList[currency], "det3", "title3");
  }

  languagesList = data[datanum]['languages'];

  for (languages in languagesList) {
    addCountryDataList("languages", languagesList[languages], "det2", "title2");
  }

  blocksLists = data[datanum]['regionalBlocs'];

  for (block in blocksLists) {
    addCountryDataList("Regional Blocks", blocksLists[block], "det4", "title4");
  }
}

function addCountryData(description, inputvar, place) {
  var li = document.createElement('li');
  li.innerHTML = "".concat(description, " ").concat(inputvar);
  document.querySelector("#".concat(place)).append(li);
}

function addCountryDataList(description, inputList, place, place1) {
  console.log(inputList);
  document.querySelector("#".concat(place1)).innerHTML = description;

  for (item in inputList) {
    var li = document.createElement('li');

    if (item.length > 1) {
      li.innerHTML = "".concat(item, ": ").concat(inputList[item]);
    } else {
      li.innerHTML = " ".concat(inputList[item]);
    }

    document.querySelector("#".concat(place)).append(li);
  }
}