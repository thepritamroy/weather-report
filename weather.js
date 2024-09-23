const apiKey = '69a524bcbf224cc0a6084227242209';

function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url).then((response)=>{
       return response.json();
    }).then((data)=>{
        
        const imageCondition = data.current.condition.text;
        let image= ''
        if(imageCondition==='Sunny' || imageCondition==='Clear'){
            image = 'sunny'
            document.querySelector('.js-container').classList.add('js-container-lightblue')
            document.querySelector('.js-container').classList.remove('js-container-blue')
            document.querySelector('.js-container').classList.remove('js-container-violet')
        }else if(imageCondition==='Light rain shower' || imageCondition==='Moderate rain' || imageCondition==='Patchy light rain' || imageCondition==='Light rain'){
            image='rainy'
            document.querySelector('.js-container').classList.add('js-container-blue')
            document.querySelector('.js-container').classList.remove('js-container-lightblue')
            document.querySelector('.js-container').classList.remove('js-container-violet')
        }else if(imageCondition==='Heavy rain at times'){
            image='rainthunder'
            document.querySelector('.js-container').classList.add('js-container-violet')
            document.querySelector('.js-container').classList.remove('js-container-lightblue')
            document.querySelector('.js-container').classList.remove('js-container-blue')
        } else{
            image='cloudybutsunny'
            document.querySelector('.js-container').classList.remove('js-container-lightblue')
            document.querySelector('.js-container').classList.remove('js-container-blue')
            document.querySelector('.js-container').classList.remove('js-container-violet')

        }
        
              
        const weather = `
                        <header>
                            <nav class="js-nav">
                                <i class="fa-solid fa-magnifying-glass js-fa-magnifying-glass"></i>
                                <h3 class="js-city-name">${data.location.name}</h3>
                                <i class="fa-solid fa-cloud"></i>
                            </nav>
                            <div class="search js-search">
                                <input type="text" placeholder="Enter city" class="js-city" id="city">
                                <button class="search-btn js-search-btn">Search</button>
                            </div>
                        </header>

                        <div id="weather">
                            <div class="weather-img">
                                <img height="170px" src="images/${image}.png" alt="cloud image">
                            </div>

                            <div class="temp">
                                <p>${data.current.temp_c} <i class="fa-solid fa-o" style="font-size: 10px;"></i></p>
                                <span>${data.current.condition.text}</span>
                            </div>

                            <div class="extra-info">
                                <div class="humadity weather-info">
                                    <p>Humidity</p>
                                    <p>${data.current.humidity}%</p>
                                </div>
                                <div class="speed weather-info">
                                    <p>Wind Speed</p>
                                    <p>${data.current.wind_kph}kmph</p>
                                </div>
                            </div>

                            <div class="footer">
                                Pritam Roy &copy; 2024
                            </div>
                        </div>
        `
        document.querySelector('.js-container').innerHTML = weather;

        document.querySelector('.js-fa-magnifying-glass').addEventListener('click',()=>{
            document.querySelector('.js-nav').classList.add('js-nav-disappear');
            document.querySelector('.js-search').classList.add('js-search-appear');
            document.querySelector('.js-city').classList.add('js-city-trans');
        
        })

        document.querySelector('.js-search-btn').addEventListener('click',()=>{

            const inputElement = document.querySelector('.js-city');
            const cityName = inputElement.value;
        
            getWeather(cityName);
        
            
            document.querySelector('.js-nav').classList.remove('js-nav-disappear')
            document.querySelector('.js-search').classList.remove('js-search-appear')
            document.querySelector('.js-city').classList.remove('js-city-trans')
        
        
         
        })

    }).catch(error => console.error('Error fetching the weather data:', error));
}


    document.querySelector('.js-fa-magnifying-glass').addEventListener('click',()=>{
        document.querySelector('.js-nav').classList.add('js-nav-disappear');
        document.querySelector('.js-search').classList.add('js-search-appear');
        document.querySelector('.js-city').classList.add('js-city-trans');

    })

    document.querySelector('.js-search-btn').addEventListener('click',()=>{

        const inputElement = document.querySelector('.js-city');
        const cityName = inputElement.value;

        getWeather(cityName);

        
        document.querySelector('.js-nav').classList.remove('js-nav-disappear')
        document.querySelector('.js-search').classList.remove('js-search-appear')
        document.querySelector('.js-city').classList.remove('js-city-trans')


    
    })


    
