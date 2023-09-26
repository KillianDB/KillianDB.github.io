// import axios from 'axios'
// import './App.css'
// import { Fragment, useState } from 'react';
// import DiaAtual from './Components/DiaAtual';

// function App() {

//   const [inputValue, setInputValue] = useState('');

//   const urlApi1 = `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&format=json&apiKey=e72a5844973a4abba1de87bfac36415f`;
 

//   axios.get(urlApi1)
//     .then(response1 => {
//       console.log("response1", response1.data)
//       const latitude = response1.data.results[0].lat;
//       const longitude = response1.data.results[0].lon;
//       const urlApi2 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum&timezone=auto `;

//       axios.get(urlApi2)
//         .then(response2 => {
//           console.log(latitude, longitude);
//           console.log("response2", response2.data)
//           const temperature = response2.data.hourly.temperature_2m;
//           const min = response2.data.daily.temperature_2m_min[0];
//           const max = response2.data.daily.temperature_2m_max[0];
//           const sunrise = response2.data.daily.sunrise[0];
//           const sunset = response2.data.daily.sunset[0];
//           const rain = response2.data.hourly.rain[0];
//           const precipitation = response2.data.hourly.precipitation_probability[0];
//           const wind = response2.data.hourly.windspeed_10m[0];
//           const tempAparente = response2.data.hourly.apparent_temperature[0];
//           const maxDaily = response2.data.daily.temperature_2m_max;
//           const minDaily = response2.data.daily.temperature_2m_min;
//           const rainDaily = response2.data.daily.rain_sum[0];
//           const cloudcover = response2.data.hourly.cloudcover[0];
//           console.log("temperature", temperature);
//           console.log("temperature", temperature[6]);
//           console.log("temperature", temperature[12]);
//           console.log("temperature", temperature[23]);
//           console.log("min", min);
//           console.log("max", max);
//           console.log("sunrise", sunrise);
//           console.log("sunset", sunset);
//           console.log("rain", rain);
//           console.log("precipitation", precipitation);
//           console.log("wind", wind);
//           console.log("tempAparente", tempAparente);
//           console.log("maxDaily", maxDaily[0]);
//           console.log("maxDaily", maxDaily[6]);
//           console.log("minDaily", minDaily[0]);
//           console.log("minDaily", minDaily[6]);
//           console.log("rainDaily", rainDaily);
//           console.log("cloudcover", cloudcover);
//         })
//         .catch(error => {
//           console.error('Erro ao buscar dados da API:', error);
//         });

//     })
//     .catch(error => {
//       console.error('Erro ao buscar dados da API:', error);
//     });



//   return (
//     <Fragment>
//     <div>
//       <input className='city' placeholder='Cidade' name="cidade" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}></input>
//     </div>
//     <DiaAtual/>
//     </Fragment>
//   )
// }

// export default App

import './App.css'
import { Fragment } from 'react';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import LinguageContent from './Components/LinguageContent';
import ProjectContent from './Components/ProjectContent';

function App() {
  return (
    <Fragment>
      <Header/>
<AboutMe/>
    <LinguageContent linguage={linguage}/>
<ProjectContent project={project}/>
<div className='contact'>
<h3 className='email'>killiandomingues57@gmail.com</h3>
<h3 className='whatsapp'>+5551983330333</h3>
<a href='github.com/killiandb' target='_blank'>Github</a>
  <a href='linkedin.com.br/in/killiandb' target='_blank'>Linkedin</a>
  </div>
    </Fragment>
  )
}

export default App
