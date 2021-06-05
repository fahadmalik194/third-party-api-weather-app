const geoCoding = require('./utils/geocode')
const forecast = require('./utils/forecast')

const command = process.argv[2]

if(!command){
    console.log('Please provide an address')
} else {
    geoCoding(command, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })   
}