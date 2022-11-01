import axios from 'axios';

axios.get('./city.list.json')
.then (response => {
    console.log(response.data)
})

// https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json