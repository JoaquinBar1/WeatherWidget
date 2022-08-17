import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./WeatherMainInfo"
import styles from "./weatherApp.module.css"
export default function WeatherApp () {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    },[])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name}`
    },[weather])


    const loadInfo = async(city = 'Neuquén') => {
        try{
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`)
            const json = await request.json()

            setWeather(json)
            console.log(json)
        }catch(error){

        }
    }

    const handleChangeCity = (city) => {
        setWeather(null)
        loadInfo(city)
    }
    return(
        <div className={styles.weatherAppContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <WeatherMainInfo weather={weather}/>
        </div>
    )
}