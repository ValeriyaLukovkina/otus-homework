import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SelectionCityContainer from './components/Search/SelectionCity/SelectionCityContainer';
import Loading from './components/Loading/Loading';
import WeatherCurrentCityContainer from './components/WeatherCurrentCity/WeatherCurrentCityContainer';
// import axios from "axios";
// import options from '../../server';

const App = (props) => {
  //   const instance = axios.create({
  //     withCredentials: true,
  //     baseURL: 'https://api.gismeteo.net/v2/weather/current/',
  //     headers: {
  //         "X-Gismeteo-Token": '56b30cb255.3443075'
  //     }
  // })

  // instance.get(`?latitude=54.35&longitude=52.52`)
  //   .then(response => {
  //     console.log(response.data)})

  // axios.get('http://localhost:3000/api/city')
  // .then(response => {
  //   console.log(response.data)
  // });
  return (
    <>
        <div className="App">
          <div className='wrp'>
            <div>
              <BrowserRouter>
                <Routes>
                  < Route path='/' element={<SelectionCityContainer />} />
                  {/* <Route path='/search' element={<SelectionCity search={props.state.search} showInput={props.showInput} selectCityName={props.selectCityName} />} /> */}
                  <Route path={`/city/:par`} element={<WeatherCurrentCityContainer />} />
                  {/* <TimeTotal /> */}
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div >
    </>
  );
}


export default App;
