const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http');

app.get('/ip-api', (req, res) => {
	let city = http.get('http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query', resp => {
	let data = '';
	// A chunk of data has been recieved.
	resp.on('data', (chunk) => {
		data += chunk;
	});
	// The whole response has been received. Print out the result.
	resp.on('end', () => {
		res.json({city: JSON.parse(data).city});
	});
});
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.json());


//Enable cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        return res.status(200).json({});
    }
    next();
});

const port = process.env.PORT || 5900;
app.listen(port, () => console.log(`Listening on port ${port}`));