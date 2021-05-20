import React, { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import WeatherComponent from './WeatherComponent';

const defaultData = {
  main:{
    temp:'',
    feels_like:'',
    temp_min:'',
    temp_max:''
  },
  weather:[
    {
      description:'',
      icon:'',
    }
  ],
  name:''

} 


function App() {

  const [data,setData] = useState(defaultData);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');
  const [error,setError] = useState(false);

  const APIKEY = 'fa9cdabb16e154ca9fb69c7d9dc9f8e2';
  

  useEffect(()=>{

    if(query){
        const getWeather = async () => {
        console.log('use effect has run');
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKEY}&units=metric`);
        const responseJson = await response.json();
        if(response.ok){
          setData(responseJson);
          setError(false);
        }
        else{
          setError(true);
        };
      }
      getWeather();
    }
  },[query]);
  
  
  const handleTextChange = (e)=>{
    setSearch(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setQuery((query)=> {
      return search;
    });
    
  };
  


  const {name,main,weather} = data;
  

  

  return (
    <React.Fragment>
      <h1 style={{fontSize:'50px', color:'white',textAlign:'center'}}>Weather App</h1>

      <SearchComponent error={error} search={search} handleSubmit={handleSubmit} handleTextChange={handleTextChange} />

      {(query && !error) && <WeatherComponent name={name} main={main} weather={weather} />}
    
    </React.Fragment>
    
  );
}

export default App;
