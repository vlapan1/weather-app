const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=1d2414090976e46d288293b7032551e3&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service')
        }
        else if(body.error) {
            callback('Unable to find location - latitude = ' + latitude + ', longitude = ' + longitude)
        }
        else{
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees.  It feels like ' + body.current.feelslike + ' degrees.  The humidity is ' + body.current.humidity + '%')
        }
    })
}


module.exports = forecast;