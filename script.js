const baseUrl="https://api.openweathermap.org/data/2.5/weather";
const apiKey="ab4f24be145c9dfb8e638db28cdbb106";
const cardConatainer= document.getElementById("cards-container");
const objectArray=[];
let arrCities=[];
let imgArray=["Moon cloud fast wind.png","Moon cloud mid rain.png","Sun cloud angled rain.png","Tornado.png"];
let weatherArray=["Fast wind","Mid rain","Showers","Tornado"]
let c=0;

async function getCityWeather(cityName){
    
  url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  const cardObject= document.createElement("div");
 cardObject.className="city-Card";
 cardObject.innerHTML=``;
  const response = await fetch(url,{method:"GET"});
  const data= await response.json();
  console.log(data);
  cardObject.innerHTML=` <div class="part-1">
<div id="temp">${data.main.temp}°</div>
<div>
<div id="range">H:${data.main.temp_max}°  L:${data.main.temp_min}°</div>
<div id="city">${data.name}</div>
</div>
</div>
<div class="part-2">
<div class="image">
   <img src="${imgArray[c%4]}" alt="">
</div>
<div class="" id="weather-codn">${weatherArray[c%4]}</div>
</div>`;
c++;
cardConatainer.append(cardObject);
  cardObject.id=`${data.main.temp}`;
   objectArray.push(cardObject);
   objectArray.sort((a, b) => {
    const orderA = parseInt(a.id);
    console.log(a.id);
    const orderB = parseInt(b.id);
    return orderA - orderB;
  });



  objectArray.forEach(element => {
    cardConatainer.appendChild(element);
});
}

function getCityName(){
    
  const  searchbox=document.getElementById("search-box");
  var cityName=searchbox.value.trim();
    if(cityName===""){
        alert("Plese enter the city name");
    }
    const index = arrCities.indexOf(cityName);
   console.log(cityName);
   if(arrCities.length>0&&index!==-1){
    alert(`${cityName} details are aleready shown in table`)
   }
   else{
    arrCities.push(cityName);
   getCityWeather(cityName);}
  searchbox.value="";
    
}


;
