const searchBtn = document.querySelector('#search_btn');
searchBtn.addEventListener('click' , () => {
    let cityName = document.querySelector('#text_box');
    let cityNameValue = cityName.value ; 
    if(cityNameValue == '' ){
        //    
    }else{
        let key = `1dfe539e98f7157dfb7d64e2c8b009b1`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=${key}`;
    
        fetch(url)
        .then( res => res.json())
        .then( data => weatherDetails(data))
    }
    cityName.value = '' ;
})

function weatherDetails(data){
    // destructring
    const{ name , main , weather , wind} = data ;

    const city = document.querySelector('.city_name') ;
    const temp = document.querySelector('#temp') ;
    const Weather = document.querySelector('#weather');
    const humidity = document.querySelector('#humidity') ;
    const Wind = document.querySelector('#wind');

    // set data
    city.innerText = `Weather in ${name}` ;
    temp.innerText = `${main?.temp}°C`;
    humidity.innerText = `Humidity : ${main?.humidity}%`;
    Weather.innerHTML = ` <img src="http://openweathermap.org/img/w/${weather[0]?.icon}.png"></img> 
    <p>${weather[0]?.description}</p>
    `;
    Wind.innerText = `Wind : ${wind?.speed}km/h`
}
