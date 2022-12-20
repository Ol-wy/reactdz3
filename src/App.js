import { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')

  const fetchWeather = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=2e8560268f45967e6171bccbf1445e9c&q=${city}&units=matric`)
    .then((response) =>  response.json())
    .then((data) => {console.log(data)
      setWeather(data)
    })
    .catch((err) => console.log(err))

  }

  const searchHandler = (e) => {
    setCity(e.target.value)
  }

  return (

    <div className='head'>
      <form onSubmit={fetchWeather}>
          <input  type="text" onChange={searchHandler} placeholder='Введите город'/>
       <button type='submit' onClick={fetchWeather} className='btn'>get weather</button>
      </form>
     
       <div className='info'>
         <h1 className='city'>Город:{weather?.name }</h1>
        <h1 className='temp'>{(weather?.main.temp) - 273}°С</h1>
        <h1 className='temp__feels'>Ощущается как {(weather?.main.feels_like) - 273}°С</h1>

       
       </div>
         
    </div>
    
  );
}

export default App;