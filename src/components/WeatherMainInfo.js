import styles from './weatherMainInfo.module.css'
export default function WeatherMainInfo({ weather }){

    return (
        <>
        <main className={styles.mainInfo}>
            <ul className={styles.locations}>
                <li className={styles.city}>
                    {weather?.location.name}
                </li>
                <li className={styles.country}>
                    {weather?.location.country}
                </li>
            </ul>
            <p className={styles.temp}>{weather?.current.temp_c}°</p>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} width= '150' alt={weather?.current.condition.text} /> 
            </div>
            </main>
            <iframe 
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10620.926711626063!2d${weather?.location.lon}6!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1660229765758!5m2!1ses-419!2sar`} loading="lazy" className={styles.map}></iframe>
        </>
    )
}