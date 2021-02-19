
fetchData()
window.loadNext=1;
window.onePage=16;
function fetchData()  {

 fetch("https://restcountries.eu/rest/v2/all")
    .then(function (res) {
     
  return res.json();
})

.then(function (data) {
  window.data=data;
  localStorage.setItem("data", JSON.stringify(data))
  console.log("print")
  infiniteScroll(loadNext)
});

}

console.log(loadNext);

document.addEventListener('scroll', function(e){
   if ((window.innerHeight+window.scrollY) == document.body.offsetHeight){
     loadNext++
     if (Math.floor(data.length/onePage)+1 >  loadNext) {
       document.getElementById("scroll").innerHTML="loading..";
       setInterval(2000);
       infiniteScroll(loadNext)
   } else{
      document.getElementById("scroll").innerHTML="no more data to load";
      setInterval(6000);
      document.getElementById("scroll").classList.add("invisible");
    }
       
   }

});


function infiniteScroll(next) {
      const numPages=data.lenghth/onePage;
       end=next*onePage;
       start=end-onePage+1;
      if (end > data.length){
         end =data.length;
      }
      while (start<= end){
      countryName= data[start]['name'];
      icon(start , "allResult");
      start++;
      }
}



function icon(number, place){
     countryName=data[number]['name']
    flag=document.createElement('img');
    flag.setAttribute('src', data[number]['flag']);
    flag.setAttribute("height", "120px");
    flag.setAttribute("width", "150px")
     const li=document.createElement('li');
      li.setAttribute("id", number);
      const a=document.createElement('a');
      const button=document.createElement('div')
      button.classList.add("button")
      a.href=number;
      li.innerHTML=countryName;
      a.appendChild(li);
      li.appendChild(flag);
     
     button.appendChild(a);
      document.querySelector(`#${place}`).append(button);


}



document.querySelector('#allResult').addEventListener('click', function(event){
  console.log(event)
           event.preventDefault()
           const element=event.target;
           const datanum=element.getAttribute("id");
           localStorage.setItem('clickedCountry', datanum)
           window.location.href ="details.html"   
           
});



document.querySelector('#searchResult').addEventListener('click', function(event){
           event.preventDefault()
           
           const element=event.target;
           const datanum=element.getAttribute("id");
           localStorage.setItem('clickedCountry', datanum)
           window.location.href ="details.html"   
           
});

 result=[]
document.querySelector('#submit').addEventListener('click', function(event){
                 event.preventDefault();
                 document.querySelector("#allResult").classList.add('invisible');
                 val=document.querySelector("#search").value;
                 value=val.toLowerCase();
                 console.log("print")
                for(number in data){
                   c= data[number]['name']; 
                    country=c.toLowerCase()
                  if (country.includes(value)){
                        result.push(number)
                        icon(number, "searchResult")
                    }

    }              
});


document.querySelector("#sign-out").addEventListener('click', function(event){
         event.preventDefault();
         localStorage.removeItem('remember');
         localStorage.removeItem('token');
         window.location.href ="index.html" 
         

});