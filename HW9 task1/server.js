import express from "express";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { CityList } from "./models/cityList.js";
import cors from 'cors';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3001;
const db = 'mongodb+srv://Valeriya:qwerty123@cluster0.ixnbtnk.mongodb.net/Cities?retryWrites=true&w=majority';

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('connected db'))
    .catch(error => console.log(error));

// const server = http.createServer((req, res) => {
//     console.log('Server');
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'text/plain');

//     res.write('Hello world!');
//     res.end();
// })

// app.get("/citylist", async (request, response) => {
//     const users = await CityList.find({});

//     try {
//       response.send(cityList);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });
// export default app;

// const dbo = mongoose.connection;
// dbo.on("error", console.error.bind(console, "connection error: "));
// dbo.once("open", function () {
//     console.log("Connected successfully");
// });
app.use(cors());

app.get(`/citylist/:name`, cors(), (req, res) => {
    let reg = new RegExp('^' + req.params.name + '.*', 'i')
    CityList
        .clone()
        .find({ name: reg })
        .limit(10)
        .then(cityList => {
            return res.send(cityList)
        })
        .catch(error => {
            console.log(error);
            res.send('Ошибка')
        })
    // console.log(a)
})

app.get(`/citylist/getId/:id`, cors(), (req, res) => {
    CityList
        .clone()
        .find({ id: req.params.id })
        .limit(1)
        .then(cityList => {
            return res.send(cityList)
        })
        .catch(error => {
            console.log(error);
            res.send('Ошибка')
        })
    // console.log(a)
})


// mongoose.connect('mongodb://localhost:27017'
// , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }
// )
// .then(() => {
//     app.listen(3001, () => {
//         console.log('Server has been started')
//     })
// })

// app.use('/city', require('./routes/city.routes'))


// app.use(express.static(__dirname + '/weather/'));
// app.get('/api/city', (req, res) => {
//     res.status(200).json(city)
// })

// app.get('/1', (req, res) => {
//     res.sendFile(__dirname +  '/city.json')
// })


// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://meteostat.p.rapidapi.com/stations/meta',
//   params: {id: '10637'},
//   headers: {
//     'X-RapidAPI-Key': '9431e02896mshc2305e8a3c7768dp1b6d4cjsncb8733e95a9b',
//     'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
//   }
// };

// export default options;

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

app.listen(PORT, error => {
    error ? console.log(error) : console.log('listening port 3001  ')
})