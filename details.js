var dataNum=localStorage.getItem("clickedCountry")
var data=JSON.parse(localStorage.getItem("data"))
console.log(dataNum);
console.log(data)

writeCountryDetails(dataNum);



function writeCountryDetails(datanum) {
            console.log( data[datanum])
           document.querySelector("#country").innerHTML=data[datanum]['name'];
            document.querySelector("#title0").innerHTML="general information"
           addCountryData("capital city:", data[datanum]['capital'], "det");
           addCountryData("population number:", data[datanum]['population'], "det");
           addCountryData("area:", data[datanum]['area'], "det");
           addCountryData("region: ", data[datanum]['region'], "det");
           addCountryData("gini: ", data[datanum]['gini'], "det");
           addCountryData("numeric code: ", data[datanum]['numericCode'], "det");
           const borders=data[datanum]['borders'];
           addCountryDataList("country borders", borders, "det1", "title");
           const translations=data[datanum]['translations'];
           console.log(translations)
           addCountryDataList("translations", translations, "det0", "title1");
           currency=data[datanum]["currencies"]['0'];
           console.log(currency)
           addCountryDataList("currencies", currency, "det3", "title3");
           languages=data[datanum]['languages']['0'];
           console.log(data[datanum]["languages"]);
           addCountryDataList("languages", languages, "det2", "title2");
           blocks=data[datanum]['regionalBlocs']['0'];
           console.log(data[datanum]["regionalBlocs"]);
           addCountryDataList("Regional Blocks", blocks, "det4", "title4");
           
}


function addCountryData(description, inputvar, place){
           let li=document.createElement('li');
           li.innerHTML=`${description} ${inputvar}`;
           document.querySelector(`#${place}`).append(li);
}



function addCountryDataList(description, inputList, place, place1){
  console.log(inputList)
           document.querySelector(`#${place1}`).innerHTML=description;
          for (item in inputList){
           let li=document.createElement('li');
           if (item.length > 1){
           li.innerHTML=`${item}: ${inputList[item]}`;
           }else{
             li.innerHTML=` ${inputList[item]}`;
           }
           document.querySelector(`#${place}`).append(li);
        }
}