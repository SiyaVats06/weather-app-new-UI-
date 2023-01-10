const input = document.getElementById('input-city'),
	  city=document.getElementById('search-city'),
	  temperature=document.getElementById('temper'),
	  feels=document.getElementById('feels-like'),
	  cloud=document.getElementById('cloud'),
	  uv=document.getElementById('uv'),
	  windSpeed=document.getElementById('wind-speed'),
	  windDegree=document.getElementById('wind-degree'),
	  humidity=document.getElementById('humidity'),
	  CurrTemp=document.getElementById('curr-temp'),
	  CurrPlace=document.getElementById('city'),
	  description=document.getElementById('description'),
	  body=document.getElementById('outer'),
	  left=document.getElementById('left'),
	  CurrCountry=document.getElementById('country')

	city.addEventListener('click',()=>{
   var cityName=input.value;
   console.log(cityName.toUpperCase());
  if(cityName.toUpperCase()==='DELHI'){
	fectData('new-delhi')
  }
  else{
	
	fectData(cityName)
  }

 

	})




function fectData(cityName)
{

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c614364713mshc4398668c338812p16c1f7jsnc12f299affd7',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`, options)
	.then(response => response.json())
	.then((response) =>{ 
if(response.current.temp_c <= 5){
  body.classList.add('lessfive');
  left.classList.add('lessfive')
  body.classList.remove('morefive');
  left.classList.remove('morefive')
}
else{
	body.classList.remove('lessfive');
	left.classList.remove('lessfive')
	body.classList.add('morefive');
	left.classList.add('morefive')
}
	CurrTemp.innerText=response.current.temp_c +"°C";
	CurrPlace.innerText=response.location.name;
	description.innerText=response.current.condition.text;
	temperature.innerText=response.current.temp_c +"°C"
	feels.innerText=response.current.feelslike_c +"°C";
	cloud.innerText=response.current.cloud;
	uv.innerText=response.current.uv;
	windSpeed.innerText=response.current.wind_kph;
	windDegree.innerText=response.current.wind_degree;
	humidity.innerText=response.current.humidity;
	CurrCountry.innerText=response.location.country
		
		console.log(response)})
	.catch(err => console.error(err));


}
fectData("india")